"use client";

const mcps = [
  { icon: "📁", name: "Filesystem", desc: "Read, write, and search files across your project" },
  { icon: "🐙", name: "GitHub", desc: "PRs, issues, reviews, actions — full GitHub integration" },
  { icon: "🗄️", name: "PostgreSQL", desc: "Query databases, inspect schemas, run migrations" },
  { icon: "🌐", name: "Puppeteer", desc: "Browser automation, screenshots, testing" },
  { icon: "💬", name: "Slack", desc: "Read channels, send messages, search conversations" },
  { icon: "🧠", name: "Memory", desc: "Persistent context and knowledge across sessions" },
];

export default function S17MCPGrid() {
  return (
    <div className="s17">
      <p className="eyebrow reveal">MCP Servers</p>
      <h2 className="reveal d1">
        Useful <span className="gradient-text">MCP Servers</span>
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 700 }}>
        A growing ecosystem of integrations — connect Claude to your entire stack.
      </p>
      <div className="s17-grid reveal d3" style={{ marginTop: "2rem" }}>
        {mcps.map((m, i) => (
          <div key={i} className={`card s17-card reveal d${Math.min(i + 3, 7)}`}>
            <div className="s17-icon">{m.icon}</div>
            <h3 style={{ fontSize: "1rem" }}>{m.name}</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.3rem" }}>
              {m.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
