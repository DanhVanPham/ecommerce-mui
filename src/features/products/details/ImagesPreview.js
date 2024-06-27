import { Stack, Box } from "@mui/material";
import { alpha } from "@mui/material";

const ImagesPreview = ({ image }) => {
  const imageUrl = image ? "data:image/jpeg;base64," + btoa(image) : "";

  return (
    <Stack
      direction={"column"}
      width={1}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      px={{ xs: 0, sm: 3 }}
    >
      <Stack
        direction={"row"}
        minHeight={400}
        width={1}
        sx={{
          boxShadow: 4,
          borderRadius: 1,
          background: alpha("#ffffff", 0.8),
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          sx={{
            width: 300,
            height: 300,
            borderRadius: 1,
            overflow: "hidden",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img alt={"product image"} src={imageUrl} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ImagesPreview;
