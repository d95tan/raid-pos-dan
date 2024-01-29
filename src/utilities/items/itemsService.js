import * as itemsAPI from "./itemsAPI"

export async function getItems() {
  const items = itemsAPI.getItems();
  return items;
}