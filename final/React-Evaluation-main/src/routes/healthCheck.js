'use strict';

const healthCheckHandler = async (request, response) => {
    response.status(200).send('OK');
};

module.exports = (app) => {
    app.get('/healthcheck', healthCheckHandler);
};
