const developmentErrors = (err, req, res, next) => {
  const errorDetails = {
    message: err.message,
    statusCode: err.statusCode,
    stack: err.stack || "",
  };
  res.status(err.statusCode || 500);
  res.send({ error: errorDetails });
};

const productionErrors = (err, req, res, next) => {
  const errorDetails = {
    message: err.message,
    statusCode: err.statusCode,
  };
  res.status(err.statusCode || 500);
  res.json({ error: errorDetails });
};

export { productionErrors, developmentErrors };
