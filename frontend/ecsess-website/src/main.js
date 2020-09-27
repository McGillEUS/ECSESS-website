import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes.js";
import $ from "jquery";

Vue.config.productionTip = false;
window.$ = $;

Vue.use(VueRouter);
const router = new VueRouter({
	mode: "history",
	routes,
});

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
