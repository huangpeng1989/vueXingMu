import VueRouter from 'vue-router'
import home from './vue/tableber/hoem.vue'
import member from './vue/tableber/member.vue'
import search from './vue/tableber/search.vue'
import shopcar from './vue/tableber/shopcar.vue'
import news from './vue/news/news.vue'
import newinfo from './vue/news/newinfo.vue'

var router = new VueRouter({
    routes:[
       {path:'/',redirect: '/home'},
       {path:'/home',component:home},
       {path:'/member',component:member},
       {path:'/shopcar',component:shopcar},
       {path:'/search',component:search},
       {path:'/home/news',component:news},
       {path:'/home/newinfo/:id',component:newinfo}
    ],
    linkActiveClass:'mui-active'
});

export default router;