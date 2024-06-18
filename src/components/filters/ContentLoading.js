import { Bars } from "react-loader-spinner"
import { Stack, Typography } from "@mui/material"

export function ContentLoading({ title, message }) {
    return <Stack spacing={0.5} sx={{ width: 1, height: 1, alignItems: "center" }}>
        <Bars
            height="30"
            width="100"
            color="#637381"
            ariaLabel="bars-loading"
            wrapperStyle={{ justifyContent: "center", marginTop: "100px" }}
            visible
        />
        <Typography sx={{
            fontWeight:
                500, color: "#637381"
        }}>
            {title ?? "検索中 ..."}
        </Typography>
        {<Typography sx={{
            fontWeight:
                400, color: "#637381"
        }}>
            {message ?? "少々お待ちください"}
        </Typography>}
    </Stack>
}
