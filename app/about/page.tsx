import type { Metadata } from "next";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import { AboutScrapbook } from "@/components/about-scrapbook";
import { AmbientBackground } from "@/components/ambient-background";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { UW } from "@/lib/site-constants";

const handwriting = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Hello, I'm Mandy!",
  description:
    "Mandy Wu (she/her) is a product designer in Seattle, studying Human-Centered Design & Engineering at the University of Washington.",
};

export default function AboutPage() {
  return (
    <div className="relative z-[2] flex min-h-full flex-1 flex-col">
      <AmbientBackground />
      <SiteHeader activePage="about" />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pt-20">
        <div className="max-w-2xl">
          <h1
            className={`${handwriting.className} animate-fade-up text-[clamp(2.5rem,7vw,3.75rem)] font-semibold leading-[1.15] text-foreground`}
            style={{ animationDelay: "60ms" }}
          >
            Nice to meet you!
          </h1>

          <div className="mt-10 space-y-7 text-[1.05rem] leading-relaxed text-muted sm:text-lg">
            <p
              className="animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              My name is{" "}
              <strong className="font-semibold text-foreground">Mandy Wu</strong>{" "}
              (she/her), and I&apos;m a product designer based in{" "}
              <em className="text-foreground/90">Seattle, Washington</em>
              .
            </p>
            <p
              className="animate-fade-up"
              style={{ animationDelay: "190ms" }}
            >
              I&apos;m currently studying{" "}
              <Link
                href={UW}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline decoration-black/[0.18] underline-offset-[5px] transition-colors hover:decoration-foreground"
              >
                Human-centered Design and Engineering at the University of
                Washington
              </Link>{" "}
              where I&apos;m learning to apply design principles to create
              functional and delightful solutions to everyday problems.
            </p>
            <p
              className="animate-fade-up"
              style={{ animationDelay: "260ms" }}
            >
              In my free time, I like to roam around the city, create
              experimental recipes, and daydream :)
            </p>
            <p
              className="animate-fade-up font-medium text-foreground/90"
              style={{ animationDelay: "330ms" }}
            >
              More fun things to come :)
            </p>
          </div>
        </div>

        <AboutScrapbook animationBaseDelay={400} />

        <ContactSection
          className="mt-20 sm:mt-24 lg:mt-28"
          animationDelayMs={520}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
