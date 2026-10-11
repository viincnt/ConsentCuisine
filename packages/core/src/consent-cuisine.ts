import { createMemoryStorage } from "./storage.js";
import type {
  CategoryCopy,
  ConsentCategoryDefinition,
  ConsentCuisine,
  ConsentCuisineOptions,
  ConsentRecord,
  ConsentStatus,
  CuisineVariant
} from "./types.js";

const defaultCategories: ConsentCategoryDefinition[] = [
  { id: "necessary", required: true },
  { id: "preferences" },
  { id: "analytics" },
  { id: "marketing" }
];

const fallbackCopy = (id: string): CategoryCopy => ({ label: id, description: "" });

export function createConsentCuisine(options: ConsentCuisineOptions = {}): ConsentCuisine {
  const locale = options.locale ?? "en-GB";
  const localeModule = options.locales?.find((entry) => entry.locale === locale) ?? null;
  const cuisineId = options.cuisine === true ? localeModule?.defaultCuisine : options.cuisine;
  const cuisine: CuisineVariant | null = typeof cuisineId === "string" ? localeModule?.cuisines[cuisineId] ?? null : null;
  const categories = options.categories ?? defaultCategories;
  const storage = options.storage ?? createMemoryStorage();
  const storageKey = options.storageKey ?? "consent-cuisine";
  const policyVersion = options.policyVersion ?? "1";
  const now = options.now ?? (() => new Date());
  const listeners = new Set<(record: ConsentRecord | null) => void>();

  function getConsent(): ConsentRecord | null {
    const raw = storage.get(storageKey);
    if (!raw) return null;
    try {
      const record = JSON.parse(raw) as ConsentRecord;
      return record.version === policyVersion && record.categories && record.updatedAt ? record : null;
    } catch {
      return null;
    }
  }

  function emit(record: ConsentRecord | null) {
    listeners.forEach((listener) => listener(record));
  }

  function save(selection: Record<string, boolean>): ConsentRecord {
    const record: ConsentRecord = {
      version: policyVersion,
      updatedAt: now().toISOString(),
      categories: Object.fromEntries(categories.map(({ id, required }) => [id, required || selection[id] === true]))
    };
    storage.set(storageKey, JSON.stringify(record));
    emit(record);
    return record;
  }

  return {
    locale,
    cuisine,
    getConsent,
    getStatus(): ConsentStatus {
      const consent = getConsent();
      if (!consent) return "unknown";
      return categories.some(({ id, required }) => !required && consent.categories[id]) ? "accepted" : "rejected";
    },
    getCategories() {
      const consent = getConsent();
      return categories.map((category) => {
        const technical = localeModule?.cookies[category.id] ?? fallbackCopy(category.id);
        return {
          ...category,
          accepted: category.required === true || consent?.categories[category.id] === true,
          technical,
          display: cuisine?.categories[category.id] ?? technical
        };
      });
    },
    save,
    acceptAll: () => save(Object.fromEntries(categories.map(({ id }) => [id, true]))),
    rejectOptional: () => save({}),
    reset() {
      storage.remove(storageKey);
      emit(null);
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
  };
}
