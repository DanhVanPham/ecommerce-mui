import React from "react";
import { Box, Container, Stack, Step, StepLabel, Stepper } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import Check from "@mui/icons-material/Check";
import Content from "./Content";

const steps = [
  { id: 1, label: "Thanh toán", icon: PaymentIcon },
  { id: 2, label: "Xem đơn hàng", icon: CardTravelIcon },
];

function QontoStepIcon(props) {
  const { completed, active, icon: step } = props;

  if (completed)
    return (
      <Stack
        sx={{
          width: "30px",
          height: "30px",
          p: 1,
          borderRadius: 999,
          bgcolor: (theme) => theme.palette.primary.main,
          justifyContent: "center",
          alignItems: "center",
          color: (theme) => theme.palette.common.white,
        }}
      >
        <Check fontSize="small" />
      </Stack>
    );

  if (!step) return <></>;

  const Icon = steps?.[step - 1]?.icon;

  return (
    <Stack
      sx={{
        width: "30px",
        height: "30px",
        p: 1,
        borderRadius: 999,
        bgcolor: (theme) =>
          active ? theme.palette.secondary.main : theme.palette.common.white,
        justifyContent: "center",
        alignItems: "center",
        color: (theme) =>
          active ? theme.palette.common.white : theme.palette.common.black,
      }}
    >
      <Icon fontSize="small" />
    </Stack>
  );
}

const CheckoutContainer = () => {
  return (
    <Stack mt={5}>
      <Box sx={{ width: "100%", py: 3.5, px: 1, bgcolor: "#F4F4F4" }}>
        <Stack
          sx={{
            maxWidth: { xs: 1, md: "80%" },
            mx: "auto",
          }}
        >
          <Stepper activeStep={0}>
            {steps.map((step, index) => {
              const labelProps = {};
              return (
                <Step key={step.id}>
                  <StepLabel {...labelProps} StepIconComponent={QontoStepIcon}>
                    {step.label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Stack>
      </Box>
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Content />
      </Container>
    </Stack>
  );
};

export default CheckoutContainer;
