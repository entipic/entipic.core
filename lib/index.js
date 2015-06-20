var Promise = require('bluebird');
var Logger = require('./logger');

module.exports = {
  //util: require('./lib/util'),
  text: require('./lib/text'),
  _: require('lodash'),
  Promise: Promise,
  MemoryCache: require('./memory_cache'),
  //logger
  Logger: Logger,
  logger: Logger.logger,
  errors: require('./errors')
};
