"use client";

export default function S14CreateSkill() {
  return (
    <div className="s14">
      <p className="eyebrow reveal">Skills &amp; Plugins</p>
      <h2 className="reveal d1">
        Creating <span className="gradient-text">Your Own</span> Skill
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 750 }}>
        A skill is just a markdown file with frontmatter — drop it in your
        project and Claude picks it up automatically.
      </p>
      <div className="split reveal d3" style={{ marginTop: "2rem" }}>
        <div className="terminal">
          <div className="terminal-bar">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <span className="terminal-title">.claude/skills/my-deploy.md</span>
          </div>
          <div className="terminal-body" style={{ fontSize: "0.8rem" }}>
            <div><span className="tok-key">---</span></div>
            <div><span className="tok-key">name:</span> <span className="tok-str">deploy</span></div>
            <div>
              <span className="tok-key">description:</span>{" "}
              <span className="tok-str">Deploy to staging or production</span>
            </div>
            <div>
              <span className="tok-key">trigger:</span>{" "}
              <span className="tok-str">when user says &quot;deploy&quot;</span>
            </div>
            <div><span className="tok-key">---</span></div>
            <div style={{ marginTop: "0.4rem" }}>
              <span className="tok-comment"># Deploy Skill</span>
            </div>
            <div style={{ marginTop: "0.3rem" }}>
              <span className="out">## Steps</span>
            </div>
            <div><span className="out">1. Run tests first</span></div>
            <div><span className="out">2. Build the project</span></div>
            <div><span className="out">3. Deploy to environment</span></div>
            <div><span className="out">4. Verify health check</span></div>
            <div style={{ marginTop: "0.3rem" }}>
              <span className="out">## Rules</span>
            </div>
            <div><span className="out">- Never skip tests</span></div>
            <div><span className="out">- Always check env vars</span></div>
          </div>
        </div>
        <div>
          <h3 className="reveal d4" style={{ fontSize: "1.1rem" }}>Skill Structure</h3>
          <div className="s14-structure">
            <div className="s14-item reveal d4">
              <span className="chip">Frontmatter</span>
              <span className="dim" style={{ fontSize: "0.85rem" }}>
                name, description, trigger conditions
              </span>
            </div>
            <div className="s14-item reveal d5">
              <span className="chip">Instructions</span>
              <span className="dim" style={{ fontSize: "0.85rem" }}>
                Step-by-step workflow in markdown
              </span>
            </div>
            <div className="s14-item reveal d6">
              <span className="chip">Rules</span>
              <span className="dim" style={{ fontSize: "0.85rem" }}>
                Constraints and guardrails
              </span>
            </div>
          </div>
          <div className="s14-path reveal d7">
            <p className="dim" style={{ fontSize: "0.85rem", marginTop: "1.2rem" }}>
              Place skills in:
            </p>
            <code className="s14-code">
              .claude/skills/my-skill.md
            </code>
            <p className="dim" style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
              Or install community skills via <span className="mono accent">claude install-skill</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
