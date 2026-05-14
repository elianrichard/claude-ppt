"use client";

const during = [
  { cmd: "/plan", desc: "Enter plan mode before large change" },
  { cmd: "/model", desc: "Switch model; arrows adjust effort" },
  { cmd: "/effort", desc: "Set reasoning budget (low → max)" },
  { cmd: "/fast", desc: "Toggle fast mode" },
  { cmd: "/compact", desc: "Summarize history to free context" },
  { cmd: "/context", desc: "Visualize context window usage" },
  { cmd: "/btw", desc: "Side question without bloating history" },
  { cmd: "/goal", desc: "Keep working until condition met" },
];

const parallel = [
  { cmd: "/background", desc: "Detach session as background agent" },
  { cmd: "/batch", desc: "Decompose change → subagent per unit, each opens PR" },
  { cmd: "/loop", desc: "Run prompt repeatedly on interval" },
  { cmd: "/schedule", desc: "Cloud-scheduled routines" },
  { cmd: "/tasks", desc: "List background tasks" },
  { cmd: "/stop", desc: "Stop current background session" },
];

export default function SSlashTask() {
  return (
    <div className="sst" style={{ textAlign: "center" }}>
      <p className="eyebrow reveal">Claude Code CLI</p>
      <h2 className="reveal d1">
        Slash Commands — <span className="gradient-text">During Tasks</span>
      </h2>
      <div className="sst-cols reveal d2" style={{ marginTop: "1.5rem" }}>
        <div>
          <h3 className="sst-heading">During a Task</h3>
          <div className="sss-grid" style={{ marginTop: "0.8rem" }}>
            {during.map((c, i) => (
              <div key={i} className="sss-row">
                <code className="sss-cmd">{c.cmd}</code>
                <span className="sss-desc">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="sst-heading">Parallel & Background</h3>
          <div className="sss-grid" style={{ marginTop: "0.8rem" }}>
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
