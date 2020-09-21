<template>

    <div id="home">
         <swiper :loubotuList="loubotuList" :isfull="true"></swiper>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		                 <router-link to="/home/news">
                            <img src="../../image/menu1.png" alt=""/>
		                    <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/photolist">
		                    <img src="../../image/menu2.png" alt=""/>
		                    <div class="mui-media-body">图片分享</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		               <router-link to="/home/shoplist">
                            <img src="../../image/menu3.png" alt=""/>
		                    <div class="mui-media-body">商品购买</div>
                         </router-link>
                            
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../image/menu4.png" alt=""/>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/menu5.png" alt=""/>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/menu5.png" alt=""/>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        
		</ul>
       
    </div>
   
</template>

    <script>
     //导入组件js
    import {Toast} from 'mint-ui';
    import swiper from './swiper.vue'
    export default {
        data() {
            return {
                loubotuList:[{id:1,img:'../../image/1.jpg'},
                {id:2,img:'../../image/2.jpg'},
                {id:3,img:'../../image/3.jpg'}
                ]
            }
        },
        components:{
               swiper
        },
        methods: {
            getLunbotu(){
                this.$http.get().then(result =>{
                    console.info("进入数据")
                    if(true){
                        this.loubotuList;
                    }else{
                        this.loubotuList = this.loubotuList;
                        this. show();
                    }
                })
            },
            show(){
                  return  Toast({
                        message:'加载轮播图数据失败！！！！',
                        position:'middle',
                        duration:2000,
                        iconClass:'oi oi-heart',
                        className:'mypsot'//自定义样式
                    });
                }
        },
        created() {
            this.getLunbotu();
        },
    }
    </script>


<style  scoped>
  
       ul{
           background-color: #ffffff !important;
       }
        ul li a img{
             width:70px !important;
             height: 70px !important;
         }
        
</style>