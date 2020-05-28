<template>
    <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input ref="numbox"  @change="countChanged"  id="test" class="mui-input-numbox" type="number" value="1" />
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
	props:['max'],
	watch: {
		'max':function(newMax,oldMax){
			this.$refs.numbox.setOption(max(parseInt(newMax)));
		}
	},
    mounted(){
		mui(".mui-numbox").numbox();
	},
	methods: {
		countChanged(){
			
			this.$emit('getCount',parseInt(this.$refs.numbox.value));
		}
	},
}
</script>
<style scoped>

</style>