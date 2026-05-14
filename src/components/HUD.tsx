"use client";

import { acts, TOTAL_SLIDES, getAct } from "@/data/slides";

interface HUDProps {
  current: number;
  visible: boolean;
  onGo: (n: number) => void;
}

export default function HUD({ current, visible, onGo }: HUDProps) {
  const currentAct = getAct(current);
  const progress = (current / TOTAL_SLIDES) * 100;

  return (
    <div id="hud" className={visible ? "is-visible" : ""}>
      <div
        id="progress"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const pct = (e.clientX - rect.left) / rect.width;
          onGo(Math.max(1, Math.ceil(pct * TOTAL_SLIDES)));
        }}
      >
        <div id="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div id="act-tabs">
        {acts.map((act) => (
          <button
            key={act.id}
            className={`act-tab${currentAct === act.id ? " is-active" : ""}`}
            onClick={() => onGo(act.start)}
          >
            {act.label}
          </button>
        ))}
      </div>

      <button
        className="nav-arrow left"
        onClick={() => onGo(current - 1)}
        disabled={current <= 1}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="nav-arrow right"
        onClick={() => onGo(current + 1)}
        disabled={current >= TOTAL_SLIDES}
        aria-label="Next slide"
      >
        ›
      </button>

      <div id="hud-bottom">
        <button
          className="chevron"
          onClick={() => onGo(current - 1)}
          disabled={current <= 1}
        >
          ‹
        </button>
        <span className="hud-act-name">{acts[currentAct]?.label}</span>
        <span className="hud-counter">
          {String(current).padStart(2, "0")} / {TOTAL_SLIDES}
        </span>
        <button
          className="chevron"
          onClick={() => onGo(current + 1)}
          disabled={current >= TOTAL_SLIDES}
        >
          ›
        </button>
      </div>
    </div>
  );
}
