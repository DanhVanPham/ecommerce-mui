import { Divider, Stack } from "@mui/material";
import React from "react";
import { useGetOrderByIdQuery } from "../../app/services/order/orderApi";
import StateManager, { specifyState } from "../../components/StateManager";
import OrderItem from "./OrderItem";
import EmptyResult from "../../components/EmptyResult";
import ErrorAlert from "../../components/ErrorAlert";
import OrderSkeleton from "./OrderSkeleton";

const OrderItems = ({ id }) => {
  const responseOrderItems = useGetOrderByIdQuery(id, { skip: !id });
  const { data } = responseOrderItems;
  const state = specifyState(responseOrderItems);

  return (
    <Stack
      sx={{
        boxShadow: (theme) => theme.shadows[10],
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <StateManager
        state={state}
        loadingState={<OrderSkeleton />}
        errorState={<ErrorAlert />}
      >
        <Stack divider={<Divider />}>
          {data.orderDetails?.map((orderItem) => (
            <OrderItem data={orderItem} />
          ))}
        </Stack>
      </StateManager>
    </Stack>
  );
};

export default OrderItems;
