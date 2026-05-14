import { ExternalArrow } from "@/components/icons";
import { EMAIL, LINKEDIN, RESUME } from "@/lib/site-constants";

export function ContactSection({
  animationDelayMs = 520,
  className = "",
}: {
  animationDelayMs?: number;
  className?: string;
}) {
  return (
    <section
      className={`animate-fade-up max-w-3xl ${className}`}
      style={{ animationDelay: `${animationDelayMs}ms` }}
    >
      <h2 className="text-[clamp(1.75rem,4vw,2.35rem)] font-semibold leading-tight tracking-[-0.03em]">
        Thanks for stopping by-
      </h2>
      <h2 className="mt-2 text-[clamp(1.75rem,4vw,2.35rem)] font-semibold leading-tight tracking-[-0.03em]">
        Let&apos;s grab a coffee.
      </h2>
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium">
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 border-b border-foreground/25 pb-0.5 transition-colors hover:border-foreground"
        >
          LinkedIn
          <ExternalArrow />
        </a>
        <a
          href={RESUME}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 border-b border-foreground/25 pb-0.5 transition-colors hover:border-foreground"
        >
          Resume
          <ExternalArrow />
        </a>
        <a
          href={EMAIL}
          className="inline-flex items-center gap-1 border-b border-foreground/25 pb-0.5 transition-colors hover:border-foreground"
        >
          Email
        </a>
      </div>
    </section>
  );
}
