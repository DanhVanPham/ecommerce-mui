import { Box, Container, Stack, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import Completed from "./completed";
import Canceled from "./canceled";
import Shipping from "./shipping";
import WaitingPayment from "./waitingPayment";
import WaitingShip from "./waitingShip";

export const MENU_TAB = {
  // waitingForPayment: "waitingForPayment",
  waitingForShip: "CREATED",
  shipping: "SHIPPING",
  completed: "SUCCESS",
  // canceled: "canceled",
};

export const MENU_TABS = [
  // {
  //   label: "Chờ thanh toán",
  //   value: MENU_TAB.waitingForPayment,
  //   component: <WaitingPayment />,
  // },
  {
    label: "Chờ giao hàng",
    value: MENU_TAB.waitingForShip,
    component: <WaitingShip />,
  },
  { label: "Đang vận chuyển", value: MENU_TAB.shipping, component: <Shipping /> },
  { label: "Hoàn thành", value: MENU_TAB.completed, component: <Completed /> },
  // { label: "Đã hủy", value: MENU_TAB.canceled, component: <Canceled /> },
];

const PurchaseContainer = () => {
  const [value, setValue] = React.useState(MENU_TAB.completed);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Stack pb={2} bgcolor="#F2F6F4" sx={{ minHeight: 'calc(100vh - 66px)' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 1, md: 3 } }}>
        <Stack>
          <Typography fontSize="24px" fontWeight={400} lineHeight="36px" my={3}>
            Đơn mua
          </Typography>
          <Box sx={{ px: 1, bgcolor: "background.paper" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons={false}
              aria-label="scrollable prevent tabs example"
            >
              {MENU_TABS.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>
          </Box>
          <Box my={1.5}>
            {MENU_TABS.find((tab) => tab.value === value).component}
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default PurchaseContainer;
