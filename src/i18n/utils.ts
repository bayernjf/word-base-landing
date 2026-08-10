// src/i18n/utils.ts
// Language detection, translation lookup, and path localization utilities.

import { dictionaries, defaultLang, type Lang } from './ui';

export type { Lang } from './ui';

/**
 * Detect language from URL pathname.
 * /zh/* -> 'zh', everything else -> 'en' (root is English).
 */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  return segment === 'zh' ? 'zh' : 'en';
}

/**
 * Returns a translation function bound to the given language.
 * Falls back to defaultLang, then to the key itself.
 */
export function useTranslations(lang: Lang): (key: string, params?: Record<string, string | number>) => string {
  const dict = dictionaries[lang] || dictionaries[defaultLang];
  const fallback = dictionaries[defaultLang];

  return (key: string, params?: Record<string, string | number>): string => {
    let raw = dict[key] ?? fallback[key] ?? key;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        raw = raw.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
      }
    }
    return raw;
  };
}

/**
 * Returns a raw (un-interpolated) translation string.
 * Useful for keys that will be passed to client-side scripts via define:vars.
 */
export function tRaw(lang: Lang, key: string): string {
  const dict = dictionaries[lang] || dictionaries[defaultLang];
  const fallback = dictionaries[defaultLang];
  return dict[key] ?? fallback[key] ?? key;
}

/**
 * Get the localized path for a given language.
 * en -> path as-is (root)
 * zh -> /zh + path
 */
export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === 'en') return path;
  return `/zh${path === '/' ? '' : path}`;
}

/**
 * Get the opposite language path (for language switcher links).
 */
export function getAltLangPath(currentPath: string, currentLang: Lang): string {
  if (currentLang === 'zh') {
    // Currently on /zh/*, switch to en (root) — strip /zh prefix
    return currentPath.replace(/^\/zh/, '') || '/';
  }
  // Currently on en (root), switch to zh — add /zh prefix
  const stripped = currentPath.replace(/\/$/, '');
  return `/zh${stripped || ''}/`;
}

/**
 * Get the alt language URL for hreflang/link tags.
 */
export function getAltLangUrl(currentPath: string, currentLang: Lang): string {
  return getAltLangPath(currentPath, currentLang);
}
