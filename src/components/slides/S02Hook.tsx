"use client";

const stats = [
  { value: "10x", label: "Productivity", desc: "Ship features faster with the right workflows" },
  { value: "75%", label: "Fewer Tokens", desc: "Compress output without losing substance" },
  { value: "0", label: "Context Switches", desc: "Stay in your terminal, IDE, or desktop" },
];

export default function S02Hook() {
  return (
    <div className="s2">
      <p className="eyebrow reveal">Why This Talk</p>
      <h2 className="reveal d1" style={{ marginTop: "0.6rem" }}>
        Small habits, <span className="gradient-text">big leverage</span>
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.8rem", maxWidth: 700 }}>
        The difference between using Claude and mastering it is a handful of
        tricks most people never discover.
      </p>
      <div className="s2-stats reveal d3">
        {stats.map((s, i) => (
          <div key={i} className={`s2-stat reveal d${i + 4}`}>
            <span className="s2-stat-value gradient-text">{s.value}</span>
            <span className="s2-stat-label">{s.label}</span>
            <span className="s2-stat-desc">{s.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
