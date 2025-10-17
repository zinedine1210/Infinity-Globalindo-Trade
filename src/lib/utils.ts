import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Generic utility to group an array of items by a key selector.
export function groupBy<T, K extends PropertyKey>(
  items: readonly T[],
  getKey: (item: T) => K
): Record<K, T[]> {
  return items.reduce((acc, item) => {
    const key = getKey(item)
    if (!acc[key]) acc[key] = [] as T[]
    acc[key]!.push(item)
    return acc
  }, {} as Record<K, T[]>)
}

// Safe environment variable accessor with default fallback.
export function getEnvVar(name: string, defaultValue = ""): string {
  const value = process.env?.[name]
  return typeof value === "string" && value.length > 0 ? value : defaultValue
}
