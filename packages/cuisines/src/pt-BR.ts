import type { CuisineLocale } from "@consent-cuisine/core";

export const ptBR: CuisineLocale = {
  locale: "pt-BR",
  cookies: {
    necessary: { label: "Cookies necessarios", description: "Necessarios para o funcionamento do site." },
    preferences: { label: "Cookies de preferencias", description: "Lembram suas escolhas e configuracoes." },
    analytics: { label: "Cookies analiticos", description: "Nos ajudam a entender o uso do site." },
    marketing: { label: "Cookies de marketing", description: "Personalizam comunicacoes relevantes." }
  },
  cuisines: {
    "pao-de-queijo": {
      id: "pao-de-queijo",
      categories: {
        necessary: { label: "Pao de queijo essencial", description: "Mantem o site funcionando." },
        preferences: { label: "Pao de queijo de preferencias", description: "Lembra suas escolhas e configuracoes." },
        analytics: { label: "Pao de queijo analitico", description: "Nos ajuda a entender o uso do site." },
        marketing: { label: "Pao de queijo de marketing", description: "Personaliza comunicacoes relevantes." }
      }
    },
    brigadeiro: {
      id: "brigadeiro",
      categories: {
        necessary: { label: "Brigadeiros essenciais", description: "Mantem o site funcionando." },
        preferences: { label: "Brigadeiros de preferencias", description: "Lembram suas escolhas e configuracoes." },
        analytics: { label: "Brigadeiros analiticos", description: "Nos ajudam a entender o uso do site." },
        marketing: { label: "Brigadeiros de marketing", description: "Personalizam comunicacoes relevantes." }
      }
    },
    coxinha: {
      id: "coxinha",
      categories: {
        necessary: { label: "Coxinhas essenciais", description: "Mantem o site funcionando." },
        preferences: { label: "Coxinhas de preferencias", description: "Lembram suas escolhas e configuracoes." },
        analytics: { label: "Coxinhas analiticas", description: "Nos ajudam a entender o uso do site." },
        marketing: { label: "Coxinhas de marketing", description: "Personalizam comunicacoes relevantes." }
      }
    },
    acai: {
      id: "acai",
      categories: {
        necessary: { label: "Acai essencial", description: "Mantem o site funcionando." },
        preferences: { label: "Acai de preferencias", description: "Lembra suas escolhas e configuracoes." },
        analytics: { label: "Acai analitico", description: "Nos ajuda a entender o uso do site." },
        marketing: { label: "Acai de marketing", description: "Personaliza comunicacoes relevantes." }
      }
    },
    all: {
      id: "all",
      categories: {
        necessary: { label: "Pao de queijo essencial", description: "Mantem o site funcionando." },
        preferences: { label: "Brigadeiros de preferencias", description: "Lembram suas escolhas e configuracoes." },
        analytics: { label: "Coxinhas analiticas", description: "Nos ajudam a entender o uso do site." },
        marketing: { label: "Acai de marketing", description: "Personaliza comunicacoes relevantes." }
      }
    }
  },
  defaultCuisine: "all"
};
