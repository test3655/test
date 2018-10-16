var request = require('supertest');
var app = require('../index.js');

var host_url = 'http://localhost:80'
var container_url = host_url + '/test';

describe('4 Container Retrieval', function () {
    container = request(container_url);
    it('MUST support GET, HEAD, and OPTIONs methods', function (done) {
        container
            .get('/')
            .expect(200, done);
    });
});