<template>
  <div>
      <h3>{{photoinfo.title}}</h3>
      <p class="subtitle">
        <span>发表时间:{{photoinfo.tiem | dataFormat }}</span>
        <span>点击次数:{{photoinfo.ck}}次</span>
      </p>
      <hr>
      <div class="content">

      </div>
      
  </div>
   

</template>
<script>
export default {
    data() {
        return {
            id:this.$route.params.id,
            list:[
                 {id :6,ck:2,title:"我是一支枪",imgUrl:"../../image/1.jpg",zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻1111",tiem:new Date()},
                 {id :1,ck:122,title:"我是一张图片",imgUrl:"../../image/2.jpg",zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻22222",tiem:new Date()},
                 {id :2,ck:342,title:"我是一架飞机",imgUrl:"../../image/3.jpg",zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻33333",tiem:new Date()},
                 {id :3,ck:221,title:"我是一个宝玉",imgUrl:"../../image/1.jpg",zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻44444",tiem:new Date()},
                 {id :4,ck:267,title:"我是一小猪猪",imgUrl:"../../image/2.jpg",zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻55555",tiem:new Date()},
                 {id :5,ck:55,title:"我是一个小级",imgUrl:"../../image/3.jpg",zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻16666",tiem:new Date()}
            ],
            photoinfo:{}
        }
    },
    methods: {
        getPhotoInfos(){
            var newList =this.list.filter(item => item.id == this.id);
            this.photoinfo=newList[0];
        }
    },
    created() {
        this.getPhotoInfos();
    }
}
</script>
<style scoped>
  
</style>