import React, { useEffect, useState } from 'react';
import CryptoJS from 'crypto-js';
import queryString from 'query-string';
import { VNPAY_SECRET_KEY } from '../../configs/app';
import { sortObject } from '../../utils/sortHelper';

const PaymentReturn = () => {
    const [paymentStatus, setPaymentStatus] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const paymentResult = {};
        params.forEach((value, key) => {
            paymentResult[key] = value;
        });

        const secretKey = VNPAY_SECRET_KEY; // Replace with your actual secretKey

        // Remove the secure hash from the params for verification
        const secureHash = paymentResult['vnp_SecureHash'];
        delete paymentResult['vnp_SecureHash'];
        delete paymentResult['vnp_SecureHashType'];

        // Sort the parameters
        const sortedParams = sortObject(paymentResult);

        // Generate the secure hash using the returned data
        const signData = queryString.stringify(sortedParams, { encode: false });
        const hmac = CryptoJS.HmacSHA512(signData, secretKey);
        const signed = hmac.toString(CryptoJS.enc.Hex);

        // Verify the secure hash
        if (secureHash === signed) {
            // Check for VNPAY response codes
            const responseCode = paymentResult['vnp_ResponseCode'];
            if (responseCode === '00') {
                setPaymentStatus('Payment successful');
            } else {
                setPaymentStatus(`Payment failed with error code: ${responseCode}`);
            }
        } else {
            setPaymentStatus('Invalid secure hash. Payment data might be tampered with.');
        }
    }, []);

    return (
        <div>
            <h1>Payment Return</h1>
            <p>{paymentStatus}</p>
        </div>
    );
};

export default PaymentReturn;
