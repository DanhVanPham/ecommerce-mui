import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import {
  Link,
  Stack,
  Alert,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/Iconify';
import {
  FormProvider,
  RHFTextField,
} from '../../../components/hook-form';
import { PATH_AUTH } from '../../../routes/paths';

// ----------------------------------------------------------------------
export function LoginForm({ onSubmit, methods }) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;
  return (
    <FormProvider methods={methods}
      onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit &&
          <Alert severity="error">{errors.afterSubmit.message}</Alert>}

        <RHFTextField name="username"
          isManualShrink
          label={'Username or Email address'} />

        <RHFTextField
          name="password"
          isManualShrink
          label={'Password'}
          type={isPasswordShown ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setIsPasswordShown(!isPasswordShown)}
                  edge="end">
                  <Iconify icon={isPasswordShown ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ my: 2 }}>
        <Link component={RouterLink}
          variant="subtitle2"
          to={PATH_AUTH.resetPassword}
        >
          Forgot Password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}>
        Login
      </LoadingButton>

      <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
        Don't have an account?{' '}
        <Link component={RouterLink}
          variant="subtitle2"
          to={PATH_AUTH.register}
        >
          Create an account
        </Link>
      </Typography>
    </FormProvider>
  );
}

