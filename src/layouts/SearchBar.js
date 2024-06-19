import React from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Stack
      direction="row"
      spacing={0.5}
      alignItems="center"
      sx={{
        width: { xs: 200, sm: 400, md: 500 },
        display: { xs: "none", sm: "flex" },
      }}
    >
      <TextField
        size="small"
        fullWidth
        placeholder="Tìm kiếm"
        InputProps={{ sx: { borderRadius: 10 } }}
      />
      <IconButton
        sx={{
          "&.MuiIconButton-root": {
            backgroundColor: (theme) => theme.palette.primary.main,
            color: "white",
          },
          "&:hover": {
            opacity: 0.8,
          },
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default SearchBar;
