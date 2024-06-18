import PropTypes from 'prop-types';
// @mui
import { Box, Tooltip, Stack } from '@mui/material';
//
import { fileData, fileFormat, fileThumb } from '../utils/files';

// ----------------------------------------------------------------------

FileThumbnail.propTypes = {
  sx: PropTypes.object,
  imgSx: PropTypes.object,
  tooltip: PropTypes.bool,
  imageView: PropTypes.bool,
  file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default function FileThumbnail({ file, tooltip, imageView, sx, imgSx }) {
  const { name = '', path = '', preview = '' } = fileData(file);

  const format = fileFormat(path || preview);

  const renderContent =
    format === 'image' && imageView ? (
      <Box
        component="img"
        src={preview}
        sx={{
          width: 1,
          height: 1,
          flexShrink: 0,
          objectFit: 'cover',
          ...imgSx,
        }}
      />
    ) : (
      <Box
        component="img"
        src={fileThumb(format)}
        sx={{
          width: 32,
          height: 32,
          flexShrink: 0,
          ...sx,
        }}
      />
    );

  if (tooltip) {
    return (
      <Tooltip title={name}>
        <Stack
          flexShrink={0}
          component="span"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: 'fit-content',
            height: 'inherit',
          }}
        >
          {renderContent}
        </Stack>
      </Tooltip>
    );
  }

  return renderContent
}
