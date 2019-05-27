(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
'use strict';

var a = '12';

// import { post } from '@qnpm/cftool/src/fetch'
// import { cube } from './maths';
// // 只使用了 cube, 所以 maths 中的 square 会被 tree shaking 移除掉
// function foo(x) {
//   if (x) {
//     return cube(x);
//   }
//   return -1;
// }
// if ("development" !== 'production') {
//   console.log('-----');
// }
// class a {
//     test() {
//         post()
//     }
// }
// export default {
//   foo,
//   a
// };
// export default {
//     a:1
// }

function log() {
  console.log(a);
}

log(); // export const test2 = '12'
