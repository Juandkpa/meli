"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItem = exports.getItems = void 0;

var _errorHandler = require("../../utils/errorHandler");

var _item = require("./item.service");

const getItems = async (req, res) => {
  const query = req.query.q;

  if (!query) {
    throw new _errorHandler.BadRequestError("q query parameter is required");
  }

  const results = await (0, _item.getItemsByQuery)(query);
  res.send(results);
};

exports.getItems = getItems;

const getItem = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    throw new _errorHandler.BadRequestError("id parameter is required");
  }

  const result = await (0, _item.getItemDetail)(id);
  res.send(result);
};

exports.getItem = getItem;