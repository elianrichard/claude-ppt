"use client";

export default function S19Desktop() {
  return (
    <div className="s19">
      <p className="eyebrow reveal">Claude Desktop</p>
      <h2 className="reveal d1">
        Projects &amp; <span className="gradient-text">Custom Instructions</span>
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 750 }}>
        Organize conversations into projects with persistent system prompts
        and shared context.
      </p>
      <div className="split reveal d3" style={{ marginTop: "2rem" }}>
        <div className="s19-desktop-mock">
          <div className="s19-sidebar">
            <div className="s19-sidebar-header">Projects</div>
            <div className="s19-project s19-active">
              <span className="s19-dot" style={{ background: "#8b5cf6" }} />
              Work — Backend API
            </div>
            <div className="s19-project">
              <span className="s19-dot" style={{ background: "#10b981" }} />
              Personal — Blog
            </div>
            <div className="s19-project">
              <span className="s19-dot" style={{ background: "#f59e0b" }} />
              Research — ML Paper
            </div>
          </div>
          <div className="s19-main">
            <div className="s19-chat-bubble">
              How should I structure the API routes?
            </div>
            <div className="s19-chat-bubble s19-assistant">
              Based on your project conventions...
            </div>
          </div>
        </div>
        <div className="terminal">
          <div className="terminal-bar">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <span className="terminal-title">Custom Instructions</span>
          </div>
          <div className="terminal-body" style={{ fontSize: "0.82rem" }}>
            <div><span className="tok-comment"># Project: Backend API</span></div>
            <div style={{ marginTop: "0.4rem" }}>
              <span className="out">You are a senior backend engineer.</span>
            </div>
            <div><span className="out">Use TypeScript and Express.</span></div>
            <div><span className="out">Follow REST conventions.</span></div>
            <div style={{ marginTop: "0.3rem" }}>
              <span className="out">Always include:</span>
            </div>
            <div><span className="out">- Input validation with zod</span></div>
            <div><span className="out">- Error handling middleware</span></div>
            <div><span className="out">- Request/response types</span></div>
            <div><span className="out">- Integration tests</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
