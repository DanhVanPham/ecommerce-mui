import { Stack } from "@mui/material";
import React from "react";
import WaitingShipOrderItem from "./OrderItem";

const WaitingShip = () => {
  return (
    <Stack spacing={1.5}>
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <WaitingShipOrderItem key={idx} />
        ))}
    </Stack>
  );
};

export default WaitingShip;
