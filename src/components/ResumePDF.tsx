import { Document, Page, Text, View, Image, Link, StyleSheet, Font } from "@react-pdf/renderer";
import { DATA } from "@/data/resume";

// Inter font via Vite asset URLs (woff2 supported in react-pdf v4)
import inter400 from "@fontsource/inter/files/inter-latin-400-normal.woff?url";
import inter500 from "@fontsource/inter/files/inter-latin-500-normal.woff?url";
import inter600 from "@fontsource/inter/files/inter-latin-600-normal.woff?url";
import inter700 from "@fontsource/inter/files/inter-latin-700-normal.woff?url";

Font.register({
  family: "Inter",
  fonts: [
    { src: inter400, fontWeight: 400 },
    { src: inter500, fontWeight: 500 },
    { src: inter600, fontWeight: 600 },
    { src: inter700, fontWeight: 700 },
  ],
});

// Disable mid-word hyphenation
Font.registerHyphenationCallback((word) => [word]);

function stripMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1");
}

// ── Design tokens ──────────────────────────────────────────
const NAVY        = "#0f172a";
const ACCENT      = "#3b82f6";
const ACCENT_PALE = "#eff6ff";
const ACCENT_RING = "#bfdbfe";
const ACCENT_DARK = "#1d4ed8";
const PURPLE      = "#7c3aed";
const WHITE       = "#ffffff";
const DARK        = "#1e293b";
const BODY        = "#334155";
const MUTED       = "#64748b";
const RULE        = "#e2e8f0";

const H_PAD = 48;
const V_PAD = 38;

const FEATURED_PROJECTS = ["BookLeaf", "TrailMix", "Hodu Coffee"];

// ── Styles ─────────────────────────────────────────────────
const s = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 8.5,
    color: BODY,
    backgroundColor: WHITE,
    paddingHorizontal: H_PAD,
    paddingVertical: V_PAD,
  },
  // Header — negative margins so it bleeds to page edges
  header: {
    marginHorizontal: -H_PAD,
    marginTop: -V_PAD,
    marginBottom: 20,
    paddingHorizontal: H_PAD,
    paddingTop: 30,
    paddingBottom: 24,
    backgroundColor: NAVY,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 66,
    height: 66,
    borderRadius: 33,
    marginRight: 18,
    flexShrink: 0,
  },
  headerText: {
    flex: 1,
  },
  headerName: {
    fontSize: 20,
    fontWeight: 700,
    color: WHITE,
    letterSpacing: 0.2,
    marginBottom: 2,
  },
  headerTitle: {
    fontSize: 9.5,
    fontWeight: 500,
    color: ACCENT,
    marginBottom: 9,
  },
  headerContactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    rowGap: 2,
  },
  headerContactLink: {
    fontSize: 7.5,
    color: "#94a3b8",
    textDecoration: "none",
  },
  headerContactText: {
    fontSize: 7.5,
    color: "#94a3b8",
  },
  headerDot: {
    fontSize: 7.5,
    color: "#475569",
    marginHorizontal: 4,
  },
  // Section headers
  sectionWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 9,
  },
  sectionTitle: {
    fontSize: 7.5,
    fontWeight: 700,
    color: MUTED,
    letterSpacing: 1.6,
    marginRight: 8,
  },
  sectionRule: {
    flex: 1,
    height: 0.5,
    backgroundColor: RULE,
  },
  // Summary
  summaryText: {
    fontSize: 8.5,
    color: BODY,
    lineHeight: 1.65,
    marginBottom: 5,
  },
  // Work entries
  workEntry: {
    flexDirection: "row",
    marginBottom: 10,
  },
  workBar: {
    width: 2.5,
    borderRadius: 2,
    backgroundColor: ACCENT,
    marginRight: 10,
    flexShrink: 0,
    marginTop: 1,
  },
  workBody: {
    flex: 1,
  },
  workTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  workNameRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingRight: 8,
  },
  workCompany: {
    fontSize: 9.5,
    fontWeight: 700,
    color: DARK,
    marginRight: 5,
  },
  workBadge: {
    fontSize: 7,
    fontWeight: 500,
    color: ACCENT_DARK,
    backgroundColor: ACCENT_PALE,
    borderWidth: 0.5,
    borderColor: ACCENT_RING,
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 1.5,
  },
  workDates: {
    fontSize: 7.5,
    color: MUTED,
    flexShrink: 0,
  },
  workTitle: {
    fontSize: 8,
    fontWeight: 500,
    color: MUTED,
    marginBottom: 4,
  },
  workDesc: {
    fontSize: 8,
    color: BODY,
    lineHeight: 1.6,
    marginBottom: 3,
  },
  workSkills: {
    fontSize: 7,
    color: MUTED,
    lineHeight: 1.5,
  },
  // Education
  eduEntry: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  eduLeft: {
    flex: 1,
    paddingRight: 8,
  },
  eduSchool: {
    fontSize: 9.5,
    fontWeight: 700,
    color: DARK,
    marginBottom: 2,
  },
  eduDegree: {
    fontSize: 8,
    color: MUTED,
  },
  // Skills chips
  skillsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  skillChip: {
    backgroundColor: ACCENT_PALE,
    borderWidth: 0.5,
    borderColor: ACCENT_RING,
    borderRadius: 4,
    paddingHorizontal: 7,
    paddingVertical: 2.5,
  },
  skillChipText: {
    fontSize: 7.5,
    fontWeight: 500,
    color: ACCENT_DARK,
  },
  // Projects
  projectEntry: {
    flexDirection: "row",
    marginBottom: 9,
  },
  projectBar: {
    width: 2.5,
    borderRadius: 2,
    backgroundColor: PURPLE,
    marginRight: 10,
    flexShrink: 0,
    marginTop: 1,
  },
  projectBody: {
    flex: 1,
  },
  projectTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  projectTitle: {
    fontSize: 9.5,
    fontWeight: 700,
    color: DARK,
  },
  projectDates: {
    fontSize: 7.5,
    color: MUTED,
    flexShrink: 0,
  },
  projectDesc: {
    fontSize: 8,
    color: BODY,
    lineHeight: 1.6,
  },
});

// ── Sub-components ─────────────────────────────────────────

function Section({ title }: { title: string }) {
  return (
    <View style={s.sectionWrap}>
      <Text style={s.sectionTitle}>{title.toUpperCase()}</Text>
      <View style={s.sectionRule} />
    </View>
  );
}

// ── Document ───────────────────────────────────────────────

export function ResumePDF() {
  const avatarUrl = `${window.location.origin}${DATA.avatarUrl}`;
  const summaryParagraphs = stripMarkdown(DATA.summary)
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  const featuredProjects = DATA.projects.filter((p) =>
    FEATURED_PROJECTS.includes(p.title)
  );

  return (
    <Document>
      <Page size="LETTER" style={s.page}>

        {/* ── Header ── */}
        <View style={s.header}>
          <Image src={avatarUrl} style={s.avatar} />
          <View style={s.headerText}>
            <Text style={s.headerName}>{DATA.name}</Text>
            <Text style={s.headerTitle}>{DATA.description}</Text>
            <View style={s.headerContactRow}>
              <Text style={s.headerContactText}>{DATA.location}</Text>
              <Text style={s.headerDot}>·</Text>
              <Link src={`mailto:${DATA.contact.email}`} style={s.headerContactLink}>
                {DATA.contact.email}
              </Link>
              <Text style={s.headerDot}>·</Text>
              <Link src={DATA.contact.social.LinkedIn.url} style={s.headerContactLink}>
                linkedin.com/in/joeferrucci
              </Link>
              <Text style={s.headerDot}>·</Text>
              <Link src={DATA.contact.social.GitHub.url} style={s.headerContactLink}>
                github.com/JoeFerrucci
              </Link>
              <Text style={s.headerDot}>·</Text>
              <Link src={DATA.url} style={s.headerContactLink}>
                {DATA.url.replace("https://", "")}
              </Link>
            </View>
          </View>
        </View>

        {/* ── About ── */}
        <Section title="About" />
        {summaryParagraphs.map((para, i) => (
          <Text key={i} style={s.summaryText}>{para}</Text>
        ))}

        {/* ── Experience ── */}
        <Section title="Experience" />
        {DATA.work.map((w) => (
          <View key={w.company + w.start} style={s.workEntry} wrap={false}>
            <View style={s.workBar} />
            <View style={s.workBody}>
              <View style={s.workTopRow}>
                <View style={s.workNameRow}>
                  <Text style={s.workCompany}>{w.company}</Text>
                  {w.badges.length > 0 && (
                    <Text style={s.workBadge}>{w.badges.join(", ")}</Text>
                  )}
                </View>
                <Text style={s.workDates}>
                  {w.start} – {w.end ?? DATA.sections.work.presentLabel}
                </Text>
              </View>
              <Text style={s.workTitle}>{w.title}</Text>
              <Text style={s.workDesc}>{w.description}</Text>
              {"skills" in w && w.skills.length > 0 && (
                <Text style={s.workSkills}>
                  {(w.skills as readonly string[]).join(" · ")}
                </Text>
              )}
            </View>
          </View>
        ))}

        {/* ── Education ── */}
        <Section title="Education" />
        {DATA.education.map((e) => (
          <View key={e.school} style={s.eduEntry} wrap={false}>
            <View style={s.eduLeft}>
              <Text style={s.eduSchool}>{e.school}</Text>
              <Text style={s.eduDegree}>{e.degree}</Text>
            </View>
            {(e.start || e.end) && (
              <Text style={s.workDates}>
                {e.start}{e.start && e.end ? " – " : ""}{e.end}
              </Text>
            )}
          </View>
        ))}

        {/* ── Skills ── */}
        <Section title="Skills" />
        <View style={s.skillsWrap}>
          {DATA.skills.map((sk) => (
            <View key={sk.name} style={s.skillChip}>
              <Text style={s.skillChipText}>{sk.name}</Text>
            </View>
          ))}
        </View>

        {/* ── Projects ── */}
        <Section title="Projects" />
        {featuredProjects.map((p) => (
          <View key={p.title} style={s.projectEntry} wrap={false}>
            <View style={s.projectBar} />
            <View style={s.projectBody}>
              <View style={s.projectTopRow}>
                <Text style={s.projectTitle}>{p.title}</Text>
                <Text style={s.projectDates}>{p.dates}</Text>
              </View>
              <Text style={s.projectDesc}>{p.description}</Text>
            </View>
          </View>
        ))}

      </Page>
    </Document>
  );
}
