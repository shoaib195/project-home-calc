"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength } from "@/lib/units";

const DEFAULT_PRICE = { imperial: 14, metric: 12 };
const SHEET = { imperial: { w: 4, h: 8 }, metric: { w: 1.2, h: 2.4 } };

export function DrywallCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [length, setLength] = useState(16);
  const [width, setWidth] = useState(12);
  const [height, setHeight] = useState(8);
  const [includeCeiling, setIncludeCeiling] = useState(true);
  const [waste, setWaste] = useState(10);
  const [price, setPrice] = useState(DEFAULT_PRICE.imperial);

  function handleUnits(next: UnitSystem) {
    setLength((v) => convertLength(v, units, next));
    setWidth((v) => convertLength(v, units, next));
    setHeight((v) => convertLength(v, units, next));
    setUnits(next);
    setPrice(DEFAULT_PRICE[next]);
  }

  const result = useMemo(() => {
    const wallArea = 2 * (length + width) * height;
    const ceilingArea = includeCeiling ? length * width : 0;
    const total = (wallArea + ceilingArea) * (1 + waste / 100);
    const sheet = SHEET[units];
    const sheetArea = sheet.w * sheet.h;
    const sheets = sheetArea > 0 ? Math.ceil(total / sheetArea) : 0;
    return { total, sheets, cost: sheets * price, sheetLabel: units === "imperial" ? "4×8 ft" : "1200×2400 mm" };
  }, [units, length, width, height, includeCeiling, waste, price]);

  const isValid = length > 0 && width > 0 && height > 0;
  const areaLabel = units === "imperial" ? "ft²" : "m²";

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Room dimensions</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <NumberField label="Room length" value={length} onChange={setLength} unit={units === "imperial" ? "ft" : "m"} step={units === "imperial" ? 1 : 0.1} error={length <= 0 ? "Enter a length greater than 0." : undefined} />
            <NumberField label="Room width" value={width} onChange={setWidth} unit={units === "imperial" ? "ft" : "m"} step={units === "imperial" ? 1 : 0.1} error={width <= 0 ? "Enter a width greater than 0." : undefined} />
            <NumberField label="Ceiling height" value={height} onChange={setHeight} unit={units === "imperial" ? "ft" : "m"} step={units === "imperial" ? 0.5 : 0.1} error={height <= 0 ? "Enter a height greater than 0." : undefined} />
          </div>
          <label className="flex min-h-11 cursor-pointer items-center gap-3 text-[14.5px] text-text">
            <input
              type="checkbox"
              checked={includeCeiling}
              onChange={(e) => setIncludeCeiling(e.target.checked)}
              className="h-4 w-4 accent-[var(--accent)]"
            />
            Include the ceiling
          </label>
          <AdvancedFields>
            <NumberField label="Waste allowance" value={waste} onChange={setWaste} unit="%" step={1} max={30} helperText="10% is typical; use 15% for rooms with lots of openings" />
            <NumberField label="Price per sheet" value={price} onChange={setPrice} unit={currencySymbol(units)} step={1} />
          </AdvancedFields>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label="Sheets to order" value={formatNumber(result.sheets, 0)} emphasis="primary" helperText={`${result.sheetLabel} sheets, including ${waste}% waste`} />
            <div className="border-t border-border pt-4">
              <Metric label="Coverage with waste" value={`${formatNumber(result.total)} ${areaLabel}`} />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Estimated material cost" value={formatCurrency(result.cost, units)} />
              <p className="mt-2 text-[12.5px] text-text-3">
                Sheets only — joint compound, tape, screws, and corner bead are extra. Door and window openings are not deducted; leftover offcuts usually cover those gaps.
              </p>
            </div>
          </div>
        ) : (
          <ResultsPlaceholder message="Enter a room length, width, and height greater than zero." />
        )
      }
    />
  );
}
