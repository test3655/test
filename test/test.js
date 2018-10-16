var request = require('supertest');
var app = require('../index.js');
const config = require('../config');

var host_url = 'http://' + config.host_name + ':' + config.port;
var container_url = host_url + '/test';

describe('4 Container Retrieval', function () {
    container = request(container_url);
    it('MUST support GET, HEAD, and OPTIONs methods', function (done) {
        container
            .get('/')
            .expect(200, done);
    });
});