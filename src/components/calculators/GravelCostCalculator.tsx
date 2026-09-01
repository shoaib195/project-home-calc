"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength, convertSmallLength } from "@/lib/units";

export function GravelCostCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [length, setLength] = useState(40);
  const [width, setWidth] = useState(12);
  const [depth, setDepth] = useState(4);
  const [pricePerTon, setPricePerTon] = useState(55);
  const [delivery, setDelivery] = useState(75);

  function handleUnits(next: UnitSystem) {
    setLength((v) => convertLength(v, units, next));
    setWidth((v) => convertLength(v, units, next));
    setDepth((v) => convertSmallLength(v, units, next));
    setUnits(next);
    setPricePerTon(next === "imperial" ? 55 : 45);
    setDelivery(next === "imperial" ? 75 : 60);
  }

  const result = useMemo(() => {
    if (units === "imperial") {
      const cuYd = (length * width * (depth / 12)) / 27;
      const tons = cuYd * 1.4;
      const materials = tons * pricePerTon;
      const total = materials + delivery;
      return { volume: `${formatNumber(cuYd)} yd³`, weight: `${formatNumber(tons)} tons`, materials, total };
    }
    const cuM = length * width * (depth / 100);
    const tonnes = cuM * 1.6;
    const materials = tonnes * pricePerTon;
    const total = materials + delivery;
    return { volume: `${formatNumber(cuM)} m³`, weight: `${formatNumber(tonnes)} tonnes`, materials, total };
  }, [units, length, width, depth, pricePerTon, delivery]);

  const isValid = length > 0 && width > 0 && depth > 0;

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Driveway or path area</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <NumberField label="Length" value={length} onChange={setLength} unit={units === "imperial" ? "ft" : "m"} step={1} />
            <NumberField label="Width" value={width} onChange={setWidth} unit={units === "imperial" ? "ft" : "m"} step={1} />
            <NumberField label="Depth" value={depth} onChange={setDepth} unit={units === "imperial" ? "in" : "cm"} step={0.5} />
          </div>
          <AdvancedFields>
            <NumberField label={`Price per ${units === "imperial" ? "ton" : "tonne"}`} value={pricePerTon} onChange={setPricePerTon} unit={currencySymbol(units)} step={5} />
            <NumberField label="Delivery fee" value={delivery} onChange={setDelivery} unit={currencySymbol(units)} step={10} helperText="One load — adjust if you need multiple trips" />
          </AdvancedFields>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label="Gravel needed" value={result.weight} emphasis="primary" helperText={result.volume} />
            <div className="border-t border-border pt-4">
              <Metric label="Material cost" value={formatCurrency(result.materials, units)} />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Materials + delivery" value={`${formatCurrency(result.total * 0.92, units)} – ${formatCurrency(result.total * 1.08, units)}`} />
            </div>
          </div>
        ) : (
          <ResultsPlaceholder />
        )
      }
    />
  );
}
