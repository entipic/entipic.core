var external = module.exports;
var _ = require('lodash');

external.endsWith = function(text, suffix) {
  return text.indexOf(suffix, text.length - suffix.length) !== -1;
};

external.startsWith = function(text, prefix) {
  return text.indexOf(prefix) === 0;
};

external.countUpperLetters = function(text) {
  if (!text || text.length === 0) return 0;
  var count = 0;
  for (var i = text.length - 1; i >= 0; i--) {
    if (external.isLetter(text[i]) && text[i] === text[i].toUpperCase()) count++;
  }

  return count;
};

external.countLetters = function(text) {
  if (!text || text.length === 0) return 0;
  var count = 0;
  for (var i = text.length - 1; i >= 0; i--) {
    if (external.isLetter(text[i])) count++;
  }

  return count;
};

external.isLetter = function(s) {
  return s.toUpperCase() !== s.toLowerCase();
};

external.normalize = function(text) {
  if (!text) return text;

  text = text.replace(/\r/g, '');
  text = text.replace(/\t/g, ' ');
  text = text.replace(/\n{2,}/g, '\n');
  text = text.replace(/\s+\n/g, '\n');
  text = text.replace(/\n\s+/g, '\n');
  text = text.replace(/\n{2,}/g, '\n');
  text = text.replace(/ {2,}/g, ' ');

  return text.trim();
};

external.wrapAt = function(text, length) {
  if (!text || text.length <= length) return text;

  return text.substr(0, length - 3) + '...';
};

external.correct = function(text, lang) {
  if (!text) return text;
  if (lang === 'ro') {
    return replaceAll(OBJ_ROMANIAN_CORRECT, text);
  }
  return text;
};

external.toWords = function(s) {
  return s.split(/\s+/);
};

var OBJ_ROMANIAN_CORRECT = {
  'ș': /ş/g,
  'Ș': /Ş/g,
  'ț': /ţ/g,
  'Ț': /Ţ/g
};


function replaceAll(obj, text) {
  if (!text) return text;
  for (var prop in obj)
    text = text.replace(obj[prop], prop);
  return text;
}
