import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ResumePDF, SKILL_ICON_COLOR, LINK_ICON_COLOR } from "./ResumePDF";
import { Download, Link as LinkIcon } from "lucide-react";
import { DATA } from "@/data/resume";
import { rasterizeIcons } from "@/lib/rasterize-icons";

const linkClass =
  "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer";

export function ResumeDownloadButton() {
  // Icons are rasterized once up front (react-pdf can't draw our SVG components).
  const [icons, setIcons] = useState<{ skills: Record<string, string>; link?: string } | null>(null);

  useEffect(() => {
    Promise.all([
      rasterizeIcons(DATA.skills, SKILL_ICON_COLOR),
      rasterizeIcons([{ name: "link", icon: LinkIcon }], LINK_ICON_COLOR),
    ])
      .then(([skills, link]) => setIcons({ skills, link: link.link }))
      .catch(() => setIcons({ skills: {} }));
  }, []);

  if (!icons) {
    return (
      <span className={linkClass} aria-busy="true">
        <Download className="size-3.5" />
        <span>Generating…</span>
      </span>
    );
  }

  return (
    <PDFDownloadLink
      document={<ResumePDF skillIcons={icons.skills} linkIcon={icons.link} />}
      fileName="joe-ferrucci-resume.pdf"
      className={linkClass}
    >
      {({ loading }) => (
        <>
          <Download className="size-3.5" />
          <span>{loading ? "Generating…" : "Download Resume"}</span>
        </>
      )}
    </PDFDownloadLink>
  );
}
