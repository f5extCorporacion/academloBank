export const globalErrorHandle = (err, req, res, next) => {
  //ERRORES 400 ANND 500 EXECUT
  err.statusCode = err.statusCode || 500;
  err.status = err.statusCode || "fail";

  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    err,
  });
};
