/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// @Copyright ~2020 ☜Samlv9☞ and other contributors
/// @MIT-LICENSE | 6.0 | https://developers.guless.com/
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import Vue from "vue";
import App from "./app.vue";
import router from "./routers";
import store from "./store";
import "./components";

Vue.config.productionTip = false;

const root = new Vue({
    router,
    store,
    render: (h) => h(App),
});

root.$mount("#app");
