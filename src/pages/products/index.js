import { Badge, IconButton, Stack } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContainer from './CartContainer';
import useToggle from '../../hooks/useToggle';

const ProductsPage = () => {
    const { toggle: open, onToggle, onClose } = useToggle(true)
    return (
        <Stack width={1} height='100vh' justifyContent='center' alignItems='center'>
            <IconButton onClick={onToggle}>
                <Badge badgeContent={1} color="primary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
            <CartContainer open={open} onClose={onClose} />
        </Stack>
    )
}

export default ProductsPage