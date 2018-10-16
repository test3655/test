'use strict';

const config     = require('./config');
const http       = require('http');
const express    = require('express');
const logger     = require('morgan');
const cors       = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.disable('x-powered-by'); /* remove this header */
app.use(logger(':method :url :status :response-time ms - :res[content-length] :date[iso]'));
app.use(bodyParser({limit: '50mb'}));

let corsOptions = {
  origin: config['valid_origin'],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

let mode = 'DEVELOPMENT';
switch (app.get('env')) {
  case 'development':
    console.info('\n RUNNING IN DEVELOPMENT MODE \n');
    mode = 'DEVELOPMENT';
    break;
  case 'beta':
    console.info('\n RUNNING IN BETA MODE \n');
    mode = 'BETA';
    break;
  case 'production':
    console.info('\n RUNNING IN PRODUCTION MODE \n');
    mode = 'PRODUCTION';
    break;
}

var routes = require('./routes');
app.use('/', routes);

var server = http.createServer(app);

server.listen(config.port, config.host_name, function(){
  console.info('Server: ', server.address());
});

server.on('error', err => {
  onError(err, config.port);
});

/* Error-handling middleware */
app.use(function (err, req, res, next) {
  /* Don't delete the `next` argument even if its not used */
  console.trace(err);
  let inform = { message: err.message };
  if (app.get('env') === 'development') { // In development show error details
    inform.error = err;
  }
  res.status(err.status || 500);
  res.json(inform);
});

/* Final route 404 Not Found */
app.use(function (req, res) {
  let error = {status: 404, message: 'Not Found'};
  res.status(error.status).json(error);
});


function onError(error, port) {
  if (error.syscall !== 'listen'){
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.trace(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.trace(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}