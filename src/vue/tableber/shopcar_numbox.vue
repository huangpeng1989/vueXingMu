<template>
    <div  class="mui-numbox" data-numbox-min="1" :data-numbox-max="19999">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input ref="numbox"  @change="countChanged"  id="test" class="mui-input-numbox" type="number" :value="count" />
					<button  class="mui-btn mui-btn-numbox-plus" type="button" disabled="">+</button>
	</div>
</template>
<script>
import mui from '../../lib/js/mui.min.js'
export default {
	data() {
		return {
		
		}
	},
    props:['count','id'],
    mounted(){
		mui(".mui-numbox").numbox();
	},
	methods: {
		countChanged(){	
            this.$store.commit("updateGoodsInfo",{id:this.id,count:this.$refs.numbox.value});
		}
	},
}
</script>
<style scoped>
   .mui-numbox{
       height: 25px ;
   }
</style>