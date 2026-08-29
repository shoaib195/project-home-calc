"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength, convertSmallLength } from "@/lib/units";

const DEFAULT_PRICE = { imperial: 155, metric: 110 };

export function ConcreteCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [length, setLength] = useState(10);
  const [width, setWidth] = useState(10);
  const [depth, setDepth] = useState(4);
  const [waste, setWaste] = useState(10);
  const [price, setPrice] = useState(DEFAULT_PRICE.imperial);

  function handleUnits(next: UnitSystem) {
    setLength((v) => convertLength(v, units, next));
    setWidth((v) => convertLength(v, units, next));
    setDepth((v) => convertSmallLength(v, units, next));
    setUnits(next);
    setPrice(DEFAULT_PRICE[next]);
  }

  const result = useMemo(() => {
    if (units === "imperial") {
      const depthFt = depth / 12;
      const cuFt = length * width * depthFt;
      const cuYd = cuFt / 27;
      const withWaste = cuYd * (1 + waste / 100);
      const bags = Math.ceil((cuFt * (1 + waste / 100)) / 0.6);
      const cost = withWaste * price;
      return {
        primaryLabel: "Concrete required",
        primaryValue: `${formatNumber(cuYd)} yd³`,
        recommended: `${formatNumber(withWaste)} yd³`,
        bags: `${formatNumber(bags, 0)} bags (80 lb)`,
        cost,
      };
    }
    const depthM = depth / 100;
    const cuM = length * width * depthM;
    const withWaste = cuM * (1 + waste / 100);
    const bags = Math.ceil(withWaste / 0.0125);
    const cost = withWaste * price;
    return {
      primaryLabel: "Concrete required",
      primaryValue: `${formatNumber(cuM)} m³`,
      recommended: `${formatNumber(withWaste)} m³`,
      bags: `${formatNumber(bags, 0)} bags (25 kg)`,
      cost,
    };
  }, [units, length, width, depth, waste, price]);

  const isValid = length > 0 && width > 0 && depth > 0;

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Slab dimensions</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <NumberField
              label="Length"
              value={length}
              onChange={setLength}
              unit={units === "imperial" ? "ft" : "m"}
              step={units === "imperial" ? 1 : 0.1}
              error={length <= 0 ? "Enter a length greater than 0." : undefined}
            />
            <NumberField
              label="Width"
              value={width}
              onChange={setWidth}
              unit={units === "imperial" ? "ft" : "m"}
              step={units === "imperial" ? 1 : 0.1}
              error={width <= 0 ? "Enter a width greater than 0." : undefined}
            />
            <NumberField
              label="Depth"
              value={depth}
              onChange={setDepth}
              unit={units === "imperial" ? "in" : "cm"}
              step={units === "imperial" ? 0.5 : 1}
              helperText={units === "imperial" ? "Typical: 4 in" : "Typical: 10 cm"}
              error={depth <= 0 ? "Enter a depth greater than 0." : undefined}
            />
          </div>
          <AdvancedFields>
            <NumberField label="Waste allowance" value={waste} onChange={setWaste} unit="%" step={1} max={30} />
            <NumberField
              label={`Price per ${units === "imperial" ? "cubic yard" : "cubic metre"}`}
              value={price}
              onChange={setPrice}
              unit={currencySymbol(units)}
              step={5}
            />
          </AdvancedFields>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label={result.primaryLabel} value={result.primaryValue} emphasis="primary" />
            <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
              <Metric label="Recommended order" value={result.recommended} helperText={`Includes ${waste}% waste`} />
              <Metric label="Or, in bags" value={result.bags} />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Estimated material cost" value={formatCurrency(result.cost * 0.9, units) + " – " + formatCurrency(result.cost * 1.1, units)} />
              <p className="mt-2 text-[12.5px] text-text-3">
                Estimated using average ready-mix pricing. Get a quote from a local supplier for accurate pricing.
              </p>
            </div>
          </div>
        ) : (
          <ResultsPlaceholder />
        )
      }
    />
  );
}
