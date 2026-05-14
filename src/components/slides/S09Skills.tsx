"use client";

export default function S09Skills() {
  return (
    <div className="s9">
      <p className="eyebrow reveal">Skills &amp; Plugins</p>
      <h2 className="reveal d1">
        What Are <span className="gradient-text">Skills</span>?
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 750, margin: "0.6rem auto 0" }}>
        Markdown files that give Claude specialized capabilities — invoked
        with <span className="mono accent">/slash-commands</span> or triggered automatically.
      </p>
      <div className="s9-flow reveal d3" style={{ marginTop: "2.5rem" }}>
        <div className="s9-node">
          <div className="s9-node-icon">📄</div>
          <div className="s9-node-label">Skill File</div>
          <div className="s9-node-sub">.md with frontmatter</div>
        </div>
        <div className="s9-arrow">→</div>
        <div className="s9-node s9-node-center">
          <div className="s9-node-icon">🤖</div>
          <div className="s9-node-label">Claude Code</div>
          <div className="s9-node-sub">Reads instructions</div>
        </div>
        <div className="s9-arrow">→</div>
        <div className="s9-node">
          <div className="s9-node-icon">⚡</div>
          <div className="s9-node-label">Action</div>
          <div className="s9-node-sub">TDD, review, deploy…</div>
        </div>
      </div>
      <div className="s9-examples reveal d5" style={{ marginTop: "2rem" }}>
        <div className="chip">/tdd</div>
        <div className="chip">/review</div>
        <div className="chip">/caveman</div>
        <div className="chip">/diagnose</div>
        <div className="chip">/feature-dev</div>
        <div className="chip">/compress</div>
      </div>
    </div>
  );
}
