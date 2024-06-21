import { Container } from "@mui/material";
// components
import Page from "../../../components/Page";
import HeaderBreadcrumbs from "../../../components/HeaderBreadcrumbs";
//
import PersonalSetting from "../../../features/personal-setting";
// ----------------------------------------------------------------------

export default function PersonalSettingPage() {
  return (
    <Page title={"Personal settings"} sx={{ height: "100%" }}>
      <Container maxWidth={"lg"}>
        <HeaderBreadcrumbs
          heading={"Personal settings"}
          sx={{
            mt: 3,
          }}
        />
        <PersonalSetting />
      </Container>
    </Page>
  );
}
