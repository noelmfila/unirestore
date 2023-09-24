import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { IProduct } from "../../app/interface/product";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }: IProduct) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "primary.main" }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "primary.main" },
        }}
      />
      <CardMedia
        sx={{
          height: 140,
          backgroundSize: "contain",
          bgcolor: "primary.light",
        }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          R{(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand}/{product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">
          View
        </Button>
      </CardActions>
    </Card>
  );
};
