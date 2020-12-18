// 入口js
import Vue from 'vue'
import { Button } from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'

import './mock/mockServer'  // 加载mockServer即可
import loading from '../common/imgs/loading.gif'
import './filters' // 加载过滤器
 
// 注册全局组件标签
Vue.component(Button.name, Button)  // <mt-button>

//图片懒加载声明使用
Vue.use(VueLazyload, { //内部自定义一个指令lazy
    loading
})

new Vue({
    el: '#app',
    render: h => h(App),
    router, // 使用vue-router
    store, // 使用vuex

})