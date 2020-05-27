<template>
  <div id="photoinfo-cont">
      <h3>{{photoinfo.title}}</h3>
      <p class="subtitle">
        <span>发表时间:{{photoinfo.tiem | dataFormat }}</span>
        <span>点击次数:{{photoinfo.ck}}次</span>
      </p>
      <hr>

     
        <vue-preview :slides="list" @close="handleClose" >

        </vue-preview>

      <div class="content">
            {{photoinfo.zhaiyao}}
      </div>
      <pinlu :id="id"></pinlu>
  </div>
   

</template>
<script>
import pinlu from '../news/pinlu.vue'
export default {
    data() {
        return {
            id:this.$route.params.id,
            list:[
                 {h:400,w:600,id :6,ck:2,title:"我是一支枪",src:"../../image/1.jpg", msrc: '../../image/1.jpg',zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻1111",tiem:new Date()},
                 {h:400,w:600,id :1,ck:122,title:"我是一张图片",src:"../../image/2.jpg", msrc: '../../image/2.jpg',zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻22222",tiem:new Date()},
                 {h:400,w:600,id :2,ck:342,title:"我是一架飞机",src:"../../image/3.jpg", msrc: '../../image/3.jpg',zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻33333",tiem:new Date()},
                 {h:400,w:600,id :3,ck:221,title:"我是一个宝玉",src:"../../image/1.jpg", msrc: '../../image/1.jpg',zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻44444",tiem:new Date()},
                 {h:400,w:600,id :4,ck:267,title:"我是一小猪猪",src:"../../image/2.jpg", msrc: '../../image/2.jpg',zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻55555",tiem:new Date()},
                 {h:400,w:600,id :5,ck:55,title:"我是一个小级",src:"../../image/3.jpg", msrc: '../../image/3.jpg',zhaiyao:"这是一个新的新闻，我今天看到的第一条的新闻，但是这不是今天的最后一条新闻16666",tiem:new Date()}
            ],
            photoinfo:{}
        }
    },
    methods: {
        getPhotoInfos(){
            var newList =this.list.filter(item => item.id == this.id);
            this.photoinfo=newList[0];
        },
        handleClose () {
           console.log('close event')
        }
    },
    created() {
        this.getPhotoInfos();
    },
    components:{
          pinlu:pinlu
      }
}
</script>
<style scoped>
     h3{
         text-align: center;
         font-size: 15px;
         color:#26A2FF;
         font-weight: 700;
         margin: 15px 0;
         
     }
     .subtitle{
         display: flex;
         justify-content: space-between;
     }
     #photoinfo-cont{
         padding:5px;
     }
     .content{
         font-size: 13px;
         line-height: 30px;
     }
   
    
    </style>