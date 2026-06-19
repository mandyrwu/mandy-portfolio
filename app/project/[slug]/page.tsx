import type { Metadata } from "next";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import Tag from "@/components/tag";
import { projects, getProject } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Mandy Wu`,
    description: project.subtitle,
  };
}

const EMAIL_RE = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

function renderWithLinks(text: string) {
  const parts = text.split(EMAIL_RE);
  return parts.map((part, i) =>
    EMAIL_RE.test(part) ? (
      <a
        key={i}
        href={`mailto:${part}`}
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
        {part}
      </a>
    ) : (
      part
    )
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen">
      <div style={{ height: "160px" }} />

      <div
        className="mx-auto px-6 flex flex-col"
        style={{ maxWidth: "900px", gap: "80px" }}
      >
        {/* ── Hero card ── */}
        {project.heroImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.heroImage}
            alt={`${project.name} hero`}
            style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px" }}
          />
        ) : (
          <div
            style={{
              backgroundColor: project.heroBg ?? "#FFFFFF",
              borderRadius: "16px",
              height: "340px",
            }}
          />
        )}

        {/* ── Header text block ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              fontSize: "var(--fs-h1)",
              fontWeight: 400,
              color: "var(--c-text-primary)",
            }}
          >
            {project.name}
          </h1>

          <p
            style={{
              fontSize: "var(--fs-body)",
              fontWeight: 300,
              lineHeight: "var(--lh-body)",
              color: "var(--c-text-secondary)",
            }}
          >
            {project.subtitle}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <Tag>{project.role}</Tag>
            <Tag>{project.category}</Tag>
            {project.extraTags?.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
            <Tag>{project.year}</Tag>
          </div>

          {/* Two side-by-side image cards */}
          <div style={{ display: "flex", gap: "23px" }}>
            {[0, 1].map((idx) => {
              const src = project.headerImages?.[idx];
              return (
                <div
                  key={idx}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    borderRadius: "16px",
                    overflow: "hidden",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  {src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={src} alt="" style={{ width: "100%", height: "auto", display: "block" }} />
                  ) : (
                    <div style={{ height: "327px" }} />
                  )}
                </div>
              );
            })}
          </div>

          {project.overviewText?.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: "var(--fs-body)",
                fontWeight: 300,
                lineHeight: "var(--lh-body)",
                color: "var(--c-text-secondary)",
              }}
            >
              {renderWithLinks(para)}
            </p>
          ))}
        </div>

        {/* ── Focus area / responsibility sections ── */}
        {project.focusAreas.map((area, i) => (
          <div
            key={i}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {/* Section label */}
            <span
              style={{
                fontSize: "var(--fs-body)",
                fontWeight: 300,
                lineHeight: "var(--lh-body)",
                color: "var(--c-text-faint)",
              }}
            >
              {area.label}
            </span>

            {/* Standard section: single title + body + image card */}
            {area.title && (
              <h2
                style={{
                  fontSize: "var(--fs-h2)",
                  fontWeight: 400,
                  color: "var(--c-text-primary)",
                }}
              >
                {area.title}
              </h2>
            )}
            {area.body?.map((para, j) => (
              <p
                key={j}
                style={{
                  fontSize: "var(--fs-body)",
                  fontWeight: 300,
                  lineHeight: "var(--lh-body)",
                  color: "var(--c-text-secondary)",
                }}
              >
                {para}
              </p>
            ))}
            {area.images?.map((src, j) => (
              <Fragment key={j}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px" }}
                />
                {area.imageBodyMap?.[j]?.map((para, k) => (
                  <p
                    key={k}
                    style={{
                      fontSize: "var(--fs-body)",
                      fontWeight: 300,
                      lineHeight: "var(--lh-body)",
                      color: "var(--c-text-secondary)",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </Fragment>
            ))}
            {area.imageMasonryGroups?.map(([topLeft, bottomLeft, right], i) => (
              <Fragment key={i}>
                {area.masonryBodyBefore?.[i]?.map((para, k) => (
                  <p
                    key={k}
                    style={{
                      fontSize: "var(--fs-body)",
                      fontWeight: 300,
                      lineHeight: "var(--lh-body)",
                      color: "var(--c-text-secondary)",
                    }}
                  >
                    {para}
                  </p>
                ))}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "12px", alignItems: "stretch" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={topLeft} alt="" style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px" }} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={bottomLeft} alt="" style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px" }} />
                  </div>
                  <div style={{ overflow: "hidden", borderRadius: "16px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={right} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                </div>
              </Fragment>
            ))}
            {area.imageRows?.map((row, rowIdx) => (
              <Fragment key={rowIdx}>
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  {row.map((src, imgIdx) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={imgIdx}
                      src={src}
                      alt=""
                      style={{
                        flex: area.imageRowFlexes?.[rowIdx]?.[imgIdx] ?? 1,
                        minWidth: 0,
                        width: 0,
                        height: "auto",
                        display: "block",
                        borderRadius: "16px",
                      }}
                    />
                  ))}
                </div>
                {area.imageRowBodyAfter?.[rowIdx]?.map((para, k) => (
                  <p
                    key={k}
                    style={{
                      fontSize: "var(--fs-body)",
                      fontWeight: 300,
                      lineHeight: "var(--lh-body)",
                      color: "var(--c-text-secondary)",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </Fragment>
            ))}
            {area.imagePanels?.map((panel, i) => (
              <Fragment key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={panel.full} alt="" style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px" }} />
                <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  {panel.row.map((src, j) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={j}
                      src={src}
                      alt=""
                      style={{ flex: 1, minWidth: 0, width: 0, height: "auto", display: "block", borderRadius: "16px" }}
                    />
                  ))}
                </div>
              </Fragment>
            ))}
            {!area.images && !area.imageRows && area.imageBg !== undefined && (
              <div
                style={{
                  width: "100%",
                  height: "500px",
                  backgroundColor: area.imageBg,
                  borderRadius: "16px",
                }}
              />
            )}

            {/* Learnings-style section: multiple title + body pairs, no image */}
            {area.subItems?.map((item, j) => (
              <div key={j} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h2
                  style={{
                    fontSize: "var(--fs-h2)",
                    fontWeight: 400,
                    color: "var(--c-text-primary)",
                  }}
                >
                  {item.title}
                </h2>
                {item.body.map((para, k) => (
                  <p
                    key={k}
                    style={{
                      fontSize: "var(--fs-body)",
                      fontWeight: 300,
                      lineHeight: "var(--lh-body)",
                      color: "var(--c-text-secondary)",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ height: "80px" }} />
      <Footer />
    </main>
  );
}
