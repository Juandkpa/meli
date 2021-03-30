"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCategoriesPathById = exports.getCategories = void 0;

var _axiosInstance = _interopRequireDefault(require("../../utils/axiosInstance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getCategoriesPathById = async id => {
  const {
    path_from_root
  } = await _axiosInstance.default.get(`categories/${id}`);
  return path_from_root.map(({
    name
  }) => name);
};

exports.getCategoriesPathById = getCategoriesPathById;

const getCategoriesFromPathRoot = category => {
  const [categoryFilterValue] = category.values;
  return categoryFilterValue.path_from_root.map(({
    name
  }) => name);
};

const buildCategoriesBasedOnResults = async data => {
  const availableCategories = data.available_filters.find(({
    id
  }) => id === "category");
  const maxCategory = availableCategories.values.reduce((a, b) => a.results > b.results ? a : b);
  return getCategoriesPathById(maxCategory.id);
};

const getCategories = async data => {
  const category = data.filters.find(({
    id
  }) => id === "category"); //TODO: Documentar esto

  if (category) {
    return getCategoriesFromPathRoot(category);
  }

  return buildCategoriesBasedOnResults(data);
};

exports.getCategories = getCategories;