const baseURL = "/api/sales";

const headers = {
  "Content-type": "application/json",
};

export async function getSales() {
  const options = {
    method: "GET",
    headers,
  };

  const response = await fetch(baseURL, options);

  const sales = await response.json();

  return sales;
}

export async function postSale(body) {
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  };

  const response = await fetch(baseURL, options);

  if (!response.ok) throw new Error("Network Error");

  const sale = await response.json();

  return sale;
}
