import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../../components/Image';
import './DetailLeft.scss';

const DetailLeft = ({ title, picture, description }) => {
  return (
    <div className="detail_left">
      <div className="detail_left__image">
        <Image src={picture} alt={title} />
      </div>
      <div className="detail_left__text">
        <h2 className="detail_left__title">Descripcion del producto</h2>
        <p className="detail_left__desc">{description}</p>
      </div>
    </div>
  );
};
DetailLeft.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export { DetailLeft as default };
