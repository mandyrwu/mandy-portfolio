import type { ReactNode } from "react";
import Link from "next/link";
import { AmbientBackground } from "@/components/ambient-background";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function CaseStudyShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-[2] flex min-h-full flex-1 flex-col">
      <AmbientBackground />
      <SiteHeader activePage="none" />
      {children}
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-12">
        <ContactSection animationDelayMs={80} />
      </div>
      <SiteFooter />
    </div>
  );
}

export function FramerImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure
      className={`animate-fade-up my-6 overflow-hidden rounded-2xl bg-neutral-100/80 shadow-sm ring-1 ring-black/[0.06] ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-auto w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
}

export function FramerGallery({ urls }: { urls: readonly string[] }) {
  return (
    <div className="space-y-5">
      {urls.map((src, i) => (
        <FramerImage
          key={`${src}-${i}`}
          src={src}
          alt={`Case study visual ${i + 1}`}
        />
      ))}
    </div>
  );
}

export function CaseStudyHero({
  eyebrow,
  title,
  description,
  anchorLink,
}: {
  eyebrow: string;
  title: string;
  description: string;
  anchorLink?: { href: string; label: string };
}) {
  return (
    <header className="max-w-4xl">
      <p
        className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.2em] text-muted"
        style={{ animationDelay: "40ms" }}
      >
        {eyebrow}
      </p>
      <h1
        className="animate-fade-up mt-3 text-[clamp(2.25rem,6vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.035em]"
        style={{ animationDelay: "90ms" }}
      >
        {title}
      </h1>
      <p
        className="animate-fade-up mt-6 text-lg leading-relaxed text-muted sm:text-xl"
        style={{ animationDelay: "140ms" }}
      >
        {description}
      </p>
      {anchorLink ? (
        <p
          className="animate-fade-up mt-6 text-sm font-medium"
          style={{ animationDelay: "180ms" }}
        >
          <a
            href={anchorLink.href}
            className="border-b border-foreground/30 pb-0.5 text-foreground transition-colors hover:border-foreground"
          >
            {anchorLink.label}
          </a>
        </p>
      ) : null}
    </header>
  );
}

export function MetaGrid({
  rows,
}: {
  rows: { label: string; value: ReactNode }[];
}) {
  return (
    <dl className="animate-fade-up mt-10 grid gap-8 border-y border-black/[0.06] py-10 sm:grid-cols-3 sm:gap-6">
      {rows.map((row, i) => (
        <div key={row.label} style={{ animationDelay: `${220 + i * 40}ms` }}>
          <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
            {row.label}
          </dt>
          <dd className="mt-2 text-[0.95rem] font-medium leading-snug text-foreground">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function CaseStudySection({
  kicker,
  title,
  id,
  children,
  className = "",
}: {
  kicker?: string;
  title?: string;
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mt-16 scroll-mt-28 sm:mt-20 ${className}`}>
      {kicker ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          {kicker}
        </p>
      ) : null}
      {title ? (
        <h2 className="mt-2 text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-[1.65rem]">
          {title}
        </h2>
      ) : null}
      <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-muted sm:text-[1.05rem]">
        {children}
      </div>
    </section>
  );
}

export function CaseStudyH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-10 text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
      {children}
    </h3>
  );
}

export function OtherWork({
  href,
  tag,
  tagClassName,
  title,
  description,
}: {
  href: string;
  tag: string;
  tagClassName: string;
  title: string;
  description: string;
}) {
  return (
    <section className="animate-fade-up mt-20 border-t border-black/[0.06] pt-16 sm:mt-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
        check out my other work
      </p>
      <Link
        href={href}
        className="group mt-4 block max-w-xl rounded-[1.25rem] bg-[#ebe8e2]/80 p-6 ring-1 ring-black/[0.06] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-8"
      >
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${tagClassName}`}
        >
          {tag}
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
          {title}
        </h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
          View project
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </Link>
    </section>
  );
}
