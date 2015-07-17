'use strict';

var assert = require('chai').assert;
var MemoryCache = require('../lib').MemoryCache;

describe('MemoryCache', function() {
	describe('Empty Default MemoryCache', function() {
		var topic = new MemoryCache();

		it('instanceOf', function() {
			assert.instanceOf(topic, MemoryCache);
		});
		it('empty options', function() {
			assert.equal(Object.keys(topic.options).length, 0);
		});
		it('empty storage', function() {
			assert.equal(Object.keys(topic.storage).length, 0);
		});
	});

	describe('Not Empty Default MemoryCache', function() {
		var topic = new MemoryCache();

		topic.set('key1', 'value1', {
			ttl: 1000 * 10
		});

		it('not empty storage', function() {
			assert.equal(Object.keys(topic.storage).length, 1);
		});
		it('key exists', function() {
			assert.equal(topic.get('key1'), 'value1');
		});
		it('key not exists', function() {
			topic.remove('key1');
			assert.equal(topic.get('key1'), undefined);
		});
	});
});
