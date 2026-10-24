import { describe, expect, it } from 'vitest';
import { monthlyPriceInCents } from './pricing';

describe('monthlyPriceInCents', () => {
  it('charges 2900 cents per location per month', () => {
    expect(monthlyPriceInCents(1, 'monthly')).toBe(2900);
    expect(monthlyPriceInCents(10, 'monthly')).toBe(29000);
  });

  it('charges 2400 cents for each location from the 11th', () => {
    expect(monthlyPriceInCents(11, 'monthly')).toBe(31400);
  });

  it('takes 20% off the monthly total with annual billing', () => {
    expect(monthlyPriceInCents(1, 'annual')).toBe(2320);
    expect(monthlyPriceInCents(12, 'annual')).toBe(27040);
  });
});
