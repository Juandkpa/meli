"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

const router = (0, _express.Router)();
exports.default = router;
router.get("/", (_, res) => res.send("Healty"));