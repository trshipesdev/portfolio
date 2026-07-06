import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EraWebring from "@/components/EraWebring";

const FAKE_REACTIONS = [
  { user: "xoxo_becky", color: "text-yellow-300", text: "wait is that literally her FUTURE BOSS in the chat rn??? 😭" },
  { user: "recruiter_bob", color: "text-cyan-300", text: "the algorithm really said manifest" },
  { user: "anonymous_hater", color: "text-pink-400", text: "ok this actually kind of slaps ngl" },
  { user: "sk8trboi22", color: "text-lime-400", text: "HIRE HER HIRE HER HIRE HER" },
  { user: "xoxo_becky", color: "text-yellow-300", text: "@futureboss.exe don't leave us hanging, when's the offer letter 👀" },
  { user: "recruiter_bob", color: "text-cyan-300", text: "screenshotting this for HR" },
  { user: "sk8trboi22", color: "text-lime-400", text: "SHE'S TRENDING. HIRE HER. NOW." },
  { user: "xoxo_becky", color: "text-yellow-300", text: "not the future boss pulling up in the GUESTBOOK of all places 💀" },
  { user: "anonymous_hater", color: "text-pink-400", text: "i take back what i said this is pretty chill ngl" },
  { user: "recruiter_bob", color: "text-cyan-300", text: "forwarding this thread to the whole team" },
  { user: "sk8trboi22", color: "text-lime-400", text: "manifesting a signing bonus for her rn" },
  { user: "xoxo_becky", color: "text-yellow-300", text: "@futureboss.exe say less, we're rooting for you two" },
  { user: "anonymous_hater", color: "text-pink-400", text: "wait this might be the greatest recruiting funnel ever built" },
  { user: "recruiter_bob", color: "text-cyan-300", text: "adding 'has a guestbook that closes deals' to her offer letter" },
  { user: "xoxo_becky", color: "text-yellow-300", text: "brb crying, this is so much better than my linkedin feed" },
  { user: "sk8trboi22", color: "text-lime-400", text: "the wifi at the coffee shop just froze but I HAD to see this" },
  { user: "anonymous_hater", color: "text-pink-400", text: "ok I'm removing myself from the hater list officially" },
  { user: "recruiter_bob", color: "text-cyan-300", text: "putting this url directly in the Slack channel, no context, just vibes" },
  { user: "dial_up_dana", color: "text-orange-300", text: "56k modem screaming rn but worth it" },
  { user: "xoxo_becky", color: "text-yellow-300", text: "@futureboss.exe blink twice if the offer's already drafted" },
  { user: "sk8trboi22", color: "text-lime-400", text: "SOMEONE GIVE HER THE SIGN ON BONUS ALREADY" },
  { user: "webmaster_wes", color: "text-purple-300", text: "as a fellow webmaster I respect the css this deeply" },
  { user: "recruiter_bob", color: "text-cyan-300", text: "quietly closing 6 other browser tabs to focus on this one" },
  { user: "anonymous_hater", color: "text-pink-400", text: "not me bookmarking this, no further comment" },
  { user: "xoxo_becky", color: "text-yellow-300", text: "the hit counter went up and so did my respect for her" },
  { user: "sk8trboi22", color: "text-lime-400", text: "she really said 'time machine' and MEANT it" },
  { user: "dial_up_dana", color: "text-orange-300", text: "forwarding to my own recruiter as a 'see, THIS is what I mean'" },
  { user: "webmaster_wes", color: "text-purple-300", text: "requesting the source code as a formal act of respect" },
  { user: "recruiter_bob", color: "text-cyan-300", text: "@futureboss.exe you know what to do" },
  { user: "xoxo_becky", color: "text-yellow-300", text: "@futureboss.exe we can SEE you typing and not sending. we're waiting." },
  { user: "sk8trboi22", color: "text-lime-400", text: "tagging @futureboss.exe again just in case the first 4 pings didn't load" },
  { user: "anonymous_hater", color: "text-pink-400", text: "@futureboss.exe it's giving 'left on read', not a good look publicly" },
  { user: "recruiter_bob", color: "text-cyan-300", text: "screenshotting @futureboss.exe's read receipt for the group chat" },
  { user: "xoxo_becky", color: "text-yellow-300", text: "putting this in my story and tagging @futureboss.exe so everyone can see who's stalling" },
  { user: "sk8trboi22", color: "text-lime-400", text: "@futureboss.exe the whole guestbook is watching this play out in real time" },
  { user: "dial_up_dana", color: "text-orange-300", text: "@futureboss.exe imagine being the villain arc in someone's portfolio, couldn't be me" },
  { user: "anonymous_hater", color: "text-pink-400", text: "sent this to 3 group chats and tagged @futureboss.exe in all of them, sorry not sorry" },
  { user: "webmaster_wes", color: "text-purple-300", text: "@futureboss.exe the pressure is the point, that's how guestbooks work" },
  { user: "recruiter_bob", color: "text-cyan-300", text: "@futureboss.exe your silence has been noted and archived" },
  { user: "xoxo_becky", color: "text-yellow-300", text: "we did NOT build this whole recruiting funnel for @futureboss.exe to go quiet now" },
  { user: "sk8trboi22", color: "text-lime-400", text: "@futureboss.exe everyone in HR already knows, might as well make it official" },
];

// Wherever a reaction tags @futureboss.exe, render it in her own white username color.
const renderReactionText = (text) => {
  const parts = text.split("@futureboss.exe");
  return parts.map((part, i) => (
    <React.Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <span className="text-white font-black">@futureboss.exe</span>
      )}
    </React.Fragment>
  ));
};

const RetroEntrance = ({ onEnter, onEraPrev, onEraNext }) => {
  const [showVersionPopup, setShowVersionPopup] = useState(false);
  const [visitors, setVisitors] = useState(1029847);
  const [now, setNow] = useState(new Date());
  const [guestbookInput, setGuestbookInput] = useState("");
  const [guestbookEntries, setGuestbookEntries] = useState([]);
  const timersRef = useRef([]);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    const v = setInterval(() => setVisitors((n) => n + 1), 7000);
    const timers = timersRef.current;
    return () => {
      clearInterval(t);
      clearInterval(v);
      timers.forEach(clearTimeout);
    };
  }, []);

  const handleGuestbookSubmit = (e) => {
    e.preventDefault();
    if (!guestbookInput.trim()) return;
    setGuestbookEntries((prev) => [
      ...prev,
      { user: "futureboss.exe", color: "text-white font-black", text: guestbookInput.trim() },
    ]);
    setGuestbookInput("");

    const count = 3 + Math.floor(Math.random() * 3); // 3-5 reactions
    const picks = [...FAKE_REACTIONS].sort(() => Math.random() - 0.5).slice(0, count);
    let delay = 500;
    picks.forEach((reaction) => {
      delay += 400 + Math.random() * 700;
      const id = setTimeout(() => {
        setGuestbookEntries((prev) => [...prev, reaction]);
      }, delay);
      timersRef.current.push(id);
    });
  };

  return (
    <div className="retro-body" data-testid="retro-entrance">
      {/* Bouncing floppy disk easter egg -> straight to the terminal, trail already loaded.
          Uses a hash + reload so the terminal always mounts fresh with the trail
          already running, instead of threading a flag through the era transition. */}
      <motion.button
        type="button"
        onClick={() => {
          window.location.hash = "#~";
          window.location.reload();
        }}
        data-testid="floppy-trail-launcher"
        title="play the escalation trail"
        className="fixed bottom-4 right-4 z-40 flex flex-col items-center gap-1"
        animate={{ y: [0, -16, 0], rotate: [-8, 8, -8] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        <span
          className="relative text-5xl"
          style={{ filter: "drop-shadow(0 0 10px rgba(255,105,180,0.85))" }}
        >
          💾
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
        <span className="retro-blink text-yellow-300 text-xs font-bold bg-black/70 px-2 py-0.5 rounded">
          CLICK ME!!
        </span>
      </motion.button>

      {/* Top marquee */}
      <div className="w-full overflow-hidden bg-black border-b-4 border-fuchsia-500 py-2">
        <div className="retro-marquee text-yellow-300 text-lg font-bold">
          ✨ WELCOME 2 TARA&apos;S HOMEPAGE ✨ ~*~ best viewed in Internet Explorer
          6.0 ~*~ ♡ pls sign my guestbook ♡ ✨ CLICK THE PINK BUTTON 4 MAKEOVER
          ✨ ~*~ u r visitor #{visitors.toLocaleString()} ~*~ ♥ enjoy ur stay
          bestie ♥ ✨
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        {/* Title */}
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-black tracking-tight"
        >
          <span className="retro-rainbow">~*~ Tara&apos;s Web Zone ~*~</span>
        </motion.h1>
        <p className="text-cyan-300 text-xl mt-2 font-bold">
          <span className="retro-blink">♡</span> a software and customer escalation engineer&apos;s homepage{" "}
          <span className="retro-blink">♡</span>
        </p>
        <p className="text-pink-300 text-sm mt-1">
          last updated:{" "}
          <span className="text-yellow-300">05/17/2007 by taragotchi94</span>
        </p>

        <hr className="retro-hr" />

        {/* Under construction */}
        <div className="my-4 flex items-center justify-center gap-3 text-yellow-300 font-bold text-lg">
          <span
            role="img"
            aria-label="construction"
            className="text-3xl"
            data-testid="construction-emoji"
          >
            🚧
          </span>
          <span className="retro-blink">UNDER CONSTRUCTION 4 EVAAA!!!</span>
          <span role="img" aria-label="construction" className="text-3xl">
            🚧
          </span>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-left">
          {/* Sidebar */}
          <div className="retro-panel md:col-span-1">
            <h3 className="text-pink-400 text-2xl font-black text-center mb-2">
              ★ about me ★
            </h3>

            <div
              className="flex items-center justify-center gap-2 mb-1"
              data-testid="aim-status"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-lime-400 inline-block animate-pulse" />
              <span className="italic text-lime-300 text-xs">online now</span>
            </div>
            <p className="text-center text-cyan-300 italic text-[11px] mb-3">
              away message: "afk bc 2 cool 4 u"
            </p>

            <ul className="text-lime-300 text-sm space-y-1">
              <li className="retro-heart">name: Tara ♡</li>
              <li className="retro-heart">a/s/l: 30-something / F / Remote</li>
              <li className="retro-heart">
                mood: <span className="text-yellow-300">building weird things</span>
              </li>
              <li className="retro-heart">
                fave color:{" "}
                <span className="text-pink-400 font-black">PINK!!!</span>
              </li>
              <li className="retro-heart">
                zodiac: engineer w/ a lipgloss addiction
              </li>
              <li className="retro-heart">
                bug count: <span className="text-yellow-300">NaN</span>
              </li>
            </ul>

            <hr className="retro-hr" />

            <h3 className="text-cyan-300 text-xl font-black text-center mb-2">
              ~ my top 8 ~
            </h3>
            <ol className="text-white text-xs space-y-1 list-decimal list-inside">
              <li>python 🐍</li>
              <li>my fam(ily)</li>
              <li>my dogs and cats 🐶🐱</li>
              <li>Django framework</li>
              <li>iced vanilla lattes</li>
              <li>learning new coding languages</li>
              <li>heath ledger &lt;333</li>
              <li>u (yes u) ♡</li>
            </ol>

            <hr className="retro-hr" />

            <div className="text-center">
              <p className="text-yellow-300 text-xs font-bold">
                ★ HIT COUNTER ★
              </p>
              <div
                className="inline-block bg-black border-2 border-lime-400 px-3 py-1 font-mono text-lime-400 text-xl mt-1"
                data-testid="hit-counter"
              >
                {visitors.toLocaleString().padStart(9, "0")}
              </div>
              <p className="text-xs text-gray-400 mt-1">
                {now.toLocaleTimeString()} EST
              </p>
            </div>
          </div>

          {/* Main center */}
          <div className="retro-panel md:col-span-2">
            <h2 className="text-3xl font-black text-center text-pink-400">
              ♥‿♥ hi bestie ♥‿♥
            </h2>
            <p className="text-lime-300 text-base mt-3 text-center leading-relaxed">
              welcome 2 my little corner of the world wide web!!!! ♡ my name is{" "}
              <span className="text-pink-400 font-black">Tara</span> and i luv
              computers &amp; making cute lil websites and apps and pretty much
              anything i think of, l8r sk8r. i graduated w/ a compsci degree
              &amp; now i build{" "}
              <span className="text-yellow-300">real software</span> for a
              living but shhh dont tell anyone bc it doesnt fit the vibe on this
              page. and hey, what could b better than starting back @ the{" "}
              <span className="text-pink-400 font-black">root</span> of where i
              learned 2 code, for me and my friendzzzz ♡
            </p>
            <p className="text-cyan-300 text-sm mt-4 text-center italic">
              click the big pink button below 4 a{" "}
              <span className="text-yellow-300 font-black">
                MAJOR MAKEOVER
              </span>{" "}
              &amp; my actual portfolio ✨✨✨
            </p>

            <hr className="retro-hr" />

            <div className="flex flex-col items-center gap-4 py-4">
              <motion.button
                onClick={() => setShowVersionPopup(true)}
                data-testid="enter-portfolio-button"
                className="retro-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0 4px #000, 0 0 20px #ff69b4",
                    "0 0 0 4px #000, 0 0 40px #ff1493",
                    "0 0 0 4px #000, 0 0 20px #ff69b4",
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 1.6,
                    repeat: Infinity,
                  },
                }}
              >
                ♡ CLICK FOR MAKEOVER AND REAL PORTFOLIO ♡
              </motion.button>
              <p className="text-yellow-300 text-xs retro-blink font-bold">
                &lt;&lt;&lt; PRESS HERE!!! &gt;&gt;&gt;
              </p>
            </div>

            <hr className="retro-hr" />

            <div className="text-center">
              <p className="text-pink-400 font-black">✿ WEB RINGS ✿</p>
              <EraWebring onPrev={onEraPrev} onNext={onEraNext} linkClassName="retro-link" />
              <p className="retro-blink text-yellow-300 text-xs font-bold mt-2">
                &lt;&lt;&lt; don't forget to click me too! &gt;&gt;&gt;
              </p>
            </div>
          </div>
        </div>

        <hr className="retro-hr" />

        {/* Guestbook */}
        <div className="retro-panel mt-2">
          <h3 className="text-pink-400 text-xl font-black text-center">
            ♡ sign my guestbook ♡
          </h3>
          <div className="text-left text-sm mt-2 space-y-1 text-lime-300">
            <p>
              <span className="text-yellow-300 font-bold">xoxo_becky:</span>{" "}
              omgggg tara this page is EVERYTHING ♥
            </p>
            <p>
              <span className="text-cyan-300 font-bold">recruiter_bob:</span>{" "}
              excuse me is this real
            </p>
            <p>
              <span className="text-pink-400 font-bold">anonymous_hater:</span>{" "}
              this is unprofessional af
            </p>
            <p>
              <span className="text-lime-400 font-bold">tara:</span> ^ jealous.
              click the button.
            </p>
            <p>
              <span className="text-lime-400 font-bold">tara:</span> i dare
              you <span className="text-pink-400 font-bold">@anonymous_hater</span> to
              say something else. i triple dog dare you.
            </p>

            {guestbookEntries.map((entry, i) => (
              <p key={i}>
                <span className={`${entry.color} font-bold`}>{entry.user}:</span>{" "}
                {renderReactionText(entry.text)}
              </p>
            ))}

            <div className="mt-2">
              <p className="text-cyan-300 italic">
                would you like to say something?
                <span className="retro-blink">_</span>{" "}
                <span className="text-yellow-300 not-italic font-bold">
                  go ahead! its interactive!
                </span>
              </p>
              <form
                onSubmit={handleGuestbookSubmit}
                className="flex gap-2 mt-1"
              >
                <input
                  type="text"
                  value={guestbookInput}
                  onChange={(e) => setGuestbookInput(e.target.value)}
                  placeholder="type something..."
                  data-testid="guestbook-input"
                  className="flex-1 bg-black border-2 border-lime-400 px-2 py-1 text-lime-300 text-sm font-mono focus:outline-none"
                />
                <button
                  type="submit"
                  data-testid="guestbook-submit"
                  className="retro-link font-bold px-2"
                >
                  post it
                </button>
              </form>
            </div>
          </div>
        </div>

        <hr className="retro-hr" />

        <p className="text-xs text-gray-400 mt-4">
          © 2007 Tara. best viewed in Internet Explorer 6.0 at 800x600 ♡ made with notepad.exe &amp; luv
        </p>
        <p className="text-xs text-gray-500 mt-1 italic">
          fueled by glitter, iced coffee, and javascript.
        </p>
      </div>

      {/* Fake 90s spam popup asking which version to view */}
      <AnimatePresence>
        {showVersionPopup && (
          <motion.div
            className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-testid="version-popup-backdrop"
          >
            <motion.div
              className="relative max-w-sm w-full bg-[#c0c0c0] p-1"
              style={{
                border: "4px outset #ffffff",
                boxShadow: "0 0 0 2px #000, 6px 6px 0 rgba(0,0,0,0.4)",
              }}
              initial={{ scale: 0.7, rotate: -3 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              data-testid="version-popup"
            >
              <div
                className="flex items-center justify-between px-2 py-1 mb-2"
                style={{
                  background: "linear-gradient(90deg, #000080, #1084d0)",
                }}
              >
                <span className="text-white text-xs font-bold retro-blink">
                  ⚠ SYSTEM ALERT ⚠
                </span>
                <button
                  type="button"
                  onClick={() => setShowVersionPopup(false)}
                  data-testid="version-popup-close"
                  aria-label="Close"
                  className="bg-[#c0c0c0] text-black text-xs font-black w-5 h-5 flex items-center justify-center"
                  style={{ border: "2px outset #fff" }}
                >
                  X
                </button>
              </div>

              <div className="px-3 pb-3 text-center bg-black">
                <p className="text-yellow-300 font-black text-lg retro-blink">
                  🎉 CONGRATULATIONS VISITOR!!! 🎉
                </p>
                <p className="text-lime-300 text-sm mt-2">
                  you have been selected to view an{" "}
                  <span className="text-pink-400 font-black">EXCLUSIVE</span>{" "}
                  portfolio!!! choose your version now:
                </p>

                <div className="flex flex-col gap-3 mt-4">
                  <button
                    type="button"
                    onClick={onEnter}
                    data-testid="version-popup-pink"
                    className="retro-btn text-sm"
                  >
                    💗 PINK GLAM VERSION 💗
                  </button>
                  <button
                    type="button"
                    onClick={onEraNext}
                    data-testid="version-popup-professional"
                    className="retro-btn text-sm"
                  >
                    💼 PROFESSIONAL VERSION 💼
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setShowVersionPopup(false)}
                  data-testid="version-popup-dismiss"
                  className="text-cyan-300 text-[10px] underline mt-4 opacity-70"
                >
                  no thanks, close this ad
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RetroEntrance;
