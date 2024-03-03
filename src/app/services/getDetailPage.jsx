export default async function getDetailPage(slug) {
  const result = await fetch(
    `https://yp.uskudar.dev/api/content/detail/4/${slug}/tr?token=1`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!result.ok) {
    throw new Error("Sayfa Datası Çekilemedi" + slug);
  }

  return result.json();
}
