//j是项目的js入口文件
import $ from 'jquery';
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import MintUI from 'mint-ui'
Vue.use(MintUI)
//这里可以省略node_modules这一层目录
import 'mint-ui/lib/style.css'
//导入bootstarp图标
import 'bootstrap/dist/css/bootstrap.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'
import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'

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
        
  })

var vm =new Vue({
  el:'#app',
  render:c => c(app),
  router
})