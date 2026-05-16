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

function chunk<T>(arr: readonly T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size) as T[]
  );
}

const FG           = "#141414";
const MUTED        = "#808080";
const BORDER       = "#e8e8e8";
const SECONDARY_BG = "#f5f5f5";
const SECONDARY_FG = "#2d2d2d";
const WHITE        = "#ffffff";

// Accent colors
const BADGE_BG     = "#eff6ff"; // blue-50
const BADGE_BORDER = "#bfdbfe"; // blue-200
const BADGE_FG     = "#1d4ed8"; // blue-700
const SKILL_BG     = "#eef2ff"; // indigo-50
const SKILL_BORDER = "#c7d2fe"; // indigo-200
const SKILL_FG     = "#4338ca"; // indigo-700

const H_PAD = 48;
const V_PAD = 40;
const CARD_GAP = 7;
const FEATURED_PROJECTS = ["BookLeaf", "TrailMix", "Hodu Coffee"];

// Local logo overrides — google favicon URLs fail in react-pdf (redirect/WebP issues)
const LOCAL_LOGOS: Record<string, string> = {
  "New Mountain Capital":           "/logos/newmountaincapital.png",
  "Glue AI":                        "/logos/glue.png",
  "Dialpad":                        "/logos/dialpad.png",
  "Speechify":                      "/logos/speechify.png",
  "Instacart":                      "/logos/instacart.png",
  "Jobr (Acquired by Monster.com)": "/logos/monster.png",
  "NASA JPL":                       "/logos/nasa.png",
  "Foodster":                       "/logos/foodster.png",
};

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
    paddingTop: 28,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    marginBottom: 10,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 14,
    flexShrink: 0,
  },
  headerRight: { flex: 1 },
  headerName: {
    fontSize: 20,
    fontWeight: 700,
    color: FG,
    letterSpacing: 0.1,
    marginBottom: 2,
  },
  headerTitle: {
    fontSize: 9.5,
    fontWeight: 400,
    color: MUTED,
    marginBottom: 7,
  },
  headerContact: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  headerContactText: { fontSize: 7.5, color: MUTED },
  headerContactLink: { fontSize: 7.5, color: MUTED, textDecoration: "underline" },
  headerDot: { fontSize: 7.5, color: BORDER, marginHorizontal: 4 },
  // ── Section headers ─────────────────────────────────────────
  sectionHeader: { marginTop: 10, marginBottom: 7 },
  sectionTitle: { fontSize: 12, fontWeight: 700, color: FG, marginBottom: 4 },
  sectionRule: { height: 1, backgroundColor: BORDER },
  // ── About ───────────────────────────────────────────────────
  summaryText: {
    fontSize: 8.5,
    color: MUTED,
    lineHeight: 1.65,
    marginBottom: 4,
  },
  // ── Card grid ───────────────────────────────────────────────
  cardRow: {
    flexDirection: "row",
    gap: CARD_GAP,
    marginBottom: CARD_GAP,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 6,
    padding: 9,
    backgroundColor: WHITE,
  },
  // ── Work cards ──────────────────────────────────────────────
  cardTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 3,
  },
  cardLeft: {
    flex: 1,
    paddingRight: 6,
  },
  workCompanyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 1,
  },
  workCompany: {
    fontSize: 9.5,
    fontWeight: 700,
    color: FG,
  },
  workBadge: {
    fontSize: 6.5,
    fontWeight: 500,
    color: BADGE_FG,
    backgroundColor: BADGE_BG,
    borderWidth: 0.5,
    borderColor: BADGE_BORDER,
    borderRadius: 3,
    paddingHorizontal: 4,
    paddingVertical: 1.5,
  },
  workLogo: {
    width: 14,
    height: 14,
    borderRadius: 3,
    marginRight: 0,
    flexShrink: 0,
  },
  workTitle: {
    fontSize: 8,
    fontWeight: 500,
    color: MUTED,
    marginBottom: 1,
  },
  cardDates: {
    fontSize: 7.5,
    color: MUTED,
    flexShrink: 0,
  },
  cardDesc: {
    fontSize: 8,
    color: MUTED,
    lineHeight: 1.55,
  },
  // ── Education ───────────────────────────────────────────────
  eduRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  eduSchool: { fontSize: 10, fontWeight: 600, color: FG, marginBottom: 1 },
  eduDegree: { fontSize: 8.5, color: MUTED },
  // ── Skills chips ─────────────────────────────────────────────
  skillsWrap: { flexDirection: "row", flexWrap: "wrap", gap: 4 },
  skillChip: {
    backgroundColor: SKILL_BG,
    borderWidth: 0.5,
    borderColor: SKILL_BORDER,
    borderRadius: 4,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  skillChipText: { fontSize: 7.5, fontWeight: 500, color: SKILL_FG },
  // ── Project cards ────────────────────────────────────────────
  projectCardTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  projectCardLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingRight: 6,
  },
  projectIcon: {
    width: 18,
    height: 18,
    borderRadius: 4,
    marginRight: 6,
    flexShrink: 0,
  },
  projectTitleBlock: { flex: 1 },
  projectTitle: { fontSize: 9.5, fontWeight: 700, color: FG, marginBottom: 1 },
  projectLink: { fontSize: 7, color: MUTED, textDecoration: "none" },
});

function Section({ title }: { title: string }) {
  return (
    <View style={s.sectionHeader}>
      <Text style={s.sectionTitle}>{title}</Text>
      <View style={s.sectionRule} />
    </View>
  );
}

type WorkEntry = typeof DATA.work[number];
type ProjectEntry = typeof DATA.projects[number];

function WorkCard({ work: w }: { work: WorkEntry }) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const rawLogo = LOCAL_LOGOS[w.company] ?? w.logoUrl;
  const logoSrc = rawLogo.startsWith("/") ? `${origin}${rawLogo}` : rawLogo;
  return (
    <View style={s.card} wrap={false}>
      <View style={s.cardTopRow}>
        <View style={s.cardLeft}>
          <View style={s.workCompanyRow}>
            {w.logoUrl && <Image src={logoSrc} style={s.workLogo} />}
            <Text style={s.workCompany}>{w.company}</Text>
            {w.badges.length > 0 && (
              <Text style={s.workBadge}>{w.badges.join(", ")}</Text>
            )}
          </View>
          <Text style={s.workTitle}>{w.title}</Text>
        </View>
        <Text style={s.cardDates}>
          {w.start} – {w.end ?? DATA.sections.work.presentLabel}
        </Text>
      </View>
      <Text style={s.cardDesc}>{w.description}</Text>
    </View>
  );
}

function ProjectCard({ project: p }: { project: ProjectEntry }) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  return (
    <View style={s.card} wrap={false}>
      <View style={s.projectCardTopRow}>
        <View style={s.projectCardLeft}>
          {"icon" in p && p.icon && (
            <Image src={`${origin}${p.icon}`} style={s.projectIcon} />
          )}
          <View style={s.projectTitleBlock}>
            <Text style={s.projectTitle}>{p.title}</Text>
            {p.href && (
              <Link src={p.href} style={s.projectLink}>
                {p.href.replace("https://", "").replace(/\/$/, "")}
              </Link>
            )}
          </View>
        </View>
        <Text style={s.cardDates}>{p.dates}</Text>
      </View>
      <Text style={s.cardDesc}>{p.description}</Text>
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

  const workRows = chunk(DATA.work, 2);
  const projectRows = chunk(featuredProjects, 2);

  return (
    <Document>
      <Page size="LETTER" style={s.page}>

        {/* ── Header ── */}
        <View style={s.header}>
          <Image src={avatarUrl} style={s.avatar} />
          <View style={s.headerRight}>
            <Text style={s.headerName}>{DATA.name}</Text>
            <Text style={s.headerTitle}>{DATA.description.replace(/\n/g, " · ")}</Text>
            <View style={s.headerContact}>
              <Text style={s.headerContactText}>{DATA.location}</Text>
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
        {workRows.map((row, i) => (
          <View key={i} style={s.cardRow}>
            {row.map((w) => <WorkCard key={w.company + w.start} work={w} />)}
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
              <Text style={s.cardDates}>
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
        {projectRows.map((row, i) => (
          <View key={i} style={s.cardRow}>
            {row.map((p) => <ProjectCard key={p.title} project={p} />)}
          </View>
        ))}

      </Page>
    </Document>
  );
}
