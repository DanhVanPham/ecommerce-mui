import { Container, Stack } from "@mui/material";
import React from "react";
import ProductList from "./ProductList";

const ProductListContainer = () => {
  return (
    <Stack pb={2} bgcolor="#F2F6F4">
      <Container maxWidth="xl">
        <ProductList />
      </Container>
    </Stack>
  );
};

export default ProductListContainer;
