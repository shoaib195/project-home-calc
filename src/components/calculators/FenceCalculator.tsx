"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { UnitToggle } from "@/components/ui/UnitToggle";
import { Metric } from "@/components/ui/Metric";
import { CalculatorShell, AdvancedFields } from "@/components/calculators/CalculatorShell";
import { ResultsPlaceholder } from "@/components/calculators/ResultsPlaceholder";
import { formatNumber, formatCurrency, currencySymbol, type UnitSystem } from "@/lib/format";
import { convertLength } from "@/lib/units";

export function FenceCalculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [length, setLength] = useState(100);
  const [panelWidth, setPanelWidth] = useState(8);
  const [postSpacing, setPostSpacing] = useState(8);
  const [height, setHeight] = useState(6);
  const [pricePerPanel, setPricePerPanel] = useState(85);
  const [pricePerPost, setPricePerPost] = useState(18);

  function handleUnits(next: UnitSystem) {
    setLength((v) => convertLength(v, units, next));
    setPanelWidth((v) => convertLength(v, units, next));
    setPostSpacing((v) => convertLength(v, units, next));
    setHeight((v) => convertLength(v, units, next));
    setUnits(next);
    setPricePerPanel(next === "imperial" ? 85 : 70);
    setPricePerPost(next === "imperial" ? 18 : 15);
  }

  const result = useMemo(() => {
    const panels = Math.ceil(length / panelWidth);
    const posts = Math.ceil(length / postSpacing) + 1;
    const rails = panels * 2;
    const materials = panels * pricePerPanel + posts * pricePerPost;
    const lenUnit = units === "imperial" ? "ft" : "m";
    return {
      run: `${formatNumber(length)} ${lenUnit}`,
      panels: `${panels} panels`,
      posts: `${posts} posts`,
      rails: `${rails} rail lengths`,
      cost: materials,
      height: `${formatNumber(height)} ${lenUnit} high`,
    };
  }, [units, length, panelWidth, postSpacing, height, pricePerPanel, pricePerPost]);

  const isValid = length > 0 && panelWidth > 0 && postSpacing > 0;

  return (
    <CalculatorShell
      inputs={
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-[16px] font-bold text-text">Fence run</h2>
            <UnitToggle value={units} onChange={handleUnits} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <NumberField label="Total fence length" value={length} onChange={setLength} unit={units === "imperial" ? "ft" : "m"} step={1} />
            <NumberField label="Fence height" value={height} onChange={setHeight} unit={units === "imperial" ? "ft" : "m"} step={0.5} />
            <NumberField label="Panel width" value={panelWidth} onChange={setPanelWidth} unit={units === "imperial" ? "ft" : "m"} step={1} helperText="Section between posts" />
            <NumberField label="Post spacing" value={postSpacing} onChange={setPostSpacing} unit={units === "imperial" ? "ft" : "m"} step={1} />
          </div>
          <AdvancedFields>
            <NumberField label="Price per panel" value={pricePerPanel} onChange={setPricePerPanel} unit={currencySymbol(units)} step={5} />
            <NumberField label="Price per post" value={pricePerPost} onChange={setPricePerPost} unit={currencySymbol(units)} step={2} />
          </AdvancedFields>
        </div>
      }
      results={
        isValid ? (
          <div className="flex flex-col gap-5">
            <Metric label="Fence run" value={result.run} emphasis="primary" helperText={result.height} />
            <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
              <Metric label="Panels" value={result.panels} />
              <Metric label="Posts" value={result.posts} />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Top and bottom rails" value={result.rails} helperText="Two rails per panel section" />
            </div>
            <div className="border-t border-border pt-4">
              <Metric label="Estimated materials" value={`${formatCurrency(result.cost * 0.9, units)} – ${formatCurrency(result.cost * 1.1, units)}`} />
              <p className="mt-2 text-[12.5px] text-text-3">Concrete for post holes and fixings are not included.</p>
            </div>
          </div>
        ) : (
          <ResultsPlaceholder />
        )
      }
    />
  );
}
