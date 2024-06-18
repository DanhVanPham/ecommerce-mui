import { PropTypes } from 'prop-types'
import { Stack, Alert, Divider } from '@mui/material';
// 
import { FormProvider } from '../../../components/hook-form';
import InputPassword from '../custom/InputPassword';
import { RHFLoadingButtonStyled } from '../styles';

// ----------------------------------------------------------------------

export default function ChangePasswordForm({ methods, onSubmit }) {
    const { handleSubmit, formState: { errors, isSubmitting } } = methods;

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            {!!errors.afterSubmit &&
                <Alert severity="error">{errors.afterSubmit.message}</Alert>}
            <Stack spacing={2.5}>
                <InputPassword name="oldPassword"
                    description={'Current password'} />
                <Divider sx={{ borderStyle: 'dashed' }} />
                <InputPassword name="newPassword"
                    description={'New password'} />
                <InputPassword name="newPasswordConfirm"
                    description={'Confirm New Password'} />
            </Stack>
            <RHFLoadingButtonStyled
                sx={{ float: 'left' }}
                loading={isSubmitting}
                content={'Save changes'} />
        </FormProvider>
    )
}