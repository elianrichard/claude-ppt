"use client";

export default function S16Figma() {
  return (
    <div className="s16">
      <p className="eyebrow reveal">MCP Servers</p>
      <h2 className="reveal d1">
        <span className="gradient-text">Figma</span> MCP
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 750 }}>
        Bridge design and code — read Figma designs, generate production code,
        sync components bidirectionally.
      </p>
      <div className="split reveal d3" style={{ marginTop: "2rem" }}>
        <div className="s16-figma-mock">
          <div className="s16-figma-bar">
            <span className="s16-figma-logo">◆ Figma</span>
            <span className="dim" style={{ fontSize: "0.75rem" }}>Design File</span>
          </div>
          <div className="s16-figma-canvas">
            <div className="s16-component s16-button">Button</div>
            <div className="s16-component s16-card-mock">
              <div className="s16-card-title" />
              <div className="s16-card-text" />
              <div className="s16-card-text s16-short" />
            </div>
            <div className="s16-component s16-nav">Nav Bar</div>
          </div>
        </div>
        <div>
          <div className="s16-capabilities">
            <div className="s16-cap reveal d4">
              <span className="s16-cap-icon">📖</span>
              <div>
                <strong style={{ color: "var(--fg)" }}>Read Designs</strong>
                <p className="dim" style={{ fontSize: "0.85rem" }}>
                  Extract layout, styles, and component structure
                </p>
              </div>
            </div>
            <div className="s16-cap reveal d5">
              <span className="s16-cap-icon">⚡</span>
              <div>
                <strong style={{ color: "var(--fg)" }}>Generate Code</strong>
                <p className="dim" style={{ fontSize: "0.85rem" }}>
                  Produce production-ready React/CSS from designs
                </p>
              </div>
            </div>
            <div className="s16-cap reveal d6">
              <span className="s16-cap-icon">🔄</span>
              <div>
                <strong style={{ color: "var(--fg)" }}>Sync Components</strong>
                <p className="dim" style={{ fontSize: "0.85rem" }}>
                  Map Figma components to codebase via Code Connect
                </p>
              </div>
            </div>
          </div>
          <div className="terminal reveal d7" style={{ marginTop: "1rem" }}>
            <div className="terminal-bar">
              <div className="terminal-dot" />
              <div className="terminal-dot" />
              <div className="terminal-dot" />
            </div>
            <div className="terminal-body" style={{ padding: "0.8rem 1rem", fontSize: "0.78rem" }}>
              <div>
                <span className="prompt">$</span>{" "}
                <span className="cmd">claude &quot;implement the Figma design&quot;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
