<template>
   
<div class='main'>
  <div class="title">
    <div class="title-left">
        <img src="../../assets/img/payway.png" alt="">
    </div>
     <div class='title-right'>
         <img src="../../assets/img/payway2.png" alt="">
     </div>
  </div>
  <div class="con">
      <div class="con-top">
          <img src="../../assets/img/payway7.png" alt="">
      </div>
      <div class="ul">
          <ul>
              <li>您的订单已生成成功分钟，我们会为您保留订单 <span>30</span>分钟 请及时付款，以免自动取消您的订单。</li>
              <li> <p>订单编号：1220539849328340</p>
              <p>应付金额：5,373元支付方式：在线支付    配送方式：默认快递</p></li>
              <li>付款方式</li>
          </ul>
          <p>选择银行付款</p>
          <div class="bank">
              <img src="../../assets/img/payway4.png" alt="">
          </div>
          <p>选择第三方支付</p>
          <div class='third'>
              <img src="../../assets/img/payway5.png" alt="">
          </div>   
          <div class="gopay">
              <el-button type='danger'>去付款</el-button>
          </div>
      </div>
  </div>
  
</div>
</template>
<script>

export default {
    name:'pay'
}
</script>
<style lang="scss" scoped>
   .main{
       width: 855px;
       margin:0 auto;
       .title{
           width: 100%;
        //    height: 243px;
           display: flex;
           justify-content: space-between;
           .title-left{
               width: 400px;
            //    height: 243px;
               img{
                   width: 100%;
               }
           }
           .title-right{
               width:400px;
            //    height: 243px;
               img{
                   width:100%;
               }
           }
       }
       .con{
           width: 100%;
           .con-top{
               width: 100%;
               height: 40px;
               img{
                   width:100%;
               }
           }
           .ul{
               ul{
                   list-style: disc;
                   li{
                       width: 100%;
                       height: 50px;
                       font-size: 20px;
                       span{
                           font-size:24px;
                       }
                       p{
                           font-size:14px;
                           color:#888;
                       }
                   }
               }
               .bank{
                   width: 100%;
                   height: 200px;
                   margin:10px 0;
                   img{
                       width: 100%;
                   }
               }
               p{
                   font-size:20px;
                   line-height: 20px;
               }
               .third{
                   width: 100%;
                   height: 50px;
                   margin:10px 0;
                   img{
                       width:100%;
                   }
               }
               .gopay{
                   width: 100px;
                   height: 90px;
                   margin:0 auto;
               }
           }
       }
   }
</style>
