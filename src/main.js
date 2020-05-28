//j是项目的js入口文件
import $ from 'jquery';
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import MintUI from 'mint-ui'
Vue.use(MintUI)
import Vuex from 'vuex'
Vue.use(Vuex)



//安装图片预览
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
import 'mint-ui/lib/style.css'

//这里可以省略node_modules这一层目录
import 'mint-ui/lib/style.css'
//导入bootstarp图标
import 'bootstrap/dist/css/bootstrap.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'
import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'
import './lib/css/preview.css'
import app from './App.vue'

import  router from  './router.js'

import Resource from 'vue-resource'
Vue.use(Resource)



//定义时间过滤器
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss")
  { 
    var dt= new Date(dataStr);
    var y =dt.getFullYear();
    var m =(dt.getMonth()+1).toString().padStart(2,'0');
    var d=dt.getDate().toString().padStart(2,'0');
    var hh = dt.getHours().toString().padStart(2,'0');
    var mm = dt.getMinutes().toString().padStart(2,'0');
    var ss = dt.getSeconds().toString().padStart(2,'0');
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
        
  });

  //p定义全局变量数据，通过Vuex来实现
  var store = new Vuex.store({

        
       state:{
         //如果组件要调用这个里面的方法 只能使用this.$store.state.shopCarCount
          shopCarCount:0
       },
       mutations:{
             //如果要操作的state中的值，只能通过mutations的方法，才能操作，
             //因为，万一导致数据混乱，不能快速定位问题
             //如果组件要调用这个里面的方法 只能使用this.$store.commit(‘方法名’)
             //方法只能支持两个参数，第一个是state，第二个是我们要传的参数，可以是对象，数据。
       },
       getters:{
         //这里只负责对外提供数据，不负责修改数改，如要修改，请去找mutations里面的方法
        // 如果组件要调用这个里面的方法 只能使用this.$store.getters.optCounts
        //不会修改原数据，都是把原数据进行了一层包装，提供给了调用者
         optCounts:function(state){
               return state;
         }

       }
  });





var vm =new Vue({
  el:'#app',
  render:c => c(app),
  router,
  store
})