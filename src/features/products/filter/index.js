import { Stack } from "@mui/material";
import React from "react";
import BrandFilter from "./BrandFilter";
import AgeFilter from "./AgeFilter";

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
      <Stack direction='row' flexWrap='wrap' spacing={3.75}>
        <BrandFilter />
        <AgeFilter />
      </Stack>
    </Stack>
  );
};

export default ProductFilter;
