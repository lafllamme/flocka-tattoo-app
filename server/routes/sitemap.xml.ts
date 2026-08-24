export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const siteUrl = (config.public.siteUrl || getRequestURL(event).origin).replace(/\/$/, '')
  const pages = [
    { path: '/', changefreq: 'monthly', priority: '1.0' },
    { path: '/impressum', changefreq: 'yearly', priority: '0.3' },
    { path: '/datenschutz', changefreq: 'yearly', priority: '0.3' },
  ]

  setResponseHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${siteUrl}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>
`
})
