import { Icons } from "@/components/icons";
import { House, Network, Layers, Zap, Sparkles, Mic, Database, Users, Award, Briefcase, Rocket, Building2 } from "lucide-react";
import { Swift } from "@/components/ui/svgs/swift";
import { SwiftUI } from "@/components/ui/svgs/swiftui";
import { Apple } from "@/components/ui/svgs/apple";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Xcode } from "@/components/ui/svgs/xcode";
import { GraphQL } from "@/components/ui/svgs/graphql";
import { Figma } from "@/components/ui/svgs/figma";
import { GitHubActions } from "@/components/ui/svgs/githubactions";

export const DATA = {
  name: "Joe Ferrucci",
  initials: "JF",
  url: "https://joef.us",
  location: "Denver, Colorado",
  locationLink: "https://www.google.com/maps/place/denver+colorado",
  description:
    "Principal Mobile + AI Engineer\nI build high-quality apps and AI systems — and lead the teams that ship them.",
  summary:
    "I've spent 10+ years building and leading high-impact mobile products and teams — from [NASA JPL](https://jpl.nasa.gov/) to [Instacart](https://instacart.com/) to [founding my own startups](/#work). I specialize in Swift, SwiftUI, and iOS/macOS architecture, with a track record of taking apps from zero to hundreds of thousands of users, owning initiatives end-to-end from system design to CI/CD to App Store release, and leading engineering teams that care about polish, performance, and craft. At [Monster](https://monster.com), I scaled an engineering org 500% and directed all client development across iOS, Android, and Web for millions of users globally — spanning monster.com, Monster Mobile (Jobr), TalentBin, and military.com — work that contributed to a $498M acquisition.\n\nI stay close to the edge of AI — building custom agentic workflows that have meaningfully multiplied my output and quality, because knowing how to leverage AI effectively is its own kind of senior skill. I'm drawn to teams that value craftsmanship: thoughtful animations, fluid interactions, and software that feels personal and alive.",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "Projects",
      heading: "Check out my latest work",
      text: "A mix of products I've built, communities I lead, and side projects I care about.",
    },
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "Hackathons",
      text: "",
    },
    photos: {
      order: 6, enabled: false,
      heading: "Photos",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Reach out on LinkedIn.",
    },
  },
  photos: [],
  skills: [
    { name: "Swift", icon: Swift },
    { name: "SwiftUI", icon: SwiftUI },
    { name: "iOS / macOS", icon: Apple },
    { name: "UIKit", icon: Layers },
    { name: "Objective-C", icon: Apple },
    { name: "Xcode", icon: Xcode },
    { name: "MVVM", icon: Network },
    { name: "System Architecture", icon: Network },
    { name: "Reactive Programming", icon: Zap },
    { name: "CI/CD", icon: GitHubActions },
    { name: "GraphQL", icon: GraphQL },
    { name: "Go", icon: Golang },
    { name: "React", icon: ReactLight },
    { name: "TypeScript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "AI", icon: Sparkles },
    { name: "RAG", icon: Database },
    { name: "Knowledge Graph Embeddings", icon: Network },
    { name: "Speech Synthesis", icon: Mic },
    { name: "Cross-functional Coordination", icon: Users },
    { name: "Cross-functional Team Leadership", icon: Users },
    { name: "Hands-on Technical Leadership", icon: Award },
    { name: "Management", icon: Briefcase },
    { name: "Product Design", icon: Figma },
    { name: "Mobile Enterprise", icon: Building2 },
    { name: "Product Development", icon: Rocket },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
  ],
  contact: {
    email: "",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/JoeFerrucci",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joeferrucci/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "New Mountain Capital",
      href: "https://www.newmountaincapital.com",
      badges: ["Contract"],
      location: "Remote",
      title: "Founding Architect — AI Content Infrastructure",
      logoUrl: "https://www.google.com/s2/favicons?domain=newmountaincapital.com&sz=128",
      start: "May 2026",
      end: "Present",
      description:
        "Leading engineering on RightsSync with New Mountain Capital and BMI: a permissioned publisher knowledge base for LLM grounding and retrieval. Architecting the platform end-to-end — retrieval, governance/provenance controls, and the infrastructure for scalable publisher and AI partnerships.",
      moreDetails: "",
      skills: ["Go", "AWS", "Snowflake", "AI", "RAG", "System Architecture", "Content Partnerships", "Knowledge Engineering"],
    },
    {
      company: "Taya Necklace",
      href: "https://tayanecklace.com",
      badges: ["Contract"],
      location: "Remote",
      title: "Founding Engineer",
      logoUrl: "/logos/taya.png",
      start: "January 2026",
      end: "March 2026",
      description:
        "First and sole engineer. Built a voice-first mobile product from concept to production, transforming spoken input into structured, searchable knowledge and actionable insights.",
      moreDetails: "",
      skills: ["Swift", "SwiftUI", "iOS", "AI", "RAG", "Speech Synthesis", "Knowledge Graph Embeddings"],
    },
    {
      company: "Glue AI",
      href: "https://glue.ai",
      badges: [],
      location: "Remote",
      title: "Principal iOS/macOS Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=glue.ai&sz=128",
      start: "March 2025",
      end: "January 2026",
      description:
        "Co-founded and backed by David O. Sacks (Craft Ventures; All-In Podcast). Led iOS and macOS development for a thread-first, AI-first workplace productivity platform with 100s of MCP & tool integrations.",
      moreDetails: "",
      skills: ["Swift", "SwiftUI", "UIKit", "MVVM", "System Architecture", "Platform Engineering", "CI/CD", "Xcode", "Hands-on Technical Leadership"],
    },
    {
      company: "Stealth Mode AI Startup",
      href: "",
      badges: [],
      location: "Remote",
      title: "Advisor",
      logoUrl: "/logos/stealth.svg",
      start: "January 2025",
      end: "June 2025",
      description:
        "Building generative AI sports fan platform. Fundraising. If you're an investor, operator, or builder in AI x Consumer x Sports, let’s connect.",
      moreDetails: "",
      skills: ["AI", "Sports", "Consumer", "Product Strategy", "Fundraising"],
    },
    {
      company: "Bunches",
      href: "https://bunches.com",
      badges: [],
      location: "Remote",
      title: "Founding Engineer",
      logoUrl: "/bunches.png",
      start: "May 2020",
      end: "December 2024",
      description:
        "Built and scaled the mobile apps from zero to hundreds of thousands of users in under 12 months. Grew the engineering team from 1 to 5. Led infrastructure, developer productivity, and cross-functional collaboration across a sports fandom platform.",
      moreDetails: "",
      skills: ["Swift", "SwiftUI", "UIKit", "GraphQL", "MVVM", "System Architecture", "Platform Engineering", "CI/CD", "Product Design", "Cross-functional Team Leadership"],
    },
    {
      company: "Dialpad",
      href: "https://dialpad.com",
      badges: ["Contract"],
      location: "Remote",
      title: "Director of Mobile Engineering",
      logoUrl: "https://www.google.com/s2/favicons?domain=dialpad.com&sz=128",
      start: "August 2021",
      end: "March 2023",
      description:
        "Brought in specifically for my mobile expertise to rescue platforms that had accumulated deep architectural debt — apps that were unstable, slow, and difficult to build on. Led two engineering teams across two products, driving a ground-up modernization effort: re-architecting for stability and performance, raising the engineering bar, and meaningfully improving developer productivity and team efficacy.",
      moreDetails: "",
      skills: ["Swift", "SwiftUI", "iOS", "System Architecture", "Platform Engineering", "CI/CD", "Cross-functional Team Leadership", "Management", "Hands-on Technical Leadership"],
    },
    {
      company: "Speechify",
      href: "https://speechify.com",
      badges: ["Contract"],
      location: "Remote",
      title: "Director of Mobile Engineering",
      logoUrl: "https://www.google.com/s2/favicons?domain=speechify.com&sz=128",
      start: "January 2021",
      end: "August 2021",
      description:
        "Brought in to fix a struggling iOS platform and raise the engineering bar across the mobile team. Drove architectural improvements, improved code quality, and elevated team standards to support Speechify's rapid growth.",
      moreDetails: "",
      skills: ["Swift", "SwiftUI", "UIKit", "iOS", "System Architecture", "Platform Engineering", "CI/CD", "Hands-on Technical Leadership", "Management"],
    },
    {
      company: "Instacart",
      href: "https://instacart.com",
      badges: [],
      location: "Remote",
      title: "Staff iOS Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=instacart.com&sz=128",
      start: "2019",
      end: "2021",
      description:
        "Led projects on the In-Store Fulfillment and Earnings/Marketplace teams. Championed platform-wide initiatives improving app performance, code quality, and developer experience across Logistics, Growth, and Staffing.",
      moreDetails: "",
      skills: ["Swift", "SwiftUI", "UIKit", "Objective-C", "MVVM", "Reactive Programming", "System Architecture", "Platform Engineering", "CI/CD", "Cross-functional Team Leadership"],
    },
    {
      company: "Jobr (Acquired by Monster.com)",
      href: "https://monster.com",
      badges: ["Acquired"],
      location: "San Francisco, CA",
      title: "Head of Engineering",
      logoUrl: "https://www.google.com/s2/favicons?domain=monster.com&sz=128",
      start: "2015",
      end: "2019",
      description:
        "Started as sole iOS engineer for Jobr and Jobr for Business — built from scratch in Swift, ranked #1 in the App Store Business section, and helped drive a $498M acquisition by Randstad. Post-acquisition, led all client app development (iOS, Android, Web) globally across monster.com, TalentBin, and military.com, serving millions of users. Scaled the SF engineering team 500%, building a cross-functional org spanning engineering, design, PM, QA, and infrastructure. Launched features across 30+ locales and drove Monster's overall technological vision.",
      moreDetails: "",
      skills: ["Swift", "Objective-C", "UIKit", "SwiftUI", "MVVM", "System Architecture", "Management", "CI/CD", "Hands-on Technical Leadership", "Cross-functional Team Leadership"],
    },
    {
      company: "Foodster",
      href: "",
      badges: ["Founder"],
      location: "San Francisco, CA",
      title: "Technical Founder & CEO",
      logoUrl: "/logos/foodster.png",
      start: "2014",
      end: "2015",
      description:
        "Built a food delivery app from the ground up — iOS client, web client, and backend infrastructure — focused on clean architecture, scalability, and fast iteration.",
      moreDetails: "",
      skills: ["Swift", "Objective-C", "UIKit", "MVVM", "System Architecture", "Management", "CI/CD", "Product Development"],
    },
    {
      company: "NASA JPL",
      href: "https://jpl.nasa.gov",
      badges: [],
      location: "Pasadena, CA",
      title: "Lead Software Engineer",
      logoUrl: "/logos/nasa.png",
      start: "2013",
      end: "2014",
      description:
        "Worked on the Earth Observing System (EOS) team — large-scale data processing and analysis. Collaborated with scientists and engineers on full-stack solutions for complex data collection and management challenges.",
      moreDetails: "",
      skills: ["Swift", "System Architecture", "CI/CD", "Cross-functional Coordination", "Product Development"],
    },
  ],
  education: [
    {
      school: "University of California, Davis",
      href: "https://ucdavis.edu",
      degree: "M.S. / B.S., Computer Science & Statistics",
      logoUrl: "https://www.google.com/s2/favicons?domain=ucdavis.edu&sz=128",
      start: "",
      end: "",
    },
  ],
  projects: [
    {
      title: "BookLeaf",
      href: "https://www.bookleaf.us",
      icon: "/projects/bookleaf-icon.png",
      dates: "2013 - Present",
      active: true,
      description:
        "Scheduling SaaS that kills the back-and-forth. Share one link — guests pick a slot, conflicts are auto-blocked from your calendar, and a Google Meet or Zoom link is generated automatically. Need to coordinate a group? Polls let guests vote without signing up; one click finalizes and notifies everyone.",
      technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://www.bookleaf.us",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/bookleaf.png",
      video: "",
    },
    {
      title: "TrailMix",
      href: "https://www.trailmix.club",
      icon: "/projects/trailmix-icon.png",
      dates: "2024 - Present",
      active: true,
      description:
        "Real-time AI running coach for Apple Watch. Ask anything mid-run — TrailMix listens via your Watch microphone and responds through its speaker, hands-free and eyes-forward. Live pace, heart rate, distance, and elapsed time at a glance. Trails, roads, treadmills — with or without signal.",
      technologies: ["Swift", "SwiftUI", "watchOS", "HealthKit", "CoreLocation"],
      links: [
        {
          type: "Website",
          href: "https://www.trailmix.club",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/trailmix.png",
      video: "",
    },
    {
      title: "MultiController",
      href: "https://github.com/JoeFerrucci/MultiController",
      icon: "/projects/multicontroller-icon.jpg",
      dates: "2024 - Present",
      active: false,
      description:
        "One wrist. Every room. Instantly discovers every Roku TV and Sonos speaker on your network via ECP and SSDP — no setup, no pairing codes, no nonsense. Full remote control from iPhone, iPad, and Mac. On Apple Watch, spin the Digital Crown to dial Sonos volume or swipe between Roku navigation pages.",
      technologies: ["Swift", "SwiftUI", "watchOS"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/JoeFerrucci/MultiController",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/multicontroller.jpg",
      video: "",
    },
    {
      title: "Hodu Coffee",
      href: "https://www.hoducoffee.com",
      icon: "/projects/hodu-icon.png",
      dates: "2019 - Present",
      active: true,
      description:
        "Hodu Coffee is a small Missouri roaster named after the Hebrew word for \"give thanks.\" Single-origin beans from Ethiopia, Colombia, and Guatemala — roasted Tuesday and Friday, shipped within the week. Born out of a closed door and a friend's gift, it's coffee as a quiet invitation to slow down.",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://www.hoducoffee.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/hodu.jpg",
      video: "",
    },
    {
      title: "F3 Nation",
      href: "https://www.f3nation.com",
      icon: "/projects/f3nation-icon.jpg",
      dates: "2020 - Present",
      active: true,
      description:
        "F3 is a free, peer-led men's fitness and leadership community operating in outdoor bootcamp workouts nationwide. I lead an F3 region of 300+ men — planting, growing, and serving a workout community focused on fitness, fellowship, and community leadership.",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://www.f3nation.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/f3nation.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
