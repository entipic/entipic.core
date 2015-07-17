'use strict';

var assert = require('chai').assert;
var errors = require('../lib').errors;

describe('Errors', function() {
	var topic = new errors.BaseError();
	describe('BaseError', function() {
		it('should be instanceOf BaseError', function() {
			assert.instanceOf(topic, errors.BaseError);
		});
		it('should not be logged', function() {
			assert.equal(topic.isLogged(), false);
		});
		it('should have name BaseError', function() {
			assert.equal(topic.name, 'BaseError');
		});
	});

	topic = new errors.BaseError({
		message: 'Test error',
		test: 1
	});

	describe('Custom BaseError', function() {
		it('should be instanceOf BaseError', function() {
			assert.instanceOf(topic, errors.BaseError);
		});
		it('message should be "Test error"', function() {
			assert.equal(topic.message, 'Test error');
		});
		it('`test` should be=1', function() {
			assert.equal(topic.test, 1);
		});
	});
});
