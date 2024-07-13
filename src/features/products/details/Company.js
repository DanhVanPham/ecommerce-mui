import { Avatar, Button, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import Iconify from "../../../components/Iconify";
import { formatDate } from "../../../utils/datetime/formatHelper";

const Company = ({ data }) => {
  const { name, nation, path, createdDate, description, image } = data ?? {};

  const imageUrl = image?.content
    ? "data:image/jpeg;base64," + image?.content
    : "";

  return (
    <Stack direction="row" spacing={1}>
      <Avatar alt={name} src={imageUrl} />
      <Stack spacing={0.5}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack>
            <Typography variant="subtitle2" fontWeight={400} lineHeight={1.2}>
              {name}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={0.25}
              sx={{
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <Iconify icon="uiw:date" sx={{ fontSize: "12px" }} />
              <Typography variant="caption" fontWeight={400}>
                {formatDate(new Date(createdDate))}
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Chip size="small" label={nation} variant="filled" />
          </Stack>
        </Stack>
        <Typography
          variant="body2"
          fontWeight={300}
          color="text.disabled"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Company;
