"use client";

export default function S06Hooks() {
  return (
    <div className="s6">
      <p className="eyebrow reveal">Claude Code CLI</p>
      <h2 className="reveal d1">
        <span className="gradient-text">Hooks</span> System
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 750 }}>
        Run shell commands automatically before or after Claude&apos;s tool
        calls — linting, formatting, notifications, anything.
      </p>
      <div className="split reveal d3" style={{ marginTop: "2rem" }}>
        <div className="terminal">
          <div className="terminal-bar">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <span className="terminal-title">.claude/settings.json</span>
          </div>
          <div className="terminal-body" style={{ fontSize: "0.8rem" }}>
            <div>{`{`}</div>
            <div>
              {"  "}<span className="tok-key">&quot;hooks&quot;</span>: {`{`}
            </div>
            <div>
              {"    "}<span className="tok-key">&quot;PostToolUse&quot;</span>: [
            </div>
            <div>{"      {"}</div>
            <div>
              {"        "}<span className="tok-key">&quot;matcher&quot;</span>:{" "}
              <span className="tok-str">&quot;Edit&quot;</span>,
            </div>
            <div>
              {"        "}<span className="tok-key">&quot;command&quot;</span>:{" "}
              <span className="tok-str">&quot;npm run lint:fix&quot;</span>
            </div>
            <div>{"      }"}</div>
            <div>{"    ]"}</div>
            <div>{"  }"}</div>
            <div>{`}`}</div>
          </div>
        </div>
        <div>
          <h3 className="reveal d4" style={{ fontSize: "1.1rem" }}>Hook Lifecycle</h3>
          <div className="s6-flow reveal d5">
            <div className="flow-node s6-trigger">Claude edits file</div>
            <div className="flow-arrow">→</div>
            <div className="flow-node s6-hook">PostToolUse hook</div>
            <div className="flow-arrow">→</div>
            <div className="flow-node s6-action">npm run lint:fix</div>
          </div>
          <div className="s6-hooks-list reveal d6">
            <div className="s6-hook-item">
              <span className="chip">PreToolUse</span>
              <span className="dim">Before tool execution</span>
            </div>
            <div className="s6-hook-item">
              <span className="chip">PostToolUse</span>
              <span className="dim">After tool execution</span>
            </div>
            <div className="s6-hook-item">
              <span className="chip">UserPromptSubmit</span>
              <span className="dim">When user sends a message</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
