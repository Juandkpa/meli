#!/usr/bin/env node
"use strict";

require("dotenv/config");

var _http = _interopRequireDefault(require("http"));

var _app = _interopRequireDefault(require("../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = process.env.PORT || 5000;

_app.default.set("port", PORT);

const server = _http.default.createServer(_app.default);

const onListening = () => {
  console.log(`REST API running -> PORT ${PORT}`);
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }

  if (error.code === "EACCES") {
    console.error(`Port ${PORT} requires elevated privileges`);
    process.exit(1);
  } else if (error.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use`);
    process.exit(1);
  } else {
    throw error;
  }
};

const run = () => {
  server.listen(PORT);
  server.on("error", onError);
  server.on("listening", onListening);
};

run();