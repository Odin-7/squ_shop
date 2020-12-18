/* 
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'


// import Msite from '../pages/Msite/Msite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'

const Msite = ()=> import('../pages/Msite/Msite.vue')
const Search = ()=> import('../pages/Search/Search.vue')
const Order = ()=> import('../pages/Order/Order.vue')
const Profile = ()=> import('../pages/Profile/Profile.vue')

import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
 
// 声明使用插件
Vue.use(VueRouter)

// 向外暴露
export default new VueRouter({
    // 所有路由
    router: [
        {
            path: '/msite',
            component: Msite, // 返回路由组件的函数,只有执行此函数的时候才会加载路由组件,这个函数在请求对应的路由路径的时候才会执行(而且是第一次)
            meta: {
                showFooter:true,
            }
        },{
            path: '/search',
            component: Search,
            meta: {
                showFooter:true,
            }
        },{
            path: '/order',
            component: Order,
            meta: {
                showFooter:true,
            }
        },{
            path: '/profile',
            component: Profile,
            meta: {
                showFooter:true,
            }
        },
        // 默认显示
        {
            path: '/',
            redirect:'/msite'
        },{
            path: '/Login',
            component:Login
        },


        {
            path: '/Shop',
            component: Shop,
            children: [
                {
                    path: '/Shop/goods',
                    component:ShopGoods
                },{
                    path: '/Shop/ratings',
                    component:ShopRatings
                },{
                    path: '/Shop/info',
                    component:ShopInfo
                }, 
                {
                    path: '',
                    redirect:'/Shop/goods'
                },
            ]
        },
    ]
})