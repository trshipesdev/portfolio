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
  { name: "Kotlin", tint: "#F2D7EE" },
  { name: "Go", tint: "#EFD9CE" },
  { name: "C++", tint: "#EAE2F8" },
  { name: "Bash", tint: "#F9E4D4" },
  { name: "HTML", tint: "#F4C2C2" },
  { name: "CSS", tint: "#EAE2F8" },
  { name: "Celery", tint: "#F2D7EE" },
  { name: "pytest", tint: "#EFD9CE" },
  { name: "AWS", tint: "#F9E4D4" },
  { name: "CloudWatch", tint: "#F4C2C2" },
  { name: "IAM", tint: "#EAE2F8" },
  { name: "SES", tint: "#F9E4D4" },
  { name: "Lambda", tint: "#EFD9CE" },
  { name: "S3", tint: "#F2D7EE" },
  { name: "Athena", tint: "#F4C2C2" },
  { name: "PostgreSQL", tint: "#F4C2C2" },
  { name: "MongoDB", tint: "#EFD9CE" },
  { name: "Docker", tint: "#EAE2F8" },
  { name: "REST APIs", tint: "#F2D7EE" },
  { name: "OAuth 2.0", tint: "#F9E4D4" },
  { name: "Sentry", tint: "#F2D7EE" },
  { name: "Tableau", tint: "#EFD9CE" },
  { name: "Airflow", tint: "#EAE2F8" },
  { name: "Zendesk", tint: "#F9E4D4" },
  { name: "HubSpot", tint: "#F4C2C2" },
  { name: "Jira", tint: "#EFD9CE" },
  { name: "SOC 2", tint: "#EAE2F8" },
  { name: "Green Button", tint: "#F2D7EE" },
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

// Proof cards: one per professional "hat", evidence-based rather than a skill list.
export const HATS_PROOF = [
  {
    icon: "escalation",
    title: "The Escalation Engineer",
    proof:
      "Sole escalation engineer bridging Support and Engineering: sprint planning, point-planning sessions, and kanban on one side, the technical escalation queue and offering Level 1 through 3 support on the other. Absorbed the entire application support queue solo through a company-wide layoff, with zero coverage gap.",
  },
  {
    icon: "production",
    title: "The Production Owner",
    proof:
      "Trusted with direct production access: SSH'd into prod to run scripts and migrations, and built the Django filters and new logic needed to handle stopped meters across a 40-utility deprecation, revoking ~20,000 authorizations with zero downtime. Co-owned a billing engine spanning 12+ stipulations and 24 edge cases, and led cross-functional data meetings across engineering, product, and account management.",
  },
  {
    icon: "builder",
    title: "The Builder",
    proof:
      "Ships feature work embedded in engineering teams, and ships entire products solo end to end: payments, AI, data model, deployment. Comfortable owning a slice of a system, or the whole thing.",
  },
  {
    icon: "customer",
    title: "The Customer-Facing Engineer",
    proof:
      "Supported two very different customer bases: Fortune 500 utilities on one side, independent operators like solar installers on the other. Worked closely with account management and customer success, owning the technical response end to end regardless of company size. Comfortable context-switching across radically different customers to get to the root of what each one actually needs, including hands-on reliability support for customer-facing demos.",
  },
  {
    icon: "business",
    title: "The Business Operator",
    proof:
      "Runs the entire digital operation for a real company. Drove a 200% increase in Google Business Profile interactions for a $1M+ business.",
  },
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
      "Family-owned plumbing company serving the Charleston, SC Lowcountry. I run their digital operation: WordPress development, Housecall Pro FSM with Zapier automation, and local SEO strategy that drove a 200% increase in Google Business Profile interactions across 8+ service area cities.",
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
    tag: "Meta · Source code · 2026",
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
    tag: "Live product · Preview access · 2026",
    blurb:
      "A Private Chef Business OS and CRM for the culinary world, built solo as a production iOS/Android app. Stripe-powered payments, AI-assisted workflows via the Claude API, and a client-facing portal. Live at guestandgarnish.com. Full public access is gated to protect the product roadmap, but you can peek behind the curtain with a preview password.",
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
    tag: "🚧 Coming Soon · 2026",
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
    tag: "Web3 · WIP · 2025",
    blurb:
      "A production-grade multi-chain crypto trading bot across Solana, ETH, Base, BSC, and Polygon. Composable capital management with reserve floors, exposure caps, and drawdown brakes. Rug pull detection with automatic exit logic, cryptographic request signing, Telegram bot interface, and Flask admin dashboard.",
    stack: ["Python", "Solana", "Flask", "MongoDB", "AWS EC2 (early version, retired)"],
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
    tag: "Senior capstone · 100/100 · 2024",
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
    tag: "Chrome Store · Private link · 2026",
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
  {
    id: "false-fruit",
    name: "False Fruit",
    tag: "Ongoing · 2026",
    blurb:
      "A custom FLUX LoRA trained on my own paintings to generate compositional references and color studies for an ongoing physical watercolor series. Built an end-to-end inference pipeline in ComfyUI, curated and captioned a personal dataset, and tuned hyperparameters across multiple training runs.",
    stack: ["FLUX", "LoRA", "ComfyUI", "Kohya_ss"],
    accent: "#E0D4F7",
    size: "medium",
    action: "info",
  },
];

export const EXPERIENCE = [
  {
    role: "Digital Operations Lead, Freelance Retainer",
    company: "Honest Abe Plumbing",
    period: "2026 to Present",
    highlights: [
      "Digital operations lead for a $1M+ plumbing company: built and maintain their WordPress site (custom development, Elementor Pro, JSON-LD structured data for local SEO), Housecall Pro field service management with Zapier automation pipelines, and local SEO strategy across 8+ service area cities including Summerville and Charleston, SC.",
      "Drove a 200% increase in Google Business Profile interactions (March to June) through GBP optimization, verification, and local SEO.",
      "Built content and workflow templates spanning storm-response communications, newsletters, blog posts, and an inventory tracking system.",
    ],
  },
  {
    role: "Software Engineer",
    company: "UtilityAPI",
    period: "July 2022 to November 2025",
    highlights: [
      "Promoted twice in under 3 years, growing from Technical Support Engineer into a full Software Engineer role bridging Support and Engineering.",
      "Sole escalation engineer partnering directly with the company founder; delivered a Green Button Connect My Data API integration for a major Northeast utility.",
      "Executed a large-scale deprecation of ~40 utilities, safely revoking ~20,000 authorizations without downtime.",
      "Co-owned the Duration-Based Pricing system across 12+ billing stipulations.",
      "Absorbed the full application support scope solo through a company-wide layoff, with no handoff or coverage gap.",
      "Mentored 1:1 by the CTO; participated in interviewing and onboarding junior engineers.",
    ],
  },
  {
    role: "Digital Illustrator & NFT Artist",
    company: "Independent / Anonymous Collective",
    period: "2016 to 2024",
    highlights: [
      "Founded and led an anonymous NFT art community during the 2021 to 2022 NFT/Web3 boom, centered on diversity and self-empowerment, releasing multiple hand-drawn collections and hosting community events.",
      "Delivered digital design, branding, and photography work, including assets used in a $10k+ Kickstarter campaign.",
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
