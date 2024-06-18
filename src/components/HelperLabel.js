import { Typography } from "@mui/material"

export function HelperLabel({ label, ...props }) {
    return <Typography
        variant="body2"
        {...props}
        sx={{
            color: "text.secondary",
            fontSize: "0.75rem",
            px: 1,
            py: 1,
            ...props?.sx
        }}>
        {
            label
        }
    </Typography>
}