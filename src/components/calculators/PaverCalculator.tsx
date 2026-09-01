"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength, convertSmallLength } from "@/lib/units";

export function PaverCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [length, setLength] = useState(16);
  const [width, setWidth] = useState(10);
  const [paverLength, setPaverLength] = useState(units === "imperial" ? 8 : 20);
  const [paverWidth, setPaverWidth] = useState(units === "imperial" ? 4 : 10);
  const [gap, setGap] = useState(units === "imperial" ? 0.125 : 0.3);
  const [waste, setWaste] = useState(8);
  const [pricePerPaver, setPricePerPaver] = useState(units === "imperial" ? 1.25 : 1.1);

  function handleUnits(next: UnitSystem) {
    setLength((v) => convertLength(v, units, next));
    setWidth((v) => convertLength(v, units, next));
    setPaverLength((v) => convertSmallLength(v, units, next));
    setPaverWidth((v) => convertSmallLength(v, units, next));
    setGap((v) => convertSmallLength(v, units, next));
    setUnits(next);
    setPricePerPaver(next === "imperial" ? 1.25 : 1.1);
  }

  const result = useMemo(() => {
    const area = length * width;
    const pL = paverLength / (units === "imperial" ? 12 : 100) + gap / (units === "imperial" ? 12 : 100);
    const pW = paverWidth / (units === "imperial" ? 12 : 100) + gap / (units === "imperial" ? 12 : 100);
    const pavers = Math.ceil((area / (pL * pW)) * (1 + waste / 100));
    const sandDepth = units === "imperial" ? 1 : 2.5;
    const sandVol = units === "imperial" ? (area * (sandDepth / 12)) / 27 : area * (sandDepth / 100);
    const sandUnit = units === "imperial" ? "yd³ sand bed" : "m³ sand bed";
    const areaUnit = units === "imperial" ? "ft²" : "m²";
    return {
      area: `${formatNumber(area)} ${areaUnit}`,
      pavers: `${pavers} pavers`,
      sand: `${formatNumber(sandVol)} ${sandUnit}`,
      cost: pavers * pricePerPaver,
    };
  }, [units, length, width, paverLength, paverWidth, gap, waste, pricePerPaver]);

  const isValid = length > 0 && width > 0 && paverLength > 0 && paverWidth > 0;

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Patio area</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <NumberField label="Patio length" value={length} onChange={setLength} unit={units === "imperial" ? "ft" : "m"} step={1} />
            <NumberField label="Patio width" value={width} onChange={setWidth} unit={units === "imperial" ? "ft" : "m"} step={1} />
            <NumberField label="Paver length" value={paverLength} onChange={setPaverLength} unit={units === "imperial" ? "in" : "cm"} step={0.5} />
            <NumberField label="Paver width" value={paverWidth} onChange={setPaverWidth} unit={units === "imperial" ? "in" : "cm"} step={0.5} />
          </div>
          <AdvancedFields>
            <NumberField label="Joint gap" value={gap} onChange={setGap} unit={units === "imperial" ? "in" : "cm"} step={0.0625} />
            <NumberField label="Waste allowance" value={waste} onChange={setWaste} unit="%" step={1} max={15} />
            <NumberField label="Price per paver" value={pricePerPaver} onChange={setPricePerPaver} unit={currencySymbol(units)} step={0.1} />
          </AdvancedFields>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label="Patio area" value={result.area} emphasis="primary" />
            <div className="border-t border-border pt-4">
              <Metric label="Pavers to order" value={result.pavers} helperText={`Includes ${waste}% waste`} />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Sand bedding" value={result.sand} helperText={units === "imperial" ? "At 1 in depth — use Sand Calculator for detail" : "At 2.5 cm depth"} />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Estimated paver cost" value={`${formatCurrency(result.cost * 0.9, units)} – ${formatCurrency(result.cost * 1.1, units)}`} />
            </div>
          </div>
        ) : (
          <ResultsPlaceholder />
        )
      }
    />
  );
}
