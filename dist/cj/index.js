'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const someOtherShit = () => {
  Promise.resolve().then(function () { return require('./deleteIcon.js'); }).then((r) => r());
  console.log('hui');
};

const someTestFunction = () => {
  Promise.resolve().then(function () { return require('./deleteIcon.js'); }).then((r) => r());
  console.log('someTestFunction');
};

exports.someOtherShit = someOtherShit;
exports.someTestFunction = someTestFunction;
