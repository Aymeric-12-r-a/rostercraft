import { describe, expect, it } from 'vitest';
import { hoursSavedPerMonth } from './estimator';

describe('hoursSavedPerMonth', () => {
  it('saves 8 hours per month for 10 employees', () => {
    expect(hoursSavedPerMonth(10)).toBe(8);
  });

  it('rounds to one decimal', () => {
    expect(hoursSavedPerMonth(7)).toBe(5.6);
  });
});
