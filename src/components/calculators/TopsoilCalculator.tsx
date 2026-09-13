"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength, convertSmallLength } from "@/lib/units";

/** Rough bulk density for planning — real topsoil varies with moisture and mix. */
const TONS_PER_YD3 = 1.1;
const TONNES_PER_M3 = 1.3;

const DEFAULT_PRICE = { imperial: 45, metric: 55 }; // per yd³ / m³

export function TopsoilCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [length, setLength] = useState(20);
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
      const cuFt = length * width * (depth / 12);
      const cuYd = (cuFt / 27) * (1 + waste / 100);
      const tons = cuYd * TONS_PER_YD3;
      return {
        volumeLabel: `${formatNumber(cuYd)} yd³`,
        weightLabel: `${formatNumber(tons)} tons`,
        cost: cuYd * price,
        note: "Bulk density ≈ 1.1 tons per yd³ — confirm with your supplier",
      };
    }
    const cuM = length * width * (depth / 100) * (1 + waste / 100);
    const tonnes = cuM * TONNES_PER_M3;
    return {
      volumeLabel: `${formatNumber(cuM)} m³`,
      weightLabel: `${formatNumber(tonnes)} tonnes`,
      cost: cuM * price,
      note: "Bulk density ≈ 1.3 t/m³ — confirm with your supplier",
    };
  }, [units, length, width, depth, waste, price]);

  const isValid = length > 0 && width > 0 && depth > 0;

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Bed or lawn area</h2>
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
              helperText={units === "imperial" ? "Beds often 4–6 in; lawn topdress ½–1 in" : "Beds often 10–15 cm; lawn topdress 1–2 cm"}
              error={depth <= 0 ? "Enter a depth greater than 0." : undefined}
            />
          </div>
          <AdvancedFields>
            <NumberField label="Waste / settlement" value={waste} onChange={setWaste} unit="%" step={1} max={20} helperText="Compaction and uneven grade" />
            <NumberField
              label={units === "imperial" ? "Price per cubic yard" : "Price per cubic metre"}
              value={price}
              onChange={setPrice}
              unit={currencySymbol(units)}
              step={1}
            />
          </AdvancedFields>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label="Topsoil volume" value={result.volumeLabel} emphasis="primary" helperText={`Includes ${waste}% waste`} />
            <div className="border-t border-border pt-4">
              <Metric label="Approx. weight" value={result.weightLabel} helperText={result.note} />
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
