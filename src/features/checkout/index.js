import React from 'react'
import { Box, Container, Stack, Step, StepLabel, Stepper } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import Content from './Content';

const steps = [
    { id: 1, label: 'Thanh toán', icon: PaymentIcon },
    { id: 2, label: 'Xem đơn hàng', icon: CardTravelIcon },
];

const CheckoutContainer = () => {
    return (
        <Stack>
            <Box sx={{ width: '100%', py: 3.5, px: 1, bgcolor: '#F4F4F4' }}>
                <Stack sx={{
                    maxWidth: { xs: 1, md: '80%' },
                    mx: 'auto'
                }}>
                    <Stepper activeStep={1}>
                        {steps.map((step, index) => {
                            const labelProps = {};
                            return (
                                <Step key={step.id}>
                                    <StepLabel {...labelProps} StepIconComponent={step.icon}>{step.label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </Stack>
            </Box>
            <Container maxWidth='lg' sx={{ my: 4 }}>
                <Content />
            </Container>
        </Stack>
    )
}

export default CheckoutContainer