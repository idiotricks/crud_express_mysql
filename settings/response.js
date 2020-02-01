module.exports = function(values, response, status=200) {
  response.status(status);
  var data = {
    status: status,
    values: values
  };


  response.json(data);
  response.end();
};