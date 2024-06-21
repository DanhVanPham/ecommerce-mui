import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PATH_APP } from "../routes/paths";
import useResponsive from "../hooks/useResponsive";

const Logo = ({ sx, ...props }) => {
  const router = useNavigate();
  const isSmDown = useResponsive("down", "sm");

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1.25}
      sx={{
        cursor: "pointer",
        ...sx,
      }}
      {...props}
      onClick={() => router(PATH_APP.root)}
    >
      <Box
        sx={{
          width: "50px",
          height: "50px",
        }}
      >
        <img
          alt="logo"
          src="/assets/logo.svg"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </Box>
      <Box sx={{ fontWeight: 400 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontFamily: '"Marko One", serif',
            fontWeight: "inherit",
            fontSize: "24px",
          }}
        >
          BELONG LOVE
        </Typography>
        {!isSmDown && (
          <Typography
            variant="caption"
            component="div"
            sx={{
              fontWeight: "inherit",
              fontSize: "13px",
            }}
          >
            Sữa tốt, mẹ khỏe, con lớn ngoan
          </Typography>
        )}
      </Box>
    </Stack>
  );
};

export default Logo;
