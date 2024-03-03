export default async function getSitemap() {
  const result = await fetch("https://yp.uskudar.dev/api/sitemaps/4/?token=1");
  return result.json();
}
