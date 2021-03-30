import axios from "axios";

const meliApiEnpoint = "https://api.mercadolibre.com";

const axiosInstance = axios.create({
  baseURL: meliApiEnpoint,
});

axiosInstance.interceptors.request.use((config) => {
  const { method, url } = config;

  if (method === "get") {
    config.url = encodeURI(url);
  }

  return config;
});

axiosInstance.interceptors.response.use((response) => {
  return response.data;
});

export { axiosInstance as default };
