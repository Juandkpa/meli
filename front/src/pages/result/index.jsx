import React from 'react';
import { Redirect } from 'react-router-dom';
import useSearchParams from '../../hooks/useSearchParams';
import useQueryRequest from '../../hooks/useQueryRequest';

import PageLayout from '../../layouts/PageLayout';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Item from './components/Item';

const Result = () => {
  const query = useSearchParams();
  const description = `Resultados de busqueda ${query}`;
  const { data, isLoading, isError, error } = useQueryRequest(
    ['items', { search: query }],
    {
      url: `api/items?q=${query}`,
    }
  );

  if (!query) {
    return (
      <Error
        code={404}
        message="Ingresa en la barra de busqueda lo que deseas buscar."
      />
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    if (error.statusCode === 404) {
      return <Redirect to="/404" />;
    }
    return <Error code={error.statusCode} message="Vaya! algo salio mal." />;
  }

  return (
    <PageLayout
      title={query}
      description={description}
      categories={data.categories}
    >
      {data.items.map(
        ({
          id,
          title,
          picture,
          state_name,
          free_shipping,
          price: { amount },
        }) => (
          <Item
            key={id}
            id={id}
            title={title}
            picture={picture}
            stateName={state_name}
            amount={amount}
            freeShipping={free_shipping}
          />
        )
      )}
    </PageLayout>
  );
};

export { Result as default };
