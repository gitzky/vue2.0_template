import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

// 引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import "@/assets/css/index.scss";
// import "./assets/fonts/iconfont.css";
// import "./assets/fonts/syst.css";

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");

