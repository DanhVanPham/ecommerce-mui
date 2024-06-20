import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import useToggle from "../../hooks/useToggle";
import CartContainer from "./CartContainer";

const CartButton = () => {
  const { toggle: open, onToggle, onClose } = useToggle();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <IconButton onClick={onToggle}>
        <Badge badgeContent={cartItems?.length || 0} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <CartContainer open={open} onClose={onClose} />
    </>
  );
};

export default CartButton;
