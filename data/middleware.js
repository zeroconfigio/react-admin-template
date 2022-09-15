module.exports = (request, response, next) => {
  response.header('Access-Control-Expose-Headers', 'Content-Range');
  next();
};
