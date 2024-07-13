import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

const ProductsSkeleton = () => {
  return (
    <Grid container spacing={2}>
      {Array(5)
        .fill(0)
        .map((product, idx) => (
          <Grid key={idx} item xs={4} sm={4} md={3} lg={2}>
            <Stack
              sx={{
                backgroundColor: "white",
                borderRadius: 1,
                overflow: "hidden",
                boxShadow: (theme) => theme.shadows[1],
              }}
            >
              <Stack
                sx={{
                  width: 1,
                  height: 80,
                  px: 2,
                  py: 1.5,
                }}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: 1,
                    px: 6,
                    py: 4,
                  }}
                />
              </Stack>
              <Stack spacing={1} p={2} alignItems="center">
                <Skeleton
                  variant="text"
                  sx={{
                    width: "60px",
                  }}
                />
                <Skeleton
                  variant="text"
                  sx={{
                    width: "120px",
                  }}
                />
              </Stack>
            </Stack>
          </Grid>
        ))}
    </Grid>
  );
};

export default ProductsSkeleton;
