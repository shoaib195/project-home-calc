"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, type UnitSystem } from "@/lib/format";
import { convertLength, convertSmallLength } from "@/lib/units";

const BAG_YIELD_FT3 = { lb60: 0.45, lb80: 0.6 };
const BAG_YIELD_M3 = { kg25: 0.0125 };

export function ConcreteBagCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [length, setLength] = useState(8);
  const [width, setWidth] = useState(8);
  const [depth, setDepth] = useState(4);
  const [waste, setWaste] = useState(10);

  function handleUnits(next: UnitSystem) {
    setLength((v) => convertLength(v, units, next));
    setWidth((v) => convertLength(v, units, next));
    setDepth((v) => convertSmallLength(v, units, next));
    setUnits(next);
  }

  const result = useMemo(() => {
    if (units === "imperial") {
      const cuFt = length * width * (depth / 12) * (1 + waste / 100);
      const bags60 = Math.ceil(cuFt / BAG_YIELD_FT3.lb60);
      const bags80 = Math.ceil(cuFt / BAG_YIELD_FT3.lb80);
      const cuYd = cuFt / 27;
      return {
        volume: `${formatNumber(cuYd)} yd³`,
        bags60: `${bags60} bags (60 lb)`,
        bags80: `${bags80} bags (80 lb)`,
        note: cuYd >= 1 ? "Ready-mix is usually cheaper above 1 yd³" : "Bag mix suits small pads and post holes",
      };
    }
    const cuM = length * width * (depth / 100) * (1 + waste / 100);
    const bags25 = Math.ceil(cuM / BAG_YIELD_M3.kg25);
    return {
      volume: `${formatNumber(cuM)} m³`,
      bags60: `${bags25} bags (25 kg)`,
      bags80: "—",
      note: cuM >= 0.75 ? "Ready-mix is usually cheaper above 0.75 m³" : "Bag mix suits small pads and post holes",
    };
  }, [units, length, width, depth, waste]);

  const isValid = length > 0 && width > 0 && depth > 0;

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Pour area</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <NumberField label="Length" value={length} onChange={setLength} unit={units === "imperial" ? "ft" : "m"} step={1} error={length <= 0 ? "Enter a length greater than 0." : undefined} />
            <NumberField label="Width" value={width} onChange={setWidth} unit={units === "imperial" ? "ft" : "m"} step={1} error={width <= 0 ? "Enter a width greater than 0." : undefined} />
            <NumberField label="Depth" value={depth} onChange={setDepth} unit={units === "imperial" ? "in" : "cm"} step={0.5} error={depth <= 0 ? "Enter a depth greater than 0." : undefined} />
          </div>
          <AdvancedFields>
            <NumberField label="Waste allowance" value={waste} onChange={setWaste} unit="%" step={1} max={25} />
          </AdvancedFields>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label="Volume with waste" value={result.volume} emphasis="primary" />
            <div className="border-t border-border pt-4">
              <Metric label={units === "imperial" ? "60 lb bags" : "25 kg bags"} value={result.bags60} />
            </div>
            {units === "imperial" && (
              <div className="border-t border-border pt-4">
                <Metric label="80 lb bags" value={result.bags80} />
              </div>
            )}
            <p className="text-[12.5px] text-text-3">{result.note}</p>
          </div>
        ) : (
          <ResultsPlaceholder />
        )
      }
    />
  );
}
