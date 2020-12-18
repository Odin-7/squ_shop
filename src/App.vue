<template>
    <div class="app">
        <!-- 上面是路由，下面是导航栏 -->
        <router-view></router-view>
        <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'
   
    export default{

        
        mounted(){
        //    this.$store.dispath('getAddress')
            this.getAddress()
            this.getUserInfo()
        },
        methods:{
            ...mapActions(['getAddress','getUserInfo'])
        },
        components:{
            // 映射成标签
            FooterGuide
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .app
        width 100%
        height 100%
        background #f5f5f5
    
</style>