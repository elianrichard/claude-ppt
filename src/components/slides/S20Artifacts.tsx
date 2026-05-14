"use client";

export default function S20Artifacts() {
  return (
    <div className="s20">
      <p className="eyebrow reveal">Claude Desktop</p>
      <h2 className="reveal d1">
        <span className="gradient-text">Artifacts</span>
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 700 }}>
        Live, interactive outputs — code, documents, diagrams rendered
        alongside your conversation.
      </p>
      <div className="split reveal d3" style={{ marginTop: "2rem" }}>
        <div className="s20-prompt-panel">
          <div className="s20-prompt-header">Conversation</div>
          <div className="s20-message s20-user">
            Create a React dashboard component with a line chart
            showing monthly revenue data.
          </div>
          <div className="s20-message s20-assistant">
            Here&apos;s a dashboard component with revenue visualization...
          </div>
          <div className="s20-message s20-user">
            Add a dark theme toggle.
          </div>
          <div className="s20-message s20-assistant">
            Updated with dark/light theme support ↗
          </div>
        </div>
        <div className="s20-artifact">
          <div className="s20-artifact-bar">
            <span className="s20-artifact-type">React Component</span>
            <span className="dim" style={{ fontSize: "0.72rem" }}>Live Preview</span>
          </div>
          <div className="s20-artifact-body">
            <div className="s20-mock-chart">
              <div className="s20-chart-title">Monthly Revenue</div>
              <div className="s20-chart-bars">
                <div className="s20-bar" style={{ height: "40%" }} />
                <div className="s20-bar" style={{ height: "55%" }} />
                <div className="s20-bar" style={{ height: "45%" }} />
                <div className="s20-bar" style={{ height: "70%" }} />
                <div className="s20-bar" style={{ height: "85%" }} />
                <div className="s20-bar" style={{ height: "65%" }} />
              </div>
              <div className="s20-chart-labels">
                <span>Jan</span><span>Feb</span><span>Mar</span>
                <span>Apr</span><span>May</span><span>Jun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
