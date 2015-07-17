'use strict';

var crypto = require('crypto');

var external = module.exports;

external.isNull = function(target) {
	return [null, undefined].indexOf(target) > -1;
};

external.clearObject = function(obj) {
	if (obj) {
		for (var key in obj) {
			if (external.isNull(obj[key])) {
				delete obj[key];
			}
		}
	}

	return obj;
};

external.buildName = function(name, options) {
	var ns = name.split(options.separator || '.'),
		o = options.scope,
		val = options.value,
		i, len;
	for (i = 0, len = ns.length; i < len; i++) {
		var v = (i === len - 1 && val) ? val : {};
		o = o[ns[i]] = o[ns[i]] || v;
	}
	return o;
};

//http://stackoverflow.com/a/8817473/828615
external.deepValue = function(obj, path) {
	path = path.split('.');
	for (var i = 0, len = path.length; i < len; i++) {
		obj = obj[path[i]];
	}
	return obj;
};

external.md5 = function(value) {
	return crypto.createHash('md5').update(value).digest('hex');
};
