import { useQuery } from 'react-query';
import axiosInstance from '../utils/apiClient';

const useQueryRequest = (queryKey, requestConfig, options = {}) => {
  const { data, isLoading, isError, error } = useQuery(
    queryKey,
    () => axiosInstance(requestConfig),
    options
  );

  return { data, isLoading, isError, error };
};

export { useQueryRequest as default };
