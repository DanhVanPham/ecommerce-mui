import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { useDropzone } from 'react-dropzone';
// @mui
import { Box, Stack, Button, IconButton, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
// assets
import { UploadIllustration } from '../../resources/assets';
//
import Iconify from '../Iconify';
import Scrollbar from '../Scrollbar';
//
import RejectionFiles from './errors/RejectionFiles';
import MultiFilePreview from './preview/MultiFilePreview';
import SingleFilePreview from './preview/SingleFilePreview';

// ----------------------------------------------------------------------

const StyledDropZone = styled('div')(({ theme }) => ({
  outline: 'none',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  padding: theme.spacing(5, 1),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create('padding'),
  backgroundColor: theme.palette.background.neutral,
  border: `1px dashed ${alpha(theme.palette.grey[500], 0.32)}`,
  '&:hover': {
    opacity: 0.72,
  },
}));

// ----------------------------------------------------------------------

Upload.propTypes = {
  sx: PropTypes.object,
  sxDropZone: PropTypes.object,
  error: PropTypes.bool,
  files: PropTypes.array,
  fileErrors: PropTypes.array, 
  file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  onDelete: PropTypes.func,
  onRemove: PropTypes.func,
  onUpload: PropTypes.func,
  thumbnail: PropTypes.bool,
  helperText: PropTypes.node,
  placeholder: PropTypes.node,
  onRemoveAll: PropTypes.func,
  renderSingleFile: PropTypes.any,
  renderMultiFile: PropTypes.any,
};

export default function Upload({
  disabled,
  multiple = false,
  error,
  helperText,
  placeholder,
  //
  file,
  onDelete,
  //
  fileErrors,
  files,
  thumbnail,
  onUpload,
  onRemove,
  onRemoveAll,
  sx,
  sxDropZone,
  renderSingleFile,
  renderMultiFile,
  sxFilesWrapper,
  ...other
}) {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    multiple,
    disabled,
    ...other,
  });

  const hasFile = !!file && !multiple;

  const hasFiles = files && multiple && files.length > 0;

  const isError = isDragReject || !!error;
  
  const rejectedFiles = useMemo(() => {
    return [...fileRejections, ...fileErrors ?? []]
  },[fileErrors, fileRejections])
  
  const filePreview = useMemo(() => {
    if (!hasFile) return;

    if (isFunction(renderSingleFile)) return renderSingleFile(file)
    
    return <SingleFilePreview file={file} />
  }, [hasFile, renderSingleFile, file])
  
  return (
    <Box sx={{ width: 1, position: 'relative', ...sx }}>
      <StyledDropZone
        {...getRootProps()}
        sx={{
          ...(isDragActive && {
            opacity: 0.72,
          }),
          ...(isError && {
            color: 'error.main',
            bgcolor: 'error.lighter',
            borderColor: 'error.light',
          }),
          ...(disabled && {
            opacity: 0.48,
            pointerEvents: 'none',
          }),
          ...(hasFile && {
            padding: '12% 0',
          }),
          ...sxDropZone,
        }}
      >
        <input {...getInputProps()} />

        {placeholder || <Placeholder sx={{ ...(hasFile && { opacity: 0, }) }} />}

        {filePreview}
      </StyledDropZone>

      <RejectionFiles fileRejections={rejectedFiles} />

      {hasFile && onDelete && (
        <IconButton
          size="small"
          onClick={onDelete}
          sx={{
            top: 16,
            right: 16,
            zIndex: 9,
            position: 'absolute',
            color: (theme) => alpha(theme.palette.common.white, 0.8),
            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            '&:hover': {
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48),
            },
          }}
        >
          <Iconify icon="eva:close-fill" width={18} />
        </IconButton>
      )}

      {hasFiles && (
        <>
          {renderMultiFile ? renderMultiFile(files, thumbnail, onRemove) : (
            <Box sx={{ my: 3, ...sxFilesWrapper }}>
              <Scrollbar>
                <MultiFilePreview files={files} thumbnail={thumbnail} onRemove={onRemove} />
              </Scrollbar>
            </Box>
          )}
          <Stack direction="row" justifyContent="flex-end" spacing={1.5}>
            {onRemoveAll && (
              <Button color="inherit" variant="outlined" size="small" onClick={onRemoveAll}>
                Remove all
              </Button>
            )}

            {onUpload && (
              <Button size="small" variant="contained" onClick={onUpload}>
                Upload files
              </Button>
            )}
          </Stack>
        </>
      )}

      {helperText && helperText}
    </Box>
  );
}

// ----------------------------------------------------------------------

Placeholder.propTypes = {
  sx: PropTypes.object,
};

function Placeholder({ sx, ...other }) {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      direction={{
        xs: 'column',
        md: 'row',
      }}
      sx={{
        width: 1,
        textAlign: {
          xs: 'center',
          md: 'left',
        },
        ...sx,
      }}
      {...other}
    >
      <UploadIllustration sx={{ width: 220, minWidth: 180 }} />

      <Box sx={{ p: 3 }}>
        {/* <Typography gutterBottom variant="h5">
          Drop or Select file
        </Typography> */}

        <Typography sx={{ color: 'text.secondary', fontSize: '1.125rem' }}>
          {/* Drop files here or click */}
          {`ここにファイルをドラック＆ドロップするか、`}
          <Typography component="span"
            sx={{
              mx: 0.5,
              color: 'primary.main',
              fontSize: '1.125rem',
              textDecoration: 'underline',
            }}
          >
            {/* browse */}
            {`クリックしてファイルを選択してください`}
          </Typography>
          {/* thorough your machine */}
        </Typography>
      </Box>
    </Stack>
  );
}
