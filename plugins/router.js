import Vue from 'vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// if(process.browser) {
//   if (/(iPhone|iPod|iOS|Android|ipad)/i.test(navigator.userAgent)) {
//     var equipment = "wap";
//   } else {
//     var equipment = "pc";
//   }
// }

export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
  });
  app.router.afterEach((to, from) => {
    console.log(to.path, 'to.path');
    if (process.env.NODE_ENV === 'production') {
      console.log = () => {};
    }
    NProgress.done();
  })
}