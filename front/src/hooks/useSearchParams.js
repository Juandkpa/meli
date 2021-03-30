import { useLocation } from 'react-router-dom';

const useSearchParams = () => {
  const search = useLocation().search;
  const urlParams = new URLSearchParams(search);
  const query = urlParams.get('search');

  return query;
};

export { useSearchParams as default };
