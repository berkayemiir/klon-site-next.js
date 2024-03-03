import getSitemap from "./services/getSiteMap";
export default async function sitemap() {
  const { sitemaps } = await getSitemap();

  const siteMapData = sitemaps.map((item) => {
    return {
      url: item.url,
      lastModified: item.created_at,
      changeFrequency: "daily",
      priority: 0.7,
    };
  });

  return siteMapData;
}
