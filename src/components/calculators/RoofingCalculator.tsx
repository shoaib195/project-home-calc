"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength } from "@/lib/units";

const DEFAULT_PRICE = { imperial: 95, metric: 28 };

export function RoofingCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [length, setLength] = useState(40);
  const [width, setWidth] = useState(30);
  const [pitchRise, setPitchRise] = useState(6);
  const [waste, setWaste] = useState(10);
  const [price, setPrice] = useState(DEFAULT_PRICE.imperial);

  function handleUnits(next: UnitSystem) {
    setLength((v) => convertLength(v, units, next));
    setWidth((v) => convertLength(v, units, next));
    setUnits(next);
    setPrice(DEFAULT_PRICE[next]);
  }

  const result = useMemo(() => {
    const footprint = length * width;
    const pitchFactor = Math.sqrt(1 + (pitchRise / 12) ** 2);
    const roofArea = footprint * pitchFactor;
    const withWaste = roofArea * (1 + waste / 100);
    if (units === "imperial") {
      const squares = withWaste / 100;
      const bundles = Math.ceil(squares * 3);
      return {
        area: `${formatNumber(withWaste)} ft²`,
        squares: formatNumber(squares),
        bundles: formatNumber(bundles, 0),
        cost: squares * price,
      };
    }
    const packs = Math.ceil(withWaste / 3.1);
    return {
      area: `${formatNumber(withWaste)} m²`,
      squares: formatNumber(withWaste),
      bundles: formatNumber(packs, 0),
      cost: withWaste * price,
    };
  }, [units, length, width, pitchRise, waste, price]);

  const isValid = length > 0 && width > 0 && pitchRise >= 0;

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Roof footprint</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <NumberField
              label="Roof length"
              value={length}
              onChange={setLength}
              unit={units === "imperial" ? "ft" : "m"}
              step={units === "imperial" ? 1 : 0.1}
              helperText="Along the ridge, measured on the plan"
              error={length <= 0 ? "Enter a length greater than 0." : undefined}
            />
            <NumberField
              label="Roof width"
              value={width}
              onChange={setWidth}
              unit={units === "imperial" ? "ft" : "m"}
              step={units === "imperial" ? 1 : 0.1}
              helperText="Eave to eave on the plan — not the slope length"
              error={width <= 0 ? "Enter a width greater than 0." : undefined}
            />
          </div>
          <NumberField
            label="Pitch rise"
            value={pitchRise}
            onChange={setPitchRise}
            unit="in per 12 in run"
            step={1}
            min={0}
            max={18}
            helperText="A 6/12 pitch is common on houses. Flat roofs use 0."
          />
          <AdvancedFields>
            <NumberField label="Waste allowance" value={waste} onChange={setWaste} unit="%" step={1} max={30} helperText="10% for a simple gable; 15%+ for hips, valleys, and dormers" />
            <NumberField
              label={units === "imperial" ? "Price per square (100 ft²)" : "Price per m²"}
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
            <Metric
              label={units === "imperial" ? "Roofing squares" : "Roof area to cover"}
              value={units === "imperial" ? result.squares : result.area}
              emphasis="primary"
              helperText={units === "imperial" ? "1 square = 100 ft², including waste" : "Includes waste allowance"}
            />
            <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
              <Metric label="Coverage with waste" value={result.area} />
              <Metric
                label={units === "imperial" ? "Bundles to order" : "Packs to order"}
                value={result.bundles}
                helperText={units === "imperial" ? "Assumes 3 bundles per square" : "Assumes ~3.1 m² packs"}
              />
            </div>
            <div className="border-t border-border pt-4">
              <Metric
                label="Estimated material cost"
                value={`${formatCurrency(result.cost * 0.9, units)} – ${formatCurrency(result.cost * 1.1, units)}`}
              />
              <p className="mt-2 text-[12.5px] text-text-3">
                Planning estimate for shingles or tiles only — underlayment, flashing, and labour are separate. Confirm with a roofer before ordering.
              </p>
            </div>
          </div>
        ) : (
          <ResultsPlaceholder message="Enter a roof length and width greater than zero. Pitch can be 0 for a flat roof." />
        )
      }
    />
  );
}
