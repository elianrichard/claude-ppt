"use client";

const categories = [
  {
    name: "Skills",
    desc: "Markdown-driven capabilities — TDD, code review, deployment workflows",
    icon: "📄",
    examples: ["/tdd", "/review", "/caveman"],
  },
  {
    name: "Plugins",
    desc: "Installable packages that extend Claude with new tools and integrations",
    icon: "🔌",
    examples: ["RTK", "CocoIndex", "Figma"],
  },
  {
    name: "MCP Servers",
    desc: "Protocol-based connectors to external services and data sources",
    icon: "🌐",
    examples: ["GitHub", "Postgres", "Slack"],
  },
];

export default function S14Marketplace() {
  return (
    <div className="s14m" style={{ textAlign: "center" }}>
      <p className="eyebrow reveal">Ecosystem</p>
      <h2 className="reveal d1">
        Claude <span className="gradient-text">Marketplace</span>
      </h2>
      <p
        className="lead reveal d2"
        style={{ marginTop: "0.6rem", maxWidth: 750, margin: "0.6rem auto 0" }}
      >
        A growing ecosystem of skills, plugins, and MCP servers — install
        community-built extensions or publish your own.
      </p>
      <div className="s14m-grid reveal d3" style={{ marginTop: "2.5rem" }}>
        {categories.map((c, i) => (
          <div key={i} className={`s14m-card reveal d${i + 4}`}>
            <div className="s14m-icon">{c.icon}</div>
            <h3 style={{ fontSize: "1.1rem" }}>{c.name}</h3>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                marginTop: "0.4rem",
              }}
            >
              {c.desc}
            </p>
            <div className="s14m-examples">
              {c.examples.map((e, j) => (
                <span key={j} className="chip">
                  {e}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p
        className="dim reveal d7"
        style={{ marginTop: "1.5rem", fontSize: "0.85rem" }}
      >
        Browse and install from the community registry — or create and share
        your own.
      </p>
    </div>
  );
}
