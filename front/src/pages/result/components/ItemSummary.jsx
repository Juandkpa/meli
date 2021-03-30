import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './ItemSummary.scss';

const ItemSummary = ({ id, title, freeShipping, amount }) => {
  return (
    <div className="item_summary">
      <div
        className={classnames({
          item__info__price: true,
          'item_summary__price--free_shipping': freeShipping,
        })}
      >
        $ {Intl.NumberFormat('de-DE').format(amount)}
      </div>
      <Link className="item_summary__title" to={`items/${id}`}>
        {title}
      </Link>
    </div>
  );
};

ItemSummary.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  freeShipping: PropTypes.bool.isRequired,
  amount: PropTypes.number.isRequired,
};

export { ItemSummary as default };
