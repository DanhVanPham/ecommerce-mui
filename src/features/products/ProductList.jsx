import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ProductItem from "./Item";
import mockProducts from "./_mockData";
import { useFilterProductsQuery } from "../../app/services/product-item/productItemApi";
import StateManager, { specifyState } from "../../components/StateManager";
import ProductSkeleton from "./ProductSkeleton";
import ErrorAlert from "../../components/ErrorAlert";

const ProductList = () => {
  const responseProducts = useFilterProductsQuery();
  const { data } = responseProducts;

  const state = specifyState(responseProducts);

  return (
    <Stack flex={1}>
      <Typography fontSize="24px" fontWeight={400} lineHeight="36px" my={3}>
        Sản phẩm
      </Typography>
      <Grid container spacing={2}>
        <StateManager
          state={state}
          loadingState={<ProductSkeleton />}
          errorState={
            <Grid item xs={12}>
              <ErrorAlert />
            </Grid>
          }
        >
          {data?.map((product, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
              <ProductItem data={product} />
            </Grid>
          ))}
        </StateManager>
      </Grid>
    </Stack>
  );
};

export default ProductList;
