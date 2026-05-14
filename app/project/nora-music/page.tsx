import type { Metadata } from "next";
import { NORA_IMAGES } from "@/lib/case-study-images";
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
  title: "Nora Music — Mandy Wu",
  description:
    "Nora is a music discovery platform connecting musicians with verified song and artist information.",
};

const flow = NORA_IMAGES.slice(0, 3);
const compare = NORA_IMAGES.slice(3, 7);
const wireframes = NORA_IMAGES.slice(7, 15);
const breakdown = NORA_IMAGES.slice(15, 21);
const stem = NORA_IMAGES.slice(21, 28);

export default function NoraMusicPage() {
  return (
    <CaseStudyShell>
      <main className="mx-auto w-full max-w-3xl px-5 pb-12 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
        <CaseStudyHero
          eyebrow="Product design"
          title="Nora Music"
          description="Nora is a music discovery platform designed to effortlessly connect musicians with new sounds and opportunities, accelerating their creative pursuits."
        />

        <MetaGrid
          rows={[
            {
              label: "Timeline",
              value: "June 2023 - June 2024 (1 year)",
            },
            {
              label: "Team (product)",
              value: "2 Developers + 2 Designers!",
            },
            {
              label: "Tools",
              value:
                "Pen & paper, Miro, Figjam, Figma, Webflow, Google Suite",
            },
          ]}
        />

        <CaseStudySection kicker="Context" title={undefined}>
          <p>
            Founded by two USC students passionate about music production, Nora
            aims to provide both musicians and music enthusiasts with exclusive
            information on their favorite tunes. I joined the project after the
            team had established the branding guideline. As the lead designer,
            I&apos;ve been focusing on building the design system and developing
            both mobile and web interfaces, along with tackling various smaller
            design tasks.
          </p>
        </CaseStudySection>

        <CaseStudySection kicker="Disclaimer" title={undefined}>
          <CaseStudyH3>This project is currently under NDA.</CaseStudyH3>
          <p>
            While I cannot share every detail I worked on, I am able to showcase
            some of the select features I designed. If you&apos;d like to learn
            more about Nora, please reach out directly!
          </p>
        </CaseStudySection>

        <CaseStudySection kicker="Challenge" title={undefined}>
          <CaseStudyH3>Music exploration takes too much time and effort.</CaseStudyH3>
          <p>
            In today&apos;s music landscape, accessing comprehensive, accurate song
            and artist information requires navigating a handful of scattered
            sources. Musicians waste time piecing together fragmented insights,
            often from unreliable or outdated sources, too. This slows down their
            creative process and makes music exploration inefficient.
          </p>
        </CaseStudySection>

        <CaseStudySection kicker="Solution" title={undefined}>
          <CaseStudyH3>Relevant and credible information, in one place.</CaseStudyH3>
          <p>
            Nora centralizes song and artist data into a single, modern platform.
            To do this, Nora partners with record labels to directly source this
            information from the primary provider. By centralizing all relevant
            information, it eliminates the need for users to scavenge multiple
            services, providing users with a seamless, inspiring experience that
            saves time and fuels creativity.
          </p>
        </CaseStudySection>

        <CaseStudySection kicker="user flow" title={undefined}>
          <CaseStudyH3>How do musicians find relevant information?</CaseStudyH3>
          <p>
            Traditionally, users seeking information on songs and artists go
            through an excessive and time consuming amount of searching. From the
            student musicians we talked with, this is the typical flow they
            undergo when trying to find detailed information on a song of
            interest. Nora hopes to simplify that entire process down to three
            easy steps.
          </p>
        </CaseStudySection>
        <FramerGallery urls={flow} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Existing Experience
            </p>
            <FramerGallery urls={compare.slice(0, 1)} />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Nora&apos;s Experience
            </p>
            <FramerGallery urls={compare.slice(1, 2)} />
          </div>
        </div>
        {compare.length > 2 ? <FramerGallery urls={compare.slice(2)} /> : null}

        <CaseStudySection kicker="sketching" title={undefined}>
          <CaseStudyH3>Turning visions into wireframes.</CaseStudyH3>
          <p>
            For the web interface design, I began by creating low-fidelity
            wireframes for key pages and features. These initial sketches allowed
            us to quickly gather feedback from stakeholders, enabling us to
            iterate on the design before refining it further. Once the
            wireframes were validated, I developed high-fidelity interactive
            prototypes.
          </p>
        </CaseStudySection>
        <FramerGallery urls={wireframes} />

        <CaseStudySection kicker="design system" title={undefined}>
          <CaseStudyH3>
            Creating a consistent user interface and experience throughout.
          </CaseStudyH3>
          <p>
            Along the way, I created a mini design system, including a style guide
            and component library, to bring consistency to Nora&apos;s evolving
            design. Upon noticing inconsistencies in the prototypes, I introduced
            these systems while redesigning the mobile interface and creating the
            web version. The style guide streamlined the color palette,
            typography, layout, and logo, ensuring cohesion. The component library
            sped up iterations and improved collaboration with developers, making
            design handoffs smoother and facilitating faster updates, which is
            essential in a rapidly changing startup environment.
          </p>
        </CaseStudySection>

        <section className="mt-16 space-y-6 sm:mt-20">
          <p className="text-sm leading-relaxed text-foreground/80">
            Style guide, SIZE guide, vampire, Olivia Rodrigo, Vocals, vampire,
            Olivia Rodrigo, Break My Heart Again, FINNEAS, Lover, Taylor Swift,
            Last Night, Morgan Wallen, Kill Bill, SZA, COMPONENT LIBRARY,
            Prototyping
          </p>
          <p className="text-[1.02rem] leading-relaxed text-muted sm:text-[1.05rem]">
            After finalizing the wireframes, I focused on creating high-fidelity
            interactive prototypes that brought the design to life. These
            prototypes allowed stakeholders to interact with the interface,
            providing valuable feedback on the user experience. The prototypes
            were then tested with musicians and industry professionals, leading
            to iterative updates. Below are two main features of Nora that I
            designed.
          </p>
        </section>

        <section className="mt-16 space-y-5 sm:mt-20">
          <CaseStudyH3>Nora Breakdown</CaseStudyH3>
          <p>
            The Breakdown is the main selling point of Nora that hosts verified
            information for each track, like credits, chords, samples, atlernate
            takes, and stems.
          </p>
          <p className="mt-4 text-sm font-medium text-foreground">Iteration 1</p>
          <p className="text-muted">
            ⛔ Side by side layout limits screen space for the user to view the
            details.
          </p>
          <p className="mt-4 text-sm font-medium text-foreground">Iteration 2</p>
          <p className="text-muted">
            ⛔ Overlay design restricts users from accessing the side menu.
          </p>
          <p className="mt-4 text-sm font-medium text-foreground">Final Design</p>
          <p className="text-muted">
            ✅ This layout allows users to maximize the screen real estate to view
            essential information without sacrificing functionality.
          </p>
        </section>
        <FramerGallery urls={breakdown} />

        <section className="mt-16 space-y-5 sm:mt-20">
          <CaseStudyH3>Stem Player</CaseStudyH3>
          <p>
            The Stem Player is Nora&apos;s take on an audio player that allows
            users to quickly experiment with tracks. Musicians can take snippets
            of the audio and make basic edits on the spot.
          </p>
          <p className="mt-4 text-sm font-medium text-foreground">Iteration 1</p>
          <p className="text-muted">
            ⛔ Emphasis on the album art is an ineffective use of valuable screen
            space.
          </p>
          <p className="mt-4 text-sm font-medium text-foreground">Iteration 2</p>
          <p className="text-muted">
            ⛔ Pull-up tab design creates an unnecessary trigger for users to
            accidentally close the tab mid-use.
          </p>
          <p className="mt-4 text-sm font-medium text-foreground">Final Design</p>
          <p className="text-muted">
            ✅ This layout eliminates unnecessary visual elements and allows the
            user to focus on the music editing.
          </p>
        </section>
        <FramerGallery urls={stem} />

        <CaseStudySection kicker="Reflection" title={undefined}>
          <CaseStudyH3>What I learned working for a student startup.</CaseStudyH3>
          <p className="font-semibold text-foreground">Ask for the &quot;why.&quot;</p>
          <p>
            In the early days, I took feedback as instruction and iterated on my
            designs based on that. Soon, I realized I disagreed with much of the
            revisions I was making, and started asking for the rationale behind the
            founders&apos; opinions. This not only allowed me to make informed and
            comprehensive design decisions, but also opened the door to
            discussions that led to better solutions.
          </p>
          <p className="mt-6 font-semibold text-foreground">
            Communication is a key player.
          </p>
          <p>
            Working remotely with a team distributed across the country taught me
            that strong communication is the backbone of any project. Especially
            in a startup environment where the goals and tasks are changing at
            lightning speed, it is crucial to keep the team in the loop at all
            times.
          </p>
          <p className="mt-6 font-semibold text-foreground">
            Take ownership of your learning.
          </p>
          <p>
            I joined Nora with zero knowledge of music production and faced
            challenges early on. But a crucial part of being a product designer is
            having contextual understanding of the very thing I was building.
            Thus, I learned the importance of asking questions and putting in the
            effort to understand industry terms, the production process, and this
            made me more effective as a designer and helped build stronger
            connections with the team.
          </p>
        </CaseStudySection>

        <section className="mt-20 text-center sm:text-left">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-muted">
            THE END
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Thank you for reading!
          </h2>
        </section>

        <OtherWork
          href="/project/honeycomb"
          tag="Product Design"
          tagClassName="text-card-honey-label"
          title="HoneyComb"
          description="Bridging the gap between busy parents and their child&apos;s education."
        />
      </main>
    </CaseStudyShell>
  );
}
