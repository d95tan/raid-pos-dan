import "./MainPage.css";
import { useEffect, useState } from "react";
import ItemCard from "../../components/ItemCard/ItemCard";
import { getItems } from "../../utilities/items/itemsService";
import BillDrawer from "../../components/BillDrawer/BillDrawer";

export default function MainPage() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    (async function () {
      const data = await getItems();
      for (const item of data) {
        item.quantity = 0;
      }
      setItems(data);
      console.log(data);
    })();
  }, []);

  const changeQuantity = (name, qty) => {
    const temp = structuredClone(items);
    for (const item of temp) {
      if (item.name === name) {
        item.quantity = qty;
      }
    }
    setItems(temp);
  };

  const updateInventory = (sale) => {
    const tempItems = structuredClone(items);
    for (const item of tempItems) {
      item.quantity = 0;
      for (const saleItem of sale.items) {
        if (item._id === saleItem.itemId) {
          item.inventory -= saleItem.quantity;
          break;
        }
      }
    }
    setItems(tempItems);
  };

  return (
    <>
      <div className="items-container">
        {items
          ? items.map((item, i) => {
              return (
                <ItemCard key={i} item={item} changeQuantity={changeQuantity} />
              );
            })
          : null}
        <BillDrawer items={items} updateInventory={updateInventory} />
      </div>
    </>
  );
}
