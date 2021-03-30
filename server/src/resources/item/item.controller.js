import { BadRequestError } from "../../utils/errorHandler";
import { getItemDetail, getItemsByQuery } from "./item.service";

const getItems = async (req, res) => {
  const query = req.query.q;

  if (!query) {
    throw new BadRequestError("q query parameter is required");
  }

  const results = await getItemsByQuery(query);

  res.send(results);
};

const getItem = async (req, res) => {  
  const id = req.params.id;  
  
  if (!id) {
    throw new BadRequestError("id parameter is required");
  }

  const result = await getItemDetail(id);

  res.send(result);  
};

export { getItems, getItem };
