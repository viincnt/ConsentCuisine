import type { CuisineLocale } from "@consent-cuisine/core";

export const enGB: CuisineLocale = {
  locale: "en-GB",
  cookies: {
    necessary: { label: "Necessary cookies", description: "Required for the website to work." },
    preferences: { label: "Preference cookies", description: "Remember your choices and settings." },
    analytics: { label: "Analytics cookies", description: "Help us understand how the website is used." },
    marketing: { label: "Marketing cookies", description: "Used to personalise relevant marketing." }
  },
  cuisines: {
    biscuit: {
      id: "biscuit",
      categories: {
        necessary: { label: "Essential biscuits", description: "Keep the website working." },
        preferences: { label: "Preference biscuits", description: "Remember your choices and settings." },
        analytics: { label: "Analytics biscuits", description: "Help us understand how the website is used." },
        marketing: { label: "Marketing biscuits", description: "Personalise relevant marketing." }
      }
    },
    scone: {
      id: "scone",
      categories: {
        necessary: { label: "Essential scones", description: "Keep the website working." },
        preferences: { label: "Preference scones", description: "Remember your choices and settings." },
        analytics: { label: "Analytics scones", description: "Help us understand how the website is used." },
        marketing: { label: "Marketing scones", description: "Personalise relevant marketing." }
      }
    },
    tea: {
      id: "tea",
      categories: {
        necessary: { label: "Essential tea", description: "Keeps the website working." },
        preferences: { label: "Preference tea", description: "Remembers your choices and settings." },
        analytics: { label: "Analytics tea", description: "Helps us understand how the website is used." },
        marketing: { label: "Marketing tea", description: "Personalises relevant marketing." }
      }
    },
    crumpet: {
      id: "crumpet",
      categories: {
        necessary: { label: "Essential crumpets", description: "Keep the website working." },
        preferences: { label: "Preference crumpets", description: "Remember your choices and settings." },
        analytics: { label: "Analytics crumpets", description: "Help us understand how the website is used." },
        marketing: { label: "Marketing crumpets", description: "Personalise relevant marketing." }
      }
    },
    all: {
      id: "all",
      categories: {
        necessary: { label: "Essential biscuits", description: "Keep the website working." },
        preferences: { label: "Preference scones", description: "Remember your choices and settings." },
        analytics: { label: "Analytics tea", description: "Help us understand how the website is used." },
        marketing: { label: "Marketing crumpets", description: "Personalise relevant marketing." }
      }
    }
  },
  defaultCuisine: "all"
};
