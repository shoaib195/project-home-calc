# Phase 1 Design Specification — Project Home Calc

**Status:** Awaiting approval before Phase 2 implementation  
**Product:** Premium SEO-driven home improvement & construction tools platform  
**Primary markets:** United States, United Kingdom  
**Stack target:** Next.js · TypeScript · Tailwind CSS · React  

This document is the single source of truth for visual language, information architecture, page templates, component system, monetization UX, and Phase 2 roadmap. No production feature work should proceed until this spec is approved.

---

## A. Final design direction

### Positioning
**“Plan, calculate, estimate, and manage your home improvement projects.”**  
Promise: **Simple, accurate tools for planning your next home project.**

### Aesthetic thesis
**Editorial utility** — halfway between a trusted technical reference and a calm productivity SaaS product. Blueprint precision + warm construction accent. Not a cheap calculator farm, not a contractor ERP, not a construction company brochure.

### Look & feel keywords
Clean · Modern · Professional · Warm · Trustworthy · Readable · Utility-first · Conversion-focused

### Explicit anti-patterns
- Card-grid-everywhere layouts
- Purple/indigo SaaS clichés, cream+terracotta AI defaults
- Aggressive ad density / accidental-click patterns
- Fake social proof, fake badges, fake user counts
- Mandatory signup for free calculators
- Empty categories in primary navigation
- Doorway-page SEO thinness

### Existing codebase note
A coherent skeleton already exists (tokens, 6 tools, page templates). Phase 2 should **elevate and complete** that foundation—not discard it for a template rewrite. The QA checklist at the end of the original brief is the **Phase 2 acceptance bar**, not a Phase 1 implementation task.

---

## B. Final color system

### Brand rationale
**Blueprint blue** (`#23508D` / brand-600) communicates trust and technical reliability without defaulting to generic `#2563EB`.  
**Site amber** (`#B66F09` / amber-600) is the construction/home accent—used sparingly for secondary emphasis, cost callouts, and warm highlights.  
**Concrete ink** neutrals carry hierarchy; color is for state and brand, not decoration.

### Scales (locked)

| Token | Hex | Role |
|-------|-----|------|
| brand-50…950 | `#EEF3FA` → `#0E1B32` | Primary brand |
| amber-50…900 | `#FFF8EC` → `#633B10` | Accent |
| ink-50…950 | `#F8F9FB` → `#10141B` | Neutrals |

### Semantic roles — Light (primary)

| Role | Token | Value |
|------|-------|-------|
| Background | `--bg` | `#FFFFFF` |
| Surface | `--surface` | `#FFFFFF` |
| Surface elevated | `--surface-2` / `--surface-3` | ink-50 / ink-100 |
| Border | `--border` | ink-200 |
| Border strong | `--border-strong` | ink-300 |
| Text primary | `--text` | ink-900 |
| Text secondary | `--text-2` | ink-700 |
| Text muted | `--text-3` | ink-500 |
| Text disabled | `--text-disabled` | ink-400 |
| Accent | `--accent` | brand-600 |
| Accent strong | `--accent-strong` | brand-700 |
| Accent tint | `--accent-tint` | brand-50 |
| Secondary accent | `--accent-2` | amber-600 |
| Focus ring | `--focus-ring` | brand-600 |

### Semantic status

| Status | Color | Background |
|--------|-------|------------|
| Success | `#1C8A5B` | `#EAFBF3` |
| Warning | `#B15B0A` | `#FFF3E8` |
| Error | `#C23B2E` | `#FDECEA` |
| Info | `#2568AC` | `#EAF2FB` |

### Dark mode (complete second system — not an invert)
- Surfaces: `#12151C` → `#252B36` (never pure black)
- Text: `#EDEFF3` / `#C4CBD5` / `#8A93A2`
- Accent shifts to brand-400 for contrast on dark surfaces
- Theme toggle in header; persist `data-theme`; respect `prefers-color-scheme` until user overrides
- Ads/affiliates keep clear visual separation in both themes

### Contrast rules
- Body text on bg/surface: WCAG AA minimum (4.5:1)
- Large display numbers may use brand-700 on white
- Never use color alone for error/success—pair with icon + text

---

## C. Final typography

| Role | Font | Size (desktop) | Size (mobile) | Weight | Line-height | Notes |
|------|------|----------------|---------------|--------|-------------|-------|
| Display | Public Sans | 48–56px | 32–36px | 650–700 | 1.15 | Hero only |
| H1 | Public Sans | 36–40px | 28–32px | 650 | 1.2 | One per page |
| H2 | Public Sans | 28px | 24px | 650 | 1.25 | Sections |
| H3 | Public Sans | 22px | 20px | 600 | 1.3 | Subsections |
| H4 | Inter | 18px | 17px | 600 | 1.35 | Card/tool titles |
| Body large | Inter | 18px | 17px | 400 | 1.6 | Intros |
| Body | Inter | 16px | 16px | 400 | 1.6 | Default |
| Body small | Inter | 14px | 14px | 400 | 1.5 | Meta, helpers |
| Caption | Inter | 12–13px | 12px | 400–500 | 1.4 | Timestamps, disclaimers |
| Label | Inter | 13–14px | 13px | 500–600 | 1.3 | Form labels |
| Button | Inter | 14–15px | 14px | 600 | 1 | |
| Input | Inter | 16px | 16px | 400 | 1.4 | 16px prevents iOS zoom |
| **Results / numbers** | IBM Plex Mono | 28–40px | 24–32px | 500–600 | 1.15 | Tabular figures |

**Why this stack:** Public Sans for product voice; Inter for UI density; IBM Plex Mono for calculation results (trust + scannability). Avoid Inter-only default look by keeping Public Sans on all display/H1–H3.

---

## D. Final spacing & grid system

### Spacing scale (px)
`4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96`

### Radius
| Token | Value | Use |
|-------|-------|-----|
| radius-sm | 4px | Inputs, chips |
| radius-md | 8px | Buttons, small panels |
| radius-lg | 12px | Modals, major panels |
| Never | 9999 / full pills | Except true toggles |

### Shadows
Minimal. Prefer borders + surface steps. Soft elevation only for sticky header, dropdowns, drawers (≤ two shadow levels).

### Container widths
| Name | Max width | Use |
|------|-----------|-----|
| Marketing | 1280px | Home, category hubs |
| Wide | 1440px | Future contractor dashboard |
| Tool | 1120px | Calculator pages (calc + results) |
| Reading | 720px | Guide body prose |
| Calculator column | 560–640px | Input stack |
| Results column | 360–420px | Sticky results |

### Breakpoints
| Name | Width |
|------|-------|
| xs | 375 |
| sm | 390 / 414 |
| md | 768 |
| lg | 1024 |
| xl | 1280 |
| 2xl | 1440 |

### Grid
- Desktop: 12-column, 24px gutter  
- Tablet: 8-column adaptive  
- Mobile: single column, 16px page padding  

### Z-index
| Layer | z |
|-------|---|
| Base | 0 |
| Sticky results (mobile bar) | 20 |
| Sticky header | 40 |
| Dropdown / mega | 50 |
| Drawer / modal | 60 |
| Toast | 70 |
| Skip link | 100 |

---

## E. Final sitemap

### Public — Launch (Phase 2 must ship)

```
/                                 Home
/calculators                      All calculators index
/calculators/[category]           Category hub
/calculators/[category]/[tool]   Tool detail (primary SEO page)
/search                           Search results (noindex)
/guides                           Guides index
/guides/[slug]                    Guide article
/about                            About & methodology
/contact                          Contact
/legal/privacy                    Privacy Policy
/legal/terms                      Terms of Use
/legal/cookies                    Cookie Policy
/legal/disclaimer                 Estimates & liability disclaimer
/sitemap (HTML)                   Human sitemap (optional; XML required)
404                               Not found
```

### Categories (IA — only show in nav when ≥1 live tool)
1. Construction  
2. Landscaping  
3. Flooring  
4. Painting  
5. Roofing *(hide until tools exist)*  
6. Deck & Fence  
7. Home Improvement *(hide until tools exist)*  
8. Cost Estimation *(guides + estimators; hide empty tool grid)*  

### Soft-launch / Coming soon (routable, honest stubs)
```
/projects                         Project planner preview
/account/sign-in                  Auth placeholder → real auth later
```

### Future SaaS (do not fake as live)
```
/account                          Account home
/account/projects                 Saved projects
/account/history                  Calculation history
/account/preferences              Units, currency, theme
/contractors                      Contractor product marketing
/contractors/estimates            Estimate builder
/contractors/customers            Customer management
/contractors/invoices             Invoices
```

### Technical SEO routes
```
/sitemap.xml
/robots.txt
```

---

## F. Final navigation

### Desktop header
```
[Logo: Project Home Calc]
Calculators ▾   Guides   Projects
                    [Search]  [Theme]  Sign in   [Save project]
```

**Rationale**
- **Calculators** mega-menu: categories with live tools only + “View all”
- **Guides** (not “Cost Guides”) — broader editorial home; cost content lives inside
- **Projects**: soft CTA for future account value; never blocks calculator use
- Theme toggle: required by product QA bar; light remains default
- Search always available (typeahead → `/search?q=`)

### Scrolled / sticky
- Compact height (64px → 56px)
- Border-bottom + subtle surface; no heavy shadow
- Mega-menu closes on scroll start

### Tablet
- Primary links retained; search icon opens overlay if space tight

### Mobile
- Logo · Search icon · Menu
- Full-height drawer: Calculators (accordion by category) · Guides · Projects · About · Contact · Sign in · Theme · Save project
- Touch targets ≥ 44px

### Footer (4 columns + bottom bar)
| Product | Calculators | Resources | Company |
|---------|-------------|-----------|---------|
| What we do (1 line) | Top tools + View all | Guides, Projects, Sitemap | About, Contact |
| | Categories (live only) | | Privacy, Terms, Cookies, Disclaimer |

Bottom: © year · “Estimates are planning figures, not quotes.” · No fake social links.

---

## G. Final homepage structure

**Job:** Acquire → explain → get first calculation started in <10 seconds.

| # | Section | Purpose | Notes |
|---|---------|---------|-------|
| 1 | **Hero** | Brand + promise + CTAs | Brand name as hero-level signal; H1: “Plan your project with confidence.” Supporting: materials, costs, quantities. Primary CTA → `/calculators`. Secondary → open search. Optional inline search. Atmosphere: subtle blueprint grid / measurement motif—not stock photo collage. |
| 2 | **Popular calculators** | Fast path | 6 live tools as ToolCards |
| 3 | **Browse by project** | Intent matching | Bundles (patio, deck, room paint, etc.) |
| 4 | **Categories** | SEO + discovery | Live categories only |
| 5 | **How it works** | Trust + simplicity | 3 steps: Choose tool → Enter dimensions → Get results |
| 6 | **Why these numbers** | Methodology trust | Link to About; no fake credentials |
| 7 | **Guides** | Editorial SEO | 2–4 GuideCards |
| 8 | **FAQ** | Objections + FAQ schema | Signup-free, estimates vs quotes, US/UK units |
| 9 | **Final CTA** | Conversion | Start calculating / Browse guides |
| 10 | **Footer** | Trust + legal | |

**Ad slots (home):** one mid-page (after How it works), one pre-footer. Never in hero.

**Deferred from home:** contractor SaaS preview (moves to `/about` or future `/contractors` to avoid mixed audience confusion).

---

## H. Final calculator page structure

**Principle:** Calculator is the hero. Start calculating within one viewport on desktop; within ~1.5 screens on mobile.

```
Breadcrumb
H1 Tool name
1–2 sentence intro (search intent)

┌─────────────────────────┬──────────────────────┐
│ Inputs (dominant)       │ Results (sticky)     │
│ Unit toggle US | UK     │ Primary metric       │
│ Dimensions              │ Order / waste        │
│ Waste %                 │ Cost range (est.)    │
│ [Advanced: price…]      │ Disclaimer           │
│ Reset                   │                      │
└─────────────────────────┴──────────────────────┘

[Ad — below fold, after results interaction zone]

How this calculation works
Formula / methodology
Worked example
Cost notes (ranges, not guarantees)
FAQ
Related tools
Related guides
[Affiliate — clearly labeled “Partner recommendations”]
[Ad — page bottom]
```

### Calculator UX rules
- Live or near-live calculate (no multi-step wizard for core tools)
- Defaults that produce a sensible first result
- Unit toggle: US (ft/in/yd, USD) ↔ UK (m/cm/mm, GBP)
- Prefer **convert values on unit switch** (Phase 2 fix vs reset-to-demo)
- Advanced cost fields collapsed by default
- Results distinguish: **Calculated** vs **Recommended (with waste)** vs **Estimated cost**
- Cost always labeled estimate; ranges preferred when price inputs present

---

## I. Final category page structure

```
Breadcrumb
H1 Category name
Short intro (unique, useful)
Featured tools (if ≥3 tools)
Tool grid (all live tools)
Popular calculations / project bundles for this category
Related guides
Related categories
[Ad mid + bottom]
```

**Empty category policy:** Do not publish empty category URLs in nav or sitemap. Soft-redirect or noindex until first tool ships. Scalability > vanity IA.

---

## J. Final component library

### Foundations
Button (primary, secondary, ghost, destructive) · IconButton · Link · Badge · Alert · Tooltip · Toast · Spinner/Skeleton · Divider

### Forms
Input · NumberField · Select · UnitSelector · CurrencySelector · Checkbox · Radio · Toggle · Textarea · FormField (label, hint, error)

### Navigation
Header · MobileNav/Drawer · Footer · Breadcrumb · Tabs · Pagination · Dropdown · MegaMenu

### Discovery
SearchBox · SearchResult · ToolCard · CategoryCard · GuideCard · BundleCard

### Calculator
CalculatorShell · Metric · ResultPanel · AdvancedFields · Faq · MethodologyBlock · WorkedExample

### Monetization
AdSlot (labeled, reserved sizes) · AffiliateRecommendation (disclosure + distinct chrome)

### Content
AuthorBlock · Toc · TipCallout · Prose styles

### Feedback states
EmptyState · ErrorState · LoadingState · SuccessInline

### Future (design now, build later)
ProjectCard · EstimateSummary · AccountMenu · DataTable · Modal

### Component states (all interactive)
Default · Hover · Focus-visible · Active · Disabled · Loading · Error · Empty · Selected · Success

---

## K. Final responsive rules

| Breakpoint | Behavior |
|------------|----------|
| ≥1280 | 12-col; sticky results sidebar; mega-menu |
| 1024–1279 | Slightly tighter tool layout; mega may become accordion |
| 768–1023 | Stack results under inputs; sticky mobile results summary bar optional |
| ≤767 | Single column; drawer nav; 16px padding; inputs full width; primary CTA full width; ads single column only |

### Mobile calculator specifics
- Number inputs large, 16px font
- Unit toggle as segmented control (full width)
- Results: sticky bottom summary (primary metric + “See details”) after first valid calc
- No horizontal scroll; tables → stacked definition lists

### Desktop calculator specifics
- Results sticky within viewport while scrolling methodology content
- Max content width 1120px centered

---

## L. Final interaction rules

### Motion
- Duration: 150–200ms UI; 250ms drawers
- Easing: standard ease-out
- Prefer opacity + translateY(4px); no bounce
- `prefers-reduced-motion: reduce` → instant or opacity-only

### Feedback
- Validation on blur + on submit; clear on fix
- Calculate success: results panel updates with subtle highlight (accent-tint flash once)
- Toasts for account/save actions only (not every keystroke)

### Keyboard
- Full tab order; visible focus rings (2px brand)
- Esc closes menus/drawers
- Search: ↑↓ to results, Enter to open

---

## M. Final ad & affiliate rules

### Ads (AdSense-ready layout)
| Placement | Where | Forbidden |
|-----------|-------|-----------|
| Mid-content | After calc + short explanation | Next to Calculate/Reset |
| Bottom | Before related tools / footer | Inside results panel |
| Sidebar (desktop category/guide only) | Optional 300×250 | Never overlapping sticky results |
| Mobile | Max 2 per long page | No sticky footer ad covering CTA |

- Visual: reserved `AdSlot` with “Advertisement” label; distinct from UI chrome  
- Density: usefulness first; empty slots OK until approved  
- Never style ads as nav or primary buttons  

### Affiliates
- Appear **below** results + methodology, never inside Metric  
- Label: “Partner recommendations” + short disclosure  
- Different surface (surface-2 + border), not primary button styles  
- No href until real partners exist—hide component rather than dead “View →”

### Monetization vs UX conflict (resolved)
**Utility > ads > affiliate.** If a placement competes with the primary metric or CTA, remove the placement.

---

## N. Final Phase 2 implementation roadmap

Mapped to the attached QA / AdSense bar. **Do not start until Phase 1 is approved.**

### Sprint 0 — Design lock
- [ ] Approve this document (colors, type, IA, templates, ad rules)
- [ ] Confirm brand name lock: “Project Home Calc” vs final trademarked name

### Sprint 1 — Foundation polish
1. Theme toggle + persistence + `color-scheme` fix  
2. Spacing token documentation → Tailwind theme alignment  
3. Hide empty categories from nav/sitemap  
4. Convert-on-unit-switch (fix reset-to-demo)  
5. Stronger empty/error/loading states on calculators & search  

### Sprint 2 — Trust & legal (AdSense blockers)
6. Real Privacy, Terms, Cookies, Disclaimer pages  
7. Contact form backend or honest mailto + spam protection  
8. About: methodology transparency (no fake experts)  
9. Affiliate disclosure pattern; hide dead affiliate CTAs  

### Sprint 3 — SEO technical
10. `sitemap.ts`, `robots.ts`, canonicals, OG/Twitter  
11. JSON-LD: WebSite, Organization, BreadcrumbList, FAQPage, Article  
12. Internal linking pass; HTML sitemap optional  

### Sprint 4 — Content & inventory
13. Fill or remove empty categories (first roofing / cost tools)  
14. Expand guides (depth + count); TOC for long articles  
15. Search ranking improvements (synonym weight, category boost)  

### Sprint 5 — Visual elevation (QA “too simple” bar)
16. Hero composition upgrade (brand-first, atmosphere, motion 2–3 beats)  
17. Calculator shell hierarchy (results typography dominance)  
18. Guide editorial layout (TOC, tip callouts, reading measure)  
19. Consistent section rhythm homepage → tool → guide  

### Sprint 6 — Monetization wiring
20. AdSlot size map + CLS-safe reserved heights  
21. AdSense script only behind env flag  
22. Real affiliate links when partners exist  

### Sprint 7 — Future product shells (honest)
23. Projects: waitlist / localStorage prototype (optional) without fake SaaS  
24. Auth: real provider when ready; keep calculators anonymous  
25. Contractor IA as marketing page only until product exists  

### Definition of Done (Phase 2)
Matches the user’s final QA prompt: usable, modern, light+dark, SEO-complete, content-rich, accessible, AdSense-*ready* (not “guaranteed approved”), US/UK appropriate, no placeholders in legal/ads/affiliates.

---

# Expanded Phase 1 deliverables (1–34)

## 1. Product UX strategy
 freemium utility platform: anonymous calculators first; accounts unlock save/export later; ads/affiliates subsidize free tier; contractor SaaS is a parallel product surface, not the public homepage metaphor.

## 2. Personas
| Persona | Goal | Design implication |
|---------|------|--------------------|
| Homeowner planner | “How much concrete for my patio?” | Instant calc, plain language, cost ranges |
| DIY renovator | Materials + budget confidence | Related tools + guides |
| Tradesperson | Fast numbers on site (mobile) | Thumb-friendly inputs, sticky results |
| Small contractor | Professional estimates later | Future SaaS; don’t skew public UI |

## 3. Primary journeys
1. Search/SEO → Tool → Calculate → Understand → Related tool/guide  
2. Home → Popular tool → Calculate  
3. Category browse → Tool  
4. Guide → Embedded/related calculator  
5. (Future) Calculate → Save to project → Export PDF  

## 4–6. IA / sitemap / nav
See sections E–F.

## 7–10. Wireframe specs
See G–I; Guide page:

```
Breadcrumb · H1 · Author (real) · Updated
Intro · TOC (if ≥4 sections)
Prose sections · Tip callouts · Example calcs linking to tools
FAQ · Related tools · Related guides
Ads: mid + bottom only
```

## 11. Search
Typeahead (tools + guides); full page for deeper queries; synonym match; empty state with category links; `/search` noindex.

## 12. Project planner (future UX)
Create → name → type → attach calculator runs → materials rollup → cost rollup → export/share. Public teaser page only until auth exists.

## 13. Account UX
Optional; Sign in / Preferences (units, currency, theme) / Saved projects / History. Never gate calculators.

## 14. Contractor SaaS IA
Separate `/contractors` product: estimates, customers, margins, invoices, PDF. Public site remains homeowner/DIY-first.

## 15–22. Design system
See B–D, J–L.

## 23. Accessibility
WCAG 2.2 AA; semantic HTML; labels; focus; contrast; 44px targets; reduced motion; status not color-only; skip link.

## 24–25. Ads / affiliates
See M.

## 26. SEO UX
Unique intro + tool + methodology + example + FAQ + internal links per tool; breadcrumbs; no thin doorway pages; schema in Phase 2.

## 27. Trust
Methodology transparency; updated dates; estimate labeling; real About/Contact/Legal; **never fabricate** reviews, counts, credentials, badges.

## 28. States
| State | Pattern |
|-------|---------|
| Invalid input | Inline error under field + `aria-invalid` |
| Calc impossible | Results panel explains what’s missing |
| No search hits | Suggestions + category links |
| Loading search | Skeleton results |
| Network (future) | Retry + plain language |
| Empty projects | Explain value + CTA when feature live |
| Success | Results update; optional soft highlight |

## 29. Motion
See L.

## 30–31. Mobile / Desktop rules
See K.

## 32. Content hierarchy
Tool pages: **Calc → Results → Explanation → Proof (formula/example) → FAQ → Related**. Marketing: **Promise → Proof → Paths → Trust → CTA**.

## 33. Conversion strategy
Primary conversion = completed calculation. Secondary = guide engagement. Tertiary = account/save. Monetization never outranks primary conversion.

## 34. Scalability
- Data-driven tools/categories/guides  
- Shared CalculatorShell  
- Nav/sitemap derived from live inventory  
- Template stability from 25 → 250 tools  
- Feature flags for ads, auth, contractors  

---

## Conflict register (identified before Phase 2)

| Conflict | Decision |
|----------|----------|
| SEO wants long content vs calc-first UX | Calc above fold; long content below |
| Ads vs usability | Max 2–3 slots; never beside primary CTA/results controls |
| Empty categories vs complete IA | Hide until populated |
| Homeowner vs contractor | Public = homeowner; contractor = future lane |
| Dark mode vs utility reading | Light default; full dark optional |
| Affiliate vs trust | Disclosure + visual separation; hide if empty |
| Signup vs growth | Never required for core calc |

---

## Approval checklist

Please confirm or amend:

- [ ] Brand direction (blueprint blue + site amber + ink)  
- [ ] Typography (Public Sans / Inter / IBM Plex Mono)  
- [ ] Homepage section order  
- [ ] Calculator page template (calc-first)  
- [ ] Empty-category hide policy  
- [ ] Ad/affiliate rules  
- [ ] Light primary + complete dark with header toggle  
- [ ] Phase 2 sprint order  

**Reply with approvals or requested changes. Phase 2 implementation starts only after that.**
