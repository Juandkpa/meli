import React from 'react';
import PropTypes from 'prop-types';
import Chevron from './Chevron';
import './Breadcrumb.scss';

const Breadcrumb = ({ categories }) => {
  return (
    <ul className="breadcrumb">
      {categories.map((category, index) => (
        <li key={category} className="breadcrumb__item">
          {index ? <Chevron /> : ''}
          {category}
        </li>
      ))}
    </ul>
  );
};
Breadcrumb.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { Breadcrumb as default };
