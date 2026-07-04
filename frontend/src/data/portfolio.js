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

// Client-facing capability brief, shown via the "Demo & Brief" toggle on the
// professional page. Grounded in facts already established above, not new claims.
export const CLIENT_BRIEF = {
  everyEngagement: [
    "A scoping conversation before any code gets written, not after.",
    "One direct technical point of contact for the life of the engagement, no bouncing between people.",
    "Regular, plain-language status updates. No jargon dumps.",
    "Bugs get caught and fixed before the client ever sees them, not after they report them.",
    "Documentation and a clean handoff, every time.",
    "I stay reachable after launch. Retainer or not, I don't disappear once the invoice clears.",
  ],
  communicationStyle:
    "Direct, plain language, and comfortable translating technical tradeoffs into business terms. No jargon walls.",
};

// The full-circle UtilityAPI scraper story, shown as a vertical timeline in
// Demo & Brief. Each stage has 3 lingo tiers (customer / middle / technical).
// Only "middle" is filled in so far; "customer" and "technical" fall back to
// it until Tara supplies those versions. Do not invent that copy.
export const CAREER_ARC = [
  {
    id: "where-it-started",
    title: "Where It Started",
    date: "July 2022",
    middle:
      "Started in technical software support for enterprise and non-enterprise customers alike. Came in with a personal engineering and schooling history already, and learned the product, the codebase, and the API from the customer's point of view, alongside them: which scrapers were flaky, which broke on specific utility site layouts, which had regex issues. Mentored along the way.",
  },
  {
    id: "moved-to-application-support",
    title: "Moved to Application Support Engineering",
    date: "August 2023",
    middle:
      "A team built around the intersection of support and engineering, with me at the center and the reason it existed. Helped interview and held real weight in hiring the rest of the new team.",
  },
  {
    id: "holiday-incident-2023",
    title: "Holiday Incident 2023",
    date: "December 2023",
    middle:
      "Volunteered for holiday coverage after the entire Application Support Engineering team was let go in a mass layoff. I was the one survivor, kept specifically because I could do both support and engineering. What made it crazy: support was slammed with a backlog of 15+ pages, something that had never happened before in the company's history. We were just so overwhelmed by the loss. Ticket volume was chaos with no clear cause. Traced it back to 17 silently failed scrapers: no errors thrown, they'd just quietly stopped returning data. Stabilized 14 solo, about 150 frontend selector fixes and about 35 parser regex fixes, and staged every PR before everyone came back from the holidays so there was a clean, prioritized list instead of chaos.",
  },
  {
    id: "what-outlasted-the-fix",
    title: "What Outlasted the Fix",
    date: "Early 2024",
    middle:
      "Built a Jira triage system to organize it: epics per scraper or issue category, sub-tickets for individual fixes, priority ranked by customer impact and complexity. Leadership adopted it company-wide.",
  },
  {
    id: "the-audit",
    title: "The Audit",
    date: null,
    middle:
      "Tasked with auditing scraper usage across utilities: which ones weren't pulling their weight anymore. That audit planted the idea of deprecation.",
  },
  {
    id: "promoted-to-software-engineer",
    title: "Promoted to Software Engineer",
    date: "August 2024",
    middle: "Promoted to Software Engineer.",
  },
  {
    id: "the-prep-work",
    title: "The Prep Work",
    date: "September 2024",
    middle:
      "Tasked with building the Django features and filters on meters and utilities needed to prep for deprecation: added activated_at and deactivated_at fields, ran bulk backfills and migrations, and updated documentation. Also on the frontend team at the time: prepped email templates and support materials, and was the point of contact for Support, Customer Success, and Marketing throughout the transition.",
  },
  {
    id: "full-circle",
    title: "Full Circle",
    date: "September 2024",
    middle:
      "Executed the deprecation myself: SSH'd into production and revoked customer access to third-party credentials across ~40 utilities, about 20,000 authorizations, with zero downtime. Monitored Athena and Sentry throughout to catch anything before it became a customer problem.",
  },
];

// Projects ordered: Honest Abe #1, This Portfolio #2, G&G #3, Escalate #4,
// then tothemoon, Pixelies, Delulu.
// action: 'open' (external link), 'password-reveal' (modal), 'image-open' (opens image in new tab),
// 'coming-soon' (no link yet, shows a teaser card)
// Set `hidden: true` on a project to keep it in this file without rendering it anywhere.
const ALL_PROJECTS = [
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
    hidden: true,
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

export const PROJECTS = ALL_PROJECTS.filter((p) => !p.hidden);

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
      "Tasked with fixing Connect My Data integrations that had never worked across multiple utilities. An on-and-off effort spanning months of reaching out and troubleshooting until they did, delivering a working integration for a major Northeast utility.",
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
