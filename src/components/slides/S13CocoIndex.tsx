"use client";

export default function S13CocoIndex() {
  return (
    <div className="s13">
      <p className="eyebrow reveal">Skills &amp; Plugins</p>
      <h2 className="reveal d1">
        <span className="gradient-text">CocoIndex</span> Code
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 750 }}>
        Semantic code indexing — helps Claude understand large codebases
        through embeddings and code graph analysis.
      </p>
      <div className="split reveal d3" style={{ marginTop: "2rem" }}>
        <div className="terminal">
          <div className="terminal-bar">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <span className="terminal-title">cocoindex</span>
          </div>
          <div className="terminal-body">
            <div><span className="prompt">$</span> <span className="cmd">cocoindex setup</span></div>
            <div style={{ marginTop: "0.3rem" }}>
              <span className="out">Indexing codebase...</span>
            </div>
            <div><span className="out">✓ 1,247 files analyzed</span></div>
            <div><span className="out">✓ Dependency graph built</span></div>
            <div><span className="out">✓ Embeddings generated</span></div>
            <div style={{ marginTop: "0.5rem" }}>
              <span className="prompt">$</span>{" "}
              <span className="cmd">cocoindex query &quot;auth flow&quot;</span>
            </div>
            <div style={{ marginTop: "0.3rem" }}>
              <span className="out">→ src/auth/oauth.ts (0.94)</span>
            </div>
            <div><span className="out">→ src/auth/session.ts (0.89)</span></div>
            <div><span className="out">→ src/middleware/auth.ts (0.85)</span></div>
          </div>
        </div>
        <div>
          <h3 className="reveal d4" style={{ fontSize: "1.1rem" }}>Capabilities</h3>
          <div className="s13-features">
            <div className="s13-feature reveal d4">
              <span className="s13-icon">🔎</span>
              <div>
                <strong style={{ color: "var(--fg)" }}>Semantic Search</strong>
                <p className="dim" style={{ fontSize: "0.85rem" }}>
                  Find code by meaning, not just text matching
                </p>
              </div>
            </div>
            <div className="s13-feature reveal d5">
              <span className="s13-icon">🕸️</span>
              <div>
                <strong style={{ color: "var(--fg)" }}>Code Graph</strong>
                <p className="dim" style={{ fontSize: "0.85rem" }}>
                  Map dependencies, imports, and call chains
                </p>
              </div>
            </div>
            <div className="s13-feature reveal d6">
              <span className="s13-icon">📊</span>
              <div>
                <strong style={{ color: "var(--fg)" }}>Context Retrieval</strong>
                <p className="dim" style={{ fontSize: "0.85rem" }}>
                  Feed relevant code to Claude automatically
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
