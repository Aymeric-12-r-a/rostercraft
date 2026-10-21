export const MINUTES_BY_HAND = 15;
export const MINUTES_WITH_ROSTERCRAFT = 3;
export const WEEKS_PER_MONTH = 4;

export function hoursSavedPerMonth(employees: number): number {
  const minutesSaved = employees * (MINUTES_BY_HAND - MINUTES_WITH_ROSTERCRAFT) * WEEKS_PER_MONTH;
  return Math.round((minutesSaved / 60) * 10) / 10;
}
