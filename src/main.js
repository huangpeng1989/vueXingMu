//j是项目的js入口文件
import $ from 'jquery';
//import Vue from '../node_modules/vue/dist/vue.js'
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

import app from './App.vue'



var vm =new Vue({
  el:'#app',
  render:c => c(app)
})