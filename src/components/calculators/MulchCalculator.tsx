"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength, convertSmallLength } from "@/lib/units";

const DEFAULT_PRICE = { imperial: 4.5, metric: 5.5 };

export function MulchCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [length, setLength] = useState(12);
  const [width, setWidth] = useState(4);
  const [depth, setDepth] = useState(3);
  const [pricePerBag, setPricePerBag] = useState(DEFAULT_PRICE.imperial);

  function handleUnits(next: UnitSystem) {
    setLength((v) => convertLength(v, units, next));
    setWidth((v) => convertLength(v, units, next));
    setDepth((v) => convertSmallLength(v, units, next));
    setUnits(next);
    setPricePerBag(DEFAULT_PRICE[next]);
  }

  const result = useMemo(() => {
    if (units === "imperial") {
      const cuFt = length * width * (depth / 12);
      const cuYd = cuFt / 27;
      const bags = Math.ceil(cuFt / 2);
      return { primaryValue: `${formatNumber(cuYd)} yd³`, bags, cost: bags * pricePerBag };
    }
    const cuM = length * width * (depth / 100);
    const bags = Math.ceil(cuM / 0.05);
    return { primaryValue: `${formatNumber(cuM)} m³`, bags, cost: bags * pricePerBag };
  }, [units, length, width, depth, pricePerBag]);

  const isValid = length > 0 && width > 0 && depth > 0;

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Bed dimensions</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <NumberField label="Length" value={length} onChange={setLength} unit={units === "imperial" ? "ft" : "m"} step={units === "imperial" ? 1 : 0.1} error={length <= 0 ? "Enter a length greater than 0." : undefined} />
            <NumberField label="Width" value={width} onChange={setWidth} unit={units === "imperial" ? "ft" : "m"} step={units === "imperial" ? 1 : 0.1} error={width <= 0 ? "Enter a width greater than 0." : undefined} />
            <NumberField label="Depth" value={depth} onChange={setDepth} unit={units === "imperial" ? "in" : "cm"} step={units === "imperial" ? 0.5 : 1} helperText={units === "imperial" ? "Typical: 2–3 in" : "Typical: 5–7 cm"} error={depth <= 0 ? "Enter a depth greater than 0." : undefined} />
          </div>
          <AdvancedFields>
            <NumberField label={`Price per bag (${units === "imperial" ? "2 ft³" : "50 L"})`} value={pricePerBag} onChange={setPricePerBag} unit={currencySymbol(units)} step={0.5} />
          </AdvancedFields>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label="Mulch volume" value={result.primaryValue} emphasis="primary" />
            <div className="border-t border-border pt-4">
              <Metric label="Bags needed" value={`${formatNumber(result.bags, 0)} bags`} helperText={units === "imperial" ? "2 ft³ bags" : "50 L bags"} />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Estimated cost" value={formatCurrency(result.cost, units)} />
            </div>
          </div>
        ) : (
          <ResultsPlaceholder />
        )
      }
    />
  );
}
