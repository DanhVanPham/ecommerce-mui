import {
  Container,
  Divider,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { PropertyItem } from "../../checkout/PropertyItem";

const CompanySkeleton = () => {
  return (
    <>
      <Stack alignItems="center">
        <Stack alignItems="center" spacing={1}>
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{
              borderRadius: "100px",
            }}
          />
          <Skeleton variant="text" width={250} />
        </Stack>
      </Stack>
      <Divider sx={{ my: 2.5 }} />
      <Container maxWidth="lg">
        <Stack>
          <Typography
            variant="subtitle1"
            fontSize="20px"
            lineHeight="30px"
            fontWeight={400}
            sx={{ mb: 3 }}
          >
            Thông tin công ty
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <PropertyItem
                label="Ngày tạo"
                input={<Skeleton variant="text" width={65} />}
                direction="row"
                alignItems="center"
                spacing={1}
                sxLabel={{
                  textTransform: "uppercase",
                  minWidth: 100,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <PropertyItem
                label="Quốc gia"
                input={
                  <Skeleton
                    variant="rectangular"
                    width={75}
                    height={24}
                    sx={{
                      borderRadius: 2,
                    }}
                  />
                }
                direction="row"
                alignItems="center"
                spacing={1}
                sxLabel={{
                  textTransform: "uppercase",
                  minWidth: 100,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <PropertyItem
                label="URL công ty"
                input={<Skeleton variant="text" width={200} />}
                direction="row"
                spacing={1}
                sxLabel={{
                  textTransform: "uppercase",
                  minWidth: 100,
                  display: "inline-block",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <PropertyItem
                label="Mô tả"
                input={
                  <Stack flex={1}>
                    <Skeleton
                      variant="text"
                      sx={{
                        width: "100%",
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        width: "50%",
                      }}
                    />
                  </Stack>
                }
                direction="row"
                spacing={1}
                sxLabel={{
                  textTransform: "uppercase",
                  minWidth: 100,
                  display: "inline-block",
                }}
              />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </>
  );
};

export default CompanySkeleton;
