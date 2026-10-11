import type { CuisineLocale } from "@consent-cuisine/core";

export const frFR: CuisineLocale = {
  locale: "fr-FR",
  cookies: {
    necessary: { label: "Cookies essentiels", description: "Necessaires au fonctionnement du site." },
    preferences: { label: "Cookies de preferences", description: "Retiennent vos choix et reglages." },
    analytics: { label: "Cookies analytiques", description: "Nous aident a comprendre l'utilisation du site." },
    marketing: { label: "Cookies marketing", description: "Personnalisent les communications pertinentes." }
  },
  cuisines: {
    croissant: {
      id: "croissant",
      categories: {
        necessary: { label: "Croissants essentiels", description: "Assurent le bon fonctionnement du site." },
        preferences: { label: "Croissants de preferences", description: "Retiennent vos choix et reglages." },
        analytics: { label: "Croissants analytiques", description: "Nous aident a comprendre l'utilisation du site." },
        marketing: { label: "Croissants marketing", description: "Personnalisent les communications pertinentes." }
      }
    },
    baguette: {
      id: "baguette",
      categories: {
        necessary: { label: "Baguettes essentielles", description: "Assurent le bon fonctionnement du site." },
        preferences: { label: "Baguettes de preferences", description: "Retiennent vos choix et reglages." },
        analytics: { label: "Baguettes analytiques", description: "Nous aident a comprendre l'utilisation du site." },
        marketing: { label: "Baguettes marketing", description: "Personnalisent les communications pertinentes." }
      }
    },
    fromage: {
      id: "fromage",
      categories: {
        necessary: { label: "Fromages essentiels", description: "Assurent le bon fonctionnement du site." },
        preferences: { label: "Fromages de preferences", description: "Retiennent vos choix et reglages." },
        analytics: { label: "Fromages analytiques", description: "Nous aident a comprendre l'utilisation du site." },
        marketing: { label: "Fromages marketing", description: "Personnalisent les communications pertinentes." }
      }
    },
    macaron: {
      id: "macaron",
      categories: {
        necessary: { label: "Macarons essentiels", description: "Assurent le bon fonctionnement du site." },
        preferences: { label: "Macarons de preferences", description: "Retiennent vos choix et reglages." },
        analytics: { label: "Macarons analytiques", description: "Nous aident a comprendre l'utilisation du site." },
        marketing: { label: "Macarons marketing", description: "Personnalisent les communications pertinentes." }
      }
    },
    all: {
      id: "all",
      categories: {
        necessary: { label: "Croissants essentiels", description: "Assurent le bon fonctionnement du site." },
        preferences: { label: "Baguettes de preferences", description: "Retiennent vos choix et reglages." },
        analytics: { label: "Fromages analytiques", description: "Nous aident a comprendre l'utilisation du site." },
        marketing: { label: "Macarons marketing", description: "Personnalisent les communications pertinentes." }
      }
    }
  },
  defaultCuisine: "all"
};
