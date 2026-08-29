"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatCurrency, type UnitSystem } from "@/lib/format";

export function CostEstimator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [materials, setMaterials] = useState(2400);
  const [labor, setLabor] = useState(1800);
  const [delivery, setDelivery] = useState(150);
  const [waste, setWaste] = useState(10);
  const [markup, setMarkup] = useState(0);

  function handleUnits(next: UnitSystem) {
    setUnits(next);
  }

  const result = useMemo(() => {
    const materialsWithWaste = materials * (1 + waste / 100);
    const subtotal = materialsWithWaste + labor + delivery;
    const total = subtotal * (1 + markup / 100);
    return {
      materialsWithWaste,
      subtotal,
      total,
      low: total * 0.9,
      high: total * 1.1,
    };
  }, [materials, labor, delivery, waste, markup]);

  const isValid = materials >= 0 && labor >= 0 && delivery >= 0;

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Project costs</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <p className="text-[13.5px] leading-relaxed text-text-2">
            Add the line items you already know. Leave labour or delivery at 0 if you are only pricing materials. Currency follows the unit toggle (USD for US, GBP for UK).
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <NumberField label="Materials" value={materials} onChange={setMaterials} unit={units === "imperial" ? "$" : "£"} step={50} min={0} />
            <NumberField label="Labor" value={labor} onChange={setLabor} unit={units === "imperial" ? "$" : "£"} step={50} min={0} />
            <NumberField label="Delivery" value={delivery} onChange={setDelivery} unit={units === "imperial" ? "$" : "£"} step={10} min={0} />
            <NumberField label="Material waste" value={waste} onChange={setWaste} unit="%" step={1} max={30} helperText="Applied to materials only" />
          </div>
          <NumberField
            label="Markup"
            value={markup}
            onChange={setMarkup}
            unit="%"
            step={1}
            max={50}
            min={0}
            helperText="Optional. Homeowners can leave this at 0; contractors can add margin."
          />
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric
              label="Estimated total"
              value={`${formatCurrency(result.low, units)} – ${formatCurrency(result.high, units)}`}
              emphasis="primary"
              helperText="Shown as a range (±10%). This is a planning figure, not a quote."
            />
            <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
              <Metric label="Materials + waste" value={formatCurrency(result.materialsWithWaste, units)} />
              <Metric label="Subtotal before markup" value={formatCurrency(result.subtotal, units)} />
            </div>
            <p className="border-t border-border pt-4 text-[12.5px] text-text-3">
              Local labour rates, access, and finish choices move this number. Use the material calculators to build the materials line, then confirm with a supplier or contractor before you spend.
            </p>
          </div>
        ) : (
          <ResultsPlaceholder message="Enter materials, labour, and delivery as zero or more. Negative values are not accepted." />
        )
      }
    />
  );
}
