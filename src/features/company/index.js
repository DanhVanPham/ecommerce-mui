import {
  Avatar,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetByIdQuery } from "../../app/services/company/companyApi";
import { PropertyItem } from "../checkout/PropertyItem";
import { formatDate } from "../../utils/datetime/formatHelper";
import Products from "./Products";

const CompanyContainer = () => {
  const { id } = useParams();

  const { data } = useGetByIdQuery(id, { skip: !id });
  console.log(data);

  const { name, image, nation, path, description, createdDate } =
    data?.company ?? {};

  const imageUrl = image?.content
    ? "data:image/jpeg;base64," + image?.content
    : "";

  return (
    <Stack>
      <Stack alignItems="center">
        <Stack alignItems="center" spacing={1}>
          <Avatar alt={name} src={imageUrl} />
          <Typography variant="subtitle1">{name}</Typography>
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
                input={
                  <Typography variant="caption" fontWeight={400}>
                    {createdDate ? formatDate(new Date(createdDate)) : ""}
                  </Typography>
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
                label="Quốc gia"
                input={<Chip size="small" label={nation} variant="filled" />}
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
                input={
                  <Link
                    target="_blank"
                    variant="body2"
                    fontWeight={300}
                    href={path}
                    sx={{
                      cursor: "pointer",
                      ":hover": {
                        color: "primary",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {path}
                  </Link>
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
            <Grid item xs={12}>
              <PropertyItem
                label="Mô tả"
                input={
                  <Typography variant="body2" fontWeight={300}>
                    {description}
                  </Typography>
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
        <Products companyId={id} />
      </Container>
    </Stack>
  );
};

export default CompanyContainer;
