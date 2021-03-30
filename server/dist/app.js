"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bodyParser = require("body-parser");

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _errorHandler = require("./utils/errorHandler");

var _health = _interopRequireDefault(require("./resources/health/health.router"));

var _item = _interopRequireDefault(require("./resources/item/item.router"));

var _errors = require("./middleware/errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
exports.default = app;
app.use((0, _cors.default)({
  credentials: true
}));
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use("/", _health.default);
app.use("/api/items", _item.default);
app.use(_errorHandler.notFound);

if (app.get("env") === "development") {
  app.use(_errors.developmentErrors);
}

if (app.get("env") === "production") {
  app.use(_errors.productionErrors);
}