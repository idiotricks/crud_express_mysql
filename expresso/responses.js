const responseStatus = require('./status');


const ExpressoStandardResponse = exports.ExpressoStandardResponse = (values, status) => {
  return {
    status: status,
    values: values
  };
}

exports.ExpressoResponseJSON = (values, response, status=responseStatus.EXPRESSO_STATUS_200_OK) => {
  response.status(responseStatus.EXPRESSO_STATUS_200_OK);
  const data = ExpressoStandardResponse(values, status);
  response.json(data);
  response.end();
}