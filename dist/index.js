'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _avatar = require('./module/avatar.module');

Object.keys(_avatar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _avatar[key];
    }
  });
});