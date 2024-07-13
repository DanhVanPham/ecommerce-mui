import { Avatar, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetByIdQuery } from "../../app/services/company/companyApi";
import Products from "./Products";
import CompanyInfo from "./CompanyInfo";
import StateManager, { specifyState } from "../../components/StateManager";
import CompanySkeleton from "./skeleton/CompanySkeleton";

const CompanyContainer = () => {
  const { id } = useParams();

  const responseCompany = useGetByIdQuery(id, { skip: !id });
  const { data } = responseCompany;
  const { name, image } = data?.company ?? {};

  const imageUrl = image?.content
    ? "data:image/jpeg;base64," + image?.content
    : "";

  const state = specifyState(responseCompany);

  return (
    <Stack>
      <StateManager state={state} loadingState={<CompanySkeleton />}>
        <Stack alignItems="center">
          <Stack alignItems="center" spacing={1}>
            <Avatar alt={name} src={imageUrl} />
            <Typography variant="subtitle1">{name}</Typography>
          </Stack>
        </Stack>
        <Divider sx={{ my: 2.5 }} />
        <Container maxWidth="lg">
          <CompanyInfo data={data?.company} />
        </Container>
      </StateManager>
      <Container maxWidth="lg" sx={{ mt: 1.5 }}>
        <Products companyId={id} />
      </Container>
    </Stack>
  );
};

export default CompanyContainer;
