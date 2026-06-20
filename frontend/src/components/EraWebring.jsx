import React, { useState } from "react";

// Old-internet-lingo the "? random ?" link cycles through. It's a running
// joke, not real navigation — the joke IS that it never goes anywhere.
const RANDOM_WORDS = [
  "? random ?",
  "idk??",
  "ttyl",
  "brb",
  "wut up?",
  "pc4pc?",
  "kk",
  "jk",
  "g2g",
  "np",
  "brb l8r",
  "ROFL",
  "wb",
];

const EraWebring = ({ onPrev, onNext, linkClassName = "retro-link" }) => {
  const [randomIndex, setRandomIndex] = useState(0);

  const cycleRandom = (e) => {
    e.preventDefault();
    setRandomIndex((prev) => {
      if (prev === 0) return 1;
      let next = prev;
      while (next === prev) {
        next = 1 + Math.floor(Math.random() * (RANDOM_WORDS.length - 1));
      }
      return next;
    });
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-2 text-sm" data-testid="era-webring">
      <a
        className={linkClassName}
        href="#"
        data-testid="webring-prev"
        onClick={(e) => {
          e.preventDefault();
          onPrev?.();
        }}
      >
        &lt;&lt; prev
      </a>
      <a
        className={linkClassName}
        href="#"
        data-testid="webring-random"
        onClick={cycleRandom}
      >
        {RANDOM_WORDS[randomIndex]}
      </a>
      <a
        className={linkClassName}
        href="#"
        data-testid="webring-next"
        onClick={(e) => {
          e.preventDefault();
          onNext?.();
        }}
      >
        next &gt;&gt;
      </a>
    </div>
  );
};

export default EraWebring;
