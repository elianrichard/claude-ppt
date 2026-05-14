"use client";

const shortcuts = [
  { keys: ["Esc"], desc: "Interrupt generation" },
  { keys: ["Tab"], desc: "Accept autocomplete suggestion" },
  { keys: ["Shift", "Tab"], desc: "Toggle plan mode" },
  { keys: ["Ctrl", "C"], desc: "Cancel current operation" },
  { keys: ["Ctrl", "L"], desc: "Clear terminal" },
  { keys: ["/"], desc: "Open slash command menu" },
  { keys: ["↑"], desc: "Previous prompt history" },
  { keys: ["Ctrl", "R"], desc: "Search prompt history" },
];

export default function S08Shortcuts() {
  return (
    <div className="s8">
      <p className="eyebrow reveal">Claude Code CLI</p>
      <h2 className="reveal d1">
        Keyboard <span className="gradient-text">Shortcuts</span>
      </h2>
      <p className="lead reveal d2" style={{ marginTop: "0.6rem", maxWidth: 650 }}>
        Navigate faster without leaving your keyboard.
      </p>
      <div className="s8-grid reveal d3" style={{ marginTop: "2rem" }}>
        {shortcuts.map((s, i) => (
          <div key={i} className={`s8-shortcut reveal d${Math.min(i + 3, 7)}`}>
            <div className="s8-keys">
              {s.keys.map((k, j) => (
                <span key={j}>
                  <kbd>{k}</kbd>
                  {j < s.keys.length - 1 && <span className="s8-plus">+</span>}
                </span>
              ))}
            </div>
            <span className="s8-desc">{s.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
