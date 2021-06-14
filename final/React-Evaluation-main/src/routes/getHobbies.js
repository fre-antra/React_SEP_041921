'use strict';
const mockDBCalls = require('../database/index.js');

const getHobbiesHandler = async (request, response) => {
  const data = await mockDBCalls.getHobbies();
  return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
  app.get('/hobbies', getHobbiesHandler);
};
