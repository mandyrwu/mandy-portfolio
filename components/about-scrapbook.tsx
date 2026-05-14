import type { CSSProperties, ReactNode } from "react";

const FERRIS_SRC =
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=520&q=80";
const SKY_SRC =
  "https://images.unsplash.com/photo-1501630834275-560467c8a11d?auto=format&fit=crop&w=520&q=80";

function WashiTape({ className }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute z-20 rounded-[2px] border border-white/50 shadow-[0_1px_2px_rgba(0,0,0,0.12)] ${className ?? ""}`}
      style={{
        width: "5.75rem",
        height: "1.85rem",
        backgroundColor: "#9ec5ff",
        backgroundImage:
          "radial-gradient(circle at 1.5px 1.5px, #1e3a8a 1.1px, transparent 1.2px)",
        backgroundSize: "7px 7px",
      }}
      aria-hidden
    />
  );
}

function Polaroid({
  src,
  alt,
  grayscale,
  className,
  figureStyle,
  decoration,
}: {
  src: string;
  alt: string;
  grayscale?: boolean;
  className?: string;
  figureStyle?: CSSProperties;
  decoration?: ReactNode;
}) {
  return (
    <figure
      className={`animate-fade-up relative w-[min(72vw,260px)] shrink-0 sm:w-[280px] ${className ?? ""}`}
      style={figureStyle}
    >
      {decoration}
      <div className="rounded-sm bg-white p-3 pb-9 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.35)] ring-1 ring-black/[0.08] sm:p-3.5 sm:pb-10">
        <div className="relative overflow-hidden rounded-[1px] bg-neutral-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            width={520}
            height={520}
            className={`aspect-square w-full object-cover ${grayscale ? "grayscale contrast-[1.08]" : ""}`}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </figure>
  );
}

export function AboutScrapbook({
  animationBaseDelay = 420,
}: {
  animationBaseDelay?: number;
}) {
  return (
    <div className="relative mt-16 flex flex-col items-center gap-10 pb-4 sm:mt-20 md:mt-24 md:flex-row md:items-end md:justify-center md:gap-14 lg:gap-20">
      <Polaroid
        src={FERRIS_SRC}
        alt="Black and white photo of a Ferris wheel at a fair"
        grayscale
        className="-rotate-[2.5deg] md:-translate-x-4"
        figureStyle={{ animationDelay: `${animationBaseDelay}ms` }}
        decoration={
          <WashiTape className="-right-1 top-2 rotate-[20deg] md:right-2 md:top-3" />
        }
      />
      <Polaroid
        src={SKY_SRC}
        alt="Photo of a blue sky with soft clouds"
        className="translate-y-2 rotate-[3.5deg] md:translate-y-8"
        figureStyle={{ animationDelay: `${animationBaseDelay + 80}ms` }}
      />
    </div>
  );
}
