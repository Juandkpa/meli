import axios from 'axios';

const serverEndpoint = process.env.REACT_APP_SERVER_ENDPOINT;

const axiosInstance = axios.create({
  baseURL: serverEndpoint,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    let response = err;
    if (err.response) {
      response = err.response.data.error;
    }
    return Promise.reject(response);
  }
);

export { axiosInstance as default };
