"use client";

export default function S11Caveman() {
  return (
    <div className="s11">
      <p className="eyebrow reveal">Skills &amp; Plugins</p>
      <h2 className="reveal d1">
        <span className="gradient-text">Caveman</span> Mode
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 700 }}>
        Ultra-compressed communication — drop filler, keep substance.
        ~75% fewer output tokens.
      </p>
      <div className="s11-compare reveal d3" style={{ marginTop: "2rem" }}>
        <div className="s11-card s11-before">
          <div className="s11-card-header">
            <span className="s11-badge s11-badge-off">Normal</span>
          </div>
          <div className="s11-card-body">
            <p>
              Sure! I&apos;d be happy to help you with that. The issue you&apos;re
              experiencing is likely caused by the authentication middleware
              not properly validating the token expiry. Let me take a look
              at the code and suggest a fix for you.
            </p>
          </div>
          <div className="s11-tokens dim">~48 tokens</div>
        </div>
        <div className="s11-vs">→</div>
        <div className="s11-card s11-after">
          <div className="s11-card-header">
            <span className="s11-badge s11-badge-on">/caveman</span>
          </div>
          <div className="s11-card-body">
            <p>
              Bug in auth middleware. Token expiry check
              use <span className="mono accent">&lt;</span> not <span className="mono accent">&lt;=</span>. Fix:
            </p>
          </div>
          <div className="s11-tokens accent">~12 tokens</div>
        </div>
      </div>
      <p className="dim reveal d5" style={{ marginTop: "1.5rem", fontSize: "0.88rem", textAlign: "center" }}>
        Full technical substance stays. Only fluff dies.
        Invoke with <kbd>/caveman</kbd> — toggle with <kbd>/caveman lite</kbd> or <kbd>/caveman ultra</kbd>.
      </p>
    </div>
  );
}
