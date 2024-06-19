import { Box, Button, IconButton, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import { fCurrencyVND } from '../../utils/formatNumber';

const CartItem = ({ data }) => {
    const { name, imageUrl, quantity, price } = data ?? {}
    return (
        <Box px={2.5} py={2}
            sx={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid rgb(243, 245, 249)',
                gap: 1.5
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Button size='small' variant='outlined' sx={{
                    borderRadius: 999,
                    p: 0,
                    width: '28px',
                    height: '28px',
                    minWidth: 'auto'
                }}>
                    <AddIcon fontSize='small' />
                </Button>
                <Typography fontSize='14px' my='3px'>{quantity}</Typography>
                <Button size='small' variant='outlined' sx={{
                    borderRadius: 999,
                    p: 0,
                    width: '28px',
                    height: '28px',
                    minWidth: 'auto'
                }}
                    disabled={quantity === 1}
                >
                    <RemoveIcon fontSize='small' />
                </Button>
            </Box>
            <Box sx={{
                width: 1,
                maxWidth: '71px',
                height: '55px',
            }}>
                <img alt='product'
                    src={imageUrl}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />
            </Box>
            <Box flex={1}>
                <Typography fontSize='14px'
                    fontWeight={400}
                    color='rgb(43, 52, 69)'
                >
                    {name}
                </Typography>
                <Typography fontSize='10px'
                    fontWeight={400}
                    color='rgb(125, 135, 156)'
                >
                    {fCurrencyVND(price)}x{quantity}
                </Typography>
                <Typography fontSize='14px'
                    fontWeight={600}
                    color='rgb(210, 63, 87)'
                    mt={0.5}
                >
                    {fCurrencyVND(price * quantity)}
                </Typography>
            </Box>
            <IconButton size='small' sx={{ ml: 2.5 }}>
                <ClearIcon fontSize='small' />
            </IconButton>
        </Box>
    )
}

export default CartItem