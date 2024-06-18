// @mui
import {
  Box,
  Stack,
  Container,
  Typography
} from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// routes
// components
import Page from '../../components/Page';
import Logo from '../../components/Logo';
import Image from '../../components/Image';
// sections
import { LoginContainer } from '../../features/auth/login'

import {
  RootStyle,
  HeaderStyle,
  SectionStyle,
  ContentStyle
} from './Login.styles'
// ----------------------------------------------------------------------

export default function Login() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Login">
      <RootStyle>
        <HeaderStyle>
          <Logo />
        </HeaderStyle>
        {mdUp && (
          <SectionStyle>
            <Typography
              variant="h3"
              sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <Image
              visibleByDefault
              disabledEffect
              src="/assets/illustrations/illustration_login.png"
              alt="login" />
          </SectionStyle>
        )}
        <Container maxWidth="sm">
          <ContentStyle>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ mb: 5 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                  Sign In to Ecommerce
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Enter your details below.
                </Typography>
              </Box>
            </Stack>
            <LoginContainer />
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}