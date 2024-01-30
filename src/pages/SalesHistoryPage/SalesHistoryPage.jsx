import { useEffect, useState } from "react";
import { getSales } from "../../utilities/sales/salesService";
import SalesHistoryTable from "../../components/SalesHistoryTable/SalesHistoryTable";

export default function SalesHistoryPage() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await getSales();
      setSales(data);
      console.log(data);
    })();
  }, []);

  return (
    <>
      <h2>Sales History</h2>
      <SalesHistoryTable sales={sales} />
    </>
  );
}
