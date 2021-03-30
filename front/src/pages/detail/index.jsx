import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import PageLayout from '../../layouts/PageLayout';
import useQueryRequest from '../../hooks/useQueryRequest';
import DetailLeft from './components/DetailLeft';
import DetailRight from './components/DetailRight';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import './style.scss';

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQueryRequest(
    ['item', { id }],
    {
      url: `api/items/${id}`,
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    if (error.statusCode === 404) {
      return <Redirect to="/404" />;
    }
    return <Error code={error.statusCode} message="Vaya! algo salio mal." />;
  }

  const {
    item: {
      picture,
      description,
      condition,
      sold_quantity,
      title,
      price: { amount, decimals },
    },
  } = data;
  const desc = `Detalle para ${title}`;

  return (
    <PageLayout title={title} description={desc} categories={data.categories}>
      <div className="detail">
        <DetailLeft title={title} picture={picture} description={description} />
        <DetailRight
          condition={condition}
          soldQuantity={sold_quantity}
          title={title}
          amount={amount}
          decimals={decimals}
        />
      </div>
    </PageLayout>
  );
};

export { Detail as default };
