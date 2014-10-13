'use strict';

var debug = require('debug');
var qs = require('query-string');

module.exports = function enableDebug(debugIds, disableFirst) {
  debugIds = debugIds || [];

  if (disableFirst) {
    debug.disable();
  }

  var queryIds = qs.parse(window.location.search).debug;
  if (queryIds) {
    debugIds = debugIds.concat(queryIds.split(','));
  }

  debugIds.forEach(debug.enable);
};
