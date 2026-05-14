"use client";

export default function SCustomAgent() {
  return (
    <div className="sca">
      <p className="eyebrow reveal">Claude Code CLI</p>
      <h2 className="reveal d1">
        Custom <span className="gradient-text">Sub Agents</span>
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 750 }}>
        Define your own agent types via markdown files in{" "}
        <span className="mono accent">.claude/agents/</span> — same
        pattern as skills.
      </p>
      <div className="split reveal d3" style={{ marginTop: "1.5rem" }}>
        <div className="terminal">
          <div className="terminal-bar">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <span className="terminal-title">.claude/agents/code-reviewer.md</span>
          </div>
          <div className="terminal-body" style={{ fontSize: "0.78rem" }}>
            <div><span className="tok-key">---</span></div>
            <div><span className="tok-key">name:</span> <span className="tok-str">code-reviewer</span></div>
            <div><span className="tok-key">description:</span> <span className="tok-str">Review code for bugs,</span></div>
            <div><span className="tok-str">  security, and quality issues</span></div>
            <div><span className="tok-key">tools:</span> <span className="tok-str">Read, Grep, Bash</span></div>
            <div><span className="tok-key">---</span></div>
            <div style={{ marginTop: "0.4rem" }}>
              <span className="tok-comment"># Code Reviewer Agent</span>
            </div>
            <div style={{ marginTop: "0.3rem" }}>
              <span className="out">## Role</span>
            </div>
            <div><span className="out">You review diffs and files for:</span></div>
            <div><span className="out">- Logic errors and edge cases</span></div>
            <div><span className="out">- Security vulnerabilities (OWASP)</span></div>
            <div><span className="out">- Performance regressions</span></div>
            <div><span className="out">- Style violations</span></div>
            <div style={{ marginTop: "0.3rem" }}>
              <span className="out">## Output Format</span>
            </div>
            <div><span className="out">{"`path:line: severity: issue`"}</span></div>
            <div><span className="out">Severity: 🔴 bug, 🟡 warn, 🔵 nit</span></div>
            <div style={{ marginTop: "0.3rem" }}>
              <span className="out">## Rules</span>
            </div>
            <div><span className="out">- Skip formatting nits</span></div>
            <div><span className="out">- No praise, only findings</span></div>
            <div><span className="out">- Max 10 findings per review</span></div>
          </div>
        </div>
        <div>
          <h3 className="reveal d4" style={{ fontSize: "1.1rem" }}>Usage</h3>
          <div className="terminal reveal d4" style={{ marginTop: "0.8rem" }}>
            <div className="terminal-bar">
              <div className="terminal-dot" />
              <div className="terminal-dot" />
              <div className="terminal-dot" />
            </div>
            <div className="terminal-body" style={{ fontSize: "0.78rem" }}>
              <div><span className="comment"># Invoke via /agents command</span></div>
              <div><span className="prompt">$</span> <span className="cmd">claude /agents code-reviewer</span></div>
              <div style={{ marginTop: "0.4rem" }}>
                <span className="comment"># Or Claude spawns it automatically</span>
              </div>
              <div><span className="prompt">$</span> <span className="cmd">claude &quot;review my last PR&quot;</span></div>
              <div style={{ marginTop: "0.4rem" }}>
                <span className="out">Spawning </span>
                <span className="accent">code-reviewer</span>
                <span className="out"> agent...</span>
              </div>
            </div>
          </div>
          <h3 className="reveal d5" style={{ fontSize: "1.1rem", marginTop: "1.2rem" }}>Agent File Structure</h3>
          <div className="sca-structure reveal d5">
            <div className="sca-item">
              <span className="chip">Frontmatter</span>
              <span className="dim" style={{ fontSize: "0.82rem" }}>name, description, tools</span>
            </div>
            <div className="sca-item">
              <span className="chip">Role</span>
              <span className="dim" style={{ fontSize: "0.82rem" }}>What agent does + domain focus</span>
            </div>
            <div className="sca-item">
              <span className="chip">Output Format</span>
              <span className="dim" style={{ fontSize: "0.82rem" }}>Structured response template</span>
            </div>
            <div className="sca-item">
              <span className="chip">Rules</span>
              <span className="dim" style={{ fontSize: "0.82rem" }}>Constraints and guardrails</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
