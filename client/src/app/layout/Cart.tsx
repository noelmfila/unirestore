import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";

export const Cart = () => {
  return (
    <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
      <Badge badgeContent="4" color="secondary">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};
