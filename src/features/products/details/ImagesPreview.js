import { Stack, Paper, Box, Button, IconButton } from "@mui/material";
import { useState } from "react";
import { alpha } from "@mui/material";
import Iconify from "../../../components/Iconify";

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">Check it out!</Button>
        </Paper>
    );
}

const ImagesPreview = ({ image }) => {
    // const items = [
    //     {
    //         id: 1,
    //         link: "https://cdn.mos.cms.futurecdn.net/2MaATGSv5MP7PyZL7r5mNe-320-80.jpg",
    //     },
    //     {
    //         id: 2,
    //         link: "https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg",
    //     },
    //     {
    //         id: 3,
    //         link: "https://cdn.mos.cms.futurecdn.net/2MaATGSv5MP7PyZL7r5mNe-320-80.jpg",
    //     },
    // ];

    // const [currentImage, setCurrentImage] = useState(image);

    const imageUrl = image
        ? "data:image/jpeg;base64," + btoa(image)
        : "";

    return (
        <Stack
            direction={"column"}
            width={1}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
        >
            <Stack
                direction={"row"}
                minHeight={400}
                minWidth={600}
                sx={{
                    boxShadow: 4,
                    borderRadius: 1,
                    background: alpha("#ffffff", 0.8),
                }}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                {/* <IconButton
                    color="secondary"
                    onClick={() => handleClickBack()}
                    disabled={currentImage?.id === images?.[0]?.id}
                >
                    <Iconify icon={"ic:round-navigate-before"} />
                </IconButton> */}
                <Box
                    sx={{
                        width: 300,
                        height: 300,
                        borderRadius: 1,
                        overflow: "hidden",
                    }}
                >
                    <img alt={'product image'} src={imageUrl} />
                </Box>
                {/* <IconButton
                    color="secondary"
                    onClick={() => handleClickNext()}
                    disabled={
                        currentImage?.id === images?.[images.length - 1]?.id
                    }
                >
                    <Iconify icon={"ic:round-navigate-next"} />
                </IconButton> */}
            </Stack>
            {/* <Stack
                minWidth={600}
                justifyContent={"center"}
                alignItems={"center"}
                direction={"row"}
                spacing={0.8}
            >
                {images?.map((item) => (
                    <Box
                        sx={{
                            width: 60,
                            height: 60,
                            borderRadius: 1,
                            overflow: "hidden",
                            opacity: 0.7,
                            ...(currentImage?.id === item?.id && {
                                opacity: 1,
                            }),
                            "&:hover": {
                                opacity: 0.9,
                            },
                            cursor: "pointer",
                        }}
                        onClick={() => setCurrentImage(item)}
                    >
                        <img src={item.link} alt={item.id} />
                    </Box>
                ))}
            </Stack> */}
        </Stack>
    );
};

export default ImagesPreview;
