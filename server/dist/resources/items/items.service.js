"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemDetail = exports.getItemsByQuery = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _categories = _interopRequireDefault(require("../categories/categories.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const apiEnpoint = "https://api.mercadolibre.com";
const author = {
  name: "Juan",
  lastname: "Parra"
};

const getCategoriesFromPathRoot = category => {
  const [categoryFilterValue] = category.values;
  return categoryFilterValue.path_from_root.map(({
    name
  }) => name);
};

const buildCategoryBasedOnResults = async data => {
  const availableCategories = data.available_filters.find(({
    id
  }) => id === "category");
  const maxCategory = availableCategories.values.reduce((a, b) => a.results > b.results ? a : b);
  const {
    data: {
      path_from_root
    }
  } = await (0, _categories.default)(maxCategory.id);
  console.info("path from root", path_from_root);
  return path_from_root.map(({
    name
  }) => name);
};

const getCategories = async data => {
  console.log("data", data.filters);
  const category = data.filters.find(({
    id
  }) => id === "category"); //Documentar esto

  if (category) {
    console.log("si hay category", category);
    return getCategoriesFromPathRoot(category);
  }

  return buildCategoryBasedOnResults(data); // console.log(category);
  // console.log("value", categoryFilterValue);
};

const formatDecimals = decimals => {
  return decimals.length === 1 ? parseInt(decimals) * 10 : decimals; // return 20;
};

const formatPrice = (price, currency_id) => {
  let [amount, decimals] = (price + "").split(".");
  amount = parseInt(amount);
  decimals = decimals ? formatDecimals(decimals) : "00";
  return {
    amount,
    decimals,
    currency: currency_id
  };
};

const formatResults = data => {
  return data.results.slice(0, 4).map(({
    id,
    title,
    thumbnail: picture,
    condition,
    price,
    currency_id,
    shipping: {
      free_shipping
    }
  }) => ({
    id,
    title,
    price: formatPrice(price, currency_id),
    picture,
    condition,
    free_shipping
  }));
};

const getItemsByQuery = async query => {
  console.log("url to hit :::", `${apiEnpoint}/sites/MLA/search?q=​:${query}`);
  const {
    data
  } = await _axios.default.get(encodeURI(`${apiEnpoint}/sites/MLA/search?q=${query}`));
  return {
    author,
    categories: await getCategories(data),
    items: formatResults(data)
  };
};

exports.getItemsByQuery = getItemsByQuery;

const formatItem = ({
  id,
  title,
  price,
  currency_id,
  pictures,
  condition,
  shipping: {
    free_shipping
  },
  sold_quantity
}, {
  plain_text: description
}) => {
  return {
    id,
    title,
    price: formatPrice(price, currency_id),
    picture: pictures[0].secure_url,
    condition,
    free_shipping,
    sold_quantity,
    description
  };
};

const getItemDetail = async id => {
  const requests = [_axios.default.get(encodeURI(`${apiEnpoint}/items/${id}`)), _axios.default.get(encodeURI(`${apiEnpoint}/items/${id}/description`))];
  const [detail, description] = await Promise.all(requests);
  return {
    author,
    item: formatItem(detail.data, description.data)
  };
};

exports.getItemDetail = getItemDetail;