import type { Tool } from "@/lib/types";
import { extraTools } from "@/lib/data/tools-extra";

const coreTools: Tool[] = [
  {
    slug: "concrete-calculator",
    category: "construction",
    name: "Concrete Calculator",
    metaTitle: "Concrete Calculator – Cubic Yards, Bags & Slab Volume",
    metaDescription:
      "Calculate concrete volume for a slab, patio, or footing in cubic yards or cubic metres. Includes waste allowance, bag counts, and a planning cost range.",
    keywords: "concrete calculator, cubic yards concrete, concrete slab calculator, how much concrete do I need",
    shortDescription: "Work out how much ready-mix concrete a slab, footing, or column needs.",
    intro:
      "Enter the length, width, and depth of the area you're pouring to get the concrete volume, a recommended order quantity with waste allowance, and an estimated material cost.",
    synonyms: ["slab", "driveway", "footing", "patio base", "foundation", "cement"],
    formulaExplanation: [
      "Concrete volume is length × width × depth, with all three dimensions converted to the same unit before multiplying. Depth is usually the smallest of the three, so it's easy to enter it in the wrong unit — this calculator keeps depth in inches (or centimetres) specifically because that's how depth is specified on a real set of plans.",
      "Ready-mix suppliers and bagged concrete are both sold in fixed volume increments, so this calculator adds a waste allowance on top of the raw volume before recommending an order quantity — pouring exactly the calculated volume with no allowance for spillage, an uneven subgrade, or over-excavation almost always comes up short.",
    ],
    methodology:
      "Volume = Length × Width × Depth. Cubic yards = Volume (ft³) ÷ 27. Recommended order = Volume × (1 + waste %).",
    workedExample: {
      title: "A 10 ft × 10 ft patio slab, 4 in thick",
      steps: [
        "Convert depth to feet: 4 in ÷ 12 = 0.33 ft",
        "Volume = 10 ft × 10 ft × 0.33 ft = 33.3 ft³",
        "Cubic yards = 33.3 ÷ 27 = 1.23 yd³",
        "With a 10% waste allowance: 1.23 × 1.10 = 1.36 yd³ — round up to what your supplier can deliver.",
      ],
    },
    faq: [
      {
        question: "How thick should a concrete slab be?",
        answer:
          "A typical patio or walkway slab is 4 inches (10 cm) thick. Driveways for cars are usually 5–6 inches (13–15 cm), and slabs carrying heavier vehicles go thicker still. Check local building code for load-bearing requirements before pouring.",
      },
      {
        question: "Should I order ready-mix or use bagged concrete?",
        answer:
          "Ready-mix delivery is almost always cheaper and less labor once you're above roughly 1 cubic yard (0.75 m³). Below that, bagged concrete mixed on site is usually more practical — this calculator shows both.",
      },
      {
        question: "Why does the recommended quantity include extra on top of the calculated volume?",
        answer:
          "The waste allowance covers an uneven subgrade, spillage, and minor over-excavation. Most contractors add 5–10%; irregular or hand-dug forms often need closer to 10–15%.",
      },
      {
        question: "Does this include rebar or a gravel sub-base?",
        answer:
          "No — this calculator estimates concrete volume only. Sub-base gravel is estimated separately with the Gravel Calculator, and rebar/mesh requirements depend on your local code and the slab's use.",
      },
      {
        question: "How much concrete for a 10×10 patio at 4 inches?",
        answer:
          "About 1.23 cubic yards before waste. With 10% waste, order 1.36 yd³. Enter your exact dimensions above — a 6-inch driveway pad on the same footprint needs 50% more volume.",
      },
      {
        question: "Can I switch between US and UK units?",
        answer:
          "Yes. Toggle feet/inches or metres/centimetres at the top. Depth stays in inches or centimetres because that is how plans specify slab thickness.",
      },
    ],
    relatedTools: ["gravel-calculator", "concrete-bag-calculator", "concrete-cost-calculator", "sand-calculator"],
    relatedGuides: ["how-much-does-a-concrete-patio-cost", "concrete-slab-thickness-what-matters"],
    updated: "2026-07-01",
  },
  {
    slug: "gravel-calculator",
    category: "construction",
    name: "Gravel Calculator",
    metaTitle: "Gravel Calculator – Cubic Yards, Tons & Driveway Base",
    metaDescription:
      "Estimate gravel volume and weight for a driveway, path, or sub-base. Enter length, width, and depth for cubic yards, tons, and material cost.",
    keywords: "gravel calculator, tons of gravel, driveway gravel, crushed stone calculator, gravel coverage",
    shortDescription: "Estimate gravel volume and weight for a driveway, path, or sub-base.",
    intro:
      "Enter the area's length, width, and desired depth to get the gravel volume and an estimated weight, since gravel is typically sold and delivered by the ton.",
    synonyms: ["driveway base", "sub-base", "aggregate", "crushed stone", "path"],
    formulaExplanation: [
      "Like concrete, gravel volume is length × width × depth. Because gravel is priced and delivered by weight rather than volume in most of the US and UK, this calculator converts the volume to an estimated tonnage using a typical compacted-gravel density.",
      "Density varies by material — crushed limestone, pea gravel, and river rock all settle differently — so the weight shown here is a planning estimate. Your supplier can give an exact figure for the specific material you're ordering.",
    ],
    methodology:
      "Volume = Length × Width × Depth. Weight (US tons) ≈ Volume (yd³) × 1.4. Weight (tonnes) ≈ Volume (m³) × 1.6.",
    workedExample: {
      title: "A 20 ft × 3 ft path, 3 in deep",
      steps: [
        "Convert depth to feet: 3 in ÷ 12 = 0.25 ft",
        "Volume = 20 ft × 3 ft × 0.25 ft = 15 ft³",
        "Cubic yards = 15 ÷ 27 = 0.56 yd³",
        "Estimated weight = 0.56 × 1.4 ≈ 0.78 tons",
      ],
    },
    faq: [
      {
        question: "How deep should a gravel driveway be?",
        answer:
          "A single-layer gravel driveway is typically 4 inches (10 cm) deep; a full sub-base-and-topping build can run 6–8 inches (15–20 cm) across two layers.",
      },
      {
        question: "Why does the calculator show weight instead of just volume?",
        answer:
          "Most gravel suppliers quote and deliver by the ton, not the cubic yard, so a weight estimate is more directly useful for ordering — the volume is shown too so you can sanity-check it.",
      },
      {
        question: "Does gravel need compacting before I add a top layer?",
        answer:
          "Yes for driveways and paths that will bear weight — an uncompacted sub-base settles unevenly. Compaction can reduce the finished depth by 10–20%, which this calculator does not account for.",
      },
      {
        question: "What's the difference between gravel and crushed stone for a base layer?",
        answer:
          "Crushed, angular stone locks together and compacts more stably than rounded gravel, which is why it's the more common choice under driveways and patios. Rounded pea gravel is more often used as a decorative top layer.",
      },
      {
        question: "How much gravel for a 20-foot driveway?",
        answer:
          "Depends on width and depth. A 20 ft × 12 ft strip at 4 in deep is about 3 yd³ or roughly 4.2 tons. Enter your width — a single-car drive is often 10–12 ft wide.",
      },
    ],
    relatedTools: ["concrete-calculator", "sand-calculator", "gravel-cost-calculator"],
    relatedGuides: ["how-much-gravel-for-a-driveway", "patio-base-gravel-before-concrete"],
    updated: "2026-07-01",
  },
  {
    slug: "mulch-calculator",
    category: "landscaping",
    name: "Mulch Calculator",
    metaTitle: "Mulch Calculator – Cubic Yards, Bags & Garden Bed Coverage",
    metaDescription:
      "Find how much mulch a garden bed needs in cubic yards or bags. Enter bed length, width, and depth for volume and bag count.",
    keywords: "mulch calculator, how much mulch do I need, mulch bags, garden bed mulch, cubic yards mulch",
    shortDescription: "Find out how many bags or cubic yards of mulch a garden bed needs.",
    intro:
      "Enter the length and width of your garden bed and a target depth to get the mulch volume, plus how many standard bags that works out to.",
    synonyms: ["garden bed", "wood chips", "landscaping bark", "flower bed"],
    formulaExplanation: [
      "Mulch is spread much thinner than concrete or gravel — typically 2 to 4 inches — so small depth errors change the total by a large percentage. This calculator keeps depth as its own clearly labeled field rather than folding it into a single 'thickness' guess.",
      "Because mulch is most often bought in bags of a fixed volume, the result also converts the total cubic yardage into a bag count using a standard 2 cubic foot bag, so you know how many bags to actually put in the cart.",
    ],
    methodology:
      "Volume = Area × Depth. Cubic yards = Volume (ft³) ÷ 27. Bags (2 ft³ each) = Volume (ft³) ÷ 2, rounded up.",
    workedExample: {
      title: "A 12 ft × 4 ft garden bed, 3 in of mulch",
      steps: [
        "Area = 12 ft × 4 ft = 48 ft²",
        "Convert depth to feet: 3 in ÷ 12 = 0.25 ft",
        "Volume = 48 ft² × 0.25 ft = 12 ft³",
        "Cubic yards = 12 ÷ 27 = 0.44 yd³",
        "Bags needed = 12 ft³ ÷ 2 ft³ per bag = 6 bags",
      ],
    },
    faq: [
      {
        question: "How deep should mulch be?",
        answer:
          "2 to 3 inches (5–7.5 cm) is the standard depth for most garden beds. Go thicker than 4 inches (10 cm) and it can start to suffocate roots or hold too much moisture against stems.",
      },
      {
        question: "Is it cheaper to buy mulch in bags or bulk?",
        answer:
          "Bulk (delivered by the cubic yard) is almost always cheaper once you need more than about 3 cubic yards — bagged mulch carries a per-bag packaging and handling cost that adds up fast at that volume.",
      },
      {
        question: "Do I need to remove old mulch before adding new mulch?",
        answer:
          "Not usually — a thin layer of old, broken-down mulch can stay as long as the combined depth doesn't exceed 3–4 inches. Rake it out first if it's matted or more than an inch thick.",
      },
      {
        question: "Does this calculator account for mulch settling over time?",
        answer:
          "No — it calculates the volume needed to reach your target depth at the time of spreading. Organic mulch typically compresses 10–20% over its first season, which is worth keeping in mind if you're topping up rather than starting fresh.",
      },
    ],
    relatedTools: ["gravel-calculator", "paver-calculator"],
    relatedGuides: ["how-much-mulch-do-you-need"],
    updated: "2026-06-15",
  },
  {
    slug: "paint-calculator",
    category: "painting",
    name: "Paint Calculator",
    metaTitle: "Paint Calculator – Gallons & Litres for a Room",
    metaDescription:
      "Calculate how much paint a room needs from wall area and coat count. Door and window deductions included for gallons or litres.",
    keywords: "paint calculator, how much paint for a room, gallons of paint, wall paint coverage, litres of paint",
    shortDescription: "Estimate how much paint a room needs, based on wall area and coats.",
    intro:
      "Enter your room's dimensions, how many coats you're applying, and any doors or windows to deduct, to get the paint quantity needed.",
    synonyms: ["room paint", "wall paint", "coverage", "gallons of paint", "litres of paint"],
    formulaExplanation: [
      "Wall area starts from the room's perimeter (2 × (length + width)) multiplied by ceiling height, then subtracts a standard allowance for each door and window — painters call this the 'gross-to-net' area, and skipping the deduction is the most common reason people over-buy paint.",
      "Paint coverage is quoted per coat, so the net wall area is multiplied by the number of coats before converting to gallons or litres using a standard coverage rate. Textured walls, unprimed drywall, and strong color changes all reduce real coverage below the can's rated figure.",
    ],
    methodology:
      "Net area = (2 × (Length + Width) × Height) − (Doors × 21 ft² + Windows × 15 ft²). Paint needed = Net area × Coats ÷ 350 ft² per gallon.",
    workedExample: {
      title: "A 12 ft × 10 ft room, 8 ft ceilings, 1 door, 2 windows, 2 coats",
      steps: [
        "Perimeter = 2 × (12 + 10) = 44 ft",
        "Gross wall area = 44 ft × 8 ft = 352 ft²",
        "Deductions = (1 × 21) + (2 × 15) = 51 ft²",
        "Net area = 352 − 51 = 301 ft²",
        "Paint needed = 301 × 2 coats ÷ 350 ft²/gal = 1.72 gal → round up to 2 gallons",
      ],
    },
    faq: [
      {
        question: "How many coats of paint do I actually need?",
        answer:
          "Two coats is standard for a color change or a wall in average condition. One coat can work over a very close existing color with a high-quality paint-and-primer product; three coats are common when covering a dark color with a light one.",
      },
      {
        question: "Should I round up or down on the gallon count?",
        answer:
          "Always round up. Running short mid-wall means a delay while the exact color re-mixes, and re-mixed batches can vary slightly (\"batch variation\"), which sometimes shows as a visible line.",
      },
      {
        question: "Does this include the ceiling?",
        answer:
          "No — this calculator estimates wall paint only. Ceilings are typically a different product (flat, stain-blocking) and should be calculated separately using the room's floor area.",
      },
      {
        question: "Why does the estimate not match the coverage number on my paint can?",
        answer:
          "Can labels quote coverage for a smooth, primed surface. Textured walls, unprimed drywall, and porous surfaces like new plaster all absorb more paint — budgeting an extra 10% is reasonable in those cases.",
      },
    ],
    relatedTools: ["paint-cost-calculator", "flooring-calculator", "drywall-calculator"],
    relatedGuides: ["how-much-paint-for-a-room", "interior-painting-cost-breakdown"],
    updated: "2026-06-20",
  },
  {
    slug: "flooring-calculator",
    category: "flooring",
    name: "Flooring Calculator",
    metaTitle: "Flooring Calculator – Boxes Needed With Waste Allowance",
    metaDescription:
      "Work out how many flooring boxes to buy for a room. Enter dimensions, box coverage, and waste percent for laminate, vinyl, or hardwood.",
    keywords: "flooring calculator, laminate boxes, hardwood flooring estimate, flooring waste factor, vinyl plank boxes",
    shortDescription: "Work out how many boxes of flooring to buy for a room, with waste included.",
    intro:
      "Enter your room's dimensions, a waste allowance, and how much area one box covers, to get the number of boxes to order.",
    synonyms: ["laminate", "hardwood", "vinyl plank", "tile", "square footage"],
    formulaExplanation: [
      "Flooring is sold by the box, and boxes cover a fixed area — so the calculation isn't just room area, it's room area plus a waste allowance, divided by box coverage and rounded up, since a partial box still has to be bought in full.",
      "The waste allowance exists because flooring is cut to fit around the room's edges, and every cut produces an offcut that usually can't be reused. Diagonal layouts and rooms with lots of alcoves need a higher allowance than a simple rectangular room.",
    ],
    methodology:
      "Area = Length × Width. Total with waste = Area × (1 + waste %). Boxes = Total with waste ÷ coverage per box, rounded up.",
    workedExample: {
      title: "A 14 ft × 11 ft room, 10% waste, 22 ft² per box",
      steps: [
        "Area = 14 ft × 11 ft = 154 ft²",
        "Total with waste = 154 × 1.10 = 169.4 ft²",
        "Boxes = 169.4 ÷ 22 = 7.7 → round up to 8 boxes",
      ],
    },
    faq: [
      {
        question: "How much waste allowance should I use for flooring?",
        answer:
          "10% is standard for a simple rectangular room laid straight. Use 15% for a room with lots of corners or alcoves, and 15–20% for a diagonal layout, since diagonal cuts waste more material.",
      },
      {
        question: "Should I buy extra boxes beyond the calculated amount?",
        answer:
          "Many installers recommend keeping one full box left over after the job for future repairs — dye lots change between production runs, so matching flooring bought later isn't guaranteed.",
      },
      {
        question: "Does box coverage account for underlayment or trim?",
        answer:
          "No — this calculator estimates the flooring material only. Underlayment, transition strips, and baseboard/trim are typically calculated and purchased separately.",
      },
      {
        question: "What if my room isn't a simple rectangle?",
        answer:
          "Split the room into rectangular sections, calculate each one separately, and add the results together — this keeps each calculation accurate rather than estimating an irregular shape in one step.",
      },
    ],
    relatedTools: ["tile-calculator", "paint-calculator"],
    relatedGuides: ["how-to-estimate-flooring-with-waste", "waste-factors-explained"],
    updated: "2026-06-10",
  },
  {
    slug: "decking-calculator",
    category: "deck-fence",
    name: "Decking Calculator",
    metaTitle: "Decking Calculator – Board Count With Gap & Waste",
    metaDescription:
      "Estimate deck boards for a rectangular deck. Enter deck size, board width, gap, and waste allowance.",
    keywords: "deck calculator, deck boards needed, composite decking calculator, deck board count",
    shortDescription: "Estimate how many deck boards you need for a given deck area.",
    intro:
      "Enter your deck's length and width plus your board width, to get the total board count assuming boards run the length of the deck.",
    synonyms: ["deck boards", "composite decking", "patio deck", "boardwalk"],
    formulaExplanation: [
      "This calculator assumes the common layout where boards run the full length of the deck, laid side-by-side across its width — the number of boards is the deck's width divided by a single board's face width (plus its gap), rounded up.",
      "A waste allowance is added on top for trimming board ends and any cutting around posts or stairs — composite and hardwood boards both lose some usable length to end-cuts.",
    ],
    methodology:
      "Boards across width = Deck width ÷ (Board face width + gap), rounded up. Total boards = Boards across width × (1 + waste %), rounded up.",
    workedExample: {
      title: "A 16 ft × 12 ft deck, 5.5 in boards with a 0.25 in gap, running the 16 ft length",
      steps: [
        "Board footprint = 5.5 in + 0.25 in = 5.75 in = 0.479 ft",
        "Boards across the 12 ft width = 12 ÷ 0.479 = 25.05 → 26 boards",
        "With a 10% waste allowance: 26 × 1.10 = 28.6 → 29 boards",
        "Assumes boards are available in lengths that span or can be joined across the 16 ft run.",
      ],
    },
    faq: [
      {
        question: "What gap should I leave between deck boards?",
        answer:
          "1/4 inch (6 mm) is standard for pressure-treated wood to allow for expansion; composite decking typically calls for 3/16–1/4 inch (5–6 mm) — check your specific product's installation guide.",
      },
      {
        question: "Does this calculator account for joist spacing or fasteners?",
        answer:
          "No — it estimates deck boards only. Joists, hangers, and fasteners depend on your framing plan and local building code and should be calculated separately.",
      },
      {
        question: "What if my deck has an unusual shape, like an L-shape or angled corner?",
        answer:
          "Split it into rectangular sections, run the calculator for each, and add the board counts together — the same approach used for irregular flooring layouts.",
      },
      {
        question: "Should boards run the length or width of the deck?",
        answer:
          "Most decks run boards along the longer dimension for fewer seams and a cleaner look, which is the assumption this calculator uses. Boards perpendicular to the house are also common for drainage — swap length and width when entering your measurements if that's your layout.",
      },
    ],
    relatedTools: ["fence-calculator", "gravel-calculator", "concrete-calculator"],
    relatedGuides: ["how-to-estimate-decking-boards"],
    updated: "2026-05-28",
  },
  {
    slug: "roofing-calculator",
    category: "roofing",
    name: "Roofing Calculator",
    metaTitle: "Roofing Calculator – Squares, Bundles & Pitch-Adjusted Area",
    metaDescription:
      "Estimate roof area, squares, and shingle bundles from building footprint and pitch. Includes waste allowance for hips and valleys.",
    keywords: "roofing calculator, roof squares calculator, shingle bundles, roof pitch calculator, how many bundles of shingles",
    shortDescription: "Estimate roof area, squares, and shingle bundles from a plan footprint and pitch.",
    intro:
      "Enter the roof's plan length and width plus the pitch rise. The calculator converts that footprint into sloped area, adds waste, and reports squares (US) or square metres (UK) with a bundle count.",
    synonyms: ["shingles", "roof squares", "asphalt shingles", "roof pitch", "tiles", "re-roof"],
    formulaExplanation: [
      "Roofing is quoted from the sloped surface, not the floor-plan rectangle. A 6/12 pitch is longer than a flat rectangle of the same footprint — the pitch factor is √(1 + (rise ÷ run)²), using a 12-inch run, which is how US roofers write pitch.",
      "Materials are sold in squares of 100 square feet in the US (typically three bundles per square) and by pack coverage in the UK. A waste allowance covers hips, valleys, starter courses, and ridge caps — a simple gable needs less than a roof with dormers.",
    ],
    methodology:
      "Footprint = Length × Width. Pitch factor = √(1 + (rise/12)²). Roof area = Footprint × pitch factor. With waste = Roof area × (1 + waste %). Squares = area (ft²) ÷ 100. Bundles ≈ squares × 3, rounded up.",
    workedExample: {
      title: "A 40 ft × 30 ft gable, 6/12 pitch, 10% waste",
      steps: [
        "Footprint = 40 × 30 = 1,200 ft²",
        "Pitch factor = √(1 + (6/12)²) = √1.25 ≈ 1.118",
        "Roof area = 1,200 × 1.118 ≈ 1,342 ft²",
        "With 10% waste = 1,476 ft² → 14.76 squares → 45 bundles at 3 per square",
      ],
    },
    faq: [
      {
        question: "How do I measure roof length and width without climbing on the roof?",
        answer:
          "Use the building's exterior footprint from the ground or a plan: length along the ridge, width from eave to eave. This calculator applies the pitch factor so you do not need the slope length.",
      },
      {
        question: "What pitch should I enter for a nearly flat roof?",
        answer:
          "Enter 0 for a membrane or felt flat roof. Low-slope roofs (1/12–2/12) still need a small pitch factor; when in doubt, a roofer's takeoff from drawings is safer than guessing pitch from the street.",
      },
      {
        question: "Does this include underlayment, flashing, or ridge cap?",
        answer:
          "No — it estimates field shingles or tiles only. Underlayment is typically the same area plus overlap; flashing and ridge are separate line items on a materials list.",
      },
      {
        question: "Why add waste if I measured carefully?",
        answer:
          "Starter strips, ridge, hips, valleys, and cut-offs around chimneys are not in the simple rectangle. Ten percent is a planning default for a simple gable; complicated roofs often need 15% or more.",
      },
    ],
    relatedTools: ["cost-estimator", "drywall-calculator"],
    relatedGuides: ["how-to-estimate-roofing-materials"],
    updated: "2026-08-01",
  },
  {
    slug: "drywall-calculator",
    category: "home-improvement",
    name: "Drywall Calculator",
    metaTitle: "Drywall Calculator – Sheets for Walls & Ceiling",
    metaDescription:
      "Calculate drywall or plasterboard sheets for a room. Enter length, width, height, and waste for walls and optional ceiling.",
    keywords: "drywall calculator, plasterboard sheets, sheetrock calculator, how many drywall sheets",
    shortDescription: "Work out how many plasterboard or drywall sheets a room needs, including the ceiling.",
    intro:
      "Enter the room's length, width, and ceiling height. The calculator totals wall area, optionally adds the ceiling, applies waste, and rounds up to full 4×8 ft (or 1200×2400 mm) sheets.",
    synonyms: ["plasterboard", "sheetrock", "gypsum board", "wallboard", "boarding"],
    formulaExplanation: [
      "Wall area is the room perimeter times ceiling height: 2 × (length + width) × height. The ceiling is the floor rectangle. Openings are not deducted because offcuts from doors and windows rarely equal a full sheet, and leftover pieces are useful for soffits and patches.",
      "Sheets are sold in fixed sizes. Dividing total area by one sheet and rounding up is how suppliers count an order. A waste allowance covers miscuts and damaged boards.",
    ],
    methodology:
      "Wall area = 2 × (Length + Width) × Height. Ceiling = Length × Width (if included). Total with waste = (walls + ceiling) × (1 + waste %). Sheets = Total ÷ sheet area, rounded up.",
    workedExample: {
      title: "A 16 ft × 12 ft room, 8 ft ceilings, walls and ceiling, 10% waste, 4×8 sheets",
      steps: [
        "Wall area = 2 × (16 + 12) × 8 = 448 ft²",
        "Ceiling = 16 × 12 = 192 ft²",
        "Gross = 640 ft²; with 10% waste = 704 ft²",
        "Sheet area = 32 ft²; 704 ÷ 32 = 22 sheets",
      ],
    },
    faq: [
      {
        question: "Should I deduct doors and windows?",
        answer:
          "You can mentally subtract large openings, but most hangers still round up to full sheets. This calculator does not deduct openings so you are less likely to run short.",
      },
      {
        question: "What sheet size does this assume?",
        answer:
          "US: 4×8 ft (32 ft²). UK: 1200×2400 mm. If you are hanging 4×12 ft boards, you will need fewer sheets for the same area — divide the coverage figure by 48 ft² instead.",
      },
      {
        question: "Does this include joint compound and tape?",
        answer:
          "No — only boards. Compound, tape, screws, and corner bead depend on the finish level (typically 3–5) and should be listed separately.",
      },
      {
        question: "How much waste should I add?",
        answer:
          "Ten percent is reasonable for a rectangular room. Use 15% if there are many corners, arched openings, or you are hanging for the first time.",
      },
    ],
    relatedTools: ["insulation-calculator", "paint-calculator", "cost-estimator"],
    relatedGuides: ["how-much-drywall-for-a-room"],
    updated: "2026-08-01",
  },
  {
    slug: "cost-estimator",
    category: "cost-estimation",
    name: "Project Cost Estimator",
    metaTitle: "Project Cost Estimator – Materials, Labour & Markup",
    metaDescription:
      "Roll up materials, labour, delivery, waste, and markup into a home project planning total. Compare contractor quotes with your own numbers.",
    keywords: "project cost estimator, home renovation budget, contractor quote comparison, renovation cost calculator",
    shortDescription: "Roll materials, labor, delivery, waste, and optional markup into a planning total.",
    intro:
      "Enter the cost lines you already know. The estimator adds waste to materials, then labour and delivery, applies optional markup, and shows a range so the figure is clearly an estimate — not a contractor quote.",
    synonyms: ["budget", "quote", "estimate", "markup", "project cost", "renovation budget"],
    formulaExplanation: [
      "A project total is not a single material quantity. It is materials (with waste), labour, delivery or skip hire, and — for trades — markup. Keeping those lines separate makes it obvious which part of a quote you can check with a calculator and which part is labour.",
      "The result is shown as a ±10% range because local rates and unforeseen work move the number. This tool does not look up regional prices; you supply the inputs from supplier quotes or from the material calculators on this site.",
    ],
    methodology:
      "Materials with waste = Materials × (1 + waste %). Subtotal = materials with waste + labor + delivery. Total = Subtotal × (1 + markup %). Range = Total × 0.9 to Total × 1.1.",
    workedExample: {
      title: "Materials $2,400, labor $1,800, delivery $150, 10% waste, 0% markup",
      steps: [
        "Materials with waste = 2,400 × 1.10 = $2,640",
        "Subtotal = 2,640 + 1,800 + 150 = $4,590",
        "No markup → planning total $4,590",
        "Shown as a range: about $4,130 – $5,050",
      ],
    },
    faq: [
      {
        question: "Is this a substitute for a contractor's quote?",
        answer:
          "No. It is a way to organise numbers you already have so a quote is easier to compare. Structural work, permits, and site conditions are not priced here.",
      },
      {
        question: "Should homeowners add markup?",
        answer:
          "Usually no. Markup is for a trade quoting a job. Homeowners can leave it at 0% and still add a contingency in the waste line or in a separate savings buffer.",
      },
      {
        question: "How do I fill the materials line?",
        answer:
          "Run the relevant calculators (concrete, paint, flooring, and so on), note the estimated material cost on each, and add them together here.",
      },
      {
        question: "Why show a range instead of one total?",
        answer:
          "A single figure looks more precise than a planning estimate is. A range makes it clear that local prices and extras will move the number.",
      },
    ],
    relatedTools: ["concrete-calculator", "roofing-calculator", "paint-calculator"],
    relatedGuides: ["planning-a-home-improvement-budget", "how-to-compare-contractor-quotes"],
    updated: "2026-08-01",
  },
];

export const tools: Tool[] = [...coreTools, ...extraTools];

export function getTool(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter((t) => t.category === category);
}

export function getRelatedTools(tool: Tool): Tool[] {
  return tool.relatedTools
    .map((slug) => getTool(slug))
    .filter((t): t is Tool => Boolean(t));
}
