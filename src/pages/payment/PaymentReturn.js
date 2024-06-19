import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentReturn = () => {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        // You can verify payment status here if needed
        console.log('Payment return params:', params);
    }, [location]);

    return (
        <div>
            <h1>Payment Return</h1>
            <p>Payment process completed.</p>
        </div>
    );
};

export default PaymentReturn;