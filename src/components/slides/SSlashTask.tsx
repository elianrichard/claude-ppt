"use client";

const parallel = [
  { cmd: "/background", desc: "Detach long-running tasks, free your terminal" },
  { cmd: "/batch", desc: "Codebase-wide changes → subagents in worktrees, each opens PR" },
  { cmd: "/loop", desc: "Watch for CI, file changes without babysitting" },
];

const shipping = [
  { cmd: "/diff", desc: "Review what Claude actually changed before committing" },
  { cmd: "/simplify", desc: "3 agents review recent changes in parallel, apply fixes" },
  { cmd: "/security-review", desc: "Run before any PR touching auth, input, or data" },
];

export default function SSlashTask() {
  return (
    <div className="sst" style={{ textAlign: "center" }}>
      <p className="eyebrow reveal">Claude Code CLI</p>
      <h2 className="reveal d1">
        Slash Commands — <span className="gradient-text">Parallel & Ship</span>
      </h2>
      <div className="sst-cols reveal d2" style={{ marginTop: "2rem" }}>
        <div>
          <h3 className="sst-heading">Parallel Work</h3>
          <div className="sss-grid" style={{ marginTop: "0.8rem" }}>
            {parallel.map((c, i) => (
              <div key={i} className="sss-row">
                <code className="sss-cmd">{c.cmd}</code>
                <span className="sss-desc">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="sst-heading">Before Shipping</h3>
          <div className="sss-grid" style={{ marginTop: "0.8rem" }}>
            {shipping.map((c, i) => (
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
