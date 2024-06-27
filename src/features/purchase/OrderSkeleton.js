import { Box, Divider, Skeleton, Stack } from '@mui/material'
import React from 'react'

const OrderSkeleton = () => {
    return (
        <Stack divider={<Divider />}>
            {Array(2).fill(0).map((_, idx) => (
                <Box key={idx}
                    p={3}
                    pb={1.5}
                    bgcolor="background.paper"
                    sx={{
                        display: "flex",
                        alignItems: 'center',
                    }}
                >
                    <Skeleton variant='rectangular' sx={{
                        width: "48px",
                        height: "48px",
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: '12px',
                        mr: 2
                    }} />
                    <Box flex={1}>
                        <Skeleton variant='text' width={100} />
                        <Stack>
                            <Skeleton variant='text' width={80} />
                            <Stack fontSize='14px' direction='row' spacing={0.5} alignItems='center'>
                                <span>x</span>
                                <Skeleton variant='text' width={30} />
                            </Stack>
                        </Stack>
                    </Box>
                    <Stack alignSelf='flex-start'>
                        <Box alignSelf="center" mt={2}>
                            <Skeleton variant='text' width={60} />
                        </Box>
                    </Stack>
                </Box>
            ))}
        </Stack>

    )
}

export default OrderSkeleton