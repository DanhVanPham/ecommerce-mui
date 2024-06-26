import { Stack } from "@mui/material";
import React from "react";
import CompletedOrderItem from "./OrderItem";

const Completed = () => {
  return (
    <Stack spacing={1.5}>
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <CompletedOrderItem key={idx} />
        ))}
    </Stack>
  );
};

export default Completed;
