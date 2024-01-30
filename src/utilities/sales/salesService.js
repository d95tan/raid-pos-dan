import {format } from "date-fns"
import * as salesAPI from "./salesAPI";

export async function getSales() {
  const items = await salesAPI.getSales();
  for (const item of items) {
    item.createdAt = format(item.createdAt, "dd MMM yyyy, HH:mm")
  }
  return items;
}

export async function postSale(items) {
  const sale = [];

  for (const item of items) {
    if (item.quantity > 0) {
      sale.push({
        itemId: item._id,
        quantity: item.quantity,
        price: item.price,
      });
    }
  }

  const body = { items: sale };

  const response = await salesAPI.postSale(body);
  console.log(response);

  return response;
}
