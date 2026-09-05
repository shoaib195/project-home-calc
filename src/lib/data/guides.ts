import type { Guide } from "@/lib/types";
import { extraGuides } from "@/lib/data/guides-extra";

const coreGuides: Guide[] = [
  {
    slug: "how-much-does-a-concrete-patio-cost",
    title: "How Much Does a Concrete Patio Cost?",
    description:
      "A practical breakdown of concrete patio pricing — volume, sub-base, labour, finish, and how to sanity-check a contractor quote.",
    updated: "2026-09-06",
    relatedTools: ["concrete-calculator", "gravel-calculator", "cost-estimator"],
    intro:
      "Concrete patio prices swing hard because you are not buying a product off a shelf — you are buying excavation, base, mix, finish, and access. A plain broom-finish slab and a stamped coloured one can sit in completely different quote ranges for the same footprint. Before you compare numbers, separate thickness, sub-base, labour, and finish so you can see what each bidder is actually selling.",
    sections: [
      {
        heading: "What a patio quote usually covers",
        body: [
          "Most residential quotes bundle four buckets: materials (ready-mix or bagged concrete, gravel sub-base, mesh or rebar, forms), labour (dig, compact, form, pour, finish, strip), equipment (truck access, pump, saw), and finish (broom, stamped, exposed aggregate, colour, sealer).",
          "Labour is often the line that moves most between markets and crews. When two quotes differ widely on the same drawing, ask whether one includes spoil haul-away, a thicker base, or a decorative finish the other left out.",
          "Delivery minimums matter on small slabs. A short pour can still trigger a full truck fee or a bagged-mix workaround that changes the materials line without changing the patio size on paper.",
        ],
      },
      {
        heading: "Thickness drives volume — and volume drives cost",
        body: [
          "A patio people walk on is commonly planned at about 4 inches (100 mm). Slabs that take a hot tub, heavy planters, or occasional vehicle load are often thicker. Going from 4 inches to 6 inches is a 50% jump in concrete volume for the same footprint — that shows up immediately on the materials line.",
          "Run length, width, and depth through the Concrete Calculator before you compare quotes. If one contractor proposes 4 inches and another proposes 5 inches, their material totals should not match even when the patio outline looks identical.",
          "US takeoffs usually talk in cubic yards; UK takeoffs in cubic metres. Stay in one unit from calculator to quote. Mixing systems mid-conversation is how homeowners think they are comparing like-for-like when they are not.",
        ],
      },
      {
        heading: "Sub-base and ground conditions",
        body: [
          "Concrete sits on compacted gravel more often than on raw soil. Soft clay, old fill, or a slope that needs cut-and-fill can double the prep work before anyone opens a chute — cost that never appears in a simple per-square-foot rule of thumb.",
          "Estimate the gravel layer with the Gravel Calculator once you know area and compacted depth. Ask each quote whether base thickness is included and whether spoil leaves the site.",
          "Poor drainage under a slab shows up later as settlement and cracks. If the yard holds water after rain, fix drainage before you argue about stamp patterns.",
        ],
      },
      {
        heading: "Finish, colour, and control joints",
        body: [
          "A plain broom finish is the baseline. Stamping, colour, exposed aggregate, and similar finishes each add labour steps and materials. Those premiums scale with pattern complexity and hand work before the mix sets — not a fixed percentage of a broom slab.",
          "Control joints are not optional decoration. Spacing and depth should match slab thickness. Good quotes mention joint layout; vague quotes often fight about cracks later.",
          "Sealer is sometimes in the pour price and sometimes a follow-up visit. Ask. A sealed stamped patio and an unsealed one are not the same product at the same price.",
        ],
      },
      {
        heading: "Access, weather, and pour-day constraints",
        body: [
          "If a ready-mix truck cannot reach the forms, you pay for a pump or wheelbarrow labour. Narrow side yards and parking limits show up as line items. Walk the access path with the bidder before you accept a lump sum.",
          "Hot weather shortens finishing time; cold weather slows set. Rain on an open pour ruins surface finish. Ask what schedule risk is included in busy seasons.",
          "Reinforcement (mesh, rebar, or fibre) changes materials a little; it does not replace thickness or base quality. Do not thin the slab because fibre was added.",
        ],
      },
      {
        heading: "DIY materials vs hired labour",
        body: [
          "Materials-only DIY looks cheap until you price forms, tools, a helper, and the risk of a bad finish. Small, simple rectangles with good access are the realistic DIY candidates. Large stamped jobs and pump pours are usually false economy for first-timers.",
          "Bagged concrete can make sense when a truck minimum would dominate a tiny pad. Once volume climbs, ready-mix usually wins — check yardage in the Concrete Calculator first.",
          "If you DIY the slab and hire finishing help, clarify who owns the mix, who signs for the truck, and who is responsible if the surface needs grinding.",
        ],
      },
      {
        heading: "Build a number you can defend",
        body: [
          "Start with concrete and gravel volumes from the calculators, then price those lines with local rates. Fold them into the Cost Estimator with labour and finish as separate rows. Keep contingency visible — do not bury it inside a single patio total you cannot explain.",
          "Get at least two or three local quotes for anything beyond a tiny pad. Ready-mix and labour are regional. Ask each quote to split materials, labour, base, and finish.",
          "Worked sketch: a 12 by 14 ft patio at 4 inches is about 56 cubic feet — roughly 2.1 cubic yards before waste. Add a 4-inch gravel base and you have a second volume to price. Those two material lines plus labour and finish are the skeleton of a real estimate.",
        ],
      },
    ],
    faq: [
      {
        question: "Is it cheaper to DIY a concrete patio?",
        answer:
          "Materials alone cost less than a full contractor quote, but concrete is unforgiving. DIY fits small, simple broom-finish slabs with good access. Decorative finishes, poor access, or thick structural slabs usually favour a crew that pours every week.",
      },
      {
        question: "How long before I can use the patio?",
        answer:
          "Light foot traffic is often fine after 24–48 hours; furniture usually waits about a week. Full curing continues for roughly 28 days — keep hot tubs and vehicles off until then unless your contractor specifies otherwise.",
      },
      {
        question: "Does a smaller patio cost more per square foot?",
        answer:
          "Often yes. Mobilisation, forms, and minimum crew time do not shrink linearly. A tiny slab can carry labour close to a moderately larger one, so the per-square-foot number looks worse even when the total is lower.",
      },
      {
        question: "Should I include a gravel sub-base in every estimate?",
        answer:
          "Plan for compacted base unless a local engineer or experienced contractor says the ground is already suitable. Soft soil without base is a common reason slabs settle. Price gravel with the Gravel Calculator, then confirm depth with the person pouring.",
      },
      {
        question: "How do US and UK patio quotes differ in units?",
        answer:
          "US quotes lean on square feet and cubic yards; UK quotes lean on square metres and cubic metres. Convert once, label the unit, and use the Concrete Calculator in the same system as your supplier.",
      },
      {
        question: "What should I ask when two quotes are far apart?",
        answer:
          "Compare thickness, base depth, reinforcement, finish, spoil removal, joints, sealer, and access method. A cheaper number that skips base or uses a thinner slab is a different scope — not a bargain.",
      },
    ],
  },
  {
    slug: "planning-a-home-improvement-budget",
    title: "How to Budget a Home Improvement Project",
    description:
      "Build a renovation budget from materials you can calculate, labour you can quote, and a contingency you refuse to spend on upgrades.",
    updated: "2026-09-06",
    relatedTools: ["cost-estimator", "paint-calculator", "flooring-calculator", "drywall-calculator"],
    intro:
      "Home improvement budgets usually break for a boring reason: the first number was a wish, not a takeoff. Older houses hide wiring, soft subfloors, and out-of-square walls. New finishes tempt mid-project upgrades. Start with materials you can measure, add labour from real quotes, then protect a contingency you do not touch for nicer fixtures. That sequence survives surprises better than a single “about X thousand” guess.",
    sections: [
      {
        heading: "Materials first — because they are measurable",
        body: [
          "Price what you can calculate before you argue about labour. Paint from wall area, flooring from room area plus waste, drywall from walls and ceilings, concrete from length × width × depth. Each of those has a calculator on this site so your materials subtotal is arithmetic, not vibes.",
          "A materials-first sheet also gives you a sanity check against contractor quotes. If your Paint Calculator and Flooring Calculator totals are in one neighbourhood and a quote’s material line is dramatically higher, ask what product grade or waste factor they used. If it is dramatically lower, ask what they left out.",
          "US suppliers quote gallons, square feet, and linear feet; UK suppliers quote litres and square metres. Pick the unit system your receipts will use and stay there. Converting halfway through a spreadsheet is a classic way to double-count or under-order.",
        ],
      },
      {
        heading: "Labour, allowances, and what quotes actually mean",
        body: [
          "Labour is regional and skill-dependent. A lump-sum quote that simply says “paint rooms” without room count, prep level, or number of coats is not comparable to a detailed scope. Ask for line items: prep, prime, finish coats, and whether furniture moving is included.",
          "Allowances for fixtures and finishes are placeholders, not discounts. If the tile allowance is modest and you fall in love with a premium porcelain, the overage comes from your pocket — not from the contractor’s goodwill. Write allowances down with a product example so nobody pretends later that “tile” meant the showroom display.",
          "DIY labour is not free. Your time, tool hire, skip fees, and rework after mistakes belong on the sheet if you want an honest comparison to hiring out.",
        ],
      },
      {
        heading: "Contingency that actually works",
        body: [
          "A 10–20% contingency on the full estimated budget is common planning practice for renovations, especially in older homes. Use the higher end when you are opening walls, changing layout, or touching plumbing and electrical. Use the lower end for cosmetic work on a house you already know well.",
          "Treat contingency as unavailable for upgrades. Want a better tap or a wider plank mid-project? That comes from a separate “wants” line you funded on purpose — not from the buffer that exists for rotten sill plates and surprise asbestos testing.",
          "If you spend contingency early on a nicer light fixture, you have no buffer when the subfloor fails. That pattern is how projects stall with paint on half the walls and a maxed card.",
        ],
      },
      {
        heading: "Sequence spending around irreversible work",
        body: [
          "Lock structure, waterproofing, plumbing locations, and electrical layouts before you buy finish materials that depend on those decisions. Changing a shower valve after tile is set costs more than changing it on paper.",
          "Order long-lead items only after dimensions are confirmed. Custom windows, specialty doors, and made-to-order cabinets punish early guesses. Temporary protection and storage fees also belong in the budget if materials arrive before the room is ready.",
          "Paint last among finishes in most rooms — after flooring decisions that create dust, and after dense patching. Running the Paint Calculator too early is fine for a planning band; placing the final tin order before the walls are truly ready is how you own extra sheen mismatches from touch-up batches.",
        ],
      },
      {
        heading: "One sheet, one range — not false precision",
        body: [
          "Fold materials, labour, delivery, and fees into the Cost Estimator so you see a planning range instead of a single heroic total. False precision (“exactly $14,280”) comforts people and then betrays them when the first change order lands.",
          "Keep waste on the materials lines where it belongs. Keep contractor markup separate if you are a homeowner checking a bid — set markup at 0% in the estimator unless you are pricing as a trade. Mixing homeowner cost and trade sell price on one line creates fake gaps.",
          "Revisit the sheet when scope changes. A “small” extra doorway is drywall, paint, casing, and sometimes flooring — not a free favour. Update the Cost Estimator the same day you approve the change, while the decision is still conscious.",
        ],
      },
      {
        heading: "Quotes, financing, and cash flow",
        body: [
          "Get preliminary quotes before you lock financing amounts when you can. Borrowing against a guess produces either expensive leftover credit or a mid-project shortfall. Lenders and your own savings both work better against a materials-plus-labour sheet with contingency named.",
          "Deposit schedules should match work progress. Large upfront payments for vague scopes are a red flag. Tie payments to milestones you can see: demo complete, rough-in inspected, finishes installed.",
          "Sales tax, permit fees, skip hire, and parking permits are easy to forget and annoying when they appear as “extras.” Add a small admin line so they are not stolen from contingency.",
        ],
      },
      {
        heading: "A simple budget skeleton you can copy",
        body: [
          "Example: refresh one bedroom — new flooring, paint, and minor drywall patch. Calculate flooring with waste, paint with two coats via the Paint Calculator, and a modest drywall patch allowance. Add labour quotes or DIY hours. Add 15% contingency. Put the whole stack in the Cost Estimator and label it “bedroom refresh — estimate.”",
          "When the flooring quote arrives, replace your flooring materials line with theirs if their product and waste assumptions are clear. Keep paint as your calculated line until a painter quotes prep properly. The point is a living sheet, not a frozen PDF.",
          "If the project grows into adjoining hallway work, do not silently absorb it. Split a second mini-budget so you can see whether the hallway is funded or is eating the bedroom contingency.",
        ],
      },
    ],
    faq: [
      {
        question: "What percentage of a home’s value should a renovation cost?",
        answer:
          "There is no universal rule that fits every market and goal. Long-term living and resale math differ. Match the budget to cash and contingency you can actually fund — not to a percentage you saw in a headline.",
      },
      {
        question: "Should I arrange financing before or after quotes?",
        answer:
          "Aim for a rough materials-and-labour budget and at least preliminary quotes first. Financing a round number with no takeoff behind it is how people over-borrow or run short after demolition starts.",
      },
      {
        question: "Is 10% contingency enough?",
        answer:
          "Sometimes for cosmetic work in a well-known house. Opening walls, moving plumbing, or renovating an older property often warrants more like 15–20%. Raise it when the unknown list is long.",
      },
      {
        question: "How do I stop upgrades from destroying the budget?",
        answer:
          "Keep a separate wants fund. Contingency is for unknowns, not for nicer fixtures. If you want the upgrade, move money from wants — or change scope elsewhere on purpose and write it down.",
      },
      {
        question: "Can I budget from online average prices alone?",
        answer:
          "Use averages only as a first band. Local labour, access, and product choices dominate. Replace averages with calculator-based materials and local quotes as soon as you have dimensions.",
      },
      {
        question: "Where does the Cost Estimator fit?",
        answer:
          "Use it after you have material quantities and at least draft labour figures. It is a consolidation and range tool — not a substitute for measuring rooms or reading a contractor’s scope.",
      },
    ],
  },
  {
    slug: "how-much-paint-for-a-room",
    title: "How Much Paint Do You Need for a Room?",
    description:
      "Measure wall area correctly, choose coats and coverage, and convert that into US gallons or UK litres without short-ordering mid-wall.",
    updated: "2026-09-06",
    relatedTools: ["paint-calculator", "drywall-calculator"],
    intro:
      "Paint runs out at the worst moment: halfway across a feature wall, with a different batch waiting on the shelf. Floor area will not save you — wall paint follows perimeter and height. Measure net wall area, pick a realistic coverage rate and coat count, then round up to whole tins. The Paint Calculator does that arithmetic; this guide explains the judgement calls around it.",
    sections: [
      {
        heading: "Walls are perimeter work, not floor-area work",
        body: [
          "Gross wall area is perimeter times ceiling height. Perimeter is 2 × (length + width) for a simple rectangle. Two rooms with the same floor footprint need different paint if one has 8 ft ceilings and the other has 10 ft — easy to forget when someone quotes “a 12 by 12 room.”",
          "Subtract doors and windows you will not paint as wall. The Paint Calculator uses planning deductions of about 21 ft² (roughly 2 m²) per door and 15 ft² (roughly 1.4 m²) per window. Huge patio doors deserve a custom subtraction; tiny windows often are not worth nitpicking if you are already rounding up a tin.",
          "Closets painted the same colour belong in the takeoff. Unpainted closets or a different product should be separate — write which is which on the sketch.",
        ],
      },
      {
        heading: "Coats, primer, and real coverage",
        body: [
          "Can labels assume a recommended spread rate on a suitable surface. A common planning rate is about 350 ft² per gallon (around 12 m² per litre) per coat on smooth, sealed walls. Texture, thirsty new drywall, and cheap paint all reduce coverage. Dark-to-light changes often need more film than a same-family refresh.",
          "Two finish coats are the default for a noticeable colour change. One coat can work for a similar-colour refresh with a high-hide product on sound paint — plan two unless you have tested a patch.",
          "New plaster or drywall usually wants a sealing primer before finish colour. Treat primer as its own pass in the Paint Calculator. Skipping it to “save a tin” is how flashing shows under angled light.",
        ],
      },
      {
        heading: "Ceilings, trim, and doors are different jobs",
        body: [
          "Ceiling paint uses floor area (length × width), not the wall formula. Many people underestimate ceilings because they shop only from a wall tin count. Keep a different colour or sheen on its own line.",
          "Trim, skirtings, and doors usually take a different sheen and often a different base. Do not fold trim into the wall gallon count. Budget a dedicated tin — running out of enamel mid-cut-in is as painful as running out of wall paint.",
          "Sample pots decide colour in your light. They are not a substitute for a full-room calculation once the colour is chosen.",
        ],
      },
      {
        heading: "US gallons vs UK litres",
        body: [
          "US projects usually buy gallons and quarts; UK projects buy litres and 2.5- or 5-litre tins. The Paint Calculator works in either system — match the output to the shelf you will shop.",
          "Always round up to whole containers. Keeping a labelled leftover for touch-ups is a reason to round up slightly — not a reason to buy an extra 5-litre tub for a small powder room.",
          "Batch codes matter on large open-plan walls. Buy enough in one go for continuous surfaces you will see together. A second purchase weeks later can sit in a different batch even with the same colour name.",
        ],
      },
      {
        heading: "Surface condition changes the tin count",
        body: [
          "Glossy existing paint, stains, and repairs affect prep and sometimes coat count. Stain-blockers and patch primers are extra products — budget them when you can see the problem.",
          "If you are hanging or patching board first, finish that work and prime before you trust a final paint quantity. After drywall, reuse wall and ceiling areas in the Paint Calculator so boarding and paint takeoffs stay consistent.",
          "Heavy texture drinks paint. Drop your effective coverage rate rather than pretending the label’s best-case number still applies. One extra tin beats a starved roller patch.",
        ],
      },
      {
        heading: "Worked example",
        body: [
          "A 12 by 10 ft room with 8 ft ceilings, one door, and two windows, two coats: perimeter 44 ft, gross walls 352 ft². Deduct about 21 + 15 + 15 = 51 ft². Net walls ≈ 301 ft². Two coats → about 602 ft². At 350 ft² per gallon that is roughly 1.7 gallons — buy 2 gallons (or the matching UK litre tin size).",
          "Add the ceiling separately if you are painting it: 120 ft² times coats, divided by coverage. Trim is a third line. Price volume with the Paint Cost Calculator or Cost Estimator when you are building a room budget, not only a shopping list.",
          "Run the same dimensions through the Paint Calculator. If your notepad and the tool disagree, you probably forgot a coat, mixed floor area into walls, or skipped openings on one method.",
        ],
      },
      {
        heading: "Buying and storing without waste theatre",
        body: [
          "Order for the rooms you will paint in one campaign. Stopping for months mid-colour across an open stair void invites a batch mismatch. If the project is phased, buy continuous surfaces together.",
          "Store leftover paint sealed, labelled with room and date, away from freezing. Touch-ups work best with the same sheen and a feathered edge.",
          "Disposal rules differ by locality. Do not pour leftover paint down drains. Factor a small disposal cost into big projects if you will have partial tins you cannot keep.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I paint a room with one coat?",
        answer:
          "Sometimes, when refreshing a similar colour with a high-hide product on a sound, sealed surface. For a clear colour change, new board, or stained walls, plan on primer as needed plus two finish coats.",
      },
      {
        question: "Should leftover paint be part of the estimate?",
        answer:
          "Rounding up to the next tin for touch-ups is sensible. Buying a whole extra large tub “just in case” for a small room usually wastes money. Label what you keep.",
      },
      {
        question: "Do I measure in feet or metres?",
        answer:
          "Use the unit system your paint is sold in. The Paint Calculator supports both — stay consistent from wall measure to tin coverage so you do not convert twice by accident.",
      },
      {
        question: "How do ceilings change the total?",
        answer:
          "Ceilings use floor area times coats, separate from walls. Ignoring the ceiling under-counts whenever you intend to repaint it the same weekend as the walls.",
      },
      {
        question: "What coverage rate should I assume?",
        answer:
          "Start near 350 ft² per gallon (about 12 m² per litre) per coat on smooth sealed walls, then reduce for texture, bare board, or deep colour changes. When unsure, round up a container.",
      },
      {
        question: "Where does paint cost fit beside litres?",
        answer:
          "Once you know volume, price tins with the Paint Cost Calculator or fold material lines into the Cost Estimator. Quantity first, money second — reversing that order produces neat budgets that still run out of paint.",
      },
    ],
  },
  {
    slug: "how-to-estimate-roofing-materials",
    title: "How to Estimate Roofing Materials from the Ground",
    description:
      "Turn building footprint and pitch into roof squares, bundles, or tile packs — with waste — without pretending the result replaces a roofer’s takeoff.",
    updated: "2026-09-06",
    relatedTools: ["roofing-calculator", "cost-estimator"],
    intro:
      "Roofing quotes make more sense when you already know roughly how much field area you have. You can estimate that from the plan footprint and pitch without walking the ridge. Use the result for planning and quote checks — not as a substitute for a measured survey on a cut-up roof with dormers, valleys, and multiple pitches. The Roofing Calculator applies the pitch factor; you still have to feed it honest dimensions and a sensible waste allowance.",
    sections: [
      {
        heading: "Footprint first — then pitch",
        body: [
          "Measure or take from drawings the building length along the ridge direction and the width from eave to eave. That rectangle is the plan footprint, not the shingle surface. Include roofed porches you intend to cover with the same system; exclude detached sheds unless they are part of the order.",
          "Pitch is rise over a 12-inch run in US terms (for example 6/12). The sloped area is footprint × √(1 + (rise/12)²). Steeper roofs need more material for the same house outline — that is geometry, not contractor padding. The Roofing Calculator applies that factor when you enter pitch.",
          "If you cannot read pitch from the street with confidence, use a slightly steeper planning pitch or wait for a measured value. Underestimating pitch under-orders field material; overestimating a little is safer for a shopping band than pretending a 4/12 is flat.",
        ],
      },
      {
        heading: "Squares, bundles, and UK pack coverage",
        body: [
          "In the US, a roofing square is 100 square feet of roof surface. Many asphalt shingle products pack about three bundles per square — always check the wrapper, because architectural and specialty products can differ. Bundle count from a calculator is a typical asphalt assumption, not a law of physics.",
          "In the UK, interlocking tiles, slates, and felt are sold by coverage per pack or per thousand. Convert sloped area to square metres, then divide by the coverage on the product data sheet. Do not import a US bundle habit onto a concrete interlocking tile order.",
          "Starter course, ridge, hips, and valley materials are extras on top of field area. A simple gable might be planned with about 10% waste on field shingles. Hips, dormers, and lots of penetrations often need 15% or more. Waste is cutting and fitting loss — not a place to hide underlayment you forgot to list.",
        ],
      },
      {
        heading: "Break complex roofs into pieces",
        body: [
          "L-shapes, T-shapes, and add-ons should be split into rectangles (or triangles) with their own footprints and pitches if pitches differ. Run the Roofing Calculator per piece and add the results. One giant rectangle drawn around an L will invent area you do not have — or miss a wing entirely if you are careless.",
          "Dormers add walls of roofing and extra flashing. They are easy to under-count from the ground. If dormers dominate the look of the roof, treat a DIY footprint estimate as a rough band only and get a trade takeoff before ordering.",
          "Multiple roof pitches on one house need multiple factors. Averaging pitches “by eye” is how people short a steep front and overbuy a shallow rear without knowing why the piles look wrong on the drive.",
        ],
      },
      {
        heading: "What field-area maths leaves out",
        body: [
          "Underlayment, ice-and-water shield in cold climates, eaves trays, flashing, vents, ridge ventilation, nails, and adhesive are separate lines. Tear-off of the old roof is labour and disposal, not a shingle count. Stacking those into “materials” without labels makes quote comparison impossible.",
          "Structural repairs — rotten decking, damaged rafters — appear after tear-off more often than homeowners want. Budget a contingency line in the Cost Estimator for decking sheets when the roof is old, not only for shingle waste.",
          "Permits, scaffolding or roof access equipment, and skip hire can rival the cost of the field material on awkward sites. Ask what access method the quote assumes before you celebrate a low materials number.",
        ],
      },
      {
        heading: "Reading a contractor quote with your own number",
        body: [
          "Put your calculated squares or square metres next to the quote’s material quantity. If they differ by a wide margin, ask whether they included waste, starter, ridge, and which roof planes. A professional takeoff should explain extras; a vague lump sum should be unpacked.",
          "Product specification matters as much as quantity. Thirty-year architectural shingles and a thin builder-grade product are not interchangeable just because both cover a square. Match life expectancy, wind rating, and warranty needs to the climate and the roof pitch.",
          "Labour often dwarfs shingles on steep or high roofs. Keep labour and materials separate in the Cost Estimator so a “cheap square” does not hide expensive access and tear-off.",
        ],
      },
      {
        heading: "Safety and when to stop estimating yourself",
        body: [
          "Roofing is a fall hazard. Ground-based estimating exists so you are not climbing for a shopping list. If the only way to get a trustworthy number is to walk the roof and you are not trained or insured for that, hire someone who is.",
          "Complex valleys, low-slope membranes, listed buildings, and commercial assemblies need specialist specification. The calculator is for planning common pitched residential roofs, not for designing a flat-roof waterproofing system.",
          "Order materials only after a qualified roofer confirms quantities and product for the actual roof. Your estimate is a planning tool and a quote-check — shipping pallets based on a footprint sketch alone is how wrong colours and short ridge packs appear on install day.",
        ],
      },
      {
        heading: "A compact worked example",
        body: [
          "Suppose the house footprint under a simple gable is 40 ft by 24 ft (960 ft² plan). At a 6/12 pitch, the pitch factor is √(1 + 0.5²) ≈ 1.118, so sloped area ≈ 1,073 ft² — about 10.7 squares before waste. With 10% waste you plan roughly 11.8 squares. At three bundles per square that is about 36 bundles of field shingles, before starter and ridge.",
          "Same footprint in metric: about 12.2 m by 7.3 m ≈ 89 m² plan. Apply the same pitch factor for sloped area, then divide by tile pack coverage from the UK product sheet and add waste for cuts at verges and hips.",
          "Enter the footprint and pitch in the Roofing Calculator and confirm the squares or square metres match your notepad. Then price field materials and a labour allowance separately in the Cost Estimator so the planning band stays honest.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I estimate pitch from the street?",
        answer:
          "Roughly, yes, but misreads are common. If the rise is unclear, use a conservative steeper pitch for planning or wait for a measured pitch from a roofer before you order.",
      },
      {
        question: "Do architectural shingles always use three bundles per square?",
        answer:
          "Many do, but not all. Read the wrapper or data sheet. The Roofing Calculator’s bundle figure is a typical asphalt planning assumption — override it when your product says otherwise.",
      },
      {
        question: "How much waste should I add?",
        answer:
          "About 10% is a common planning default on a simple gable. Hips, valleys, dormers, and busy penetrations often need 15% or more on field material. Ridge and starter are usually additional, not covered by that waste alone.",
      },
      {
        question: "Does this replace a roofer’s takeoff?",
        answer:
          "No. It replaces napkin maths for budgeting and quote checks. Cut-up roofs, low-slope areas, and structural unknowns still need a professional measure and specification.",
      },
      {
        question: "What about underlayment and flashing?",
        answer:
          "Estimate them as separate lines. Field shingle or tile area does not automatically buy ice shield, vents, or step flashing. Ask your roofer what the system requires for your climate and roof detail.",
      },
      {
        question: "US squares vs UK tile packs — which should I use?",
        answer:
          "Use squares and bundles when buying US asphalt systems; use square metres and pack coverage when buying UK tiles or slates. The Roofing Calculator helps with area — the product sheet finishes the order unit.",
      },
    ],
  },
];

export const guides: Guide[] = [...coreGuides, ...extraGuides];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
