var external = module.exports;

external.buildName = buildName;
external.deepValue = deepValue;

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
