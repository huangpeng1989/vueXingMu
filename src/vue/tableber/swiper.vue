<template>
    <div>
         <mt-swipe :auto="4000">

            <mt-swipe-item v-for="item in loubotuList" :key="item.id">
                <img :class="{full:isfull}"  :src="item.img" alt=""/>
            </mt-swipe-item>
           
        </mt-swipe>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:[
        "loubotuList","isfull"
    ]
}
</script>
<style scoped>
    .mint-swipe{
          height: 200px;
      }
       .mint-swipe-item:nth-child(1){
           background-color: rgb(44, 145, 158);
       }
       .mint-swipe-item:nth-child(2){
           background-color: rgb(0, 255, 76);
       }
       .mint-swipe-item:nth-child(3){
           background-color: rgb(39, 29, 184);
       }
       .mint-swipe-item img{
           
           height: 100%;
       }
       .full{
           width: 100%;
       }
</style>