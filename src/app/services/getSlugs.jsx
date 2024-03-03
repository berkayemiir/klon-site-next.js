export default async function getSlugs() {
  const result = await fetch(
    "https://yp.uskudar.dev/api/content/slugs/4?token=1"
  );
  return result.json();
}
