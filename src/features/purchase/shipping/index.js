import { Stack } from "@mui/material";
import React from "react";
import ShippingOrderItem from "./OrderItem";
import StateManager, { specifyState } from "../../../components/StateManager";
import { useGetOrdersQuery } from "../../../app/services/order/orderApi";
import GroupOrderSkeleton from "../GroupOrderSkeleton";
import EmptyResult from "../../../components/EmptyResult";
import ErrorAlert from "../../../components/ErrorAlert";
import { mockOrderData } from "../_mockData";
import GroupOrder from "../GroupOrder";

const Shipping = () => {
  const responseOrders = useGetOrdersQuery();
  const state = specifyState(responseOrders);

  return (
    <StateManager state={state}
      loadingState={<GroupOrderSkeleton />}
      emptyState={<EmptyResult sx={{ backgroundColor: 'background.paper' }} />}
      errorState={<ErrorAlert sx={{ backgroundColor: 'background.paper' }} />}
    >
      <Stack spacing={1.5}>
        {mockOrderData.map((order, idx) => (
          <GroupOrder key={idx} data={order} />
        ))}
      </Stack>
    </StateManager>
  );
};

export default Shipping;
