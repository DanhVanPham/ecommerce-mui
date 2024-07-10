import React from "react";
import DetailContainer from "./DetailContainer";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../../app/services/product-item/productItemApi";
import StateManager, { specifyState } from "../../../components/StateManager";
import ErrorAlert from "../../../components/ErrorAlert";
import EmptyResult from "../../../components/EmptyResult";
import LoadingScreen from "../../../components/LoadingScreen";

const ProductDetails = () => {
  const { id } = useParams();

  const responseProductDetails = useGetProductByIdQuery(id, { skip: !id });
  const { data } = responseProductDetails;

  const state = specifyState(responseProductDetails);

  return (
    <Container maxWidth={"false"} sx={{ py: 4 }}>
      <StateManager
        state={state}
        loadingState={<LoadingScreen />}
        emptyState={<EmptyResult />}
        errorState={<ErrorAlert />}
      >
        <DetailContainer data={data} />
      </StateManager>
    </Container>
  );
};

export default ProductDetails;
