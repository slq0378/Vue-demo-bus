import Vue from 'vue';
import router from './router.js'
import store from './store.js'
import App from './App.vue';
import VueBus from './vue-bus.js'
Vue.use(VueBus)

new Vue({
    el: '#app',
    router: router, // 引入路由
    store: store, // 引入状态管理
    render: h => h(App)
});