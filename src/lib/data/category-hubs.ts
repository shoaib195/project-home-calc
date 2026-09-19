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

  flooring: `Flooring calculators on this site turn room length and width into pack or tile counts with a waste allowance for cuts. They exist so you can compare a store “room pack” suggestion with your own takeoff before you buy.

## What this category covers

- **Flooring** (laminate, vinyl, engineered, similar boxed products) by area and pack coverage.
- **Floor tile** by tile size, layout, and waste — bathrooms and hallways included when you measure the rectangle (or add closets as extra area).

## How waste really works

Waste is not a tax on your honesty — it is the difference between a perfect grid and a real room. Straight-lay rectangles in open rooms often sit near 5–8%. Diagonals, many doorways, and small tiles push higher. Under-ordering by a pack is expensive when the dye lot changes later.

Always read the coverage printed on the pack you are buying. “Looks like 20 ft²” marketing copy is not a substitute for the label.

## Measuring sequence

1. Measure wall to wall in consistent units (ignore skirting thickness unless your fitter asks for it).
2. Subtract large permanent cabinets only if the floor will not run under them.
3. Add closets and alcoves as separate rectangles.
4. Enter waste that matches the pattern, then round up to whole packs or boxes.

## Cost planning

Quantity tools give material counts. Labour, underlayment, adhesive, trims, and furniture moves are separate. Use the Cost Estimator when you want a planning total that is not only the box price.

## What these tools do not do

They do not check subfloor flatness, moisture limits for vinyl or wood, or whether your stairs need a different SKU. Those are site checks. A clean calculator result still needs a product that matches the room’s conditions.

## Related reading

See the flooring waste guide and the bathroom tile count article. Re-run the calculators with the same room numbers used in the examples so the method stays transparent.`,

  painting: `Painting calculators here convert wall area, coats, and product coverage into litres or gallons — and wallpaper tools convert perimeter and pattern waste into roll counts. The goal is a shopping list you can defend at the trade counter, not a decorator’s full quote.

## What this category covers

- **Interior paint** from room dimensions, openings, and coats.
- **Paint cost** when you want a materials band from coverage and price per tin.
- **Wallpaper** from walls, roll length/width, and pattern repeat waste.

## Coverage is the number that lies most often

Tin labels quote coverage under ideal conditions. Rough plaster, deep colour changes, and cheap rollers burn through paint faster. If you are covering dark walls with light paint, plan an extra coat instead of shrinking the waste line to “save money.”

Measure height to the ceiling line you will actually paint. Vaulted ceilings and stair voids are easy to under-count from a floor plan alone.

## Wallpaper specifics

Pattern repeats waste paper even when the wall area looks small. Straight-match and offset-match behave differently — enter the repeat from the roll label, not a guess from a phone photo. Openings (windows, doors) reduce paint area more cleanly than they reduce wallpaper; you still waste paper around reveals.

## Exterior vs interior

These tools are tuned for interior room maths. Exterior masonry, render, and weather windows change coverage and product choice. If you are painting outside, treat the result as a starting quantity and confirm with the exterior product data sheet.

## Related reading

Guides cover paint for a room, interior paint cost versus labour, and measuring a room for paint, flooring, and wallpaper in one pass. Use them when the calculator result looks fine but you still do not know how many tins to put in the basket.`,

  roofing: `The roofing calculator approximates roof area from building footprint and pitch so you can plan squares, bundles, or tile packs before a formal takeoff. It is a budgeting and quote-check tool — not a substitute for a roofer’s measure on a cut-up roof.

## What this category is for

Homeowners and small planners use it to:

- Turn length × width × pitch factor into an approximate roof area.
- Translate area into US squares / bundles or UK pack counts using product coverage assumptions you can edit.
- Sense-check a contractor’s material line when the quote only shows a lump sum.

## Pitch and complexity

A simple gable is the friendly case. Hips, valleys, dormers, and multiple penetrations add waste and flashing that a footprint model cannot invent. When the roof looks busy from the street, increase waste and treat ridge, starter, underlayment, and ventilation as separate lines.

Low-slope and flat roofs may use different systems entirely (membranes, different underlays). Do not force an asphalt-bundle assumption onto a product that is sold another way — change the coverage fields to match the datasheet.

## Safety and access

Roof maths is the easy part. Access, fall protection, tear-off disposal, and weather windows drive labour. If two quotes diverge wildly on the same footprint, ask about tear-off layers, decking replacement allowances, and whether waste removal is included.

## How to use the result

1. Enter footprint and pitch as honestly as you can measure from plans or a safe ground estimate.
2. Apply waste that matches roof complexity.
3. Convert to the order unit your supplier actually sells.
4. Read the roofing materials guide for bundle and square conventions, then confirm with a professional for anything structural or steep.

## Related reading

See “How to Estimate Roofing Materials from the Ground” and waste-factor guidance. Pair this category with the Cost Estimator when you want materials plus a labour planning band.`,

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

  "home-improvement": `Home improvement calculators here focus on boarding and insulation — the sheet and roll products you buy after the layout is decided. They turn wall or ceiling area into drywall sheets or insulation rolls with waste for cuts and openings.

## What this category covers

- **Drywall / plasterboard** sheet counts from wall or ceiling rectangles.
- **Insulation** roll counts from coverage printed on the pack you intend to buy.

## Drywall realities

Sheet size (for example 4×8 ft or 1200×2400 mm) drives the count as much as the room area. Horizontal versus vertical hanging changes waste around openings. This tool does not schedule screws, joint compound, tape, or corner bead — add those as separate shopping lines.

Ceilings and walls are often estimated separately because sheet orientation and support differ. Measure each plane; do not assume one rectangle covers a whole room with openings already perfect.

## Insulation realities

R-value and thickness are product choices. The calculator only asks how much area a roll covers. Attics sometimes use blown insulation or stacked layers — those installs need a different method than a single batt pass in a stud bay.

Always copy coverage from the label of the SKU you will purchase. A thicker batt covers less area per roll at the same width.

## Safety and code

Fire ratings, vapour control, and ventilation rules vary by region. Treat calculator output as a materials count, then confirm assembly details with local guidance or a qualified installer — especially in wet rooms and around flues.

## Related reading

Waste-factor and budget-planning guides apply here. Pair drywall or insulation quantities with the Cost Estimator when you want materials plus labour as separate planning rows.`,

  "cost-estimation": `Cost estimation tools on Project Home Calc turn quantities into planning price bands. They exist so you can see materials, labour, and markup as separate lines instead of one opaque lump sum.

## What this category is for

- Roll several material and labour rows into a **project cost** range with optional contingency and markup.
- Cross-check specialist cost calculators (paint, gravel, concrete) when you already know volume or coverage.
- Prepare a side-by-side structure before you compare contractor quotes.

## How to keep estimates honest

1. Get quantities from the material calculators first — do not invent yardage to fit a budget.
2. Price materials with local supplier calls or recent invoices; national defaults drift.
3. Put labour on its own line so a “cheap” quote that skips prep is visible.
4. Keep contingency visible (often 10–15% on remodels) instead of burying it inside a single total.

## What a planning cost is not

It is not a fixed bid, a finance offer, or a guarantee of what your city will charge for permits. Regional labour and ready-mix pricing move with fuel, season, and crew availability. Two neighbours can see different numbers for the same patio footprint in the same month.

## Quote comparison workflow

Use the quote-comparison guide with this category: list thickness, base, finish, spoil removal, and access method beside each bidder. When your Cost Estimator materials line is close to a quote’s materials but the totals diverge, the gap is usually labour, equipment, or exclusions — not “math.”

## Related reading

Patio cost, interior paint cost versus labour, home-improvement budget planning, and contractor quote comparison articles all feed this hub. Run the calculators, then read the guide that matches the decision you are actually making.`,
};
