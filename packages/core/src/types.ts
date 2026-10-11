export type ConsentStatus = "unknown" | "accepted" | "rejected";

export interface ConsentCategoryDefinition {
  /** Stable identifier used for integrations and persisted records. */
  id: string;
  required?: boolean;
}

export interface ConsentRecord {
  version: string;
  updatedAt: string;
  categories: Record<string, boolean>;
}

export interface ConsentStorage {
  get(key: string): string | null;
  set(key: string, value: string): void;
  remove(key: string): void;
}

export interface CategoryCopy {
  label: string;
  description: string;
}

export interface CuisineVariant {
  /** Identifier chosen by the consuming application, for example `croissant`. */
  id: string;
  categories: Record<string, CategoryCopy>;
}

/** A locale is supplied by @consent-cuisine/cuisines, never hard-coded by core. */
export interface CuisineLocale {
  locale: string;
  cookies: Record<string, CategoryCopy>;
  cuisines: Record<string, CuisineVariant>;
  defaultCuisine?: string;
}

export interface ConsentCategoryView extends ConsentCategoryDefinition {
  accepted: boolean;
  technical: CategoryCopy;
  display: CategoryCopy;
}

export interface ConsentCuisineOptions {
  locale?: string;
  /** `true` selects the locale default; use a variant ID to choose one explicitly. */
  cuisine?: boolean | string;
  /** Locale modules registered by the consuming application. */
  locales?: CuisineLocale[];
  categories?: ConsentCategoryDefinition[];
  policyVersion?: string;
  storage?: ConsentStorage;
  storageKey?: string;
  now?: () => Date;
}

export interface ConsentCuisine {
  readonly locale: string;
  readonly cuisine: CuisineVariant | null;
  getStatus(): ConsentStatus;
  getConsent(): ConsentRecord | null;
  getCategories(): ConsentCategoryView[];
  save(selection: Record<string, boolean>): ConsentRecord;
  acceptAll(): ConsentRecord;
  rejectOptional(): ConsentRecord;
  reset(): void;
  subscribe(listener: (record: ConsentRecord | null) => void): () => void;
}
