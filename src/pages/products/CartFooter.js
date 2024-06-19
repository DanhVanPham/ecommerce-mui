import { Button, Stack } from '@mui/material'
import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH_APP } from '../../routes/paths';
import { fCurrencyVND } from '../../utils/formatNumber';
import mockProducts from './_mockData';

const CartFooter = () => {
    const router = useNavigate();

    const total = useMemo(() => mockProducts.reduce((result, currProd) => {
        return result + currProd.price * currProd.quantity
    }, 0))

    return (
        <Stack p={2.5}>
            <Button variant='contained'
                fullWidth color='primary'
                onClick={() => router(PATH_APP.checkout)}
            >
                Thanh toán ngay ({fCurrencyVND(total)})
            </Button>
        </Stack>
    )
}

export default CartFooter