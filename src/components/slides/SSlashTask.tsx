"use client";

const shipping = [
  { cmd: "/diff", desc: "Review what Claude actually changed before committing" },
  { cmd: "/simplify", desc: "3 agents review recent changes in parallel, apply fixes" },
  { cmd: "/security-review", desc: "Run before any PR touching auth, input, or data" },
];

const setup = [
  { cmd: "/init + /memory", desc: "Get CLAUDE.md right early — every future session inherits it" },
  { cmd: "/permissions", desc: "Allowlist safe commands, stop hitting approval prompts" },
  { cmd: "/fewer-permission-prompts", desc: "Scans history, auto-builds allowlist for you" },
  { cmd: ".claude/commands/*.md", desc: "Turn repeated prompts into one-word shortcuts" },
];

const gems = [
  { cmd: "/copy N", desc: "Grab Nth-latest response; press w to write to file" },
  { cmd: "/teleport", desc: "Pull web session into terminal for real shell access" },
  { cmd: "/insights", desc: "See where you spend time and what trips you up" },
  { cmd: "/goal", desc: "Let Claude keep iterating until condition met" },
];

export default function SSlashTask() {
  return (
    <div className="sst" style={{ textAlign: "center" }}>
      <p className="eyebrow reveal">Claude Code CLI</p>
      <h2 className="reveal d1">
        Slash Commands — <span className="gradient-text">Ship & Setup</span>
      </h2>
      <div className="sst-cols sst-cols-3 reveal d2" style={{ marginTop: "1.5rem" }}>
        <div>
          <h3 className="sst-heading">Before Shipping</h3>
          <div className="sss-grid" style={{ marginTop: "0.6rem" }}>
            {shipping.map((c, i) => (
              <div key={i} className="sss-row">
                <code className="sss-cmd">{c.cmd}</code>
                <span className="sss-desc">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="sst-heading">Setup Once, Save Forever</h3>
          <div className="sss-grid" style={{ marginTop: "0.6rem" }}>
            {setup.map((c, i) => (
              <div key={i} className="sss-row">
                <code className="sss-cmd">{c.cmd}</code>
                <span className="sss-desc">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="sst-heading">Hidden Gems</h3>
          <div className="sss-grid" style={{ marginTop: "0.6rem" }}>
            {gems.map((c, i) => (
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
