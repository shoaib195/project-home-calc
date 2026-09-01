"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength, convertSmallLength } from "@/lib/units";

export function ConcreteCostCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [length, setLength] = useState(12);
  const [width, setWidth] = useState(12);
  const [depth, setDepth] = useState(4);
  const [waste, setWaste] = useState(10);
  const [pricePerYd, setPricePerYd] = useState(155);
  const [pumpFee, setPumpFee] = useState(0);
  const [laborPerYd, setLaborPerYd] = useState(45);

  function handleUnits(next: UnitSystem) {
    setLength((v) => convertLength(v, units, next));
    setWidth((v) => convertLength(v, units, next));
    setDepth((v) => convertSmallLength(v, units, next));
    setUnits(next);
    setPricePerYd(next === "imperial" ? 155 : 110);
    setLaborPerYd(next === "imperial" ? 45 : 35);
  }

  const result = useMemo(() => {
    if (units === "imperial") {
      const cuYd = (length * width * (depth / 12)) / 27;
      const order = cuYd * (1 + waste / 100);
      const materials = order * pricePerYd;
      const labor = order * laborPerYd;
      const total = materials + labor + pumpFee;
      return { volume: `${formatNumber(order)} yd³`, materials, labor, total };
    }
    const cuM = length * width * (depth / 100);
    const order = cuM * (1 + waste / 100);
    const materials = order * pricePerYd;
    const labor = order * laborPerYd;
    const total = materials + labor + pumpFee;
    return { volume: `${formatNumber(order)} m³`, materials, labor, total };
  }, [units, length, width, depth, waste, pricePerYd, pumpFee, laborPerYd]);

  const isValid = length > 0 && width > 0 && depth > 0;

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Slab to price</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <NumberField label="Length" value={length} onChange={setLength} unit={units === "imperial" ? "ft" : "m"} step={1} />
            <NumberField label="Width" value={width} onChange={setWidth} unit={units === "imperial" ? "ft" : "m"} step={1} />
            <NumberField label="Depth" value={depth} onChange={setDepth} unit={units === "imperial" ? "in" : "cm"} step={0.5} />
          </div>
          <AdvancedFields>
            <NumberField label="Waste allowance" value={waste} onChange={setWaste} unit="%" step={1} max={20} />
            <NumberField label={`Ready-mix price per ${units === "imperial" ? "yd³" : "m³"}`} value={pricePerYd} onChange={setPricePerYd} unit={currencySymbol(units)} step={5} />
            <NumberField label={`Labour per ${units === "imperial" ? "yd³" : "m³"}`} value={laborPerYd} onChange={setLaborPerYd} unit={currencySymbol(units)} step={5} />
            <NumberField label="Pump or short-load fee" value={pumpFee} onChange={setPumpFee} unit={currencySymbol(units)} step={25} />
          </AdvancedFields>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label="Order quantity" value={result.volume} emphasis="primary" helperText={`Includes ${waste}% waste`} />
            <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
              <Metric label="Materials" value={formatCurrency(result.materials, units)} />
              <Metric label="Labour" value={formatCurrency(result.labor, units)} />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Planning total" value={`${formatCurrency(result.total * 0.9, units)} – ${formatCurrency(result.total * 1.1, units)}`} />
              <p className="mt-2 text-[12.5px] text-text-3">Formwork, reinforcement, and finish upgrades are not included.</p>
            </div>
          </div>
        ) : (
          <ResultsPlaceholder />
        )
      }
    />
  );
}
