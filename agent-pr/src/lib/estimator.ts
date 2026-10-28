export const MINUTES_BY_HAND = 15;
export const MINUTES_WITH_ROSTERCRAFT = 3;
export const WEEKS_PER_MONTH = 4;
export const MAX_EMPLOYEES = 500;

export function parseEmployeeCount(value: string): number | null {
  const employees = Number(value);
  if (value.trim() === '' || Number.isNaN(employees) || employees < 0 || employees > MAX_EMPLOYEES) {
    return null;
  }
  return Math.floor(employees);
}

export function hoursSavedPerMonth(employees: number): number {
  const minutesSaved = employees * (MINUTES_BY_HAND - MINUTES_WITH_ROSTERCRAFT) * WEEKS_PER_MONTH;
  return Math.floor(minutesSaved / 60);
}
