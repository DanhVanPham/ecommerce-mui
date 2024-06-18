import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import PaymentMethod from './PaymentMethod'

const BillPreview = () => {
    return (
        <Box sx={{
            borderRadius: 2,
            p: 3,
            border: `1px solid #F4F4F4`
        }}>
            <Stack spacing={2}>
                <Stack direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    fontSize='14px'
                    fontWeight={400}
                >
                    <Typography color='#9D9EA2'>Tổng</Typography>
                    <Typography color='#060709' lineHeight='21px'>1.078.000</Typography>
                </Stack>
                <Stack direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    fontSize='14px'
                    fontWeight={400}
                >
                    <Typography color='#9D9EA2'>Phí ship</Typography>
                    <Typography color='#060709' lineHeight='21px'>35.000</Typography>
                </Stack>
            </Stack>
            <Divider sx={{ my: 2.5 }} />
            <Stack spacing={2} mb={2.5}>
                <Typography fontSize='12px' fontWeight={300} color='#717378'>Các phương thức thanh toán</Typography>
                <PaymentMethod />
            </Stack>
            <Button
                size={"large"}
                variant="contained" fullWidth
                sx={{
                    borderRadius: 4,
                }}
            >
                <Stack direction='row'
                    alignItems='center'
                    fontSize='16px'
                    fontWeight={500}
                    color='#ffff'
                    spacing={2}
                >
                    <Typography>Đặt Hàng</Typography>
                    <Box sx={{ width: '1px', height: '12px', bgcolor: '#ffff' }} />
                    <Typography>1.078.000</Typography>
                </Stack>

            </Button>
        </Box>
    )
}

export default BillPreview