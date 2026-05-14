"use client";

const tips = [
  {
    num: "01",
    title: "Compact early",
    desc: "Run /compact before context fills — don't wait for the warning",
  },
  {
    num: "02",
    title: "CLAUDE.md first",
    desc: "Set up project conventions so every session starts with full context",
  },
  {
    num: "03",
    title: "Chain MCP tools",
    desc: "Combine Figma + GitHub + filesystem for end-to-end workflows",
  },
  {
    num: "04",
    title: "Worktrees for parallelism",
    desc: "Run multiple Claude agents on different branches simultaneously",
  },
  {
    num: "05",
    title: "Custom skills for repetition",
    desc: "Turn any recurring workflow into a reusable /slash-command",
  },
];

export default function S21Hacks() {
  return (
    <div className="s21">
      <p className="eyebrow reveal">Practical Hacks</p>
      <h2 className="reveal d1">
        Workflow <span className="gradient-text">Tips</span>
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 700 }}>
        Five habits that compound over time.
      </p>
      <div className="s21-list reveal d3" style={{ marginTop: "2rem" }}>
        {tips.map((t, i) => (
          <div key={i} className={`s21-tip reveal d${Math.min(i + 3, 7)}`}>
            <span className="s21-num gradient-text">{t.num}</span>
            <div>
              <h3 style={{ fontSize: "1.05rem" }}>{t.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginTop: "0.2rem" }}>
                {t.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
