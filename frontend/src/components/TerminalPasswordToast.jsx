import React, { useState } from "react";
import { toast } from "sonner";

const TerminalPasswordToast = ({ id, project }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(project.password);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard API unavailable — password is still visible to copy manually
    }
  };

  return (
    <div
      data-testid="terminal-password-toast"
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
      <p style={{ margin: 0 }}>$ cat {project.id}/access.token</p>
      <div
        style={{
          marginTop: 8,
          border: "1px solid rgba(51,255,102,0.4)",
          borderRadius: 8,
          padding: "8px 10px",
          fontSize: 13,
        }}
      >
        {project.password}
      </div>
      <div style={{ display: "flex", gap: 16, marginTop: 10, flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={handleCopy}
          data-testid="terminal-password-copy"
          style={{
            background: "none",
            border: "none",
            color: "#33ff66",
            textDecoration: "underline",
            cursor: "pointer",
            fontFamily: "inherit",
            fontSize: 13,
            padding: 0,
          }}
        >
          {copied ? "copied ✓" : "copy password"}
        </button>
        <button
          type="button"
          onClick={() => window.open(project.href, "_blank", "noopener")}
          data-testid="terminal-password-open"
          style={{
            background: "none",
            border: "none",
            color: "#33ff66",
            textDecoration: "underline",
            cursor: "pointer",
            fontFamily: "inherit",
            fontSize: 13,
            padding: 0,
          }}
        >
          open site
        </button>
      </div>
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

export default TerminalPasswordToast;
