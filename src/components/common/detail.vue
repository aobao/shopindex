<template>
<div class="main">
  <div class="mytopbox">
   <div class="mylist">

   </div>
   <div class="detail">
       <div class="left"></div>
       <div class="right"></div>
   </div>
  </div>  
  <div class="max">
   <div class="detail">
      <div class="img">
          <img src="../../assets/img/detail-jiu.png" alt="">
      </div>
      <span>商品详情</span>
   </div>
  </div>
</div>
</template>
<script>
   
export default {
    
}
</script>
<style lang="scss" scoped>
 .main{
     width: 100%;
     height: auto;
     margin:0 auto;
     .mytopbox{
        width: 855px;
        height: auto;
        margin:0 auto;
        .mylist{
            width: 100%;
            height: 100px;
        }
        .detail{
            width: 100%;
            position: relative;
            height: 410px;
            .left{
              
            }
            .right{
                width: 675px;
                height: 410px;
                right:0;
                top:0;
            }
        }
     }
     .max{
         width:100%;
         height: 38px;
         padding-top:12px;
         background: #b0b1c3;
         .detail{
             position: relative;
             width: 200px;
             height: 66px;
             margin:0 auto;
             margin-top:12px;
             background: #b9e6e0;
             text-align: right;
             .img{
                 width: 110px;
                 height: 120px;
                 position: absolute;
                 top:-36px;
                 left:-16px;
                 img{
                     width: 100%;
                 }
             }
             span{
             font-size: 20px;
             color:#fff;
             line-height: 66px;
             margin-right: 24px;
            }
         }
         
     }
 }
</style>
