export type SubItem = {
  title: string;
  body: string[];
};

export type FocusArea = {
  label: string;
  title?: string;
  body?: string[];
  imageBg?: string;
  images?: string[];
  imageRows?: string[][];
  imageRowFlexes?: number[][];
  imageMasonryGroups?: [string, string, string][];
  masonryBodyBefore?: { [index: number]: string[] };
  imageBodyMap?: { [index: number]: string[] };
  imageRowBodyAfter?: { [index: number]: string[] };
  imagePanels?: { full: string; row: string[] }[];
  subItems?: SubItem[];
};

export type Project = {
  slug: string;
  name: string;
  description: string;  // shown as chip in left tag group on home card
  rightTags: string[];  // shown as chips in right tag group on home card (category + year)
  role: string;
  category: string;
  extraTags?: string[];
  year: string;
  subtitle: string;
  overviewText?: string[];
  titleColor: string;
  heroBg?: string;
  heroImage?: string;
  headerImages?: string[];
  coverImage?: string;
  imagePlaceholderColor: string;
  focusAreas: FocusArea[];
};

export const projects: Project[] = [
  {
    slug: "coinbase",
    name: "Coinbase",
    description: "Design system at scale",
    rightTags: ["Fintech", "2026"],
    role: "Product Designer I",
    category: "Design Systems",
    year: "2025–2026",
    subtitle:
      "Designing and elevating primitives, components, and documentation across the Coinbase Design System.",
    overviewText: [
      "I first joined the Coinbase Design System team as an intern in 2024, where I came to appreciate the weight a design system carries. Seeing how a single component or token could shape product design across the entire company showed me the scale and impact of this work, and how foundational it is to building great products.",
      "Since returning full-time, I've worked across every layer of the system, from the smallest primitive variables to complex product components and documentation that holds it all together. I partnered closely with engineers, PMs, UX researchers, and other product designers to inform systems decisions, ensuring each one held up technically, served real user needs, and scaled across the company. My core contributions spanned foundations, core & product components, and documentation.",
      "Being a systems designer has also sharpened my product thinking: it taught me to design with the whole ecosystem in mind, to balance user needs against technical constraints, and to understand how the smallest details ladder up to the broader product experience.",
      "For a more detailed walkthrough, reach out at mandyrwu1@gmail.com",
    ],
    titleColor: "#0052FF",
    heroBg: "#FFFFFF",
    heroImage: "/images/case-studies/coinbase/Coinbase Hero.png",
    headerImages: [
      "/images/case-studies/coinbase/intro1.png",
      "/images/case-studies/coinbase/intro2.png",
    ],
    coverImage: "/images/projects/Coinbase.png",
    imagePlaceholderColor: "#FFFFFF",
    focusAreas: [
      {
        label: "01",
        title: "Building a strong foundation through primitive variables",
        body: [
          "Style variables are the atomic building blocks of our visual language: color, layout, elevation, border radius, spacing, and typography. I helped define and maintain these primitives so visual consistency held across every Coinbase product pillar, reinforcing one recognizable brand.",
          "Beyond consistency, primitives are a force multiplier. Because every team builds from the same variables, design refreshes propagate quickly and reliably across the entire ecosystem instead of being re-solved surface by surface.",
        ],
        imageBg: "#FFFFFF",
        images: ["/images/case-studies/coinbase/photo1.png"],
      },
      {
        label: "02",
        title: "Strengthening core components for scale and consistency",
        body: [
          "Core components are the foundational atoms of product design: buttons, input fields, and the building blocks every team reaches for first. I audited and improved 80+ design system components through bug fixes, functional enhancements, and documentation updates, raising customer satisfaction scores from 3.2 to 4.1 in a single quarter. Working directly with engineers, I made sure each fix held up in production, not just in Figma.",
          "I also built reusable components like the carousel, card, footer, navigations, and banner, which are now at 95% adoption company-wide and strengthen consistency across every product surface.",
          "Because core components show up everywhere, improvements here compound. Every refinement raised the quality floor across every product that used them.",

        ],
        imageBg: "#F2F2F7",
        images: ["/images/case-studies/coinbase/photo2.png"],
      },
      {
        label: "03",
        title: "Building product patterns with reusable components and templates",
        body: [
          "Product patterns are higher-order, product-specific patterns built on top of the foundations. They give Coinbase's product surfaces a strong starting point, ranging from complex components to full-screen templates used repeatedly across flows.",
        ],
        imageBg: "#EEF0F3",
        images: [
          "/images/case-studies/coinbase/photo3.png",
          "/images/case-studies/coinbase/photo4.png",
        ],
        imageBodyMap: {
          0: [
            "I designed and standardized onboarding and accounts patterns across web and mobile, including sign-up flows, navigation components, and scalable templates, partnering with PMs and UX researchers to ground each pattern in real user behavior.",
            "Together, these made iteration dramatically faster, letting product teams assemble proven patterns instead of rebuilding flows from scratch.",
          ],
        },
      },
      {
        label: "04",
        title: "Creating and maintaining high-quality documentation",
        body: [
          "Documentation is what makes a design system usable at scale. Clear guidance on how and when to use each component is what turns a library into a system people actually trust. I wrote detailed, high-quality documentation that lives on cds.coinbase.com, serving both internal designers and the open-source community using the Coinbase Design System.",
          "Strong documentation reduces ambiguity, prevents misuse, and lets the system scale without needing a person in the loop for every decision.",
        ],
        imageBg: "#FFFFFF",
        images: ["/images/case-studies/coinbase/photo5.png"],
      },
      {
        label: "05",
        title: "Aligning design and engineering for true parity",
        body: [
          "A design system only delivers value when design and engineering stay one to one. I kept them in sync by designing within real engineering constraints rather than around them, collaborating with engineers throughout to make sure what I designed was what shipped.",
        ],
        imageBg: "#EEF0F3",
        images: [
          "/images/case-studies/coinbase/photo6.png",
          "/images/case-studies/coinbase/photo7.png",
        ],
        imageBodyMap: {
          0: [
            "Learning to code components and leverage AI tools let me design from an engineering perspective while keeping user-centered principles at the core, resulting in cleaner handoffs and designs more grounded in what could actually ship.",
          ],
        },
      },
      {
        label: "Learnings",
        subItems: [
          {
            title: "Small decisions have big impacts",
            body: [
              "Adjusting a single token or refining one core component could ripple across hundreds of screens and every product pillar at once. This taught me to think beyond the screen in front of me and design with the whole ecosystem in mind, weighing second-order effects before making a change. It's where my value of intentionality really took root: at this scale, every detail deserves care because none of them are ever small.",
            ],
          },
          {
            title: "Designing for designers requires a personal point of view",
            body: [
              "In design systems, I didn't just design for the end-user. My work also served other designers, engineers, and PMs, each with strong and often conflicting opinions. Early on I tried to accommodate everyone's wants, but chasing consensus made it impossible to build anything at scale. I learned to listen to input carefully while holding my own design convictions, because a clear, well-reasoned point of view is what lets you make decisions that serve the whole system rather than satisfying no one.",
            ],
          },
          {
            title: "Cross-functional collaboration is essential",
            body: [
              "Most, if not all, of my work happened in collaboration, not isolation. Partnering early with engineers, PMs, UX researchers, and other designers consistently produced more resilient decisions than seeking buy-in after the fact. A large part of my job became aligning stakeholders and translating between functions, making sure what we shipped was thoughtful, intentional, and durable across the entire organization.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "nora",
    name: "Nora",
    description: "Deep music discovery",
    rightTags: ["Startup", "2024"],
    role: "User Experience Designer",
    category: "App Design",
    extraTags: ["Branding"],
    year: "2023–2024",
    subtitle:
      "Led 0-to-1 design for Nora's mobile and desktop interface, established the visual language, and drove marketing agendas.",
    overviewText: [
      "Founded by two USC students passionate about music production, Nora set out to solve a real pain point: musicians spend too much time hunting across scattered sources for accurate song information (credits, samples, chords) that should just exist in one place. I joined as lead designer after the initial branding direction was set, and from there built the design system, designed the end-to-end mobile and web experience, and created marketing material shared with investors and the public.",
    ],
    titleColor: "#121B29",
    heroBg: "#121B29",
    heroImage: "/images/case-studies/nora/nora hero.png",
    headerImages: [
      "/images/case-studies/nora/nora01.png",
      "/images/case-studies/nora/nora02.png",
    ],
    coverImage: "/images/projects/Nora.png",
    imagePlaceholderColor: "#121B29",
    focusAreas: [
      {
        label: "01",
        title: "Product market research & competitive analysis",
        body: [
          "Before designing anything, I needed to understand the landscape. Nora's goal wasn't to compete with what already existed. It was to fill a gap those platforms left open. I audited existing music tools and services, synthesizing findings into competitive and market analyses that grounded our early product decisions in what musicians actually needed.",
        ],
        imageRows: [
          [
            "/images/case-studies/nora/nora03.png",
            "/images/case-studies/nora/nora04.png",
          ],
        ],
        imageRowFlexes: [[1, 1]],
      },
      {
        label: "02",
        title: "Developing & maintaining a mini design system",
        body: [
          "With the visual language established, I built Nora's first design system to bring structure and consistency to a fast-moving product. The style guide codified the brand, while the component library gave the team a shared vocabulary, speeding up iterations and making developer handoffs significantly smoother. In a startup where priorities shift quickly, a well-maintained system meant we could move fast without losing coherence.",
        ],
        images: ["/images/case-studies/nora/nora05.png"],
      },
      {
        label: "03",
        title: "Rapid prototyping and iterating based on customer feedback",
        body: [
          "My core contribution was designing and prototyping the full product experience, including Nora Breakdown, which centralizes verified track information like credits, chords, samples, and alternate takes, and the Stem Player, which lets musicians experiment with individual track layers. These high-fidelity prototypes were tested directly with musicians and industry professionals, and their feedback shaped every major iteration. Designing for this audience taught me to ground decisions in how musicians actually work, not just how users generally behave.",
        ],
        images: ["/images/case-studies/nora/nora06.png"],
        imageMasonryGroups: [
          [
            "/images/case-studies/nora/nora07.png",
            "/images/case-studies/nora/nora08.png",
            "/images/case-studies/nora/nora09.png",
          ],
          [
            "/images/case-studies/nora/nora10.png",
            "/images/case-studies/nora/nora11.png",
            "/images/case-studies/nora/nora12.png",
          ],
        ],
        masonryBodyBefore: {
          0: [
            "Nora Breakdown went through two rounds of exploration before landing on the shipped design. A side-by-side layout was tested first, but it compressed the detail view and left too little room for the track information musicians actually came for. An overlay approach followed, but it blocked the side navigation, cutting off access to the rest of the app. The final design, shown on the right, gives the breakdown full-screen real estate so musicians can read through credits, chords, samples, and alternate takes without anything competing for space.",
          ],
          1: [
            "The Stem Player took a similar path. Early designs led with large album artwork, which looked polished but consumed screen space that musicians needed for the editing controls. A pull-up tab mechanic was explored to reclaim that space, but it introduced an accidental-close problem when users were actively engaging with tracks. The shipped design, shown on the right, strips back the decorative elements entirely and puts the editing interface front and center, keeping the focus on the music.",
          ],
        },
      },
      {
        label: "04",
        title: "Curating an online presence to drive product visibility",
        body: [
          "As the only designer, my role extended well beyond the product. I led Nora's marketing efforts, creating the website and visual assets used to build public awareness and pitch to investors. This meant translating the brand we'd built into materials that communicated Nora's value clearly and compellingly to audiences outside the product.",
        ],
        images: ["/images/case-studies/nora/nora13.png"],
      },
      {
        label: "Learnings",
        subItems: [
          {
            title: "Always ask why",
            body: [
              "Early on, I treated feedback as instruction, iterating on whatever was asked without questioning it. It didn't take long to realize I was making revisions I didn't believe in. Asking why changed that. It helped me make more informed design decisions and, more often than not, surfaced better solutions than what was originally asked for.",
            ],
          },
          {
            title: "Intentional communication moves things faster",
            body: [
              "Working remotely with a team spread across the country showed me how quickly things fall apart without deliberate communication. In a startup where direction shifts constantly, staying aligned is active work. I learned to surface progress early, flag blockers before they became problems, and make sure the right people always had the context they needed. It made everything move faster and with less friction.",
            ],
          },
          {
            title: "Know the space you're designing for",
            body: [
              "I joined Nora knowing nothing about music production, and it showed in my early work. Taking the time to learn the industry, asking producers to walk me through their process, and immersing myself in the terminology made me a more effective designer and built genuine trust with the team. Designing for a specific community requires more than empathy. It requires enough context to know what you don't know.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "sign-system",
    name: "Sign System",
    description: "Accessible communication",
    rightTags: ["Passion Project", "2023"],
    role: "User Experience Designer",
    category: "User Research",
    extraTags: ["UX Design"],
    year: "2022–2023",
    subtitle:
      "Built a system of two complementary products to support communication for deaf/hard-of-hearing individuals.",
    overviewText: [
      "Under the University of Washington's Design for America chapter, our design team of seven explored the existing community, relationships, and technologies around deaf/HoH individuals, discussed with professionals in the field, and ultimately found an opportunity for design to better advocate for accessibility and inclusivity in this space.",
    ],
    titleColor: "#ED5F00",
    heroBg: "#FFF7F2",
    heroImage: "/images/case-studies/sign-system/sign hero.png",
    headerImages: [
      "/images/case-studies/sign-system/sign01.png",
      "/images/case-studies/sign-system/sign02.png",
    ],
    coverImage: "/images/projects/Sign.png",
    imagePlaceholderColor: "#FFF7F2",
    focusAreas: [
      {
        label: "Problem",
        title: "Traditional ASL learning is ineffective for language acquisition",
        body: [
          "Conventional ASL classes often fall short in creating an interactive and memorable learning atmosphere, making it challenging for students to retain what they've learned. Furthermore, these classes may be inaccessible to individuals facing financial constraints or those juggling busy schedules.",
        ],
      },
      {
        label: "Solution",
        title: "A complementary pair of products to encourage ASL learning retention and communication",
        body: [
          "Our solution includes two digital services: SignWise, which gamifies ASL learning and promotes engagement, and SignTime, a platform for applying newly acquired knowledge to foster language retention. This system is designed to assist ASL learners in language acquisition and community building. While they cohesively complement each other, the services can also be used independently of each other to support specific needs.",
        ],
        images: ["/images/case-studies/sign-system/sign03.png"],
      },
      {
        label: "User Research",
        title: "No one in our team was deaf nor hard-of-hearing",
        body: [
          "After determining the problem space we wanted to address, we conducted research to better understand the desires and challenges that deaf/HoH individuals faced. This was a critical stage of the process because none of the team members were part of the user group, so learning about that first-hand experience from those who are in or affiliated with the community was critical to making design decisions that truly advocated for their needs.",
          "We surveyed over two dozen individuals who were DHH, or had a close relation to someone who is. From this survey, we wanted to gain an understanding of what the current trends were in ASL learning, and what benefits and barriers come with them.",
        ],
        imageRows: [
          [
            "/images/case-studies/sign-system/sign04.png",
            "/images/case-studies/sign-system/sign06.png",
          ],
          [
            "/images/case-studies/sign-system/sign05.png",
          ],
        ],
        imageRowFlexes: [[1, 1], [1]],
        imageRowBodyAfter: {
          1: [
            "In addition to surveys, we also reached out to many professionals in the field to learn about existing technologies and services for DHH individuals. Three knowledgeable experts engaged with us and provided meaningful insight on how we could approach addressing the problem space with accessibility and inclusion in mind.",
          ],
        },
      },
      {
        label: "Key Findings",
        subItems: [
          {
            title: "In-person classes challenge retention",
            body: [
              "Most classes are usually offered on a weekly or bi-weekly basis, and this frequency makes it extremely challenging to retain knowledge due to the lack of practice opportunities between class periods.",
            ],
          },
          {
            title: "Traditional learning resources can be inaccessible",
            body: [
              "Many traditional ASL classes are not offered in rural areas, making it inaccessible to a large population of ASL learners. For private lessons, customers often face financial barriers.",
            ],
          },
          {
            title: "Classes do not equal community",
            body: [
              "Many ASL learners shared a common struggle: finding a sense of belonging and building community with other learners proved difficult.",
            ],
          },
        ],
      },
      {
        label: "Design Opportunity",
        title: "How might we improve ASL acquisition and communication for deaf/hard-of-hearing (DHH) individuals and their surrounding ecosystems?",
        body: [],
      },
      {
        label: "Ideation",
        title: "Brainstorming out of the box solutions",
        body: [
          "As a team, we brainstormed all the ideas we could possibly think of to address the issues uncovered during research. Our research identified two main areas that we could design for: ASL learning and ASL communication.",
        ],
        images: ["/images/case-studies/sign-system/sign07.png"],
      },
      {
        label: "Iteration",
        title: "Everything starts at the drawing board",
        body: [
          "With every idea we had, we turned them into tangible sketches that could be shared amongst each other and with our stakeholders for feedback. Rather than focusing on creating pixel-perfect prototypes, we embraced the messiness of sketching in order to create rapid models of our ideas.",
        ],
        images: [
          "/images/case-studies/sign-system/sign08.png",
          "/images/case-studies/sign-system/sign09.png",
        ],
        imageBodyMap: {
          0: [
            "We continuously refined our initial sketches based on user feedback and testing, exploring different approaches to ensure the final design was both intuitive and impactful for ASL learners. Each iteration brought us closer to a solution that truly addressed user needs.",
          ],
        },
      },
      {
        label: "Final Design",
        title: "Killing two birds with... two stones",
        body: [
          "Sign System consists of SignWise and SignTime, a dynamic duo that aims to bridge the connection and communication between deaf/hard-of-hearing (DHH) individuals and their surrounding ecosystem.",
        ],
        imagePanels: [
          {
            full: "/images/case-studies/sign-system/sign10.png",
            row: [
              "/images/case-studies/sign-system/sign11.png",
              "/images/case-studies/sign-system/sign12.png",
              "/images/case-studies/sign-system/sign13.png",
            ],
          },
          {
            full: "/images/case-studies/sign-system/sign14.png",
            row: [
              "/images/case-studies/sign-system/sign15.png",
              "/images/case-studies/sign-system/sign16.png",
              "/images/case-studies/sign-system/sign17.png",
            ],
          },
        ],
      },
      {
        label: "Learnings",
        subItems: [
          {
            title: "Keep users involved at every stage of the design process",
            body: [
              "Designing for a community our team had no lived experience in made ongoing user engagement non-negotiable. The initial research gave us a foundation, but the real insights surfaced through follow-up conversations we almost didn't have. Staying curious and asking one more question often uncovered the thing that reshaped our thinking.",
            ],
          },
          {
            title: "Push back with purpose",
            body: [
              "I learned to challenge decisions not just when something felt wrong, but when I could articulate why. Advocating for SignTime as a web-first experience rather than mobile, after walking through the limitations smaller screens posed for ASL users, led to a stronger outcome than if I'd stayed quiet. Design confidence isn't about being right. It's about being clear.",
            ],
          },
          {
            title: "Sometimes the right answer is two answers",
            body: [
              "Building Sign System as two distinct products rather than one catch-all service let us stay focused on what each one needed to do well. A single product trying to serve both learning and communication would have diluted both. Embracing that constraint made the design sharper and the user experience clearer for each audience.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "honeycomb",
    name: "HoneyComb",
    description: "Empowering parents",
    rightTags: ["Design-a-thon", "2023"],
    role: "User Experience Designer",
    category: "User Research",
    extraTags: ["Design-a-thon 2nd Place!"],
    year: "2023",
    subtitle:
      "Designed a streamlined platform for parent involvement in schools.",
    overviewText: [
      "Honeycomb was created during Design@UCI's 2023 Design-a-thon, a 24-hour competition with 300+ qualifying participants inspired by the theme of Community and Inclusivity. Working alongside one other designer, I designed a mobile-first platform aimed at bridging the gap in parent-school engagement, empowering busy and underrepresented parents to stay informed, participate in school decisions, and build community.",
    ],
    titleColor: "#003049",
    heroBg: "#FFFFFF",
    heroImage: "/images/case-studies/honeycomb/honeycomb hero.png",
    headerImages: [
      "/images/case-studies/honeycomb/honeycomb01.png",
      "/images/case-studies/honeycomb/honeycomb02.png",
    ],
    coverImage: "/images/projects/Honeycomb.png",
    imagePlaceholderColor: "#FFFFFF",
    focusAreas: [
      {
        label: "Problem",
        title: "Parents are underrepresented in school decision-making",
        body: [
          "Existing systems for parent-school communication are fragmented, inaccessible, and largely exclusive, leaving most parents disconnected from the decisions that affect their children.",
        ],
      },
      {
        label: "Solution",
        title: "A centralized platform that makes parent involvement accessible for everyone",
        body: [
          "HoneyComb brings together school updates, community initiatives, and direct action tools into one inclusive platform, so any parent can stay informed and engaged, regardless of their schedule or background.",
        ],
        images: ["/images/case-studies/honeycomb/honeycomb03.png"],
      },
      {
        label: "User Research",
        title: "Most parents have full-time jobs (and a bunch of other responsibilities, too)",
        body: [
          "After identifying the problem space, we leveraged existing quantitative research and conducted brief interviews to understand the real barriers parents face. The data made the scale clear: 96.5% of married-couple families have at least one employed parent, with rates even higher for single parents. For most families, participation isn't a matter of willingness. It's a matter of access.",
          "“Who’s going to watch the kids while I’m at a school meeting?”",
          "Our interviews included single parents, immigrant parents facing language barriers, and low-income families, giving us a grounded picture of who the existing systems were failing.",
        ],
      },
      {
        label: "Pain Points",
        subItems: [
          {
            title: "The PTA is not designed for the average parent",
            body: [
              "Traditionally, the only channel for parents to be informed and stay involved with their child’s education is through the Parent Teacher Associations (PTA). However, PTAs are not designed to be accessible for parents. They often exclude busy families due to inconvenient meetings, exclusive leadership, and scattered communication.",
            ],
          },
          {
            title: "School districts lack resources to maintain updated comms",
            body: [
              "School districts often rely on outdated communication channels like flyers, robocalls, and fragmented apps, making it difficult for parents to know what’s actually happening in their children’s schools.",
            ],
          },
          {
            title: "Parent involvement becomes network-driven",
            body: [
              "Parents who are already well-connected tend to stay informed through social networks, while those without those connections are left out. Involvement becomes a privilege, not a right.",
            ],
          },
        ],
      },
      {
        label: "Design Opportunity",
        title: "How might we support underrepresented parents in their pursuit of school involvement to foster an inclusive education system?",
        body: [],
      },
      {
        label: "Design Process",
        title: "Rapid ideation to explore potential solutions",
        body: [
          "Quick sketches were used to brainstorm and refine Honeycomb's design concepts, exploring a range of structural and interaction ideas before narrowing down our approach.",
          "Due to the time constraints of the design-a-thon, we skipped the typical iterative process of exploring multiple variations and user testing. Instead, we made assumptions based on initial insights and jumped directly to a high-fidelity prototype.",
        ],
        images: ["/images/case-studies/honeycomb/honeycomb04.png"],
      },
      {
        label: "Final Product",
        title: "HoneyComb: Empowering all parents",
        body: [
          "The final design directly addresses the barriers to parent involvement through four core features: My Feed, a personalized stream of school district updates; Events, a concise calendar for tracking what's happening; Advocacy, a voting tool for parents to weigh in on school initiatives; and Community, a space for families to connect. Together, they make meaningful participation accessible to any parent, regardless of schedule or background.",
        ],
        images: [
          "/images/case-studies/honeycomb/honeycomb05.png",
          "/images/case-studies/honeycomb/honeycomb06.png",
        ],
      },
      {
        label: "Learnings",
        subItems: [
          {
            title: "Research is the foundation, even under time pressure",
            body: [
              "Despite the 24-hour constraint, much of our success came from solid upfront research. By leveraging existing quantitative data and conducting brief interviews with our target users, we gathered insights that directly shaped our design decisions. Even in a sprint, the time spent understanding the problem paid off in every design choice that followed.",
            ],
          },
          {
            title: "Storytelling is a design skill",
            body: [
              "In our final presentation, we used storytelling to build an emotional connection with the judges. By centering a persona that represented our target user, we painted a vivid picture of a busy parent’s daily reality and how HoneyComb fit into it. It reframed the design not as a set of features, but as a solution to someone’s real life.",
            ],
          },
          {
            title: "Constraints can unlock your best work",
            body: [
              "The rush of a 24-hour deadline turned out to be one of the best creative conditions I’ve worked in. With no time to overthink, I leaned into instinct and iteration. I learned that tight constraints can sharpen your focus in ways that unlimited time rarely does.",
            ],
          },
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
