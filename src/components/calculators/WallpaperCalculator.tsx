"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength } from "@/lib/units";

/** Usable coverage after trim — not the raw roll face. Override if your label differs. */
const ROLL_COVERAGE = { imperial: 27, metric: 5 }; // ft² / m² per single roll
const DOOR_AREA = { imperial: 21, metric: 1.95 };
const WINDOW_AREA = { imperial: 15, metric: 1.4 };

const DEFAULT_PRICE = { imperial: 45, metric: 28 }; // per roll

export function WallpaperCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [length, setLength] = useState(14);
  const [width, setWidth] = useState(12);
  const [height, setHeight] = useState(8);
  const [doors, setDoors] = useState(1);
  const [windows, setWindows] = useState(2);
  const [patternWaste, setPatternWaste] = useState(15);
  const [coverage, setCoverage] = useState(ROLL_COVERAGE.imperial);
  const [price, setPrice] = useState(DEFAULT_PRICE.imperial);

  function handleUnits(next: UnitSystem) {
    setLength((v) => convertLength(v, units, next));
    setWidth((v) => convertLength(v, units, next));
    setHeight((v) => convertLength(v, units, next));
    setUnits(next);
    setCoverage(ROLL_COVERAGE[next]);
    setPrice(DEFAULT_PRICE[next]);
  }

  const result = useMemo(() => {
    const perimeter = 2 * (length + width);
    const gross = perimeter * height;
    const deductions = doors * DOOR_AREA[units] + windows * WINDOW_AREA[units];
    const net = Math.max(gross - deductions, 0);
    const withWaste = net * (1 + patternWaste / 100);
    const rolls = Math.max(1, Math.ceil(withWaste / Math.max(coverage, 0.1)));
    const areaUnit = units === "imperial" ? "ft²" : "m²";
    return {
      netArea: `${formatNumber(net)} ${areaUnit}`,
      adjusted: `${formatNumber(withWaste)} ${areaUnit}`,
      rolls: `${rolls} rolls`,
      cost: rolls * price,
    };
  }, [units, length, width, height, doors, windows, patternWaste, coverage, price]);

  const isValid = length > 0 && width > 0 && height > 0 && coverage > 0;

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Room dimensions</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <NumberField
              label="Room length"
              value={length}
              onChange={setLength}
              unit={units === "imperial" ? "ft" : "m"}
              step={units === "imperial" ? 1 : 0.1}
              error={length <= 0 ? "Enter a length greater than 0." : undefined}
            />
            <NumberField
              label="Room width"
              value={width}
              onChange={setWidth}
              unit={units === "imperial" ? "ft" : "m"}
              step={units === "imperial" ? 1 : 0.1}
              error={width <= 0 ? "Enter a width greater than 0." : undefined}
            />
            <NumberField
              label="Wall height"
              value={height}
              onChange={setHeight}
              unit={units === "imperial" ? "ft" : "m"}
              step={units === "imperial" ? 0.5 : 0.1}
              error={height <= 0 ? "Enter a height greater than 0." : undefined}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <NumberField label="Doors" value={doors} onChange={setDoors} min={0} step={1} />
            <NumberField label="Windows" value={windows} onChange={setWindows} min={0} step={1} />
          </div>
          <AdvancedFields>
            <NumberField
              label="Pattern / match waste"
              value={patternWaste}
              onChange={setPatternWaste}
              unit="%"
              step={1}
              max={30}
              helperText="Plain paper ~10%; large repeats often 15–20%"
            />
            <NumberField
              label={units === "imperial" ? "Usable coverage per roll" : "Usable coverage per roll"}
              value={coverage}
              onChange={setCoverage}
              unit={units === "imperial" ? "ft²" : "m²"}
              step={units === "imperial" ? 1 : 0.1}
              helperText="Check the label — pattern match reduces usable area"
            />
            <NumberField label="Price per roll" value={price} onChange={setPrice} unit={currencySymbol(units)} step={1} />
          </AdvancedFields>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label="Rolls to buy" value={result.rolls} emphasis="primary" helperText={`Rounded up · ${patternWaste}% pattern waste`} />
            <div className="border-t border-border pt-4">
              <Metric label="Net wall area" value={result.netArea} helperText="After door & window deductions" />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Area with waste" value={result.adjusted} />
            </div>
            <div className="border-t border-border pt-4">
              <Metric
                label="Estimated material cost"
                value={`${formatCurrency(result.cost * 0.9, units)} – ${formatCurrency(result.cost * 1.1, units)}`}
              />
            </div>
          </div>
        ) : (
          <ResultsPlaceholder />
        )
      }
    />
  );
}
