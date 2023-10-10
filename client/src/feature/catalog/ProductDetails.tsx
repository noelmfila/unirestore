import {
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/model/product";
import agent from "../../app/api/agent";
import { NotFound } from "../../app/errors/NotFound";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { currencyFormatter } from "../../app/utilities/currencyFormatter";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { removeItem, setBasket } from "../basket/basketSlice";

export const ProductDetails = () => {
  const { basket } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);
  const [submiting, setSubmiting] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const item = basket?.items.find((i) => i.productId == product?.id);

  useEffect(() => {
    if (item) setQuantity(item.quantity);
    id &&
      agent.Catalog.details(parseInt(id))
        .then((response) => setProduct(response))
        .catch((error) => console.log(error.response))
        .finally(() => setLoading(false));
  }, [id, item]);

  const handleInputChange = (event: any) => {
    if (event.target.value >= 0) setQuantity(parseInt(event.target.value));
  };

  const handleUpdateCart = () => {
    setSubmiting(true);
    if (!item || quantity > item.quantity) {
      const updatedQuantity = item ? quantity - item.quantity : quantity;
      agent.Basket.addItem(product?.id!, updatedQuantity)
        .then((basket) => dispatch(setBasket(basket)))
        .catch((error) => console.log(error))
        .finally(() => setSubmiting(false));
    } else {
      const updatedQuantity = item.quantity - quantity;
      agent.Basket.removeItem(product?.id!, updatedQuantity)
        .then(() => dispatch(removeItem({productId: product?.id!, quantity: updatedQuantity})))
        .catch((error) => console.log(error))
        .finally(() => setSubmiting(false))
    }
  };
  if (loading) return <LoadingComponent message="Loading Product..." />;

  if (!product) return <NotFound />;

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <img
          src={product.pictureUrl}
          alt={product.name}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="secondary">
          {currencyFormatter(product.price)}
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>{product.type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Brand</TableCell>
                <TableCell>{product.brand}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Stock Quantity</TableCell>
                <TableCell>{product.quantityInStock}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              onChange={handleInputChange}
              variant="outlined"
              type="number"
              label="Quantity in Cart"
              fullWidth
              value={quantity}
            />
          </Grid>
          <Grid item xs={6}>
            <LoadingButton
              disabled={
                item?.quantity === quantity || (!item && quantity === 0)
              }
              loading={submiting}
              onClick={handleUpdateCart}
              sx={{ height: "55px" }}
              color="primary"
              size="large"
              variant="contained"
              fullWidth
            >
              {item ? "Update Quantity" : "Add to Cart"}
            </LoadingButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
