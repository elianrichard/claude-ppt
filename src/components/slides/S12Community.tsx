"use client";

const skills = [
  { name: "TDD", desc: "Red-green-refactor loop with integration tests", icon: "🧪" },
  { name: "Code Review", desc: "Confidence-based PR review, severity-tagged findings", icon: "🔍" },
  { name: "Feature Dev", desc: "Guided feature development with architecture focus", icon: "🏗️" },
  { name: "Diagnose", desc: "Disciplined bug hunting — reproduce, minimise, fix", icon: "🐛" },
  { name: "To Issues", desc: "Break specs into independently-grabbable issue tickets", icon: "📋" },
  { name: "Simplify", desc: "Review changed code for reuse, quality, and efficiency", icon: "✨" },
];

export default function S12Community() {
  return (
    <div className="s12">
      <p className="eyebrow reveal">Skills &amp; Plugins</p>
      <h2 className="reveal d1">
        Community <span className="gradient-text">Skills</span>
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 700 }}>
        Open-source skill collections — install and extend.
        <br />
        <span className="mono dim" style={{ fontSize: "0.85rem" }}>
          github.com/mattpocock/skills
        </span>
      </p>
      <div className="s12-grid reveal d3" style={{ marginTop: "2rem" }}>
        {skills.map((s, i) => (
          <div key={i} className={`card s12-card reveal d${Math.min(i + 3, 7)}`}>
            <div className="s12-card-icon">{s.icon}</div>
            <h3 style={{ fontSize: "1rem" }}>{s.name}</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.3rem" }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
