import type { CollectionEntry } from 'astro:content';

export type SitePage = CollectionEntry<'sitePages'>;

const pageOrder = [
  '/',
  '/wintergarten-reparatur-berlin/',
  '/wintergarten-dichtungen-erneuern/',
  '/wintergarten-abdichten/',
  '/wintergarten-undicht/',
];

const pageLabels: Record<string, string> = {
  '/': 'Startseite',
  '/wintergarten-reparatur-berlin/': 'Reparatur',
  '/wintergarten-dichtungen-erneuern/': 'Dichtungen',
  '/wintergarten-abdichten/': 'Abdichten',
  '/wintergarten-undicht/': 'Undicht',
};

const cardTitles: Record<string, string> = {
  '/wintergarten-reparatur-berlin/': 'Reparatur, Bauteile und Sanierung',
  '/wintergarten-dichtungen-erneuern/': 'Dichtungen und Dichtprofile erneuern',
  '/wintergarten-abdichten/': 'Abdichtung an Anschluss und Profilen',
  '/wintergarten-undicht/': 'Wassereintritt und undichtes Dach',
};

const cardSummaries: Record<string, string> = {
  '/wintergarten-reparatur-berlin/':
    'Für bestehende Anlagen mit beschädigten Dichtungen, Verglasung, Stegplatten, Anschlüssen, Entwässerung oder Sanierungsbedarf.',
  '/wintergarten-dichtungen-erneuern/':
    'Für spröde, verschobene oder undichte Dichtungen, Zugluft, Wasser am Glasrand und auffällige Dichtprofile.',
  '/wintergarten-abdichten/':
    'Für konkrete Abdichtungsarbeiten an Dachanschluss, Wandanschluss, Profilen, Glasrändern und Übergängen.',
  '/wintergarten-undicht/':
    'Für Wasser nach Regen, tropfende Dachbereiche, unklare Eintrittsstellen, Abdichtung und Ursachenprüfung.',
};

function byPageOrder(a: SitePage, b: SitePage) {
  const aRank = pageOrder.indexOf(a.data.url);
  const bRank = pageOrder.indexOf(b.data.url);
  const safeARank = aRank === -1 ? pageOrder.length : aRank;
  const safeBRank = bRank === -1 ? pageOrder.length : bRank;

  if (safeARank !== safeBRank) {
    return safeARank - safeBRank;
  }

  return a.data.title.localeCompare(b.data.title, 'de');
}

export function getRenderedPages(pages: SitePage[]) {
  return pages
    .filter((page) => page.data.draft !== true)
    .filter((page) => page.id.replace(/\.md$/, '') !== 'home')
    .sort(byPageOrder);
}

export function getRoutingPages(pages: SitePage[], currentUrl: string) {
  return getRenderedPages(pages).filter((page) => page.data.url !== '/' && page.data.url !== currentUrl);
}

export function getPageLabel(page: SitePage) {
  return pageLabels[page.data.url] ?? page.data.title;
}

export function getPageCardTitle(page: SitePage) {
  return cardTitles[page.data.url] ?? page.data.title;
}

export function getPageCardSummary(page: SitePage) {
  return cardSummaries[page.data.url] ?? page.data.description;
}
