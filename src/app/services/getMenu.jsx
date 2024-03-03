export default async function getMenu() {
  const res = await fetch("https://yp.uskudar.dev/api/menus/4/tr?token=1");

  if (!res.ok) {
    throw new Error("Menü çekilirken hata oluştu.");
  }

  return res.json();
}
