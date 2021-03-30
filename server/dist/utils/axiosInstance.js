"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const meliApiEnpoint = "https://api.mercadolibre.com";

const axiosInstance = _axios.default.create({
  baseURL: meliApiEnpoint
});

exports.default = axiosInstance;
axiosInstance.interceptors.request.use(config => {
  const {
    method,
    url
  } = config;

  if (method === "get") {
    config.url = encodeURI(url);
  }

  return config;
});
axiosInstance.interceptors.response.use(response => {
  return response.data;
});