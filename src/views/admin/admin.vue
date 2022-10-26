<template lang="">
    <div>
        <Navber></Navber>
       <router-view></router-view>  
    </div>
</template>
<script>
import Navber from '../../components/Navber.vue'
export default {
    components:{
      Navber
    }
}
</script>
<style lang="">
    
</style>