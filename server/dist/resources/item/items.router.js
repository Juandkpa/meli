"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _items = require("./items.service");

const router = (0, _express.Router)();
exports.default = router;
router.get("/", async (req, res) => {
  const query = req.query.q;

  try {
    const results = await (0, _items.getItemsByQuery)(query);
    res.send(results);
  } catch (error) {
    console.log("an error ocurs", error);
  }
});
router.get("/:id", async (req, res) => {
  //has not found error;
  const id = req.params.id;

  try {
    const result = await (0, _items.getItemDetail)(id);
    res.send(result);
  } catch (error) {
    console.log("error detail", error);
  }
});