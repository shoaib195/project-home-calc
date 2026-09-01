"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength } from "@/lib/units";

const COVERAGE = { imperial: 40, metric: 5.8 };

export function InsulationCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [length, setLength] = useState(14);
  const [width, setWidth] = useState(12);
  const [waste, setWaste] = useState(10);
  const [pricePerRoll, setPricePerRoll] = useState(units === "imperial" ? 55 : 42);

  function handleUnits(next: UnitSystem) {
    setLength((v) => convertLength(v, units, next));
    setWidth((v) => convertLength(v, units, next));
    setUnits(next);
    setPricePerRoll(next === "imperial" ? 55 : 42);
  }

  const result = useMemo(() => {
    const area = length * width * (1 + waste / 100);
    const rolls = Math.ceil(area / COVERAGE[units]);
    const cost = rolls * pricePerRoll;
    const areaUnit = units === "imperial" ? "ft²" : "m²";
    const covUnit = units === "imperial" ? "ft² per roll" : "m² per roll";
    return {
      area: `${formatNumber(length * width)} ${areaUnit}`,
      rolls: `${rolls} rolls`,
      coverage: `${COVERAGE[units]} ${covUnit}`,
      cost,
    };
  }, [units, length, width, waste, pricePerRoll]);

  const isValid = length > 0 && width > 0;

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Wall or ceiling area</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <NumberField label="Length" value={length} onChange={setLength} unit={units === "imperial" ? "ft" : "m"} step={1} error={length <= 0 ? "Enter a length greater than 0." : undefined} />
            <NumberField label="Width" value={width} onChange={setWidth} unit={units === "imperial" ? "ft" : "m"} step={1} error={width <= 0 ? "Enter a width greater than 0." : undefined} />
          </div>
          <AdvancedFields>
            <NumberField label="Waste allowance" value={waste} onChange={setWaste} unit="%" step={1} max={15} helperText="Cuts around studs and outlets" />
            <NumberField label="Price per roll" value={pricePerRoll} onChange={setPricePerRoll} unit={currencySymbol(units)} step={5} />
          </AdvancedFields>
          <p className="text-[13px] text-text-3">Default roll coverage assumes a standard batt roll — check the label on the product you buy.</p>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label="Area to insulate" value={result.area} emphasis="primary" />
            <div className="border-t border-border pt-4">
              <Metric label="Rolls to buy" value={result.rolls} helperText={`Based on ${result.coverage}, includes ${waste}% waste`} />
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
