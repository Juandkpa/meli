"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BadRequestError = exports.NotFoundError = exports.notFound = exports.catchErrors = void 0;

class CustomError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }

}

class NotFoundError extends CustomError {
  constructor(message = "Not Found") {
    super(404, message);
  }

}

exports.NotFoundError = NotFoundError;

class BadRequestError extends CustomError {
  constructor(message = "Bad Request") {
    super(400, message);
  }

}

exports.BadRequestError = BadRequestError;

const catchErrors = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

exports.catchErrors = catchErrors;

const notFound = (req, res, next) => {
  const err = new NotFoundError();
  next(err);
};

exports.notFound = notFound;