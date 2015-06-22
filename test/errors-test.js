var vows = require('vows'),
	assert = require('assert');

var errors = require('../lib').errors;

vows.describe('errors').addBatch({
	'BaseError': {
		topic: new errors.BaseError(),

		'instanceOf BaseError': function(topic) {
			assert.instanceOf(topic, errors.BaseError);
		},
		'error is not logged': function(topic) {
			assert.equal(topic._logged, false);
		},
		'BaseError name': function(topic) {
			assert.equal(topic.name, 'BaseError');
		}
	},
	'Custom BaseError': {
		topic: new errors.BaseError({
			message: 'Test error',
			test: 1
		}),

		'instanceOf BaseError': function(topic) {
			assert.instanceOf(topic, errors.BaseError);
		},
		'message=Test error': function(topic) {
			assert.equal(topic.message, 'Test error');
		},
		'custom property test=1': function(topic) {
			assert.equal(topic.test, 1);
		}
	}
}).export(module);
