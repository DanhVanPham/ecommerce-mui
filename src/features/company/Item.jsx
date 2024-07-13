import { Stack, Typography } from "@mui/material";
import React from "react";

const ProductItem = ({ data }) => {
  const { id, name, image, milkBrand } = data ?? {};

  const imageUrl = image?.content
    ? "data:image/jpeg;base64," + image?.content
    : "";

  return (
    <Stack
      sx={{
        backgroundColor: "white",
        borderRadius: 1,
        overflow: "hidden",
        boxShadow: (theme) => theme.shadows[1],
      }}
    >
      <Stack
        sx={{
          height: 80,
          width: 1,
          px: 2,
          py: 1.5,
        }}
      >
        <img
          alt="product"
          src={imageUrl}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            objectPosition: "center",
          }}
        />
      </Stack>
      <Stack spacing={1} p={2}>
        <Typography
          fontSize={14}
          fontWeight={300}
          color="#9D9EA2"
          textAlign="center"
          noWrap
        >
          {milkBrand?.name}
        </Typography>
        <Typography
          fontSize={14}
          fontWeight={500}
          textAlign="center"
          lineHeight="27px"
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
      </Stack>
    </Stack>
  );
};

export default ProductItem;
