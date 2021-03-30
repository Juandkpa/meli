import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Breadcrumb from '../components/Breadcrumb';

const PageLayout = ({ children, title, description, categories }) => {
  return (
    <div className="page_layout">
      <Helmet>
        <title>{title} | Meli test</title>
        <meta name="description" content={description} />
      </Helmet>
      <Breadcrumb categories={categories} />
      {children}
    </div>
  );
};
PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { PageLayout as default };
