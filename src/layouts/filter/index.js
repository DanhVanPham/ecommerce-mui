import { Popover, Stack, Typography } from "@mui/material";
import React from "react";
import BrandFilter from "./BrandFilter";

const ProductFilter = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "white",
        py: 2,
        px: 1,
      }}
    >
      <Stack>
        <BrandFilter />
      </Stack>
    </Stack>
  );
};

export default ProductFilter;
