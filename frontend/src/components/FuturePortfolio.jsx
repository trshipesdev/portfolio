import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Sparkles,
  MapPin,
  GraduationCap,
  Star,
  Lock,
  X,
  Copy,
  ExternalLink,
  ChevronDown,
  Gift,
  Rocket,
  Palette,
  AlertTriangle,
  Server,
  Hammer,
  Headset,
  Briefcase,
} from "lucide-react";
import {
  PROFILE,
  SKILLS,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
  MARQUEE_TOKENS,
  HATS_PROOF,
} from "../data/portfolio";
import HatCycler from "@/components/HatCycler";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const HAT_ICONS = {
  escalation: AlertTriangle,
  production: Server,
  builder: Hammer,
  customer: Headset,
  business: Briefcase,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
  }),
};

const FuturePortfolio = ({ onExit, onGoToProfessional }) => {
  const [gatedProject, setGatedProject] = useState(null); // holds the project when modal is open

  const handleHireHer = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      toast.success("Email copied ✨", {
        description: `${PROFILE.email} is on your clipboard.`,
      });
    } catch {
      toast.error("Couldn't copy, but it's " + PROFILE.email);
    }
  };

  return (
    <div className="glam-body glam-cursor relative" data-testid="future-portfolio">
      {/* Nav */}
      <nav className="glam-glass sticky top-0 z-30 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onExit}
            data-testid="star-back-button"
            aria-label="Go back to the 2000s"
            title="pssst… take me back to 2003"
            className="group relative w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #fbe4ec 45%, #f4c2c2 100%)",
              boxShadow:
                "0 6px 18px rgba(180, 140, 155, 0.35), inset 0 1px 0 rgba(255,255,255,0.9), 0 0 0 1px rgba(212, 175, 55, 0.35)",
            }}
          >
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ background: "rgba(212, 175, 55, 0.18)" }}
              aria-hidden="true"
            />
            <Star
              size={18}
              className="relative group-hover:rotate-90 transition-transform duration-500"
              stroke="#b8952e"
              strokeWidth={2.25}
              fill="#f4c2c2"
              style={{ filter: "drop-shadow(0 1px 1px rgba(122,0,74,0.15))" }}
            />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-widest text-neutral-500 opacity-0 group-hover:opacity-100 transition">
              back to 2003
            </span>
          </button>
          <span className="glam-serif text-2xl font-semibold tracking-tight">
            Tara S.
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          <a href="#work" data-testid="nav-work" className="hover:text-black transition">
            Work
          </a>
          <a href="#about" data-testid="nav-about" className="hover:text-black transition">
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
            }}
            data-testid="nav-skills"
            className="hover:text-black transition"
          >
            Toolkit
          </a>
          <a href="#experience" data-testid="nav-experience" className="hover:text-black transition">
            Portfolio
          </a>
          <a href="#contact" data-testid="nav-contact" className="hover:text-black transition">
            Contact
          </a>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              data-testid="nav-github-btn"
              className="glam-glass px-4 py-2 rounded-full text-xs uppercase tracking-widest font-medium flex items-center gap-2 hover:scale-105 transition"
            >
              <Github size={14} /> GitHub
              <ChevronDown size={12} className="opacity-70" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="glam-glass rounded-2xl border border-white/60 min-w-[260px] p-2"
            data-testid="github-dropdown"
          >
            <DropdownMenuLabel className="text-[10px] uppercase tracking-widest text-neutral-500 px-3 py-1.5">
              Two accounts, one Tara
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-black/10" />
            <DropdownMenuItem asChild>
              <a
                href={PROFILE.githubDev}
                target="_blank"
                rel="noreferrer"
                data-testid="nav-github-dev"
                className="flex items-start gap-3 rounded-xl px-3 py-2 cursor-pointer focus:bg-white/70 focus:outline-none data-[highlighted]:bg-white/70"
              >
                <Github size={16} className="mt-0.5 glam-gold" />
                <span className="flex flex-col">
                  <span className="font-medium">@trshipesdev</span>
                  <span className="text-[11px] text-neutral-500">
                    Active dev · portfolio &amp; side projects
                  </span>
                </span>
                <ArrowUpRight size={14} className="ml-auto mt-1 opacity-60" />
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                data-testid="nav-github-main"
                className="flex items-start gap-3 rounded-xl px-3 py-2 cursor-pointer focus:bg-white/70 focus:outline-none data-[highlighted]:bg-white/70"
              >
                <Github size={16} className="mt-0.5 glam-gold" />
                <span className="flex flex-col">
                  <span className="font-medium">@trshipes</span>
                  <span className="text-[11px] text-neutral-500">
                    Original account · older repos
                  </span>
                </span>
                <ArrowUpRight size={14} className="ml-auto mt-1 opacity-60" />
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-20 pb-24">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="glam-chip inline-block mb-6"
          data-testid="hero-chip"
        >
          <Sparkles size={12} className="inline mr-1 -mt-0.5" />
          {PROFILE.heroAvailability}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="glam-serif text-6xl md:text-8xl lg:text-9xl font-medium leading-[0.95] tracking-tight max-w-5xl"
          data-testid="hero-name"
        >
          {PROFILE.name.split(" ")[0]}{" "}
          <span className="italic glam-gold">Shipes</span>
          <span className="glam-serif">.</span>
        </motion.h1>

        <div className="mt-8 grid md:grid-cols-12 gap-8 items-end">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="md:col-span-7 max-w-2xl"
          >
            <p
              className="text-lg md:text-xl text-neutral-700 leading-relaxed"
              data-testid="hero-tagline"
            >
              {PROFILE.tagline}
            </p>
            <motion.a
              href={PROFILE.greetingCardHref}
              target="_blank"
              rel="noreferrer"
              data-testid="greeting-card-link"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="glam-glass mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm md:text-base font-medium hover:text-[#b8952e] transition"
            >
              <Gift size={18} className="glam-gold flex-shrink-0" />
              see what my coworkers say about me for yourself (a card I got
              when I went back and finished my degree 😎💪)
            </motion.a>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="md:col-span-5 flex md:justify-end gap-3 flex-wrap"
          >
            <button
              type="button"
              onClick={onGoToProfessional}
              data-testid="hero-view-work"
              className="glam-glass px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:scale-105 transition"
            >
              see the less pink version <ArrowUpRight size={16} />
            </button>
            <button
              type="button"
              onClick={handleHireHer}
              data-testid="hero-hire-me"
              className="bg-[#111] text-white px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-[#f4c2c2] hover:text-black transition"
            >
              Hire her <Mail size={14} />
            </button>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-testid="hero-jump-to-portfolio"
              className="glam-glass px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:scale-105 transition"
            >
              jump to portfolio <ArrowUpRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Marquee: real skills */}
        <div className="mt-24 overflow-hidden border-y border-black/10 py-6">
          <motion.div
            animate={{ x: [0, -1400] }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap glam-serif text-5xl md:text-7xl italic text-neutral-400 flex items-center gap-10"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <React.Fragment key={i}>
                {MARQUEE_TOKENS.map((t, j) => (
                  <span key={`${i}-${j}`} className="flex items-center gap-10">
                    <span>{t}</span>
                    <span className="glam-gold not-italic">✦</span>
                  </span>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </header>

      {/* ABOUT — I wear many hats */}
      <section
        id="about"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32"
      >
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <p className="glam-chip inline-block mb-4">02 / About</p>
            <h2 className="glam-serif text-5xl md:text-6xl font-medium leading-[1.05]">
              I wear <span className="italic glam-gold">many</span>{" "}
              <span className="inline-flex items-center align-middle">
                <HatCycler size={96} />
              </span>{" "}
              hats.
            </h2>
            <p className="mt-4 text-sm text-neutral-500 italic">
              (Yes, that hat is clickable. Give it a spin.)
            </p>
          </div>
          <div className="md:col-span-6 space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p data-testid="about-bio">
              Full stack software and integration engineer. My day-to-day is
              production code plus customer-facing support, escalation, and
              integration work, so I can debug your gnarliest production
              incident and write the release that fixes it. I&apos;m always
              teaching myself something new.
            </p>

            <div
              className="glam-glass rounded-3xl p-6 flex items-start gap-4"
              data-testid="education-card"
            >
              <div className="w-12 h-12 rounded-full bg-white/70 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={22} className="glam-gold" />
              </div>
              <div>
                <p className="glam-serif text-xl md:text-2xl font-semibold leading-snug">
                  {EDUCATION.degree}
                </p>
                <p className="text-sm text-neutral-600 mt-1">
                  {EDUCATION.school} &middot; {EDUCATION.years}
                </p>
                <span
                  className="glam-chip inline-flex items-center gap-1 mt-3 text-[11px]"
                  data-testid="about-secplus"
                >
                  <Sparkles size={11} /> {EDUCATION.certs[0]}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 pt-1 text-sm">
              <div className="flex items-center gap-2 text-neutral-600">
                <MapPin size={16} className="glam-gold" />
                {PROFILE.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF CARDS — one per hat, evidence not adjectives */}
      <section
        id="proof"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32"
      >
        <p className="glam-chip inline-block mb-4">02.5 / Receipts</p>
        <h2 className="glam-serif text-5xl md:text-6xl font-medium mb-12 max-w-3xl">
          Every hat, <span className="italic glam-gold">backed up</span>.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {HATS_PROOF.map((h, i) => {
            const Icon = HAT_ICONS[h.icon];
            return (
              <motion.div
                key={h.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                custom={i}
                data-testid={`proof-card-${h.title.toLowerCase().replace(/\s+/g, "-")}`}
                className={`glam-glass rounded-3xl p-8 flex flex-col gap-4 ${
                  i === HATS_PROOF.length - 1 && HATS_PROOF.length % 2 === 1
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <div className="w-11 h-11 rounded-full bg-white/70 flex items-center justify-center">
                  <Icon size={20} className="glam-gold" />
                </div>
                <h3 className="glam-serif text-2xl font-medium">{h.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{h.proof}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32"
      >
        <p className="glam-chip inline-block mb-4">03 / Toolkit</p>
        <h2 className="glam-serif text-5xl md:text-6xl font-medium mb-12">
          The pink <span className="italic glam-gold">Rolodex</span>.
        </h2>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              data-testid={`skill-${s.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="glam-glass px-6 py-4 rounded-2xl text-base font-medium flex items-center gap-3 hover:-translate-y-1 transition"
              style={{
                background: `linear-gradient(140deg, ${s.tint}70 0%, rgba(255,255,255,0.8) 100%)`,
              }}
            >
              <Sparkles size={14} className="glam-gold" />
              {s.name}
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32"
      >
        <p className="glam-chip inline-block mb-4">04 / Portfolio</p>
        <h2 className="glam-serif text-5xl md:text-6xl font-medium mb-12">
          Where she has <span className="italic glam-gold">shipped</span>.
        </h2>
        <div className="space-y-6">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.company}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="glam-glass rounded-3xl p-8 md:p-10 grid md:grid-cols-12 gap-6"
              data-testid={`experience-${e.company.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  {e.period}
                </p>
                <h3 className="glam-serif text-3xl md:text-4xl mt-2 leading-tight">
                  {e.company}
                </h3>
                <p className="text-sm text-neutral-600 mt-1">{e.role}</p>
              </div>
              <ul className="md:col-span-8 space-y-3">
                {e.highlights.map((h, hi) => (
                  <li key={hi} className="flex gap-3 text-neutral-700">
                    <span className="glam-gold mt-1">✦</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WORK — Bento grid with real screenshots */}
      <section
        id="work"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32"
      >
        <div className="mb-10">
          <p className="glam-chip inline-block mb-4">01 / Selected Work</p>
          <h2 className="glam-serif text-5xl md:text-6xl font-medium max-w-3xl">
            Take a <span className="italic glam-gold">peek</span> at what
            I&apos;ve been building.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(260px,auto)] gap-5">
          {PROJECTS.map((p, i) => {
            const span =
              p.size === "hero" ? "md:col-span-8" : "md:col-span-4";
            const isGated = p.action === "password-reveal";
            const isImageOpen = p.action === "image-open";
            const isComingSoon = p.action === "coming-soon";
            const isInfo = p.action === "info";
            const commonProps = {
              "data-testid": `project-card-${p.id}`,
              className: `glam-card glam-glass ${span} flex flex-col group overflow-hidden text-left`,
              style: {
                background: `linear-gradient(160deg, ${p.accent}55 0%, rgba(255,255,255,0.75) 55%)`,
              },
            };
            const cardBody = (
              <>
                {/* Image */}
                <div
                  className={`relative w-full overflow-hidden ${
                    p.size === "hero" ? "aspect-[16/10]" : "aspect-[4/3]"
                  }`}
                >
                  {isComingSoon || isInfo ? (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(160deg, ${p.accent}aa 0%, rgba(255,255,255,0.85) 100%)`,
                      }}
                    >
                      {isComingSoon ? (
                        <Rocket size={64} className="glam-gold opacity-60 group-hover:scale-110 transition-transform duration-500" />
                      ) : (
                        <Palette size={64} className="glam-gold opacity-60" />
                      )}
                    </div>
                  ) : (
                    <img
                      src={p.image}
                      alt={`${p.name} preview`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[900ms]"
                    />
                  )}
                  {!isComingSoon && !isInfo && (
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(180deg, rgba(0,0,0,0) 40%, ${p.accent}66 100%)`,
                      }}
                    />
                  )}
                  <div className="absolute top-4 left-4 max-w-[calc(100%-4.5rem)]">
                    <span className="glam-chip whitespace-normal leading-tight inline-block">
                      {p.tag}
                    </span>
                  </div>
                  {isComingSoon && (
                    <div className="absolute top-5 -right-9 rotate-45 bg-[#111] text-white text-[10px] font-bold uppercase tracking-widest px-9 py-1">
                      Coming Soon
                    </div>
                  )}
                  {!isComingSoon && !isInfo && (
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/85 backdrop-blur border border-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                      {isGated ? (
                        <Lock size={14} />
                      ) : isImageOpen ? (
                        <ExternalLink size={14} />
                      ) : (
                        <ArrowUpRight size={16} />
                      )}
                    </div>
                  )}
                </div>
                {/* Body */}
                <div className={`p-6 md:p-8 flex-1 flex flex-col`}>
                  <h3
                    className={`glam-serif font-medium leading-tight ${
                      p.size === "hero"
                        ? "text-4xl md:text-5xl"
                        : "text-2xl md:text-3xl"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <p
                    className={`mt-3 text-neutral-700 leading-relaxed ${
                      p.size === "hero" ? "text-base" : "text-sm"
                    }`}
                  >
                    {p.blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] uppercase tracking-widest text-neutral-600 border border-neutral-400/40 rounded-full px-2.5 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );

            const motionWrapperProps = {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true, margin: "-80px" },
              variants: fadeUp,
              custom: i,
            };

            if (isInfo) {
              return (
                <motion.div key={p.id} {...motionWrapperProps} {...commonProps}>
                  {cardBody}
                </motion.div>
              );
            }

            if (isComingSoon) {
              return (
                <motion.button
                  key={p.id}
                  type="button"
                  onClick={() =>
                    toast(`${p.name} is still compiling. check back soon.`)
                  }
                  {...motionWrapperProps}
                  {...commonProps}
                >
                  {cardBody}
                </motion.button>
              );
            }

            if (isGated) {
              return (
                <motion.button
                  key={p.id}
                  type="button"
                  onClick={() => setGatedProject(p)}
                  {...motionWrapperProps}
                  {...commonProps}
                >
                  {cardBody}
                </motion.button>
              );
            }
            return (
              <motion.a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                {...motionWrapperProps}
                {...commonProps}
              >
                {cardBody}
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16"
      >
        <div
          className="glam-glass rounded-[40px] p-10 md:p-20 text-center overflow-hidden relative"
          data-testid="contact-block"
        >
          <p className="glam-chip inline-block mb-6">05 / Say hi</p>
          <h2 className="glam-serif text-5xl md:text-7xl font-medium leading-tight">
            Let&apos;s build{" "}
            <span className="italic glam-gold">something fetch</span>.
          </h2>
          <p className="mt-6 text-neutral-600 max-w-2xl mx-auto">
            Open to senior technical support, integration, forward-deployed,
            and customer engineering roles, plus full stack, backend,
            front-end, Python, and data engineering. I do my best work in the
            space between the customer and the code.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={handleHireHer}
              data-testid="contact-email"
              className="bg-[#111] text-white px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-[#f4c2c2] hover:text-black transition"
            >
              <Mail size={14} /> {PROFILE.email}
            </button>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-linkedin"
              className="glam-glass px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:scale-105 transition"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <a
              href={PROFILE.githubDev}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-github"
              className="glam-glass px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:scale-105 transition"
            >
              <Github size={14} /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>
          © {new Date().getFullYear()} Tara Shipes. Powered by python, pink,
          and persistence.
        </p>
        <button
          type="button"
          onClick={onExit}
          data-testid="back-to-90s-button"
          className="underline decoration-dotted underline-offset-4 hover:text-[#ff1493] transition italic"
        >
          psst… take me back to 2003 ↺
        </button>
      </footer>

      {/* Password reveal modal (for gated projects like Guest & Garnish) */}
      <AnimatePresence>
        {gatedProject && (
          <motion.div
            className="fixed inset-0 z-[300] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-testid="password-modal"
          >
            {/* backdrop */}
            <motion.button
              type="button"
              aria-label="Close"
              onClick={() => setGatedProject(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              data-testid="password-modal-backdrop"
            />
            {/* dialog */}
            <motion.div
              className="relative glam-glass rounded-3xl p-8 md:p-10 max-w-md w-full text-left"
              style={{
                background: `linear-gradient(160deg, ${gatedProject.accent}66 0%, rgba(255,255,255,0.88) 55%)`,
              }}
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <button
                type="button"
                onClick={() => setGatedProject(null)}
                aria-label="Close"
                data-testid="password-modal-close"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/70 hover:bg-white flex items-center justify-center transition"
              >
                <X size={16} />
              </button>
              <span className="glam-chip inline-block mb-4">
                <Lock size={11} className="inline mr-1 -mt-0.5" /> Preview access
              </span>
              <h3 className="glam-serif text-3xl md:text-4xl font-medium leading-tight">
                {gatedProject.name}
              </h3>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                Full public access is gated to protect the product. Use the
                preview password below to log in on the site.
              </p>
              <div className="mt-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
                  Preview password
                </p>
                <div
                  className="flex items-center justify-between gap-3 bg-white/85 border border-black/10 rounded-2xl px-4 py-3"
                  data-testid="password-value-row"
                >
                  <code className="font-mono text-neutral-900 text-base">
                    {gatedProject.password}
                  </code>
                  <span className="glam-gold text-xs">✦</span>
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  data-testid="password-copy-and-open"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(gatedProject.password);
                      toast.success("Password copied ✨", {
                        description: "Opening the site in a new tab.",
                      });
                    } catch {
                      toast("Opening the site. Copy the password manually.");
                    }
                    window.open(gatedProject.href, "_blank", "noopener");
                    setGatedProject(null);
                  }}
                  className="flex-1 bg-[#111] text-white px-5 py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#f4c2c2] hover:text-black transition"
                >
                  <Copy size={14} /> Copy &amp; open site{" "}
                  <ExternalLink size={14} />
                </button>
                <button
                  type="button"
                  data-testid="password-cancel"
                  onClick={() => setGatedProject(null)}
                  className="glam-glass px-5 py-3 rounded-full font-medium text-sm hover:scale-105 transition"
                >
                  Nevermind
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FuturePortfolio;
