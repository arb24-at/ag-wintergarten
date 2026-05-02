export function withBase(path: string) {
  if (/^[a-z]+:/i.test(path) || path.startsWith('//')) {
    return path;
  }

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalisedPath = path.startsWith('/') ? path : `/${path}`;

  return `${base}${normalisedPath}` || '/';
}
