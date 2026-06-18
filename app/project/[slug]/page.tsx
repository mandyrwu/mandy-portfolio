import type { Metadata } from "next";
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

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen">
      <div style={{ height: "160px" }} />

      <div
        className="mx-auto px-6 flex flex-col"
        style={{ maxWidth: "var(--max-content-width)", gap: "80px" }}
      >
        {/* ── Hero card ── */}
        <div
          style={{
            backgroundColor: project.heroBg ?? "#FFFFFF",
            borderRadius: "24px",
            height: "340px",
          }}
        />

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
            <div
              style={{
                flex: 1,
                height: "327px",
                backgroundColor: "#FFFFFF",
                borderRadius: "24px",
              }}
            />
            <div
              style={{
                flex: 1,
                height: "327px",
                backgroundColor: "#FFFFFF",
                borderRadius: "24px",
              }}
            />
          </div>

          {project.overviewText && (
            <p
              style={{
                fontSize: "var(--fs-body)",
                fontWeight: 300,
                lineHeight: "var(--lh-body)",
                color: "var(--c-text-secondary)",
              }}
            >
              {project.overviewText}
            </p>
          )}
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
            {area.imageBg !== undefined && (
              <div
                style={{
                  width: "100%",
                  height: "500px",
                  backgroundColor: area.imageBg,
                  borderRadius: "24px",
                }}
              />
            )}

            {/* Learnings-style section: multiple title + body pairs, no image */}
            {area.subItems?.map((item, j) => (
              <>
                <h2
                  key={`title-${j}`}
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
                    key={`body-${j}-${k}`}
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
              </>
            ))}
          </div>
        ))}
      </div>

      <div style={{ height: "80px" }} />
      <Footer />
    </main>
  );
}
