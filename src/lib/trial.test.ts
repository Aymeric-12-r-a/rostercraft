import { describe, expect, it } from 'vitest';
import { firstName, validateTrialForm } from './trial';

describe('validateTrialForm', () => {
  it('accepts a complete form', () => {
    const errors = validateTrialForm({ fullName: 'Anna Petit', email: 'anna@bistro-lune.fr', locations: '1' });
    expect(errors).toEqual({});
  });

  it('asks for a full name', () => {
    const errors = validateTrialForm({ fullName: '', email: 'anna@bistro-lune.fr', locations: '1' });
    expect(errors.fullName).toBe('Enter your full name.');
  });
});

describe('firstName', () => {
  it('keeps the first word of the full name', () => {
    expect(firstName('  Anna Petit ')).toBe('Anna');
  });
});
