export type UnitSystem = "imperial" | "metric";

export function formatNumber(value: number, maxDecimals = 2): string {
  if (!Number.isFinite(value)) return "—";
  return value.toLocaleString("en-US", {
    maximumFractionDigits: maxDecimals,
    minimumFractionDigits: 0,
  });
}

export function formatCurrency(value: number, unitSystem: UnitSystem): string {
  if (!Number.isFinite(value)) return "—";
  const currency = unitSystem === "metric" ? "GBP" : "USD";
  const locale = unitSystem === "metric" ? "en-GB" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function currencySymbol(unitSystem: UnitSystem): string {
  return unitSystem === "metric" ? "£" : "$";
}
