export function formatNumber(number) {
  return (Math.round(Math.abs(number) * 100) / 100);
}
