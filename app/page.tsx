import Link from "next/link";
import Tag from "@/components/tag";
import Footer from "@/components/footer";
import { projects } from "@/lib/projects";

function NumBadge({ n }: { n: number }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "18px",
        height: "18px",
        borderRadius: "4px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E8E8E8",
        fontSize: "9px",
        fontWeight: 400,
        fontStyle: "normal",
        color: "#8E8E93",
        verticalAlign: "middle",
        position: "relative",
        top: "-2px",
        flexShrink: 0,
      }}
    >
      {n}
    </span>
  );
}

export default function HomePage() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "var(--c-bg)" }}
    >
      <style>{`
        .card-hover { transition: transform 0.2s ease; }
        .card-hover:hover { transform: scale(0.97); }
        @media (max-width: 640px) {
          .card-tags-left { flex-direction: column !important; align-items: flex-start !important; }
          .card-tags-right { flex-direction: column !important; align-items: flex-end !important; }
        }
      `}</style>
      {/* Spacer below fixed nav (nav sits at top:40px, ~44px tall → ~84px bottom) */}
      <div style={{ height: "200px" }} />

      {/* ── Bio section (y:238 in Figma — above cards) ── */}
      <section
        className="mx-auto flex flex-col items-center text-center px-6"
        style={{ maxWidth: "740px", gap: "60px" }}
      >
        {/* Main bio text — 32px Inter Light */}
        <p
          style={{
            fontSize: "32px",
            fontWeight: 300,
            lineHeight: 1.4,
            color: "var(--c-text-primary)",
            textAlign: "center",
          }}
        >
          <span style={{ color: "#727272" }}>Mandy Wu</span>{" "}
          is a product designer who
          <br />
          <NumBadge n={1} />
          {" "}thinks in systems,{" "}
          <NumBadge n={2} />
          {" "}obsesses over details, &amp;{" "}
          <NumBadge n={3} />
          {" "}crafts intentional experiences that scale.
        </p>

        {/* Subtext — 16px Inter Light, secondary gray */}
        <p
          style={{
            fontSize: "var(--fs-body)",
            fontWeight: 300,
            lineHeight: "var(--lh-body)",
            color: "#727272",
            textAlign: "center",
          }}
        >
          Previously worked on the Design System @{" "}
          <a
            href="https://cds.coinbase.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "inherit",
              textDecoration: "none",
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "4px 3px",
              backgroundPosition: "0 100%",
              backgroundRepeat: "repeat-x",
              paddingBottom: "3px",
            }}
          >
            Coinbase
          </a>
          <br />
          Currently looking for the next fun thing to build ~
        </p>
      </section>

      {/* ── Project cards grid (y:561 in Figma — below bio) ── */}
      <section
        className="mx-auto px-6 grid grid-cols-1 md:grid-cols-2"
        style={{
          maxWidth: "var(--max-content-width)",
          gap: "16px",
          marginTop: "80px",
        }}
      >
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/project/${project.slug}`}
            className="block group"
          >
            <article
              className="card-hover"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "16px",
                backgroundColor: "var(--c-surface)",
                borderRadius: "var(--r-card)",
                border: "1px solid var(--c-border)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Card image */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "2 / 1",
                  borderRadius: "var(--r-image)",
                  backgroundColor: project.imagePlaceholderColor,
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                {project.coverImage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.coverImage}
                    alt={project.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                )}
              </div>

              {/*
                Info row — space-between layout exactly as in Figma:
                  LEFT:  [project name chip (colored)]  [description chip (gray)]
                  RIGHT: [category chip]  [year chip]
              */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* Left group */}
                <div className="card-tags-left" style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <Tag
                    bg={project.titleColor}
                    textColor="#FFFFFF"
                    fontWeight={600}
                  >
                    {project.name}
                  </Tag>
                  <Tag fontWeight={400}>{project.description}</Tag>
                </div>

                {/* Right group */}
                <div className="card-tags-right" style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                  {project.rightTags.map((tag) => (
                    <Tag key={tag} fontWeight={400}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>

      <div style={{ height: "80px" }} />
      <Footer />
    </main>
  );
}
