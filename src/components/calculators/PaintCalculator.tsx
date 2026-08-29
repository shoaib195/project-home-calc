"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength } from "@/lib/units";

const DEFAULT_PRICE = { imperial: 38, metric: 24 };

export function PaintCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [length, setLength] = useState(12);
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(8);
  const [coats, setCoats] = useState(2);
  const [doors, setDoors] = useState(1);
  const [windows, setWindows] = useState(2);
  const [price, setPrice] = useState(DEFAULT_PRICE.imperial);

  function handleUnits(next: UnitSystem) {
    setLength((v) => convertLength(v, units, next));
    setWidth((v) => convertLength(v, units, next));
    setHeight((v) => convertLength(v, units, next));
    setUnits(next);
    setPrice(DEFAULT_PRICE[next]);
  }

  const result = useMemo(() => {
    const perimeter = 2 * (length + width);
    const gross = perimeter * height;
    if (units === "imperial") {
      const deductions = doors * 21 + windows * 15;
      const net = Math.max(gross - deductions, 0);
      const gallonsExact = (net * coats) / 350;
      const gallons = Math.ceil(gallonsExact * 4) / 4 || 0.25;
      return { netArea: net, unitsNeeded: gallons, unitLabel: "gal", cost: gallons * price };
    }
    const deductions = doors * 1.95 + windows * 1.4;
    const net = Math.max(gross - deductions, 0);
    const litersExact = (net * coats) / 12;
    const liters = Math.ceil(litersExact);
    return { netArea: net, unitsNeeded: liters, unitLabel: "L", cost: liters * price };
  }, [units, length, width, height, coats, doors, windows, price]);

  const isValid = length > 0 && width > 0 && height > 0;

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Room dimensions</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <NumberField label="Room length" value={length} onChange={setLength} unit={units === "imperial" ? "ft" : "m"} step={units === "imperial" ? 1 : 0.1} error={length <= 0 ? "Enter a length greater than 0." : undefined} />
            <NumberField label="Room width" value={width} onChange={setWidth} unit={units === "imperial" ? "ft" : "m"} step={units === "imperial" ? 1 : 0.1} error={width <= 0 ? "Enter a width greater than 0." : undefined} />
            <NumberField label="Ceiling height" value={height} onChange={setHeight} unit={units === "imperial" ? "ft" : "m"} step={units === "imperial" ? 0.5 : 0.1} error={height <= 0 ? "Enter a height greater than 0." : undefined} />
          </div>
          <NumberField label="Coats of paint" value={coats} onChange={setCoats} min={1} max={4} step={1} />
          <AdvancedFields>
            <div className="grid grid-cols-2 gap-4">
              <NumberField label="Doors" value={doors} onChange={setDoors} min={0} step={1} />
              <NumberField label="Windows" value={windows} onChange={setWindows} min={0} step={1} />
            </div>
            <NumberField label={`Price per ${units === "imperial" ? "gallon" : "litre"}`} value={price} onChange={setPrice} unit={currencySymbol(units)} step={1} />
          </AdvancedFields>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label="Paint needed" value={`${formatNumber(result.unitsNeeded)} ${result.unitLabel}`} emphasis="primary" helperText={`Rounded up to a full ${units === "imperial" ? "quart" : "litre"}`} />
            <div className="border-t border-border pt-4">
              <Metric label="Net wall area" value={`${formatNumber(result.netArea)} ${units === "imperial" ? "ft²" : "m²"}`} helperText="After door & window deductions" />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Estimated cost" value={formatCurrency(result.cost, units)} />
            </div>
          </div>
        ) : (
          <ResultsPlaceholder message="Enter a room length, width, and ceiling height greater than zero." />
        )
      }
    />
  );
}
