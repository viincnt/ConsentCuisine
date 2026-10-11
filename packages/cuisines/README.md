# @consent-cuisine/cuisines

Optional locale and cuisine-themed copy for Consent Cuisine.

```ts
import { createConsentCuisine } from "@consent-cuisine/core";
import { frFR } from "@consent-cuisine/cuisines/fr-FR";

const consent = createConsentCuisine({
  locale: "fr-FR",
  cuisine: true,
  locales: [frFR]
});
```

The package currently includes `en-GB`, `fr-FR`, and `pt-BR`. It changes display copy only; consent records continue to use stable technical IDs.

See the [project README](https://github.com/viincnt/ConsentCuisine#readme) to add a locale or learn about the available cuisine modes.

## License

MIT
