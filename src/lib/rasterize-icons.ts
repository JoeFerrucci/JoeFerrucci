import { createElement, type ComponentType } from "react";

// react-pdf can't render our SVG React icon components, so we rasterize them
// in the browser to PNG data URLs, which react-pdf's <Image> accepts.

const SIZE = 64; // px; drawn at ~8pt in the PDF, so this stays crisp in print

async function svgMarkupToPng(markup: string, color: string): Promise<string> {
  const doc = new DOMParser().parseFromString(markup, "image/svg+xml");
  const svg = doc.documentElement;
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("width", String(SIZE));
  svg.setAttribute("height", String(SIZE));
  svg.setAttribute("color", color); // resolves `currentColor` (lucide + monochrome icons)

  const img = new Image();
  img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    new XMLSerializer().serializeToString(svg),
  )}`;
  await img.decode();

  const canvas = document.createElement("canvas");
  canvas.width = SIZE;
  canvas.height = SIZE;
  canvas.getContext("2d")!.drawImage(img, 0, 0, SIZE, SIZE);
  return canvas.toDataURL("image/png");
}

/** Returns a map of item name → PNG data URL. Icons that fail are skipped. */
export async function rasterizeIcons(
  items: readonly { name: string; icon?: ComponentType<{ className?: string }> }[],
  color: string,
): Promise<Record<string, string>> {
  const { renderToStaticMarkup } = await import("react-dom/server");
  const entries = await Promise.all(
    items.map(async ({ name, icon }) => {
      if (!icon) return null;
      try {
        const png = await svgMarkupToPng(renderToStaticMarkup(createElement(icon)), color);
        return [name, png] as const;
      } catch {
        return null;
      }
    }),
  );
  return Object.fromEntries(entries.filter((e) => e !== null));
}
