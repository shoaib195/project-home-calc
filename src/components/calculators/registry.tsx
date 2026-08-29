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
};
