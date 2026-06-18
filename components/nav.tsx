"use client";

import { useState } from "react";
import Link from "next/link";

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const NAV_ITEMS = [
  { href: "/", icon: <HomeIcon />, label: "Work", internal: true },
  { href: "/about", icon: <UserIcon />, label: "About", internal: true },
  { href: "/resume", icon: <FileTextIcon />, label: "Resume", internal: true },
  { href: "https://www.linkedin.com/in/mandyrwu/", icon: <LinkedInIcon />, label: "LinkedIn", internal: false },
];

/*
  Icon center x-offsets from the left edge of the nav pill (used to position the tooltip).
  Nav pill: 8px left pad | btn0 32px | 4px gap | btn1 32px | 4px gap | btn2 32px | 4px gap | btn3 32px | 8px right pad
  Each button: 6px pad + 20px icon + 6px pad = 32px wide
  Centers: i=0→24px, i=1→60px, i=2→96px, i=3→132px
*/
const ICON_CENTERS = [24, 60, 96, 132];

/* Shared visual token values */
const PILL_BG    = "rgba(255, 255, 255, 0.55)";
const PILL_BORDER = "1px solid rgba(200, 200, 210, 0.3)";
const PILL_RADIUS = "9999px";
const HOVER_BG   = "rgba(255, 255, 255, 0.35)";

export default function Nav() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      style={{
        position: "fixed",
        top: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}
    >
      {/* ── Nav pill ── */}
      <nav
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          padding: "6px 8px",
          backgroundColor: PILL_BG,
          border: PILL_BORDER,
          borderRadius: PILL_RADIUS,
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          boxShadow: "0 2px 20px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(0, 0, 0, 0.04)",
        }}
      >
        {NAV_ITEMS.map((item, i) => {
          const iconBtn = (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "32px",
                height: "32px",
                borderRadius: PILL_RADIUS,
                color: "#727272",
                backgroundColor: hovered === i ? HOVER_BG : "transparent",
                transition: "background-color 0.12s ease",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              {item.icon}
            </span>
          );

          return (
            <div
              key={item.href}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.internal ? (
                <Link href={item.href} aria-label={item.label} style={{ display: "block" }}>
                  {iconBtn}
                </Link>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  style={{ display: "block" }}
                >
                  {iconBtn}
                </a>
              )}
            </div>
          );
        })}
      </nav>

      {/* ── Tooltip pill — same visual treatment as nav pill ── */}
      {hovered !== null && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 3px)",
            left: `${ICON_CENTERS[hovered]}px`,
            transform: "translateX(-50%)",
            pointerEvents: "none",
            animation: "tooltip-in 0.15s ease forwards",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 8px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #F2F2F7",
              borderRadius: PILL_RADIUS,
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 300,
              lineHeight: "16px",
              color: "#727272",
              whiteSpace: "nowrap",
            }}
          >
            {NAV_ITEMS[hovered].label}
          </span>
        </div>
      )}
    </div>
  );
}
