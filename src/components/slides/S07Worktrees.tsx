"use client";

export default function S07Worktrees() {
  return (
    <div className="s7">
      <p className="eyebrow reveal">Claude Code CLI</p>
      <h2 className="reveal d1">
        Git <span className="gradient-text">Worktrees</span>
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 750 }}>
        Work on multiple branches simultaneously — each agent gets its own
        isolated working copy.
      </p>
      <div className="s7-terminals reveal d3" style={{ marginTop: "2rem" }}>
        <div className="terminal">
          <div className="terminal-bar">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <span className="terminal-title">feature/auth</span>
          </div>
          <div className="terminal-body">
            <div><span className="prompt">~/project-auth $</span></div>
            <div><span className="cmd">claude &quot;add OAuth login&quot;</span></div>
            <div style={{ marginTop: "0.3rem" }}>
              <span className="out">Working on auth module...</span>
            </div>
            <div><span className="out">✓ Created auth/oauth.ts</span></div>
            <div><span className="out">✓ Updated auth/index.ts</span></div>
          </div>
        </div>
        <div className="terminal">
          <div className="terminal-bar">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <span className="terminal-title">feature/dashboard</span>
          </div>
          <div className="terminal-body">
            <div><span className="prompt">~/project-dash $</span></div>
            <div><span className="cmd">claude &quot;build analytics page&quot;</span></div>
            <div style={{ marginTop: "0.3rem" }}>
              <span className="out">Working on dashboard...</span>
            </div>
            <div><span className="out">✓ Created pages/analytics.tsx</span></div>
            <div><span className="out">✓ Added chart components</span></div>
          </div>
        </div>
      </div>
      <div className="s7-benefits reveal d5" style={{ marginTop: "1.5rem" }}>
        <div className="chip">No conflicts</div>
        <div className="chip">Parallel work</div>
        <div className="chip">Clean isolation</div>
        <div className="chip">Auto-cleanup</div>
      </div>
    </div>
  );
}
