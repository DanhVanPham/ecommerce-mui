import { Stack, Divider } from '@mui/material';
import { RHFTextField } from '../../../components/hook-form';
import { RHFPhoneNumber } from '../../../components/hook-form/custom';
import { DESCRIPTION_SPACING, DescriptionText } from '../styles';

// ----------------------------------------------------------------------

export default function GeneralForm() {

    return (
        <Stack spacing={2.5}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <RHFTextField name="username" size="small"
                    placeholder={'Example: thuy-thu'}
                    label={'User name'} />
                <RHFTextField name="name" size="small"
                    placeholder={'Example: Thuy'}
                    label={'Name'} />
            </Stack>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <RHFPhoneNumber name="phone" size="small"
                    label={'Phone Number'} />
                <RHFTextField name="email" size="small"
                    InputProps={{ disabled: true }}
                    label={'Email address'} />
            </Stack>
            <Stack spacing={DESCRIPTION_SPACING}>
                <DescriptionText disabled>
                    Write something about you
                </DescriptionText>
                <RHFTextField name="aboutMe" size="small"
                    multiline rows={4}
                    label={'About me'} />
            </Stack>
            <Divider sx={{ borderStyle: 'dashed', pt: 2 }} />
        </Stack>
    )
}
