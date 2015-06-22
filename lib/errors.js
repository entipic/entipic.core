var errors = module.exports = require('errod');
var logger = require('./logger').logger;

errors.create({
  name: 'BaseError',
  message: 'Base error',
  _logged: false,
  log: function() {
    !this._logged && logger.error(this.message, this);
    this._logged = true;
    return this;
  }
});
