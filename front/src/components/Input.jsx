import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ value, placeholder, onChange }) => {
  return (
    <input
      className="input"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { Input as default };
