"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _item = require("./item.controller");

var _errorHandler = require("../../utils/errorHandler");

const router = (0, _express.Router)();
exports.default = router;
router.get("/", (0, _errorHandler.catchErrors)(_item.getItems));
router.get("/:id", (0, _errorHandler.catchErrors)(_item.getItem));