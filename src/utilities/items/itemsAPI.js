const baseURL = "/api/items";

const headers = {
  "Content-type": "application/json",
};

export async function getItems() {
  const options = {
    method: "GET",
    headers,
  };

  const response = await fetch(baseURL, options);

  if (!response.ok) throw new Error("Network error");

  const items = await response.json();

  return items;
}
