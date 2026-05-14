"use client";

const builtIn = [
  { name: "Explore", desc: "Read-only code search — find files, grep symbols, trace definitions", color: "#22d3ee" },
  { name: "Plan", desc: "Architect implementation strategies — step-by-step plans with trade-offs", color: "#8b5cf6" },
  { name: "code-reviewer", desc: "Diff/branch reviewer — severity-tagged findings, no fluff", color: "#f59e0b" },
  { name: "code-explorer", desc: "Deep codebase analysis — trace execution paths, map architecture", color: "#10b981" },
  { name: "code-architect", desc: "Design feature blueprints — files to create, data flows, build sequences", color: "#ec4899" },
  { name: "general-purpose", desc: "Catch-all for multi-step research and complex tasks", color: "#8a93b3" },
];

export default function SSubAgents() {
  return (
    <div className="ssa" style={{ textAlign: "center" }}>
      <p className="eyebrow reveal">Claude Code CLI</p>
      <h2 className="reveal d1">
        Built-in <span className="gradient-text">Sub Agents</span>
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 750, margin: "0.6rem auto 0" }}>
        Spawn specialized agents for parallel work — each gets its own context
        and toolset, reports back when done.
      </p>
      <div className="ssa-grid reveal d3" style={{ marginTop: "2rem" }}>
        {builtIn.map((a, i) => (
          <div key={i} className={`ssa-agent reveal d${Math.min(i + 3, 7)}`}>
            <div className="ssa-dot" style={{ background: a.color }} />
            <div style={{ textAlign: "left" }}>
              <div className="ssa-name" style={{ color: a.color }}>{a.name}</div>
              <div className="ssa-desc">{a.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="terminal reveal d7" style={{ marginTop: "1.5rem", maxWidth: 600, margin: "1.5rem auto 0", textAlign: "left" }}>
        <div className="terminal-bar">
          <div className="terminal-dot" />
          <div className="terminal-dot" />
          <div className="terminal-dot" />
          <span className="terminal-title">spawning agent</span>
        </div>
        <div className="terminal-body" style={{ padding: "0.8rem 1rem", fontSize: "0.8rem" }}>
          <div><span className="comment"># Claude auto-spawns agents when needed</span></div>
          <div><span className="out">Launching </span><span className="accent">Explore</span><span className="out"> agent to search codebase...</span></div>
          <div><span className="out">Agent found: </span><span className="tok-str">src/auth/oauth.ts:42</span></div>
        </div>
      </div>
    </div>
  );
}
