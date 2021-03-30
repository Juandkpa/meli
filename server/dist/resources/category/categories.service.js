"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const {
  default: axios
} = require("axios");

const apiEnpoint = "https://api.mercadolibre.com";

const getCategory = id => {
  return axios.get(`${apiEnpoint}/categories/${id}`);
};

exports.default = getCategory;