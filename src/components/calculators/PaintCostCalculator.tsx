"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength } from "@/lib/units";

export function PaintCostCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [length, setLength] = useState(12);
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(8);
  const [coats, setCoats] = useState(2);
  const [doors, setDoors] = useState(1);
  const [windows, setWindows] = useState(2);
  const [paintPrice, setPaintPrice] = useState(38);
  const [laborRate, setLaborRate] = useState(units === "imperial" ? 2.5 : 8);

  function handleUnits(next: UnitSystem) {
    setLength((v) => convertLength(v, units, next));
    setWidth((v) => convertLength(v, units, next));
    setHeight((v) => convertLength(v, units, next));
    setUnits(next);
    setLaborRate(next === "imperial" ? 2.5 : 8);
  }

  const result = useMemo(() => {
    const perimeter = 2 * (length + width);
    const gross = perimeter * height;
    if (units === "imperial") {
      const net = Math.max(gross - doors * 21 - windows * 15, 0);
      const gallons = Math.ceil(((net * coats) / 350) * 4) / 4 || 0.25;
      const materials = gallons * paintPrice;
      const labor = net * laborRate;
      const total = materials + labor;
      return { paint: `${formatNumber(gallons)} gal`, materials, labor, total, area: `${formatNumber(net)} ft²` };
    }
    const net = Math.max(gross - doors * 1.95 - windows * 1.4, 0);
    const liters = Math.ceil((net * coats) / 12);
    const materials = liters * paintPrice;
    const labor = net * laborRate;
    const total = materials + labor;
    return { paint: `${liters} L`, materials, labor, total, area: `${formatNumber(net)} m²` };
  }, [units, length, width, height, coats, doors, windows, paintPrice, laborRate]);

  const isValid = length > 0 && width > 0 && height > 0;

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Room to paint</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <NumberField label="Length" value={length} onChange={setLength} unit={units === "imperial" ? "ft" : "m"} step={1} />
            <NumberField label="Width" value={width} onChange={setWidth} unit={units === "imperial" ? "ft" : "m"} step={1} />
            <NumberField label="Height" value={height} onChange={setHeight} unit={units === "imperial" ? "ft" : "m"} step={0.5} />
          </div>
          <NumberField label="Coats" value={coats} onChange={setCoats} min={1} max={4} step={1} />
          <AdvancedFields>
            <div className="grid grid-cols-2 gap-4">
              <NumberField label="Doors" value={doors} onChange={setDoors} min={0} step={1} />
              <NumberField label="Windows" value={windows} onChange={setWindows} min={0} step={1} />
            </div>
            <NumberField label={`Paint price per ${units === "imperial" ? "gallon" : "litre"}`} value={paintPrice} onChange={setPaintPrice} unit={currencySymbol(units)} step={1} />
            <NumberField label={`Labour rate per ${units === "imperial" ? "ft²" : "m²"}`} value={laborRate} onChange={setLaborRate} unit={currencySymbol(units)} step={0.25} helperText="Typical decorator rate for walls only" />
          </AdvancedFields>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label="Paint quantity" value={result.paint} emphasis="primary" helperText={`Wall area: ${result.area}`} />
            <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
              <Metric label="Materials" value={formatCurrency(result.materials, units)} />
              <Metric label="Labour" value={formatCurrency(result.labor, units)} />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Planning total" value={`${formatCurrency(result.total * 0.9, units)} – ${formatCurrency(result.total * 1.1, units)}`} />
              <p className="mt-2 text-[12.5px] text-text-3">Ceiling, prep, and trim are not included unless you adjust the labour rate.</p>
            </div>
          </div>
        ) : (
          <ResultsPlaceholder />
        )
      }
    />
  );
}
