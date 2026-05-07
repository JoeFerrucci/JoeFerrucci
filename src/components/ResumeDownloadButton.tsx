import { PDFDownloadLink } from "@react-pdf/renderer";
import { ResumePDF } from "./ResumePDF";
import { Download } from "lucide-react";

export function ResumeDownloadButton() {
  return (
    <PDFDownloadLink
      document={<ResumePDF />}
      fileName="joe-ferrucci-resume.pdf"
      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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
