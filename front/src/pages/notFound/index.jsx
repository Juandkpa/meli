import React from 'react';
import Error from '../../components/Error';

const NotFound = () => {
  return (
    <Error code="404" message="Ops! no pudimos encontrar lo que buscabas." />
  );
};

export { NotFound as default };
