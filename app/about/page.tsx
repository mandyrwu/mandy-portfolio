import type { Metadata } from "next";
import Footer from "@/components/footer";
import PhotoGallery from "@/components/photo-gallery";

export const metadata: Metadata = {
  title: "About — Mandy Wu",
  description:
    "Product designer crafting systems-first experiences. Previously at Coinbase.",
};

const experience = [
  { role: "Product Designer", company: "Coinbase", years: "2025–26", href: "https://www.coinbase.com/" },
  { role: "Product Designer", company: "UniversalAGI", years: "2025", href: "https://www.universalagi.com/" },
  { role: "Product Design Intern", company: "Coinbase", years: "2024", href: "https://www.coinbase.com/" },
  { role: "User Experience Designer", company: "Nora Music", years: "2023–24", href: "https://noramusic.com/" },
];

const community = [
  { role: "Undergraduate Teaching Assistant", company: "UW iSchool", years: "2023–25", href: "https://ischool.uw.edu/" },
  { role: "Graphic Design Lead", company: "Society of Women Engineers", shortName: "SWE", years: "2022–24", href: "https://sweuw.org/" },
  { role: "Undergraduate Researcher", company: "KidsTeam", years: "2022–23", href: "https://www.kidsteam.ischool.uw.edu/" },
  { role: "Designer", company: "Design for America", years: "2022–23", href: "https://www.designforamerica.org/" },
];


function ExperienceRow({
  role,
  company,
  shortName,
  years,
  href,
}: {
  role: string;
  company: string;
  shortName?: string;
  years: string;
  href: string;
}) {
  return (
    <div
      className="flex items-center justify-between w-full"
      style={{ gap: "16px" }}
    >
      <span
        style={{
          fontSize: "var(--fs-body)",
          fontWeight: 300,
          color: "var(--c-text-primary)",
          flexShrink: 1,
          minWidth: 0,
        }}
      >
        {role}
      </span>
      <div className="flex items-center shrink-0" style={{ gap: "16px" }}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "var(--fs-body)",
            fontWeight: 300,
            color: "var(--c-text-primary)",
            textDecoration: "none",
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "4px 3px",
            backgroundPosition: "0 100%",
            backgroundRepeat: "repeat-x",
            paddingBottom: "3px",
            whiteSpace: "nowrap",
          }}
        >
          {shortName ? (
            <>
              <span className="hidden sm:inline">{company}</span>
              <span className="sm:hidden">{shortName}</span>
            </>
          ) : company}
        </a>
        <span
          style={{
            fontSize: "var(--fs-body)",
            fontWeight: 300,
            color: "var(--c-text-faint)",
            whiteSpace: "nowrap",
            minWidth: "64px",
            textAlign: "right",
          }}
        >
          {years}
        </span>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Top padding clears the fixed nav */}
      <div className="pt-28" />

      {/* Interactive photo gallery */}
      <section style={{ maxWidth: "var(--max-content-width)", margin: "40px auto 0", padding: "0 24px", overflow: "visible" }}>
        <PhotoGallery />
      </section>

      {/* Experience + Community sections */}
      <section
        className="mx-auto px-6 flex flex-col"
        style={{ maxWidth: "640px", marginTop: "24px", gap: "40px" }}
      >
        {/* Experience */}
        <div className="flex flex-col" style={{ gap: "16px" }}>
          <span
            style={{
              fontSize: "var(--fs-body)",
              fontWeight: 300,
              color: "var(--c-text-faint)",
            }}
          >
            Experience
          </span>
          <div className="flex flex-col" style={{ gap: "16px" }}>
            {experience.map((item, i) => (
              <ExperienceRow key={i} {...item} />
            ))}
          </div>
        </div>

        {/* Community & Leadership */}
        <div className="flex flex-col" style={{ gap: "16px" }}>
          <span
            style={{
              fontSize: "var(--fs-body)",
              fontWeight: 300,
              color: "var(--c-text-faint)",
            }}
          >
            Community &amp; Leadership
          </span>
          <div className="flex flex-col" style={{ gap: "16px" }}>
            {community.map((item, i) => (
              <ExperienceRow key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: "80px" }} />
      <Footer />
    </main>
  );
}
