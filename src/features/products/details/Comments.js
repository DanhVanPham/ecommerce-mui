import { Stack, Box, Typography } from "@mui/material";
import Iconify from "../../../components/Iconify";
import RatingBar from "../../../components/rating-bar/RatingBar";

const TOTAL_RATING = 5;

const Comments = ({ data }) => {
    return (
        <Stack direction={"column"} spacing={1}>
            {data?.map((item) => (
                <Stack
                    direction={"column"}
                    sx={{ width: "100%", boxShadow: 5, p: 2, borderRadius: 1 }}
                >
                    <Stack spacing={1} direction={"row"} alignItems={"center"}>
                        <Iconify
                            icon={"carbon:user-avatar-filled"}
                            color={(theme) => theme.palette.grey[400]}
                        />
                        <Typography variant={"body2"} fontWeight={600}>
                            {item?.name}
                        </Typography>
                        <Typography variant={"body2"}>{"|"}</Typography>
                        <Typography variant={"body2"}>
                            {item?.createdAt}
                        </Typography>
                    </Stack>
                    <RatingBar rate={item?.rating} total={TOTAL_RATING} />
                    <Typography variant="body2">
                        {item?.message}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    );
};

export default Comments;
