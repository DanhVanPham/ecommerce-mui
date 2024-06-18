import { PropTypes } from 'prop-types'
import { Alert, Grid, Card } from '@mui/material';
//
import { FormProvider } from '../../../components/hook-form';
import AccountAvatar from './AccountAvatar';
import GeneralForm from './GeneralForm';
//
import { CardTitle, RHFLoadingButtonStyled } from '../styles';

// ----------------------------------------------------------------------

export default function UpdateAccountForm({ methods, onSubmit }) {
    const { handleSubmit, formState: { errors, isSubmitting } } = methods;

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            {!!errors.afterSubmit &&
                <Alert severity="error">{errors.afterSubmit.message}</Alert>}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ py: 10, px: 3, textAlign: 'center' }}>
                        <AccountAvatar />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Card sx={{ p: 2 }}>
                        <CardTitle>Account</CardTitle>
                        <GeneralForm />
                        <RHFLoadingButtonStyled
                            loading={isSubmitting}
                            content={'Save changes'} />
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    )
}

UpdateAccountForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    methods: PropTypes.object.isRequired,
};
