import { Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const ProductTotal = () => {
    return (
        <Stack>
            <Stack py={3} direction='row' justifyContent='space-between' alignItems='center'>
                <Typography fontSize='14px' fontWeight={400} color='#060709'>Tổng cộng</Typography>
                <Typography fontSize='20px' fontWeight={500} color='#EB2606' lineHeight='30px'>1.078.000</Typography>
            </Stack>
            <Divider />
            <Stack pt={3} pb={2} spacing={2}>
                <Stack direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    fontSize='14px'
                    fontWeight={400}
                >
                    <Typography color='#9D9EA2'>Tổng cộng</Typography>
                    <Typography color='#060709' lineHeight='30px'>1.078.000</Typography>
                </Stack>
                <Stack direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    fontSize='14px'
                    fontWeight={400}
                >
                    <Typography color='#9D9EA2'>Phí giao hàng</Typography>
                    <Typography color='#060709' lineHeight='30px'>35.000</Typography>
                </Stack>
            </Stack>
            <Divider />
            <Stack py={2} direction='row' justifyContent='space-between' alignItems='center'>
                <Typography fontSize='14px' fontWeight={400} color='#060709'>Tổng thanh toán</Typography>
                <Typography fontSize='20px' fontWeight={500} color='#EB2606' lineHeight='30px'>1.078.000</Typography>
            </Stack>
            <Divider />
        </Stack>
    )
}

export default ProductTotal