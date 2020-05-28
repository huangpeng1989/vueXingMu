<template>
    <div>
        <div>
            <h3>{{shopdesc.title}}</h3>
        </div>
        <hr>
        <div class="content">
            <p>{{shopdesc.info}}</p> 
            <img :src="shopdesc.src"/>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id:this.$route.params.id,
        	infolist:[
				{id:1,src:'../../image/1.jpg',
				 title:"华为Note16G双网通版",info:"小米（Mi）小米 16G双网通版,  这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻11"},
                {id:2,src:'../../image/2.jpg',
                 title:"小米（Mi）小米Note 16G双网通版",info:"小米（Mi）小米 16G双网通版  这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻11"},
                {id:3,src:'../../image/3.jpg',
                 title:"苹果11 16G双网通版",info:"小米（Mi）小米 16G双网通版这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻11"},
                {id:4,src:'../../image/1.jpg',
                 title:"oppo Note 16G双网通版",info:"小米（Mi）小米 16G双网通版这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻11"},
                {id:5,src:'../../image/2.jpg',
                 title:"vivo 16G双网通版",info:"小米（Mi）小米 16G双网通版这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻11"},
                {id:6,src:'../../image/3.jpg',
                 title:"小米（Mi）小米 16G双网通版",info:"小米（Mi）小米 16G双网通版这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻11"}
            ]  ,
            shopdesc:{}  
        }
    },
    methods: {
        getShopDesc(){
            this.infolist=this.infolist.filter(item => item.id == this.id);
            this.shopdesc = this.infolist[0]
        }
    },
    created() {
        this.getShopDesc();
    },
}
</script>
<style scoped>
   h3{
       font-style: 16px;
       color: #226aff;
       text-align: center;
       margin: 15px 0 ;
   }
    .content{
        padding:4px;
    }
   .content img {
       width: 100%;
   }
</style>