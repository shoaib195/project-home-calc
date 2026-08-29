"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength, convertArea } from "@/lib/units";

const DEFAULT_PRICE = { imperial: 68, metric: 55 };
const DEFAULT_COVERAGE = { imperial: 22, metric: 2 };

export function FlooringCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [length, setLength] = useState(14);
  const [width, setWidth] = useState(11);
  const [waste, setWaste] = useState(10);
  const [coverage, setCoverage] = useState(DEFAULT_COVERAGE.imperial);
  const [pricePerBox, setPricePerBox] = useState(DEFAULT_PRICE.imperial);

  function handleUnits(next: UnitSystem) {
    setLength((v) => convertLength(v, units, next));
    setWidth((v) => convertLength(v, units, next));
    setCoverage((v) => convertArea(v, units, next));
    setUnits(next);
    setPricePerBox(DEFAULT_PRICE[next]);
  }

  const result = useMemo(() => {
    const area = length * width;
    const withWaste = area * (1 + waste / 100);
    const boxes = coverage > 0 ? Math.ceil(withWaste / coverage) : 0;
    return { area, withWaste, boxes, cost: boxes * pricePerBox };
  }, [length, width, waste, coverage, pricePerBox]);

  const isValid = length > 0 && width > 0;
  const unitLabel = units === "imperial" ? "ft²" : "m²";

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Room dimensions</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <NumberField label="Room length" value={length} onChange={setLength} unit={units === "imperial" ? "ft" : "m"} step={units === "imperial" ? 1 : 0.1} error={length <= 0 ? "Enter a length greater than 0." : undefined} />
            <NumberField label="Room width" value={width} onChange={setWidth} unit={units === "imperial" ? "ft" : "m"} step={units === "imperial" ? 1 : 0.1} error={width <= 0 ? "Enter a width greater than 0." : undefined} />
          </div>
          <NumberField label="Waste allowance" value={waste} onChange={setWaste} unit="%" step={1} max={30} helperText="10% for a simple rectangular room, 15%+ for diagonal layouts" />
          <AdvancedFields>
            <NumberField label={`Coverage per box`} value={coverage} onChange={setCoverage} unit={unitLabel} step={units === "imperial" ? 1 : 0.1} />
            <NumberField label="Price per box" value={pricePerBox} onChange={setPricePerBox} unit={currencySymbol(units)} step={1} />
          </AdvancedFields>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label="Boxes to order" value={`${formatNumber(result.boxes, 0)}`} emphasis="primary" />
            <div className="border-t border-border pt-4">
              <Metric label="Total area with waste" value={`${formatNumber(result.withWaste)} ${unitLabel}`} helperText={`Room area: ${formatNumber(result.area)} ${unitLabel}`} />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Estimated material cost" value={formatCurrency(result.cost, units)} />
            </div>
          </div>
        ) : (
          <ResultsPlaceholder message="Enter a room length and width greater than zero." />
        )
      }
    />
  );
}
