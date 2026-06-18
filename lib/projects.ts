export type SubItem = {
  title: string;
  body: string[];
};

export type FocusArea = {
  label: string;
  title?: string;
  body?: string[];
  imageBg?: string;
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
  overviewText?: string;
  titleColor: string;
  heroBg?: string;
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
    overviewText:
      "Large blob on all the things I did at Coinbase and the main four things I did: components, documentation, foundations, product library",
    titleColor: "#0052FF",
    heroBg: "#FFFFFF",
    imagePlaceholderColor: "#EEF0F3",
    focusAreas: [
      {
        label: "Focus Area #1",
        title: "Building a strong foundation through primitive variables.",
        body: [
          "Style variables are the foundational, atomic elements of our visual language. This includes values for color, layout, elevation, border radius, spacing, and typography.",
          "This maintains visual consistency across Coinbase's products across different pillars, and strengthens our brand.",
          "Also makes everything so much easier to use because everyone uses variables. It makes updates easier and much more efficient as primitives evolve with design refreshes.",
        ],
        imageBg: "#FFFFFF",
      },
      {
        label: "Focus Area #2",
        title: "Enhancing and maintaining core components to increase adoption.",
        body: [
          "Style variables are the foundational, atomic elements of our visual language. This includes values for color, layout, elevation, border radius, spacing, and typography.",
        ],
        imageBg: "#F2F2F7",
      },
      {
        label: "Focus Area #3",
        title: "Product Components",
        body: [
          "Core samples are the foundational, atomic elements of our visual language. This includes values for color, layout, elevation, border radius, spacing, and typography.",
        ],
        imageBg: "#EEF0F3",
      },
      {
        label: "Focus Area #4",
        title: "Creating and maintaining high-quality documentation",
        body: [
          "Style variables are the foundational, atomic elements of our visual language. This includes values for color, layout, elevation, border radius, spacing, and typography.",
        ],
        imageBg: "#FFFFFF",
      },
      {
        label: "Focus Area #5",
        title: "Design and engineering parity.",
        body: [
          "Style variables are the foundational, atomic elements of our visual language. This includes values for color, layout, elevation, border radius, spacing, and typography.",
        ],
        imageBg: "#EEF0F3",
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
    overviewText:
      "Founded by two USC students passionate about music production, Nora aims to provide music enthusiasts with exclusive information on their favorite tunes. As the lead designer, I was responsible for establishing the brand and visual language for the product, designed the end-to-end user experience, and created marketing material shared with investors and the public.",
    titleColor: "#121B29",
    heroBg: "#121B29",
    imagePlaceholderColor: "#121B29",
    focusAreas: [
      {
        label: "Responsibility #1",
        title: "Product market research & competitive analysis",
        body: [
          "The goal of Nora was not to compete with existing products and services, but to create a new platform that centralizes the information. One of my key responsibilities was understanding what exists in this market, and synthesize audits to inform our product decisions.",
        ],
        imageBg: "#FFFFFF",
      },
      {
        label: "Responsibility #2",
        title: "Developing & maintaining a mini design system",
        body: [
          "I built Nora's first design system to bring consistency to Nora's evolving design. The style guide defined the brand and visual language, and the component library sped up iterations and improved collaboration with developers, making design handoffs smoother and facilitating faster updates, which is essential in a rapidly changing startup environment.",
        ],
        imageBg: "#FFFFFF",
      },
      {
        label: "Responsibility #3",
        title: "Rapid prototyping and iterating based on customer feedback",
        body: [
          "My main contribution at Nora was designing and prototyping the entire interface of the app. These high-fidelity interactive prototypes allowed stakeholders to engage with the product, providing valuable feedback on the user experience. The prototypes were then tested with musicians and industry professionals, leading to iterative updates.",
        ],
        imageBg: "#FFFFFF",
      },
      {
        label: "Responsibility #4",
        title: "Curating an online presence to drive product visibility",
        body: [
          "As the sole designer in a startup environment, I was able to wear many hats. I led Nora's marketing agendas and created our website to launch our product with high visibility and discoverability.",
        ],
        imageBg: "#FFFFFF",
      },
      {
        label: "Learnings",
        subItems: [
          {
            title: "Always ask why.",
            body: [
              "In the early days, I took feedback as instruction and iterated on my designs based on that. Soon, I realized I disagreed with much of the revisions I was making, and started asking for the rationale behind the founders' opinions. This not only allowed me to make informed and comprehensive design decisions, but also opened the door to discussions that led to better solutions.",
            ],
          },
          {
            title: "Communication is key.",
            body: [
              "Working remotely with a team distributed across the country taught me that strong communication is the backbone of any project. Especially in a startup environment where the goals and tasks are changing at lightning speed, it is crucial to keep the team in the loop at all times.",
            ],
          },
          {
            title: "Take ownership in expanding your domain knowledge.",
            body: [
              "I joined Nora with zero knowledge of music production and faced challenges early on. But a crucial part of being a product designer is having contextual understanding of the very thing I was building. Thus, I learned the importance of asking questions and putting in the effort to understand industry terms, the production process, and this made me more effective as a designer and helped build stronger connections with the team.",
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
    overviewText:
      "Under the University of Washington's Design for America chapter, our design team of seven explored the existing community, relationships, and technologies around deaf/HoH individuals, discussed with professionals in the field, and ultimately found an opportunity for design to better advocate for accessibility and inclusivity in this space.",
    titleColor: "#ED5F00",
    heroBg: "#FFF7F2",
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
        title: "A complementary pair of products to encourage ASL learning retention, and communication.",
        body: [
          "Our solution includes two digital services: SignWise, which gamifies ASL learning and promotes engagement, and SignTime, a platform for applying newly acquired knowledge to foster language retention. This system is designed to assist ASL learners in language acquisition and community building. While they cohesively complement each other, the services can also be used independent of each other to support specific needs.",
        ],
        imageBg: "#FFFFFF",
      },
      {
        label: "User Research",
        title: "No one in our team was deaf nor hard-of-hearing.",
        body: [
          "After determining the problem space we wanted to address, we conducted research to better understand the desires and challenges that deaf/HoH individuals faced. This was a critical stage of the process because none of the team members were part of the user group, so learning about that first-hand experience from those who are in or affiliated with the community was critical to making design decisions that truly advocated their needs.",
          "We surveyed over two dozen individuals who were DHH, or had a close relation to someone who is. From this survey, we wanted to gain an understanding of what the current trends were in ASL learning, and what benefits and barriers come with them.",
          "In addition to surveys, we also reached out to many professionals in the field to learn about existing technologies and services for DHH individuals. Three knowledgeable experts engaged with us and provided meaningful insight on how we could approach addressing the problem space with accessibility and inclusion in mind.",
        ],
        imageBg: "#FFFFFF",
      },
      {
        label: "Key Findings",
        subItems: [
          {
            title: "In-person classes challenges retention.",
            body: [
              "Most classes are usually offered on a weekly or bi-weekly basis, and this frequency makes it extremely challenging to retain knowledge due to the lack of practice opportunities between class periods.",
            ],
          },
          {
            title: "Traditional learning resources can be inaccessible.",
            body: [
              "Many traditional ASL classes are not offered in rural areas, making it inaccessible to a large population of ASL learners. For private lessons, customers often face financial barriers.",
            ],
          },
          {
            title: "Classes do not equal community.",
            body: [
              "Many ASL learners shared a common struggle that it was difficult to find a sense of belonging and lacked community with other learners.",
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
        title: "Brainstorming out of the box solutions.",
        body: [
          "As a team, we brainstormed all the ideas we could possibly think of to address the issues uncovered during research. Our research identified two main areas that we could design for: ASL learning and ASL communication.",
        ],
        imageBg: "#FFFFFF",
      },
      {
        label: "Iteration",
        title: "Everything starts at the drawing board.",
        body: [
          "With every idea we had, we turned them into tangible sketches that can be shared amongst each other and with our stakeholders for feedback. Rather than focusing on creating pixel-perfect prototypes, we embraced the messiness of sketching in order to create rapid models of our ideas.",
          "We continuously refined our initial sketches based on user feedback and testing, exploring different approaches to ensure the final design was both intuitive and impactful for ASL learners. Each iteration brought us closer to a solution that truly addressed user needs.",
        ],
        imageBg: "#FFFFFF",
      },
      {
        label: "Final Design",
        title: "Killing two birds with... two stones.",
        body: [
          "Sign System consists of SignWise and SignTime — a dynamic duo that aims to bridge the connection and communication between deaf/hard-of-hearing (DHH) individuals and their surrounding ecosystem.",
        ],
        imageBg: "#161616",
      },
      {
        label: "Learnings",
        subItems: [
          {
            title: "Engage users throughout the design process.",
            body: [
              "A key takeaway was the importance of ongoing user engagement, especially since our team wasn't familiar with the target audience. While the initial research gave us a good starting point, asking follow-up questions helped us gain a deeper understanding. I learned that even simple, open-ended questions can spark valuable conversations and uncover insights we hadn't considered.",
            ],
          },
          {
            title: "Don't be afraid to push back on decisions with justification.",
            body: [
              "Gradually, I learned to confidently challenge decisions with well-supported rationale, leading to meaningful discussions that shaped better design outcomes. An instance is when I advocated for SignTime to be designed for web rather than mobile after considering the limitations of smaller screens for ASL users.",
            ],
          },
          {
            title: "Nothing is one-size-fits-all.",
            body: [
              "Our solution precisely demonstrates that a singular solution isn't always the best. Because creating a one-size-fits-all product can lead to a cluttered user experience, we focused on building two complementary services, each addressing specific needs. This allowed us to stay focused on core user goals without overwhelming them, while still offering a comprehensive solution within our project scope.",
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
    overviewText:
      "Honeycomb was created during Design@UCI's 2023 Design-a-thon with 300+ qualifying participants. Inspired by the theme of Community and Inclusivity, the project aimed to bridge gaps in parent-school engagement by designing a platform that empowers all parents to stay involved.",
    titleColor: "#003049",
    heroBg: "#FFFFFF",
    imagePlaceholderColor: "#DBE9EE",
    focusAreas: [
      {
        label: "Problem",
        title: "Parents are underrepresented in school decision-making.",
        body: [
          "Existing systems for parent-school communication are fragmented, inaccessible, and largely exclusive — leaving most parents disconnected from the decisions that affect their children.",
        ],
      },
      {
        label: "Solution",
        title: "A centralized platform that makes parent involvement accessible for everyone.",
        body: [
          "HoneyComb brings together school updates, community initiatives, and direct action tools into one inclusive platform — so any parent can stay informed and engaged, regardless of their schedule or background.",
        ],
        imageBg: "#FFFFFF",
      },
      {
        label: "User Research",
        title: "Most parents have full-time jobs (and a bunch of other responsibilities, too).",
        body: [
          "After determining the problem space we wanted to address, we conducted research to better understand the desires and challenges that parents face when trying to stay involved in their children's education.",
          "“Who’s going to watch the kids while I’m at a school meeting?”",
          "We surveyed participants and conducted interviews to understand what barriers prevent parents from getting involved, and what tools or resources they wished existed.",
        ],
      },
      {
        label: "Pain Points",
        subItems: [
          {
            title: "The PTA is not designed for the average parent.",
            body: [
              "Traditionally, the only channel for parents to be informed and stay involved with their child’s education is through the Parent Teacher Associations (PTA). However, PTAs are not designed to be accessible for parents. They often exclude busy families due to inconvenient meetings, exclusive leadership, and scattered communication.",
            ],
          },
          {
            title: "School districts lack resources to maintain updated comms.",
            body: [
              "School districts often rely on outdated communication channels — flyers, robocalls, fragmented apps — making it difficult for parents to know what’s actually happening in their children’s schools.",
            ],
          },
          {
            title: "Parent involvement becomes network-driven.",
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
        title: "Rapid ideation to explore potential solutions.",
        body: [
          "With every idea we had, we turned them into tangible sketches that can be shared amongst each other and with our stakeholders for feedback. Rather than focusing on creating pixel-perfect prototypes, we embraced the messiness of sketching in order to create rapid models of our ideas.",
          "Due to the time constraints of the design-a-thon, we skipped the typical iterative process of exploring multiple variations and user testing. Instead, we made assumptions based on initial insights and jumped directly to a high-fidelity prototype.",
        ],
        imageBg: "#FFFFFF",
      },
      {
        label: "Final Product",
        title: "HoneyComb: Empowering all parents.",
        body: [
          "The final design focuses on delivering a product that directly addresses the barriers to parent involvement. By combining information access, decision-making tools, and community features into one intuitive platform, Honeycomb ensures that all parents can easily stay informed, contribute, and build connections within their school community.",
        ],
        imageBg: "#FFFFFF",
      },
      {
        label: "Learnings",
        subItems: [
          {
            title: "Engage users throughout the design process.",
            body: [
              "A key takeaway was the importance of ongoing user engagement, especially since our team wasn’t familiar with the target audience. While the initial research gave us a good starting point, asking follow-up questions helped us gain a deeper understanding. I learned that even simple, open-ended questions can spark valuable conversations and uncover insights we hadn’t considered.",
            ],
          },
          {
            title: "Don’t be afraid to push back on decisions with justification.",
            body: [
              "Gradually, I learned to confidently challenge decisions with well-supported rationale, leading to meaningful discussions that shaped better design outcomes. An instance is when I advocated for a web-first approach after considering the limitations of smaller screens for the use case.",
            ],
          },
          {
            title: "Nothing is one-size-fits-all.",
            body: [
              "Our solution precisely demonstrates that a singular solution isn’t always the best. Because creating a one-size-fits-all product can lead to a cluttered user experience, we focused on building complementary features that each address specific needs — allowing us to stay focused on core user goals without overwhelming them.",
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
