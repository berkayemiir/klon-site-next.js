export default async function getNews({
  page = "",
  limit = "",
  tag_id = "",
} = {}) {
  const baseUrl =
    "https://yp.uskudar.dev/api/category-content/lists/4/yazi/tr?token=1";
  const queryParams = new URLSearchParams();

  if (page) queryParams.append("page", page);
  if (limit) queryParams.append("limit", limit);
  if (tag_id) queryParams.append("tag_id", tag_id);

  const url = `${baseUrl}&${queryParams.toString()}`;

  const result = await fetch(url);
  return result.json();
}
