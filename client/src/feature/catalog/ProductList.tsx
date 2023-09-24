import { Grid } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { IProducts } from "../../app/interface/products";

export const ProductList = ({ products }: IProducts) => {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};
