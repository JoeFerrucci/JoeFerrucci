import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ResumePDF, SKILL_ICON_COLOR } from "./ResumePDF";
import { Download } from "lucide-react";
import { DATA } from "@/data/resume";
import { rasterizeIcons } from "@/lib/rasterize-icons";

const linkClass =
  "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer";

export function ResumeDownloadButton() {
  // Skill icons are rasterized once up front so the PDF matches the site's chips.
  const [skillIcons, setSkillIcons] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    rasterizeIcons(DATA.skills, SKILL_ICON_COLOR)
      .then(setSkillIcons)
      .catch(() => setSkillIcons({}));
  }, []);

  if (!skillIcons) {
    return (
      <span className={linkClass} aria-busy="true">
        <Download className="size-3.5" />
        <span>Generating…</span>
      </span>
    );
  }

  return (
    <PDFDownloadLink
      document={<ResumePDF skillIcons={skillIcons} />}
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
