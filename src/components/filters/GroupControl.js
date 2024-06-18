import { Stack, Typography } from "@mui/material";

export function GroupControl({title, ...props}){
    return <Stack spacing={1} 
            direction={"row"}
            sx={{alignItems: "center"}}>
        <Typography noWrap variant="body2" 
            sx={{ 
                fontWeight: 'fontWeightMedium', 
                width: "fit-content",
                display: "inline-block"
            }}>{title}</Typography>
        {props.children}
    </Stack>
}