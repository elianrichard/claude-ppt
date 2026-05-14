"use client";

const cmds = [
  { cmd: "/init", desc: "Generate starter CLAUDE.md for repo" },
  { cmd: "/memory", desc: "Edit CLAUDE.md files, toggle auto-memory" },
  { cmd: "/add-dir", desc: "Add another working directory mid-session" },
  { cmd: "/login", desc: "Anthropic account auth" },
  { cmd: "/config", desc: "Open settings UI" },
  { cmd: "/permissions", desc: "Manage allow / ask / deny tool rules" },
  { cmd: "/mcp", desc: "Manage MCP server connections" },
  { cmd: "/agents", desc: "Manage subagents" },
  { cmd: "/hooks", desc: "View hook configurations" },
  { cmd: "/plugin", desc: "Manage plugins; /reload-plugins to hot-reload" },
];

export default function SSlashSetup() {
  return (
    <div className="sss" style={{ textAlign: "center" }}>
      <p className="eyebrow reveal">Claude Code CLI</p>
      <h2 className="reveal d1">
        Slash Commands — <span className="gradient-text">Setup</span>
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 700, margin: "0.6rem auto 0" }}>
        Configure your environment without leaving the chat.
      </p>
      <div className="sss-grid reveal d3" style={{ marginTop: "1.5rem" }}>
        {cmds.map((c, i) => (
          <div key={i} className="sss-row">
            <code className="sss-cmd">{c.cmd}</code>
            <span className="sss-desc">{c.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
