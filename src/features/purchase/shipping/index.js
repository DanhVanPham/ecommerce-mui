import { Stack } from "@mui/material";
import React from "react";
import ShippingOrderItem from "./OrderItem";

const Shipping = () => {
  return (
    <Stack spacing={1.5}>
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <ShippingOrderItem key={idx} />
        ))}
    </Stack>
  );
};

export default Shipping;
