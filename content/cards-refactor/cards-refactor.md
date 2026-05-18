---
slug: cards-refactor
title: Cards Refactor
subtitle: Rebuilding a foundational component family in the Coinbase Design System to keep pace with consumer product needs.
company: Coinbase
team: Coinbase Design System (CDS)
role: Lead Product Designer · Design Systems
collaborators:
  - name: Mandy Wu
    role: Product Designer
year: 2025
timeframe: Q4 2025
surface: Coinbase consumer apps (iOS, Android, Web)
tags:
  - Design Systems
  - Component Design
  - Product Design
  - AI-assisted Workflow
cover: /images/cards-refactor/04-four-cards.jpg
ogImage: /images/cards-refactor/04-four-cards.jpg
summary: Collapsed five overlapping card components into a clearer four-card system with shared anatomy, full state coverage, and new capabilities for data visualization — closing the gap between the design system and what product was actually shipping.
published: true
---

## Overview

The Cards family in CDS had grown into a five-component patchwork — Contained Asset, Floating Asset, Nudge, Upsell, and Content — each shipped at a different moment for a different team, with overlapping use cases and no shared anatomy.

Meanwhile, product teams were building cards Coinbase needed but the system didn't cover: live data tiles with charts and progress bars, promotional cards with custom backgrounds, predictions cards, AI-generated content cards. Every one of those started as a one-off in product code.

I led a refactor of the Cards family — collapsing five components into four with a clearer mental model, more flexible builds, and dynamic sizing that adapts to context. The goal wasn't a visual refresh. It was to bring the system back to the edge of the product, so designers and engineers could ship faster without forking.

![Cards Refactor cover](/images/cards-refactor/01-cover.jpg)

---

## The Problem

CDS Cards were diverging from production in three ways:

**Coverage gaps.** Teams needed data visualizations, custom backgrounds, AI-generated content treatments, and predictions tiles. None existed in CDS, so they were rebuilt in product — inconsistently.

**Overlapping components.** Nudge and Upsell cards solved nearly the same problem with slightly different anatomies. Designers had to guess which one to pick. Engineers had to maintain both.

**Missing fundamentals.** No shared interaction states. No standard for accessory slots (tags, actions, media). No agreement on left vs. right media placement. The system was structurally behind the product.

![The existing five-card family in CDS](/images/cards-refactor/02-current-state.jpg)

![Cards being built outside the system to fill coverage gaps](/images/cards-refactor/03-gap.jpg)

---

## My Role

I drove this refactor end-to-end as the lead designer:

- Audited the existing Cards family and mapped its overlap with in-product, out-of-system cards
- Defined the new four-card taxonomy and the anatomy of each component
- Designed every variant, state, and accessory across the family
- Ran the cross-team feedback loop with product designers and engineers
- Partnered with Mandy Wu on visual exploration and review

---

## Approach

### 1 · Audit before adding

Before designing anything new, I inventoried every card in production — including the ones that lived outside CDS. The pattern was clear: most "new" cards weren't actually new. They were existing types stretched to fit a use case the component didn't support. The fix wasn't more components. It was better-built ones.

### 2 · Collapse, then extend

I consolidated Nudge and Upsell into a single **Message Card** — the difference between them had always been styling, not structure. I deprecated **Floating Asset Card** (near-zero use in production). That left room to introduce one genuinely new type: a **Data Card** for charts, progress bars, and progress circles, finally giving teams a system-native way to ship live data tiles.

The result was a tighter, more honest taxonomy:

- **Media Card** — replaces Contained/Floating Asset; for asset listings and media-first content
- **Message Card** — merges Nudge + Upsell; for promotions, upsells, and announcements
- **Data Card** — new; for charts and live data visualization
- **Content Card** — for AI-generated content, news, predictions, and editorial

![The new four-card taxonomy](/images/cards-refactor/04-four-cards.jpg)

### 3 · Design for flexibility, not edge cases

Each card was rebuilt around shared primitives — title, subtitle, description, accessory slots, media, button — so designers could compose rather than choose. Every card supports:

- Left or right media placement
- Optional tag, action, and caret accessories
- Swappable media (asset icon, asset group, spot icon, custom)
- Dynamic sizing that adapts to its container
- A complete state set: default, hovered, pressed, focus, selected, disabled

![A complete state set across the family](/images/cards-refactor/05-states.jpg)

### 4 · Pressure-test against real product

Every variant was validated against an existing or imminent use case — Coinbase One upsells, Pudgy Penguins asset tiles, CYEL sale countdowns, BTC perp data tiles, AI-generated news. If a variant didn't map to a real surface, it didn't ship.

![Media Card examples in production-realistic context](/images/cards-refactor/06-media-examples.jpg)

---

## A note on tooling

I used AI-assisted workflows throughout — primarily for variant generation, copy permutations on filled-state examples, and rapid prototype scaffolds when I needed to feel a card in a real layout before committing to the spec. The deliverable is the same as it would've been without those tools; the velocity isn't. It let me explore more states and edge cases in the same window of time.

---

## Key Decisions

**Deprecate Floating Asset Card.** Low usage, redundant with Contained Asset. Removing it simplified the mental model more than any addition.

**Merge Nudge + Upsell into Message.** Two components had been doing one job. Consolidating them reduced "which should I use?" decisions to zero.

**Add Data Card.** The first genuinely new type. Validated by the volume of one-off data tiles teams had built outside the system.

**Standardize accessory slots.** Tag, action (radio / checkbox / caret), and media became a consistent vocabulary across cards — so a designer learning one card learns the rest.

**Match production state coverage.** Adding hovered, pressed, focus, selected, and disabled states aligned CDS with what engineers were already implementing — closing the gap between spec and reality.

---

## Working with Eng & Product

The refactor was scoped with eng from the start: I confirmed which props existed in the current implementation, which variants were used in code vs. design, and where the system was already drifting from production. State coverage was prioritized because that's where eng was forking most often.

Mid-refactor, I opened a structured feedback round with product designers across the org, asking targeted questions: do the new types make sense, are the use cases clear, is the naming legible, does the layout work, are tag/action/accessory slots in the right places. The component shape today reflects that feedback — not just my proposal.

![Structured feedback prompt shared with product designers](/images/cards-refactor/07-feedback.jpg)

---

## Impact

- **5 components → 4**, with clearer use-case boundaries
- **0 → 6** standardized interaction states across the family
- **3 new capabilities** — data visualization, custom backgrounds, configurable header/body/footer — previously only available as one-offs in product code
- A shared anatomy and accessory vocabulary, so cards now compose instead of branch

The system caught up to the product. That's the win.

---

## Reflection

The instinct on a refactor is to add. What this project taught me is that subtraction is often the higher-leverage move — deprecating Floating Asset and merging Nudge with Upsell did more for the system's clarity than any new variant. The new Data Card matters, but it only fits cleanly because the rest of the family got smaller and more honest first.

It also reinforced something about design systems work: the spec is only half the deliverable. The other half is the conversation with the product designers and engineers who will actually use it. Most of the late-stage decisions in this project came from that loop, not from the original proposal.
