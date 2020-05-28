<template>
    
    <div class="goods-list"> 
        <div class="goods-item" v-for="item in shoplist" :key="item.id"
        @click="goshopinfo(item.id)">
             <img :src="item.src" />
             <h1 class ="title">{{item.title}}</h1>
             <div class="goodinfo">
                   <p class="price">
                        <span class="now">
                             ￥{{item.new}}
                        </span>
                        <span class="old">
                             ￥{{item.old}}
                        </span>
                   </p>
                   <p class="sell">
                         <span>
                            {{item.start}}
                        </span>
                        <span s>
                            剩{{item.shu}}件
                        </span>
                   </p>
             </div>
        </div>
        <mt-button type="danger" size="large" @click="add">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            img:"../../image/1.jpg",
            shoplist:[
                {id:1,src:'../../image/1.jpg',new:2567,old:3678,shu:45,start:'热卖中',
                 title:"华为Note16G双网通版"},
                {id:2,src:'../../image/2.jpg',new:4567,old:5678,shu:145,start:'热卖中',
                 title:"小米（Mi）小米Note 16G双网通版"},
                {id:3,src:'../../image/3.jpg',new:6567,old:9678,shu:245,start:'热卖中',
                 title:"苹果11 16G双网通版"},
                {id:4,src:'../../image/1.jpg',new:4567,old:5678,shu:345,start:'热卖中',
                 title:"oppo Note 16G双网通版"},
                {id:5,src:'../../image/2.jpg',new:4567,old:5678,shu:445,start:'热卖中',
                 title:"vivo 16G双网通版"},
                {id:6,src:'../../image/1.jpg',new:4567,old:5678,shu:545,start:'热卖中',
                 title:"小米（Mi）小米 16G双网通版"}
            ],
            id:7
        }
    },
    methods: {
        add(){
            var newshoplist= [{id:this.id++,src:'../../image/1.jpg',new:2567,old:3678,shu:45,start:'热卖中',
                 title:"华为Note16G双网通版"},
                {id:this.id++,src:'../../image/2.jpg',new:4567,old:5678,shu:145,start:'热卖中',
                 title:"小米（Mi）小米Note 16G双网通版"},
                {id:this.id++,src:'../../image/3.jpg',new:6567,old:9678,shu:245,start:'热卖中',
                 title:"苹果11 16G双网通版"},
                {id:this.id++,src:'../../image/1.jpg',new:4567,old:5678,shu:345,start:'热卖中',
                 title:"oppo Note 16G双网通版"},
                {id:this.id++,src:'../../image/2.jpg',new:4567,old:5678,shu:445,start:'热卖中',
                 title:"vivo 16G双网通版"},
                {id:this.id++,src:'../../image/1.jpg',new:4567,old:5678,shu:545,start:'热卖中',
                 title:"小米（Mi）小米 16G双网通版"}];
            this.shoplist=this.shoplist.concat(newshoplist) ;

        },
        goshopinfo(id){
            this.$router.push({
                name:"shopinfo",params:{id}
            })
        }
    },
}
</script>
<style scoped>
   .goods-list{
       display: flex;
       flex-wrap: wrap;
       padding: 8px;
       justify-content: space-between;
   }
   .goods-item{
       width:49%;
       border:  1px solid #ccc;
       box-shadow:0 0 8px #ccc ;
       margin:4px 0;
       padding: 2px;
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       min-height: 250px;
   }
   .goods-item img{
       width:100%;
       height: 130px;
   }
   .goods-item .title{
      font-size:14px;
   }
   .goods-item .goodinfo {
      background-color: #eee;
      
   }
   .goods-item .goodinfo p{
            margin: 0;
            padding: 5px;
   }
    .goods-item .goodinfo .sell{
    
     display: flex;
     justify-content: space-between;
     font-size: 13px;
      
   }
    .goods-item .goodinfo .now{
      color: red;
      font-size: 16px;
      font-weight: bold;
   }
    .goods-item .goodinfo .old{
         text-decoration: line-through;
         font-size: 12px;
         margin-left: 10px;
    }

</style>