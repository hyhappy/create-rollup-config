(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Main = factory());
}(this, (function () { 'use strict';

// This function isn't used anywhere, so
// Rollup excludes it from the bundle...
const PI = 3.14;



// This function gets included
function cube(x) {
  return x * x * x * PI;
}

function foo(x) {
  if (x) {
    return cube(x);
  }
  return -1;
}

{
  console.log('-----');
}

var main = {
  foo
};

return main;

})));
