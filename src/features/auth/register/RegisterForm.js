// @mui
import { Stack, Alert } from '@mui/material';
// components
import { FormProvider, RHFTextField } from '../../../components/hook-form';
import { RHFPhoneNumber } from '../../../components/hook-form/custom';
import RHFLoadingButton from '../../../components/hook-form/RHFLoadingButton';
import { withPasswordField, FormInputLabel, withDescHelperText } from '../../../components/custom-input';

// ----------------------------------------------------------------------
const DescTextField = withDescHelperText(RHFTextField, {
  color: 'text.disabled',
  mt: 0.5, ml: 0,
})
const PasswordTextField = withPasswordField(DescTextField)

export function RegisterForm({ onSubmit, methods }) {
  const { handleSubmit, formState: { isSubmitting } } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <FormInputLabel label='Your Name'
          input={<DescTextField name="name" size="small"
            placeholder='Example: Trinh'
            descHelpText='＊Used for display on the system'
          />}
          isRequired
        />
        <FormInputLabel label='Username'
          input={<DescTextField name="username" size="small"
            placeholder='Example: trinh-doan'
            descHelpText='＊Can only include letters, numbers, hyphens and underscores.'
          />}
          isRequired
        />
        <FormInputLabel label='Email address'
          input={<RHFTextField name="email" size="small"
            placeholder='Example: trinh-doan@gmail.com'
          />}
          isRequired
        />
        <FormInputLabel label='Phone number'
          input={<RHFPhoneNumber name="phone" size="small" />}
        />
        <FormInputLabel label='Password'
          input={<PasswordTextField name="password" size="small"
            descHelpText='＊Please enter at least 8 characters'
          />}
          isRequired
        />
        <FormInputLabel label='Password Confirmation'
          input={<PasswordTextField name="passwordConfirmation" size="small"
            descHelpText='＊Please enter the same password again for confirmation'
          />}
          isRequired
        />
      </Stack>
      <RHFLoadingButton fullWidth
        variant="contained" sx={{ mt: 4 }}
        loading={isSubmitting}
        loadingIndicator={'Registration in progress...'}
        content='Register'
      />
    </FormProvider>
  );
}
