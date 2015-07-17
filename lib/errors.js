/*eslint no-underscore-dangle:0*/

'use strict';

var errors = module.exports = require('errod');
var logger = require('./logger').logger;

errors.create({
	name: 'BaseError',
	message: 'Base error',
	__logged: false,
	log: function() {
		if (!this.__logged) {
			logger.error(this.message, this);
			this.__logged = true;
		}
		return this;
	},
	isLogged: function() {
		return this.__logged;
	}
});

errors.create({
	parent: errors.BaseError,
	name: 'EntipicError'
});
