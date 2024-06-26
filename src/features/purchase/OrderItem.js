import { Box, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import { fCurrencyVND } from "../../utils/formatNumber";
import { MENU_TAB } from ".";

export const StatusFactory = ({ status }) => {
  switch (status) {
    case MENU_TAB.completed:
      return (
        <Chip
          variant="outlined"
          size="small"
          color="success"
          label="Hoàn thành"
        />
      );
    case MENU_TAB.canceled:
      return (
        <Chip variant="outlined" size="small" color="error" label="Đã hủy" />
      );

    case MENU_TAB.waitingForPayment:
      return (
        <Chip
          variant="outlined"
          size="small"
          color="secondary"
          label="Chờ thanh toán"
        />
      );

    case MENU_TAB.waitingForShip:
      return (
        <Chip
          variant="outlined"
          size="small"
          color="warning"
          label="Chờ giao hàng"
        />
      );

    case MENU_TAB.shipping:
      return (
        <Chip variant="outlined" size="small" color="info" label="Vận chuyển" />
      );

    default:
      break;
  }
};

const OrderItem = ({ status }) => {
  return (
    <Box
      p={3}
      pb={1.5}
      bgcolor="background.paper"
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "80px",
          height: "80px",
          border: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <img
          alt="product"
          src="https://product.hstatic.net/1000282430/product/sua-thanh-trung-khong-duong-950ml_5d7f6fc7714e405194f39d291f6db9a6_grande.jpg"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </Box>
      <Box px={1.5} flex={1}>
        <Typography
          fontSize={"1rem"}
          fontWeight={500}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          Sữa bầu Friso Mum Gold hương cam
        </Typography>
        <Stack>
          <Typography fontSize={14} fontWeight={300} color="#9D9EA2">
            Sữa bột
          </Typography>
          <Typography
            fontSize={14}
            fontWeight={300}
            color="rgba(0, 0, 0, 0.87)"
          >
            x1
          </Typography>
        </Stack>
      </Box>
      <Stack>
        <StatusFactory status={status} />
        <Box alignSelf="center" mt={2}>
          <Typography fontSize="14px" fontWeight={500} color="#EB2606">
            {fCurrencyVND(165000)}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default OrderItem;
