'use strict';

const serverStart = require('./server.js');

const main = async () => {
    await serverStart();
    return;
};

main();