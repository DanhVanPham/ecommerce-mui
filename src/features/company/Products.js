import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useGetProductsByIdQuery } from "../../app/services/company/companyApi";
import ProductItem from "./Item";

const Products = ({ companyId }) => {
  const { data } = useGetProductsByIdQuery(
    {
      id: companyId,
    },
    { skip: !companyId }
  );
  console.log(data);
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
      <Grid container spacing={2}>
        {products?.map((product, idx) => (
          <Grid key={idx} item xs={4} sm={4} md={3} lg={2}>
            <ProductItem data={product} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Products;
