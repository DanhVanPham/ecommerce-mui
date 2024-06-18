import { Typography } from "@mui/material"
import { EmptyStyle } from "../empty/EmptyBox"

export default function FileInitState({ onClick, sx }) {

    return <EmptyStyle sx={{
        p: 1, minHeight: 'fit-content',
        cursor: 'default',
        ...sx
    }}>
        <Typography variant="body2"
            onClick={onClick}
            sx={{
                cursor: 'pointer',
                color: 'primary.main',
                textDecoration: 'underline',
            }}>
            Upload File
        </Typography>
    </EmptyStyle>
}