export interface Act {
  id: number;
  label: string;
  start: number;
}

export const acts: Act[] = [
  { id: 0, label: "Opening", start: 1 },
  { id: 1, label: "Claude Code", start: 3 },
  { id: 2, label: "Skills", start: 10 },
  { id: 3, label: "MCP", start: 17 },
  { id: 4, label: "Desktop", start: 21 },
  { id: 5, label: "Hacks", start: 24 },
  { id: 6, label: "Closing", start: 25 },
];

export const actLabels = acts.map((a) => a.label);
export const actStarts = acts.map((a) => a.start);
export const TOTAL_SLIDES = 25;

export function getAct(n: number): number {
  for (let i = acts.length - 1; i >= 0; i--) {
    if (n >= acts[i].start) return acts[i].id;
  }
  return 0;
}
