import { Alert } from "@mui/material"

export function EmptyWarningAlert({ message, sx }){
    return <Alert variant="outlined"
        sx={{ fontSize: "0.875rem", ...sx }}
        severity="warning">
        {message}
    </Alert>
}