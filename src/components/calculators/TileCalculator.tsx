"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength, convertSmallLength } from "@/lib/units";

export function TileCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [roomLength, setRoomLength] = useState(10);
  const [roomWidth, setRoomWidth] = useState(8);
  const [tileLength, setTileLength] = useState(units === "imperial" ? 12 : 30);
  const [tileWidth, setTileWidth] = useState(units === "imperial" ? 12 : 30);
  const [waste, setWaste] = useState(10);
  const [tilesPerBox, setTilesPerBox] = useState(10);
  const [pricePerBox, setPricePerBox] = useState(units === "imperial" ? 45 : 38);

  function handleUnits(next: UnitSystem) {
    setRoomLength((v) => convertLength(v, units, next));
    setRoomWidth((v) => convertLength(v, units, next));
    setTileLength((v) => convertSmallLength(v, units, next));
    setTileWidth((v) => convertSmallLength(v, units, next));
    setUnits(next);
    setPricePerBox(next === "imperial" ? 45 : 38);
  }

  const result = useMemo(() => {
    const area = roomLength * roomWidth;
    const tileArea = (tileLength / (units === "imperial" ? 12 : 100)) * (tileWidth / (units === "imperial" ? 12 : 100));
    const tiles = Math.ceil((area / tileArea) * (1 + waste / 100));
    const boxes = Math.ceil(tiles / tilesPerBox);
    const cost = boxes * pricePerBox;
    const areaUnit = units === "imperial" ? "ft²" : "m²";
    return { area: `${formatNumber(area)} ${areaUnit}`, tiles: `${tiles} tiles`, boxes: `${boxes} boxes`, cost };
  }, [units, roomLength, roomWidth, tileLength, tileWidth, waste, tilesPerBox, pricePerBox]);

  const isValid = roomLength > 0 && roomWidth > 0 && tileLength > 0 && tileWidth > 0;

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Room and tile size</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <NumberField label="Room length" value={roomLength} onChange={setRoomLength} unit={units === "imperial" ? "ft" : "m"} step={1} />
            <NumberField label="Room width" value={roomWidth} onChange={setRoomWidth} unit={units === "imperial" ? "ft" : "m"} step={1} />
            <NumberField label="Tile length" value={tileLength} onChange={setTileLength} unit={units === "imperial" ? "in" : "cm"} step={1} />
            <NumberField label="Tile width" value={tileWidth} onChange={setTileWidth} unit={units === "imperial" ? "in" : "cm"} step={1} />
          </div>
          <AdvancedFields>
            <NumberField label="Waste allowance" value={waste} onChange={setWaste} unit="%" step={1} max={20} />
            <NumberField label="Tiles per box" value={tilesPerBox} onChange={setTilesPerBox} min={1} step={1} />
            <NumberField label="Price per box" value={pricePerBox} onChange={setPricePerBox} unit={currencySymbol(units)} step={5} />
          </AdvancedFields>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label="Floor area" value={result.area} emphasis="primary" />
            <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
              <Metric label="Tiles to buy" value={result.tiles} helperText={`Includes ${waste}% waste`} />
              <Metric label="Boxes" value={result.boxes} />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Estimated tile cost" value={`${formatCurrency(result.cost * 0.9, units)} – ${formatCurrency(result.cost * 1.1, units)}`} />
              <p className="mt-2 text-[12.5px] text-text-3">Adhesive, grout, and labour are not included.</p>
            </div>
          </div>
        ) : (
          <ResultsPlaceholder />
        )
      }
    />
  );
}
