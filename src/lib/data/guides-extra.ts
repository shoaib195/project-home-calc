import type { Guide } from "@/lib/types";

/** Extra guides merged into guides.ts */
export const extraGuides: Guide[] = [
  {
    slug: "how-much-gravel-for-a-driveway",
    title: "How Much Gravel Do You Need for a Driveway?",
    description:
      "Convert length, width, and depth into tonnes or cubic yards, plus a practical waste allowance for compaction and uneven ground.",
    updated: "2026-08-20",
    relatedTools: ["gravel-calculator", "concrete-calculator", "cost-estimator"],
    intro:
      "Gravel driveways are priced by volume, but suppliers sell by tonne or cubic yard. Getting the depth wrong is the usual way to run short mid-delivery. Measure the footprint, pick a compacted depth, then convert volume to weight with your supplier’s product in mind.",
    sections: [
      {
        heading: "Measure the footprint first",
        body: [
          "Length times width gives the plan area. Irregular drives should be split into rectangles or triangles and added together. Measure the usable driving surface, not the whole plot boundary, unless you are graveling the verges as well.",
          "If the drive tapers, use average width. A 40 ft drive that is 10 ft at the road and 14 ft at the house is roughly 12 ft average width for planning.",
        ],
      },
      {
        heading: "Depth and compaction",
        body: [
          "A common planning depth for a light residential drive is 4–6 inches (100–150 mm) of compacted base, sometimes over a geotextile. Pedestrian paths are often thinner. Going from 4 inches to 6 inches is a 50% increase in volume for the same area.",
          "Loose fill settles. Order a little extra (often 5–10%) for compaction and uneven subgrade, then confirm with your supplier — some quote compacted depth already.",
        ],
      },
      {
        heading: "Volume to weight",
        body: [
          "Volume is length × width × depth (in consistent units). The Gravel Calculator converts that into cubic yards or cubic metres and an approximate weight using a typical density for crushed stone.",
          "Density varies by rock type and moisture. Treat weight as a planning figure for delivery booking, then order against the supplier’s coverage chart when you have a product name.",
        ],
      },
      {
        heading: "Before you order",
        body: [
          "Check access for the tipper truck. If material must be barrowed far from the drop point, labour cost can exceed the gravel itself.",
          "Use the Cost Estimator with a local price per tonne or yard once you have a volume. A national average is only a starting band.",
        ],
      },
    ],
    faq: [
      {
        question: "Should I use angular stone or pea gravel?",
        answer:
          "Angular crushed stone locks together better for driving surfaces. Rounded pea gravel looks softer but moves under tyres — better for decorative beds than a primary drive base.",
      },
      {
        question: "Do I need a sub-base under gravel?",
        answer:
          "On soft ground, a compacted sub-base and geotextile reduce rutting. Local ground conditions decide; ask a landscaper if the soil holds water or has already failed under vehicles.",
      },
    ],
  },
  {
    slug: "how-much-mulch-do-you-need",
    title: "How Much Mulch Do You Need for Garden Beds?",
    description:
      "A clear method for bed area, depth, bags versus bulk delivery, and when to refresh an existing mulch layer.",
    updated: "2026-08-20",
    relatedTools: ["mulch-calculator", "gravel-calculator"],
    intro:
      "Mulch is sold by the bag or by the cubic yard. Bag math looks simple until you under-depth a bed and the soil shows through after the first rain. Measure bed area, pick 2–3 inches for most bark, then decide bags versus bulk from the volume.",
    sections: [
      {
        heading: "Map the beds, not the lawn",
        body: [
          "Sketch each bed as rectangles or use length × average width for curved edges. Subtract large hardscape (patios, paths) that will not be mulched.",
          "If beds wrap a house, measure along the foundation and out to the bed edge in a few places, then average the depth of the bed.",
        ],
      },
      {
        heading: "Depth that actually works",
        body: [
          "Most bark and wood mulches are planned at 2–3 inches (50–75 mm). Thinner layers dry out and leave bare patches; much thicker layers can stay too wet against stems.",
          "When refreshing an existing bed, you often need less than a full new depth — scrape back compacted old mulch and top up rather than stacking another full 3 inches on top every year.",
        ],
      },
      {
        heading: "Bags vs bulk",
        body: [
          "Bag coverage charts assume a stated depth. Divide your cubic volume by the bag volume to get bag count, then round up. Bulk delivery is usually cheaper above a few cubic yards but needs a place to dump.",
          "Run the Mulch Calculator once with your area and depth, then decide bags versus bulk from the volume output — not from a guess at ‘a few bags’.",
        ],
      },
      {
        heading: "What mulch estimates leave out",
        body: [
          "Edging, landscape fabric, and plant spacing are separate. Fabric under mulch changes how much you need only if you are building a new bed from bare soil.",
          "Coloured or rubber mulches have different coverage; always check the product label rather than assuming bark density.",
        ],
      },
    ],
    faq: [
      {
        question: "How often should I remulch?",
        answer:
          "Many beds need a light top-up every one to two seasons as organic mulch breaks down. Full replacement is rarer unless the mulch has composted into the soil or washed away.",
      },
      {
        question: "Can I use the gravel calculator for decorative rock?",
        answer:
          "Yes for volume planning — rock depth is still area × depth. Use the Gravel Calculator when the product is sold by weight or cubic yard like aggregate.",
      },
    ],
  },
  {
    slug: "how-to-estimate-flooring-with-waste",
    title: "How to Estimate Flooring Materials With Waste Allowance",
    description:
      "Measure rooms correctly, choose a waste percentage for layout and cuts, and avoid short-ordering plank or tile packs.",
    updated: "2026-08-21",
    relatedTools: ["flooring-calculator", "cost-estimator"],
    intro:
      "Flooring is sold by the pack, box, or square metre — and almost every layout needs waste. Ordering exactly the floor area is the fastest way to end a job one pack short. Measure net area, add waste for the layout, then round up to whole packs.",
    sections: [
      {
        heading: "Measure net floor area",
        body: [
          "Multiply length by width for each room. For L-shapes, split into rectangles. Do not subtract every doorway unless the product instructions say so — thresholds are usually small compared with waste.",
          "Stairs and landings are separate takeoffs. Closets should be included if they get the same flooring.",
        ],
      },
      {
        heading: "Why waste is not optional",
        body: [
          "Straight layouts with few cuts often use about 5–8% waste. Diagonal installs, large-format tile, pattern matches, and rooms with many corners often need 10–15%.",
          "The Flooring Calculator applies a waste percentage on top of net area so your pack count reflects real cutting loss, not just the tape-measure rectangle.",
        ],
      },
      {
        heading: "Pack coverage and dye lots",
        body: [
          "Divide the adjusted area by the coverage printed on the pack. Always round up to whole packs. Keep one unopened pack for future repairs when the product may be discontinued.",
          "Buy all packs from the same dye lot when colour matching matters. A second order weeks later can look different under the same light.",
        ],
      },
      {
        heading: "Budgeting the material line",
        body: [
          "Put pack count and underlayment into the Cost Estimator separately from labour. Underlayment, transition strips, and adhesive are easy to forget and often change the material total more than people expect.",
        ],
      },
    ],
    faq: [
      {
        question: "Should waste be higher for herringbone?",
        answer:
          "Usually yes. Patterned layouts generate more offcuts. Confirm with your installer; many recommend 12–15% or more for complex patterns.",
      },
      {
        question: "Do I measure in square feet or square metres?",
        answer:
          "Use the unit your packs are sold in. The Flooring Calculator supports both — stay consistent from room measure to pack coverage.",
      },
    ],
  },
  {
    slug: "how-much-drywall-for-a-room",
    title: "How Much Drywall Do You Need for a Room?",
    description:
      "Wall and ceiling sheet counts, standard board sizes, and why openings and waste still matter on a simple rectangle.",
    updated: "2026-08-21",
    relatedTools: ["drywall-calculator", "paint-calculator", "cost-estimator"],
    intro:
      "Drywall is sold in fixed sheet sizes. Estimating means converting wall and ceiling area into sheets, then adding a sensible waste factor — not guessing from floor area alone.",
    sections: [
      {
        heading: "Walls and ceilings separately",
        body: [
          "Wall area is roughly perimeter × height, minus large openings if you want a tighter count. Ceiling area is length × width of the room. The Drywall Calculator follows that split so you can hang walls and ceilings as different jobs.",
          "Tall walls and vaulted ceilings change sheet orientation and waste; complex ceilings often need a site measure.",
        ],
      },
      {
        heading: "Sheet sizes and orientation",
        body: [
          "Common US sheets are 4×8 ft; longer boards reduce seams on tall walls. In the UK, plasterboard sizes differ — always match the calculator’s sheet area to the product you will buy.",
          "Planning with the actual sheet coverage prevents buying a random number of boards that leave awkward leftover strips.",
        ],
      },
      {
        heading: "Waste, joints, and finishing",
        body: [
          "A modest waste percentage covers cut-outs and damaged boards. Joint compound, tape, and corner bead are separate lines — sheet count alone is not a full materials list.",
          "After hanging and finishing, use the Paint Calculator for primer and finish coats; new board usually needs a sealing primer coat.",
        ],
      },
      {
        heading: "When to get a trade takeoff",
        body: [
          "Rooms with many windows, curved walls, or fire-rated assemblies should be checked by a drywaller. The calculator is for planning rectangular residential rooms.",
          "If you are boarding over damaged plaster, include extra sheets for patch areas that may expand once demolition starts.",
        ],
      },
    ],
    faq: [
      {
        question: "Do I subtract every door and window?",
        answer:
          "For a planning estimate, subtracting standard openings avoids overbuying. Some trades prefer to order closer to gross area and use offcuts — either approach is fine if you state it clearly.",
      },
      {
        question: "How many coats of compound should I budget?",
        answer:
          "Level of finish depends on lighting and paint sheen. Ask your finisher; compound volume is not derived from sheet count alone.",
      },
    ],
  },
  {
    slug: "how-to-estimate-decking-boards",
    title: "How to Estimate Decking Boards and Framing Basics",
    description:
      "Turn deck length and width into board count with gap spacing, and know what the board calculator does not include.",
    updated: "2026-08-22",
    relatedTools: ["decking-calculator", "cost-estimator", "concrete-calculator"],
    intro:
      "Decking quotes mix boards, joists, fasteners, and footings. Start with a clear board count for the surface — then price framing separately so the conversation stays honest.",
    sections: [
      {
        heading: "Deck footprint and board width",
        body: [
          "Use the overall length and width of the deck surface. Board width plus the gap between boards determines how many courses you need across the span.",
          "The Decking Calculator accounts for board width and spacing so you are not dividing area by board face width alone and forgetting the gaps.",
        ],
      },
      {
        heading: "Length and joins",
        body: [
          "If boards are shorter than the run, plan staggered joins over joists. That can increase offcut waste compared with a single full-length board per run.",
          "Composite and timber products have different recommended gaps for expansion — use the manufacturer gap, not a generic timber gap, when the product sheet says so.",
        ],
      },
      {
        heading: "What board count misses",
        body: [
          "Joists, beams, posts, footings, ledger flashing, and fasteners are separate. Post footing concrete can be estimated with the Concrete Calculator once you know footing size and count.",
          "Railings and stairs are their own takeoffs. A board-only number is a deck surface estimate, not a full materials schedule.",
        ],
      },
      {
        heading: "Budget range",
        body: [
          "Price boards and fasteners first, then framing. Put the totals into the Cost Estimator with a contingency — outdoor structures often reveal drainage or ledger issues once work starts.",
        ],
      },
    ],
    faq: [
      {
        question: "Should I buy extra boards?",
        answer:
          "Yes — a small overage covers damaged boards and future repairs, especially for stained timber that must match.",
      },
      {
        question: "Is the calculator a structural design?",
        answer:
          "No. Span tables, footing design, and ledger attachment must follow local code and manufacturer instructions or an engineer’s design.",
      },
    ],
  },
  {
    slug: "concrete-slab-thickness-what-matters",
    title: "Patio vs Driveway Concrete Thickness",
    description:
      "Why patio, shed, and driveway slabs use different thicknesses — and how thickness multiplies your concrete volume.",
    updated: "2026-08-22",
    relatedTools: ["concrete-calculator", "gravel-calculator"],
    intro:
      "Thickness is the setting people change least often and regret most. A patio you walk on and a slab that takes a car are not the same pour. Pick the thickness for the use case, then multiply area × depth for volume.",
    sections: [
      {
        heading: "Common thickness ranges",
        body: [
          "Walkway and patio slabs people only walk on are often planned around 4 inches (100 mm). Shed bases may be similar if loads are light. Driveways and garage slabs that take cars are typically thicker and may need reinforcement — confirm with local practice and code.",
          "These are planning norms, not a design specification. Poor soil or heavy loads change the answer.",
        ],
      },
      {
        heading: "Thickness multiplies volume",
        body: [
          "Volume is area × thickness. Increasing thickness from 4 to 6 inches raises concrete volume by half for the same footprint. That is why two quotes with different thicknesses cannot be compared on price alone.",
          "Enter the thickness your contractor proposes into the Concrete Calculator so the material line matches the structural assumption.",
        ],
      },
      {
        heading: "Sub-base still matters",
        body: [
          "Compacted gravel under the slab supports the concrete and helps drainage. Estimate that layer with the Gravel Calculator using the sub-base depth in the specification — it is not included in the concrete volume.",
          "Skipping sub-base on soft ground is a common DIY failure mode that no calculator can fix after the pour.",
        ],
      },
      {
        heading: "Reinforcement and joints",
        body: [
          "Mesh, rebar, fibre, and control joints are specification choices. They affect labour and materials but not the basic cubic volume of concrete.",
          "Ask quotes to state thickness, strength mix, reinforcement, and finish separately so you can compare like with like.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I pour 3 inches to save money?",
        answer:
          "Thin slabs crack more easily under load and frost. Saving on thickness often costs more in repairs. Follow a proper specification for the use case.",
      },
      {
        question: "Does stamped concrete need a different thickness?",
        answer:
          "Finish does not replace structural thickness. Decorative work usually sits on the same slab thickness the use case requires, with extra labour for the finish.",
      },
    ],
  },
  {
    slug: "how-to-compare-contractor-quotes",
    title: "How to Compare Contractor Quotes Side by Side",
    description:
      "Line up materials vs labour, allowances, and exclusions — use your own quantity checks against lump sums.",
    updated: "2026-08-23",
    relatedTools: ["cost-estimator", "concrete-calculator", "paint-calculator", "flooring-calculator"],
    intro:
      "Three quotes for the “same” job can look wildly different until you line up scope. Your own material estimates won’t replace a trade quote, but they make vague lump sums easier to question.",
    sections: [
      {
        heading: "Put every quote in the same columns",
        body: [
          "Ask for materials, labour, equipment, waste removal, and allowances as separate lines where possible. A single total hides whether you are comparing different thicknesses, grades, or inclusions.",
          "Note what is excluded: permits, landscaping repair, painting, haul-away, and after-hours work often sit outside the headline number.",
        ],
      },
      {
        heading: "Sanity-check materials",
        body: [
          "Run the relevant calculator (concrete, paint, flooring, and so on) with the same dimensions the quote assumes. If the material line is far from your estimate, ask whether thickness, waste, or product grade differs.",
          "Use the Cost Estimator to assemble your planning total beside each quote — labelled as an estimate, not a counter-offer.",
        ],
      },
      {
        heading: "Schedule and payment",
        body: [
          "Compare start windows, weather contingencies, and payment schedules. A cheaper quote with a large upfront deposit and vague completion language can be riskier than a mid-priced clear scope.",
          "Written change-order rules matter. Verbal ‘we will sort it later’ is where budgets break.",
        ],
      },
      {
        heading: "References and insurance",
        body: [
          "Confirm insurance and, where relevant, licensing. Photos of similar completed work beat generic marketing pages.",
          "For structural or roofing work, the lowest number is not a quality signal by itself.",
        ],
      },
    ],
    faq: [
      {
        question: "Is the cheapest quote always worse?",
        answer:
          "Not always — but if it is far below the others, find what was left out before you celebrate. Missing sub-base, thinner slabs, or excluded haul-away are common gaps.",
      },
      {
        question: "Should I share my calculator results with the contractor?",
        answer:
          "You can. Frame them as planning figures you want to reconcile, not as an accusation. Good trades will explain differences calmly.",
      },
    ],
  },
  {
    slug: "waste-factors-explained",
    title: "Waste Factors Explained for DIY Material Orders",
    description:
      "Why calculators add waste, typical ranges by material, and how to avoid both short orders and expensive overbuying.",
    updated: "2026-08-23",
    relatedTools: ["flooring-calculator", "paint-calculator", "roofing-calculator", "drywall-calculator"],
    intro:
      "Waste isn’t a fudge factor for bad maths — it’s the predictable loss from cuts, breakage, compaction, and coverage that doesn’t match the tin. Know what you’re padding for, or you’ll either short-order or overbuy.",
    sections: [
      {
        heading: "What waste covers",
        body: [
          "Cutting loss (flooring, decking, drywall), breakage in transit, compaction (gravel, mulch), and coverage that is lower than the ideal lab number on a paint tin.",
          "It does not cover changing your mind about product, fixing someone else’s mistakes, or expanding the project footprint mid-job — that is contingency budget, not waste.",
        ],
      },
      {
        heading: "Typical planning ranges",
        body: [
          "Simple flooring layouts often sit around 5–10%. Complex tile patterns and roofs with hips and valleys often need more. Paint waste is partly rounding to whole tins rather than a percentage of film.",
          "Each tool on this site states the default it uses so you can raise or lower it when your layout is simpler or messier than average.",
        ],
      },
      {
        heading: "When to reduce waste",
        body: [
          "If you are an experienced installer with a straight layout and leftover stock from the same product, you can sometimes order closer to net. For a first project or a matched dye lot, rounding up is cheaper than a second delivery.",
        ],
      },
      {
        heading: "When to increase waste",
        body: [
          "Diagonal floors, heavy demolition next to finished areas, fragile tile, and roofs with many penetrations all justify a higher percentage. If a calculator result feels tight, trust that instinct and add a pack or two.",
        ],
      },
    ],
    faq: [
      {
        question: "Is leftover material wasted money?",
        answer:
          "Unopened packs you can return may be worth the restocking risk. Opened dye-lot material kept for repairs is often valuable later.",
      },
      {
        question: "Does waste replace contingency in a budget?",
        answer:
          "No. Waste is materials maths. Contingency covers unknowns like rotten substrate or price changes. Budget both.",
      },
    ],
  },
  {
    slug: "interior-painting-cost-breakdown",
    title: "Interior Painting Cost: Materials vs Labour",
    description:
      "Separate paint quantity from labour time, prep, and extras so an interior painting quote is easier to read.",
    updated: "2026-08-24",
    relatedTools: ["paint-calculator", "cost-estimator", "drywall-calculator"],
    intro:
      "Homeowners often compare painting quotes by the gallon. Pros price prep and labour first. Split quantity from time and the quote makes more sense — whether you DIY or hire.",
    sections: [
      {
        heading: "Calculate paint before you price labour",
        body: [
          "Use the Paint Calculator for walls (and a separate ceiling calculation). Two coats and realistic coverage matter more than buying the cheapest tin.",
          "Primer on new drywall or stained surfaces is an extra product line — do not bury it inside ‘paint’ if you want comparable quotes.",
        ],
      },
      {
        heading: "What drives labour",
        body: [
          "Prep (filling, sanding, caulking), masking, cut-in quality, ceiling work, and furniture moving often dwarf the cost of the paint itself in a contractor quote.",
          "Empty rooms paint faster than furnished ones. High trim detail slows the job.",
        ],
      },
      {
        heading: "Build a planning total",
        body: [
          "Enter materials in the Cost Estimator, then add a labour allowance if you have an hourly or per-room quote. Keep a contingency for repairs that appear once old paint comes off.",
          "National averages for ‘cost per square foot to paint’ hide prep differences. Prefer itemised scope.",
        ],
      },
      {
        heading: "DIY vs hire",
        body: [
          "DIY saves labour but costs time and risk of visible lap marks. Hiring makes sense when ceilings, stairs, or colour changes need experience — still use your own gallon count to check the material line.",
          "If you DIY, budget primer, tape, drop cloths, and a second ladder day. Consumables are easy to forget when comparing a ‘paint only’ estimate to a full contractor quote.",
          "For rental or resale timelines, labour speed often outweighs the gallon savings — decide with the calendar, not only the tin price.",
        ],
      },
    ],
    faq: [
      {
        question: "Why is the paint line small compared with the total?",
        answer:
          "Because skilled labour and prep dominate. That is normal for a quality interior job.",
      },
      {
        question: "Do darker colours need more paint?",
        answer:
          "Often more coats or a tinted primer. Plan an extra coat when going from light to deep colour.",
      },
      {
        question: "Should ceilings use the same paint as walls?",
        answer:
          "Usually no — ceiling paints are formulated differently. Calculate ceiling area separately from walls.",
      },
    ],
  },
  {
    slug: "patio-base-gravel-before-concrete",
    title: "Why Patio Bases Need Gravel Before Concrete",
    description:
      "How sub-base depth affects stability and how to estimate gravel and concrete as two separate material lines.",
    updated: "2026-08-24",
    relatedTools: ["gravel-calculator", "concrete-calculator", "cost-estimator"],
    intro:
      "A patio fails from what is underneath as often as from the finish on top. Estimate gravel sub-base and concrete as two separate lines so the materials list stays honest.",
    sections: [
      {
        heading: "Role of the sub-base",
        body: [
          "Compacted gravel spreads load and helps water move away from the slab. Pouring concrete on soft or organic soil invites settlement and cracking.",
          "Depth depends on soil and climate. Follow a local specification rather than copying a neighbour’s patio blindly.",
        ],
      },
      {
        heading: "Two calculator runs",
        body: [
          "Run the Gravel Calculator with the sub-base footprint and depth. Run the Concrete Calculator with slab thickness. Add them in the Cost Estimator as separate lines.",
          "If the patio includes a thickened edge or footings, those volumes are extra — note them explicitly.",
        ],
      },
      {
        heading: "Drainage and levels",
        body: [
          "Patios usually need a slight fall away from the house. That can change average thickness slightly; discuss levels before you lock a concrete order.",
          "Against a house wall, flashing and damp-proof details matter as much as cubic metres of mix.",
        ],
      },
      {
        heading: "Before you pour",
        body: [
          "Confirm access for the mixer truck or pump. Cold joints from delayed deliveries show forever on a patio finish — timing matters as much as volume.",
          "Have forms, reinforcement, and a screed board ready before the truck arrives. A late scramble for tools is when edges go wrong.",
          "Plan curing: keep the slab damp and protected from extreme heat or frost according to the mix guidance. Walking on the slab too early can mark a finish that looked perfect at pour.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I use recycled hardcore?",
        answer:
          "Sometimes, if it is clean and compactable. Contaminated fill causes soft spots. Ask the supplier what is in the load.",
      },
      {
        question: "Is sand enough under a slab?",
        answer:
          "A thin sand blinding over compacted hardcore is common in some methods; sand alone is not a substitute for a proper sub-base on soft ground.",
      },
      {
        question: "How soon can I place furniture on a new patio?",
        answer:
          "Light foot traffic is often fine after a day or two; heavier loads should wait longer. Follow the concrete product guidance and your contractor’s advice — early loading is a common cause of surface damage.",
      },
    ],
  },
  {
    slug: "us-uk-units-for-home-projects",
    title: "US and UK Units on the Same Project",
    description:
      "Feet vs metres, gallons vs litres — keep one system per calculation so orders don’t go wrong.",
    updated: "2026-08-25",
    relatedTools: ["concrete-calculator", "paint-calculator", "gravel-calculator", "cost-estimator"],
    intro:
      "DIY advice online mixes US and UK units constantly. Mixing them in one calculation is how orders go wrong. Pick the system you’ll buy in, convert once, and stay there until delivery day.",
    sections: [
      {
        heading: "Pick one system per calculation",
        body: [
          "If you measure the room in feet, keep paint coverage in square feet per gallon. If you measure in metres, use litres and square metres. Do not convert halfway through in your head.",
          "Project Home Calc tools expose unit toggles so the formula stays the same while labels change.",
        ],
      },
      {
        heading: "Volume materials",
        body: [
          "Concrete and gravel are cubic yards or cubic metres; weight is tonnes or tons depending on the market. Supplier tickets may use one while your drawing uses the other — convert once on paper, then stick to it.",
        ],
      },
      {
        heading: "Paint and coverage",
        body: [
          "US cans talk in gallons and square feet; UK tins in litres and square metres. Coverage claims assume ideal surfaces — real walls usually need more product than the optimistic number.",
        ],
      },
      {
        heading: "Money lines",
        body: [
          "The Cost Estimator uses the currency mindset you enter as a unit price. A US price per gallon and a UK price per litre are not interchangeable without converting both price and volume.",
          "When comparing online guides, check whether prices are materials-only or installed. Mixing those categories is a common reason DIY budgets look impossibly cheap next to contractor quotes.",
          "If a supplier lists both metric and imperial pack sizes, pick one system for the whole order sheet and stick to it until delivery day.",
        ],
      },
    ],
    faq: [
      {
        question: "Does the site auto-detect my country?",
        answer:
          "Tools let you choose units explicitly so a VPN or travel location cannot silently change your maths.",
      },
      {
        question: "Are formulas different for the UK?",
        answer:
          "The geometry is the same. Product pack sizes and labelling differ — always match the calculator output to the product you will buy locally.",
      },
      {
        question: "Should I convert every measurement twice to be safe?",
        answer:
          "No — convert once into the system you will buy in, write it down, and run the calculator in that system. Repeated conversions introduce rounding errors.",
      },
    ],
  },
  {
    slug: "planning-a-small-bathroom-refit-budget",
    title: "Planning a Small Bathroom Refit Budget",
    description:
      "Sequence waterproofing, labour, and finishes so a small bathroom budget survives demolition surprises.",
    updated: "2026-08-25",
    relatedTools: ["cost-estimator", "flooring-calculator", "paint-calculator", "drywall-calculator"],
    intro:
      "Small bathrooms still blow budgets because everything is connected: plumbing, waterproofing, ventilation, and finishes. Separate services from cosmetics, and keep contingency for what demolition finds.",
    sections: [
      {
        heading: "Separate fixed services from finishes",
        body: [
          "Plumbing moves, electrical, extraction, and waterproofing are the expensive surprises. Tile and paint are visible but often not the whole story.",
          "Get trade input on services before you fall in love with a tile that needs a perfectly flat wall you do not have yet.",
        ],
      },
      {
        heading: "Materials you can self-estimate",
        body: [
          "Floor area for flooring or tile, wall board if you are reboarding, and paint for ceilings and any painted walls. Use the Flooring, Drywall, and Paint calculators for those lines.",
          "Roll them into the Cost Estimator with labour allowances and a contingency of 15–20% for wet rooms in older houses.",
        ],
      },
      {
        heading: "Sequence to protect money",
        body: [
          "Demolish and expose problems early. Sign off waterproofing before tiling. Order long-lead fixtures only after dimensions are confirmed.",
          "Changing a shower tray size after tiling starts is how small bathrooms become expensive bathrooms.",
        ],
      },
      {
        heading: "What calculators cannot do",
        body: [
          "They will not size soil pipes, confirm tanking systems, or guarantee mould-free ventilation. Those need qualified trades and product-system instructions.",
          "They also will not price permit fees, skip hire, or temporary accommodation if the bathroom is the only one in the house — add those as separate budget lines when relevant.",
          "Keep a dated photo set of the room before demolition. It helps trades quote accurately and helps you explain changes if scope expands.",
        ],
      },
    ],
    faq: [
      {
        question: "Should I renovate around existing plumbing?",
        answer:
          "Keeping services in place usually saves money. Moving a toilet or shower drain is a different project class.",
      },
      {
        question: "Is a full gut always required?",
        answer:
          "Not if surfaces and waterproofing are sound. A cosmetic refresh is cheaper — but only after an honest inspection of leaks and substrate.",
      },
      {
        question: "How much contingency should a wet room carry?",
        answer:
          "Many planners use 15–20% in older homes because hidden water damage is common. Treat contingency as untouchable for upgrades.",
      },
    ],
  },
  {
    slug: "how-many-bags-of-concrete-for-a-slab",
    title: "How Many Bags of Concrete for a Slab?",
    description: "Bag counts for common slab sizes — when bag mix makes sense and when to call the truck instead.",
    updated: "2026-09-01",
    relatedTools: ["concrete-bag-calculator", "concrete-calculator", "concrete-cost-calculator"],
    intro:
      "Bagged concrete is fine for post holes and small pads. It gets expensive and slow once the volume climbs past about a cubic yard. Here is how to sanity-check bag counts before you load the cart.",
    sections: [
      {
        heading: "Quick reference sizes",
        body: [
          "An 8×8 ft slab at 4 in thick is about 0.8 yd³ — roughly 45 eighty-pound bags with 10% waste. A 10×10 ft pad at the same depth is about 1.23 yd³ before waste — that is where ready-mix starts to win on labour.",
          "Post holes are a different shape but the same idea: diameter × depth gives volume, then divide by bag yield. Three 12-inch diameter holes 3 ft deep are still bag territory.",
        ],
      },
      {
        heading: "60 lb vs 80 lb bags",
        body: [
          "Eighty-pound bags cover more ground per trip from the truck. Sixty-pound bags are easier to lift if you are working alone. The label on the bag is the yield that matters — brands differ by a few percent.",
          "Round up. Running out mid-pour with concrete setting in the mixer is worse than returning one unused bag.",
        ],
      },
      {
        heading: "When to stop buying bags",
        body: [
          "Past ~1 yd³, compare bag cost plus your time against a ready-mix quote with a short-load fee. Many homeowners underestimate how long hand-mixing 50+ bags takes.",
          "Use the Concrete Bag Calculator for your exact footprint, then the Concrete Cost Calculator if you want to line it up against a truck price.",
        ],
      },
    ],
    faq: [
      { question: "How many bags for a 12×12 slab?", answer: "At 4 in thick with 10% waste, about 74 sixty-pound bags or 56 eighty-pound bags. Thicker driveways need proportionally more." },
      { question: "Can I mix different bag brands?", answer: "Same strength and type on one pour — do not blend fast-set with standard mix in the same slab." },
      { question: "Does this include the gravel base?", answer: "No. Order sub-base gravel separately." },
    ],
  },
  {
    slug: "planning-a-paver-patio-base",
    title: "Planning a Paver Patio Base",
    description: "Gravel sub-base, sand bedding, and paver counts — the three layers in order.",
    updated: "2026-09-01",
    relatedTools: ["paver-calculator", "sand-calculator", "gravel-calculator"],
    intro:
      "Pavers fail when the base fails. The visible pavers are only the top layer — compacted gravel and screed sand underneath do most of the work.",
    sections: [
      {
        heading: "Layer 1 — compacted gravel",
        body: [
          "Most patios need 4–6 in of compacted crushed stone over firm soil. Use the Gravel Calculator for that volume and tonnage. Compaction matters — loose depth is not finished depth.",
          "Geotextile between soil and stone helps on clay. It does not replace proper depth.",
        ],
      },
      {
        heading: "Layer 2 — bedding sand",
        body: [
          "1–2 in of coarse sand or screed sand sits on top of the gravel. The Sand Calculator handles that thin layer. Do not use play sand — it does not screed flat.",
        ],
      },
      {
        heading: "Layer 3 — pavers",
        body: [
          "Count pavers from patio area, paver size, joint width, and waste. Diagonal patterns need more waste than a running bond. The Paver Calculator covers the top layer only.",
        ],
      },
    ],
    faq: [
      { question: "Can I lay pavers on dirt?", answer: "Not for a long-lasting patio. Without gravel and compaction, pavers settle unevenly after the first winter." },
      { question: "Polymeric sand vs bedding sand?", answer: "Bedding sand goes under pavers. Polymeric sand locks joints after pavers are set — different product, different step." },
    ],
  },
  {
    slug: "how-many-tiles-for-a-bathroom-floor",
    title: "How Many Tiles for a Bathroom Floor?",
    description: "Measure a bathroom floor, pick a waste factor, and order boxes without a surplus pallet sitting in the garage.",
    updated: "2026-09-01",
    relatedTools: ["tile-calculator", "flooring-calculator", "cost-estimator"],
    intro:
      "Bathroom floors are small but cut-heavy. Toilets, niches, and door thresholds eat whole tiles fast. Measure the rectangle, then add waste that matches how you will lay the pattern.",
    sections: [
      {
        heading: "Measure net floor area",
        body: [
          "Length × width of the open floor. The toilet footprint is usually tiled under the pan — do not subtract it unless you are leaving a cut-out.",
          "Alcoves and step-down showers: split into rectangles and add areas.",
        ],
      },
      {
        heading: "Waste by layout",
        body: [
          "Straight lay in a box room: 10% waste is common. Diagonal or herringbone: 12–15%. Large format tiles on a small floor: fewer grout lines but higher breakage risk — keep an extra box.",
        ],
      },
      {
        heading: "Boxes, not loose tiles",
        body: [
          "Suppliers sell by the box. Divide your tile count by tiles per box and round up. Keep one unopened box after the job for future repairs — dye lots change.",
        ],
      },
    ],
    faq: [
      { question: "Wall tile too?", answer: "This guide is floor-focused. Wall area is perimeter × height minus openings — a different measurement pass." },
      { question: "Underfloor heating?", answer: "Does not change tile count. Follow the heating mat manufacturer's guidance on substrate and tile type." },
    ],
  },
  {
    slug: "fence-materials-for-a-straight-run",
    title: "Fence Materials for a Straight Run",
    description: "Panels, posts, and rails from a single fence length — before you buy the wrong kit.",
    updated: "2026-09-01",
    relatedTools: ["fence-calculator", "concrete-bag-calculator", "decking-calculator"],
    intro:
      "Fence kits are sized in panel widths. Measure the run along the ground, not along a slope diagonal, then count panels and posts from spacing that matches your product.",
    sections: [
      {
        heading: "Measure the run",
        body: [
          "String line along where the fence will sit. Measure corner to corner. Gates need their own width subtracted from panel count and two posts minimum per opening.",
        ],
      },
      {
        heading: "Posts and concrete",
        body: [
          "Posts every 6–8 ft are typical for wood panel fencing. Each post needs a hole below frost depth with concrete — use the Concrete Bag Calculator per hole or ask your supplier for a mixed load.",
        ],
      },
      {
        heading: "Slopes and corners",
        body: [
          "This planning model is for a straight, level run. Stepped slopes need racked panels or custom cuts — add an extra panel on long graded runs.",
          "Corners need their own post. Count them separately from line posts.",
        ],
      },
    ],
    faq: [
      { question: "Panel fence vs picket?", answer: "Panel systems use the panel width field. Picket fences need picket spacing math — a different calculator pattern." },
      { question: "How deep for posts?", answer: "Often one-third of post length in the ground, below local frost depth. Check your code." },
    ],
  },
];
