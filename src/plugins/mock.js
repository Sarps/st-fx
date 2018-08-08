const axios = require('axios');
const Mock = require('axios-mock-adapter');

var mock = new Mock(axios);

mock
    .onGet('/guests').reply(200, {

    })

    .onGet('/rates').reply(200, {

    })

    .onGet('/transaction/{userId}').reply(200, {

    })

    .onPut('/transaction/{userId}').reply(200, {

    })

    .onPost('/guests').reply(200, {

    })

    