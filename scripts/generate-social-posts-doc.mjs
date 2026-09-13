import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } from "docx";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outPath = join(root, "docs", "Project-Home-Calc-Social-Media-Posts.docx");

const brand = "Project Home Calc";
const site = "https://www.projecthomecalc.com";

function h1(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 200 },
  });
}
function h2(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 120 },
  });
}
function h3(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 80 },
  });
}
function p(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 120 },
    ...opts,
    children: [new TextRun({ text, size: 22 })],
  });
}
function label(title, body) {
  return [
    new Paragraph({
      spacing: { before: 80, after: 40 },
      children: [new TextRun({ text: title, bold: true, size: 22 })],
    }),
    new Paragraph({
      spacing: { after: 160 },
      children: [new TextRun({ text: body, size: 22 })],
    }),
  ];
}
function divider() {
  return new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "23508D", space: 8 } },
    spacing: { after: 200 },
    children: [],
  });
}

const facebook = [
  {
    title: "FB 1 — Concrete slab reality check",
    caption: `Quick sanity check before you call the ready-mix plant:

A 10×10 ft patio slab at 4 inches is about 1.23 cubic yards — before waste.

If your quote and your own volume don't line up, ask which thickness they assumed.

Free concrete calculator (formula on the page, no account):
${site}/calculators/construction/concrete-calculator

Built for homeowners who want the number before the truck shows up.`,
    hashtags: "#HomeImprovement #DIY #ConcretePatio #HomeRenovation #ProjectHomeCalc",
  },
  {
    title: "FB 2 — Paint: stop guessing cans",
    caption: `Paint stores love optimism. Walls don't.

Measure perimeter × height, subtract doors and windows, then multiply by coats. That's how you avoid a mid-wall run to the shop when the colour batch is already different.

Free paint calculator (US gallons / UK litres):
${site}/calculators/painting/paint-calculator

Save this if you're painting a room this month.`,
    hashtags: "#InteriorPainting #DIYPaint #HomeDIY #RoomMakeover #ProjectHomeCalc",
  },
  {
    title: "FB 3 — Topsoil: bags vs reality",
    caption: `“A few bags of topsoil” is fine for one shrub.

A 20×10 ft bed at 4 inches deep is closer to 2.5 cubic yards before waste — that's bulk territory for most yards.

Depth is what eats the budget, not length.

Topsoil calculator:
${site}/calculators/landscaping/topsoil-calculator`,
    hashtags: "#Gardening #Landscaping #GardenBeds #Topsoil #DIYGarden #ProjectHomeCalc",
  },
  {
    title: "FB 4 — Wallpaper shortfalls",
    caption: `Wallpaper jobs don't run short because you measured the floor.

They run short because of pattern match waste and openings you forgot to handle.

Walls = perimeter × height − doors/windows, then add waste for the repeat.

Free wallpaper roll calculator:
${site}/calculators/painting/wallpaper-calculator

Order enough in one dye lot. “I'll buy two more next week” is how rooms get a visible stripe.`,
    hashtags: "#Wallpaper #InteriorDesign #FeatureWall #HomeDecor #DIYHome #ProjectHomeCalc",
  },
  {
    title: "FB 5 — Gravel depth trap",
    caption: `Same driveway length. Different depth. Very different ticket.

Going from 4 inches to 6 inches of gravel is roughly +50% material for the same footprint.

Get the depth right on paper before the tipper arrives.

Gravel calculator:
${site}/calculators/construction/gravel-calculator`,
    hashtags: "#Driveway #GravelDriveway #LandscapingTips #DIYOutdoor #ProjectHomeCalc",
  },
  {
    title: "FB 6 — Flooring waste",
    caption: `Ordering exact floor area is the fastest way to finish one pack short.

Straight layouts often need ~5–8% waste. Diagonal or busy rooms: more like 10–15%.

Guide with the method:
${site}/guides/how-to-estimate-flooring-with-waste

Calculator:
${site}/calculators/flooring/flooring-calculator`,
    hashtags: "#Flooring #LaminateFlooring #HomeRenovation #DIYFlooring #ProjectHomeCalc",
  },
  {
    title: "FB 7 — Contractor quotes",
    caption: `Three quotes for the “same” job aren't comparable until you line up:

• Materials
• Labour
• Exclusions
• Allowances

Your own quantity estimate won't replace a trade quote — but it makes vague lump sums easier to question.

How to compare quotes:
${site}/guides/how-to-compare-contractor-quotes`,
    hashtags: "#HomeRenovation #Contractor #HomeownerTips #Remodeling #ProjectHomeCalc",
  },
  {
    title: "FB 8 — Mulch depth",
    caption: `Mulch that looks fine on day one can look patchy after the first rain if you under-depth the bed.

Most bark mulch is planned around 2–3 inches. Measure bed area, pick depth, then bags vs bulk.

Mulch calculator:
${site}/calculators/landscaping/mulch-calculator`,
    hashtags: "#Mulch #GardenTips #Landscaping #CurbAppeal #ProjectHomeCalc",
  },
  {
    title: "FB 9 — What the site is",
    caption: `${brand} — free calculators for home projects.

Concrete, gravel, paint, wallpaper, topsoil, flooring, roofing, fencing, and more.

• US & UK units
• Formula on every page
• No account required

Start here: ${site}

If you've ever over-ordered (or under-ordered) materials, this is for you.`,
    hashtags: "#FreeTools #HomeImprovement #DIYTools #RenovationPlanning #ProjectHomeCalc",
  },
  {
    title: "FB 10 — Soft Q&A",
    caption: `Q: Do I need an account to use the calculators?
A: No. Open a tool, enter dimensions, read the quantity.

Q: Are the costs exact quotes?
A: No — planning ranges. Confirm with your local supplier.

Browse calculators: ${site}/calculators
Guides: ${site}/guides`,
    hashtags: "#DIYHelp #HomeProjects #FreeCalculators #Homeowner #ProjectHomeCalc",
  },
];

const instagram = [
  {
    title: "IG 1 — Concrete number drop",
    caption: `10×10 ft
4 inches thick
≈ 1.23 yd³

(before waste)

Save this before you book the truck.

Calculator + formula on the page
Link in bio → Concrete Calculator
${site}/calculators/construction/concrete-calculator`,
    hashtags:
      "#concrete #concretelife #patiogoals #diyproject #homeimprovement #renovation #buildersofinstagram #diyhome #constructionlife #projecthomecalc #freeTools #materialestimate",
  },
  {
    title: "IG 2 — Paint carousel hook",
    caption: `Paint math in one line:

Perimeter × height
− doors & windows
× coats
= what to buy

Not vibes. Not “two cans.”

Paint calculator in bio
${site}/calculators/painting/paint-calculator`,
    hashtags:
      "#paintingtips #interiorpaint #diyrepair #homediy #roommakeover #beforeandafter #paintcalc #renovationtips #projecthomecalc #weekendproject",
  },
  {
    title: "IG 3 — Topsoil reel-style",
    caption: `Garden bed tip:

Depth eats volume.

20×10 ft @ 4 in
≈ 2.5 yd³
(before waste)

Bags are for patches.
Beds usually need bulk.

Topsoil calculator → link in bio
${site}/calculators/landscaping/topsoil-calculator`,
    hashtags:
      "#gardeningtips #topsoil #gardenbed #landscapingideas #backyardgoals #diygarden #soilmath #outdoorspaces #projecthomecalc #curbappeal",
  },
  {
    title: "IG 4 — Wallpaper",
    caption: `Wallpaper tip they skip at the till:

Pattern match = extra rolls.

Measure walls (not the floor).
Subtract openings.
Add waste for the repeat.

Wallpaper calculator in bio
${site}/calculators/painting/wallpaper-calculator`,
    hashtags:
      "#wallpaper #featurewall #interiordetails #homedecor #diydecor #wallcovering #interiorinspo #renovationdiary #projecthomecalc #designmath",
  },
  {
    title: "IG 5 — Gravel +50%",
    caption: `Same driveway.
Different depth.

4 in → 6 in gravel
= about +50% material

Get depth right first.

Gravel calculator in bio
${site}/calculators/construction/gravel-calculator`,
    hashtags:
      "#driveway #gravel #landscapingdiy #outdoorprojects #homeexterior #diyoutdoor #constructiontips #projecthomecalc #yardwork",
  },
  {
    title: "IG 6 — Brand grid",
    caption: `Free tools for real projects.

Concrete · Paint · Topsoil
Wallpaper · Gravel · Flooring
Roofing · Fence · more

US & UK units
No account

${brand}
Link in bio → ${site}`,
    hashtags:
      "#diytools #hometools #renovationplanning #homeprojects #freetool #makersgonnamake #projecthomecalc #buildsmart #measuretwice",
  },
  {
    title: "IG 7 — Flooring waste",
    caption: `Don't order exact floor area.

Waste exists.
Cuts exist.
Packs sell whole.

Straight lay ~5–8%
Busy layout ~10–15%

Guide + calculator in bio
${site}/guides/how-to-estimate-flooring-with-waste`,
    hashtags:
      "#flooring #laminate #vinylplank #diyflooring #homeupgrade #renovationlife #flooringinstall #projecthomecalc #wastefactor",
  },
  {
    title: "IG 8 — Quotes",
    caption: `Lump-sum quotes hide the story.

Ask for:
Materials
Labour
What's excluded

Then check quantities yourself.

Guide in bio
${site}/guides/how-to-compare-contractor-quotes`,
    hashtags:
      "#homeowner #renovationtips #contractorlife #remodeling #budgetrenovation #smartspending #projecthomecalc #homebudget",
  },
  {
    title: "IG 9 — Mulch",
    caption: `Mulch looking thin after rain?

You probably under-depth'd it.

Aim ~2–3 in for most bark.
Measure beds. Then bags vs bulk.

Mulch calculator in bio
${site}/calculators/landscaping/mulch-calculator`,
    hashtags:
      "#mulch #gardencare #landscaping #frontyard #backyardmakeover #gardendiy #projecthomecalc #outdoorliving",
  },
  {
    title: "IG 10 — Story/FAQ",
    caption: `FAQ

Need an account?
→ No

Exact contractor quote?
→ No — planning figures

US & UK units?
→ Yes

Start: link in bio
${site}/calculators`,
    hashtags:
      "#diyfaq #homeimprovementtips #freetools #projecthomecalc #renovationhelp #homeprojects #calcultors",
  },
];

const linkedin = [
  {
    title: "LI 1 — Ops angle: quantities before purchase orders",
    caption: `Material overruns rarely start at the supplier.

They start when a project is priced from a sketch and a guess.

We built ${brand} so homeowners (and small project teams) can convert dimensions into planning quantities — with the formula visible on the same page.

Example: a 10×10 ft slab at 4 in ≈ 1.23 yd³ before waste.

Tool: ${site}/calculators/construction/concrete-calculator

If you manage renovations, walk clients through the math before the PO.`,
    hashtags: "#Construction #ProjectManagement #HomeImprovement #PropTech #Estimating",
  },
  {
    title: "LI 2 — Paint procurement",
    caption: `Interior paint is a classic “looks simple, costs surprises” line item.

A usable estimate needs wall area after openings, coat count, and coverage — not a round number of cans from memory.

Free paint calculator (US/UK units):
${site}/calculators/painting/paint-calculator

Useful for homeowners and for PMs who want a quick second check before approving a materials list.`,
    hashtags: "#Facilities #InteriorFitOut #Procurement #DIY #ProjectHomeCalc",
  },
  {
    title: "LI 3 — Landscaping budgets",
    caption: `Landscape budgets slip when soil depth is treated as an afterthought.

A 20×10 ft bed at 4 inches is already ~2.5 cubic yards before settlement — often a bulk delivery decision, not a trolley of bags.

Topsoil calculator:
${site}/calculators/landscaping/topsoil-calculator

Clear quantities make supplier conversations shorter and change orders rarer.`,
    hashtags: "#Landscaping #PropertyMaintenance #CostControl #HomeServices #Estimating",
  },
  {
    title: "LI 4 — Wallpaper / interiors",
    caption: `Wallpaper procurement fails in the same place every time: pattern match waste and incomplete wall takeoffs.

Floor area is the wrong input. Wall perimeter × height, openings, and repeat waste are the right ones.

Wallpaper roll calculator:
${site}/calculators/painting/wallpaper-calculator

Ordering one dye lot up front beats explaining a colour break to a client later.`,
    hashtags: "#InteriorDesign #FitOut #Specification #HomeRenovation #ProjectHomeCalc",
  },
  {
    title: "LI 5 — Civil / outdoor: gravel depth",
    caption: `On gravel drives and bases, thickness is a cost driver hiding in plain sight.

Increasing compacted depth from 4 in to 6 in is roughly a 50% increase in volume for the same footprint.

Gravel calculator:
${site}/calculators/construction/gravel-calculator

Align depth assumptions early — especially when comparing contractor proposals.`,
    hashtags: "#CivilWorks #ExternalWorks #ConstructionEstimating #Infrastructure #Property",
  },
  {
    title: "LI 6 — Product positioning",
    caption: `${brand} is a free library of material and planning-cost calculators for residential projects.

Coverage includes concrete, gravel, sand, paint, wallpaper, topsoil, flooring, roofing, fencing, and related tools — with US/UK unit toggles and formulas shown on-page.

No account wall. Built for clarity, not lead-capture theatre.

Explore: ${site}

Happy to hear what calculator gaps practitioners still see in the field.`,
    hashtags: "#SaaS #PropTech #ConstructionTech #Product #HomeImprovement",
  },
  {
    title: "LI 7 — Flooring waste as process",
    caption: `Pack-based flooring is unforgiving: stores sell whole cartons, layouts create offcuts, and dye lots change.

A professional takeoff builds waste into the order. A homeowner shortcut that orders net area usually fails at the last wall.

Method overview:
${site}/guides/how-to-estimate-flooring-with-waste

Tool:
${site}/calculators/flooring/flooring-calculator`,
    hashtags: "#Flooring #InteriorConstruction #TradeTips #Renovation #QualityControl",
  },
  {
    title: "LI 8 — Quote comparison discipline",
    caption: `Apples-to-apples contractor comparison needs structure:

1. Same scope assumptions (thickness, grade, finish)
2. Split materials vs labour where possible
3. Explicit exclusions
4. An independent quantity check

Guide we published for homeowners (also useful as a PM checklist):
${site}/guides/how-to-compare-contractor-quotes

Better questions upstream → fewer disputes downstream.`,
    hashtags: "#VendorManagement #Homebuilding #ProjectControls #Transparency #Construction",
  },
  {
    title: "LI 9 — Mulch / grounds maintenance",
    caption: `Grounds work looks cosmetic until the coverage math is wrong.

Mulch depth (often 2–3 inches for bark) drives volume; volume drives whether bags or bulk is rational.

Calculator:
${site}/calculators/landscaping/mulch-calculator

Handy for property managers planning seasonal bed refresh across multiple sites.`,
    hashtags: "#FacilitiesManagement #Landscaping #PropertyOps #Maintenance #ESG",
  },
  {
    title: "LI 10 — Trust / methodology",
    caption: `We're deliberate about what ${brand} is not: it isn't a structural design service or a local price guarantee.

It is a planning layer — geometry, stated assumptions, and adjustable waste — so people can interrogate quotes and orders with a number in hand.

How we calculate:
${site}/methodology

Calculators:
${site}/calculators

If you work in residential estimating or homeowner education, I'd welcome feedback on which takeoffs still lack a good free tool.`,
    hashtags: "#Transparency #EdTech #ConstructionEducation #PropTech #ContinuousImprovement",
  },
];

function sectionBlocks(platformTitle, intro, posts) {
  const blocks = [
    h1(platformTitle),
    p(intro),
    divider(),
  ];
  for (const post of posts) {
    blocks.push(h2(post.title));
    blocks.push(...label("CAPTION (copy-paste)", post.caption));
    blocks.push(...label("HASHTAGS", post.hashtags));
    blocks.push(
      ...label(
        "SUGGESTED LINK / CTA",
        post.caption.includes(site) ? "Use URL already in caption. Optional UTM: ?utm_source=" + platformTitle.split(" ")[0].toLowerCase() + "&utm_medium=organic&utm_campaign=social_pack_sep2026" : site,
      ),
    );
    blocks.push(divider());
  }
  return blocks;
}

const doc = new Document({
  creator: brand,
  title: `${brand} — Social Media Post Pack (Facebook, Instagram, LinkedIn)`,
  description: "Platform-specific captions and hashtags for Project Home Calc",
  sections: [
    {
      properties: {},
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
          children: [new TextRun({ text: brand, bold: true, size: 36, color: "23508D" })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
          children: [new TextRun({ text: "Social Media Post Pack", size: 28 })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [
            new TextRun({
              text: "Facebook (10) · Instagram (10) · LinkedIn (10) — separate copy per platform",
              size: 20,
              italics: true,
            }),
          ],
        }),
        p(`Website: ${site}`),
        p("Brand colour for creatives: #23508D"),
        p(`Document date: 12 September 2026`),
        divider(),
        h1("How to use this pack"),
        p("1. Each platform section has different captions — do not paste the same text everywhere."),
        p("2. Facebook: longer, conversational, light hashtags. Instagram: shorter lines, more hashtags, link in bio + URL in caption where allowed. LinkedIn: professional tone, fewer hashtags, insight-led."),
        p("3. In Facebook Groups: answer the thread first; soft-share the tool second. Read group rules."),
        p("4. Optional UTM on links: ?utm_source=facebook|instagram|linkedin&utm_medium=organic&utm_campaign=social_pack_sep2026"),
        p("5. Pair with Canva creatives (logo from site brand assets). Avoid spammy “click ads” language."),
        divider(),
        ...sectionBlocks(
          "Facebook — 10 posts",
          "Tone: neighbourly DIY help. Hashtags: 3–6. Good for Pages + relevant Groups (value first).",
          facebook,
        ),
        ...sectionBlocks(
          "Instagram — 10 posts",
          "Tone: short, scannable, save-worthy. Put primary link in bio; repeat key URL in caption. Hashtags: 8–15 niche tags.",
          instagram,
        ),
        ...sectionBlocks(
          "LinkedIn — 10 posts",
          "Tone: professional, process and risk framing. Hashtags: 3–5. Comment with the URL if you keep the post cleaner.",
          linkedin,
        ),
        h1("Quick posting calendar (optional)"),
        p("Week 1: FB1, IG1, LI1 · FB2, IG2, LI2 · FB3, IG3, LI3"),
        p("Week 2: FB4–6, IG4–6, LI4–6"),
        p("Week 3: FB7–10, IG7–10, LI7–10"),
        p("Adjust to your capacity — 3–5 quality posts/week beats daily spam."),
        divider(),
        p(`© ${new Date().getFullYear()} ${brand} — internal marketing pack. Customize freely.`),
      ],
    },
  ],
});

const buffer = await Packer.toBuffer(doc);
writeFileSync(outPath, buffer);
console.log("Wrote", outPath);
