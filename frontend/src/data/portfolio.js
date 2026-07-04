// Portfolio content for Tara Shipes
export const PROFILE = {
  name: "Tara Shipes",
  title: "Full Stack Software & Customer Integration Engineer",
  tagline:
    "I ship production code across the stack. Customer-facing support, escalation, and integration engineering. Plus, I've been told I'm really cool to work with. Pinky promise. :)",
  professionalSummary:
    "Full stack engineer who's spent her career at the intersection of support, engineering, and the people in between: sole escalation engineer bridging support and engineering teams, hands-on with production systems carrying real financial and data risk, and equally comfortable being the technical point of contact for enterprise clients and small businesses alike. Backend-heavy in Python, with working experience across several other languages, and has worked on both backend and frontend engineering teams.",
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
  everyEngagement:
    "I've spent my career being the connective tissue between teams that don't naturally talk to each other: running cross-functional data office hours between engineering, product, and account management, sitting in sprint planning and point planning as the engineering side of a support team, and being the person enterprise customers get routed to when a question is too technical for the standard queue. That's what I bring to every engagement: one person who can sit in the technical conversation and the business conversation without needing a translator.",
  communicationStyle:
    "Direct, plain language, and comfortable translating technical tradeoffs into business terms. No jargon walls.",
};

// The full-circle UtilityAPI scraper story, shown as a vertical timeline in
// Demo & Brief. Each stage has 3 lingo tiers:
//   customer   = Simplified: CEOs, enterprise clients, non-technical customers
//   middle     = Standard: matches actual resume phrasing, general audience
//   technical  = Technical: VP Eng / EM / peer-review level detail
// Condensed version of the CAREER_ARC story, for the inline expander under
// the Software Engineer role on the normal (non-Demo & Brief) portfolio view.
// Deliberately reworded rather than reused verbatim.
export const CAREER_ARC_SUMMARY =
  "Promoted twice in under 3 years. When the entire support engineering team was cut in a mass layoff, I was the one kept, specifically because I could do both support and engineering. What started as volunteering for holiday coverage turned into stabilizing 14 silently failed scrapers solo and building a triage system leadership adopted company-wide. Moved from the backend team to the frontend team in spring 2025, picking up new stack experience along the way. A year later, I was the one trusted to execute the very deprecation those scrapers had been protecting against, from the audit through SSH'ing into production myself.";

export const CAREER_ARC = [
  {
    id: "where-it-started",
    title: "Where It Started",
    date: "July 2022",
    customer:
      "Joined the company on the front line of technical support, learning the business by working directly with customers rather than from a manual. Partnered closely with customer success, routed opportunities to sales, and handled post-sales support end to end, including serving as the dedicated technical resource for Fort Collins Utilities' city-mandated energy benchmarking program. That customer-first grounding became the foundation for everything that followed.",
    middle:
      "Started in technical software support for enterprise and non-enterprise customers alike. Came in with a personal engineering and schooling history already, and learned the product, the codebase, and the API from the customer's point of view, alongside them: which scrapers were flaky, which broke on specific utility site layouts, which had regex issues. Worked with simple Python scripts, monitoring dashboards, Sentry, and rate limits, live-monitoring system status day to day. Mentored along the way.",
    technical:
      "Started in technical support for UtilityAPI's enterprise and SMB customer base. Already had a CS background, so I onboarded onto the product, codebase, and API surface from the support seat: identifying flaky scrapers, utility-specific layout breakage, and regex pattern failures in the parsing layer firsthand. Wrote simple Python scripts for one-off diagnostics, monitored Sentry for exceptions, tracked API rate limits, and kept live tabs on system status. Mentored by senior engineers throughout.",
  },
  {
    id: "moved-to-application-support",
    title: "Moved to Application Support Engineering",
    date: "August 2023",
    customer:
      "Moved into a newly created role built around bridging customer support and engineering. Helped build out the team from the ground up, including hiring.",
    middle:
      "Moved into a newly created Application Support Engineering team, sitting at the intersection of support and engineering: sprint planning, point-planning sessions, and kanban on one side, the technical escalation queue and Level 1 through 3 support on the other. Helped interview and had real weight in hiring the rest of the team.",
    technical:
      "Moved into a newly formed Application Support Engineering team positioned between the support queue and engineering backlog: participated in sprint planning and point planning, and owned the L1 to L3 technical escalation queue across roughly 50 utilities, taking customer-reported bugs (scraper failures, Green Button Connect My Data issues, XML and parser errors) and resolving them end to end where possible, or diagnosing them as far as I could before handing off to the core engineering team. Interviewed candidates and had real input on hiring decisions for the rest of the team.",
  },
  {
    id: "holiday-incident-2023",
    title: "Holiday Incident 2023",
    date: "December 2023",
    customer:
      "After a company-wide layoff eliminated my entire team, I was the one they chose to keep, specifically because I could handle both support and engineering. During the holiday code freeze, when no changes are normally allowed, I worked to get ahead of a growing backlog. When the freeze lifted, I closed out half of the entire ticket backlog in the first week alone.",
    middle:
      "After a company-wide layoff left me as the one team member retained, I picked up holiday coverage during the seasonal code freeze. Scrapers need constant upkeep since utility bill formats and websites change often, and with that maintenance lapsed, several scrapers had quietly accumulated dozens of issues each rather than one clean failure apiece. I stabilized as many as I could solo (about 150 frontend selector fixes, about 35 parser regex fixes) and staged everything ahead of the freeze lifting. Once it lifted, I closed out half of the entire ticket backlog in the first week.",
    technical:
      "After a company-wide layoff, I was the sole engineer retained on the team, chosen for my dual support/engineering skillset, and covered holidays during the seasonal code freeze. Scrapers require continuous maintenance since utility websites and bill formats change frequently; every unseen bill format is effectively a new parsing case. With maintenance lapsed, several scrapers had accumulated dozens of distinct issues each (layout drift, regex mismatches, format changes) rather than a single point of failure. I stabilized as many as possible solo (roughly 150 frontend selector fixes, roughly 35 parser-level regex fixes) and staged prioritized PRs ahead of the freeze lifting. Once it lifted, I closed out half of the entire ticket backlog in the first week.",
  },
  {
    id: "what-outlasted-the-fix",
    title: "What Outlasted the Fix",
    date: "Early 2024",
    customer:
      "While already using our existing project tracking tool, I took the initiative to organize the entire recovery effort myself: every bug tracked individually, grouped and prioritized, with full context and traceability back to the original customer issues. What started as a self-directed side project became big enough that leadership formally adopted it as a company-wide initiative.",
    middle:
      "We already used Jira, but I went ahead on my own and built out a full triage structure as a side project: individual tickets for every bug, grouped by utility and by parser versus scraper issues, prioritized by impact, with full context and links to the dozens of related Zendesk tickets and Sentry errors each one belonged to. It grew large enough that it got turned into a formal Epic, and leadership adopted the approach company-wide.",
    technical:
      "Jira was already our tracking tool, but the triage framework itself was a self-directed side project: individual tickets per bug, grouped by utility and by parser vs. scraper failure type, prioritized by customer impact, each cross-linked to its originating Zendesk tickets (often dozens per issue) and corresponding Sentry error events. The project grew large enough to be formalized into its own Epic, and the structure was adopted as the company-wide triage standard afterward.",
  },
  {
    id: "the-audit",
    title: "The Audit and the Promotion",
    date: "August 2024",
    customer:
      "Was asked to assess which parts of our utility integrations were no longer delivering enough value to justify the ongoing cost of maintaining them. That assessment became the business case for a major cost-cutting initiative. Promoted to Software Engineer that same month.",
    middle:
      "Tasked with auditing scraper usage and customer activity across all utilities to identify which ones weren't pulling their weight relative to maintenance cost anymore. That audit planted the idea for the deprecation project. Promoted to Software Engineer that same month.",
    technical:
      "Conducted a utilization audit across our utility integrations: ran custom scripts against our API to pull active customer authorization counts, data pull frequency, and support ticket volume per utility, then cross-referenced maintenance cost against customer value. Findings directly informed the deprecation scope and prioritization. Promoted to Software Engineer that same month.",
  },
  {
    id: "the-prep-work",
    title: "The Prep Work",
    date: "September 2024",
    customer:
      "Built the internal tools and system updates needed to safely retire utilities at scale, while also doing feature work and bug fixing as part of the engineering effort, preparing customer-facing communications, and serving as the single point of contact across Support, Customer Success, Marketing, and Product throughout the transition.",
    middle:
      "Tasked with building the Django features and filters on meters and utilities needed to prep for deprecation: added activated_at and deactivated_at fields, ran bulk backfills and migrations, and updated documentation. Also on the frontend team at the time doing feature work and bug fixing, prepped email templates and support materials, and was the point of contact for Support, Customer Success, Marketing, and Product throughout the transition.",
    technical:
      "Built the Django model changes and admin filters needed to support deprecation at scale: added activated_at and deactivated_at fields to the meter and utility models, wrote and ran bulk backfill scripts and schema migrations across production data, and updated internal documentation. Concurrently embedded on the frontend team doing feature work and bug fixing, built customer-facing email templates and support materials, and served as the technical point of contact for Support, Customer Success, Marketing, and Product throughout the rollout.",
  },
  {
    id: "backend-to-frontend",
    title: "Moved to the Frontend Team",
    date: "Spring 2025",
    customer:
      "Took on a new challenge by moving from backend to frontend engineering, broadening my range across the full product, all while continuing to deliver on the utility retirement project already underway. Also took on leading regular cross-functional data sessions, connecting the data side of the business to whoever on the team needed it.",
    middle:
      "Moved from the backend team to the frontend team, picking up React and TypeScript along the way, while continuing to own the utility deprecation project already in progress. Also nominated to lead data office hours, connecting the data side to whoever on the team needed it.",
    technical:
      "Rotated onto the frontend team as it was actively migrating from legacy HTML/JS to React and TypeScript, ramping up on the new stack alongside the rest of the team while simultaneously carrying the in-progress utility deprecation project to completion. Nominated by a principal engineer and seconded by VP Engineering to lead recurring cross-functional data office hours, connecting the data platform to engineering, product, and account management as needed.",
  },
  {
    id: "full-circle",
    title: "Full Circle",
    date: "September 2025",
    customer:
      "I was the one entrusted to execute the entire retirement solo: safely shutting down access across 40 utilities and about 20,000 customer meter authorizations, one utility at a time using tooling I had built months earlier, with zero downtime and no unplanned incidents, all while keeping Marketing, Product, Support, and Customer Success in the loop so each team could release their materials and prepare on the right timeline. The same engineer who stabilized the crisis years earlier was the one trusted to close it out completely.",
    middle:
      "Executed the deprecation myself: SSH'd into production and ran scripted, batched jobs to revoke third-party credential access one utility at a time, using the activated_at and deactivated_at filters I'd built into the API months earlier. Covered ~40 utilities and about 20,000 customer meter authorizations, with zero downtime. Updated documentation throughout, monitored Athena and Sentry to catch anything before it became a customer problem, and coordinated timing with Marketing, Product, Support, and Customer Success so each team could release their materials and prepare accordingly.",
    technical:
      "Executed the production deprecation solo: wrote and ran scripted bulk jobs, deprecating utilities one at a time via SSH into production, using the activated_at and deactivated_at API filters I'd built months earlier during the prep phase to safely gate and stage each cutover. Revoked third-party credential access across ~40 utilities, approximately 20,000 customer meter authorizations, with zero downtime. Maintained real-time documentation and runbook updates throughout the rollout to preserve an accurate audit trail, ran continuous monitoring via Athena query logs and Sentry error tracking to catch regressions before they reached customers, and coordinated rollout timing with Marketing, Product, Support, and Customer Success so each team could stage their materials and prepare accordingly.",
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
      "Sold out multiple collection drops within an hour, and was invited to join Foundation (foundation.app), an invite-only platform reserved for select artists.",
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
