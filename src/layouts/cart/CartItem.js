import { Box, Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { fCurrencyVND, fThousandSeparator } from "../../utils/formatNumber";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../../app/redux/cart/cartSlice";

const CartItem = ({ data }) => {
  const { id, product, quantity, price } = data ?? {};
  const { name, image } = product ?? {};

  const dispatch = useDispatch();

  const handleAddQuantity = () => {
    dispatch(updateCartItemQuantity({ id, quantity: quantity + 1 }));
  };

  const handleReduceQuantity = () => {
    dispatch(updateCartItemQuantity({ id, quantity: quantity - 1 }));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(id));
  };

  const imageUrl = image?.content
    ? "data:image/jpeg;base64," + image?.content
    : "";

  return (
    <Box
      px={2.5}
      py={2}
      sx={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid rgb(243, 245, 249)",
        gap: 1.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          size="small"
          variant="outlined"
          sx={{
            borderRadius: 999,
            p: 0,
            width: "28px",
            height: "28px",
            minWidth: "auto",
          }}
          onClick={handleAddQuantity}
        >
          <AddIcon fontSize="small" />
        </Button>
        <Typography fontSize="14px" my="3px">
          {fThousandSeparator(quantity)}
        </Typography>
        <Button
          size="small"
          variant="outlined"
          sx={{
            borderRadius: 999,
            p: 0,
            width: "28px",
            height: "28px",
            minWidth: "auto",
          }}
          disabled={quantity === 1}
          onClick={handleReduceQuantity}
        >
          <RemoveIcon fontSize="small" />
        </Button>
      </Box>
      <Box
        sx={{
          width: 1,
          maxWidth: "71px",
          height: "55px",
        }}
      >
        <img
          alt="product"
          src={imageUrl}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box flex={1}>
        <Typography fontSize="14px" fontWeight={400} color="rgb(43, 52, 69)">
          {name}
        </Typography>
        <Typography fontSize="10px" fontWeight={400} color="rgb(125, 135, 156)">
          {fCurrencyVND(price)}x{quantity}
        </Typography>
        <Typography
          fontSize="14px"
          fontWeight={600}
          color="rgb(210, 63, 87)"
          mt={0.5}
        >
          {fCurrencyVND(price * quantity)}
        </Typography>
      </Box>
      <IconButton size="small" sx={{ ml: 2.5 }} onClick={handleRemoveItem}>
        <ClearIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default CartItem;
