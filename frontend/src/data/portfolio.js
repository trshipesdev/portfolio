// Portfolio content for Tara Shipes
export const PROFILE = {
  name: "Tara Shipes",
  title: "Full Stack Software & Integration Engineer",
  tagline:
    "I ship production code across the stack. Customer-facing support, escalation, and integration engineering. Plus, I've been told I'm really cool to work with. Pinky promise. :)",
  professionalSummary:
    "Full stack software and integration engineer with a track record of shipping production code end to end. I specialize in customer-facing support, escalation, and integration engineering, bridging the gap between complex technical problems and reliable, maintainable solutions.",
  greetingCardHref:
    "https://www.groupgreeting.com/card/b21844a21543af6/delivered",
  location: "Open to remote positions",
  email: "trshipes@gmail.com",
  github: "https://github.com/trshipes",
  githubDev: "https://github.com/trshipesdev",
  linkedin: "https://www.linkedin.com/in/tara-shipes",
  heroAvailability:
    "Open to various engineering roles with a preference for customer-facing engineering",
};

export const SKILLS = [
  { name: "Python", tint: "#F4C2C2" },
  { name: "Django", tint: "#EFD9CE" },
  { name: "React", tint: "#F2D7EE" },
  { name: "TypeScript", tint: "#E8D5F2" },
  { name: "JavaScript", tint: "#F9E4D4" },
  { name: "HTML", tint: "#F4C2C2" },
  { name: "CSS", tint: "#EAE2F8" },
  { name: "AWS", tint: "#F9E4D4" },
  { name: "PostgreSQL", tint: "#F4C2C2" },
  { name: "MongoDB", tint: "#EFD9CE" },
  { name: "Docker", tint: "#EAE2F8" },
  { name: "REST APIs", tint: "#F2D7EE" },
  { name: "OAuth 2.0", tint: "#F9E4D4" },
  { name: "Anthropic API", tint: "#EFD9CE" },
];

export const MARQUEE_TOKENS = [
  "Full Stack",
  "Front End",
  "Back End",
  "Python",
  "Django",
  "React",
  "TypeScript",
  "HTML",
  "CSS",
  "AWS",
  "PostgreSQL",
  "REST APIs",
];

// 10 hats for the About section hat cycler
export const HATS = [
  { icon: "🎩", label: "top hat" },
  { icon: "👑", label: "crown" },
  { icon: "🎓", label: "grad cap" },
  { icon: "🧢", label: "baseball cap" },
  { icon: "👒", label: "sun hat" },
  { icon: "🎀", label: "pink bow" },
  { icon: "🪖", label: "hard-hat energy" },
  { icon: "🤠", label: "cowgirl" },
  { icon: "🧙‍♀️", label: "witch (in a cute way)" },
];

// Projects ordered: Honest Abe #1, This Portfolio #2, G&G #3, Escalate #4,
// then tothemoon, Pixelies, Delulu.
// action: 'open' (external link), 'password-reveal' (modal), 'image-open' (opens image in new tab),
// 'coming-soon' (no link yet, shows a teaser card)
export const PROJECTS = [
  {
    id: "honest-abe-plumbing",
    name: "Honest Abe Plumbing",
    tag: "Live client · Freelance",
    blurb:
      "Family-owned plumbing company serving the Charleston, SC Lowcountry. I run the digital operation: WordPress site build and maintenance, local SEO, content strategy, marketing automation, and business systems and API integrations.",
    stack: ["WordPress", "SEO", "GBP", "Zapier", "APIs"],
    href: "https://honestabeplumbingsc.com",
    image:
      "/images/projects/honest-abe-plumbing.jpg",
    accent: "#F9E4D4",
    size: "hero",
    action: "open",
  },
  {
    id: "portfolio-website",
    name: "This Portfolio",
    tag: "Meta · Source code",
    blurb:
      "You're looking at it. A y2k + MySpace joke entrance that does a full sparkle makeover into this glam portfolio, plus a couple of other eras hiding in the time machine. React, Framer Motion, and Tailwind end to end.",
    stack: ["React", "Framer Motion", "Tailwind CSS"],
    href: "https://github.com/trshipesdev/portfolio",
    image:
      "/images/projects/portfolio-website.jpg",
    accent: "#C2F4E0",
    size: "medium",
    action: "open",
  },
  {
    id: "guest-and-garnish",
    name: "Guest & Garnish",
    tag: "Live product · Preview access",
    blurb:
      "A Private Chef Business OS and CRM directory for the culinary world. Live at guestandgarnish.com. Full public access is gated for now to protect the product roadmap, but you can peek behind the curtain with a preview password.",
    stack: ["React Native", "Expo", "TypeScript", "FastAPI", "MongoDB"],
    href: "https://guestandgarnish.com",
    password: "preview-gg-resume",
    image:
      "/images/projects/culinary-directory.jpg",
    accent: "#EAE2F8",
    size: "medium",
    action: "password-reveal",
  },
  {
    id: "escalate",
    name: "Escalate",
    tag: "🚧 Coming Soon",
    blurb:
      "A support and escalation engineering platform built for the real workflow: tickets in, AI-assisted escalation briefs out, humans make every call. Currently in active development.",
    stack: ["Django", "DRF", "PostgreSQL", "React", "TypeScript", "Anthropic API"],
    accent: "#CFE3F7",
    size: "medium",
    action: "coming-soon",
  },
  {
    id: "tothemoon",
    name: "tothemoon",
    tag: "Web3 · WIP",
    blurb:
      "A trading tool that watches for altcoin rug pulls and exits before the crowd does. It aims for small, steady wins all day long that add up. The repo is public for portfolio purposes but I keep it low key.",
    stack: ["Solana", "Blockchain", "MongoDB", "Flask"],
    href: "https://github.com/trshipesdev/tothemoon-portfolio",
    image:
      "/images/projects/tothemoon-dashboard.jpg",
    accent: "#EFD9CE",
    size: "medium",
    action: "open",
  },
  {
    id: "pixelies",
    name: "Pixelies",
    tag: "Senior capstone · 100/100",
    blurb:
      "A gamified health and fitness Android app built solo in Kotlin from scratch. Step counter integration, quest system with anti-cheat detection, and original concept art inspired by Neopets, Tamagotchi, and Pokemon Go. Senior capstone. 100/100 across three semesters. Sole designer and developer.",
    stack: ["Kotlin", "Android", "SharedPreferences", "AlarmManager"],
    href: "https://docs.google.com/document/d/10gsNTW3mDguTyU4b9r00BTzWd6iMe2Jk/edit",
    image:
      "/images/projects/wolf-game.jpg",
    accent: "#F2D7EE",
    size: "medium",
    action: "open",
  },
  {
    id: "delulu-dossier",
    name: "Delulu Dossier",
    tag: "Chrome Store · Private link",
    blurb:
      "A Chrome extension that turns a Pinterest travel board into an 18-document AI-generated dossier: itinerary, booking windows, packing guide, and more. Pinterest ingestion via DOM traversal and Performance API, visual-intent analysis via Claude's vision API, multi-tab preference flow. Zero servers, zero trackers, bring your own key.",
    stack: ["Chrome MV3", "Vanilla JS", "Claude Vision API"],
    href: "https://chromewebstore.google.com/detail/delulu-dossier/ghclnopegofoonhlpgfkimbnlogegibh",
    image:
      "/images/projects/delulu-dossier.jpg",
    accent: "#F4C2C2",
    size: "medium",
    action: "open",
  },
];

export const EXPERIENCE = [
  {
    role: "Digital Operations & Automation, Freelance Retainer",
    company: "Honest Abe Plumbing",
    period: "2026 to Present",
    highlights: [
      "Part-time retainer running the full digital operation for a family-owned plumbing company in the Charleston, SC Lowcountry.",
      "WordPress build and maintenance, local SEO, content strategy, marketing automation, and Zapier-driven business-system + API integrations.",
    ],
  },
  {
    role: "Senior Support & Integration Engineer",
    company: "UtilityAPI",
    period: "July 2022 to November 2025",
    highlights: [
      "Sole escalation engineer bridging Support and Engineering. Promoted twice in under 3 years.",
      "Delivered a Green Button Connect My Data API integration for a major Northeast utility in one day, a first for the company.",
      "Executed a large-scale deprecation of ~40 utilities, safely revoking ~20,000 authorizations utility-by-utility without downtime, using bulk operations at production scale while preserving data integrity.",
      "Co-owned the Duration-Based Pricing system across 12+ billing stipulations and 24 edge cases in 3 payment states, cutting 5–10 manual refunds a month and resolving 200+ monthly customer complaints.",
      "Co-hosted bi-weekly cross-functional data office hours with enterprise sales, marketing, and the data platform team.",
    ],
  },
];

export const EDUCATION = {
  school: "Charleston Southern University",
  degree: "Bachelor's degree in Applied Computing + Cybersecurity",
  years: "2012–2016, 2023–2024",
  year: "2024",
  certs: ["CompTIA Security+ Certified"],
};
