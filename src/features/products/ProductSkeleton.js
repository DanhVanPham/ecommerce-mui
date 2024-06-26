import React from 'react'
import { Button, Grid, Skeleton, Stack, Typography } from '@mui/material'
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";

const ProductSkeleton = () => {
    return (
        Array(10).fill(0).map((_, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
                <Stack
                    sx={{
                        backgroundColor: "white",
                        borderRadius: 1,
                        overflow: "hidden",
                        boxShadow: (theme) => theme.shadows[1],
                    }}
                >
                    <Skeleton variant='rectangular' sx={{
                        height: 250,
                        width: 1,
                        px: 6,
                        py: 4,
                    }} />
                    <Stack spacing={1} p={2}>
                        <Skeleton variant='text' sx={{ display: 'flex', justifyContent: 'center', width: '100px' }} />
                        <Skeleton variant='text' sx={{ display: 'flex', justifyContent: 'center', height: "54px", width: '200px' }} />
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            spacing={1.25}
                        >
                            <Stack direction="row" spacing={0.5} alignItems="center">
                                <StarIcon
                                    fontSize="small"
                                    sx={{
                                        color: "#F2BC1B",
                                    }}
                                />
                                <Skeleton variant='text' sx={{ width: '30px' }} />
                            </Stack>
                            <Stack
                                sx={{
                                    width: "1px",
                                    height: "12px",
                                    backgroundColor: "#C8C9CB",
                                }}
                            />
                            <Stack direction="row" spacing={0.5} alignItems="center">
                                <Skeleton variant='text' sx={{ width: '50px' }} />
                                <Typography
                                    fontSize={14}
                                    fontWeight={400}
                                    color="#C8C9CB"
                                >
                                    Reviews
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            pt={0.5}
                        >
                            <Skeleton variant='text' sx={{ width: '100px' }} />
                            <Button
                                variant="outlined"
                                color="error"
                                disabled
                                sx={{
                                    width: 27,
                                    height: 27,
                                    p: 0,
                                    minWidth: "auto",
                                }}
                            >
                                <AddIcon fontSize="small" />
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid >
        ))
    )
}

export default ProductSkeleton