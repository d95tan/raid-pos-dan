import {
  Drawer,
  Typography,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { postSale } from "../../utilities/sales/salesService";
import { useEffect, useState } from "react";
import { centsToDollars } from "../../utilities/helper";

const drawerWidth = 350;

export default function BillDrawer({ items, updateInventory }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (items) {
      setTotal(
        centsToDollars(
          items.reduce((accumulator, curr) => {
            return accumulator + curr.quantity * curr.price;
          }, 0)
        )
      );
    }
  }, [items]);

  const handleSale = async () => {
    try {
      const sale = await postSale(items);
      updateInventory(sale);
    } catch (e) {
      window.alert(
        "There was an error with your request. Please try again later."
      );
    }
    return;
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <Typography variant="h4">This sale:</Typography>

      <Table sx={{ minWidth: drawerWidth }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Unit Price</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items
            ? items.map((item) => {
                if (item.quantity) {
                  return (
                    <TableRow
                      key={item.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <TableCell align="right">{item.quantity}</TableCell>
                      <TableCell align="right">{centsToDollars(item.price)}</TableCell>
                      <TableCell align="right">
                        {centsToDollars(item.price * item.quantity)}
                      </TableCell>
                    </TableRow>
                  );
                }
              })
            : null}
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">TOTAL:</TableCell>
            <TableCell align="right">{total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <br />
      <Button
        size="large"
        variant="contained"
        onClick={handleSale}
        disabled={!total}
      >
        Confirm
      </Button>
    </Drawer>
  );
}
