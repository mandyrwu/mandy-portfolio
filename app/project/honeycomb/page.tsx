import type { Metadata } from "next";
import Link from "next/link";
import { HONEY_IMAGES } from "@/lib/case-study-images";
import {
  CaseStudyHero,
  CaseStudyH3,
  CaseStudySection,
  CaseStudyShell,
  FramerGallery,
  MetaGrid,
  OtherWork,
} from "@/components/case-study/case-study-ui";

export const metadata: Metadata = {
  title: "HoneyComb — Mandy Wu",
  description:
    "A mobile app that streamlines parent-school engagement for busy and underrepresented parents.",
};

const gStats = HONEY_IMAGES.slice(0, 3);
const gSketch = HONEY_IMAGES.slice(3, 7);
const gIA = HONEY_IMAGES.slice(7, 9);
const gFinal = HONEY_IMAGES.slice(9, 13);

const FIGMA_PROTO =
  "https://www.figma.com/proto/nyWqvCPO9OAOX4yuyQA5hv/HoneyComb?page-id=0%3A1&node-id=1-398&p=f&viewport=539%2C658%2C0.05&t=DXS6XtUs4wsZdOlk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A398";

export default function HoneycombPage() {
  return (
    <CaseStudyShell>
      <main className="mx-auto w-full max-w-3xl px-5 pb-12 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
        <CaseStudyHero
          eyebrow="PRODUCT DESIGN"
          title="HoneyComb"
          description="Honeycomb is a mobile app that streamlines parent-school engagement. Designed for inclusivity, it empowers busy and underrepresented parents to stay informed, participate in school decisions, and build community."
          anchorLink={{ href: "#finaldesign", label: "Final Design" }}
        />

        <MetaGrid
          rows={[
            { label: "Timeline", value: "February 2023 (24 hours)" },
            { label: "Team", value: "Lea Hidaka & Me!" },
            { label: "Tools", value: "Pen & paper, Figjam, Figma" },
          ]}
        />

        <CaseStudySection kicker="Context" title={undefined}>
          <p>
            Honeycomb was created during{" "}
            <Link
              href="https://designatuci.com/designathons/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-black/[0.18] underline-offset-[5px] hover:decoration-foreground"
            >
              Design@UCI&apos;s 2023 Design-a-thon
            </Link>{" "}
            with 300+ qualifying participants. Inspired by the theme of Community
            and Inclusivity, the project aimed to bridge gaps in parent-school
            engagement by designing a platform that empowers all parents to stay
            involved.
          </p>
        </CaseStudySection>

        <CaseStudySection kicker="Challenge" title={undefined}>
          <CaseStudyH3>School engagement isn&apos;t accessible to all parents.</CaseStudyH3>
          <p>
            Many parents face barriers to participating in their child&apos;s
            education, whether due to busy work schedules, lack of accessible
            resources, or feeling excluded from traditional school involvement
            channels like the Parent Teacher Association (PTA). These gaps can
            leave parents disconnected from important decisions affecting their
            children.
          </p>
        </CaseStudySection>

        <CaseStudySection kicker="Solution" title={undefined}>
          <CaseStudyH3>
            An all-in-one digital platform that supports parent involvement.
          </CaseStudyH3>
          <p>
            Honeycomb is a mobile-first solution that empowers parents to stay
            informed, voice their opinions, and build connections within their
            kid&apos;s school community. By providing easy access to updates,
            decision-making tools, and peer support, it removes traditional barriers
            to engagement.
          </p>
        </CaseStudySection>

        <CaseStudySection kicker="Background research" title={undefined}>
          <CaseStudyH3>
            Most parents have full-time jobs, and a bunch of other responsibilities,
            too.
          </CaseStudyH3>
          <p>
            The Employment Characteristics of Families 2021 published by the Bureau
            of Labor Statistics shows that the majority of parents have full-time
            job responsibilities. Because of that, the highest percentage of schools
            perceived lack of time on the part of parents as a barrier to a great or
            moderate extent.
          </p>
        </CaseStudySection>

        <div className="not-prose mt-10 grid gap-6 sm:grid-cols-3">
          {[
            { v: "96.5%", l: "of married-couple families have at least one employed parent." },
            { v: "81.7%", l: "of single-fathers are employed with full-time jobs." },
            { v: "71.2%", l: "of single-mothers are employed with full-time jobs." },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-2xl bg-white/70 p-6 ring-1 ring-black/[0.06]"
            >
              <p className="text-4xl font-semibold tracking-tight text-foreground">
                {s.v}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.l}</p>
            </div>
          ))}
        </div>

        <FramerGallery urls={gStats} />

        <CaseStudySection kicker="Interview" title={undefined}>
          <CaseStudyH3>
            &quot;Who&apos;s going to watch the kids while I&apos;m at a school
            meeting?&quot;
          </CaseStudyH3>
          <p>
            With the limited time we had, we reached out to our own parents as well
            as a few of their friends to gather their perspectives and experiences
            with school involvements. The group of parents we spoke to included
            single parents working full time jobs, immigrant parents with language
            barriers, and parents of low-income families.
          </p>
        </CaseStudySection>

        <CaseStudySection kicker="pain points" title={undefined}>
          <CaseStudyH3>The PTA is not for all parents.</CaseStudyH3>
          <p>
            Traditionally, the only channel for parents to be informed and stay
            involved with their child&apos;s education is through the Parent Teacher
            Assosications (PTA). However, PTAs are not designed to be accessible for
            parents. They often exclude busy families due to inconvenient meetings,
            exclusive leadership, and scattered communication,
          </p>
          <div className="not-prose mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                h: "High Time Commitments",
                b: "PTA involvement requires extreme time dedication for meetings, events, volunteer work, and more. Parents with jobs and a busy schedule simply don't have this kind of capacity.",
              },
              {
                h: "Extremely Exclusive",
                b: "Most PTA positions require nominations and a lengthy application process. Parents without an established network in the school community are disadvantaged from the start.",
              },
              {
                h: "Lack of Credible Information",
                b: "Many parents struggle to find school district updates, let alone ways to contribute. Immigrant parents face an additional language barrier, further limiting their access to information.",
              },
            ].map((c) => (
              <div
                key={c.h}
                className="rounded-2xl bg-white/70 p-5 ring-1 ring-black/[0.06] sm:p-6"
              >
                <p className="font-semibold text-foreground">{c.h}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.b}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection kicker="opportunity for design" title={undefined}>
          <CaseStudyH3>
            How might we support underrepresented parents in their pursuit of school
            involvement to foster an inclusive education system?
          </CaseStudyH3>
        </CaseStudySection>

        <CaseStudySection kicker="Information architecture" title={undefined}>
          <CaseStudyH3>Streamlined access to everything that matters.</CaseStudyH3>
          <p>
            Honeycomb&apos;s information architecture focuses on quick, intuitive
            navigations to help parents easily access important school updates,
            decision-making tools, and community resources. With a focus on clarity
            and ease of use, Honeycomb ensures that all parents, regardless of
            language or tech skills, can stay informed and engaged.
          </p>
        </CaseStudySection>
        <FramerGallery urls={gIA} />

        <CaseStudySection kicker="sketches" title={undefined}>
          <CaseStudyH3>Rapid ideation to explore potential solutions.</CaseStudyH3>
          <p>
            In this stage, quick sketches were used to brainstorm and refine
            Honeycomb&apos;s design concepts. By visualizing the user flow, we were
            able to quickly iterate on potential designs and ensure the app&apos;s
            flow is intuitive and user-friendly.
          </p>
        </CaseStudySection>
        <FramerGallery urls={gSketch} />

        <CaseStudySection kicker="Disclaimer" title={undefined}>
          <p>
            Due to the time constraints of the design-a-thon, we skipped the typical
            iterative process of exploring multiple variations and user testing.
            Instead, we made assumptions based on initial insights and jumped
            directly to a high-fidelity prototype.
          </p>
        </CaseStudySection>

        <section
          id="finaldesign"
          className="mt-20 scroll-mt-28 border-t border-black/[0.06] pt-16 sm:mt-24"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
            final design
          </p>
          <CaseStudyH3>HoneyComb: empowering all parents.</CaseStudyH3>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted sm:text-[1.05rem]">
            The final design focuses on delivering a product that directly addresses
            the barriers to parent involvement. By combining information access,
            decision-making tools, and community features into one intuitive
            platform, Honeycomb ensures that all parents can easily stay informed,
            contribute, and build connections within their school community.
          </p>
        </section>
        <FramerGallery urls={gFinal} />

        <div className="mt-12 space-y-10">
          {[
            {
              h: "My Feed",
              b: "Personalized feed that allows the parent to stay up to date with the school district.",
            },
            {
              h: "Events",
              b: "Concise calendar to effortlessly keep track of ongoing events.",
            },
            {
              h: "Advocacy",
              b: "Vote on ongoing initiatives to promote inclusive decision-making.",
            },
            {
              h: "Community",
              b: "Foster a sense of belonging for all families.",
            },
          ].map((f) => (
            <div key={f.h}>
              <CaseStudyH3>{f.h}</CaseStudyH3>
              <p className="mt-2 text-[1.02rem] leading-relaxed text-muted sm:text-[1.05rem]">
                {f.b}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12">
          <a
            href={FIGMA_PROTO}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground underline decoration-black/[0.2] underline-offset-4 hover:decoration-foreground"
          >
            Check out the Figma Prototype
          </a>
        </p>

        <CaseStudySection kicker="recognition" title={undefined}>
          <CaseStudyH3>HoneyComb won 2nd place!</CaseStudyH3>
          <p>
            Out of 75+ qualifying projects, HoneyComb placed second in the
            Design-a-thon, receiving notable recognition and valuable feedback from a
            panel of experts in design and engineering.
          </p>
        </CaseStudySection>

        <CaseStudySection kicker="reflection" title={undefined}>
          <CaseStudyH3>What I learned from my first Design-a-thon.</CaseStudyH3>
          <p className="font-semibold text-foreground">
            Research builds the foundation for design
          </p>
          <p>
            Despite the time constraints, much of our success stemmed from solid
            user research. By leveraging existing quantitative studies and
            conducting concise interviews with our target users, we gathered key
            insights that directly guided our design decisions. This research-driven
            approach allowed us to present features backed by data rather than
            intuition.
          </p>
          <p className="mt-6 font-semibold text-foreground">
            Humanize design through storytelling
          </p>
          <p>
            In the final presentation, we used storytelling to establish an
            emotional connection with the audience. By presenting a persona that
            represented our target audience, we painted a vivid picture of a busy
            parent&apos;s daily life and how HoneyComb comes in the picture. One
            judge, a working father, expressed how he could imagine himself using the
            product.
          </p>
          <p className="mt-6 font-semibold text-foreground">
            Adrenaline + Sleep deprivation = Magic
          </p>
          <p>
            The rush of competition and tight deadlines turned out to be a powerful
            motivator for me. I&apos;ve learned that timed design challenges evokes my
            creative flow, pushing me to produce my best work under pressure.
            Although this is not a sustainable working style, it&apos;s definitely
            exciting to partake in such sprints every once in a while!
          </p>
        </CaseStudySection>

        <section className="mt-16 text-center sm:mt-20 sm:text-left">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
            The end
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Thank you for reading!
          </h2>
        </section>

        <OtherWork
          href="/project/sign-system"
          tag="UX DESIGN | UX RESEARCH"
          tagClassName="text-card-sign-label"
          title="Sign System"
          description="Supporting sign language acquisition and communication for all."
        />
      </main>
    </CaseStudyShell>
  );
}
