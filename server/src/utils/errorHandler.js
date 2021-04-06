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

class BadRequestError extends CustomError {
  constructor(message = "Bad Request") {
    super(400, message);
  }
}

const catchErrors = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

const notFound = (req, res, next) => {
  const err = new NotFoundError();
  next(err);
};

export { catchErrors, notFound, NotFoundError, BadRequestError };
