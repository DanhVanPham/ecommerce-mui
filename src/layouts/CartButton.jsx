import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const CartButton = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <IconButton>
      <Badge badgeContent={cartItems?.length || 0} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartButton;
