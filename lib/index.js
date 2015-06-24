var Promise = require('bluebird');
var Logger = require('./logger');

module.exports = {
  util: require('./util'),
  text: require('./text'),
  _: require('lodash'),
  Promise: Promise,
  MemoryCache: require('./memory_cache'),
  //logger
  Logger: Logger,
  logger: Logger.logger,
  errors: require('./errors')
};
