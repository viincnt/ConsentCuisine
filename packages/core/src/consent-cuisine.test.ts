import { describe, expect, it } from "vitest";
import { createConsentCuisine } from "./consent-cuisine.js";
import { createMemoryStorage } from "./storage.js";
import type { CuisineLocale } from "./types.js";

const frFR: CuisineLocale = {
  locale: "fr-FR",
  cookies: { necessary: { label: "Cookies essentiels", description: "Requis." } },
  cuisines: {
    all: { id: "all", categories: { necessary: { label: "Croissants essentiels", description: "Requis." } } },
    croissant: { id: "croissant", categories: { necessary: { label: "Croissants", description: "Requis." } } }
  },
  defaultCuisine: "all"
};

describe("createConsentCuisine", () => {
  it("uses a registered locale module only when cuisine is enabled", () => {
    const consent = createConsentCuisine({ locale: "fr-FR", cuisine: true, locales: [frFR] });

    expect(consent.cuisine?.id).toBe("all");
    expect(consent.getCategories()[0].display.label).toBe("Croissants essentiels");
    expect(consent.getCategories()[0].technical.label).toBe("Cookies essentiels");
  });

  it("selects an individual cuisine variant by ID", () => {
    const consent = createConsentCuisine({ locale: "fr-FR", cuisine: "croissant", locales: [frFR] });

    expect(consent.getCategories()[0].display.label).toBe("Croissants");
  });

  it("persists consent and keeps required categories enabled", () => {
    const storage = createMemoryStorage();
    const consent = createConsentCuisine({ storage, now: () => new Date("2026-01-01T00:00:00.000Z") });

    expect(consent.save({ analytics: true, necessary: false }).categories).toEqual({ necessary: true, preferences: false, analytics: true, marketing: false });
    expect(consent.getStatus()).toBe("accepted");
  });

  it("invalidates consent when the policy version changes", () => {
    const storage = createMemoryStorage();
    createConsentCuisine({ storage, policyVersion: "1" }).acceptAll();

    expect(createConsentCuisine({ storage, policyVersion: "2" }).getConsent()).toBeNull();
  });
});
