import { describe, expect, it } from 'vitest';
import { hoursSavedPerMonth, parseEmployeeCount } from './estimator';

describe('hoursSavedPerMonth', () => {
  it('saves 8 hours per month for 10 employees', () => {
    expect(hoursSavedPerMonth(10)).toBe(8);
  });

  it('rounds down to whole hours', () => {
    expect(hoursSavedPerMonth(7)).toBe(5);
  });
});

describe('parseEmployeeCount', () => {
  it('accepts valid numbers', () => {
    expect(parseEmployeeCount('10')).toBe(10);
    expect(parseEmployeeCount('500')).toBe(500);
  });

  it('refuses empty, negative and too large values', () => {
    expect(parseEmployeeCount('')).toBeNull();
    expect(parseEmployeeCount('-5')).toBeNull();
    expect(parseEmployeeCount('501')).toBeNull();
  });
});
