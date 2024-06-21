import { Stack } from "@mui/material";
import React from "react";
import CanceledOrderItem from "./OrderItem";

const Canceled = () => {
  return (
    <Stack spacing={1.5}>
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <CanceledOrderItem key={idx} />
        ))}
    </Stack>
  );
};

export default Canceled;
