import axiosInstance from "../../utils/axiosInstance";

const getCategoriesPathById = async (id) => {
  const { path_from_root } = await axiosInstance.get(`categories/${id}`);

  return path_from_root.map(({ name }) => name);
};

const getCategoriesFromPathRoot = (category) => {
  const [categoryFilterValue] = category.values;
  return categoryFilterValue.path_from_root.map(({ name }) => name);
};

const buildCategoriesBasedOnResults = async (data) => {
  const availableCategories = data.available_filters.find(
    ({ id }) => id === "category"
  );
  const maxCategory = availableCategories.values.reduce((a, b) =>
    a.results > b.results ? a : b
  );

  return getCategoriesPathById(maxCategory.id);
};

const getCategories = async (data) => {
  const category = data.filters.find(({ id }) => id === "category");

  if (category) {
    return getCategoriesFromPathRoot(category);
  }

  return buildCategoriesBasedOnResults(data);
};

export { getCategories, getCategoriesPathById };
