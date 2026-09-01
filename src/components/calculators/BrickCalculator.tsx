"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength, convertSmallLength } from "@/lib/units";

export function BrickCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [wallLength, setWallLength] = useState(20);
  const [wallHeight, setWallHeight] = useState(8);
  const [brickLength, setBrickLength] = useState(units === "imperial" ? 8 : 21.5);
  const [brickHeight, setBrickHeight] = useState(units === "imperial" ? 2.25 : 6.5);
  const [joint, setJoint] = useState(units === "imperial" ? 0.375 : 1);
  const [waste, setWaste] = useState(5);
  const [pricePerBrick, setPricePerBrick] = useState(units === "imperial" ? 0.65 : 0.55);

  function handleUnits(next: UnitSystem) {
    setWallLength((v) => convertLength(v, units, next));
    setWallHeight((v) => convertLength(v, units, next));
    setBrickLength((v) => convertSmallLength(v, units, next));
    setBrickHeight((v) => convertSmallLength(v, units, next));
    setJoint((v) => convertSmallLength(v, units, next));
    setUnits(next);
    setPricePerBrick(next === "imperial" ? 0.65 : 0.55);
  }

  const result = useMemo(() => {
    const wallArea = wallLength * wallHeight;
    const brickL = brickLength / (units === "imperial" ? 12 : 100);
    const brickH = brickHeight / (units === "imperial" ? 12 : 100);
    const jointFt = joint / (units === "imperial" ? 12 : 100);
    const bricksPerRow = Math.floor(wallLength / (brickL + jointFt)) || 1;
    const rows = Math.ceil(wallHeight / (brickH + jointFt));
    const count = Math.ceil(bricksPerRow * rows * (1 + waste / 100));
    const mortarBags = Math.ceil(count / 120);
    const areaUnit = units === "imperial" ? "ft²" : "m²";
    return {
      wallArea: `${formatNumber(wallArea)} ${areaUnit}`,
      bricks: `${count} bricks`,
      mortar: `${mortarBags} mortar bags (approx.)`,
      cost: count * pricePerBrick,
    };
  }, [units, wallLength, wallHeight, brickLength, brickHeight, joint, waste, pricePerBrick]);

  const isValid = wallLength > 0 && wallHeight > 0;

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Wall dimensions</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <NumberField label="Wall length" value={wallLength} onChange={setWallLength} unit={units === "imperial" ? "ft" : "m"} step={1} />
            <NumberField label="Wall height" value={wallHeight} onChange={setWallHeight} unit={units === "imperial" ? "ft" : "m"} step={0.5} />
            <NumberField label="Brick length" value={brickLength} onChange={setBrickLength} unit={units === "imperial" ? "in" : "cm"} step={0.25} helperText="Standard UK: 215 mm" />
            <NumberField label="Brick height" value={brickHeight} onChange={setBrickHeight} unit={units === "imperial" ? "in" : "cm"} step={0.25} />
          </div>
          <AdvancedFields>
            <NumberField label="Mortar joint" value={joint} onChange={setJoint} unit={units === "imperial" ? "in" : "cm"} step={0.125} />
            <NumberField label="Waste allowance" value={waste} onChange={setWaste} unit="%" step={1} max={15} />
            <NumberField label="Price per brick" value={pricePerBrick} onChange={setPricePerBrick} unit={currencySymbol(units)} step={0.05} />
          </AdvancedFields>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label="Wall area" value={result.wallArea} emphasis="primary" />
            <div className="border-t border-border pt-4">
              <Metric label="Bricks to order" value={result.bricks} />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Mortar" value={result.mortar} helperText="Rough guide — one bag per ~120 bricks" />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Estimated brick cost" value={`${formatCurrency(result.cost * 0.9, units)} – ${formatCurrency(result.cost * 1.1, units)}`} />
            </div>
          </div>
        ) : (
          <ResultsPlaceholder />
        )
      }
    />
  );
}
