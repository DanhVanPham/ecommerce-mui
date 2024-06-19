import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Stack } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CartButton from "./CartButton";
import ProductFilter from "./filter";
import { PATH_APP } from "../routes/paths";

export default function PrivateLayout() {
  const router = useNavigate();

  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      <AppBar
        component="nav"
        sx={{
          background: (theme) => theme.palette.common.white,
          color: (theme) => theme.palette.primary.main,
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            pt: 2,
          }}
        >
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: "600",
                cursor: "pointer",
              }}
              onClick={() => router(PATH_APP.root)}
            >
              CON CUNG
            </Typography>
            <SearchBar />
            <Stack direction="row" spacing={0.5} alignContent="center">
              <IconButton>
                <PersonOutlineIcon />
              </IconButton>
              <CartButton />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flex: 1 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
