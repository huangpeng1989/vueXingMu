<template>
    <div class="goodinfo-cont">
		<transition
		    @before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter">
			
			<div ref="ball" class="ball" v-show="ballFlag">

		 </div>
		</transition>
		
       <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						 <swiper :loubotuList="imgs" :isfull="false"></swiper>
					</div>
				</div>
		</div>

        <div class="mui-card">
				<div class="mui-card-header">{{shopinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					    <p class="price">
                             市场价：<del>￥{{shopinfo.old}}</del>&nbsp;&nbsp;
							 销售价：<span class="newprice">￥{{shopinfo.new}}</span>
                            
						</p>
						<p>购买数量：<numbox :max="shopinfo.start" @getCount="getSelectedCount"></numbox></p>
						<p>
							<mt-button type="primary" size="small">
                                 立即购买
							</mt-button>
							<mt-button @click="addToShopCar" type="danger" size="small">
                                 加入购物车
							</mt-button>
						</p>
					</div>
				</div>
		</div>

         <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{shopinfo.number}}</p>
						<p>库存情况：{{shopinfo.start}}</p>
						<p>上架时间：{{shopinfo.time | dataFormat }}</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<mt-button @click="goDesc(id)"    type="primary" size="large" plain>图文介绍</mt-button>
					<mt-button @click="goComment(id)" type="danger" size="large" plain>商品评论</mt-button>
				</div>
		</div>


    </div>
</template>
<script>
import swiper from '../tableber/swiper.vue'
import numbox from './numbox.vue'
export default {
    data() {
        return {
			ballFlag:false,
            imgs:[{id:1,img:"../../image/1.jpg"},
                  {id:2,img:"../../image/2.jpg"},
                  {id:3,img:"../../image/3.jpg"},
            ],
			id:this.$route.params.id,
			infolist:[
				{id:1,src:'../../image/1.jpg',new:2567,old:3678,time:new Date(),start:34,
				 title:"华为Note16G双网通版",number:20190909},
                {id:2,src:'../../image/2.jpg',new:4567,old:5678,time:new Date(),start:54,
                 title:"小米（Mi）小米Note 16G双网通版",number:20190909},
                {id:3,src:'../../image/3.jpg',new:6567,old:9678,time:new Date(),start:3,
                 title:"苹果11 16G双网通版",number:20190909},
                {id:4,src:'../../image/1.jpg',new:4567,old:5678,time:new Date(),start:1,
                 title:"oppo Note 16G双网通版",number:20190909},
                {id:5,src:'../../image/2.jpg',new:4567,old:5678,time:new Date(),start:1,
                 title:"vivo 16G双网通版",number:20190909},
                {id:6,src:'../../image/3.jpg',new:4567,old:5678,time:new Date(),start:4,
                 title:"小米（Mi）小米 16G双网通版",number:20190909}
			],
			shopinfo:{},
			selectCoutn:1
        }
	},
	components:{swiper,numbox},
	
	created(){
	
		this.getShopInfo();
	},
	methods:{

		getSelectedCount(count){
			this.selectCoutn = count ;
		},

		getShopInfo(){
			this.infolist= this.infolist.filter(item => item.id == this.id);
            this.shopinfo = this.infolist[0];
		},
		goComment(id){
              this.$router.push({name:'comment',params:{
				id
			}})
		},
		goDesc(id){
            this.$router.push({name:'desc',params:{
				id
			}})
		},

		addToShopCar(){
			this.ballFlag = !this.ballFlag;
            var goodsinfo = {id:this.id,count:this.selectCoutn,price:this.shopinfo.new,selected:true}
	        this.$store.commit("addToCar",goodsinfo);
	
	},
		beforeEnter(el){
             el.style.transform="translate(0,0)"
		},
		enter(el,done){
			 el.offsetWidth;
			 const ball=this.$refs.ball.getBoundingClientRect();
			 const shu = document.getElementById("badge").getBoundingClientRect();
			 
			 const xDist = shu.left - ball.left;

			 const yDist = shu.top - ball.top;
			 el.style.transform=`translate(${xDist}px,${yDist}px)`;
			 el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)";
			 done();
		},
		afterEnter(el){
           this.ballFlag = !this.ballFlag;
		}

	}
	
}
</script>
<style scoped>
   .goodinfo-cont{
       background-color: #eee;
       overflow: hidden;
   }
   .newprice{
	   color:red;
   }
   .mui-card-footer{
	   display: block;
   }
   .mui-card-footer button{
        margin: 15px 0;
   } 
   .ball{
	   width: 20px;
	   height: 20px;
	   border-radius: 50%;
	   background-color: red;
	   position: absolute;
	   z-index: 99;
	   top:390px;
	   left: 146px;
   }
</style>