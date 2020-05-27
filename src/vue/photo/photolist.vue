<template>
    <div>
          <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id==0 ? 'mui-active':'']" 
                        v-for="item in headList" :key="item.id" @click="getPotoListByCateId(item.id)">
							{{ item.headName }}
						</a>
						
					</div>
				</div>
			</div>

            <ul class="photo">
                <router-link tag="li" :to="'/home/photoinfo/'+item.id" v-for="item in newList" :key="item.id">
                    <img v-lazy="item.imgUrl">
                    <div class="info">
                        <h1 class="infotitle">{{item.title}}</h1>
                        <div class="body">{{item.zhaiyao}}</div>
                   </div>
                 </router-link>
            </ul>
    </div>
   
</template>
<script>
import mui1 from '../../lib/js/mui.min.js';


export default {
    data() {
        return {
            headList:[
                {id :0,headName:"全部"},
                {id :1,headName:"推荐"},
                {id :2,headName:"热点"},
                {id :3,headName:"北京"},
                {id :4,headName:"社会"},
                {id :5,headName:"娱乐"},
                {id :6,headName:"科技"}
            ],
            list:[
                 {id :6,title:"我是一张图片",imgUrl:"../../image/1.jpg",zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻11",type:1},
                 {id :1,title:"我是一张图片",imgUrl:"../../image/2.jpg",zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻11",type:2},
                 {id :2,title:"我是一张图片",imgUrl:"../../image/3.jpg",zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻11",type:3},
                 {id :3,title:"我是一张图片",imgUrl:"../../image/1.jpg",zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻11",type:4},
                 {id :4,title:"我是一张图片",imgUrl:"../../image/2.jpg",zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻11",type:5},
                 {id :5,title:"我是一张图片",imgUrl:"../../image/3.jpg",zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻11",type:6}

            ],
            newList:[]
        }
    },
    methods: {
        getPotoListByCateId(cateId){
            
            if(cateId == 0){
                this.newList=this.list;
            }else if(cateId == 1){
               this.newList=this.list.filter(item =>item.type==1);
            }else if(cateId == 2){
               this.newList=this.list.filter(item =>item.type==2);
            }
            else if(cateId == 3){
               this.newList=this.list.filter(item =>item.type==3);
            }
             else if(cateId == 4){
               this.newList=this.list.filter(item =>item.type==4);
            }
             else if(cateId == 5){
               this.newList=this.list.filter(item =>item.type==5);
            }
             else if(cateId == 6){
               this.newList=this.list.filter(item =>item.type==6);
            }
        }
    },
    mounted() {
        mui1('.mui-scroll-wrapper').scroll({
           deceleration:0.0004
        });
    },
    created() {
          this.getPotoListByCateId(0);
    }
    
}
</script>
<style scope>
   *{
       touch-action: pan-y;
   }
   img[lazy="loading"]{
         width: 40px;
         height: 300px;
         margin: auto;
   }
   .photo li{
       background-color: #ccc;
       text-align: center;
       margin-bottom: 10px;
       box-shadow: 0 0 10px #999;
       position: relative;

   }
   .photo{
       list-style-type: none;
       margin: 0px;
       padding: 10px;
       padding-bottom: 0px;
   }
   img{
       width: 100%;
       height: 300px;
   }
   .info{
       color:white;
       text-align: left;
       position: absolute;
       bottom: 0;
       background-color: rgba(0,0,0,0.4);
       max-height: 85px;
   }
   .infotitle{
       font-size: 14px;
   }
   .body{
         font-size: 13px;
   }
   
</style>