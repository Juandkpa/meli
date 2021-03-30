import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import './AppLayout.scss';

const AppLayout = ({ children }) => {
  return (
    <div className="app_layout">
      <div className="app_layout__header">
        <Header />
      </div>
      <main className="app_layout__content">{children}</main>
    </div>
  );
};
AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { AppLayout as default };
