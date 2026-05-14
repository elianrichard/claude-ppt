"use client";

export default function S18MCPSetup() {
  return (
    <div className="s18">
      <p className="eyebrow reveal">MCP Servers</p>
      <h2 className="reveal d1">
        Setting Up <span className="gradient-text">MCPs</span>
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 700 }}>
        One command to add, auto-configured in settings.
      </p>
      <div className="split reveal d3" style={{ marginTop: "2rem" }}>
        <div className="terminal">
          <div className="terminal-bar">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <span className="terminal-title">terminal</span>
          </div>
          <div className="terminal-body">
            <div className="s18-line reveal d3">
              <span className="comment"># Add Figma MCP</span>
            </div>
            <div className="s18-line reveal d4">
              <span className="prompt">$</span>{" "}
              <span className="cmd">claude mcp add figma \</span>
            </div>
            <div className="s18-line reveal d4">
              <span className="cmd">  -- npx @anthropic-ai/figma-mcp</span>
            </div>
            <div className="s18-line reveal d5" style={{ marginTop: "0.6rem" }}>
              <span className="comment"># Add GitHub MCP</span>
            </div>
            <div className="s18-line reveal d5">
              <span className="prompt">$</span>{" "}
              <span className="cmd">claude mcp add github \</span>
            </div>
            <div className="s18-line reveal d5">
              <span className="cmd">  -- npx @anthropic-ai/github-mcp</span>
            </div>
            <div className="s18-line reveal d6" style={{ marginTop: "0.6rem" }}>
              <span className="comment"># List active MCPs</span>
            </div>
            <div className="s18-line reveal d6">
              <span className="prompt">$</span>{" "}
              <span className="cmd">claude mcp list</span>
            </div>
          </div>
        </div>
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
              {"  "}<span className="tok-key">&quot;mcpServers&quot;</span>: {`{`}
            </div>
            <div>
              {"    "}<span className="tok-key">&quot;figma&quot;</span>: {`{`}
            </div>
            <div>
              {"      "}<span className="tok-key">&quot;command&quot;</span>:{" "}
              <span className="tok-str">&quot;npx&quot;</span>,
            </div>
            <div>
              {"      "}<span className="tok-key">&quot;args&quot;</span>: [
              <span className="tok-str">&quot;@anthropic-ai/figma-mcp&quot;</span>]
            </div>
            <div>{"    },"}</div>
            <div>
              {"    "}<span className="tok-key">&quot;github&quot;</span>: {`{`}
            </div>
            <div>
              {"      "}<span className="tok-key">&quot;command&quot;</span>:{" "}
              <span className="tok-str">&quot;npx&quot;</span>,
            </div>
            <div>
              {"      "}<span className="tok-key">&quot;args&quot;</span>: [
              <span className="tok-str">&quot;@anthropic-ai/github-mcp&quot;</span>]
            </div>
            <div>{"    }"}</div>
            <div>{"  }"}</div>
            <div>{`}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
