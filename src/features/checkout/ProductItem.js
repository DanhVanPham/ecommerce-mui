import { Box, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const ProductItem = () => {
    return (
        <Stack>
            <Grid container sx={{ my: 3 }}>
                <Grid item xs={12} md={5}>
                    <Stack direction='row' spacing={2} alignItems='center'>
                        <Box sx={{
                            width: '48px',
                            height: '48px',
                            borderRadius: 0.75,
                            border: `1px solid #F4F4F4`,
                            py: 0.5,
                            px: 0.75
                        }}>
                            <img alt='product'
                                src='https://s3-alpha-sig.figma.com/img/a6e2/3bd7/b376b47c3729b0497984f0645d177a56?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=euXewux7Oe7m-zXzh1fvgIHxpQaQnPCjy~KNlCWVcss8~TI3DazlIGZ91kLeyUtu8SycZLTDCCa82Q8qRlcRNswI~RFnrV5pJmcdOIpGMexpDPcng5rC9wjyRiRxVUYy56f6oNzs2d-ioAewmX5DankVEAQPZ9WRhY5QUE8Z5s-60rl~WSx1-A-gR2-fgc1OEVUfGYO5YmSbss5fgLn~zJPTqxwDo7k9gbCZEphm2fcoeV6ccQ9pH~HkA4Uxf4sGLmrKe-iJaMh47sEC2WhTNjwiF448I8zKI7a-bPXV5qEimxvWrQpO8JDJOiEuW6H-swsfbh6iBVRNRvHC4ZDM-w__'
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                        </Box>
                        <Typography fontSize='14px'
                            color='#9D9EA2'
                            lineHeight='21px'
                            fontWeight={400}
                        >
                            Sữa bầu Friso Mum Gold hương cam
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={6} md={3.5} sx={{ placeContent: 'center' }}>
                    <Stack direction='row' alignItems='center' justifyContent='center' spacing={1.5}>
                        <Typography variant='body2' color='#9D9EA2' fontWeight={300}>4x</Typography>
                        <Typography variant='subtitle2' fontWeight={400} color='#060709'>300.000</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={6} md={3.5} sx={{ placeContent: 'center' }}>
                    <Typography variant='subtitle2' fontWeight={400} color='#060709' textAlign='right'>300.000</Typography>
                </Grid>
            </Grid>
            <Divider />
        </Stack>
    )
}

export default ProductItem