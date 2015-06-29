var crypto = require('crypto');

var external = module.exports;

external.buildName = buildName;
external.deepValue = deepValue;
external.md5 = md5;

function buildName(name, options) {
  var ns = name.split(options.separator || '.'),
    o = options.scope,
    val = options.value,
    i, len;
  for (i = 0, len = ns.length; i < len; i++) {
    var v = (i === len - 1 && val) ? val : {};
    o = o[ns[i]] = o[ns[i]] || v;
  }
  return o;
}

//http://stackoverflow.com/a/8817473/828615
function deepValue(obj, path) {
  path = path.split('.');
  for (var i = 0, len = path.length; i < len; i++) {
    obj = obj[path[i]];
  }
  return obj;
}

function md5(value) {
  return crypto.createHash('md5').update(value).digest('hex');
}