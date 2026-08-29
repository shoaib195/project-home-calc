import type { UnitSystem } from "@/lib/format";

function roundTo(value: number, decimals: number): number {
  if (!Number.isFinite(value)) return value;
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

/** Convert feet ↔ metres. */
export function convertLength(value: number, from: UnitSystem, to: UnitSystem): number {
  if (from === to || !Number.isFinite(value)) return value;
  return from === "imperial" ? roundTo(value * 0.3048, 2) : roundTo(value / 0.3048, 2);
}

/** Convert inches ↔ centimetres. */
export function convertSmallLength(value: number, from: UnitSystem, to: UnitSystem): number {
  if (from === to || !Number.isFinite(value)) return value;
  return from === "imperial" ? roundTo(value * 2.54, 1) : roundTo(value / 2.54, 1);
}

/** Convert square feet ↔ square metres. */
export function convertArea(value: number, from: UnitSystem, to: UnitSystem): number {
  if (from === to || !Number.isFinite(value)) return value;
  return from === "imperial" ? roundTo(value * 0.092903, 2) : roundTo(value / 0.092903, 1);
}
