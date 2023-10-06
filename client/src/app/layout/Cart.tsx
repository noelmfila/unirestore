import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <IconButton
      component={Link}
      to="/basket"
      size="large"
      edge="start"
      color="inherit"
      sx={{ mr: 2 }}
    >
      <Badge badgeContent="4" color="secondary">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};
