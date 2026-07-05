import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { PROFILE, SKILLS, EXPERIENCE, EDUCATION, PROJECTS } from "../data/portfolio";
import EraWebring from "@/components/EraWebring";
import MagicEightBallToast from "@/components/MagicEightBallToast";
import CareerTrailGame from "@/components/CareerTrailGame";
import TerminalPasswordToast from "@/components/TerminalPasswordToast";

const BOOT_LINES = [
  "BIOS v0.1 ................................ OK",
  "MOUNTING /home/tara ...................... OK",
  "LOADING SKILLS.DLL ........................ OK",
  "INITIALIZING RESUME.TXT .................. OK",
  "WELCOME, USER.",
];

const ENTER_COMMANDS = [
  {
    id: "pink",
    command: "./enter-pink-glam-version.sh",
    hint: "# click for the pink glam portfolio",
    launchLabel: "the pink glam version",
  },
  {
    id: "professional",
    command: "./enter-for-professional-portfolio.sh",
    hint: "# click for the professional portfolio",
    launchLabel: "the professional version",
  },
];

// Types out a short string one character at a time, with a blinking cursor
// while it's still going. Used for the "Pinky promise. :)" aside so it reads
// like she's typing it live rather than it just appearing with the rest.
const TypedText = ({ text }) => {
  const [typedLen, setTypedLen] = useState(0);

  useEffect(() => {
    setTypedLen(0);
    const interval = setInterval(() => {
      setTypedLen((len) => {
        if (len >= text.length) {
          clearInterval(interval);
          return len;
        }
        return len + 1;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <>
      {text.slice(0, typedLen)}
      {typedLen < text.length && <span className="terminal-cursor-blink">_</span>}
    </>
  );
};

const lineVariants = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { delay: i * 0.3, duration: 0.2 },
  }),
};

const TABS = [
  { id: "whoami", label: "whoami" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "education", label: "education" },
  { id: "projects", label: "projects" },
];

const TerminalEntrance = ({ onNext, onEnterMakeover, onEnterProfessional, autoStartTrail }) => {
  const [showGame, setShowGame] = useState(!!autoStartTrail);
  const [activeTab, setActiveTab] = useState("whoami");
  const [expandedExp, setExpandedExp] = useState(null);
  const [expandedProj, setExpandedProj] = useState(null);
  const [launching, setLaunching] = useState(null);
  const [typedLen, setTypedLen] = useState(0);

  const ENTER_HANDLERS = {
    pink: onEnterMakeover,
    professional: onEnterProfessional,
  };

  const handleEnterCommand = (entry) => {
    if (launching) return;
    setLaunching(entry);
    setTypedLen(0);
  };

  useEffect(() => {
    if (!launching) return;
    if (typedLen < launching.command.length) {
      const t = setTimeout(() => setTypedLen((n) => n + 1), 18);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => ENTER_HANDLERS[launching.id]?.(), 450);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [launching, typedLen]);

  const handleProjectClick = (p) => {
    if (p.action === "password-reveal") {
      toast.custom((id) => <TerminalPasswordToast id={id} project={p} />, {
        id: `terminal-password-${p.id}`,
        duration: Infinity,
        unstyled: true,
      });
      return;
    }
    if (p.action === "coming-soon") {
      toast(`${p.name} is still compiling. check back soon.`);
      return;
    }
    window.open(p.href, "_blank", "noopener");
  };

  const handlePrev = () => {
    toast.custom((id) => <MagicEightBallToast id={id} />, {
      id: "magic-8-ball",
      duration: Infinity,
      unstyled: true,
    });
  };

  const handleBreakEverything = () => {
    setShowGame(false);
    toast.custom(
      (id) => (
        <div
          style={{
            fontFamily: "'Source Code Pro', 'Courier New', monospace",
            background: "#050805",
            color: "#33ff66",
            border: "1px solid #33ff66",
            borderRadius: 12,
            padding: "14px 16px",
            maxWidth: 320,
          }}
        >
          <p style={{ margin: 0 }}>YOUR WAGON HAS BROKEN AN AXLE.</p>
          <p style={{ margin: "6px 0 0", opacity: 0.7, fontSize: 12 }}>
            you picked "move fast and break things." this is the things.
          </p>
          <p style={{ margin: "6px 0 0", opacity: 0.7, fontSize: 12 }}>
            relax, that was on purpose. consider it... the final commit. 🫡
          </p>
          <button
            type="button"
            onClick={() => toast.dismiss(id)}
            style={{
              display: "block",
              marginTop: 10,
              background: "none",
              border: "none",
              color: "#33ff66",
              opacity: 0.6,
              textDecoration: "underline",
              cursor: "pointer",
              fontSize: 11,
              padding: 0,
              fontFamily: "inherit",
            }}
          >
            close
          </button>
        </div>
      ),
      { id: "break-everything", duration: Infinity, unstyled: true }
    );
    onNext?.();
  };

  return (
    <div className="terminal-body terminal-crt" data-testid="terminal-entrance">
      {/* Bouncing CD easter egg -> back to the MySpace page, same visual
          language as the floppy disk on the retro page. */}
      <motion.button
        type="button"
        onClick={onNext}
        data-testid="cd-myspace-launcher"
        title="back to 2003"
        className="fixed bottom-4 right-4 z-40 flex flex-col items-center gap-1"
        animate={{ y: [0, -16, 0], rotate: [8, -8, 8] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        <span
          className="relative text-5xl"
          style={{ filter: "drop-shadow(0 0 10px rgba(51,255,102,0.85))" }}
        >
          💿
          <span className="absolute -top-2 -left-3 text-yellow-300 text-lg animate-ping">
            ✨
          </span>
          <span
            className="absolute -bottom-1 -right-3 text-pink-300 text-sm animate-ping"
            style={{ animationDelay: "0.4s" }}
          >
            ✨
          </span>
          <span
            className="absolute top-0 -right-4 text-cyan-300 text-base animate-pulse"
            style={{ animationDelay: "0.8s" }}
          >
            ✦
          </span>
        </span>
        <span className="terminal-cursor-blink text-[#33ff66] text-xs font-bold bg-black/70 px-2 py-0.5 rounded">
          CLICK ME!!
        </span>
      </motion.button>

      <div className="max-w-3xl mx-auto px-4 py-10 text-sm md:text-base leading-relaxed">
        <pre className="mb-6 overflow-x-auto whitespace-pre">
{String.raw` _____  _    ____      _      ____  _   _ ___ ____  _____ ____
|_   _|/ \  |  _ \    / \    / ___|| | | |_ _|  _ \| ____/ ___|
  | | / _ \ | |_) |  / _ \   \___ \| |_| || || |_) |  _| \___ \
  | |/ ___ \|  _ <  / ___ \   ___) |  _  || ||  __/| |___ ___) |
  |_/_/   \_\_| \_\/_/   \_\ |____/|_| |_|___|_|   |_____|____/
`}
        </pre>

        <div className="mb-6">
          {BOOT_LINES.map((line, i) => (
            <motion.p
              key={line}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {showGame ? (
          <div className="mb-6">
            <CareerTrailGame
              onExit={() => setShowGame(false)}
              onBreakEverything={handleBreakEverything}
            />
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-1 mb-3 border-b border-[#33ff66]/30 pb-3">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTab(t.id)}
                  data-testid={`terminal-tab-${t.id}`}
                  className={`px-3 py-1 text-xs md:text-sm ${
                    activeTab === t.id
                      ? "bg-[#33ff66] text-[#050805] font-bold"
                      : "terminal-link"
                  }`}
                >
                  $ cat {t.id}.txt
                </button>
              ))}
            </div>

            <div className="border border-[#33ff66]/40 p-4 mb-6">
              {activeTab === "whoami" && (
                <>
                  <p>{PROFILE.name}</p>
                  <p>{PROFILE.title}</p>
                  <p className="mt-2 opacity-80">
                    {PROFILE.tagline.includes("Pinky promise. :)") ? (
                      <>
                        {PROFILE.tagline.split("Pinky promise. :)")[0]}
                        <TypedText text="Pinky promise. :)" />
                        {PROFILE.tagline.split("Pinky promise. :)")[1]}
                      </>
                    ) : (
                      PROFILE.tagline
                    )}
                  </p>
                </>
              )}

              {activeTab === "skills" && (
                <p className="opacity-90">
                  {SKILLS.map((s) => `[${s.name}]`).join("  ")}
                </p>
              )}

              {activeTab === "experience" && (
                <div className="space-y-2">
                  {EXPERIENCE.map((e) => {
                    const isOpen = expandedExp === e.company;
                    return (
                      <div key={e.company}>
                        <button
                          type="button"
                          onClick={() => setExpandedExp(isOpen ? null : e.company)}
                          data-testid={`terminal-exp-toggle-${e.company}`}
                          className="terminal-link text-left flex items-start gap-2 w-full"
                        >
                          <span>{isOpen ? "[-]" : "[+]"}</span>
                          <span>
                            {e.role} @ {e.company} ({e.period})
                          </span>
                        </button>
                        {isOpen && (
                          <div className="pl-6 mt-1">
                            {e.highlights.map((h, hi) => (
                              <p key={hi} className="opacity-80">
                                - {h}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {activeTab === "education" && (
                <>
                  <p className="opacity-90">
                    &gt; {EDUCATION.degree}, {EDUCATION.school} ({EDUCATION.years})
                  </p>
                  <p className="opacity-90 pl-4">- {EDUCATION.certs[0]}</p>
                </>
              )}

              {activeTab === "projects" && (
                <div className="space-y-2">
                  {PROJECTS.map((p) => {
                    const isOpen = expandedProj === p.id;
                    return (
                      <div key={p.id}>
                        <button
                          type="button"
                          onClick={() => setExpandedProj(isOpen ? null : p.id)}
                          data-testid={`terminal-project-${p.id}`}
                          className="terminal-link text-left flex items-start gap-2 w-full"
                        >
                          <span>{isOpen ? "[-]" : "[+]"}</span>
                          <span>
                            {p.name}: {p.tag}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="pl-6 mt-1">
                            <p className="opacity-80">{p.blurb}</p>
                            <p className="opacity-60 text-xs mt-1">
                              [{p.stack.join(", ")}]
                            </p>
                            {p.action !== "info" && (
                              <button
                                type="button"
                                onClick={() => handleProjectClick(p)}
                                data-testid={`terminal-project-open-${p.id}`}
                                className="terminal-link mt-1"
                              >
                                &gt; open
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setShowGame(true)}
              data-testid="trail-launch"
              className="mb-6 flex flex-wrap items-center gap-1 text-left"
            >
              <span className="terminal-link">$ ./play-the-trail.sh</span>
              <span className="opacity-50 italic">
                # or click here to play a game instead
              </span>
            </button>

            <div className="mb-6 space-y-2">
              {ENTER_COMMANDS.map((entry) => {
                const isLaunching = launching?.id === entry.id;
                const displayText = isLaunching
                  ? entry.command.slice(0, typedLen)
                  : entry.command;
                return (
                  <div
                    key={entry.id}
                    className="flex flex-wrap items-center gap-1 cursor-pointer"
                    onClick={() => handleEnterCommand(entry)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleEnterCommand(entry);
                    }}
                    role="button"
                    tabIndex={0}
                    data-testid={`terminal-enter-line-${entry.id}`}
                  >
                    <span>$</span>
                    <input
                      type="text"
                      value={displayText}
                      readOnly
                      spellCheck={false}
                      data-testid={`terminal-enter-command-${entry.id}`}
                      className="terminal-input cursor-pointer"
                      style={{ width: `${entry.command.length + 1}ch` }}
                    />
                    <span className="terminal-cursor-blink">_</span>
                    {isLaunching ? (
                      typedLen >= entry.command.length && (
                        <span className="opacity-80 italic text-yellow-300">
                          # launching {entry.launchLabel}...
                        </span>
                      )
                    ) : (
                      <span className="opacity-50 italic">{entry.hint}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {!showGame && (
          <div className="border-t border-[#33ff66]/30 pt-4">
            <EraWebring onPrev={handlePrev} onNext={onNext} linkClassName="terminal-link" />
          </div>
        )}

        <p className="text-xs opacity-50 mt-4 italic">
          Every pixel handled with a French manicure and over-engineering.
        </p>
      </div>
    </div>
  );
};

export default TerminalEntrance;
