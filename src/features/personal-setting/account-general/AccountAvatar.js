import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
// @mui
import { Typography } from '@mui/material';
import { RHFUploadAvatar } from '../../../components/hook-form';
import { fData } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

export default function AccountAvatar() {
    const { setValue } = useFormContext()
    const handleDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0]
        const newFile = Object.assign(file, {
            preview: URL.createObjectURL(file)
        });
        if (file) {
            setValue('avatar', newFile)
            setValue('file', file)
        }
    }, [setValue])

    return <RHFUploadAvatar name="avatar"
        maxSize={3145728} onDrop={handleDrop}
        helperText={<Typography variant="caption"
            sx={{
                mt: 2, mx: 'auto',
                display: 'block',
                textAlign: 'center',
                color: 'text.secondary',
            }}>
        </Typography>}
    />
}
