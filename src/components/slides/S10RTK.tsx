"use client";

export default function S10RTK() {
  return (
    <div className="s10">
      <p className="eyebrow reveal">Skills &amp; Plugins</p>
      <h2 className="reveal d1">
        <span className="gradient-text">RTK</span> — Rust Token Killer
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 750 }}>
        Token-optimized CLI proxy — saves 60–90% on dev operations by
        filtering noise from command output.
      </p>
      <div className="split reveal d3" style={{ marginTop: "2rem" }}>
        <div className="terminal">
          <div className="terminal-bar">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <span className="terminal-title">rtk gain</span>
          </div>
          <div className="terminal-body">
            <div><span className="prompt">$</span> <span className="cmd">rtk gain</span></div>
            <div style={{ marginTop: "0.5rem" }}>
              <span className="out">📊 Token Savings Report</span>
            </div>
            <div><span className="out">───────────────────────</span></div>
            <div>
              <span className="dim">Before:  </span>
              <span className="tok-num">15,240</span> <span className="dim">tokens</span>
            </div>
            <div>
              <span className="dim">After:   </span>
              <span className="tok-num"> 2,134</span> <span className="dim">tokens</span>
            </div>
            <div>
              <span className="dim">Saved:   </span>
              <span className="accent">86%</span>
            </div>
            <div style={{ marginTop: "0.5rem" }}>
              <span className="comment"># Transparent hook rewriting:</span>
            </div>
            <div>
              <span className="comment"># git status → rtk git status</span>
            </div>
            <div>
              <span className="comment"># ls → rtk ls</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="reveal d4" style={{ fontSize: "1.1rem" }}>How It Works</h3>
          <div className="s10-steps">
            <div className="s10-step reveal d4">
              <span className="s10-num">1</span>
              <span>Claude runs <span className="mono">git status</span></span>
            </div>
            <div className="s10-step reveal d5">
              <span className="s10-num">2</span>
              <span>Hook rewrites to <span className="mono accent">rtk git status</span></span>
            </div>
            <div className="s10-step reveal d6">
              <span className="s10-num">3</span>
              <span>RTK filters noise, returns compact output</span>
            </div>
            <div className="s10-step reveal d7">
              <span className="s10-num">4</span>
              <span>Claude sees <span className="accent">86% fewer tokens</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
