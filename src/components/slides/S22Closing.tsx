"use client";

const resources = [
  { label: "Claude Code Docs", url: "docs.anthropic.com/claude-code" },
  { label: "MCP Registry", url: "github.com/modelcontextprotocol/servers" },
  { label: "Matt Pocock Skills", url: "github.com/mattpocock/skills" },
  { label: "RTK (Rust Token Killer)", url: "github.com/cablehead/rtk" },
  { label: "Caveman Mode", url: "github.com/dougbutner/caveman" },
  { label: "CocoIndex", url: "github.com/cocoindex/cocoindex" },
  { label: "Figma MCP", url: "github.com/anthropics/figma-mcp" },
  { label: "Claude in Chrome", url: "chromewebstore.google.com" },
  { label: "Claude Desktop", url: "claude.ai/download" },
];

export default function S22Closing() {
  return (
    <div className="s22">
      <p className="eyebrow reveal">Thank You</p>
      <h1 className="reveal d1" style={{ marginTop: "0.8rem" }}>
        Start Building{" "}
        <span className="gradient-text">Smarter</span>
      </h1>
      <p className="lead reveal d2" style={{ marginTop: "1rem", maxWidth: 650, textAlign: "center", margin: "1rem auto 0" }}>
        Small changes in how you use Claude compound into massive
        productivity gains.
      </p>
      <div className="s22-resources reveal d3" style={{ marginTop: "2rem" }}>
        {resources.map((r, i) => (
          <div key={i} className={`s22-link reveal d${Math.min(i + 3, 7)}`}>
            <span className="s22-arrow">↗</span>
            <div>
              <div style={{ color: "var(--fg)", fontWeight: 600, fontSize: "0.88rem" }}>{r.label}</div>
              <div className="mono dim" style={{ fontSize: "0.72rem" }}>{r.url}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
