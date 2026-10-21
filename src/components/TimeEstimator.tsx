import { useState } from 'react';
import { hoursSavedPerMonth } from '../lib/estimator';

export default function TimeEstimator() {
  const [value, setValue] = useState('10');
  const employees = parseInt(value, 10);

  return (
    <section className="card estimator" aria-labelledby="estimator-title">
      <h2 id="estimator-title">How much time could you save?</h2>
      <label htmlFor="employees">Number of employees</label>
      <input
        id="employees"
        type="number"
        inputMode="numeric"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <p className="result">
        <strong>{hoursSavedPerMonth(employees)}</strong> hours of scheduling saved per month
      </p>
      <p className="hint">15 minutes per employee per week by hand, 3 minutes with Rostercraft.</p>
    </section>
  );
}
