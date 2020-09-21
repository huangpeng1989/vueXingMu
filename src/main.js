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


//每次进入网站的时候，在网站本地内存中查询购物车中的对象数组。
var locaCar = JSON.parse(localStorage.getItem("car") || '[]' );


  //定义全局变量数据，通过Vuex来实现
  var store = new Vuex.Store({

        
       state:{
         //如果组件要调用这个里面的方法 只能使用this.$store.state.shopCarCount
          car:locaCar
                //将购物车中的商品数据，用一个数组存储起来，在car数组中，存领教一些商品对象，可以暂时将这个商品的属性设计成：
                //{id:1,count：4,price:4567.9,selected：false}
       },
       mutations:{
             //如果要操作的state中的值，只能通过mutations的方法，才能操作，
             //因为，万一导致数据混乱，不能快速定位问题
             //如果组件要调用这个里面的方法 只能使用this.$store.commit(‘方法名’)
             //方法只能支持两个参数，第一个是state，第二个是我们要传的参数，可以是对象，数据。
           
             addToCar(state,goodsinfo){
                 var flag = false;
                 state.car.some(itme =>{
                    
                     if(itme.id == goodsinfo.id){
                         itme.count =itme.count+goodsinfo.count;
                         flag = true;
                         return true;
                     }
                 });
                 if(!flag){
                    state.car.push(goodsinfo);
                 }
                 //当更新car之后，把car存储到本地的localStorage中去，为了防止每次
                 //刷新网页sate 中的数据会清空的情况
                 localStorage.setItem('car',JSON.stringify(state.car));

             },
             updateGoodsInfo(state,goodsinfo){
                 state.car.some(item => {
                    if(item.id == goodsinfo.id){
                         item.count= goodsinfo.count;
                         return true;
                    }
                 });
                 localStorage.setItem('car',JSON.stringify(state.car));
             },
             removeCar(state,id){
                  state.car.some((item,i) =>{
                    if(item.id == id){
                      state.car.splice(i,1);
                      return true;
                    } 
                  });
                  localStorage.setItem('car',JSON.stringify(state.car));
             },
             udpateGoodsSelected(state,info){
                state.car.some(item => {
                  if(item.id == info.id){
                      item.selected= info.selected;
                      return true;
                  }
                });
                localStorage.setItem('car',JSON.stringify(state.car));
             }
       },
       getters:{
         //这里只负责对外提供数据，不负责修改数改，如要修改，请去找mutations里面的方法
        // 如果组件要调用这个里面的方法 只能使用this.$store.getters.optCounts
        //不会修改原数据，都是把原数据进行了一层包装，提供给了调用者
         optCounts:function(state){
              var sum = 0 ;
              state.car.forEach(item =>{
                if(item.selected){
                  sum +=item.count;
                }
              })
               return sum;
         },
         getGoodsCount(state){
           var o= {};
           state.car.forEach(item =>{
             o[item.id]= item.count;
           });
           return o;
         },
         getGoodsSelected(state){
            var o ={}
            state.car.forEach(item =>{
              o[item.id]= item.selected;
            });
            return o;
         },
         getGoodsCountAndAmout(state){
            var o = {
              count:0,
              amount:0
            }
            state.car.forEach(item =>{
                 if(item.selected){
                   o.count += item.count;
                   o.amount += item.count * item.price
                 }
            });
            return o;
         }

       }
  });





var vm =new Vue({
  el:'#app',
  render:c => c(app),
  router,
  store
})