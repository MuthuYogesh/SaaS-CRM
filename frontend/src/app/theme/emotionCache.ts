"use client";

import createCache from "@emotion/cache";

export default function createEmotionCache() {
  return createCache({
    key: "mui",
    prepend: true,
    insertionPoint:
      typeof document !== "undefined"
        ? (document.querySelector('meta[name="emotion-insertion-point"]') as HTMLElement) || undefined
        : undefined,
  });
}
