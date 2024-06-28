import React, { useState } from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useFilterParams from "../components/filters/useFilterParams";
import { FILTER_CONDITION } from "./constants";

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');

  const { setParam } = useFilterParams()

  const handleSubmit = () => {
    setParam(FILTER_CONDITION.name, keyword)
  }

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  }
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
        value={keyword}
        onChange={handleChangeKeyword}
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
        onClick={handleSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default SearchBar;
