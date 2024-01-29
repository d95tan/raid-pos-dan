import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, ButtonGroup, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function ItemCard({ item, changeQuantity }) {
  const handleChange = (e) => {
    changeQuantity(item?.name, parseInt(e.target.value));
  };

  const handleAdd = () => {
    changeQuantity(item?.name, item?.quantity + 1);
    // console.log(bill);
  };

  const handleRemove = () => {
    changeQuantity(item?.name, item?.quantity - 1);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={handleAdd}
        disabled={item?.inventory > item?.quantity ? false : true}
      >
        <CardMedia
          component="img"
          height="140"
          image={`../../../public/${item?.name}.png`}
          alt={item?.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Inventory: {item?.inventory}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          onClick={handleRemove}
          disabled={item?.quantity > 0 ? false : true}
        >
          <RemoveIcon />
        </Button>
        <TextField
          id="outlined-basic"
          label="Quantity"
          type="number"
          min={0}
          max={item?.inventory}
          value={item?.quantity}
          variant="outlined"
          onChange={handleChange}
        />
        <Button
          onClick={handleAdd}
          disabled={item?.inventory > item?.quantity ? false : true}
        >
          <AddIcon />
        </Button>
      </ButtonGroup>
    </Card>
  );
}
