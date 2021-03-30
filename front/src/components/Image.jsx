import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ className, src, alt }) => {
  return <img className={className} src={src} alt={alt} />;
};
Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
Image.defautProps = {
  className: '',
};

export { Image as default };
