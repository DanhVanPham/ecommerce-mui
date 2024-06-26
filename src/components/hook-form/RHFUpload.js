import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { FormHelperText } from '@mui/material';
//
import { UploadAvatar, Upload, UploadBox } from '../upload';

// ----------------------------------------------------------------------

RHFUploadAvatar.propTypes = {
  name: PropTypes.string,
};

export function RHFUploadAvatar({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const isError = !!error && !field.value;

        return (
          <div>
            <UploadAvatar
              accept={{
                'image/jpeg': [],
                'image/png': [],
              }}
              error={isError}
              file={field.value}
              {...other}
            />

            {isError && (
              <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                {error.message}
              </FormHelperText>
            )}
          </div>
        );
      }}
    />
  );
}

// ----------------------------------------------------------------------

RHFUploadBox.propTypes = {
  name: PropTypes.string,
};

export function RHFUploadBox({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const isError = !!error && !field.value?.length;

        return <UploadBox error={isError} files={field.value} {...other} />;
      }}
    />
  );
}

// ----------------------------------------------------------------------

RHFUpload.propTypes = {
  name: PropTypes.string,
  multiple: PropTypes.bool,
};

export function RHFUpload({ name, multiple, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const isErrorWithSingle = !!error && !field.value;

        const isErrorWithMultiple = !!error && !field.value?.length;

        return (
          <Upload
            multiple={!!multiple}
            files={field.value}
            error={multiple ? isErrorWithMultiple : isErrorWithSingle}
            helperText={
              (isErrorWithMultiple || isErrorWithSingle) && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )
            }
            {...other}
          />
        )
      }}
    />
  );
}
