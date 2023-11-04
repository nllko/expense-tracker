export function areDatesOnSameMonthAndYear(dateA, dateB) {
  return dateA.getMonth() === dateB.getMonth() && dateA.getFullYear() === dateB.getFullYear();
}

export function getDateMonth(date) {
  return date.toLocaleString("default", { month: "long" });
}
