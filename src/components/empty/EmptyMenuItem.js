import { MenuItem, Box } from "@mui/material"

export function EmptyMenuItem() {
    return <MenuItem>
        <Box sx={{ height: 20, width: 1 }} />
    </MenuItem>
}