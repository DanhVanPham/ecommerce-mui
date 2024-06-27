import { Stack } from "@mui/material";
import React from "react";
import WaitingShipOrderItem from "./OrderItem";
import { useGetOrdersQuery } from "../../../app/services/order/orderApi";
import StateManager, { specifyState } from "../../../components/StateManager";
import GroupOrderSkeleton from "../GroupOrderSkeleton";
import EmptyResult from "../../../components/EmptyResult";
import ErrorAlert from "../../../components/ErrorAlert";
import { mockOrderData } from "../_mockData";
import GroupOrder from "../GroupOrder";

const WaitingShip = () => {
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

export default WaitingShip;
