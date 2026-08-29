"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength, convertSmallLength } from "@/lib/units";

const DEFAULT_PRICE = { imperial: 14, metric: 11 };

export function DeckingCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [length, setLength] = useState(16);
  const [width, setWidth] = useState(12);
  const [boardWidth, setBoardWidth] = useState(5.5);
  const [waste, setWaste] = useState(10);
  const [pricePerBoard, setPricePerBoard] = useState(DEFAULT_PRICE.imperial);

  function handleUnits(next: UnitSystem) {
    setLength((v) => convertLength(v, units, next));
    setWidth((v) => convertLength(v, units, next));
    setBoardWidth((v) => convertSmallLength(v, units, next));
    setUnits(next);
    setPricePerBoard(DEFAULT_PRICE[next]);
  }

  const result = useMemo(() => {
    const gapIn = units === "imperial" ? 0.25 : 0.6;
    const footprint = units === "imperial" ? (boardWidth + gapIn) / 12 : (boardWidth + gapIn) / 100;
    const boardsAcross = footprint > 0 ? width / footprint : 0;
    const totalBoards = Math.ceil(boardsAcross * (1 + waste / 100));
    const area = length * width;
    return { totalBoards, area };
  }, [units, length, width, boardWidth, waste]);

  const isValid = length > 0 && width > 0 && boardWidth > 0;
  const unitLabel = units === "imperial" ? "ft²" : "m²";

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Deck dimensions</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <NumberField label="Deck length" value={length} onChange={setLength} unit={units === "imperial" ? "ft" : "m"} step={units === "imperial" ? 1 : 0.1} helperText="Boards run this direction" error={length <= 0 ? "Enter a length greater than 0." : undefined} />
            <NumberField label="Deck width" value={width} onChange={setWidth} unit={units === "imperial" ? "ft" : "m"} step={units === "imperial" ? 1 : 0.1} error={width <= 0 ? "Enter a width greater than 0." : undefined} />
          </div>
          <NumberField label="Board face width" value={boardWidth} onChange={setBoardWidth} unit={units === "imperial" ? "in" : "cm"} step={units === "imperial" ? 0.25 : 0.5} error={boardWidth <= 0 ? "Enter a board width greater than 0." : undefined} />
          <AdvancedFields>
            <NumberField label="Waste allowance" value={waste} onChange={setWaste} unit="%" step={1} max={30} />
            <NumberField label="Price per board" value={pricePerBoard} onChange={setPricePerBoard} unit={currencySymbol(units)} step={1} />
          </AdvancedFields>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label="Boards needed" value={`${formatNumber(result.totalBoards, 0)}`} emphasis="primary" helperText={`Includes ${waste}% waste`} />
            <div className="border-t border-border pt-4">
              <Metric label="Deck area" value={`${formatNumber(result.area)} ${unitLabel}`} helperText="Assumes boards run the length of the deck" />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Estimated material cost" value={formatCurrency(result.totalBoards * pricePerBoard, units)} />
            </div>
          </div>
        ) : (
          <ResultsPlaceholder message="Enter a deck length, width, and board face width greater than zero." />
        )
      }
    />
  );
}
