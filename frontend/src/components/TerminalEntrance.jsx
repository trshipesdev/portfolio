import React, { useState } from "react";
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

const ENTER_COMMAND = "./enter-for-makeover-and-portfolio.sh";

const lineVariants = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { delay: i * 0.3, duration: 0.2 },
  }),
};

const TerminalEntrance = ({ onNext, onEnterMakeover, autoStartTrail }) => {
  const [showGame, setShowGame] = useState(!!autoStartTrail);

  const handleCommandKeyDown = (e) => {
    if (e.key === "Enter") {
      onEnterMakeover?.();
    }
  };

  const handleProjectClick = (p) => {
    if (p.action === "password-reveal") {
      toast.custom((id) => <TerminalPasswordToast id={id} project={p} />, {
        id: `terminal-password-${p.id}`,
        duration: Infinity,
        unstyled: true,
      });
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
            <p className="mb-2">
              $ cat resume.txt
            </p>
            <div className="border border-[#33ff66]/40 p-4 mb-6">
              <p>{PROFILE.name}</p>
              <p>{PROFILE.title}</p>
              <p className="mt-2 opacity-80">{PROFILE.tagline}</p>

              <p className="mt-4">$ ls skills/</p>
              <p className="opacity-90">
                {SKILLS.map((s) => `[${s.name}]`).join("  ")}
              </p>

              <p className="mt-4">$ cat experience.log</p>
              {EXPERIENCE.map((e) => (
                <div key={e.company} className="mt-2">
                  <p>
                    &gt; {e.role} @ {e.company} ({e.period})
                  </p>
                  {e.highlights.map((h, hi) => (
                    <p key={hi} className="opacity-80 pl-4">
                      - {h}
                    </p>
                  ))}
                </div>
              ))}

              <p className="mt-4">$ cat education.log</p>
              <p className="opacity-90">
                &gt; {EDUCATION.degree}, {EDUCATION.school} ({EDUCATION.years})
              </p>
              <p className="opacity-90 pl-4">- {EDUCATION.certs[0]}</p>

              <p className="mt-4">$ ls projects/</p>
              {PROJECTS.map((p) => (
                <div key={p.id} className="mt-2">
                  <button
                    type="button"
                    onClick={() => handleProjectClick(p)}
                    data-testid={`terminal-project-${p.id}`}
                    className="terminal-link text-left"
                  >
                    &gt; {p.name}: {p.tag}
                  </button>
                  <p className="opacity-80 pl-4">{p.blurb}</p>
                  <p className="opacity-60 pl-4 text-xs">[{p.stack.join(", ")}]</p>
                </div>
              ))}
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

            <div
              className="mb-6 flex flex-wrap items-center gap-1 cursor-pointer"
              onClick={() => onEnterMakeover?.()}
              data-testid="terminal-enter-line"
            >
              <span>$</span>
              <input
                type="text"
                value={ENTER_COMMAND}
                onKeyDown={handleCommandKeyDown}
                data-testid="terminal-enter-command"
                autoFocus
                readOnly
                spellCheck={false}
                className="terminal-input cursor-pointer"
                style={{ width: `${ENTER_COMMAND.length + 1}ch` }}
              />
              <span className="opacity-50 italic">
                # hit enter for the real portfolio
              </span>
              <span className="terminal-cursor-blink">_</span>
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
