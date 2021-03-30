"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.developmentErrors = exports.productionErrors = void 0;

const developmentErrors = (err, req, res, next) => {
  const errorDetails = {
    message: err.message,
    statusCode: err.statusCode,
    stack: err.stack || ""
  };
  res.status(err.statusCode || 500);
  res.send({
    error: errorDetails
  });
};

exports.developmentErrors = developmentErrors;

const productionErrors = (err, req, res, next) => {
  const errorDetails = {
    message: err.message,
    statusCode: err.statusCode
  };
  res.status(err.statusCode || 500);
  res.json({
    error: errorDetails
  });
};

exports.productionErrors = productionErrors;