import React from 'react';
import PropTypes from 'prop-types';
import './Cost.scss';

const Cost = ({ amount, decimals }) => {
  return (
    <div className="cost">
      <span className="cost__currency">$</span>
      <span className="cost__quantity">
        {Intl.NumberFormat('de-DE').format(amount)}
      </span>
      <span className="cost__cents">{decimals}</span>
    </div>
  );
};
Cost.propTypes = {
  amount: PropTypes.number.isRequired,
  decimals: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};

export { Cost as default };
