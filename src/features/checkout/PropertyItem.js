import { Stack, Typography } from '@mui/material'
import React from 'react'

export const PropertyItem = ({ label, isRequired, input, sxLabel }) => {
    return (
        <Stack spacing={1}>
            <Typography fontSize='12px' fontWeight={400}
                textAlign='left' lineHeight='18px'
                sx={sxLabel}
            >
                {label} {isRequired ? '*' : ''}
            </Typography>
            {input}
        </Stack >
    )
}
