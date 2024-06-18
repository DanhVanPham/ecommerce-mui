import { connect } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Link, Container, Typography } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Page from '../../components/Page';
import Logo from '../../components/Logo';
import Image from '../../components/Image';
// sections
import { RegisterContainer } from '../../features/auth/register';
import { RootStyle, HeaderStyle, SectionStyle, ContentStyle } from './Register.styles'
// ----------------------------------------------------------------------

export function Register() {
  const smUp = useResponsive('up', 'sm');
  const mdUp = useResponsive('up', 'md');

  return (
    <Page title={'Register'}>
      <RootStyle>
        <HeaderStyle>
          <Logo />
          {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
              Already have an account?{' '}
              <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.login}>
                Login
              </Link>
            </Typography>
          )}
        </HeaderStyle>

        {mdUp && (
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Sign Up to Ecommerce
            </Typography>
            <Image
              visibleByDefault
              disabledEffect
              alt="register"
              src="/assets/online-shopping.gif"
            />
          </SectionStyle>
        )}

        <Container>
          <ContentStyle>
            <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h3" sx={{ color: '#1A73E8' }}>Sign up</Typography>
                <Typography variant="h6" sx={{ mb: 1.5 }}>Welcome to the Ecommerce!</Typography>
              </Box>
            </Box>

            <RegisterContainer />

            {!smUp && (
              <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                Already have an account?{' '}
                <Link variant="subtitle2" to={PATH_AUTH.login} component={RouterLink}>
                  Login
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page >
  );
}

export default Register
