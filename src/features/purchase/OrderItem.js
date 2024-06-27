import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { fCurrencyVND, fThousandSeparator } from "../../utils/formatNumber";

const OrderItem = ({ data }) => {
  const { quantity, price, productItem } = data ?? {}
  const { name, image, milkBrand } = productItem ?? {}

  const imageUrl = image?.content
    ? "data:image/jpeg;base64," + btoa(image?.content)
    : "";

  return (
    <Box
      p={3}
      pb={1.5}
      bgcolor="background.paper"
      sx={{
        display: "flex",
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          width: "48px",
          height: "48px",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: '12px',
          mr: 2
        }}
      >
        <img
          alt="product"
          src={imageUrl}
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </Box>
      <Box flex={1}>
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
          {name}
        </Typography>
        <Stack>
          <Typography fontSize={14} fontWeight={300} color="#9D9EA2">
            {milkBrand?.name}
          </Typography>
          <Typography
            fontSize={14}
            fontWeight={300}
            color="rgba(0, 0, 0, 0.87)"
          >
            x{fThousandSeparator(quantity || 0)}
          </Typography>
        </Stack>
      </Box>
      <Stack alignSelf='flex-start'>
        <Box alignSelf="center" mt={2}>
          <Typography fontSize="14px" fontWeight={500} color="#EB2606">
            {fCurrencyVND(price)}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default OrderItem;
