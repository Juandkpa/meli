import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from '../../../components/Image';
import ItemSummary from './ItemSummary';
import './Item.scss';

const Item = ({ id, title, picture, stateName, amount, freeShipping }) => {
  return (
    <div className="item">
      <div className="item__image">
        <Link to={`items/${id}`}>
          <Image src={picture} alt={title} />
        </Link>
      </div>
      <ItemSummary
        id={id}
        title={title}
        amount={amount}
        freeShipping={freeShipping}
      />
      <div className="item__location">{stateName}</div>
    </div>
  );
};
Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  stateName: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  freeShipping: PropTypes.bool.isRequired,
};

export { Item as default };
