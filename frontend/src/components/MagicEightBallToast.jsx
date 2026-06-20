import React, { useState } from "react";
import { toast } from "sonner";

const ANSWERS = [
  "It is certain: HIRE TARA.",
  "Without a doubt: HIRE TARA.",
  "Signs point to... HIRE TARA.",
  "Outlook good: HIRE TARA.",
  "You may rely on it: HIRE TARA.",
  "As I see it: HIRE TARA.",
  "Most likely: HIRE TARA.",
  "It is decidedly so: HIRE TARA.",
  "Ask again? No need, HIRE TARA.",
  "Outlook not so good... jk. HIRE TARA.",
  "Yes, this is rigged: HIRE TARA.",
];

const MagicEightBallToast = ({ id }) => {
  const [answer, setAnswer] = useState(null);

  const shake = () => {
    setAnswer((prev) => {
      let next = prev;
      while (next === prev) {
        next = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
      }
      return next;
    });
  };

  return (
    <div
      data-testid="magic-8-ball-toast"
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
      <p style={{ margin: 0 }}>no, come on, this is the oldest i know.</p>
      <p style={{ margin: "6px 0 0", opacity: 0.7, fontSize: 12 }}>
        (there's an enter command down there if you want the real portfolio)
      </p>
      <button
        type="button"
        onClick={shake}
        data-testid="magic-8-ball-shake"
        style={{
          marginTop: 10,
          background: "transparent",
          border: "1px solid #33ff66",
          color: "#33ff66",
          borderRadius: 999,
          padding: "6px 14px",
          cursor: "pointer",
          fontFamily: "inherit",
          fontSize: 13,
        }}
      >
        🎱 shake to see your future
      </button>
      {answer && (
        <p
          className="italic"
          data-testid="magic-8-ball-answer"
          style={{ marginTop: 10, marginBottom: 0 }}
        >
          {answer}
        </p>
      )}
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
  );
};

export default MagicEightBallToast;
