export function niceDate(d: string, style: "long" | "short" = "long"): string {
  const dateStyle: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    month: "short",
  };
  if (style === "long") {
    dateStyle.year = "numeric";
    dateStyle.month = "long";
    dateStyle.day = "numeric";
  }
  return new Date(d).toLocaleDateString("en-US", dateStyle);
}
