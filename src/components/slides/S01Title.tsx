"use client";

const keywords = [
  "/compact",
  "CLAUDE.md",
  "MCP",
  "hooks",
  "worktrees",
  "artifacts",
  "skills",
  "plugins",
  "RTK",
  "caveman",
  "/init",
  "memory",
  "Figma",
  "shortcuts",
];

export default function S01Title() {
  return (
    <div className="s1">
      <div className="s1-bg" />
      <div className="s1-content">
        <p className="eyebrow reveal">Practical Tips &amp; Tricks</p>
        <h1 className="reveal d1">
          Claude{" "}
          <span className="gradient-text">Lifehacks</span>
          <br />
          &amp; Tips
        </h1>
        <p className="lead reveal d2" style={{ maxWidth: 680, marginTop: "1.2rem" }}>
          Boost your productivity with Claude Code, MCP&nbsp;servers,
          skills,&nbsp;plugins, and Claude&nbsp;Desktop.
        </p>
        <div className="s1-marquee reveal d3">
          <div className="s1-track">
            {[...keywords, ...keywords].map((k, i) => (
              <span key={i}>{k}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
