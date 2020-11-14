/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// @Copyright ~2020 ☜Samlv9☞ and other contributors
/// @MIT-LICENSE | 6.0 | https://developers.guless.com/
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "index",
        redirect: "/mandarin",
    },
    {
        path: "/mandarin",
        name: "mandarin",
        component: () => import(/* webpackChunkName: "mandarin" */"../views/mandarin.vue"),
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import(/* webpackChunkName: "cart" */"../views/contact.vue"),
    },
];

const router = new VueRouter({
    // mode: "history",
    // base: process.env.BASE_URL,
    routes,
});

export default router;
