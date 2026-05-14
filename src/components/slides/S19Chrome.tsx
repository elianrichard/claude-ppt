"use client";

const features = [
  {
    icon: "🖥️",
    title: "Browser Automation",
    desc: "Click, type, scroll, screenshot — Claude controls Chrome directly",
  },
  {
    icon: "📸",
    title: "Visual Testing",
    desc: "Take screenshots, compare layouts, verify UI changes in real time",
  },
  {
    icon: "🔍",
    title: "Page Inspection",
    desc: "Read page content, accessibility trees, console logs, network requests",
  },
  {
    icon: "📊",
    title: "Form Filling & Testing",
    desc: "Automate form interactions, end-to-end test flows, data extraction",
  },
];

export default function S19Chrome() {
  return (
    <div className="s19c" style={{ textAlign: "center" }}>
      <p className="eyebrow reveal">Chrome Extension</p>
      <h2 className="reveal d1">
        Claude in <span className="gradient-text">Chrome</span>
      </h2>
      <p
        className="lead reveal d2"
        style={{ marginTop: "0.6rem", maxWidth: 750, margin: "0.6rem auto 0" }}
      >
        Connect Claude Code to your browser — automate web tasks, test UIs,
        and interact with any web page.
      </p>
      <div className="s19c-grid reveal d3" style={{ marginTop: "2rem" }}>
        {features.map((f, i) => (
          <div key={i} className={`s19c-feature reveal d${Math.min(i + 3, 7)}`}>
            <span className="s19c-icon">{f.icon}</span>
            <div style={{ textAlign: "left" }}>
              <strong style={{ color: "var(--fg)", fontSize: "0.95rem" }}>
                {f.title}
              </strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                  marginTop: "0.2rem",
                }}
              >
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="s19c-workflow reveal d7" style={{ marginTop: "1.5rem" }}>
        <div className="flow" style={{ justifyContent: "center" }}>
          <div className="flow-node">Claude Code</div>
          <div className="flow-arrow">→</div>
          <div className="flow-node" style={{ borderColor: "var(--accent)" }}>
            Chrome Extension
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-node">Any Web Page</div>
        </div>
      </div>
    </div>
  );
}
