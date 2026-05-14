"use client";

const daily = [
  { cmd: "/clear", desc: "Start fresh between tasks, keeps project memory" },
  { cmd: "/compact", desc: "Summarize with focus line to preserve what matters" },
  { cmd: "/context", desc: "Check what's eating your context window" },
  { cmd: "/resume", desc: "Pick up any prior session instead of re-explaining" },
  { cmd: "/rewind", desc: "Undo button for both code and conversation" },
];

const speed = [
  { cmd: "/plan", desc: "Force planning before big changes" },
  { cmd: "/model + /effort", desc: "Drop to Haiku for grunt work, Opus for hard problems" },
  { cmd: "/branch", desc: "Fork conversation to try risky approach safely" },
  { cmd: "/btw", desc: "Quick side question without polluting main context" },
];

const parallel = [
  { cmd: "/background", desc: "Detach long-running tasks, free your terminal" },
  { cmd: "/batch", desc: "Codebase-wide changes → subagents in worktrees, each opens PR" },
  { cmd: "/loop", desc: "Watch for CI, file changes without babysitting" },
];

export default function SSlashSetup() {
  return (
    <div className="sss" style={{ textAlign: "center" }}>
      <p className="eyebrow reveal">Claude Code CLI</p>
      <h2 className="reveal d1">
        Slash Commands — <span className="gradient-text">Workflow</span>
      </h2>
      <div className="sst-cols sst-cols-3 reveal d2" style={{ marginTop: "1.5rem" }}>
        <div>
          <h3 className="sst-heading">Daily Drivers</h3>
          <div className="sss-grid" style={{ marginTop: "0.6rem" }}>
            {daily.map((c, i) => (
              <div key={i} className="sss-row">
                <code className="sss-cmd">{c.cmd}</code>
                <span className="sss-desc">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="sst-heading">Speed Multipliers</h3>
          <div className="sss-grid" style={{ marginTop: "0.6rem" }}>
            {speed.map((c, i) => (
              <div key={i} className="sss-row">
                <code className="sss-cmd">{c.cmd}</code>
                <span className="sss-desc">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="sst-heading">Parallel Work</h3>
          <div className="sss-grid" style={{ marginTop: "0.6rem" }}>
            {parallel.map((c, i) => (
              <div key={i} className="sss-row">
                <code className="sss-cmd">{c.cmd}</code>
                <span className="sss-desc">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
