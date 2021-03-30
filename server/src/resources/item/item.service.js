import axiosInstance from "../../utils/axiosInstance";
import { formatPrice } from "../../utils/formater";
import { NotFoundError } from "../../utils/errorHandler";
import {
  getCategories,
  getCategoriesPathById,
} from "../category/category.service";

const author = {
  name: "Juan",
  lastname: "Parra",
};

const formatItems = (data) => {
  return data.results
    .slice(0, 4)
    .map(
      ({
        id,
        title,
        thumbnail: picture,
        condition,
        price,
        currency_id,
        shipping: { free_shipping },
        address: { state_name },
      }) => ({
        id,
        title,
        price: formatPrice(price, currency_id),
        picture,
        condition,
        free_shipping,
        state_name,
      })
    );
};

const getItemsByQuery = async (query) => {
  const data = await axiosInstance.get(`sites/MLA/search?q=${query}`);

  if (!data.paging.total) {
    throw new NotFoundError(`No results found for ${query}`);
  }

  return {
    author,
    categories: await getCategories(data),
    items: formatItems(data),
  };
};

const getItemCondition = (attributes) => {
  const itemCondition = attributes.find(({ id }) => id === "ITEM_CONDITION");
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
  shipping: { free_shipping },
  sold_quantity,
}) => {
  return {
    id,
    title,
    price: formatPrice(price, currency_id),
    picture: pictures[0].secure_url,
    condition: getItemCondition(attributes),
    free_shipping,
    sold_quantity,
  };
};

const getItemDetail = async (id) => {
  const requests = [
    axiosInstance.get(`items/${id}`),
    axiosInstance.get(`items/${id}/description`),
  ];

  const [detail, description] = await Promise.allSettled(requests);
  let item = {};

  if (detail.status === "rejected") {
    throw new NotFoundError(`Detail for ${id} not found`);
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
    categories: await getCategoriesPathById(detail.value.category_id),
  };
};

export { getItemsByQuery, getItemDetail };
