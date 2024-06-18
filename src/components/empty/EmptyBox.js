import { Typography, Stack, Button, styled } from "@mui/material"

export default function EmptyBox({ title, description, descRender, onClick, ...props }) {
    return <EmptyStyle {...props}>
        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            {title}
        </Typography>
        <Stack direction={"row"}>
            <Typography variant="body2">
                {descRender ?? "Empty"}
            </Typography>
        </Stack>
    </EmptyStyle>
}
export const EmptyStyle = styled(Stack)(({ theme }) => ({
    border: `1px dashed ${theme.palette.divider}`,
    cursor: "pointer",
    borderRadius: theme.spacing(1),
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: 100,
    padding: theme.spacing(1, 1),
}))