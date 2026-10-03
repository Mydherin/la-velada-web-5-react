// Public base path the app is built for (Vite `base`); always ends with "/".
const base = import.meta.env.BASE_URL;

export const withBase = (path: string) => base + path.replace(/^\//, "");

export const currentPath = () => {
  const { pathname } = window.location;
  const relative = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return "/" + relative.replace(/^\/|\/$/g, "");
};
