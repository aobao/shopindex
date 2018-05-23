<template>
   <div>
     <myhead></myhead>
     <main>ok </main>
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
  }
}
</script>
<style lang="scss" scoped>

</style>
