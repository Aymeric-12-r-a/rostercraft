# Release 1.2

Prices are now computed in cents, to avoid rounding errors on large accounts. The annual discount is applied once, on the monthly total.

## Ship it

1. Copy the `src` folder of this release over the `src` folder of your repository: three files are replaced, `src/lib/pricing.ts`, `src/lib/pricing.test.ts` and `src/pages/Pricing.tsx`.
2. Commit the change as `Release 1.2` and bring it to `main`, through a pull request if your team works that way.
3. Open the pricing page in production.
