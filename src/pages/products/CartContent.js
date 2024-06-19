import React from 'react'
import Scrollbar from '../../components/Scrollbar'
import mockProducts from './_mockData'
import CartItem from './CartItem'
import { FOOTER, HEADER } from './constants'

const CartContent = () => {
    return (
        <Scrollbar style={{
            maxHeight: `calc(100vh - (${HEADER}px + ${FOOTER}px + 2px))`
        }}>
            {mockProducts.map(product => <CartItem key={product.id} data={product} />)}
        </Scrollbar>
    )
}

export default CartContent