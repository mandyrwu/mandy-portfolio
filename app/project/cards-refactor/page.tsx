import type { Metadata } from "next";
import { CARDS_IMAGES } from "@/lib/case-study-images";
import {
  CaseStudyHero,
  CaseStudyH3,
  CaseStudySection,
  CaseStudyShell,
  FramerGallery,
  FramerImage,
  MetaGrid,
  OtherWork,
} from "@/components/case-study/case-study-ui";

export const metadata: Metadata = {
  title: "Cards Refactor — Mandy Wu",
  description:
    "Rebuilding a foundational component family in the Coinbase Design System to keep pace with consumer product needs.",
  openGraph: {
    title: "Cards Refactor — Mandy Wu",
    description:
      "Rebuilding a foundational component family in the Coinbase Design System to keep pace with consumer product needs.",
    images: [{ url: "/images/cards-refactor/04-four-cards.jpg" }],
  },
};

export default function CardsRefactorPage() {
  return (
    <CaseStudyShell>
      <main className="mx-auto w-full max-w-3xl px-5 pb-12 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
        <CaseStudyHero
          eyebrow="DESIGN SYSTEM"
          title="Cards Refactor"
          description="Rebuilding a foundational component family in the Coinbase Design System to keep pace with consumer product needs."
        />

        <MetaGrid
          rows={[
            { label: "Company", value: "Coinbase" },
            { label: "Role", value: "Lead Product Designer · Design Systems" },
            { label: "Timeframe", value: "Q4 2025" },
            { label: "Surface", value: "Coinbase consumer apps (iOS, Android, Web)" },
          ]}
        />

        <CaseStudySection kicker="Overview" title={undefined}>
          <p>
            The Cards family in CDS had grown into a five-component patchwork —
            Contained Asset, Floating Asset, Nudge, Upsell, and Content — each
            shipped at a different moment for a different team, with overlapping
            use cases and no shared anatomy.
          </p>
          <p>
            Meanwhile, product teams were building cards Coinbase needed but the
            system didn&apos;t cover: live data tiles with charts and progress
            bars, promotional cards with custom backgrounds, predictions cards,
            AI-generated content cards. Every one of those started as a one-off
            in product code.
          </p>
          <p>
            I led a refactor of the Cards family — collapsing five components
            into four with a clearer mental model, more flexible builds, and
            dynamic sizing that adapts to context. The goal wasn&apos;t a visual
            refresh. It was to bring the system back to the edge of the product,
            so designers and engineers could ship faster without forking.
          </p>
        </CaseStudySection>

        <FramerImage src={CARDS_IMAGES[0]} alt="Cards Refactor cover" />

        <CaseStudySection kicker="The Problem" title={undefined}>
          <CaseStudyH3>CDS Cards were diverging from production in three ways.</CaseStudyH3>
          <div className="not-prose mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                h: "Coverage gaps",
                b: "Teams needed data visualizations, custom backgrounds, AI-generated content treatments, and predictions tiles. None existed in CDS, so they were rebuilt in product — inconsistently.",
              },
              {
                h: "Overlapping components",
                b: "Nudge and Upsell cards solved nearly the same problem with slightly different anatomies. Designers had to guess which one to pick. Engineers had to maintain both.",
              },
              {
                h: "Missing fundamentals",
                b: "No shared interaction states. No standard for accessory slots. No agreement on left vs. right media placement. The system was structurally behind the product.",
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

        <FramerGallery urls={CARDS_IMAGES.slice(1, 3)} />

        <CaseStudySection kicker="My Role" title={undefined}>
          <CaseStudyH3>I drove this refactor end-to-end as the lead designer.</CaseStudyH3>
          <ul className="not-prose mt-6 space-y-3">
            {[
              "Audited the existing Cards family and mapped its overlap with in-product, out-of-system cards",
              "Defined the new four-card taxonomy and the anatomy of each component",
              "Designed every variant, state, and accessory across the family",
              "Ran the cross-team feedback loop with product designers and engineers",
              "Partnered with a product designer on visual exploration and review",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-[1.02rem] leading-relaxed text-muted sm:text-[1.05rem]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted/50" />
                {item}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection kicker="Approach" title={undefined}>
          <CaseStudyH3>1 · Audit before adding</CaseStudyH3>
          <p>
            Before designing anything new, I inventoried every card in
            production — including the ones that lived outside CDS. The pattern
            was clear: most &ldquo;new&rdquo; cards weren&apos;t actually new.
            They were existing types stretched to fit a use case the component
            didn&apos;t support. The fix wasn&apos;t more components. It was
            better-built ones.
          </p>

          <CaseStudyH3>2 · Collapse, then extend</CaseStudyH3>
          <p>
            I consolidated Nudge and Upsell into a single{" "}
            <strong className="font-semibold text-foreground">Message Card</strong> — the
            difference between them had always been styling, not structure. I
            deprecated{" "}
            <strong className="font-semibold text-foreground">Floating Asset Card</strong>{" "}
            (near-zero use in production). That left room to introduce one
            genuinely new type: a{" "}
            <strong className="font-semibold text-foreground">Data Card</strong> for
            charts, progress bars, and progress circles.
          </p>
          <p>The result was a tighter, more honest taxonomy:</p>
          <div className="not-prose mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                name: "Media Card",
                desc: "Replaces Contained/Floating Asset; for asset listings and media-first content.",
              },
              {
                name: "Message Card",
                desc: "Merges Nudge + Upsell; for promotions, upsells, and announcements.",
              },
              {
                name: "Data Card",
                desc: "New; for charts and live data visualization.",
              },
              {
                name: "Content Card",
                desc: "For AI-generated content, news, predictions, and editorial.",
              },
            ].map((c) => (
              <div
                key={c.name}
                className="rounded-2xl bg-white/70 p-5 ring-1 ring-black/[0.06]"
              >
                <p className="font-semibold text-foreground">{c.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        <FramerImage
          src={CARDS_IMAGES[3]}
          alt="The new four-card taxonomy"
        />

        <CaseStudySection kicker={undefined} title={undefined}>
          <CaseStudyH3>3 · Design for flexibility, not edge cases</CaseStudyH3>
          <p>
            Each card was rebuilt around shared primitives — title, subtitle,
            description, accessory slots, media, button — so designers could
            compose rather than choose. Every card supports left or right media
            placement, optional tag, action, and caret accessories, swappable
            media, dynamic sizing, and a complete state set: default, hovered,
            pressed, focus, selected, disabled.
          </p>
        </CaseStudySection>

        <FramerImage
          src={CARDS_IMAGES[4]}
          alt="A complete state set across the family"
        />

        <CaseStudySection kicker={undefined} title={undefined}>
          <CaseStudyH3>4 · Pressure-test against real product</CaseStudyH3>
          <p>
            Every variant was validated against an existing or imminent use case
            — Coinbase One upsells, Pudgy Penguins asset tiles, CYEL sale
            countdowns, BTC perp data tiles, AI-generated news. If a variant
            didn&apos;t map to a real surface, it didn&apos;t ship.
          </p>
        </CaseStudySection>

        <FramerImage
          src={CARDS_IMAGES[5]}
          alt="Media Card examples in production-realistic context"
        />

        <CaseStudySection kicker="A note on tooling" title={undefined}>
          <p>
            I used AI-assisted workflows throughout — primarily for variant
            generation, copy permutations on filled-state examples, and rapid
            prototype scaffolds when I needed to feel a card in a real layout
            before committing to the spec. The deliverable is the same as it
            would&apos;ve been without those tools; the velocity isn&apos;t. It
            let me explore more states and edge cases in the same window of
            time.
          </p>
        </CaseStudySection>

        <CaseStudySection kicker="Key Decisions" title={undefined}>
          <div className="not-prose space-y-5">
            {[
              {
                h: "Deprecate Floating Asset Card",
                b: "Low usage, redundant with Contained Asset. Removing it simplified the mental model more than any addition.",
              },
              {
                h: "Merge Nudge + Upsell into Message",
                b: "Two components had been doing one job. Consolidating them reduced “which should I use?” decisions to zero.",
              },
              {
                h: "Add Data Card",
                b: "The first genuinely new type. Validated by the volume of one-off data tiles teams had built outside the system.",
              },
              {
                h: "Standardize accessory slots",
                b: "Tag, action (radio / checkbox / caret), and media became a consistent vocabulary across cards — so a designer learning one card learns the rest.",
              },
              {
                h: "Match production state coverage",
                b: "Adding hovered, pressed, focus, selected, and disabled states aligned CDS with what engineers were already implementing — closing the gap between spec and reality.",
              },
            ].map((d) => (
              <div key={d.h} className="rounded-2xl bg-white/70 p-5 ring-1 ring-black/[0.06] sm:p-6">
                <p className="font-semibold text-foreground">{d.h}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{d.b}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection kicker="Working with Eng & Product" title={undefined}>
          <CaseStudyH3>The refactor was scoped with eng from the start.</CaseStudyH3>
          <p>
            I confirmed which props existed in the current implementation, which
            variants were used in code vs. design, and where the system was
            already drifting from production. State coverage was prioritized
            because that&apos;s where eng was forking most often.
          </p>
          <p>
            Mid-refactor, I opened a structured feedback round with product
            designers across the org, asking targeted questions: do the new
            types make sense, are the use cases clear, is the naming legible,
            does the layout work, are tag/action/accessory slots in the right
            places. The component shape today reflects that feedback — not just
            my proposal.
          </p>
        </CaseStudySection>

        <FramerImage
          src={CARDS_IMAGES[6]}
          alt="Structured feedback prompt shared with product designers"
        />

        <CaseStudySection kicker="Impact" title={undefined}>
          <div className="not-prose mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { v: "5 → 4", l: "Components, with clearer use-case boundaries." },
              { v: "0 → 6", l: "Standardized interaction states across the family." },
              { v: "3 new", l: "Capabilities — data visualization, custom backgrounds, configurable slots — previously only available as one-offs." },
              { v: "1 shared", l: "Anatomy and accessory vocabulary, so cards now compose instead of branch." },
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
          <p className="mt-8">The system caught up to the product. That&apos;s the win.</p>
        </CaseStudySection>

        <CaseStudySection kicker="Reflection" title={undefined}>
          <CaseStudyH3>Subtraction is often the higher-leverage move.</CaseStudyH3>
          <p>
            The instinct on a refactor is to add. What this project taught me is
            that deprecating Floating Asset and merging Nudge with Upsell did
            more for the system&apos;s clarity than any new variant. The new
            Data Card matters, but it only fits cleanly because the rest of the
            family got smaller and more honest first.
          </p>
          <p>
            It also reinforced something about design systems work: the spec is
            only half the deliverable. The other half is the conversation with
            the product designers and engineers who will actually use it. Most of
            the late-stage decisions in this project came from that loop, not
            from the original proposal.
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
          href="/project/honeycomb"
          tag="PRODUCT DESIGN"
          tagClassName="text-card-honey-label"
          title="HoneyComb"
          description="Bridging the gap between busy parents and their child's education."
        />
      </main>
    </CaseStudyShell>
  );
}
