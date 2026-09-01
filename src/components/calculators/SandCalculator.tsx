"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength, convertSmallLength } from "@/lib/units";

const DEFAULT_PRICE = { imperial: 42, metric: 35 };
const DENSITY = { imperial: 1.35, metric: 1.6 };

export function SandCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [length, setLength] = useState(12);
  const [width, setWidth] = useState(8);
  const [depth, setDepth] = useState(2);
  const [price, setPrice] = useState(DEFAULT_PRICE.imperial);

  function handleUnits(next: UnitSystem) {
    setLength((v) => convertLength(v, units, next));
    setWidth((v) => convertLength(v, units, next));
    setDepth((v) => convertSmallLength(v, units, next));
    setUnits(next);
    setPrice(DEFAULT_PRICE[next]);
  }

  const result = useMemo(() => {
    if (units === "imperial") {
      const cuFt = length * width * (depth / 12);
      const cuYd = cuFt / 27;
      const tons = cuYd * DENSITY.imperial;
      const bags = Math.ceil(cuFt / 0.5);
      return { volume: `${formatNumber(cuYd)} yd³`, weight: `${formatNumber(tons)} tons`, bags: `${bags} bags (0.5 ft³)`, cost: tons * price };
    }
    const cuM = length * width * (depth / 100);
    const tonnes = cuM * DENSITY.metric;
    const bags = Math.ceil(cuM / 0.025);
    return { volume: `${formatNumber(cuM)} m³`, weight: `${formatNumber(tonnes)} tonnes`, bags: `${bags} bags (25 L)`, cost: tonnes * price };
  }, [units, length, width, depth, price]);

  const isValid = length > 0 && width > 0 && depth > 0;

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Sand bed area</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <NumberField label="Length" value={length} onChange={setLength} unit={units === "imperial" ? "ft" : "m"} step={units === "imperial" ? 1 : 0.1} error={length <= 0 ? "Enter a length greater than 0." : undefined} />
            <NumberField label="Width" value={width} onChange={setWidth} unit={units === "imperial" ? "ft" : "m"} step={units === "imperial" ? 1 : 0.1} error={width <= 0 ? "Enter a width greater than 0." : undefined} />
            <NumberField label="Depth" value={depth} onChange={setDepth} unit={units === "imperial" ? "in" : "cm"} step={units === "imperial" ? 0.5 : 1} helperText={units === "imperial" ? "Paver base: 1–2 in" : "Paver base: 2–5 cm"} error={depth <= 0 ? "Enter a depth greater than 0." : undefined} />
          </div>
          <AdvancedFields>
            <NumberField label={`Price per ${units === "imperial" ? "ton" : "tonne"}`} value={price} onChange={setPrice} unit={currencySymbol(units)} step={5} />
          </AdvancedFields>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label="Sand volume" value={result.volume} emphasis="primary" />
            <div className="grid grid-cols-1 gap-4 border-t border-border pt-4 sm:grid-cols-2">
              <Metric label="Estimated weight" value={result.weight} helperText="Dry sand, compacted" />
              <Metric label="Bag equivalent" value={result.bags} helperText="For small jobs only" />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Estimated material cost" value={`${formatCurrency(result.cost * 0.9, units)} – ${formatCurrency(result.cost * 1.1, units)}`} />
            </div>
          </div>
        ) : (
          <ResultsPlaceholder />
        )
      }
    />
  );
}
