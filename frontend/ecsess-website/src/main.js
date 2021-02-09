import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes/routes.js";
import $ from "jquery";
import VueFormulate from '@braid/vue-formulate';

Vue.config.productionTip = false;
window.$ = $;

Vue.use(VueRouter);
const router = new VueRouter({
	mode: "history",
	routes,
});

Vue.use(VueFormulate);

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
