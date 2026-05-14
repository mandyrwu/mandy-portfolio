import type { Metadata } from "next";
import { SIGN_IMAGES } from "@/lib/case-study-images";
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
  title: "Sign System — Mandy Wu",
  description:
    "SignWise and SignTime — bridging connection and communication between DHH individuals and their ecosystem.",
};

const gResearch = SIGN_IMAGES.slice(0, 4);
const gSurvey = SIGN_IMAGES.slice(4, 7);
const gSketch = SIGN_IMAGES.slice(7, 11);
const gIterate = SIGN_IMAGES.slice(11, 15);
const gFinal = SIGN_IMAGES.slice(15, 20);

export default function SignSystemPage() {
  return (
    <CaseStudyShell>
      <main className="mx-auto w-full max-w-3xl px-5 pb-12 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
        <CaseStudyHero
          eyebrow="UX Design | UX Research"
          title="Sign System"
          description="Sign System consists of SignWise and SignTime— a dynamic duo that aims to bridge the connection and communication between deaf/hard-of-hearing (DHH) individuals and their surrounding ecosystem."
          anchorLink={{
            href: "#finaldesign",
            label: "Final Design",
          }}
        />

        <MetaGrid
          rows={[
            { label: "Timeline", value: "Oct 2022 - May 2023 (8 months)" },
            {
              label: "Team",
              value:
                "7 students from Design, Engr, Comp Sci, Geography, and Data Sci",
            },
            {
              label: "Tools",
              value: "Pen & paper, Miro, Figjam, Figma, Google Suite",
            },
          ]}
        />

        <CaseStudySection kicker="Context" title={undefined}>
          <p>
            Under the University of Washington&apos;s Design for America chapter,
            our design team of seven explored the existing community,
            relationships, and technologies around deaf/HoH individuals, discussed
            with professionals in the field, and ultimately found an opportunity
            for design to better advocate for accessibility and inclusivity in
            this space.
          </p>
        </CaseStudySection>

        <CaseStudySection kicker="Challenge" title={undefined}>
          <CaseStudyH3>
            Traditional ASL learning is ineffective for language acquisition.
          </CaseStudyH3>
          <p>
            Conventional ASL classes often fall short in creating an interactive
            and memorable learning atmosphere, making it challenging for students
            to retain what they&apos;ve learned. Furthermore, these classes may be
            inaccessible to individuals facing financial constraints or those
            juggling busy schedules.
          </p>
        </CaseStudySection>

        <CaseStudySection kicker="Solution" title={undefined}>
          <CaseStudyH3>
            A complementary pair of products to encourage ASL learning retention,
            and communication.
          </CaseStudyH3>
          <p>
            Our solution includes two digital services: SignWise, which gamifies
            ASL learning and promotes engagement, and SignTime, a platform for
            applying newly acquired knowledge to foster language retention. This
            system is designed to assist ASL learners in language acquisition and
            community building. While they cohesively complement each other, the
            services can also be used independent of each other to support
            specific needs.
          </p>
        </CaseStudySection>

        <CaseStudySection kicker="Research" title={undefined}>
          <CaseStudyH3>No one in our team was deaf nor hard-of-hearing.</CaseStudyH3>
          <p>
            After determining the problem space we wanted to address, we
            conducted research to better understand the desires and challenges
            that deaf/HoH individuals faced. This was a critical stage of the
            process because none of the team members were part of the user group,
            so learning about that first-hand experience from those who are in or
            affiliated with the community was critical to making design decisions
            that truly advocated their needs.
          </p>
        </CaseStudySection>
        <FramerGallery urls={gResearch} />

        <CaseStudySection kicker="Survey" title={undefined}>
          <CaseStudyH3>Understanding the user&apos;s personal experiences.</CaseStudyH3>
          <p>
            We surveyed over two dozen individuals who were DHH, or had a close
            relation to someone who is. From this survey, we wanted to gain an
            understanding of what the current trends were in ASL learning, and
            what benefits and barriers come with them. The survey had mostly
            multi-select questions to generate quantitative data from the results,
            but also included free response questions to account for personal
            anecdotes.
          </p>
          <p className="mt-4 font-medium text-foreground">
            Some of the main questions from the survey included:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>What method(s) of communication have you used with DHH individuals?</li>
            <li>
              What challenges do you encounter when communicating with DHH
              individuals?
            </li>
            <li>
              Who/what has the most impact on your ASL acquisition journey?
            </li>
            <li>Were there any challenges you faced while learning ASL?</li>
            <li>
              What resources/support do you wish were available during your ASL
              acquisition journey?
            </li>
          </ul>
        </CaseStudySection>
        <FramerGallery urls={gSurvey} />

        <CaseStudySection kicker="Interview" title={undefined}>
          <CaseStudyH3>Engaging with professionals in the field.</CaseStudyH3>
          <p>
            In addition to surveys, we also reached out to many professionals in
            the field to learn about existing technologies and services for DHH
            individuals. Three knowledgeable experts engaged with us and provided
            meaningful insight on how we could approach addressing the problem
            space with accessibility and inclusion in mind.
          </p>
          <div className="not-prose mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { name: "Toni", role: "Director at the Washington School for the Deaf" },
              {
                name: "Christina",
                role: "Specialist for UW Disability Resources",
              },
              {
                name: "Richard",
                role: "Professor Emeritus at the UW Allen School",
              },
            ].map((ex) => (
              <div
                key={ex.name}
                className="rounded-xl bg-white/60 p-4 ring-1 ring-black/[0.06]"
              >
                <p className="font-semibold text-foreground">{ex.name}</p>
                <p className="mt-1 text-sm leading-snug text-muted">{ex.role}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        <section className="mt-16 sm:mt-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
            key findings
          </p>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-muted sm:text-[1.05rem]">
            After compiling our research results both through surverying and
            interviewing, we grouped our discoveries into three key points.
          </p>
          <div className="not-prose mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                n: "1",
                t: "Weekly classes make it challenging to retain knowledge due to the lack of practice opportunities.",
              },
              {
                n: "2",
                t: "Traditional learning resources were inaccessible in rural areas and many had financial barriers.",
              },
              {
                n: "3",
                t: "ASL learners found it difficult to find a sense of belonging and lacked community.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="rounded-2xl bg-white/70 p-6 ring-1 ring-black/[0.06]"
              >
                <p className="text-4xl font-semibold tracking-tight text-foreground">
                  {item.n}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.t}</p>
              </div>
            ))}
          </div>
        </section>

        <CaseStudySection kicker="opportunity for design" title={undefined}>
          <CaseStudyH3>
            How might we improve ASL acquisition and communication for
            deaf/hard-of-hearing (DHH) individuals and their surrounding ecosystems?
          </CaseStudyH3>
        </CaseStudySection>

        <CaseStudySection kicker="Interview" title={undefined}>
          <CaseStudyH3>How do we address the various challenges?</CaseStudyH3>
          <p>
            As a team, we brainstormed all the ideas we could possibly think of to
            address the issues uncovered during research. Our research identified
            two main areas that we could design for: ASL acquisition and ASL
            communication.
          </p>
        </CaseStudySection>

        <CaseStudySection kicker="Proposed solution" title={undefined}>
          <CaseStudyH3>Killing two birds with... two stones?</CaseStudyH3>
          <p>
            After many discussions, ideation sessions, and back and forth
            communication with research participants, we realized that our problem
            statement could be best addressed with a system of solutions rather
            than a singular product that tried to do two things.
          </p>
        </CaseStudySection>

        <CaseStudySection kicker="Sketching" title={undefined}>
          <CaseStudyH3>Turning ideas into something tangible.</CaseStudyH3>
          <p>
            Every design decision our team made cited back to the research
            findings. This included decisions on user flow, structure, and
            ultimately how to create something that people will use and enjoy using.
          </p>
        </CaseStudySection>
        <FramerGallery urls={gSketch} />

        <CaseStudySection kicker="Iterating" title={undefined}>
          <CaseStudyH3>Refining ideas and shaping solutions.</CaseStudyH3>
          <p>
            We continuously refined our initial sketches based on user feedback
            and testing, exploring different approaches to ensure the final design
            was both intuitive and impactful for ASL learners. Each iteration
            brought us closer to a solution that truly addressed user needs.
          </p>
        </CaseStudySection>
        <FramerGallery urls={gIterate} />

        <section
          id="finaldesign"
          className="mt-20 scroll-mt-28 border-t border-black/[0.06] pt-16 sm:mt-24"
        >
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
            FINAL DESIGN
          </p>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted sm:text-[1.05rem]">
            Due to our large team and tight timeline, we divided into two
            mini-groups to focus on each platform, later switching to iterate on
            each other&apos;s work. This approach ensured both designs stayed aligned
            while maximizing productivity.
          </p>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted sm:text-[1.05rem]">
            By employing a unified design system across both applications, we
            created a cohesive user experience. We also followed Apple&apos;s Human
            Interface Guidelines to prioritize accessibility, ensuring the
            interface was inclusive for a diverse range of users.
          </p>
        </section>
        <FramerGallery urls={gFinal} />

        <div className="mt-16 space-y-12">
          {[
            {
              h: "Streak-based System",
              b: "Visual progress tracking and personalized reminders to help reinforce accountability.",
            },
            {
              h: "Gamified Lesson Plans",
              b: "Each lesson is an achievement that unlocks more adventures, allowing learners to visualize their learning progress.",
            },
            {
              h: "Multimodal Instructions",
              b: "Learn with a 3D hand model for precise gestures and real instructors for expressive nuances.",
            },
            {
              h: "Engagement Checks",
              b: "Quick quizzes to strengthen retention by testing sign recognition, keeping learning engaging and effective.",
            },
            {
              h: "Personalized Partners",
              b: "Find the ideal signing partner based on preferences for ASL proficiency and hearing level.",
            },
            {
              h: "Browse and Connect",
              b: "Search for potential signing partners and instantly send a request to begin your next conversation.",
            },
            {
              h: "Preview Profiles",
              b: "Review profiles with bios and interests to establish a comfortable connection before calling.",
            },
            {
              h: "Immsersive Calling",
              b: "Seamlessly communicate through video call with an interactive chatbox for added clarity when needed.",
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

        <CaseStudySection kicker="Reflection" title={undefined}>
          <CaseStudyH3>What I learned during this process.</CaseStudyH3>
          <p className="font-semibold text-foreground">Engage users throughout the process.</p>
          <p>
            A key takeaway was the importance of ongoing user engagement, especially
            since our team wasn&apos;t familiar with the target audience. While the
            initial research gave us a good starting point, asking follow-up
            questions helped us gain a deeper understanding. I learned that even
            simple, open-ended questions can spark valuable conversations and
            uncover insights we hadn&apos;t considered.
          </p>
          <p className="mt-6 font-semibold text-foreground">
            Don&apos;t be afraid to push back— with reasoning.
          </p>
          <p>
            Gradually, I learned to confidently challenge decisions with
            well-supported rationale, leading to meaningful discussions that shaped
            better design outcomes. An instance is when I advocated for SignTime to
            be designed for web rather than mobile after considering the limitations
            of smaller screens for ASL users.
          </p>
          <p className="mt-6 font-semibold text-foreground">
            Consistent design requires consistent communication.
          </p>
          <p>
            This project highlighted the critical role of communication in
            maintaining design consistency across a large team. When we broke into
            smaller sub-groups, it required more intentional efforts to align
            everyone&apos;s understanding of the design language. By having regular
            check-ins and keeping shared resources, we maintained consistent design
            despite its complexity.
          </p>
          <p className="mt-6 font-semibold text-foreground">Nothing is one-size-fits-all!</p>
          <p>
            Our solution precisely demonstrates that a singular solution isn&apos;t
            always the best. Because creating a one-size-fits-all product can lead
            to a cluttered user experience, we focused on building two complementary
            services, each addressing specific needs. This allowed us to stay
            focused on core user goals without overwhelming them, while still
            offering a comprehensive solution within our project scope.
          </p>
        </CaseStudySection>

        <p className="mt-12 text-center text-sm font-semibold tracking-wide text-foreground sm:text-left">
          SHOUTOUT TO TEAM PANCAKE!! {"<3"}
        </p>

        <section className="mt-16 text-center sm:mt-20 sm:text-left">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
            The end
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Thank you for reading!
          </h2>
        </section>

        <OtherWork
          href="/project/nora-music"
          tag="Product Design"
          tagClassName="text-card-nora-label"
          title="Nora Music"
          description="Simplifying the search for verified music content."
        />
      </main>
    </CaseStudyShell>
  );
}
