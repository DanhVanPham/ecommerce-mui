import React from "react";
import {
  Box,
  Divider,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Iconify from "../../components/Iconify";

const GroupOrderSkeleton = () => {
  return (
    <Stack spacing={1.5}>
      {Array(2)
        .fill(0)
        .map((_, idx) => (
          <Box key={idx} bgcolor="background.paper" p={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={2}
            >
              <Stack direction="row" alignItems="center" spacing={0.25}>
                <IconButton size="small" disabled>
                  <Iconify icon={"iconamoon:arrow-up-2-light"} />
                </IconButton>
                <Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.5}
                    sx={{ fontSize: "14px" }}
                  >
                    <Skeleton variant="text" width={85} />
                  </Stack>
                  <Box mt={0.25}>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={{ xs: 0, sm: 1 }}
                    >
                      <Skeleton variant="text" width={120} />
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={{ xs: 0, sm: 1 }}
                    >
                      <Skeleton variant="text" width={260} />
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
              <Stack>
                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: "120px",
                    height: "22px",
                    borderRadius: "16px",
                  }}
                />
                <Box alignSelf="center" mt={1}>
                  <Skeleton variant="text" width={80} />
                </Box>
              </Stack>
            </Stack>
          </Box>
        ))}
    </Stack>
  );
};

export default GroupOrderSkeleton;
