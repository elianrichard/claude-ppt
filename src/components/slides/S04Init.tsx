"use client";

export default function S04Init() {
  return (
    <div className="s4">
      <p className="eyebrow reveal">Claude Code CLI</p>
      <h2 className="reveal d1">
        <span className="mono accent">/init</span> &amp;{" "}
        <span className="mono accent">CLAUDE.md</span>
      </h2>
      <p
        className="lead reveal d2"
        style={{ marginTop: "0.6rem", maxWidth: 750 }}
      >
        Bootstrap project context so Claude understands your codebase
        conventions from the start.
      </p>
      <div className="split reveal d3" style={{ marginTop: "2rem" }}>
        <div>
          <div className="terminal">
            <div className="terminal-bar">
              <div className="terminal-dot" />
              <div className="terminal-dot" />
              <div className="terminal-dot" />
              <span className="terminal-title">~/my-project</span>
            </div>
            <div className="terminal-body">
              <div>
                <span className="prompt">$</span>{" "}
                <span className="cmd">claude</span>
              </div>
              <div>
                <span className="prompt">&gt;</span>{" "}
                <span className="cmd">/init</span>
              </div>
              <div style={{ marginTop: "0.4rem" }}>
                <span className="out">Analyzing project structure...</span>
              </div>
              <div>
                <span className="out">
                  ✓ Detected: TypeScript + React + Next.js
                </span>
              </div>
              <div>
                <span className="out">
                  ✓ Found: package.json, tsconfig.json
                </span>
              </div>
              <div>
                <span className="out">✓ Generated CLAUDE.md</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="reveal d4" style={{ fontSize: "1.2rem" }}>
            Generated Files
          </h3>
          <div className="s4-tree reveal d5">
            <div className="s4-file s4-highlight">
              <span className="s4-icon">📄</span> CLAUDE.md
            </div>
            <div className="s4-file">
              <span className="s4-icon">📁</span> .claude/
            </div>
            <div className="s4-file s4-nested">
              <span className="s4-icon">⚙️</span> settings.json
            </div>
            <div className="s4-file s4-nested">
              <span className="s4-icon">📁</span> settings.local.json
            </div>
          </div>
          <p
            className="dim reveal d6"
            style={{ marginTop: "1rem", fontSize: "0.88rem" }}
          >
            CLAUDE.md tells Claude your project&apos;s build commands, test
            patterns, code style, and architecture decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
