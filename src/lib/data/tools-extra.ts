import type { Tool } from "@/lib/types";

/** Additional calculators added to close the gap with competitor coverage. */
export const extraTools: Tool[] = [
  {
    slug: "sand-calculator",
    category: "construction",
    name: "Sand Calculator",
    metaTitle: "Sand Calculator – Tons, Cubic Yards & Bag Count",
    metaDescription:
      "Work out sand volume and weight for a paver base, sandbox, or bedding layer. Enter length, width, and depth for cubic yards, tons, and bag counts.",
    keywords: "sand calculator, paver sand, cubic yards of sand, tons of sand, sandbox sand",
    shortDescription: "Volume and weight for paver bedding, sandboxes, and screed layers.",
    intro:
      "This calculator converts an area and depth into sand volume, estimated bulk weight, and a bag count for smaller jobs. Use it for paver bedding, a sandbox, a screed layer, or general fill once you know which grade of sand the job requires. It does not select the sand type, include compacted gravel below it, calculate mortar proportions, or price excavation, delivery, spreading, and labour. US mode reports cubic yards and short tons, while UK mode uses cubic metres and tonnes; the bag result is only as accurate as the bag yield entered. Moisture and grading change bulk density, so take the calculated volume to your merchant or quarry and ask them to confirm the weight, bag coverage, and product suitability.",
    synonyms: ["paver sand", "bedding sand", "sandbox", "screed", "mortar sand"],
    formulaExplanation: [
      "Sand volume uses the same length × width × depth formula as gravel. The difference is density — dry sand runs lighter than compacted crushed stone, so the tonnage line uses a lower factor.",
      "Bag counts are a rough equivalent for DIY runs to the hardware store. Bulk delivery by the ton is what most patio and driveway bases use once the area gets past a few square feet.",
      "Keep bedding sand separate from the gravel sub-base in your takeoff. Mixing those two volumes into one 'base' number is how patio quotes hide a missing layer.",
      "Wet sand weighs more and bulks differently in a truck. Treat the tonnage line as planning weight and confirm with your yard's product sheet when colour or moisture content matters.",
    ],
    methodology: "Volume = Length × Width × Depth. Cubic yards = ft³ ÷ 27. Tons ≈ yd³ × 1.35 (US) or tonnes ≈ m³ × 1.6 (UK).",
    workedExample: {
      title: "A 12 ft × 8 ft paver base, 2 in deep",
      steps: [
        "Depth in feet: 2 ÷ 12 = 0.17 ft",
        "Volume = 12 × 8 × 0.17 = 16.3 ft³",
        "Cubic yards = 16.3 ÷ 27 = 0.60 yd³",
        "Weight ≈ 0.60 × 1.35 = 0.81 tons",
      ],
    },
    faq: [
      { question: "How deep should paver sand be?", answer: "A screed layer under pavers is usually 1–2 inches (25–50 mm). The compacted gravel sub-base below that is separate — use the Gravel Calculator for that layer." },
      { question: "Washed sand or sharp sand?", answer: "Bedding under pavers is usually concrete sand or sharp sand that compacts flat. Play sand for sandboxes is finer and not suited to structural bases." },
      { question: "Why show tons and bags?", answer: "Suppliers deliver bulk sand by weight. Bags are for topping up a small area or a child's sandbox where a truck is not worth it." },
      { question: "Does this include compaction?", answer: "No. Compacting sand reduces finished depth by roughly 10–15%. Order slightly more if you will screed and compact in layers." },
      { question: "Can I use this for mortar mix?", answer: "It gives you bulk sand volume. Mortar mix ratios are a different calculation — this tool is for bedding and fill quantity only." },
      { question: "US and UK units?", answer: "Toggle feet/inches or metres/centimetres at the top. Cost currency follows the unit system you pick." },
      { question: "Is polymeric joint sand the same?", answer: "No. Joint sand for locking pavers is a separate bagged product. This calculator is for the bedding layer under the pavers." },
      { question: "Sandbox depth?", answer: "Children's sandboxes often use 6–12 inches of play sand. Enter that depth here, but buy play sand — not sharp bedding sand." },
    ],
    relatedTools: ["gravel-calculator", "paver-calculator", "concrete-calculator"],
    relatedGuides: ["how-much-sand-for-a-paver-bed", "planning-a-paver-patio-base", "patio-base-gravel-before-concrete"],
    updated: "2026-09-01",
  },
  {
    slug: "concrete-bag-calculator",
    category: "construction",
    name: "Concrete Bag Calculator",
    metaTitle: "Concrete Bag Calculator – How Many Bags Do You Need?",
    metaDescription:
      "Find how many 60 lb or 80 lb concrete bags you need for a slab, pad, or post hole. Enter dimensions for bag counts with a waste allowance.",
    keywords: "concrete bag calculator, how many bags of concrete, 60 lb concrete bags, 80 lb concrete bags",
    shortDescription: "Bag counts for 60 lb, 80 lb, or 25 kg concrete on small pours.",
    intro:
      "This calculator turns a small concrete pour into counts of 60 lb, 80 lb, or 25 kg premixed bags, including an adjustable waste allowance. Use it for post holes, steps, repair pads, and other pours where a ready-mix truck minimum would cost more than hand mixing. It does not design the footing, choose a mix strength, include reinforcement, gravel, forms, mixer hire, water, or the labour of placing repeated batches. US mode uses feet, inches, and common pound bags; UK mode uses metric dimensions and 25 kg bags, with yield based on a typical product. Bag yields vary by manufacturer, so check the printed yield or ask the retailer to confirm the count before loading the order.",
    synonyms: ["bagged concrete", "post hole concrete", "quick set concrete", "premix bags"],
    formulaExplanation: [
      "Each bag yields a fixed volume once mixed — about 0.45 ft³ for a 60 lb bag and 0.60 ft³ for an 80 lb bag in US sizing. Divide your total volume (with waste) by that yield and round up.",
      "Once you pass roughly one cubic yard (0.75 m³), ready-mix delivery usually beats the cost and labour of hand-mixing dozens of bags. The result note flags that threshold.",
      "For several post holes, calculate one hole from its real diameter and depth, then multiply before adding waste. Do not use the outside post dimensions as the concrete volume without subtracting the post itself when accuracy matters.",
      "Every bag count rounds up because partial bags are not dependable planning units. Compare the final bag weight and number of batches with access, mixer capacity, and the time available to place concrete before it begins setting.",
    ],
    methodology: "Volume = L × W × D × (1 + waste %). Bags = ceil(Volume ÷ bag yield).",
    workedExample: {
      title: "An 8 ft × 8 ft slab, 4 in thick, 10% waste",
      steps: [
        "Volume = 8 × 8 × (4÷12) = 21.3 ft³",
        "With 10% waste: 21.3 × 1.10 = 23.5 ft³",
        "80 lb bags: 23.5 ÷ 0.60 = 40 bags (rounded up)",
        "Ready-mix would be ~0.87 yd³ — a truck may still charge a short-load fee.",
      ],
    },
    faq: [
      { question: "How many bags for a 10×10 slab?", answer: "At 4 in thick with 10% waste, about 50 eighty-pound bags or 67 sixty-pound bags. Use the calculator with your exact depth — driveways often go thicker than patios." },
      { question: "60 lb vs 80 lb bags?", answer: "Eighty-pound bags cover more volume per bag but are heavier to move. The calculator shows both counts so you can buy what your store stocks." },
      { question: "When is bag mix a bad idea?", answer: "Large monolithic slabs, driveways, and anything over ~1 yd³ are faster and often cheaper with ready-mix. Bag mix also makes consistent colour harder on big pours." },
      { question: "Does this include the gravel base?", answer: "No. Sub-base gravel is a separate order. Use the Gravel Calculator for that layer." },
      { question: "What waste percentage should I use?", answer: "10% is a fair default for a simple rectangle. Odd shapes, multiple pours, or sloppy subgrades need 12–15%." },
      { question: "UK bag sizes?", answer: "Switch to metric for 25 kg bag yields. Yields vary slightly by brand — check the label on the bag you buy." },
    ],
    relatedTools: ["concrete-calculator", "concrete-cost-calculator", "gravel-calculator"],
    relatedGuides: ["concrete-slab-thickness-what-matters", "how-much-does-a-concrete-patio-cost", "ready-mix-vs-bagged-concrete", "concrete-for-fence-posts"],
    updated: "2026-09-01",
  },
  {
    slug: "tile-calculator",
    category: "flooring",
    name: "Tile Calculator",
    metaTitle: "Tile Calculator – Boxes, Tile Count & Waste Allowance",
    metaDescription:
      "Calculate how many floor tiles and boxes you need for a room. Enter room size, tile dimensions, and waste percent for a shopping list.",
    keywords: "tile calculator, how many tiles do I need, floor tile boxes, tile waste factor",
    shortDescription: "Tile count and box quantity from room area and tile size.",
    intro:
      "This calculator converts a floor area and tile dimensions into individual tiles and whole boxes, with waste for cuts and breakage. Use it for bathrooms, kitchens, halls, and simple rectangular floors once the tile size, pack count, and laying pattern are chosen. It does not include wall tile, adhesive, grout, backer board, levelling compound, trims, waterproofing, or installation labour. US mode accepts room dimensions in feet and tiles in inches, while UK mode uses metres and centimetres; both round boxes up to a full pack. Tile calibres, batch shades, and pack coverage vary, so take the result to your tile supplier and ask them to confirm box coverage, pattern waste, and whether spare unopened boxes can be returned.",
    synonyms: ["floor tile", "ceramic tile", "porcelain tile", "tile boxes", "tiling"],
    formulaExplanation: [
      "Room area divided by the area of one tile gives a raw tile count. Diagonal layouts, niches, and breakage mean you almost never order that exact number — the waste field adds the buffer trades use.",
      "Boxes are rounded up because stores do not sell half a box. If your tile comes in a different pack size, change the tiles-per-box field in the cost section.",
      "For L-shaped rooms, closets, or shower floors, split the layout into rectangles and total the areas before waste. Deduct fixed cabinets only when tile will definitely stop at their bases.",
      "Nominal tile size may include the intended grout joint or differ slightly from the actual fired size. A supplier can confirm whether the stated box coverage already reflects joints and how a chosen pattern changes cuts.",
    ],
    methodology: "Tiles = ceil((Room area ÷ Tile area) × (1 + waste %)). Boxes = ceil(Tiles ÷ tiles per box).",
    workedExample: {
      title: "A 10 ft × 8 ft bathroom, 12 in × 12 in tiles, 10% waste",
      steps: [
        "Room area = 80 ft²",
        "Tile area = 1 ft × 1 ft = 1 ft²",
        "Raw count = 80 tiles; with 10% waste = 88 tiles",
        "At 10 tiles per box → 9 boxes",
      ],
    },
    faq: [
      { question: "How much tile waste should I add?", answer: "10% covers a straightforward rectangular room with a straight lay. Diagonal patterns, large format tile, or many cuts often need 12–15%." },
      { question: "Does this include wall tile?", answer: "It is set up for floor area. For walls, measure wall area separately or use room perimeter × height minus openings." },
      { question: "Large format tiles?", answer: "Enter the actual tile dimensions. Large tiles have fewer grout lines but break more easily — consider 12–15% waste." },
      { question: "Are adhesive and grout included?", answer: "No. This is tile count and box quantity only. Adhesive coverage depends on trowel size and substrate." },
      { question: "What if my room is not rectangular?", answer: "Split the floor into rectangles, run the calculator for each, and add the tile counts. Irregular rooms need more waste." },
      { question: "UK and US sizes?", answer: "Use the unit toggle. Enter tile size in inches or centimetres as printed on the box." },
    ],
    relatedTools: ["flooring-calculator", "paint-calculator", "cost-estimator"],
    relatedGuides: ["how-to-estimate-flooring-with-waste", "planning-a-small-bathroom-refit-budget", "how-many-tiles-for-a-bathroom-floor"],
    updated: "2026-09-01",
  },
  {
    slug: "brick-calculator",
    category: "construction",
    name: "Brick Calculator",
    metaTitle: "Brick Calculator – Wall Brick Count & Mortar Estimate",
    metaDescription:
      "Estimate how many bricks and mortar bags you need for a wall. Enter wall length, height, brick size, and joint width.",
    keywords: "brick calculator, how many bricks for a wall, brick wall estimate, mortar bags",
    shortDescription: "Brick count and rough mortar for a straight wall.",
    intro:
      "This calculator estimates bricks and a rough mortar allowance for a straight rectangular wall from its dimensions, brick size, joint width, and waste. Use it for early planning of a garden wall, single-leaf wall, or brick veneer before asking a merchant for pallet quantities. It does not design foundations, check wall thickness or stability, subtract openings automatically, count special shapes, or include lintels, ties, coping, reinforcement, delivery, and labour. US mode accepts feet and inch brick sizes, while UK mode uses metres and millimetres; standard brick dimensions and joint conventions differ between the two markets. Give the result, bond pattern, and wall drawing to your brick supplier or mason so they can confirm pack quantities, matching batches, mortar type, and extra units for corners.",
    synonyms: ["brick wall", "masonry", "face brick", "common brick", "bricklaying"],
    formulaExplanation: [
      "Bricks per row is the wall length divided by brick length plus one mortar joint. Rows are wall height divided by brick height plus joint. Multiply and add waste for cuts at ends and openings.",
      "Mortar is highly variable — mix design, joint width, and porous brick all change it. The mortar line is a planning figure based on roughly one bag per 120 bricks for standard work.",
      "Openings for doors and windows should be subtracted from the wall rectangle before you trust a shopping count. Leaving them in is how people over-order by a whole pallet corner.",
      "Bond pattern matters at corners and ends more than in the middle of a long run. Soldier courses and decorative bands need a separate count if they use a different brick size.",
    ],
    methodology: "Bricks per row = floor(Length ÷ (brick + joint)). Rows = ceil(Height ÷ (brick + joint)). Total = rows × bricks per row × (1 + waste %).",
    workedExample: {
      title: "A 20 ft × 8 ft wall, standard US modular brick",
      steps: [
        "Brick + joint ≈ 8 in ÷ 12 + 3/8 in ÷ 12 ≈ 0.70 ft per brick horizontally",
        "Bricks per row ≈ 20 ÷ 0.70 ≈ 28",
        "Rows ≈ 8 ÷ (2.25 in + joint) ≈ 42",
        "Raw count ≈ 1,176 bricks; add 5% waste → ~1,235 bricks",
      ],
    },
    faq: [
      { question: "What brick size should I enter?", answer: "Use the nominal size printed on the spec sheet. US modular is often 8 × 2.25 in; UK standard is 215 × 65 mm plus a 10 mm joint." },
      { question: "Does this work for veneer?", answer: "Yes for a single wythe or veneer layer. Cavity walls and structural block cores need a separate count for the inner leaf." },
      { question: "How accurate is the mortar estimate?", answer: "It is a rough order-of-magnitude for pre-mixed mortar bags. Site-mixed lime mortar or wide joints will differ." },
      { question: "What about windows and doors?", answer: "This assumes a solid rectangle. Subtract openings manually or reduce the wall length/height to net dimensions before calculating." },
      { question: "Why add waste?", answer: "Cuts at corners, damaged bricks on delivery, and mismatched colour lots all eat into a tight count. 5% is a minimum; 10% is safer on small walls." },
      { question: "Single wythe vs double?", answer: "Run the calculator once per leaf if both sides are brick. A brick-on-block wall only needs a count for the outer brick layer." },
      { question: "Garden wall vs house wall?", answer: "The count math is the same. Structural thickness, piers, and caps are design choices — confirm with a mason for anything retaining soil or carrying load." },
      { question: "Does this include pointing only?", answer: "No. For re-pointing an existing wall, see the mortar quantities guide — you are filling joints, not buying whole bricks." },
    ],
    relatedTools: ["concrete-calculator", "sand-calculator", "cost-estimator"],
    relatedGuides: ["how-many-bricks-for-a-garden-wall", "mortar-quantities-for-brickwork", "waste-factors-explained"],
    updated: "2026-09-01",
  },
  {
    slug: "paint-cost-calculator",
    category: "painting",
    name: "Paint Cost Calculator",
    metaTitle: "Paint Cost Calculator – Materials & Labour for a Room",
    metaDescription:
      "Estimate interior painting cost for a room — paint quantity, materials, and decorator labour from room size and coat count.",
    keywords: "paint cost calculator, room painting cost, interior painting estimate, painter cost per room",
    shortDescription: "Materials plus labour for painting a room's walls.",
    intro:
      "This calculator estimates an interior room's wall-paint quantity, material cost, and labour from dimensions, coats, openings, and local rates. Use it to build a planning budget or compare the scope behind decorator quotes before work begins. It excludes ceilings, trim, doors, extensive repairs, specialist primers, scaffolding, furniture removal, tax, and exterior work unless those costs are added separately. US mode uses square feet, gallons, and your dollar rates, while UK mode uses square metres, litres, and pound rates; coverage still comes from the chosen product. Labour and paint prices vary sharply, so confirm coverage and tin sizes with the retailer and ask the painter to state preparation, coats, and exclusions in writing.",
    synonyms: ["painting estimate", "decorator cost", "room paint price", "labour and materials"],
    formulaExplanation: [
      "Wall area follows perimeter × ceiling height, minus standard deductions for doors and windows. Paint volume uses the same coverage rates as the Paint Calculator — about 350 ft² per US gallon per coat.",
      "Labour is entered as a rate per square foot or square metre of wall area. That is how many decorators think about a straightforward box room, though trim, prep, and ceiling work are often priced separately.",
      "The wall-area labour rate is a comparison device, not a universal quoting method. Some decorators price by day or by room, so convert only when the scope includes the same preparation and number of finish coats.",
      "Round paint up to purchasable tin sizes and keep primer or stain blocker as a separate material line. A lower-cost paint that needs an extra coat can cost more once another day of labour is included.",
    ],
    methodology: "Net wall area = (2 × (L + W) × H) − door/window deductions. Paint = area × coats ÷ coverage. Total = paint cost + (area × labour rate).",
    workedExample: {
      title: "A 12 ft × 10 ft room, 8 ft ceilings, 2 coats",
      steps: [
        "Perimeter = 44 ft; gross wall = 44 × 8 = 352 ft²",
        "Less one door and two windows ≈ 316 ft² net",
        "Paint ≈ 1.8 gal at 2 coats",
        "At $38/gal materials + $2.50/ft² labour → planning total near $900",
      ],
    },
    faq: [
      { question: "Is ceiling included?", answer: "No — this targets wall area only. Add ceiling square footage separately or bump the labour rate if your quote includes ceilings." },
      { question: "What labour rate should I use?", answer: "Rates swing by city and finish level. $2–4 per ft² is a common US planning band for walls in decent condition. UK decorators often quote per room — convert to a per-m² rate for comparison." },
      { question: "Prep and primer?", answer: "Not broken out here. Heavy prep, stain blocking, or new plaster may need primer and extra labour — increase the labour rate or materials line." },
      { question: "How does this differ from the Paint Calculator?", answer: "The Paint Calculator focuses on how much paint to buy. This one adds a labour line for a full room price check." },
      { question: "Two coats enough?", answer: "Most colour changes need two coats. Deep colours, red tones, or covering dark paint may need three — change the coat count." },
      { question: "Exterior painting?", answer: "Exterior work has different prep, access, and coverage. Use this for interior box rooms only." },
    ],
    relatedTools: ["paint-calculator", "drywall-calculator", "cost-estimator"],
    relatedGuides: ["interior-painting-cost-breakdown", "how-much-paint-for-a-room", "exterior-house-painting-quantity"],
    updated: "2026-09-01",
  },
  {
    slug: "gravel-cost-calculator",
    category: "construction",
    name: "Gravel Cost Calculator",
    metaTitle: "Gravel Cost Calculator – Material & Delivery Estimate",
    metaDescription:
      "Estimate gravel cost for a driveway or path including delivery. Enter area, depth, price per ton, and delivery fee.",
    keywords: "gravel cost calculator, driveway gravel price, gravel delivery cost, cost per ton gravel",
    shortDescription: "Gravel tonnage with material and delivery cost.",
    intro:
      "This calculator estimates gravel tonnage, material cost, and a delivery line from the area, compacted depth, and supplier price you enter. Use it for a driveway, path, drainage strip, or base layer after choosing the correct aggregate and requesting a local price per ton or tonne. It does not include excavation, geotextile, separate surface layers, compaction loss, machine hire, spreading labour, or minimum-load surcharges unless entered in the fee. US mode works in cubic yards and short tons with dollar pricing; UK mode uses cubic metres and metric tonnes with pound pricing. Because density and haulage vary by product and distance, send the result to the delivering yard and ask them to confirm load weight, minimum charge, and tipping access.",
    synonyms: ["driveway gravel cost", "aggregate price", "crushed stone cost", "gravel delivery"],
    formulaExplanation: [
      "Volume converts to weight using the same density factors as the Gravel Calculator. Suppliers price by the ton, so the cost line multiplies weight by your per-ton figure.",
      "Delivery is a flat add-on because small loads and distance dominate haulage more than the stone itself. Adjust it to match your supplier's minimum load charge.",
      "Run the tool once per layer when you have a sub-base and a surface chip. Adding depths into one pass hides which layer is expensive when a quote changes.",
      "Regional stone prices move with fuel and quarry distance. Replace the default price with a phone quote from a yard that can actually deliver to your postcode or zip.",
    ],
    methodology: "Tons = (L × W × D in ft) ÷ 27 × 1.4. Material cost = tons × price/ton. Total = materials + delivery.",
    workedExample: {
      title: "A 40 ft × 12 ft driveway base, 4 in deep",
      steps: [
        "Volume ≈ 17.8 yd³",
        "Weight ≈ 24.9 tons",
        "At $55/ton → ~$1,370 materials",
        "Plus $75 delivery → ~$1,445 before compaction or top layer",
      ],
    },
    faq: [
      { question: "How is this different from the Gravel Calculator?", answer: "Same volume math. This page leads with a delivery fee and a cost-focused layout for driveway budgeting." },
      { question: "Minimum delivery loads?", answer: "Many quarries charge for a minimum tonnage even on small jobs. If your result is under their minimum, use the minimum tonnage in the price fields." },
      { question: "Separate base and top layer?", answer: "Run the calculator twice — once for sub-base depth and once for the surface chip — and add the totals." },
      { question: "Compacted vs loose volume?", answer: "The density factor assumes compacted aggregate. Loose fill in a truck measures larger before compaction." },
      { question: "UK tonnes?", answer: "Switch to metric for tonnes and price per tonne. Delivery fees in GBP go in the delivery field." },
      { question: "Installation labour?", answer: "Not included. Spread and compact rates vary — add labour through the Project Cost Estimator if you have a quote." },
      { question: "Does delivery include tipping?", answer: "Ask. Some quotes drop at the kerb; others need a barrow or machine to move stone down a side access — that labour is separate." },
      { question: "Pea gravel vs crusher run?", answer: "Change the density and price to match the product. Pea gravel and dense graded base do not weigh or cost the same per cubic yard." },
    ],
    relatedTools: ["gravel-calculator", "sand-calculator", "cost-estimator"],
    relatedGuides: ["how-much-gravel-for-a-driveway", "driveway-concrete-thickness-and-cost"],
    updated: "2026-09-01",
  },
  {
    slug: "concrete-cost-calculator",
    category: "construction",
    name: "Concrete Cost Calculator",
    metaTitle: "Concrete Cost Calculator – Slab Materials & Labour",
    metaDescription:
      "Estimate concrete slab cost with ready-mix price, labour per cubic yard, and pump fees. Planning figures for patios and pads.",
    keywords: "concrete cost calculator, concrete slab price, ready mix concrete cost, patio concrete cost",
    shortDescription: "Ready-mix volume with materials, labour, and pump fees.",
    intro:
      "This calculator combines concrete volume with ready-mix pricing, a labour allowance, and pump or short-load fees to produce a planning cost. Use it for a slab, patio, pad, or similar rectangular pour when you have current rates from a plant and at least a rough installation quote. It does not include excavation, gravel base, reinforcement, forms, drainage, permits, decorative finishes, tax, or structural design unless you add those in a wider project budget. US mode prices cubic yards and UK mode prices cubic metres, so keep every rate in the matching unit and currency. Confirm the calculated order, mix specification, delivery window, minimum load, and access fees directly with the concrete supplier and installer before booking.",
    synonyms: ["slab cost", "ready mix price", "concrete pour cost", "patio concrete price"],
    formulaExplanation: [
      "Volume and waste follow the same method as the Concrete Calculator. Materials multiply order quantity by your ready-mix price — the number on the quote sheet from the plant.",
      "Labour per unit volume is a simplified way to compare contractor bids. Finishing, forming, and reinforcement are not broken out; adjust the labour rate to reflect what your market includes.",
      "Pump and short-load fees belong in the fee field, not buried inside the per-yard labour rate. When those fees are visible, small slabs stop looking mysteriously expensive.",
      "Driveways and patios often share the same calculator but not the same thickness or base. Change depth first, then price — a thicker slab is not a rounding error.",
    ],
    methodology: "Order = Volume × (1 + waste %). Materials = Order × $/yd³. Total = Materials + (Order × labour rate) + fees.",
    workedExample: {
      title: "A 12 ft × 12 ft patio, 4 in, $155/yd³, $45/yd³ labour",
      steps: [
        "Volume ≈ 1.78 yd³; with 10% waste → 1.96 yd³",
        "Materials ≈ $304",
        "Labour ≈ $88",
        "No pump fee → planning total near $390 before finish upgrades",
      ],
    },
    faq: [
      { question: "What is a short-load fee?", answer: "Ready-mix plants often surcharge orders under 3–4 cubic yards because the truck still has to run. Put that charge in the pump/fee field." },
      { question: "Does this include forming and rebar?", answer: "No. It is volume, mix, and pour labour only. Curved forms, mesh, and pump hire are extras." },
      { question: "Stamped or coloured concrete?", answer: "Finish upgrades are priced per square foot on top of plain concrete. Increase the labour rate or add a line in the Project Cost Estimator." },
      { question: "How do I get the ready-mix price?", answer: "Call two local plants with your zip or postcode and ask for price per cubic yard delivered. Prices move with fuel and demand." },
      { question: "Bag mix instead?", answer: "For small volumes use the Concrete Bag Calculator. This tool assumes ready-mix delivery." },
      { question: "UK ready-mix?", answer: "Toggle to metric for price per cubic metre and labour per m³." },
      { question: "Does this include gravel sub-base?", answer: "No. Estimate base with the Gravel Calculator, then add that materials line beside the concrete total." },
      { question: "Why is a small pad expensive per square foot?", answer: "Mobilisation, forms, and minimum truck charges do not shrink linearly. Short-load fees often dominate tiny pours." },
    ],
    relatedTools: ["concrete-calculator", "concrete-bag-calculator", "gravel-calculator"],
    relatedGuides: ["how-much-does-a-concrete-patio-cost", "driveway-concrete-thickness-and-cost", "concrete-slab-thickness-what-matters"],
    updated: "2026-09-01",
  },
  {
    slug: "insulation-calculator",
    category: "home-improvement",
    name: "Insulation Calculator",
    metaTitle: "Insulation Calculator – Rolls, Coverage & Waste",
    metaDescription:
      "Calculate insulation rolls needed for a wall or ceiling. Enter area, roll coverage, and waste for a shopping list.",
    keywords: "insulation calculator, batt insulation rolls, insulation coverage, how much insulation do I need",
    shortDescription: "Batt roll count from wall or ceiling area.",
    intro:
      "This calculator turns a measured wall, ceiling, or floor area into whole rolls or packs of batt insulation using the product's stated coverage. Use it once the required thermal value, thickness, and framing width have been selected under local rules. It does not choose an R-value or U-value, calculate heat loss, cover blown-in or spray systems, or include membranes, fixings, ventilation work, PPE, and labour. US mode uses square feet and common R-value products, while UK mode uses square metres and metric pack coverage; always replace the default with the exact label figure. Give the area and assembly details to the insulation merchant or installer so they can confirm product suitability, pack coverage, number of layers, and vapour-control requirements.",
    synonyms: ["fibreglass batt", "mineral wool", "wall insulation", "loft insulation rolls"],
    formulaExplanation: [
      "Roll count is net area plus waste, divided by the coverage printed on the packaging. Standard US batts often cover about 40 ft² per roll; UK rolls vary more — change the assumption to match your product.",
      "This does not pick an R-value for you. Buy the thickness that meets your code or target; the calculator only handles how many rolls that thickness requires.",
      "Measure each wall or ceiling plane separately, then add the areas. Door and window openings are often left in the gross area for batts because you still cut and fit around the opening — only subtract large openings if your installer works that way.",
      "Attic and floor jobs may need two layers or a different product (blown cellulose, rigid board). If the label coverage assumes a single batt pass, do not force this roll math onto a blown-in quote.",
    ],
    methodology: "Rolls = ceil((Area × (1 + waste %)) ÷ coverage per roll).",
    workedExample: {
      title: "A 14 ft × 12 ft wall, 10% waste, 40 ft² rolls",
      steps: [
        "Area = 168 ft²",
        "With 10% waste = 184.8 ft²",
        "184.8 ÷ 40 = 4.62 → 5 rolls",
      ],
    },
    faq: [
      { question: "What coverage per roll should I use?", answer: "Read the label on the pack you are buying. A common US R-13 batt roll covers about 40 ft²; UK packs differ by brand and thickness." },
      { question: "Walls vs attic?", answer: "Same math — measure the flat area you are filling. Attic jobs often use multiple layers or blown insulation, which this tool does not model." },
      { question: "How much waste?", answer: "10% handles routine cuts around studs. Irregular framing or lots of outlets may need 12–15%." },
      { question: "Vapour barrier?", answer: "Not included. Follow local code on whether you need a separate vapour retarder and on which side of the batt it goes." },
      { question: "Does R-value affect roll count?", answer: "Thicker batts cover less area per roll for the same width. Always use the coverage on the exact product SKU you plan to buy." },
      { question: "Metric rooms?", answer: "Switch to metres. Enter roll coverage in m² from the EU/UK label." },
      { question: "Should I buy all rolls from one lot?", answer: "Where possible, yes — especially if you are matching faced batts. Running out mid-wall and switching SKUs is how gaps and thickness mismatches appear." },
      { question: "Does this include labour or PPE?", answer: "No. It is a materials count only. Fibreglass work needs gloves, mask, and long sleeves regardless of how tidy the roll math looks." },
    ],
    relatedTools: ["drywall-calculator", "cost-estimator", "paint-calculator"],
    relatedGuides: ["how-much-insulation-for-a-room", "waste-factors-explained", "planning-a-home-improvement-budget"],
    updated: "2026-09-01",
  },
  {
    slug: "fence-calculator",
    category: "deck-fence",
    name: "Fence Calculator",
    metaTitle: "Fence Calculator – Panels, Posts & Materials",
    metaDescription:
      "Plan fence materials — panel count, posts, and rails from fence length, panel width, and post spacing.",
    keywords: "fence calculator, fence panel calculator, how many fence posts, fence material estimate",
    shortDescription: "Panel, post, and rail counts for a straight fence run.",
    intro:
      "This calculator estimates panels, posts, and rails for a straight fence run from its length, panel width, and post spacing. Use it while planning a level boundary fence or comparing pre-made panel systems before buying materials. It does not verify the legal boundary, design for wind load, count gates and corners automatically, size foundations, or include gravel boards, caps, fixings, concrete, delivery, and labour. US mode uses feet and common 6 or 8 ft bays, while UK mode uses metres and typical metric panel widths; the same whole-bay rounding applies. Site slope and manufacturer systems change the parts list, so take the result and a sketch to your fencing supplier or installer and ask them to confirm post type, bay spacing, gate hardware, and concrete.",
    synonyms: ["fence panels", "fence posts", "picket fence", "privacy fence", "garden fence"],
    formulaExplanation: [
      "Panels are the fence length divided by panel width, rounded up. Posts are the length divided by post spacing, plus one end post. Most panel systems use two horizontal rails per section.",
      "This assumes a straight run on level ground. Slopes, gates, and corner posts need extra parts the linear model does not add automatically.",
      "Measure the run along the ground where the fence will sit, not the property line on a title plan if those differ. Inside corners and dog-legs should be split into straight segments and added.",
      "Panel height changes wind load and post size more than panel count. A taller privacy fence on the same length still uses the same bay math only when panel widths match — the concrete and post section may not.",
    ],
    methodology: "Panels = ceil(Length ÷ panel width). Posts = ceil(Length ÷ spacing) + 1. Rails ≈ panels × 2.",
    workedExample: {
      title: "A 100 ft run, 8 ft panels, posts every 8 ft",
      steps: [
        "Panels = 100 ÷ 8 = 12.5 → 13 panels",
        "Posts = 100 ÷ 8 + 1 = 14 posts",
        "Rails ≈ 26 rail lengths (top and bottom)",
      ],
    },
    faq: [
      { question: "Panel width vs post spacing?", answer: "They are often the same on pre-made panel systems. On post-and-rail builds you may set spacing independently — enter what matches your design." },
      { question: "Corner and gate posts?", answer: "Add one extra post per corner and two posts per gate opening beyond this straight-run count." },
      { question: "Concrete for posts?", answer: "Post hole concrete is not included. Use the Concrete Bag Calculator on each hole size or the main Concrete Calculator for a continuous footing." },
      { question: "Sloped ground?", answer: "Stepped or racked panels change panel count slightly. Order one extra panel on long runs with grade change." },
      { question: "Labour cost?", answer: "Materials only here. Installation is often priced per linear foot — add it through the Project Cost Estimator." },
      { question: "Metric fences?", answer: "Enter length and panel size in metres. Post spacing in metres works the same way." },
      { question: "Do I need gravel under post concrete?", answer: "Many installs put a little gravel in the hole for drainage before concrete. That volume is tiny compared with the fence panels — estimate it separately if your soil holds water." },
      { question: "Pickets vs panels?", answer: "If you are building from individual pickets, convert the run into panel-width bays or count pickets from spacing. This tool is aimed at panelised systems." },
    ],
    relatedTools: ["decking-calculator", "concrete-bag-calculator", "gravel-calculator"],
    relatedGuides: ["fence-materials-for-a-straight-run", "concrete-for-fence-posts", "how-to-compare-contractor-quotes"],
    updated: "2026-09-01",
  },
  {
    slug: "paver-calculator",
    category: "landscaping",
    name: "Paver Calculator",
    metaTitle: "Paver Calculator – Patio Paver Count & Sand Bed",
    metaDescription:
      "Calculate how many pavers you need for a patio. Enter patio size, paver dimensions, joint gap, and waste allowance.",
    keywords: "paver calculator, patio pavers needed, paving slab calculator, paver patio estimate",
    shortDescription: "Paver count and sand bedding for a rectangular patio.",
    intro:
      "This calculator estimates individual pavers and a rough bedding-sand volume from patio dimensions, paver size, joint width, and waste. Use it for a rectangular patio or path after selecting the paving product and laying pattern. It does not include compacted gravel sub-base, jointing compound, edge restraints, drainage, excavation, geotextile, cutting equipment, delivery, or labour. US mode accepts feet and inch pavers, while UK mode uses metres and centimetres; mixed-size patterns need the manufacturer's module coverage rather than one nominal unit. Pavers are often sold by layer or pallet and actual dimensions can vary, so show the result to the merchant and confirm pallet coverage, pattern waste, bedding specification, and batch colour.",
    synonyms: ["paving slabs", "patio pavers", "concrete pavers", "paving stones"],
    formulaExplanation: [
      "Each paver plus its joint gap occupies a rectangle on the ground. Patio area divided by that footprint gives the raw count; waste covers cuts along edges and breakage.",
      "The sand line assumes a thin bedding layer under the pavers — not the compacted gravel sub-base. Use the Gravel and Sand calculators for those layers.",
      "Buy from one dye lot when colour matters. Running out mid-patio and grabbing a different batch is how blotchy fields appear even when the count was correct.",
      "Edge restraint and cutting along curves change labour more than the raw paver count. If the layout is a circle or freeform, sketch a sample bay and scale up instead of trusting a single rectangle.",
    ],
    methodology: "Pavers = ceil((Patio area ÷ (paver + gap)²) × (1 + waste %)). Sand bed ≈ area × bedding depth.",
    workedExample: {
      title: "A 16 ft × 10 ft patio, 8 × 4 in pavers, 1/8 in gap",
      steps: [
        "Patio = 160 ft²",
        "Effective paver footprint ≈ 0.68 ft × 0.35 ft",
        "Raw count ≈ 672 pavers; 8% waste → ~725 pavers",
        "Sand bed at 1 in ≈ 0.6 yd³ — confirm with Sand Calculator",
      ],
    },
    faq: [
      { question: "How much paver waste?", answer: "8% suits a rectangle with a straight bond. Herringbone or diagonal layouts need 12–15%." },
      { question: "Gravel base under pavers?", answer: "Not in this count. A typical patio has 4–6 in of compacted gravel below the sand — use the Gravel Calculator." },
      { question: "Polymeric sand?", answer: "Joint sand for locking pavers is a separate product sold by the bag. This tool counts pavers and bedding sand only." },
      { question: "Different paver sizes?", answer: "Enter the actual dimensions from your supplier. Mixed-size patterns need a layout plan this simple grid math cannot replace." },
      { question: "Curved edges?", answer: "Rectangular math over-counts or under-counts on curves. Add 10–15% waste or sketch the layout and count a sample bay." },
      { question: "UK paving slabs?", answer: "Switch to metric and enter slab size in centimetres as sold at your merchant." },
      { question: "How thick is the sand bed?", answer: "Many patio installs use about 1 inch (25 mm) of bedding sand over compacted gravel. Confirm with your paver manufacturer — some systems want a different bedding." },
      { question: "Does this include base gravel?", answer: "No. Estimate gravel with the Gravel Calculator, bedding with the Sand Calculator, then use this tool for the paver count." },
    ],
    relatedTools: ["sand-calculator", "gravel-calculator", "concrete-calculator"],
    relatedGuides: ["planning-a-paver-patio-base", "how-much-sand-for-a-paver-bed", "patio-base-gravel-before-concrete"],
    updated: "2026-09-01",
  },
  {
    slug: "topsoil-calculator",
    category: "landscaping",
    name: "Topsoil Calculator",
    metaTitle: "Topsoil Calculator – Cubic Yards, Tons & Garden Beds",
    metaDescription:
      "Work out how much topsoil you need for a garden bed or lawn. Enter length, width, and depth for cubic yards or metres plus an approximate weight.",
    keywords:
      "topsoil calculator, how much topsoil do I need, cubic yards of topsoil, topsoil for garden bed, lawn topdressing calculator",
    shortDescription: "Cubic yards or metres of topsoil from bed area and depth.",
    intro:
      "This calculator turns a garden bed, raised area, or lawn footprint and depth into topsoil volume, approximate weight, and a planning cost. Use it for a new planting bed, levelling work, or a light topdressing after deciding how much finished depth the plants or lawn need. It does not test soil quality, choose a topsoil blend, subtract existing soil, or include compost, mulch, excavation, delivery access, spreading, and settlement beyond the waste you enter. US mode shows cubic yards and short tons, while UK mode shows cubic metres and tonnes; bag counts depend on the volume printed on each product. Moisture and soil composition change weight, so send the volume to a local soil supplier and ask them to confirm load size, screened quality, and delivered coverage.",
    synonyms: ["garden soil", "fill dirt vs topsoil", "lawn topdressing", "raised bed soil", "screened topsoil"],
    formulaExplanation: [
      "Volume is length × width × depth in consistent units. Imperial jobs convert cubic feet to cubic yards (÷ 27). Metric jobs stay in cubic metres when depth is in centimetres.",
      "Weight is only a planning figure. Wet clay topsoil and dry sandy loam do not weigh the same. Use your supplier’s coverage chart when you have a product name.",
      "If you are filling several beds, calculate each rectangle at its own depth and add the volumes. A single average depth can hide a low corner that consumes much more soil than the rest.",
      "Fresh soil settles after placement, particularly when tipped loose or laid over disturbed ground. Use the waste setting as a settlement allowance, then confirm whether the supplier sells by loose volume, bag volume, or weight.",
    ],
    methodology:
      "Volume = L × W × D. yd³ = ft³ ÷ 27. Planning weight ≈ yd³ × 1.1 tons (US) or m³ × 1.3 tonnes (UK). Apply waste % for settlement.",
    workedExample: {
      title: "A 20 ft × 10 ft bed, 4 in deep, 10% waste",
      steps: [
        "Depth in feet: 4 ÷ 12 = 0.333 ft",
        "Volume = 20 × 10 × 0.333 = 66.7 ft³",
        "Cubic yards = 66.7 ÷ 27 = 2.47 yd³",
        "With 10% waste ≈ 2.72 yd³ (~3.0 tons at 1.1 tons/yd³)",
      ],
    },
    faq: [
      {
        question: "How deep should topsoil be for a new bed?",
        answer:
          "Many planting beds are planned around 4–6 inches (10–15 cm) of quality topsoil over improved subgrade. Vegetables and deep-rooted shrubs may want more. Lawn topdressing is usually only ½–1 inch.",
      },
      {
        question: "Is fill dirt the same as topsoil?",
        answer:
          "No. Fill dirt is cheaper subsoil for raising grade. Topsoil has organic matter for planting. Do not plant into raw fill and expect the same result.",
      },
      {
        question: "Why add a waste percentage?",
        answer:
          "Soil settles, grades are uneven, and truck loads are sold in whole yards. 5–10% keeps you from finishing a bed half an inch short.",
      },
      {
        question: "Bags or bulk delivery?",
        answer:
          "Bagged topsoil works for small patches. Once you pass roughly a cubic yard, bulk delivery is usually cheaper if you have a place to tip.",
      },
      {
        question: "Does this include compost or mulch?",
        answer:
          "No. Compost mixes and mulch cover are separate orders. Use the Mulch Calculator for bark depth on top of the bed.",
      },
      {
        question: "US and UK units?",
        answer:
          "Toggle feet/inches or metres/centimetres. Cost currency follows the unit system.",
      },
    ],
    relatedTools: ["mulch-calculator", "gravel-calculator", "sand-calculator"],
    relatedGuides: ["how-much-topsoil-do-you-need", "how-much-mulch-do-you-need"],
    updated: "2026-09-19",
  },
  {
    slug: "wallpaper-calculator",
    category: "painting",
    name: "Wallpaper Calculator",
    metaTitle: "Wallpaper Calculator – How Many Rolls Do I Need?",
    metaDescription:
      "Calculate wallpaper rolls for a room from wall area, doors, windows, and pattern waste. US and UK roll coverage with a planning cost range.",
    keywords:
      "wallpaper calculator, how many rolls of wallpaper, wallpaper roll calculator, wallpaper estimator, wallpaper coverage",
    shortDescription: "Wallpaper roll count from room size, openings, and pattern match waste.",
    intro:
      "This calculator estimates wallpaper rolls from room perimeter, wall height, openings, usable roll coverage, and pattern-match waste. Use it after choosing a paper and reading its roll dimensions and repeat, whether covering a whole room or measuring one feature wall separately. It does not lay out individual drops, guarantee pattern alignment, or include paste, liner, primer, tools, ceiling paper, damaged walls, and hanging labour. US mode works in feet and typical single-roll coverage, while UK mode uses metres and common metric rolls; labels may package or describe rolls differently. Before ordering, give the wall height and result to the wallpaper supplier or installer and ask them to confirm usable drops per roll, match type, batch number, and return policy.",
    synonyms: ["wallpaper rolls", "wall covering", "paperhanging", "vinyl wallpaper", "pattern repeat"],
    formulaExplanation: [
      "Net wall area is perimeter × height minus door and window openings. Pattern repeats and trimming waste mean you never order the exact area divided by roll coverage.",
      "Default usable coverage assumes a typical single roll after trim. Large repeats and drop matches need a higher waste percent — or the coverage number printed on your roll.",
      "Area division is a useful planning method, but professional paperhangers often count full-height drops because a leftover strip may be too short for the next wall. Tall rooms and large repeats can therefore need more rolls than net area suggests.",
      "Buy all rolls from the same batch or dye-lot code for walls seen together. Confirm whether a US 'double roll' is sold as one physical bolt so pack wording does not accidentally halve or double the order.",
    ],
    methodology:
      "Net area = (2 × (L + W) × H) − openings. Adjusted = net × (1 + waste %). Rolls = ceil(adjusted ÷ coverage per roll).",
    workedExample: {
      title: "A 14 × 12 ft room, 8 ft ceilings, 1 door, 2 windows, 15% waste",
      steps: [
        "Perimeter = 2 × (14 + 12) = 52 ft",
        "Gross walls = 52 × 8 = 416 ft²",
        "Openings ≈ 21 + 15 + 15 = 51 ft² → net ≈ 365 ft²",
        "With 15% waste ≈ 420 ft² ÷ 27 ft²/roll ≈ 16 rolls",
      ],
    },
    faq: [
      {
        question: "How much pattern waste should I use?",
        answer:
          "Plain or random-match papers often work with about 10%. Straight-across or drop matches with a large repeat commonly need 15–20%. When in doubt, round up a roll.",
      },
      {
        question: "Single roll vs double roll?",
        answer:
          "US stores often sell double rolls but quote coverage per single roll on the label. Enter the usable coverage for the unit you are buying, or convert doubles to singles consistently.",
      },
      {
        question: "Should I wallpaper the ceiling?",
        answer:
          "This tool is for vertical walls. Ceiling area is length × width — run a separate takeoff if you are papering overhead.",
      },
      {
        question: "Textured or feature wall only?",
        answer:
          "Measure only the walls you will cover. A single feature wall is one length × height, not the full room perimeter.",
      },
      {
        question: "Paste and liner included?",
        answer:
          "No. Paste, liner paper, and sizing are separate. Budget them from the product instructions once you know roll count.",
      },
      {
        question: "UK metric rolls?",
        answer:
          "Switch to metric and set coverage from the roll label (often around 5 m² usable before a heavy pattern match). Do not assume US single-roll coverage.",
      },
    ],
    relatedTools: ["paint-calculator", "paint-cost-calculator", "drywall-calculator"],
    relatedGuides: ["how-many-wallpaper-rolls-for-a-room", "how-much-paint-for-a-room", "how-to-measure-a-room-for-materials"],
    updated: "2026-09-19",
  },
];
