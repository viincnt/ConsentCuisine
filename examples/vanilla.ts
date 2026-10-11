import { createConsentCuisine, createLocalStorage } from "@consent-cuisine/core";
import { frFR } from "@consent-cuisine/cuisines/fr-FR";

const consent = createConsentCuisine({
  locale: "fr-FR",
  cuisine: "croissant",
  locales: [frFR],
  storage: createLocalStorage(),
  policyVersion: "2026-10"
});

const categories = consent.getCategories();
// categories[0].technical.label === "Cookies essentiels"
// categories[0].display.label === "Croissants essentiels"

consent.acceptAll();
