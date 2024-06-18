import PropTypes from 'prop-types';
//
import Image from '../../Image';
import { fileData } from '../../../utils/files';

// ----------------------------------------------------------------------

SingleFilePreview.propTypes = {
  file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

const contentStyle = {
  top: 8,
  left: 8,
  zIndex: 8,
  borderRadius: 1,
  position: 'absolute',
  width: 'calc(100% - 16px)',
  height: 'calc(100% - 16px)',
}

export default function SingleFilePreview({ file }) {
  if (!file) return <></>

  const { name = "file preview", preview = '' } = fileData(file);

  return <Image alt={name} src={preview} sx={contentStyle} />
}
