import { Stack } from "@mui/material";
import React from "react";
import ShippingOrderItem from "./OrderItem";
import StateManager, { specifyState } from "../../../components/StateManager";
import { useGetByStatusQuery } from "../../../app/services/order/orderApi";
import GroupOrderSkeleton from "../GroupOrderSkeleton";
import EmptyResult from "../../../components/EmptyResult";
import ErrorAlert from "../../../components/ErrorAlert";
import GroupOrder from "../GroupOrder";
import { MENU_TAB } from "..";

const Shipping = () => {
  const responseOrders = useGetByStatusQuery({
    status: MENU_TAB.shipping,
  });
  const { data } = responseOrders;
  const state = specifyState(responseOrders);

  return (
    <StateManager
      state={state}
      loadingState={<GroupOrderSkeleton />}
      emptyState={<EmptyResult sx={{ backgroundColor: "background.paper" }} />}
      errorState={<ErrorAlert sx={{ backgroundColor: "background.paper" }} />}
    >
      <Stack spacing={1.5}>
        {data.map((order, idx) => (
          <GroupOrder key={idx} data={order} />
        ))}
      </Stack>
    </StateManager>
  );
};

export default Shipping;
