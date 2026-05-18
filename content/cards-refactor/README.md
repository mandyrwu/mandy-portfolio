# Cards Refactor — Portfolio Handoff

This bundle contains everything you need to add the **Cards Refactor** case study
to your Next.js (App Router) portfolio using Claude Code.

## What's inside

```
cards-refactor/
├── cards-refactor.md       ← case study content + frontmatter
├── images/
│   ├── 01-cover.jpg
│   ├── 02-current-state.jpg
│   ├── 03-gap.jpg
│   ├── 04-four-cards.jpg   ← cover / OG image
│   ├── 05-states.jpg
│   ├── 06-media-examples.jpg
│   └── 07-feedback.jpg
└── README.md               ← you are here
```

## How to use it (3 steps)

### 1. Drop the files into your portfolio

- Put `cards-refactor.md` in wherever you keep case study content
  (common: `content/case-studies/` or `src/content/work/`)
- Put the `images/` contents in `public/images/cards-refactor/`
  (the markdown's image paths already point there)

If your image directory differs, just do a find-and-replace on
`/images/cards-refactor/` in the markdown.

### 2. Paste this prompt into Claude Code

```
I'm adding a new case study to my portfolio. The content is in
`content/case-studies/cards-refactor.md` (adjust path as needed) and
the images are in `public/images/cards-refactor/`.

Please:
1. Read one of my existing case studies to understand the layout
   pattern, components, typography, and styling I already use.
2. Wire up the routing so this case study renders at
   `/work/cards-refactor` (or whatever pattern my other case studies use).
3. Use the frontmatter for the page metadata, OG tags, and any
   case-study index/listing page.
4. Match the existing visual language exactly — same MDX/markdown
   renderer, same image component, same prose styles. Don't introduce
   new dependencies or design patterns.
5. If I don't have an MDX setup yet, use `next-mdx-remote` with
   `gray-matter` for frontmatter — minimal, no extra config.

Before writing code, tell me which case study you read for reference
and confirm the routing pattern. Then make the changes.
```

### 3. Review and ship

Claude Code will mirror your existing case study layout, so the new page
should match without manual styling. The markdown is intentionally plain
— no custom MDX components — so it'll render through whatever pipeline
you've already built.

## Notes

- **Frontmatter is standard.** It works with `gray-matter`, `contentlayer`,
  or any MDX setup. If your existing case studies use different field
  names, ask Claude Code to remap them.
- **Cover image** is set to `04-four-cards.jpg` (the new taxonomy hero shot)
  — strongest single image for a card thumbnail or OG preview.
- **Image paths are absolute** (`/images/...`) so they work with Next.js's
  `public/` folder out of the box. Adjust if you use a CDN or `next/image`
  with a different convention.
- **Images are 1920×1080 at 150 DPI** — high enough for retina displays,
  small enough not to bloat the bundle. If you want to optimize further,
  pipe them through `sharp` or Next.js's `next/image` component.

## If something breaks

Most likely cause: your portfolio uses a different markdown/MDX pipeline
or frontmatter shape. Show Claude Code one of your existing case studies
and ask it to reconcile the differences — it'll adapt the frontmatter
and image references to match.
