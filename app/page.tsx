import Link from "next/link";
import { AmbientBackground } from "@/components/ambient-background";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { COINBASE } from "@/lib/site-constants";

export default function Home() {
  return (
    <div className="relative z-[2] flex min-h-full flex-1 flex-col">
      <AmbientBackground />
      <SiteHeader activePage="home" />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
        <section className="max-w-3xl">
          <p
            className="animate-fade-up text-[1.05rem] leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "60ms" }}
          >
            <Link
              href="/about"
              className="font-medium text-foreground underline decoration-black/[0.18] underline-offset-[5px] transition-colors hover:decoration-foreground"
            >
              Mandy Wu
            </Link>{" "}
            is a product designer who thinks in systems, obsesses over details, and
            crafts intentional experiences that scale. Previously designing @{" "}
            <a
              href={COINBASE}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-black/[0.18] underline-offset-[5px] transition-colors hover:decoration-foreground"
            >
              Coinbase
            </a>
            . Currently looking for the next great thing to build.
          </p>
        </section>

        <section
          className="animate-fade-up mt-20 sm:mt-24 lg:mt-28"
          style={{ animationDelay: "220ms" }}
        >
          <div className="rounded-[2rem] bg-[#ebe8e2]/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] ring-1 ring-black/[0.05] backdrop-blur-sm sm:p-5 lg:rounded-[2.25rem]">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <ProjectCard
                href="/project/nora-music"
                tag="Product Design"
                tagClassName="text-card-nora-label"
                title="Nora Music"
                description="Simplifying the search for verified music content."
                className="bg-card-nora"
                delay={280}
              />
              <ProjectCard
                href="/project/sign-system"
                tag="UX DESIGN | UX RESEARCH"
                tagClassName="text-card-sign-label"
                title="Sign System"
                description="Supporting sign language acquisition and communication for all."
                className="bg-card-sign"
                delay={340}
              />
              <ProjectCard
                href="/project/honeycomb"
                tag="Product Design"
                tagClassName="text-card-honey-label"
                title="HoneyComb"
                description="Bridging the gap between busy parents and their child's education."
                className="bg-card-honey"
                delay={400}
              />
              <article
                className="animate-fade-up group relative flex min-h-[280px] flex-col overflow-hidden rounded-[1.75rem] bg-card-coinbase p-8 opacity-100 ring-1 ring-black/[0.04] sm:min-h-[300px] lg:rounded-[2rem] lg:p-10"
                style={{ animationDelay: "460ms" }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-card-coinbase-label">
                  DESIGN SYSTEM
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-[2rem]">
                  Coinbase
                </h3>
                <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-foreground/80">
                  Reimagining input components for improved aesthetic and
                  functionality. Coming soon!
                </p>
                <div className="pointer-events-none mt-auto flex flex-1 items-end justify-center pb-2 pt-10">
                  <span className="rounded-full border border-black/[0.08] bg-white/50 px-5 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/50">
                    Coming soon
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <ContactSection
          className="mt-24 sm:mt-28 lg:mt-32"
          animationDelayMs={520}
        />
      </main>

      <SiteFooter />
    </div>
  );
}

function ProjectCard({
  href,
  tag,
  tagClassName,
  title,
  description,
  className,
  delay,
}: {
  href: string;
  tag: string;
  tagClassName: string;
  title: string;
  description: string;
  className: string;
  delay: number;
}) {
  return (
    <Link
      href={href}
      className={`animate-fade-up group relative flex min-h-[280px] flex-col overflow-hidden rounded-[1.75rem] p-8 ring-1 ring-black/[0.04] transition-[transform,box-shadow] duration-500 ease-out will-change-transform sm:min-h-[300px] lg:rounded-[2rem] lg:p-10 ${className} hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(0,0,0,0.35)]`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${tagClassName}`}
      >
        {tag}
      </p>
      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-[2rem]">
        {title}
      </h3>
      <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-foreground/85">
        {description}
      </p>
      <div className="mt-auto flex flex-1 flex-col items-center justify-end pt-12">
        <span className="inline-flex translate-y-2 items-center gap-2 rounded-full border border-black/[0.08] bg-white/55 px-5 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View case study
          <svg className="size-3" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path
              d="M2 6h8M7 3l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
