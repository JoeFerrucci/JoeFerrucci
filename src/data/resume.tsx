import { Icons } from "@/components/icons";
import { House } from "lucide-react";
import { Swift } from "@/components/ui/svgs/swift";
import { SwiftUI } from "@/components/ui/svgs/swiftui";
import { Apple } from "@/components/ui/svgs/apple";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Joe Ferrucci",
  initials: "JF",
  url: "https://joef.us",
  location: "St. Louis, MO",
  locationLink: "https://www.google.com/maps/place/st+louis+mo",
  description:
    "Principal Mobile + AI Engineer. I build high-quality iOS apps that feel personal and alive.",
  summary:
    "I've spent 10+ years building and leading mobile products — from [NASA JPL](/#work) to [Instacart](/#work) to [founding my own startups](/#work). I specialize in Swift and SwiftUI, iOS architecture, and shipping polished, performant apps at scale. I've grown engineering teams, taken apps from 0 to 350k users, and led end-to-end from system design to App Store release.",
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
      text: "Want to chat? Reach out on LinkedIn or shoot me an email.",
    },
  },
  photos: [],
  skills: [
    { name: "Swift", icon: Swift },
    { name: "SwiftUI", icon: SwiftUI },
    { name: "iOS / macOS", icon: Apple },
    { name: "Go", icon: Golang },
    { name: "React", icon: ReactLight },
    { name: "TypeScript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
  ],
  contact: {
    email: "joeferrucci33@gmail.com",
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
        url: "mailto:joeferrucci33@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Taya Necklace",
      href: "https://taya.so",
      badges: ["Contract"],
      location: "Remote",
      title: "Founding Engineer",
      logoUrl: "https://media.licdn.com/dms/image/v2/D560BAQELeFI9NbbfBw/company-logo_200_200/B56ZmbfOJZHkAI-/0/1759250277395/taiyaki_ai_logo?e=1779926400&v=beta&t=iejgmb9vZljiRwA9gqTDf6bbNTDoUwBj5x9Su_ZWKSA",
      start: "January 2026",
      end: "March 2026",
      description:
        "First and sole engineer. Built a voice-first mobile product from concept to production, transforming spoken input into structured, searchable knowledge and actionable insights.",
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
    },
    {
      company: "Bunches",
      href: "https://bunches.com",
      badges: [],
      location: "Remote",
      title: "Founding Engineer",
      logoUrl: "/bunches.png",
      start: "2020",
      end: "January 2025",
      description:
        "Built and scaled the mobile apps from 0 to 350k users in under 12 months. Grew the engineering team from 1 to 5. Led infrastructure, developer productivity, and cross-functional collaboration across a sports fandom platform.",
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
        "Sole iOS engineer for Jobr and Jobr for Business, built from scratch in Swift — achieving #1 in the App Store Business section. Post-acquisition by Monster.com, directed all client app development (iOS, Android, Web) and established engineering standards org-wide.",
    },
    {
      company: "Foodster",
      href: "",
      badges: ["Founder"],
      location: "San Francisco, CA",
      title: "Technical Founder & CEO",
      logoUrl: "https://avatar.vercel.sh/foodster?size=40",
      start: "2014",
      end: "2015",
      description:
        "Built a food delivery app from the ground up — iOS client, web client, and backend infrastructure — focused on clean architecture, scalability, and fast iteration.",
    },
    {
      company: "NASA JPL",
      href: "https://jpl.nasa.gov",
      badges: [],
      location: "Pasadena, CA",
      title: "Lead Software Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=jpl.nasa.gov&sz=128",
      start: "2013",
      end: "2014",
      description:
        "Worked on the Earth Observing System (EOS) team — large-scale data processing and analysis. Collaborated with scientists and engineers on full-stack solutions for complex data collection and management challenges.",
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
      dates: "2025 - Present",
      active: true,
      description:
        "Scheduling SaaS that handles 1:1 booking links and group meeting polls in one place. Syncs Google Calendar, blocks conflicts automatically, and generates Google Meet or Zoom links for every booking — no back-and-forth needed.",
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
      dates: "2025 - Present",
      active: true,
      description:
        "Endurance training intelligence for iPhone. Combines sleep, HRV, workload, route context, weather, and calendar to give you one clear daily call — hard, easy, or off. Built for trail runners, road runners, and climbers who want to train from readiness, not guesswork.",
      technologies: ["Swift", "SwiftUI", "HealthKit", "CoreLocation"],
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
      title: "F3 Nation",
      href: "https://www.f3nation.com",
      dates: "2020 - Present",
      active: true,
      description:
        "F3 is a free, peer-led men's fitness and leadership community operating in outdoor bootcamp workouts nationwide. I lead an F3 region of 300+ men in the St. Louis area — planting, growing, and serving a workout community focused on fitness, fellowship, and community leadership.",
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
    {
      title: "Hodu Coffee",
      href: "https://www.hoducoffee.com",
      dates: "2026 - Present",
      active: true,
      description:
        "A specialty coffee roaster built on a single idea — that even the cup in your hand is a gift worth naming. Hodu (호두, Korean for walnut) is a brand rooted in gratitude, craft, and intentional slowness. Direct-to-consumer beans roasted and shipped fresh.",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://www.hoducoffee.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/hodu.png",
      video: "",
    },
    {
      title: "MultiController",
      href: "https://github.com/JoeFerrucci/MultiController",
      dates: "",
      active: false,
      description:
        "An iOS library for cleanly managing multiple child view controllers within a parent container. Simplifies the boilerplate around containment APIs, transitions, and lifecycle management — so you can focus on the experience, not the plumbing.",
      technologies: ["Swift", "UIKit"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/JoeFerrucci/MultiController",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
