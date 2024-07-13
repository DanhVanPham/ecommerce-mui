import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useGetProductsByIdQuery } from "../../app/services/company/companyApi";
import ProductItem from "./Item";
import StateManager, { specifyState } from "../../components/StateManager";
import ProductsSkeleton from "./skeleton/ProductsSkeleton";

const Products = ({ companyId }) => {
  const responseProducts = useGetProductsByIdQuery(
    {
      id: companyId,
    },
    { skip: !companyId }
  );
  const { data } = responseProducts;
  console.log(data);
  const state = specifyState(responseProducts);

  const products = data?.products ?? [];
  return (
    <Stack>
      <Typography
        variant="subtitle1"
        fontSize="20px"
        lineHeight="30px"
        fontWeight={400}
        sx={{ mb: 3 }}
      >
        Sản phẩm
      </Typography>
      <StateManager state={state} loadingState={<ProductsSkeleton />}>
        <Grid container spacing={2}>
          {products?.map((product, idx) => (
            <Grid key={idx} item xs={4} sm={4} md={3} lg={2}>
              <ProductItem data={product} />
            </Grid>
          ))}
        </Grid>
      </StateManager>
    </Stack>
  );
};

export default Products;
