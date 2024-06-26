import { Stack } from "@mui/material";
import React from "react";
import WaitingPaymentOrderItem from "./OrderItem";

const WaitingPayment = () => {
  return (
    <Stack spacing={1.5}>
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <WaitingPaymentOrderItem key={idx} />
        ))}
    </Stack>
  );
};

export default WaitingPayment;
