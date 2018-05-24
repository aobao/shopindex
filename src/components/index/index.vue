<template>
   <div>
     <myhead></myhead>
     <router-view></router-view>
     <myfoot></myfoot>
    </div>
</template>
<script>
import myhead from '../common/myhead'
import myfoot from '../common/myfoot'
export default {
    name:'top',
    components: {
    'myhead': myhead,
    'myfoot': myfoot
  },
  data(){
    return{

    }
  }
}
</script>
<style lang="scss" scoped>

</style>
