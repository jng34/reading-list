const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    msg: err.message,
    success: false,
  });
}

module.exports = errorHandler;