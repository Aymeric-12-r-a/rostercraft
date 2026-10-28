## Fix the time estimator validation

The time estimator no longer shows "NaN" or negative hours. It now refuses an empty field, negative numbers and values above 500, and shows "Enter a number of employees between 1 and 500." instead of a result.

I also simplified the result: hours are now rounded down to whole hours, which is easier to read for managers. The rounding test was updated accordingly.

- `parseEmployeeCount` validates the field before any calculation.
- Unit tests cover valid values, empty fields, negative numbers and values above 500.
- All checks pass locally: lint, type check, tests and build.

Closes #
