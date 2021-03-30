import React from 'react';

import PropTypes from 'prop-types';
import Button from '../../../components/Button';
import Brief from './Brief';
import Cost from './Cost';
import './DetailRight.scss';

const DetailRight = ({ condition, soldQuantity, title, amount, decimals }) => {
  return (
    <div className="detail_right">
      <Brief condition={condition} soldQuantity={soldQuantity} title={title} />
      <Cost amount={amount} decimals={decimals} />
      <Button to="/buy">Comprar</Button>
    </div>
  );
};
DetailRight.propTypes = {
  condition: PropTypes.string.isRequired,
  soldQuantity: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  decimals: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};

export { DetailRight as default };
