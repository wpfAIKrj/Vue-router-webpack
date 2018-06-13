// document.write('来自 main.js 的问候！')
import Vue from "vue"
import VueRouter from "vue-router"
import App from "./app.vue"
import routerConfig from "./router"
Vue.use(VueRouter)
const router = new VueRouter(routerConfig)
new Vue({
    el: "#app",
    router: router,
    render: h => h(App)
})
