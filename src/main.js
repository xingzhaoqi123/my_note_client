// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "./utils";
Vue.config.productionTip = false;
import store from './store'

Vue.prototype.$axios = axios;
Vue.use(ElementUI);
NProgress.inc(0.2);
NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach((to, from) => {
  NProgress.done();
});
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
