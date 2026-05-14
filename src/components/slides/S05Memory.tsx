"use client";

const levels = [
  {
    name: "Project Memory",
    desc: "Stored in .claude/memory/ — project-specific context, decisions, references",
    color: "#8b5cf6",
  },
  {
    name: "User Memory",
    desc: "Stored in ~/.claude/memory/ — your role, preferences, feedback across all projects",
    color: "#d97706",
  },
  {
    name: "Session Context",
    desc: "Current conversation — CLAUDE.md, git state, active files",
    color: "#10b981",
  },
];

export default function S05Memory() {
  return (
    <div className="s5">
      <p className="eyebrow reveal">Claude Code CLI</p>
      <h2 className="reveal d1">
        <span className="gradient-text">Memory</span> System
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 750 }}>
        Claude remembers across sessions — your preferences, project decisions,
        and feedback persist automatically.
      </p>
      <div className="split reveal d3" style={{ marginTop: "2rem" }}>
        <div className="terminal">
          <div className="terminal-bar">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <span className="terminal-title">memory/feedback_testing.md</span>
          </div>
          <div className="terminal-body" style={{ fontSize: "0.8rem" }}>
            <div><span className="tok-key">---</span></div>
            <div><span className="tok-key">name:</span> <span className="tok-str">testing-preferences</span></div>
            <div><span className="tok-key">type:</span> <span className="tok-str">feedback</span></div>
            <div><span className="tok-key">---</span></div>
            <div style={{ marginTop: "0.3rem" }}>
              <span className="out">Integration tests must hit a real</span>
            </div>
            <div><span className="out">database, not mocks.</span></div>
            <div style={{ marginTop: "0.3rem" }}>
              <span className="tok-comment"># Why: prior incident where</span>
            </div>
            <div>
              <span className="tok-comment"># mock/prod divergence masked a</span>
            </div>
            <div>
              <span className="tok-comment"># broken migration</span>
            </div>
          </div>
        </div>
        <div className="s5-levels">
          {levels.map((l, i) => (
            <div
              key={i}
              className={`s5-level reveal d${i + 4}`}
              style={{ borderLeftColor: l.color } as React.CSSProperties}
            >
              <h3 style={{ fontSize: "1rem", color: l.color }}>{l.name}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.3rem" }}>
                {l.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
