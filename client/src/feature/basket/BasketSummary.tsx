import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { currencyFormatter } from "../../app/utilities/currencyFormatter";
import { useAppSelector } from "../../app/store/configureStore";

export default function BasketSummary() {
  const { basket } = useAppSelector((state) => state.basket);
  const subtotal =
    basket?.items.reduce((sum, item) => sum + item.price * item.quantity, 0) ??
    0;

  const freeDeliveryAmount = 10000;
  const flatDelivertAmount = 500;

  const deliveryFee =
    subtotal > freeDeliveryAmount ? 0 : subtotal == 0 ? 0 : flatDelivertAmount;

  return (
    <>
      <TableContainer component={Paper} variant={"outlined"}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{currencyFormatter(subtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Delivery fee*</TableCell>
              <TableCell align="right">
                {currencyFormatter(deliveryFee)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }} colSpan={2}>
                Total
              </TableCell>
              <TableCell align="right">
                {currencyFormatter(subtotal + deliveryFee)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span style={{ fontStyle: "italic" }}>
                  *Orders over R100 qualify for free delivery!
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
