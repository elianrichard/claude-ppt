"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { TOTAL_SLIDES, getAct } from "@/data/slides";
import Slide from "./Slide";
import HUD from "./HUD";
import S01Title from "./slides/S01Title";
import S02Hook from "./slides/S02Hook";
import S03Compact from "./slides/S03Compact";
import S04Init from "./slides/S04Init";
import S05Memory from "./slides/S05Memory";
import S07Worktrees from "./slides/S07Worktrees";
import S08Shortcuts from "./slides/S08Shortcuts";
import SSlashSetup from "./slides/SSlashSetup";
import SSlashTask from "./slides/SSlashTask";
import SSubAgents from "./slides/SSubAgents";
import SCustomAgent from "./slides/SCustomAgent";
import S09Skills from "./slides/S09Skills";
import S10RTK from "./slides/S10RTK";
import S11Caveman from "./slides/S11Caveman";
import S12Community from "./slides/S12Community";
import S13CocoIndex from "./slides/S13CocoIndex";
import S14CreateSkill from "./slides/S14CreateSkill";
import S14Marketplace from "./slides/S14Marketplace";
import S15MCP from "./slides/S15MCP";
import S16Figma from "./slides/S16Figma";
import S17MCPGrid from "./slides/S17MCPGrid";
import S18MCPSetup from "./slides/S18MCPSetup";
import S19Chrome from "./slides/S19Chrome";
import S19Desktop from "./slides/S19Desktop";
import S20Artifacts from "./slides/S20Artifacts";
import S21Hacks from "./slides/S21Hacks";
import S22Closing from "./slides/S22Closing";

const slideComponents: Record<number, React.FC> = {
  1: S01Title,
  2: S02Hook,
  // Claude Code act
  3: S03Compact,
  4: S04Init,
  5: S05Memory,
  6: S07Worktrees,
  7: S08Shortcuts,
  8: SSlashSetup,
  9: SSlashTask,
  10: SSubAgents,
  11: SCustomAgent,
  // Skills act
  12: S09Skills,
  13: S10RTK,
  14: S11Caveman,
  15: S12Community,
  16: S13CocoIndex,
  17: S14CreateSkill,
  18: S14Marketplace,
  // MCP act
  19: S15MCP,
  20: S16Figma,
  21: S17MCPGrid,
  22: S18MCPSetup,
  // Desktop act
  23: S19Chrome,
  24: S19Desktop,
  25: S20Artifacts,
  // Hacks act
  26: S21Hacks,
  // Closing
  27: S22Closing,
};

export default function Deck() {
  const [current, setCurrent] = useState(1);
  const [hudVisible, setHudVisible] = useState(true);
  const hudTimer = useRef<ReturnType<typeof setTimeout>>(null);
  const touchStart = useRef<number>(0);

  const go = useCallback((n: number) => {
    setCurrent(Math.max(1, Math.min(TOTAL_SLIDES, n)));
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          go(current + 1);
          break;
        case "ArrowLeft":
          e.preventDefault();
          go(current - 1);
          break;
        case "Home":
          e.preventDefault();
          go(1);
          break;
        case "End":
          e.preventDefault();
          go(TOTAL_SLIDES);
          break;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, go]);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStart.current;
      if (Math.abs(dx) > 50) {
        go(dx < 0 ? current + 1 : current - 1);
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [current, go]);

  useEffect(() => {
    const showHud = () => {
      setHudVisible(true);
      if (hudTimer.current) clearTimeout(hudTimer.current);
      hudTimer.current = setTimeout(() => setHudVisible(false), 3000);
    };

    window.addEventListener("mousemove", showHud);
    window.addEventListener("click", showHud);
    showHud();

    return () => {
      window.removeEventListener("mousemove", showHud);
      window.removeEventListener("click", showHud);
      if (hudTimer.current) clearTimeout(hudTimer.current);
    };
  }, []);

  const currentAct = getAct(current);

  return (
    <main id="deck" data-act={currentAct}>
      {Array.from({ length: TOTAL_SLIDES }, (_, i) => {
        const n = i + 1;
        const Component = slideComponents[n];
        if (!Component) return null;
        return (
          <Slide
            key={n}
            n={n}
            act={getAct(n)}
            isActive={n === current}
            isPrev={n === current - 1}
            isNext={n === current + 1}
          >
            <Component />
          </Slide>
        );
      })}
      <HUD current={current} visible={hudVisible} onGo={go} />
    </main>
  );
}
