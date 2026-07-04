import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  ShieldCheck,
  ArrowUpRight,
  Home,
  Sparkles,
  Lock,
  X,
  Copy,
  ExternalLink,
  Rocket,
  Palette,
  AlertTriangle,
  Headset,
  Check,
  MessageSquare,
  BarChart3,
  ArrowLeft,
} from "lucide-react";
import {
  PROFILE,
  SKILLS,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
  HATS_PROOF,
  CLIENT_BRIEF,
} from "../data/portfolio";

const MODERN_PROOF_TITLES = ["The Customer-Facing Engineer", "The Escalation Engineer"];
const MODERN_PROOF_ICONS = {
  "The Customer-Facing Engineer": Headset,
  "The Escalation Engineer": AlertTriangle,
};
import EraWebring from "@/components/EraWebring";

const initials = PROFILE.name
  .split(" ")
  .map((n) => n[0])
  .join("");

const ModernPortfolio = ({ onEraPrev, onEraNext }) => {
  const [gatedProject, setGatedProject] = useState(null);
  const [demoMode, setDemoMode] = useState(false);

  return (
    <div className="modern-body" data-testid="modern-portfolio">
      {/* Navbar */}
      <nav className="modern-navbar sticky top-0 z-20 px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onEraPrev}
            data-testid="modern-home-button"
            aria-label="Back to 2003"
            title="pssst… take me back to 2003"
            className="modern-icon-btn group"
          >
            <Home size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <span className="font-bold tracking-tight">{PROFILE.name}</span>
        </div>
        {!demoMode && (
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-black transition">About</a>
            <a href="#skills" className="hover:text-black transition">Skills</a>
            <a href="#experience" className="hover:text-black transition">Experience</a>
            <a href="#work" className="hover:text-black transition">Work</a>
            <a href="#contact" className="hover:text-black transition">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <header className="max-w-5xl mx-auto px-6 md:px-12 pt-20 pb-24">
        <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-lg mb-8">
          {initials}
        </div>
        <p className="modern-eyebrow mb-4">{PROFILE.title}</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mb-6">
          {PROFILE.name}
        </h1>
        <p className="max-w-xl text-base md:text-lg text-gray-600 leading-relaxed mb-10">
          {PROFILE.professionalSummary}
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#work" className="modern-btn">
            View My Work <ArrowUpRight size={16} />
          </a>
          <button
            type="button"
            onClick={onEraNext}
            data-testid="modern-see-me-button"
            className="modern-btn-outline"
          >
            <Sparkles size={16} /> See the me version
          </button>
          <a href="#contact" className="modern-btn-outline">
            Get In Touch
          </a>
          <button
            type="button"
            onClick={() => setDemoMode((v) => !v)}
            data-testid="modern-demo-toggle"
            className="modern-btn"
          >
            {demoMode ? <ArrowLeft size={16} /> : <MessageSquare size={16} />}
            {demoMode ? "Back to full resume" : "Demo & Brief"}
          </button>
        </div>
      </header>

      {demoMode ? (
        <main
          className="max-w-3xl mx-auto px-6 md:px-12 pb-24"
          data-testid="modern-demo-brief"
        >
          <section className="py-8 modern-divider">
            <p className="modern-eyebrow mb-4">What Every Engagement Includes</p>
            <ul className="space-y-3">
              {CLIENT_BRIEF.everyEngagement.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={13} className="text-gray-700" />
                  </span>
                  <span className="text-base text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="py-8 modern-divider">
            <p className="modern-eyebrow mb-4">How I Communicate</p>
            <div className="modern-card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <MessageSquare size={18} className="text-gray-700" />
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                {CLIENT_BRIEF.communicationStyle}
              </p>
            </div>
          </section>

          <section className="py-8 modern-divider">
            <p className="modern-eyebrow mb-6">The Numbers</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CLIENT_BRIEF.metrics.map((m) => (
                <div key={m.label} className="modern-card p-6 text-center">
                  <BarChart3 size={18} className="text-gray-400 mx-auto mb-3" />
                  <p className="text-2xl font-bold">{m.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-8 text-center">
            <p className="modern-eyebrow mb-4">Get In Touch</p>
            <div className="flex flex-wrap justify-center items-center gap-5">
              <a href={`mailto:${PROFILE.email}`} className="modern-btn">
                <Mail size={16} /> {PROFILE.email}
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="modern-link flex items-center gap-2"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </section>
        </main>
      ) : (
      <main className="max-w-5xl mx-auto px-6 md:px-12">
        {/* About */}
        <section id="about" className="py-16 modern-divider">
          <p className="modern-eyebrow mb-4">About</p>
          <p className="text-lg leading-relaxed max-w-3xl mb-8">{PROFILE.professionalSummary}</p>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={16} /> {PROFILE.location}
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap size={16} /> {EDUCATION.degree}, {EDUCATION.school} ({EDUCATION.years})
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} /> {EDUCATION.certs[0]}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section id="proof" className="py-16 modern-divider">
          <p className="modern-eyebrow mb-6">Good to Talk To</p>
          <div className="grid md:grid-cols-2 gap-6">
            {HATS_PROOF.filter((h) => MODERN_PROOF_TITLES.includes(h.title)).map(
              (h) => {
                const Icon = MODERN_PROOF_ICONS[h.title];
                return (
                  <div
                    key={h.title}
                    data-testid={`modern-proof-${h.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="modern-card p-6 flex flex-col gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Icon size={18} className="text-gray-700" />
                    </div>
                    <h3 className="font-bold text-lg">{h.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{h.proof}</p>
                  </div>
                );
              }
            )}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 modern-divider">
          <p className="modern-eyebrow mb-6">Skills</p>
          <div className="flex flex-wrap gap-2.5">
            {SKILLS.map((s) => (
              <span key={s.name} className="modern-tag">
                {s.name}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 modern-divider">
          <p className="modern-eyebrow mb-6">Experience</p>
          <div className="space-y-10">
            {EXPERIENCE.map((e) => (
              <div key={e.company} className="grid md:grid-cols-12 gap-4">
                <div className="md:col-span-3">
                  <p className="text-xs uppercase tracking-wide text-gray-500">{e.period}</p>
                  <h3 className="font-bold mt-1">{e.company}</h3>
                  <p className="text-sm text-gray-600">{e.role}</p>
                </div>
                <ul className="md:col-span-9 space-y-2 text-sm text-gray-700">
                  {e.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-2">
                      <span className="text-gray-400">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Work */}
        <section id="work" className="py-16 modern-divider">
          <p className="modern-eyebrow mb-6">Selected Work</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => {
              const isGated = p.action === "password-reveal";
              const isComingSoon = p.action === "coming-soon";
              const isInfo = p.action === "info";
              const cardBody = (
                <>
                  <div className="overflow-hidden relative">
                    {isComingSoon || isInfo ? (
                      <div
                        className="w-full aspect-[16/10] flex items-center justify-center"
                        style={{
                          background: `linear-gradient(160deg, ${p.accent} 0%, #f3f4f6 100%)`,
                        }}
                      >
                        {isComingSoon ? (
                          <Rocket size={48} className="text-gray-400/70 group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                          <Palette size={48} className="text-gray-400/70" />
                        )}
                      </div>
                    ) : (
                      <img
                        src={p.image}
                        alt={`${p.name} preview`}
                        loading="lazy"
                        className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    {isGated && (
                      <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                        <Lock size={13} />
                      </span>
                    )}
                    {isComingSoon && (
                      <div className="absolute top-3 -right-9 rotate-45 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest px-9 py-1">
                        Coming Soon
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-lg">{p.name}</h3>
                      {isComingSoon ? (
                        <Rocket size={16} className="mt-1 text-gray-400 flex-shrink-0" />
                      ) : isInfo ? (
                        <Palette size={16} className="mt-1 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ArrowUpRight size={16} className="mt-1 text-gray-400 group-hover:text-black transition flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">{p.tag}</p>
                    <p className="text-sm mt-3 text-gray-600 leading-relaxed">{p.blurb}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span key={s} className="modern-tag text-xs py-1">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              );

              if (isInfo) {
                return (
                  <div
                    key={p.id}
                    data-testid={`project-card-${p.id}`}
                    className="modern-card overflow-hidden flex flex-col text-left"
                  >
                    {cardBody}
                  </div>
                );
              }

              if (isComingSoon) {
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() =>
                      toast(`${p.name} is still compiling. check back soon.`)
                    }
                    data-testid={`project-card-${p.id}`}
                    className="modern-card overflow-hidden flex flex-col group text-left"
                  >
                    {cardBody}
                  </button>
                );
              }

              if (isGated) {
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setGatedProject(p)}
                    data-testid={`project-card-${p.id}`}
                    className="modern-card overflow-hidden flex flex-col group text-left"
                  >
                    {cardBody}
                  </button>
                );
              }
              return (
                <a
                  key={p.id}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`project-card-${p.id}`}
                  className="modern-card overflow-hidden flex flex-col group"
                >
                  {cardBody}
                </a>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 text-center">
          <p className="modern-eyebrow mb-4">Get In Touch</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Let's build something great.</h2>
          <div className="flex flex-wrap justify-center items-center gap-5">
            <a href={`mailto:${PROFILE.email}`} className="modern-btn">
              <Mail size={16} /> {PROFILE.email}
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="modern-link flex items-center gap-2"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={PROFILE.githubDev}
              target="_blank"
              rel="noreferrer"
              className="modern-link flex items-center gap-2"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </section>
      </main>
      )}

      {/* Footer */}
      <footer className="modern-divider text-center py-10">
        <p className="text-sm text-gray-500 mb-4">&copy; {new Date().getFullYear()} {PROFILE.name}</p>
        <EraWebring onPrev={onEraPrev} onNext={onEraNext} linkClassName="modern-link" />
        <p className="text-xs text-gray-400 mt-4 italic">
          Built with React and unreasonable optimism.
        </p>
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
            <motion.div
              className="relative bg-white rounded-3xl border border-gray-200 p-8 md:p-10 max-w-md w-full text-left"
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
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
              >
                <X size={16} />
              </button>
              <span className="modern-tag inline-flex mb-4">
                <Lock size={11} className="mr-1" /> Preview access
              </span>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                {gatedProject.name}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Full public access is gated to protect the product. Use the
                preview password below to log in on the site.
              </p>
              <div className="mt-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2">
                  Preview password
                </p>
                <div
                  className="flex items-center justify-between gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3"
                  data-testid="password-value-row"
                >
                  <code className="font-mono text-gray-900 text-base">
                    {gatedProject.password}
                  </code>
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  data-testid="password-copy-and-open"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(gatedProject.password);
                      toast.success("Password copied", {
                        description: "Opening the site in a new tab.",
                      });
                    } catch {
                      toast("Opening the site. Copy the password manually.");
                    }
                    window.open(gatedProject.href, "_blank", "noopener");
                    setGatedProject(null);
                  }}
                  className="modern-btn flex-1 justify-center"
                >
                  <Copy size={14} /> Copy &amp; open site{" "}
                  <ExternalLink size={14} />
                </button>
                <button
                  type="button"
                  data-testid="password-cancel"
                  onClick={() => setGatedProject(null)}
                  className="modern-btn-outline"
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

export default ModernPortfolio;
