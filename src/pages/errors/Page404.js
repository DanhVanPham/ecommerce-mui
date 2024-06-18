import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Button, Typography, Container } from '@mui/material';
// i18n
// components
import Page from '../../components/Page';
import { MotionContainer, varBounce } from '../../components/animate';
// assets
import { PageNotFoundIllustration } from '../../resources/assets';
// styles
import { ContentStyle } from './Page404.styles'


export default function Page404() {
  return (
    <Page title='404 Page Not Found'>
      <Container component={MotionContainer}>
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <m.div variants={varBounce().in}>
            <Typography variant="h3" paragraph>
              Sorry, page not found!
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <Typography sx={{ color: 'text.secondary' }}>
              {`Sorry, we couldn’t find the page you’re looking for.Perhaps you’ve mistyped the URL? Be sure to check 
              your spelling.`}
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <PageNotFoundIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
          </m.div>

          <Button to="/" size="large" variant="contained" component={RouterLink}>
            Go to Home
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
}
