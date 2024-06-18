import React from 'react'
import { GroupBox } from '../../components/group-box/GroupBox'
import { Divider, Grid, Stack, TextField, Typography } from '@mui/material'
import { PropertyItem } from './PropertyItem'

const ShippingInfo = () => {
    return (
        <Stack>
            <Typography variant='subtitle1'
                fontSize='20px'
                lineHeight='30px'
                fontWeight={400}
            >
                Thông tin giao hàng
            </Typography>
            <Divider sx={{ mt: 3, mb: 4 }} />
            <Grid container spacing={2.5}>
                <Grid item xs={12}>
                    <PropertyItem label='Tên' isRequired
                        input={<TextField fullWidth size='small' />}
                        sxLabel={{
                            textTransform: 'uppercase'
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <PropertyItem label='Thành phố' isRequired
                        input={<TextField fullWidth size='small' />}
                        sxLabel={{
                            textTransform: 'uppercase'
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={4}>
                    <PropertyItem label='Quận'
                        input={<TextField fullWidth size='small' />}
                        sxLabel={{
                            textTransform: 'uppercase'
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={4}>
                    <PropertyItem label='Phường'
                        input={<TextField fullWidth size='small' />}
                        sxLabel={{
                            textTransform: 'uppercase'
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={4}>
                    <PropertyItem label='Mã Căn Hộ'
                        input={<TextField fullWidth size='small' />}
                        sxLabel={{
                            textTransform: 'uppercase'
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <PropertyItem label='Số Điện Thoại'
                        input={<TextField fullWidth size='small' />}
                        sxLabel={{
                            textTransform: 'uppercase'
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <PropertyItem label='Mail'
                        input={<TextField fullWidth size='small' />}
                        sxLabel={{
                            textTransform: 'uppercase'
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <PropertyItem label='Notes(Optional)'
                        input={<TextField fullWidth size='small' multiline rows={3} />}
                        sxLabel={{
                            textTransform: 'uppercase'
                        }}
                    />
                </Grid>
            </Grid>
        </Stack>
    )
}

export default ShippingInfo