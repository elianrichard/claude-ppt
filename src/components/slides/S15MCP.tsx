"use client";

export default function S15MCP() {
  return (
    <div className="s15">
      <p className="eyebrow reveal">MCP Servers</p>
      <h2 className="reveal d1">
        What is <span className="gradient-text">MCP</span>?
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 750, margin: "0.6rem auto 0" }}>
        Model Context Protocol — a standard for connecting AI models to
        external tools, data sources, and services.
      </p>
      <div className="s15-diagram reveal d3" style={{ marginTop: "2.5rem" }}>
        <div className="s15-node s15-claude">
          <div className="s15-node-icon">🤖</div>
          <div className="s15-node-label">Claude</div>
        </div>
        <div className="s15-connector">
          <div className="s15-line" />
          <span className="s15-proto">MCP</span>
          <div className="s15-line" />
        </div>
        <div className="s15-node s15-server">
          <div className="s15-node-icon">🔌</div>
          <div className="s15-node-label">MCP Server</div>
        </div>
        <div className="s15-connector">
          <div className="s15-line" />
        </div>
        <div className="s15-tools">
          <div className="s15-tool reveal d4">📁 Files</div>
          <div className="s15-tool reveal d5">🗄️ Database</div>
          <div className="s15-tool reveal d6">🌐 APIs</div>
          <div className="s15-tool reveal d7">🎨 Figma</div>
        </div>
      </div>
      <p className="dim reveal d7" style={{ marginTop: "2rem", textAlign: "center", fontSize: "0.9rem" }}>
        One protocol, many integrations — Claude gains superpowers without custom code.
      </p>
    </div>
  );
}
