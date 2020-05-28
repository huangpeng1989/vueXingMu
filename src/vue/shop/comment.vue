<template>
    <div>
        <pinlu :id="id"></pinlu>
    </div>
</template>
<script>
import pinlu from '../news/pinlu.vue'
export default {
    data() {
        return {
             id:this.$route.params.id,
        }
    },
    components:{
        pinlu:pinlu
    }
}
</script>
<style scoped>

</style>