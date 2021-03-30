"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemDetail = exports.getItemsByQuery = void 0;

var _axiosInstance = _interopRequireDefault(require("../../utils/axiosInstance"));

var _formater = require("../../utils/formater");

var _errorHandler = require("../../utils/errorHandler");

var _category = require("../category/category.service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const author = {
  name: "Juan",
  lastname: "Parra"
};

const formatItems = data => {
  return data.results.slice(0, 4).map(({
    id,
    title,
    thumbnail: picture,
    condition,
    price,
    currency_id,
    shipping: {
      free_shipping
    },
    address: {
      state_name
    }
  }) => ({
    id,
    title,
    price: (0, _formater.formatPrice)(price, currency_id),
    picture,
    condition,
    free_shipping,
    state_name
  }));
};

const getItemsByQuery = async query => {
  const data = await _axiosInstance.default.get(`sites/MLA/search?q=${query}`);

  if (!data.paging.total) {
    throw new _errorHandler.NotFoundError(`No results found for ${query}`);
  }

  return {
    author,
    categories: await (0, _category.getCategories)(data),
    items: formatItems(data)
  };
};

exports.getItemsByQuery = getItemsByQuery;

const getItemCondition = attributes => {
  const itemCondition = attributes.find(({
    id
  }) => id === "ITEM_CONDITION");
  let condition = "";

  if (itemCondition) {
    condition = itemCondition.value_name;
  }

  return condition;
};

const formatItemDetail = ({
  id,
  title,
  price,
  currency_id,
  pictures,
  attributes,
  shipping: {
    free_shipping
  },
  sold_quantity
}) => {
  return {
    id,
    title,
    price: (0, _formater.formatPrice)(price, currency_id),
    picture: pictures[0].secure_url,
    condition: getItemCondition(attributes),
    free_shipping,
    sold_quantity
  };
};

const getItemDetail = async id => {
  const requests = [_axiosInstance.default.get(`items/${id}`), _axiosInstance.default.get(`items/${id}/description`)]; //TODO: document why this

  const [detail, description] = await Promise.allSettled(requests);
  let item = {};

  if (detail.status === "rejected") {
    throw new _errorHandler.NotFoundError(`Detail for ${id} not found`);
  }

  if (detail.status === "fulfilled") {
    item = formatItemDetail(detail.value);
  }

  if (description.status === "fulfilled") {
    item.description = description.value.plain_text;
  }

  return {
    author,
    item,
    categories: await (0, _category.getCategoriesPathById)(detail.value.category_id)
  };
};

exports.getItemDetail = getItemDetail;