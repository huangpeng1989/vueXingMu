
<template>
    <div class="newsinfo-container">
         <h1 class="title">新闻详情</h1>
         <p class="subtitle">
             <span>发表时间:2020-05-25 23:45:12</span>
             <span>点击次数:13次</span>
         </p>
         <hr>
         <div class="content">
                  这是一个新的新闻，我今天看到的第一条的新闻，但是这不是
               今天的最后一条新闻。<br>
                  这是一个新的新闻，我今天看到的第一条的新闻，但是这不是
               今天的最后一条新闻。<br>
                  这是一个新的新闻，我今天看到的第一条的新闻，但是这不是
               今天的最后一条新闻。<br>
                  这是一个新的新闻，我今天看到的第一条的新闻，但是这不是
               今天的最后一条新闻。<br>
         </div>

        <pinlu :id="this.id"></pinlu>

    </div>
</template>


<script>
import pinlu from './pinlu.vue'

export default {
      data() {
          return {
              id:this.$route.params.id
          }
      },
      components:{
          pinlu:pinlu
      }
}
</script>
<style  scoped>
   .newsinfo-container{
            padding: 0px 4px;

   }
   .newsinfo-container .title{
           font-size: 16px;
           text-align: center;
           margin: 15px 0;
           color: red;

   }
   .subtitle{
       font-size: 13px;
       color: #226aff;
       display: flex;
       justify-content: space-between;
   }
       
</style>