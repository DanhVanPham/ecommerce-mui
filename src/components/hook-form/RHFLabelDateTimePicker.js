import { Box, Typography } from '@mui/material'
import React from 'react'
import RHFDateTimePicker from './RHFDateTimePicker'

function RHFLabelDateTimePicker({ label, name, ...others }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <Typography variant='subtitle2'
                sx={{
                    flexGrow: 1,
                    mt: 1
                }}
            >
                {label}
            </Typography>
            <RHFDateTimePicker
                name={name}
                styles={{ '& .MuiInputBase-root': { height: '40px' } }}
                {...others} />
        </Box>
    )
}

export default RHFLabelDateTimePicker