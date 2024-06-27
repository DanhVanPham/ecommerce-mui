import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import OrderItem from "../OrderItem";
import { MENU_TAB } from "..";
import { fCurrencyVND } from "../../../utils/formatNumber";

const WaitingShipOrderItem = ({ data }) => {
  const { totalPriceProduct } = data ?? {}
  return (
    <Stack bgcolor="background.paper">
      <OrderItem data={data} />
      <Divider />
      <Box
        p={3}
        pb={1.5}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        {/* <Button variant="contained" color="error">
          Hủy đơn
        </Button> */}
        <Stack direction="row" spacing={1.25} alignItem="center">
          <Stack direction="row" alignItems="center">
            <AttachMoneyIcon fontSize="small" />
            <Typography fontSize="14px">Thành tiền:</Typography>
          </Stack>
          <Typography fontSize="24px" fontWeight={400} color="#EB2606">
            {fCurrencyVND(totalPriceProduct)}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default WaitingShipOrderItem;
