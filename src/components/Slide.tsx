"use client";

interface SlideProps {
  n: number;
  act: number;
  isActive: boolean;
  isPrev: boolean;
  isNext: boolean;
  children: React.ReactNode;
}

export default function Slide({
  n,
  act,
  isActive,
  isPrev,
  isNext,
  children,
}: SlideProps) {
  const cn = [
    "slide",
    isActive && "is-active",
    isPrev && "is-prev",
    isNext && "is-next",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={cn} data-n={n} data-act={act}>
      <div className="slide-inner">{children}</div>
    </section>
  );
}
