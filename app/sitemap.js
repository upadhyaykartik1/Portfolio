export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  return base ? [{ url: base, lastModified: new Date() }] : [];
}
