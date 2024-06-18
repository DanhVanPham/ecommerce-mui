import { Stack } from "@mui/material";
import Iconify from "../Iconify";

const RatingBar = ({ rate, total }) => {
    return (
        <Stack direction={"row"} spacing={0.5}>
            {Array(rate)
                .fill(0)
                ?.map((item) => {
                    return (
                        <Iconify
                            icon={"material-symbols-light:star"}
                            sx={{ color: "#ffce31" }}
                        />
                    );
                })}
            {Array(total - rate)
                .fill(0)
                ?.map((item) => {
                    return (
                        <Iconify
                            icon={"material-symbols-light:star"}
                            sx={{ color: (theme) => theme.palette.grey[400] }}
                        />
                    );
                })}
        </Stack>
    );
};

export default RatingBar;
