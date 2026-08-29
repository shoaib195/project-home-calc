import type { Guide } from "@/lib/types";

export const guides: Guide[] = [
  {
    slug: "how-much-does-a-concrete-patio-cost",
    title: "How Much Does a Concrete Patio Cost?",
    description:
      "A breakdown of what drives concrete patio pricing — materials, labor, finish, and the factors that push an estimate up or down.",
    updated: "2026-08-01",
    relatedTools: ["concrete-calculator", "gravel-calculator", "cost-estimator"],
    intro:
      "Concrete patio pricing swings more than most homeowners expect — a basic broom-finish slab and a stamped, colored one can differ by two to three times per square foot. This guide walks through what actually makes up that number so a quote makes sense before you get one.",
    sections: [
      {
        heading: "What's included in the price",
        body: [
          "A concrete patio quote is typically made up of four components: materials (concrete, sub-base gravel, reinforcement), labor (excavation, formwork, pouring, finishing), equipment (concrete pump or mixer truck access), and finish (plain broom finish versus stamped, exposed-aggregate, or colored concrete).",
          "Labor is usually the largest single line item on a straightforward slab — pouring and finishing concrete correctly is skilled, time-sensitive work, and it's the part of the price that varies most by region and contractor experience.",
        ],
      },
      {
        heading: "Typical thickness and why it matters",
        body: [
          "A patio people walk on is commonly 4 inches (about 100 mm) thick. Driveways and slabs that take vehicles are thicker. Thickness is the quiet multiplier in a materials quote: going from 4 inches to 6 inches is a 50% increase in concrete volume for the same footprint.",
          "Use the Concrete Calculator with your actual length, width, and depth before you compare quotes. If two contractors propose different thicknesses, the material line will not match even when the patio looks the same on a plan.",
        ],
      },
      {
        heading: "What pushes the price up",
        body: [
          "Decorative finishes (stamping, staining, exposed aggregate) typically add a large premium over a plain broom finish, since they require extra labour steps and specialised tools.",
          "Difficult site access — a backyard a concrete truck cannot reach, for example — often means paying for a concrete pump or for the crew to wheelbarrow material by hand, both of which add labour cost.",
          "Poor existing soil that needs extra excavation, compaction, or a thicker gravel sub-base adds both material and labour time before the pour even starts.",
        ],
      },
      {
        heading: "Getting an accurate estimate for your project",
        body: [
          "Start with the Concrete Calculator to get your own material volume — having that number ready makes it easier to sanity-check a contractor's material line item against their labour line item. Estimate the gravel sub-base separately with the Gravel Calculator.",
          "Get at least two or three quotes from local contractors for anything beyond a small DIY slab. Concrete pricing is heavily regional — ready-mix delivery cost alone can vary significantly by market — so a national average is only a starting point, not a substitute for a local quote.",
          "Ask each quote to split materials, labour, and finish. A lump sum is harder to compare and easier to misunderstand when extras appear.",
        ],
      },
    ],
    faq: [
      {
        question: "Is it cheaper to DIY a concrete patio?",
        answer:
          "Materials alone are far cheaper than a full contractor quote, but concrete work is unforgiving of mistakes — a poorly finished or improperly cured slab can crack or need replacing. DIY makes the most sense for small, simple slabs where mistakes are lower-stakes.",
      },
      {
        question: "How long does a concrete patio take to cure before I can use it?",
        answer:
          "Concrete is typically safe to walk on after 24–48 hours and can handle furniture after about a week, but it continues curing for roughly 28 days — avoid heavy loads like vehicles or hot tubs until then.",
      },
      {
        question: "Does patio size affect the price per square foot?",
        answer:
          "Yes — smaller patios often cost more per square foot because setup, formwork, and minimum crew time don't scale down proportionally. A very small slab can carry a similar labour cost to a moderately larger one.",
      },
    ],
  },
  {
    slug: "planning-a-home-improvement-budget",
    title: "Planning a Home Improvement Budget That Survives Contact With Reality",
    description:
      "A practical framework for budgeting a renovation project, including how much contingency to actually set aside.",
    updated: "2026-08-01",
    relatedTools: ["cost-estimator", "paint-calculator", "flooring-calculator", "drywall-calculator"],
    intro:
      "Most renovation budgets don't fail because the homeowner didn't plan — they fail because the plan didn't leave room for what planning can't predict. This guide covers how to structure a project budget so a surprise doesn't become a crisis.",
    sections: [
      {
        heading: "Start with materials, not the whole project",
        body: [
          "Material costs are the most predictable part of a project and the easiest to estimate accurately — use the relevant calculator for each material (concrete, flooring, paint, drywall, and so on) to build a materials subtotal before pricing labour.",
          "Pricing materials first also gives you a number to compare contractor quotes against: if a quote's material line is dramatically higher than your own estimate, it's worth asking why.",
        ],
      },
      {
        heading: "Set a contingency — and don't touch it early",
        body: [
          "A 10–20% contingency on top of your full estimated budget is standard advice for a reason: older homes especially tend to reveal problems (wiring, water damage, structural issues) once walls or flooring come up.",
          "Treat the contingency as unavailable for scope upgrades. If you want a nicer fixture or a bigger tile partway through, that comes from a separate 'wants' budget — not the buffer that's protecting you from the unknown.",
        ],
      },
      {
        heading: "Sequence spending around irreversible decisions",
        body: [
          "Lock in structural and behind-the-wall decisions (plumbing, electrical, layout changes) before spending on finishes — changing a layout after tile or flooring is installed is far more expensive than getting it right on paper first.",
        ],
      },
      {
        heading: "Roll the numbers into one view",
        body: [
          "Once you have materials, labour, and delivery figures, put them in the Project Cost Estimator. Keep waste on the materials line and leave markup at 0% unless you are quoting as a trade.",
          "The estimator shows a range on purpose. A single confident total is usually false precision. Use the range as a planning band, then confirm with local quotes before you order or hire.",
        ],
      },
    ],
    faq: [
      {
        question: "What percentage of a home's value should a renovation budget be?",
        answer:
          "There's no universal rule — it depends on your goals (living in the home long-term versus resale) and local market. It matters more that the budget matches your actual financial comfort than a rule of thumb.",
      },
      {
        question: "Should I get financing before or after getting quotes?",
        answer:
          "Get a rough budget and at least preliminary quotes first, so you're financing an amount grounded in real numbers rather than guessing and either over-borrowing or coming up short mid-project.",
      },
    ],
  },
  {
    slug: "how-much-paint-for-a-room",
    title: "How Much Paint Do You Need for a Room?",
    description:
      "How painters estimate wall area, coats, and can sizes — and why the number on the tin is not the whole story.",
    updated: "2026-08-01",
    relatedTools: ["paint-calculator", "drywall-calculator"],
    intro:
      "Buying too little paint means a mid-wall delay and a possible batch mismatch. Buying far too much wastes money. This guide explains the same method the Paint Calculator uses, so you can check a tin's coverage claim against a real room.",
    sections: [
      {
        heading: "Measure walls, not floor area",
        body: [
          "Paint for walls is a function of perimeter and ceiling height, not the floor rectangle. Two rooms with the same floor area can need very different paint if one has taller ceilings.",
          "Perimeter is 2 × (length + width). Multiply by height for gross wall area, then subtract a standard allowance for each door and window. The Paint Calculator uses 21 ft² (about 2 m²) per door and 15 ft² (about 1.4 m²) per window.",
        ],
      },
      {
        heading: "Coats and real-world coverage",
        body: [
          "Coverage on a can assumes a smooth, primed surface and one coat at the recommended spread rate. Two coats is the usual job for a colour change. Dark-to-light changes and new plaster or drywall often need more.",
          "A common planning rate is about 350 ft² per gallon (around 12 m² per litre) per coat. Textured walls, unprimed board, and cheap paint all reduce that number. Rounding up to the next tin is cheaper than a second trip when the shop has a different batch.",
        ],
      },
      {
        heading: "Ceilings, trim, and sample pots",
        body: [
          "Ceiling paint is a different product and a different calculation — use the floor area, not the wall formula. Trim and doors are usually a separate enamel or acrylic and should not be folded into the wall estimate.",
          "Sample pots are for deciding colour on the actual wall, in the actual light. They are not a substitute for calculating the full room once you have chosen a colour.",
        ],
      },
      {
        heading: "Worked example",
        body: [
          "A 12 ft × 10 ft room with 8 ft ceilings, one door, and two windows, two coats: gross walls 352 ft², deductions 51 ft², net 301 ft², times two coats is 602 ft². At 350 ft² per gallon that is about 1.7 gallons — round up to 2 gallons.",
          "Run the same dimensions in the Paint Calculator to see the litre equivalent if you are buying in the UK.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I paint a room with one coat?",
        answer:
          "Sometimes, if you are refreshing a similar colour with a high-hide product on a sound surface. For a noticeable colour change, plan on two coats.",
      },
      {
        question: "Should leftover paint go in the estimate?",
        answer:
          "Keep a labelled tin of the final colour for touch-ups. That is a reason to round up, not a reason to buy an extra 5-litre tub 'just in case' for a small room.",
      },
    ],
  },
  {
    slug: "how-to-estimate-roofing-materials",
    title: "How to Estimate Roofing Materials from the Ground",
    description:
      "Turn a building footprint and pitch into squares, bundles, and a planning waste allowance — without treating the result as a roofer's takeoff.",
    updated: "2026-08-01",
    relatedTools: ["roofing-calculator", "cost-estimator"],
    intro:
      "Roofing quotes are easier to read when you already know roughly how much field area you have. You can estimate that from the plan footprint and pitch without walking the roof. This is a planning method, not a substitute for a measured survey on a complex roof.",
    sections: [
      {
        heading: "Footprint first, then pitch",
        body: [
          "Measure or take from drawings the building length along the ridge and the width from eave to eave. That rectangle is the footprint, not the shingle area.",
          "Pitch is written as rise over a 12-inch run. A 6/12 roof rises 6 inches for every 12 inches horizontally. The sloped area is footprint × √(1 + (rise/12)²). The Roofing Calculator applies that factor for you.",
        ],
      },
      {
        heading: "Squares, bundles, and packs",
        body: [
          "In the US, a square is 100 square feet of roof. Asphalt shingles are commonly three bundles per square. In the UK, tiles and felt are sold by coverage per pack — convert the sloped area to square metres and divide by the pack coverage on the product sheet.",
          "Ridge, hips, starter course, and valleys are extra. A simple gable with 10% waste is a planning default. Hips, dormers, and lots of penetrations often need 15% or more.",
        ],
      },
      {
        heading: "What this estimate leaves out",
        body: [
          "Underlayment, ice-and-water shield, flashing, ventilation, and labour are separate. Tear-off of the old roof is a labour and disposal line, not a shingle count.",
          "If the roof is not a simple rectangle — L-shapes, multiple ridges — split it into rectangles, run the calculator for each, and add the results. When the geometry is messy, a roofer's takeoff from drawings is the right next step.",
        ],
      },
      {
        heading: "Using the number in a budget",
        body: [
          "Put the material estimate into the Project Cost Estimator alongside labour if you have a quote. Keep the total labelled as an estimate. Roofing is a safety-critical trade; confirm quantities and specification with a qualified roofer before you order.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I estimate pitch from the street?",
        answer:
          "Roughly, yes, but it is easy to misread. If you cannot see the rise clearly, use a conservative (steeper) pitch for planning or wait for a measured pitch from a roofer.",
      },
      {
        question: "Do architectural shingles use the same bundle count?",
        answer:
          "Many still pack three bundles per square, but always check the wrapper. Some products differ. The calculator's bundle count is a typical asphalt assumption, not a universal rule.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
