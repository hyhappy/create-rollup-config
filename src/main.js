
// import { post } from '@qnpm/cftool/src/fetch'
// import { cube } from './maths';

// // 只使用了 cube, 所以 maths 中的 square 会被 tree shaking 移除掉
// function foo(x) {
//   if (x) {
//     return cube(x);
//   }
//   return -1;
// }

// if (process.env.NODE_ENV !== 'production') {
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

import { a } from './test';

// export const test = '2'
// export default {
//     a:1
// }
function log() {
    console.log(a)
}
log()
// export const test2 = '12'