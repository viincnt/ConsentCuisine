<div align="center">

# 🍽️ Consent Cuisine

> Cookie consent is boring. I fixed the wrong problem.

> A headless, multilingual consent manager where your privacy UI can speak the language of food — without compromising the consent model underneath.

<img alt="language" src="https://img.shields.io/badge/language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=1a1b26" />
<img alt="runtime" src="https://img.shields.io/badge/runtime-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white&labelColor=1a1b26" />
<img alt="package-manager" src="https://img.shields.io/badge/package_manager-pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white&labelColor=1a1b26" />
<img alt="architecture" src="https://img.shields.io/badge/architecture-headless%20%2B%20modular-1a1b26?style=for-the-badge" />
<img alt="locales" src="https://img.shields.io/badge/locales-en--GB%20%7C%20fr--FR%20%7C%20pt--BR-1a1b26?style=for-the-badge" />
<img alt="license" src="https://img.shields.io/badge/license-MIT-1a1b26?style=for-the-badge" />

</div>

---

## 📌 Overview

**Consent Cuisine** is a framework-agnostic consent manager for applications that want dependable consent state and room for a more expressive user experience.

The core package owns the things that must stay stable: consent categories, required consent, persistence, policy invalidation, and user choices. Locale packages own the things that can change: language, tone, and cuisine-themed labels.

That means your stored data always uses predictable technical IDs such as `analytics` and `marketing`, while your interface can present them as conventional privacy labels or as food-inspired copy.

```ts
import { createConsentCuisine, createLocalStorage } from "@consent-cuisine/core";
import { frFR } from "@consent-cuisine/cuisines/fr-FR";

const consent = createConsentCuisine({
  locale: "fr-FR",
  cuisine: true,
  locales: [frFR],
  storage: createLocalStorage(),
  policyVersion: "2026-10"
});

consent.getCategories();
// Technical: "Cookies analytiques"
// Display:   "Fromages analytiques"
```

---

## ⚙️ Architecture

Consent Cuisine separates durable consent state from presentation:

```text
Your application
      │
      ▼
Consent Cuisine core
      │
      ├── categories and required consent
      ├── acceptance / rejection / reset actions
      ├── policy-version invalidation
      └── storage adapter
      │
      ▼
Registered locale module
      │
      ├── technical labels
      ├── cuisine variants
      └── locale default
      │
      ▼
Your UI
```

The core has no locale content baked into it. A locale module is opt-in, and an unknown category safely falls back to its technical ID until copy is supplied.

---

## ✨ What it handles

- **Required consent by default** — the `necessary` category is always enabled.
- **Stable consent records** — persistence uses technical IDs, never translated labels.
- **Policy-aware storage** — increment `policyVersion` to invalidate an older consent record.
- **Headless composition** — bring any UI framework, or no framework at all.
- **Locale-driven voice** — choose conventional copy, a specific cuisine variant, or a locale's complete food vocabulary.
- **Portable storage** — use `localStorage` or provide your own storage adapter.

---

## 🧩 Cuisine modes

`cuisine` changes presentation only. It never changes category IDs, consent semantics, or persisted data.

```ts
createConsentCuisine({ locale: "fr-FR", cuisine: false, locales: [frFR] });
// Conventional cookie labels

createConsentCuisine({ locale: "fr-FR", cuisine: "croissant", locales: [frFR] });
// Croissant-themed labels only

createConsentCuisine({ locale: "fr-FR", cuisine: "baguette", locales: [frFR] });
createConsentCuisine({ locale: "fr-FR", cuisine: "fromage", locales: [frFR] });
createConsentCuisine({ locale: "fr-FR", cuisine: "macaron", locales: [frFR] });

createConsentCuisine({ locale: "fr-FR", cuisine: true, locales: [frFR] });
// Locale default: one food per consent category
```

The bundled locale modules are `en-GB`, `fr-FR`, and `pt-BR`. They are examples and extension points, not a closed list of supported languages.

---

## 🎛️ Consent API

```ts
consent.getStatus();
// "unknown" | "accepted" | "rejected"

consent.getConsent();
consent.getCategories();

consent.save({ analytics: true, marketing: false });
consent.acceptAll();
consent.rejectOptional();
consent.reset();
```

### Custom categories and storage

```ts
const consent = createConsentCuisine({
  categories: [
    { id: "necessary", required: true },
    { id: "analytics" },
    { id: "video-personalization" }
  ],
  storage: {
    get: (key) => database.read(key),
    set: (key, value) => database.write(key, value),
    remove: (key) => database.delete(key)
  }
});
```

Custom categories remain valid even before a locale adds custom copy. Until then, their technical ID is displayed as the fallback label.

---

## 🗺️ Project structure

```text
ConsentCuisine/
├── packages/
│   ├── core/          Consent state, categories, storage, and public API
│   └── cuisines/      Opt-in locale and cuisine modules
│
├── apps/
│   └── docs/          Documentation site
│
├── examples/          Small composition examples
├── pnpm-workspace.yaml
└── package.json
```

### Adding a locale

Create a locale module in `packages/cuisines/src/`, export a `CuisineLocale`, and add its subpath export in the package manifest. The consent core does not need to change.

---

## 🧪 Development

### Prerequisites

| Component | Requirement |
| --- | --- |
| Node.js | `22` recommended; `>=20.9.0` required |
| Package manager | pnpm `12.10.1` |

This repository enforces **LF** line endings through `.gitattributes` and `.editorconfig`, so it works consistently on Windows, macOS, and Linux.

```powershell
corepack enable
corepack prepare pnpm@12.10.1 --activate
pnpm install
```

### Commands

```sh
pnpm run check      # Type-check all workspace packages
pnpm test           # Run core tests
pnpm run build      # Build core, cuisines, and docs
pnpm dev:docs       # Start the documentation app
```

---

## 🎯 Roadmap

- [x] Headless consent state and storage abstraction
- [x] Policy-version invalidation
- [x] Optional cuisine-themed locale variants
- [x] Initial `en-GB`, `fr-FR`, and `pt-BR` modules
- [x] Documentation application
- [ ] More locale modules
- [ ] Framework-specific UI examples
- [ ] Additional storage adapters

---

## 📄 License

Consent Cuisine is released under the MIT License.
