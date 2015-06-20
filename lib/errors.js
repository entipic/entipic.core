var errors = require('errod');
var logger = require('./logger').logger;

var BaseError = errors.create({
  name: 'BaseError',
  message: 'Base error',
  _logged: false,
  log: function() {
    !this._logged && logger.error(this.message, this);
    this._logged = true;
    return this;
  }
});
