# @consent-cuisine/core

Headless consent state management for Consent Cuisine.

```ts
import { createConsentCuisine, createLocalStorage } from "@consent-cuisine/core";

const consent = createConsentCuisine({
  storage: createLocalStorage(),
  policyVersion: "2026-10"
});

consent.acceptAll();
```

The core owns consent categories, state, persistence, and policy-version invalidation. Add `@consent-cuisine/cuisines` when you want locale-specific display copy.

See the [project README](https://github.com/viincnt/ConsentCuisine#readme) for the full API and development guide.

## License

MIT
