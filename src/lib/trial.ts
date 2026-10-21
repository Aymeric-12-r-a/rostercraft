export type TrialForm = {
  fullName: string;
  email: string;
  locations: string;
};

export type TrialErrors = Partial<Record<keyof TrialForm, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]*$/;

export function validateTrialForm(form: TrialForm): TrialErrors {
  const errors: TrialErrors = {};
  if (form.fullName.trim().length < 2) {
    errors.fullName = 'Enter your full name.';
  }
  if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = 'Enter a valid work email.';
  }
  if (!form.locations) {
    errors.locations = 'Choose a number of locations.';
  }
  return errors;
}

export function firstName(fullName: string): string {
  return fullName.trim().split(/\s+/)[0];
}

export function trialDays(value: string | undefined = import.meta.env.VITE_TRIAL_DAYS): string | undefined {
  return value;
}
