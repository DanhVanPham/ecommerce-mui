import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import OrderItem from "../OrderItem";
import { fCurrencyVND } from "../../../utils/formatNumber";
import { STATUS_ORDER } from "../../../utils/constants";

const CanceledOrderItem = () => {
  return (
    <Stack bgcolor="background.paper">
      <OrderItem status={STATUS_ORDER.canceled} />
      <Divider />
      <Box
        p={3}
        pb={1.5}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Stack direction="row" spacing={1.25} alignItem="center">
          <Stack direction="row" alignItems="center">
            <AttachMoneyIcon fontSize="small" />
            <Typography fontSize="14px">Thành tiền:</Typography>
          </Stack>
          <Typography fontSize="24px" fontWeight={400} color="#EB2606">
            {fCurrencyVND(165000)}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default CanceledOrderItem;
