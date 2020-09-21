<template>

    <div class="shopcar">
        <div class="goods-list">
            <div class="mui-card" v-for="(item,index) in info" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch @change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])" v-model="$store.getters.getGoodsSelected[item.id]"></mt-switch>
                        <img :src="src" />
                        <div id="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.new}}</span>
                                <numbox :id="item.id" :count="$store.getters.getGoodsCount[item.id]"></numbox>
                                <a href="#" @click.prevent="remove(item.id,index)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
		    </div>
        </div>
        
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jieshuang">
						<div class="left">
                             <p>总计不含运费</p>
                             <p>已勾选商品 <span class="red">{{$store.getters.getGoodsCountAndAmout.count}}</span> 件，
                             总价 ￥<span class="red">{{$store.getters.getGoodsCountAndAmout.amount}}</span></p>
                        </div>
                         <mt-button type="danger">去结算</mt-button>
					</div>
                   
				</div>
	    </div>
    </div>
   
</template>



<script>
import numbox from './shopcar_numbox.vue'
export default {
    data(){
           return {
               src:'../../image/1.jpg',
               infolist:[
				{id:1,src:'../../image/1.jpg',new:2567,old:3678,time:new Date(),count:34,
				 title:"华为Note16G双网通版",number:20190909},
                {id:2,src:'../../image/2.jpg',new:4567,old:5678,time:new Date(),count:54,
                 title:"小米（Mi）小米Note 16G双网通版",number:20190909},
                {id:3,src:'../../image/3.jpg',new:6567,old:9678,time:new Date(),count:3,
                 title:"苹果11 16G双网通版",number:20190909},
                {id:4,src:'../../image/1.jpg',new:4567,old:5678,time:new Date(),count:1,
                 title:"oppo Note 16G双网通版",number:20190909},
                {id:5,src:'../../image/2.jpg',new:4567,old:5678,time:new Date(),count:1,
                 title:"vivo 16G双网通版",number:20190909},
                {id:6,src:'../../image/3.jpg',new:4567,old:5678,time:new Date(),count:4,
                 title:"小米（Mi）小米 16G双网通版",number:20190909}
            ],
            info:[]
           }
    },
    components:{numbox},
    methods: {
        selectedChange(id,val){
            this.$store.commit("udpateGoodsSelected",{id:id,selected:val});
        },
       getGoodsList(){
            var idArr=[]
            this.$store.state.car.forEach(item =>
            idArr.push(item.id));

            this.infolist.forEach(item =>{
                idArr.forEach(id =>{
                    if(id == item.id){
                        this.info.push(item);
                    }
                })
            })
       },
       remove(goodsId,index){
             this.info.splice(index,1);
             this.$store.commit("removeCar",goodsId);
       }
    },
    created() {
        this.getGoodsList();
    },
    }
</script>
<style scoped>
     .shopcar{
        
         overflow: hidden;
     }

     .goods-list img {
         width: 60px;
         height: 60px;
     }
     .goods-list h1{
         font-size: 13px;
     }
     .goods-list .price{
         color: red;
         font-weight: bold;
     }
       .goods-list .mui-card-content-inner {
          display: flex;
          align-items:center ;
      }
      #info{
          display: flex;
          flex-direction: column;
          justify-content:space-between ;
      }
      .jieshuang{
          display: flex;
          justify-content: space-between;
          align-items: center;
      }
      .red{
          color: red;
          font-size: 16px;
          font-weight: bold;
      }
</style>