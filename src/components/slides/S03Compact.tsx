"use client";

export default function S03Compact() {
  return (
    <div className="s3">
      <p className="eyebrow reveal">Claude Code CLI</p>
      <h2 className="reveal d1">
        <span className="mono accent">/compact</span> — Context Management
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 750 }}>
        Compress your conversation to reclaim context window space
        without losing important information.
      </p>
      <div className="split reveal d3" style={{ marginTop: "2rem" }}>
        <div className="terminal">
          <div className="terminal-bar">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <span className="terminal-title">claude</span>
          </div>
          <div className="terminal-body">
            <div><span className="prompt">$</span> <span className="cmd">/compact</span></div>
            <div style={{ marginTop: "0.5rem" }}>
              <span className="out">Compacting conversation...</span>
            </div>
            <div>
              <span className="out">✓ Compressed 47 messages → summary</span>
            </div>
            <div>
              <span className="out">✓ Context: 128k → 12k tokens</span>
            </div>
            <div style={{ marginTop: "0.5rem" }}>
              <span className="comment"># Also works with a focus topic:</span>
            </div>
            <div>
              <span className="prompt">$</span>{" "}
              <span className="cmd">/compact focus on the auth module</span>
            </div>
          </div>
        </div>
        <div>
          <div className="s3-bar-group">
            <div className="s3-bar-label">Before</div>
            <div className="s3-bar">
              <div className="s3-bar-fill s3-bar-before" />
            </div>
            <div className="s3-bar-pct dim">128k tokens</div>
          </div>
          <div className="s3-bar-group" style={{ marginTop: "1.2rem" }}>
            <div className="s3-bar-label">After</div>
            <div className="s3-bar">
              <div className="s3-bar-fill s3-bar-after" />
            </div>
            <div className="s3-bar-pct accent">12k tokens</div>
          </div>
          <p className="dim" style={{ marginTop: "1.5rem", fontSize: "0.9rem" }}>
            Pro tip: Run <kbd>/compact</kbd> proactively before your
            context fills up — don&apos;t wait for the warning.
          </p>
        </div>
      </div>
    </div>
  );
}
