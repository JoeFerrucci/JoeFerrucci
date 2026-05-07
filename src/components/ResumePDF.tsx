import { Document, Page, Text, View, Image, Link, StyleSheet, Font } from "@react-pdf/renderer";
import { DATA } from "@/data/resume";

import outfit400 from "@fontsource/outfit/files/outfit-latin-400-normal.woff?url";
import outfit500 from "@fontsource/outfit/files/outfit-latin-500-normal.woff?url";
import outfit600 from "@fontsource/outfit/files/outfit-latin-600-normal.woff?url";
import outfit700 from "@fontsource/outfit/files/outfit-latin-700-normal.woff?url";

Font.register({
  family: "Outfit",
  fonts: [
    { src: outfit400, fontWeight: 400 },
    { src: outfit500, fontWeight: 500 },
    { src: outfit600, fontWeight: 600 },
    { src: outfit700, fontWeight: 700 },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

function stripMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1");
}

// ── Colors — mirroring website CSS vars (oklch → hex approx) ──
const FG       = "#141414"; // oklch(0.145 0 0) foreground
const MUTED    = "#808080"; // oklch(0.556 0 0) muted-foreground
const BORDER   = "#e8e8e8"; // oklch(0.922 0 0) border
const SECONDARY_BG = "#f5f5f5"; // oklch(0.97 0 0) secondary/muted bg
const SECONDARY_FG = "#2d2d2d"; // oklch(0.205 0 0) secondary-foreground
const WHITE    = "#ffffff";

const H_PAD = 48;
const V_PAD = 40;
const FEATURED_PROJECTS = ["BookLeaf", "TrailMix", "Hodu Coffee"];

const s = StyleSheet.create({
  page: {
    fontFamily: "Outfit",
    fontSize: 9,
    color: FG,
    backgroundColor: WHITE,
    paddingHorizontal: H_PAD,
    paddingVertical: V_PAD,
  },
  // ── Header ──────────────────────────────────────────────────
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: -H_PAD,
    marginTop: -V_PAD,
    paddingHorizontal: H_PAD,
    paddingTop: 32,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    marginBottom: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
    flexShrink: 0,
  },
  headerRight: {
    flex: 1,
  },
  headerName: {
    fontSize: 22,
    fontWeight: 700,
    color: FG,
    letterSpacing: 0.1,
    marginBottom: 2,
  },
  headerTitle: {
    fontSize: 10,
    fontWeight: 400,
    color: MUTED,
    marginBottom: 8,
  },
  headerContact: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  headerContactText: {
    fontSize: 7.5,
    color: MUTED,
  },
  headerContactLink: {
    fontSize: 7.5,
    color: MUTED,
    textDecoration: "none",
  },
  headerDot: {
    fontSize: 7.5,
    color: BORDER,
    marginHorizontal: 4,
  },
  // ── Section headers ─────────────────────────────────────────
  sectionHeader: {
    marginTop: 10,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: FG,
    marginBottom: 5,
  },
  sectionRule: {
    height: 1,
    backgroundColor: BORDER,
  },
  // ── About ───────────────────────────────────────────────────
  summaryText: {
    fontSize: 9,
    color: MUTED,
    lineHeight: 1.65,
    marginBottom: 4,
  },
  // ── Work entries ────────────────────────────────────────────
  workEntry: {
    marginBottom: 10,
  },
  workTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  workLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingRight: 10,
  },
  workCompany: {
    fontSize: 10,
    fontWeight: 600,
    color: FG,
    marginRight: 5,
  },
  workBadge: {
    fontSize: 7,
    fontWeight: 500,
    color: SECONDARY_FG,
    backgroundColor: SECONDARY_BG,
    borderWidth: 0.5,
    borderColor: BORDER,
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  workDates: {
    fontSize: 8,
    color: MUTED,
    flexShrink: 0,
  },
  workTitleInline: {
    fontSize: 9,
    fontWeight: 700,
    color: FG,
    marginLeft: 5,
  },
  workDesc: {
    fontSize: 8.5,
    color: MUTED,
    lineHeight: 1.6,
    marginTop: 2,
  },
  // ── Education ───────────────────────────────────────────────
  eduRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  eduSchool: {
    fontSize: 10,
    fontWeight: 600,
    color: FG,
    marginBottom: 1,
  },
  eduDegree: {
    fontSize: 8.5,
    color: MUTED,
  },
  // ── Skills chips ─────────────────────────────────────────────
  skillsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  skillChip: {
    backgroundColor: SECONDARY_BG,
    borderWidth: 0.5,
    borderColor: BORDER,
    borderRadius: 4,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  skillChipText: {
    fontSize: 7.5,
    fontWeight: 500,
    color: SECONDARY_FG,
  },
  // ── Projects ────────────────────────────────────────────────
  projectEntry: {
    marginBottom: 8,
  },
  projectTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
  projectIcon: {
    width: 20,
    height: 20,
    borderRadius: 5,
    marginRight: 7,
    flexShrink: 0,
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: 600,
    color: FG,
  },
  projectDates: {
    fontSize: 8,
    color: MUTED,
    flexShrink: 0,
  },
  projectLink: {
    fontSize: 7.5,
    color: MUTED,
    textDecoration: "none",
    marginLeft: 6,
  },
  projectDesc: {
    fontSize: 8.5,
    color: MUTED,
    lineHeight: 1.6,
  },
});

function Section({ title }: { title: string }) {
  return (
    <View style={s.sectionHeader}>
      <Text style={s.sectionTitle}>{title}</Text>
      <View style={s.sectionRule} />
    </View>
  );
}

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
          <View style={s.headerRight}>
            <Text style={s.headerName}>{DATA.name}</Text>
            <Text style={s.headerTitle}>{DATA.description}</Text>
            <View style={s.headerContact}>
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

        {/* ── Work Experience ── */}
        <Section title="Work Experience" />
        {DATA.work.map((w) => (
          <View key={w.company + w.start} style={s.workEntry} wrap={false}>
            <View style={s.workTopRow}>
              <View style={s.workLeft}>
                <Text style={s.workCompany}>{w.company}</Text>
                {w.badges.length > 0 && (
                  <Text style={s.workBadge}>{w.badges.join(", ")}</Text>
                )}
                <Text style={s.workTitleInline}>{w.title}</Text>
              </View>
              <Text style={s.workDates}>
                {w.start} – {w.end ?? DATA.sections.work.presentLabel}
              </Text>
            </View>
            <Text style={s.workDesc}>{w.description}</Text>
          </View>
        ))}

        {/* ── Education ── */}
        <Section title="Education" />
        {DATA.education.map((e) => (
          <View key={e.school} style={s.eduRow} wrap={false}>
            <View>
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
            <View style={s.projectTopRow}>
              <View style={{ flexDirection: "row", alignItems: "center", flex: 1, paddingRight: 10 }}>
                {"icon" in p && p.icon && (
                  <Image
                    src={`${window.location.origin}${p.icon}`}
                    style={s.projectIcon}
                  />
                )}
                <Text style={s.projectTitle}>{p.title}</Text>
                {p.href && (
                  <Link src={p.href} style={s.projectLink}>{p.href.replace("https://", "")}</Link>
                )}
              </View>
              <Text style={s.projectDates}>{p.dates}</Text>
            </View>
            <Text style={s.projectDesc}>{p.description}</Text>
          </View>
        ))}

      </Page>
    </Document>
  );
}
