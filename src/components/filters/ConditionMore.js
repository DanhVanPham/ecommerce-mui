import { Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import { ChipButton } from './chips';
/**
 * Condition Item
 * @param {*} param0 
 * @returns 
 */
export function ConditionMore({ num = 0 }) {
    return <Stack direction="row">
        <Typography
            sx={{ m: 0.1, fontWeight: "400", fontSize: "0.8125rem" }}>
            {"その他"}
        </Typography>
        <Typography sx={{ m: 0.1, fontWeight: "400", fontSize: "0.75rem" }}>
            {`+${num}`}
        </Typography>
    </Stack>
}
export default ConditionMore 
