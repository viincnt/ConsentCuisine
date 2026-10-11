import type { ConsentStorage } from "./types.js";

export function createMemoryStorage(): ConsentStorage {
  const values = new Map<string, string>();
  return {
    get: (key) => values.get(key) ?? null,
    set: (key, value) => values.set(key, value),
    remove: (key) => values.delete(key)
  };
}

export function createLocalStorage(): ConsentStorage {
  if (typeof window === "undefined" || !window.localStorage) return createMemoryStorage();
  return {
    get: (key) => window.localStorage.getItem(key),
    set: (key, value) => window.localStorage.setItem(key, value),
    remove: (key) => window.localStorage.removeItem(key)
  };
}
