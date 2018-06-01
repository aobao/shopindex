<template>
   <div>
     <myhead></myhead>
     <router-view></router-view>

     <!-- <div class="foot"></div> -->
     <!-- <div class="footer"> -->
     <myfoot></myfoot>
     <!-- </div> -->
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
    .foot{
        width: 100%;
        height: 479px;
    }
    .footer{
        width: 100%;
        height: auto;
        position: relative;
        bottom: 0;
    }
</style>
