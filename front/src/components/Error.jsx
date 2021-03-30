import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Error.scss';

const Error = ({ code, message }) => {
  return (
    <div className="error">
      <div className="error__code">{code}</div>
      <div className="error__msg">{message}</div>
      <div className="error__home">
        <Button to="/">Volver al home</Button>
      </div>
    </div>
  );
};
Error.propTypes = {
  code: PropTypes.number,
  message: PropTypes.string.isRequired,
};
Error.defaultProps = {
  code: 500,
};

export { Error as default };
