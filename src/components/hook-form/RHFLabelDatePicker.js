import { Stack, Typography } from "@mui/material";
import { RHFDatePicker } from "./RHFDatePicker";

export default function RHFLabelDatepicker({ label, name, sxTypo, ...others }) {
    return (
        <Stack direction='row' alignItems='center' spacing={1}>
            <Typography variant="subtitle2"
                sx={{
                    flexGrow: 1,
                    flexShrink: 0,
                    minWidth: 40,
                    ...sxTypo
                }}>
                {label}
            </Typography>
            <RHFDatePicker
                name={name}
                styles={{ '& .MuiInputBase-root': { height: '40px' } }}
                {...others} />
        </Stack>
    )
}