import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import CryptoJS from 'crypto-js';
import querystring from 'query-string';
import PaymentMethod from './PaymentMethod'
import { fCurrencyVND } from '../../utils/formatNumber'
import { VNPAY_RETURN_URL, VNPAY_SECRET_KEY, VNPAY_TMN_CODE, VNPAY_VPN_URL } from '../../configs/app'

const BillPreview = () => {

    const sortObject = (obj) => {
        const sorted = {};
        const keys = Object.keys(obj).sort();
        keys.forEach(key => {
            sorted[key] = obj[key];
        });
        return sorted;
    };

    const handlePayment = () => {
        const vnpParams = {
            vnp_Version: '2.0.0',
            vnp_Command: 'pay',
            vnp_TmnCode: VNPAY_TMN_CODE,
            vnp_Locale: 'vn',
            vnp_CurrCode: 'VND',
            //   vnp_TxnRef: orderId,
            vnp_TxnRef: 1,
            vnp_OrderInfo: `Payment for order ${1}`,
            vnp_OrderType: 'other',
            //   vnp_Amount: amount * 100, // Amount in VND
            vnp_Amount: 10000 * 100, // Amount in VND
            vnp_ReturnUrl: VNPAY_RETURN_URL,
            vnp_IpAddr: '127.0.0.1',
            vnp_CreateDate: new Date().toISOString().replace(/[-:]/g, '').slice(0, 15),
        };

        const sortedParams = sortObject(vnpParams);
        const signData = querystring.stringify(sortedParams, { encode: false });
        const hmac = CryptoJS.HmacSHA512(signData, VNPAY_SECRET_KEY);
        const signed = hmac.toString(CryptoJS.enc.Hex);
        sortedParams.vnp_SecureHash = signed;

        const paymentUrl = `${VNPAY_VPN_URL}?${querystring.stringify(sortedParams)}`;
        window.location.href = paymentUrl;
    };

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
                    <Typography color='#060709' lineHeight='21px'>{fCurrencyVND(1078000)}</Typography>
                </Stack>
                <Stack direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    fontSize='14px'
                    fontWeight={400}
                >
                    <Typography color='#9D9EA2'>Phí ship</Typography>
                    <Typography color='#060709' lineHeight='21px'>{fCurrencyVND(35000)}</Typography>
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
                sx={{ borderRadius: 4 }}
                onClick={handlePayment}
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
                    <Typography>{fCurrencyVND(1078000)}</Typography>
                </Stack>

            </Button>
        </Box>
    )
}

export default BillPreview