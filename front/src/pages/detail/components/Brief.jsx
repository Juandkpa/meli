import React from 'react';
import PropTypes from 'prop-types';
import './Brief.scss';

const Brief = ({ condition, soldQuantity, title }) => {
  return (
    <div className="brief">
      <div className="brief__sold">
        {condition} - {soldQuantity} vendidos
      </div>
      <h1 className="brief__title">{title}</h1>
    </div>
  );
};
Brief.propTypes = {
  condition: PropTypes.string.isRequired,
  soldQuantity: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export { Brief as default };
