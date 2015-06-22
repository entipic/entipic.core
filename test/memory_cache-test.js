var vows = require('vows'),
	assert = require('assert');

var MemoryCache = require('../lib').MemoryCache;

vows.describe('MemoryCache').addBatch({
	'Default MemoryCache object': {
		topic: new MemoryCache(),

		'instanceOf': function(topic) {
			assert.instanceOf(topic, MemoryCache);
		},
		'empty options': function(topic) {
			assert.isEmpty(topic.options);
		},
		'empty storage': function(topic) {
			assert.isEmpty(topic.storage);
			topic.set('key1', 'value1', {
				ttl: 1000 * 10
			});
		},
		'not empty storage': function(topic) {
			assert.equal(Object.keys(topic.storage).length, 1);
		},
		'key exists': function(topic) {
			assert.equal(topic.get('key1'), 'value1');
			topic.remove('key1');
		},
		'key not exists': function(topic) {
			assert.strictEqual(topic.get('key1'), undefined);
		}
	}
}).export(module);
