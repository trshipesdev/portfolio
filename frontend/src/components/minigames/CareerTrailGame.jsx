import React, { useState } from "react";

// THE ESCALATION TRAIL — a customer-ticket-to-shipped-fix treasure hunt,
// Oregon Trail style. Every ending (even the deaths) loops back to the
// same moral: hire Tara.
const NODES = {
  start: {
    text: "THE ESCALATION TRAIL\n\nYou are Ticket #4471: \"the app is broken, please help ASAP!!!\"\nYou have: 1 anxious customer, 3 vague error logs, and a laptop that's definitely overheating.",
    choices: [{ label: "continue", next: "fork1" }],
  },
  fork1: {
    text: "The trail forks. How do you proceed?",
    choices: [
      { label: "[A] take the 'move fast and break things' shortcut", action: "break" },
      { label: "[B] take the slow, well-tested path", next: "river" },
      { label: "[C] ask Stack Overflow for directions", next: "closed_duplicate" },
    ],
  },
  closed_duplicate: {
    text: "Marked as duplicate of a question from 2009. You lost a day but gained wisdom.",
    choices: [{ label: "continue", next: "river" }],
  },
  river: {
    text: "You reach a raging river: your fix and your teammate's fix, flowing in two completely different directions, refusing to agree on anything.",
    choices: [
      { label: "[A] force push", next: "end_force_push" },
      { label: "[B] resolve carefully", next: "customer_reply" },
    ],
  },
  customer_reply: {
    text: "The customer messages: \"any updates?? this is urgent!!\"\n\nType your reply:",
    textInput: true,
    next: "escalation",
  },
  escalation: {
    text: "Your reply calms the customer... for now. Then, a Slack ping: your manager wants a status update. How do you handle it?",
    choices: [
      { label: "[A] over-explain every technical detail", next: "end_hired_raise" },
      { label: "[B] give a calm, confident summary", next: "end_hired_best" },
      { label: "[C] mute Slack and hope it resolves itself", next: "end_ghost" },
    ],
  },
  end_force_push: {
    text: "YOU FORCE PUSHED TO MAIN.\n\nWait... why don't you have branch protection turned on?\n\nMoral of the story: hire Tara. She makes sure to always double check.",
    ending: true,
  },
  end_ghost: {
    text: "You muted Slack. The customer escalated to the CEO. The CEO escalated to you. You have been let go.\n\nUnfortunately, the Oregon Trail takes place in the 1800s, so there's no unemployment office to file with. Godspeed, pioneer.\n\nMoral of the story: hire Tara. She actually answers her tickets.",
    ending: true,
  },
  end_hired_raise: {
    text: "You over-explained every technical detail. Now the customer's confused, and so is Customer Success.\n\nMoral of the story: hire Tara instead. She's really good at that technical-to-human translation layer.",
    ending: true,
  },
  end_hired_best: {
    text: "TICKET RESOLVED. Customer thrilled, manager impressed, crisis averted before lunch.\n\nMoral of the story: hire Tara. Obviously.",
    ending: true,
  },
};

const CareerTrailGame = ({ onExit, onBreakEverything }) => {
  const [nodeId, setNodeId] = useState("start");
  const [history, setHistory] = useState([]);
  const [replyText, setReplyText] = useState("");
  const node = NODES[nodeId];

  const goTo = (nextId) => {
    setHistory((h) => [...h, nodeId]);
    setNodeId(nextId);
  };

  const handleChoice = (choice) => {
    if (choice.action === "break") {
      onBreakEverything?.();
      return;
    }
    const nextId = choice.random
      ? choice.random[Math.floor(Math.random() * choice.random.length)]
      : choice.next;
    goTo(nextId);
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setReplyText("");
    goTo(node.next);
  };

  const goBack = () => {
    setHistory((h) => {
      if (h.length === 0) return h;
      setNodeId(h[h.length - 1]);
      return h.slice(0, -1);
    });
  };

  return (
    <div data-testid="career-trail-game">
      <div className="flex gap-4 mb-4 text-xs">
        {history.length > 0 && (
          <button
            type="button"
            onClick={goBack}
            data-testid="trail-back"
            className="terminal-link"
          >
            &lt;&lt; go back
          </button>
        )}
        <button
          type="button"
          onClick={onExit}
          data-testid="trail-quit-top"
          className="terminal-link"
        >
          quit trail
        </button>
      </div>

      <p className="mb-4 whitespace-pre-wrap">{node.text}</p>

      {node.textInput ? (
        <form
          onSubmit={handleReplySubmit}
          className="flex flex-wrap items-center gap-2"
        >
          <span>&gt;</span>
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            onKeyDown={(e) => e.stopPropagation()}
            placeholder="type your reply..."
            data-testid="trail-reply-input"
            autoFocus
            spellCheck={false}
            className="terminal-input flex-1"
          />
          <button type="submit" data-testid="trail-reply-submit" className="terminal-link">
            send
          </button>
        </form>
      ) : node.ending ? (
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={() => {
              setHistory([]);
              setNodeId("start");
            }}
            data-testid="trail-restart"
            className="terminal-link"
          >
            [play again]
          </button>
          <button
            type="button"
            onClick={onExit}
            data-testid="trail-quit"
            className="terminal-link"
          >
            [back to terminal]
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-start gap-1">
          {node.choices.map((c, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleChoice(c)}
              data-testid={`trail-choice-${i}`}
              className="terminal-link text-left"
            >
              {c.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CareerTrailGame;
