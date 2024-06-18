import { useDropzone } from 'react-dropzone';
import { Stack } from '@mui/material';
import { RotatingLines } from "react-loader-spinner"
import { LoadingButton } from '@mui/lab';
import Iconify from '../Iconify';
// ----------------------------------------------------------------------

export default function UploadButton({ uploading = false, content, onDrop, disabled, props, ...other }) {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: onDrop,
    disabled,
    ...other,
  });

  return (
    <>
      <Stack
        spacing={1}
        direction="row">
        <input {...getInputProps()} />
        <LoadingButton
          variant="outlined"
          size='small'
          loadingPosition="start"
          loadingIndicator={
            <RotatingLines
              strokeColor="grey"
              strokeWidth="4"
              animationDuration="0.75"
              width="20"
            />
          }
          startIcon={<Iconify icon="material-symbols:attach-file" />}
          {...other}
          disabled={uploading}
          loading={uploading}
          {...getRootProps()}>
          {content ?? "ファイル選択..."}
        </LoadingButton>
      </Stack>
    </>
  );
}
