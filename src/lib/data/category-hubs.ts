import type { CategorySlug } from "@/lib/types";

/**
 * Long-form hub copy for category index pages.
 * AdSense reviewers often land on these URLs — keep them substantial and original.
 */
export const categoryHubBodies: Record<CategorySlug, string> = {
  construction: `Construction calculators on Project Home Calc turn length, width, and depth into order quantities you can take to a ready-mix plant, bag aisle, or gravel yard. They are planning tools — not structural designs — so every result sits next to the formula and a worked example you can re-run with your own numbers.

## What this category covers

Use these tools when the job is bulk material: concrete for slabs, pads, and footings; gravel or sand for bases and bedding; brick counts for short walls; and cost lines that convert volume into a planning price band. Most patio and driveway mistakes start with the wrong thickness or a missing sub-base, not with a fancy finish.

## How to use the tools together

1. Size the pour or base with the **Concrete** or **Gravel** calculator.
2. Check bag counts on small jobs with the **Concrete Bag** tool when a truck minimum would dominate.
3. Price materials with the **Concrete Cost** or **Gravel Cost** calculators, then fold labour into the **Cost Estimator** if you need a full planning total.
4. Read a related guide when two quotes disagree on thickness, waste, or base depth.

## Typical project paths

- **Patio or shed pad:** concrete volume → gravel sub-base → cost range → patio cost guide.
- **Driveway base:** gravel depth and tonnage before any surface layer.
- **Fence posts or small pads:** bagged mix often beats a short-load truck — compare with ready-mix vs bags guidance.
- **Brick garden wall:** brick count plus mortar allowance; confirm bond pattern with your mason.

## Units and assumptions

Every tool supports US (feet/inches, yards, tons) and UK (metres/centimetres, cubic metres, tonnes) units. Switching units converts what you already typed. Waste percentages are editable defaults — irregular digs and decorative pours need more than a clean rectangle.

Depth is kept in inches or centimetres because that is how plans specify slab and base thickness. Mixing unit systems mid-quote is how homeowners “compare” two numbers that are not the same scope.

## What these calculators do not include

Permits, frost-line footings, rebar schedules, soil reports, pump hire, spoil haul-away, and decorative finish premiums are usually separate lines. If a contractor’s number is far from your materials estimate, ask which of those items are included before you assume someone is overcharging.

## Related reading

Browse the guides for patio cost, slab thickness, gravel driveways, waste factors, and ready-mix versus bags. Each article is written to sit next to these calculators so you can check a quantity and then understand why a quote moved.`,

  landscaping: `Landscaping calculators here are for bed volumes, paver counts, and soil layers — the parts of a yard project you can measure with a tape before you call a landscape yard. They help you order mulch, topsoil, sand, and pavers without guessing from a “looks about right” glance at the driveway.

## What this category covers

- **Mulch and topsoil** by bed area and depth (bags vs bulk once volume climbs).
- **Pavers** by patio footprint, paver size, joint gap, and waste for cuts.
- **Sand** for bedding and screed layers under paving.
- Links out to gravel tools when you need a compacted sub-base under a patio or path.

## How a typical patio stack is ordered

A durable paver patio is rarely “just pavers.” From the ground up you usually plan compacted gravel, a thin sand bedding layer, the pavers, then joint sand. Estimate each layer with the matching calculator so one quote line cannot hide a missing base.

Concrete patios swap the paver stack for a poured slab — still with gravel underneath in most residential builds. Use the construction tools for the pour and keep landscaping tools for planting beds around the edge.

## Measuring tips that change the order

- Measure the planted or paved area, not the whole yard.
- Convert irregular beds into rectangles or triangles and add the pieces.
- Decide depth before you price: mulch for weed suppression is often 2–3 inches; new planting beds may want thicker topsoil.
- Paver waste jumps on diagonal or herringbone patterns — rectangles with a straight bond need less.

## Units and delivery reality

US jobs lean on cubic yards and tons; UK jobs on cubic metres and tonnes. Bulk delivery needs a tip location and often a minimum load. Bagged products win on tiny beds and lose once you pass roughly a yard of material.

## What we leave out

Plant spacing, irrigation design, retaining-wall engineering, and live nursery pricing are outside these tools. If your site drains poorly, fix water movement before you invest in a thick mulch or paver order — wet bases fail first.

## Related reading

Guides cover mulch depth, topsoil needs, paver patio bases, and gravel before concrete. Open the matching calculator from the article when you want to re-run the worked numbers with your bed size.`,

  flooring: `Flooring calculators turn measured room dimensions into tile counts or whole boxes of laminate, vinyl plank, engineered wood, and similar products. The useful number is not simply floor area. A real order also accounts for cuts, damaged pieces, pattern direction, pack coverage, and the fact that a shop cannot sell part of a sealed box.

## What this category covers

- **Boxed flooring:** laminate, vinyl, engineered wood, and comparable products calculated from room area, pack coverage, and waste.
- **Floor tile:** individual tile and box counts from room size, tile dimensions, pack quantity, and layout allowance.
- **Project budgeting:** quantities can be carried into the Cost Estimator with underlay, trims, adhesive, and fitting kept as separate lines.

## Measure the room in useful pieces

A rectangular bedroom is length × width. An L-shaped kitchen is two rectangles added together. Measure closets, bays, chimney breasts, and door recesses as their own sections rather than drawing one large rectangle around everything. Keep a small sketch with each dimension written beside it; that sketch is more useful at the trade counter than a single total with no audit trail.

Do not automatically subtract kitchen cabinets. Floating floors may stop at fixed units, while tile sometimes continues beneath appliances or future cabinet lines. Decide the installation boundary first. Stairs, landings, and vertical risers also need a separate takeoff because plank direction and nosing products change the count.

## Choose waste from the layout

Waste is the material consumed by end cuts, staggered joints, awkward corners, breakage, and pieces that cannot be reused elsewhere. For a simple straight-lay rectangular room, 5–10% is a sensible planning range. Use roughly 10–15% for several alcoves, large-format tile, or a product with strict joint staggering. Diagonal tile, herringbone, and patterned layouts can need 15–20%, especially in a small room where each edge creates another cut.

Waste is not the same as a repair reserve. Many installers suggest keeping one unopened box after completion because production shades and locking profiles can change. Add that box after the calculator result if you want it available for a future leak or damaged plank.

## Read the box, not the shelf headline

Pack coverage controls the order. Two boxes with the same number of planks can cover different areas because board widths and lengths differ. Tile cartons may list nominal dimensions, actual dimensions, pieces per box, and total coverage. Enter the printed coverage or exact piece count from the SKU you will buy.

Check batch, shade, and calibre markings before leaving the store. Tile shade can vary between runs, and wood-look flooring from a later batch may not blend across one open room. If the retailer accepts returns, ask whether unopened boxes are returnable and for how long.

## Cost planning

The calculator output covers the visible floor product. A complete materials list may also need underlay or a vapour barrier, adhesive, grout, levelling compound, transition strips, skirting or baseboard, threshold profiles, and stair nosings. Delivery and disposal can be meaningful when old tile or glued flooring must be removed.

Labour depends on preparation as much as room size. A flat, dry subfloor is faster than one needing grinding, plywood repairs, or moisture treatment. Keep preparation separate when comparing quotes; a lower fitting price that assumes a ready subfloor is not equivalent to a quote that includes levelling.

Example: a 12 × 15 ft US room is 180 ft². At 10% waste, plan for 198 ft². If one box covers 22 ft², the order is exactly nine boxes; an optional repair reserve makes ten. In the UK, a 3.6 × 4.5 m room is 16.2 m², or 17.82 m² with 10% waste. At 1.98 m² per pack, that is nine packs.

## What these tools do not do

These tools do not test subfloor moisture, flatness, movement, or asbestos risk. They do not decide whether timber can be installed in a basement, whether a wet room needs tanking, or whether underfloor heating is compatible with the adhesive. Follow the manufacturer’s installation guide and ask the supplier or fitter to confirm the complete system before ordering.

## Related reading

Read the flooring waste guide for layout choices, the bathroom tile article for small-room cuts, and the room-measuring guide for irregular shapes. Run the Flooring or Tile Calculator with the same dimensions shown on your sketch, then have the supplier confirm pack coverage and batch availability.`,

  painting: `Painting calculators convert room dimensions, openings, coat count, and product coverage into gallons or litres. The related cost tool adds a local paint price and labour rate, while the wallpaper calculator handles roll coverage and pattern waste. Together they provide a measured shopping list, not a promise that every wall will cover exactly like the label.

## What this category covers

- **Wall paint quantity** from room perimeter, ceiling height, doors, windows, coats, and stated coverage.
- **Interior paint cost** from the same wall area plus product price and a labour allowance.
- **Wallpaper rolls** from wall area, openings, usable roll coverage, and pattern-match waste.

## Measure walls, ceilings, and trim separately

For a rectangular room, wall area starts with perimeter × height. Subtract doors and windows that will not receive wall paint, then multiply by the number of coats. Large patio doors deserve their measured area rather than a standard opening allowance. Closets painted in the same colour belong in the wall total; feature walls in another colour should be calculated separately.

Ceilings use length × width, not the wall perimeter formula. Trim, skirting, doors, radiators, and cabinetry usually take a different product and sheen. Keeping them on separate lines prevents a gallon of wall emulsion from being treated as if it also covers enamel work.

Vaulted rooms and stairwells should be split into rectangles and triangles. Do not climb solely to measure a difficult wall; plans, safe laser measurements, or a decorator’s site visit are better than risking a fall for an early estimate.

## Treat label coverage as a starting point

A typical planning figure for smooth sealed walls is around 350 ft² per US gallon per coat, or about 12 m² per litre. The actual label wins. Porous new plaster, bare drywall, heavy texture, masonry, and strong colour changes reduce practical coverage. A deep red covered with a pale neutral may need primer and more finish coats than a same-colour refresh.

Primer is its own product with its own coverage. Do not hide it by increasing wall-paint waste. Patch primer, stain blocker, mist coats for new plaster, and specialist kitchen or bathroom coatings should also be listed separately when the substrate requires them.

Buy enough of one batch for continuous walls seen together. If the result lands between container sizes, round up to a combination the retailer sells and keep a labelled amount for touch-ups.

## Wallpaper specifics

Wallpaper is better understood as full-height drops, although area gives a practical early estimate. A roll that appears to cover 5 m² may produce fewer useful drops when the wall is tall or the repeat is large. Straight match, half-drop, and random match do not create the same waste.

Openings reduce paper less neatly than paint because offcuts around windows may not match the next drop. Buy the same batch number for one room. Confirm whether US packaging describes a single roll or a double-roll bolt, and use the usable coverage of the physical unit being purchased.

## Build a realistic cost

Paint cost is more than tins. Add primer, filler, caulk, masking, rollers, brushes, trays, protective sheets, access equipment, and disposal where relevant. Labour quotes should state preparation, number of coats, ceilings, trim, furniture moving, and repairs. A one-day refresh on sound walls is not comparable with a quote that includes sanding, stain blocking, and two finish coats.

As an example, a 12 × 10 ft room with 8 ft ceilings has 352 ft² of gross wall area. After one standard door and two windows, the planning area is about 301 ft². Two coats require about 602 ft² of coverage, or roughly 1.72 US gallons at 350 ft² per gallon, so buy 2 gallons in available sizes. The same method works in litres using the tin’s m²-per-litre figure.

## Exterior and specialist limits

These calculators are tuned for interior rooms. Exterior siding, masonry, render, fences, and metal surfaces have different preparation, access, and spread rates. Lead paint, persistent damp, mould, and unstable plaster need investigation before decorating. Confirm the coating system with the manufacturer, retailer, or decorator rather than relying on room maths alone.

## Related reading

Read the room-paint guide for coat decisions, the paint-label guide for coverage wording, and the interior cost guide for labour scope. Run the Paint, Paint Cost, or Wallpaper Calculator with your own room dimensions, then confirm tins, rolls, batch numbers, and substrate preparation with the supplier.`,

  roofing: `The roofing calculator estimates sloped roof area from a building footprint and pitch, then converts that area into US roofing squares, typical asphalt-shingle bundles, or square metres for a UK product takeoff. It is useful for budgeting and checking the scale of a quote from safe ground measurements. It is not a final order list for a roof with several pitches, dormers, valleys, or unusual details.

## What this category is for

Use this category when you need to:

- Convert a simple plan footprint and pitch into approximate sloped surface area.
- Translate US area into 100 ft² roofing squares and a planning bundle count.
- Carry UK square metres into tile, slate, or membrane pack coverage from a manufacturer’s sheet.
- Compare the material basis of two quotes before discussing labour, access, and tear-off.

Use drawings or safe ground-level measurements. A roofing contractor can measure complex planes with the fall protection the work requires.

## Footprint, pitch, and separate roof sections

A roof surface is larger than the flat plan below it. The calculator applies the slope factor √(1 + (rise ÷ run)²). In US notation, a 6/12 pitch has a factor of about 1.118, so a 1,000 ft² plan becomes roughly 1,118 ft² of sloped area before waste. The same geometry works in metric once the pitch ratio is known.

A simple gable over one rectangle is the best fit. Split an L-shaped building into rectangles and calculate each section. If an extension has a different pitch, run it separately. One average pitch across a steep front and shallow rear can hide a sizeable error.

Dormers, curved sections, turrets, valleys, and intersecting roofs need a measured trade takeoff. Waste cannot repair bad geometry; raising the percentage on an inaccurate footprint only produces a larger inaccurate number.

## Squares, bundles, tiles, and membranes

One US roofing square means 100 ft² of installed roof area. Many asphalt shingles use three bundles per square, but heavier architectural and specialty products can differ. Read the wrapper or manufacturer coverage table before turning squares into a purchase.

UK pitched roofing is commonly ordered in square metres with tiles per square metre, battens, underlay, and fittings listed separately. Headlap and pitch can change the number of tiles required. Slate, interlocking concrete tile, and plain tile should not share one generic pack assumption.

Low-slope and flat roofs use membranes, felts, liquid systems, or metal details sold in different units. Do not use an asphalt-shingle bundle result for them. Ask the chosen system supplier for laps, upstands, perimeter details, and compatible accessories.

## Waste and the items area does not capture

Around 10% field-material waste is a reasonable planning point for a simple gable. Hips, valleys, dormers, and many penetrations may push field waste toward 15% or more. The right figure depends on product size and roof layout, so a roofer’s cutting plan takes priority.

Field area does not automatically include starter strips, hip and ridge units, verge pieces, valley lining, flashing, vents, underlayment, ice-and-water membrane, battens, nails, clips, or sealants. Measure linear details separately. Tear-off disposal and replacement decking are also separate cost lines, not reasons to inflate the bundle count.

## Safety and access

Roof area may be straightforward while labour is not. Height, pitch, scaffolding, parking restrictions, fragile coverings, solar panels, and a long carry from the delivery point all affect price. Weather can shorten the safe working window and require temporary protection.

When quotes differ, compare the number of tear-off layers, decking-repair allowance, membrane specification, ventilation, flashing replacement, waste removal, access equipment, warranty, and tax. Two contractors can agree on 18 squares while pricing very different roof systems.

## How to use the result

1. Measure each simple plan section from drawings or ground level.
2. Enter its pitch and calculate sloped area.
3. Add field-material waste appropriate to the shape.
4. Convert area using the exact product coverage.
5. List linear accessories and roof-deck allowances separately.
6. Ask a roofer or merchant to confirm the takeoff before ordering.

## What the calculator cannot approve

The result does not assess rafter condition, ventilation, condensation, wind, snow load, fire rules, or planning restrictions. It cannot decide whether an old covering can remain. Structural and code questions belong with a qualified roofer, designer, engineer, or building-control authority.

## Related reading

Read “How to Estimate Roofing Materials from the Ground,” the roofing-square guide, and the waste-factor guide. Then use the Cost Estimator to keep field material, accessories, labour, access, and disposal visible as separate planning lines.`,

  "deck-fence": `Deck and fence calculators convert a plan length or deck area into boards, panels, posts, and rails. They help you build a materials list before you stand in the timber aisle guessing how many packs fit the run.

## What this category covers

- **Decking:** board count from deck area, board width, and gap assumptions, plus a waste line for cuts and bad boards.
- **Fencing:** panel count, posts, and rails from run length, panel width, and post spacing on a straight line.

## Deck planning notes

Joist spacing, beam sizing, and ledger attachment are structural decisions. This calculator counts surface boards — it does not design the frame. If your local code or a lumber yard span table disagrees with a sketch you found online, follow the code and the span table.

Waste rises with picture-frame borders, diagonal decks, and lots of blocking. A simple rectangle with boards parallel to one edge needs less.

## Fence planning notes

Straight, level runs match the model well. Add posts for every corner and gate by hand. Slopes may need stepped or racked panels — order a spare panel on long grade changes. Post-hole concrete is a separate takeoff; use the concrete bag tools for hole volumes.

Height changes wind load and post size more than it changes panel math. A taller privacy fence on the same line can need heavier posts even when panel width stays the same.

## Cost and labour

Materials lists here exclude digging, clearing, permits, and finishing (stain, paint). Installation is often priced per linear foot or per panel — add that in the Cost Estimator if you are comparing DIY versus hire.

## Related reading

Guides cover decking board estimates, fence materials for a straight run, and comparing contractor quotes. Open the matching calculator from those articles when you want to reuse the worked numbers with your fence length or deck size.`,

  "home-improvement": `Home improvement calculators in this category focus on drywall or plasterboard and batt insulation: sheet and roll products that are easy to underestimate when a room has ceilings, openings, corners, and several material types. The calculators turn measured surface area into full purchasable units. They help prepare an order, but they do not specify a compliant wall or roof assembly.

## What this category covers

- **Drywall or plasterboard:** sheet counts for room walls and optional ceilings, using an adjustable board size and waste allowance.
- **Batt insulation:** roll or pack counts from measured area and the exact coverage printed on a chosen product.
- **Cost planning:** the quantities can feed a wider project budget with fixings, finishing materials, membranes, delivery, and labour listed separately.

US mode works in feet, square feet, 4 × 8 ft sheets, and product coverage in ft². UK mode works in metres, square metres, and common 1200 × 2400 mm boards. Other board sizes are widely available, so use the size that suits the framing and can physically reach the room.

## Drywall realities

Wall area in a rectangular room is 2 × (length + width) × height. Ceiling area is length × width. The calculator normally leaves ordinary doors and windows in the gross area because offcuts are useful and openings rarely remove a perfect whole sheet from the order. A full glazed wall or garage door is large enough to consider separately.

Sheet count is area divided by board coverage, rounded up, plus waste. Yet area is only the first pass. Horizontal versus vertical hanging changes seams, and ceiling joist direction may call for longer or thicker board. Fire-rated, acoustic, moisture-resistant, and impact-resistant products must be counted separately even when they share dimensions.

A 16 × 12 ft US room with 8 ft walls has 448 ft² of wall and 192 ft² of ceiling. That is 640 ft² before waste. At 10% waste and 32 ft² per 4 × 8 sheet, the result is 22 sheets. If the ceiling uses a different board, split the calculation into 16 wall sheets and 7 ceiling sheets after rounding each material separately rather than treating all 22 as interchangeable.

Joint compound, tape, screws, adhesive, corner bead, access panels, backing, and primer are not included. Compound needs depend on seam layout and finish level. Read the related mud-and-tape guide, then ask the board supplier or finisher to confirm quantities.

## Insulation realities

The insulation calculator counts packs from area and label coverage. It does not choose thermal performance. Required R-values in the US and U-value targets in the UK depend on climate, building element, existing construction, and local rules. The cavity depth and stud or joist spacing must also suit the selected batt.

Copy coverage from the exact SKU. Two rolls with the same outside dimensions may cover different areas because one is thicker or cut for different framing centres. If an attic needs two crossed layers, calculate each layer separately. Blown cellulose, spray foam, and rigid boards use different quantity methods and should not be forced into roll coverage.

Openings are often left in a batt takeoff because narrow pieces are still needed around them. Large uninsulated areas can be deducted, but keep a reasonable cut allowance. Do not compress a thick batt into a shallow cavity to make leftover product fit; compression changes performance.

## Safety and code

Wall and ceiling assemblies can have fire, acoustic, moisture, and vapour-control requirements. Wet rooms, garages, party walls, basements, loft roofs, and areas around flues deserve particular care. The position and type of vapour control layer varies with climate and assembly; a generic calculator cannot decide it.

Wear suitable PPE when handling insulation and follow the safety data sheet. Existing textured coatings, old insulation, and board in older homes may need hazardous-material assessment before disturbance. Electrical cables, recessed lights, and ventilation paths also affect how insulation is installed.

## Ordering and delivery

Count one material at a time, use the product label, then send the list and room sketch to the merchant or installer. Their confirmation should cover board type and thickness, roll width, pack coverage, fixings, finishing products, and any additional layer required by the specified assembly.

## Related reading

Use the drywall room guide for board counts, the mud-and-tape guide for finishing materials, and the insulation guide for pack coverage. Pair those quantities with the Cost Estimator when you want materials, delivery, labour, and contingency shown as separate rows.`,

  "cost-estimation": `Cost estimation tools turn measured quantities and prices you provide into a transparent planning range. They are most useful after a material calculator has established how many cubic yards, boxes, rolls, sheets, or gallons the job needs. The aim is to separate materials, labour, delivery, fees, waste, and markup instead of accepting one unexplained lump sum.

## What this category is for

- Combine material, labour, delivery, and optional trade markup into a project planning total.
- Price concrete, gravel, or paint after calculating the physical quantity.
- Put competing quotes into the same headings so differences in scope become visible.
- Explore the cost effect of changing thickness, finish, product grade, or DIY scope.

The calculators do not provide live local pricing. Enter current supplier figures in US dollars or UK pounds and keep one currency throughout. State whether tax is included, because mixing tax-inclusive retail prices with pre-tax trade rates distorts the comparison.

## Start with quantities, not a target budget

Measure first. Run concrete, gravel, paint, flooring, drywall, or another calculator with the agreed dimensions and waste. Then price the result using the exact product, pack size, and delivery terms. Starting with “I have $5,000” and changing quantities until the screen matches does not create a viable scope.

Supplier prices should include the order unit. A ready-mix figure per cubic yard cannot be compared directly with a bag price; gravel per tonne is not gravel per loose cubic metre; paint per litre says little until coverage and coats are known. Write the unit beside every rate.

Call local suppliers for substantial orders. Ask about minimum loads, short-load charges, pallet deposits, delivery radius, crane or pump fees, and return rules. A cheap unit price can lose once a small order triggers a large delivery minimum.

## Separate waste from contingency

Material waste covers predictable loss: tile cuts, board ends, damaged bricks, concrete over-excavation, or paint left in rollers. Apply it to the relevant material quantity. Project contingency covers uncertain events such as hidden rot, failed subfloor, extra disposal, or a design change.

Keeping them separate matters. Ten percent flooring waste does not create cash for a rotten joist, and a 15% renovation contingency should not be used to pretend that a tile order needs no cut allowance. For straightforward cosmetic work, a smaller contingency may be reasonable; older homes and work behind walls often need more.

## What a planning cost is not

It is not a fixed quotation, valuation, finance offer, insurance estimate, or guarantee of permit fees. It cannot see access restrictions, buried services, moisture, structural damage, hazardous materials, or code upgrades. Regional labour, fuel, disposal, and seasonal demand change real prices.

The displayed range acknowledges ordinary uncertainty, but it is not a substitute for a scope-specific contingency. If the inputs omit scaffolding or demolition, a ±10% range around that incomplete subtotal remains incomplete.

## Labour and markup

Labour should describe the included work. “Install flooring” might mean fitting only, or it might include furniture moves, old-floor removal, levelling, trims, and disposal. Painting labour changes with preparation and number of coats. Concrete labour changes with forms, access, reinforcement, placement, and finish.

Homeowners normally leave trade markup at zero when adding their own direct costs. Contractors may apply overhead and profit to materials, labour, and subcontractors because they carry scheduling, warranty, insurance, and business costs. Markup is not the same as contingency or sales tax.

## Quote comparison workflow

Create columns for each bidder and rows for measured quantity, product specification, preparation, labour, delivery, equipment, disposal, tax, warranty, start date, and exclusions. For concrete, include slab and base depth, reinforcement, forms, finish, pump, and spoil removal. For painting, include repairs, primer, coats, ceilings, trim, and protection.

When the material quantity is similar but totals differ, look at crew time, access, equipment, overhead, and excluded work. When quantities differ, compare the dimensions and assumptions before negotiating price. A cheaper quote for a thinner slab or one coat of paint is a different job.

Example: $2,400 materials with 10% waste becomes $2,640. Add $1,800 labour and $150 delivery for $4,590 before any trade markup, tax, permit, or contingency. The estimator may show a planning band around that figure, but you should still preserve a separate reserve for unknown conditions.

## Related reading

Read the home-improvement budget guide for contingency, the contractor-quote guide for scope comparison, and the specialist patio or paint cost guides for trade-specific lines. Run quantity calculators first, then use the Project Cost Estimator to assemble the figures without hiding their assumptions.`,
};
