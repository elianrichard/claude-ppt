"use client";

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

export default function SSlashGems() {
  return (
    <div className="ssg" style={{ textAlign: "center" }}>
      <p className="eyebrow reveal">Claude Code CLI</p>
      <h2 className="reveal d1">
        Slash Commands — <span className="gradient-text">Setup & Gems</span>
      </h2>
      <div className="sst-cols reveal d2" style={{ marginTop: "2rem" }}>
        <div>
          <h3 className="sst-heading">Setup Once, Save Forever</h3>
          <div className="sss-grid" style={{ marginTop: "0.8rem" }}>
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
          <div className="sss-grid" style={{ marginTop: "0.8rem" }}>
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
