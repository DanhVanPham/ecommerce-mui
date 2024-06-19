import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ProductItem from "./Item";
import mockProducts from "./_mockData";

const ProductList = () => {
  return (
    <Stack flex={1}>
      <Typography fontSize="24px" fontWeight={400} lineHeight="36px" my={3}>
        Sản phẩm
      </Typography>
      <Grid container spacing={2}>
        {mockProducts.map((product, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
            <ProductItem data={product} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default ProductList;
