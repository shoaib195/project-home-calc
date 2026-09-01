import type { ComponentType } from "react";
import { ConcreteCalculator } from "@/components/calculators/ConcreteCalculator";
import { GravelCalculator } from "@/components/calculators/GravelCalculator";
import { MulchCalculator } from "@/components/calculators/MulchCalculator";
import { PaintCalculator } from "@/components/calculators/PaintCalculator";
import { FlooringCalculator } from "@/components/calculators/FlooringCalculator";
import { DeckingCalculator } from "@/components/calculators/DeckingCalculator";
import { RoofingCalculator } from "@/components/calculators/RoofingCalculator";
import { DrywallCalculator } from "@/components/calculators/DrywallCalculator";
import { CostEstimator } from "@/components/calculators/CostEstimator";
import { SandCalculator } from "@/components/calculators/SandCalculator";
import { ConcreteBagCalculator } from "@/components/calculators/ConcreteBagCalculator";
import { TileCalculator } from "@/components/calculators/TileCalculator";
import { BrickCalculator } from "@/components/calculators/BrickCalculator";
import { PaintCostCalculator } from "@/components/calculators/PaintCostCalculator";
import { GravelCostCalculator } from "@/components/calculators/GravelCostCalculator";
import { ConcreteCostCalculator } from "@/components/calculators/ConcreteCostCalculator";
import { InsulationCalculator } from "@/components/calculators/InsulationCalculator";
import { FenceCalculator } from "@/components/calculators/FenceCalculator";
import { PaverCalculator } from "@/components/calculators/PaverCalculator";

export const calculatorRegistry: Record<string, ComponentType> = {
  "concrete-calculator": ConcreteCalculator,
  "gravel-calculator": GravelCalculator,
  "mulch-calculator": MulchCalculator,
  "paint-calculator": PaintCalculator,
  "flooring-calculator": FlooringCalculator,
  "decking-calculator": DeckingCalculator,
  "roofing-calculator": RoofingCalculator,
  "drywall-calculator": DrywallCalculator,
  "cost-estimator": CostEstimator,
  "sand-calculator": SandCalculator,
  "concrete-bag-calculator": ConcreteBagCalculator,
  "tile-calculator": TileCalculator,
  "brick-calculator": BrickCalculator,
  "paint-cost-calculator": PaintCostCalculator,
  "gravel-cost-calculator": GravelCostCalculator,
  "concrete-cost-calculator": ConcreteCostCalculator,
  "insulation-calculator": InsulationCalculator,
  "fence-calculator": FenceCalculator,
  "paver-calculator": PaverCalculator,
};
