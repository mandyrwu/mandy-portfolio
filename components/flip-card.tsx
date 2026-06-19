"use client";

import { useState } from "react";

const PAD = 8;

export default function FlipCard({
  src,
  alt,
  width,
  top,
  left,
  zIndex,
  rotation,
  fullWidth = false,
}: {
  src: string;
  alt?: string;
  width?: number;
  top?: number;
  left?: number;
  zIndex?: number;
  rotation?: number;
  fullWidth?: boolean;
}) {
  const [flips, setFlips] = useState(0);

  const front = (
    <div
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        backgroundColor: "#FFFFFF",
        padding: `${PAD}px`,
        border: "1px solid #E0E0E0",
        borderRadius: "10px",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt ?? ""}
        style={
          fullWidth
            ? { width: "100%", height: "auto", display: "block", borderRadius: "4px" }
            : { width: `${width}px`, height: "auto", display: "block", borderRadius: "4px" }
        }
      />
    </div>
  );

  const back = (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E0E0E0",
        borderRadius: "10px",
        padding: "16px 20px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <svg aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
        <filter id="paper-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-noise)" opacity="0.20" />
      </svg>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative" }}>
        <p style={{ fontFamily: "var(--font-bad-script), cursive", fontSize: "20px", color: "var(--c-text-primary)" }}>
          Hey there,
        </p>
        <p style={{ fontWeight: 300, fontSize: "14px", lineHeight: "20px", color: "var(--c-text-primary)" }}>
          Welcome to my portfolio!
        </p>
        <p style={{ fontWeight: 300, fontSize: "14px", lineHeight: "20px", color: "var(--c-text-primary)" }}>
          I&apos;m Mandy, a product designer based in Seattle, Washington. As a kid, I was always sneaking out of PE to draw and paint, and that love for creativity has stuck with me ever since. It led me to study Human-Centered Design and Engineering at the University of Washington, and most recently, to designing at Coinbase.
        </p>
        <p style={{ fontWeight: 300, fontSize: "14px", lineHeight: "20px", color: "var(--c-text-primary)" }}>
          I care deeply about thinking in systems at scale and bringing real intentionality to every design decision. Outside of work, I enjoy roaming the city, experimenting in the kitchen, and daydreaming.
        </p>
      </div>
      <p style={{ fontFamily: "var(--font-bad-script), cursive", fontSize: "20px", color: "var(--c-text-primary)", textAlign: "right", position: "relative" }}>
        Xoxo, Mandy
      </p>
    </div>
  );

  const flipContainer = (
    <div
      style={{
        position: "relative",
        transformStyle: "preserve-3d",
        transition: "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: `rotateY(${flips * -180}deg)`,
      }}
    >
      {front}
      {back}
    </div>
  );

  if (fullWidth) {
    return (
      <>
        <style>{`
          @keyframes hint-wiggle {
            0%   { transform: rotate(0deg); }
            2%   { transform: rotate(-2.5deg); }
            5%   { transform: rotate(2.5deg); }
            7%   { transform: rotate(-1.5deg); }
            9%   { transform: rotate(1.5deg); }
            11%  { transform: rotate(-0.5deg); }
            13%  { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
          }
        `}</style>
        <div
          style={{
            animation: flips % 2 === 0 ? "hint-wiggle 4s ease-in-out 1s infinite" : "none",
            perspective: "1200px",
            cursor: "pointer",
          }}
          onClick={() => setFlips(f => f + 1)}
        >
          {flipContainer}
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        @keyframes hint-wiggle {
          0%   { transform: rotate(0deg); }
          2%   { transform: rotate(-2.5deg); }
          5%   { transform: rotate(2.5deg); }
          7%   { transform: rotate(-1.5deg); }
          9%   { transform: rotate(1.5deg); }
          11%  { transform: rotate(-0.5deg); }
          13%  { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
      <div
        style={{
          position: "absolute",
          top,
          left,
          zIndex,
          animation: flips % 2 === 0 ? "hint-wiggle 4s ease-in-out 1s infinite" : "none",
        }}
      >
        <div style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "center center" }}>
          <div
            style={{ width: (width ?? 0) + PAD * 2, perspective: "1200px", cursor: "pointer" }}
            onClick={() => setFlips(f => f + 1)}
          >
            {flipContainer}
          </div>
        </div>
      </div>
    </>
  );
}
