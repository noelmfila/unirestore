import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";
import { useAppSelector } from "../store/configureStore";

export const Cart = () => {
  const { basket } = useAppSelector((state) => state.basket);
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <IconButton
      component={Link}
      to="/basket"
      size="large"
      edge="start"
      color="inherit"
      sx={{ mr: 2 }}
    >
      <Badge badgeContent={itemCount} color="secondary">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};
