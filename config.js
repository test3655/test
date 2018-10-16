'use strict';

const secretFile = './secrets.json';
const secrets = require(secretFile);

module.exports = {
  'port': getConfigValue('port'),
  'host_name': getConfigValue('host_name')
};

/*
  Get value from `secretFile` file.
  If value no exists then an error is throw
*/
function getConfigValue(key) {
  let value = secrets[key];
  if (value) {
    return value;
  } else {
    let error = `Error: Key ${key} no exists in ${secretFile}`;
    throw new Error(error);
  }
}