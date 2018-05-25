<template>   
    <div class="main">
        <div class="carstart">
            <div class="carimg">
               <img src="../../assets/img/mycar.png" alt="">
            </div>
            <div class="step">
               <el-steps :active="active" finish-status="success" space='100px'>
                    <el-step title="查看购物车"></el-step>
                    <el-step title="确认订单"></el-step>
                    <el-step title="支付订单"></el-step>
                    <el-step title="订单完成"></el-step>                   
                </el-steps>
                <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
            </div>
        </div>
        <div class="shopcar">
          <div class="title">
              <div class="allselect">
               <input type="checkbox"  > 全选
              </div>
              <div class="list">
                 <p>商品图片</p>
                 <span>PHOTO</span>
              </div>
              <div class="list">
                  <p>商品名称</p>
                 <span>NAME</span>
              </div>
              <div class="list">
                   <p>商品数量</p>
                 <span>COUNT</span>
              </div>
              <div class="list">
                   <p>商品单价</p>
                 <span>PRICE</span>
              </div>
              <div class="list">
                  <p>商品小计</p>
                 <span>SUBMI</span>
              </div>
              <div class="list">
                  <p>编辑</p>
                 <span>EDIT</span>
              </div>
          </div>
          <div class="shoplist">
              <div class="mycheck">
                  <input type="checkbox" >
              </div>
              <div class="shopimg">
                  <img src="../../assets/img/detail-jiu.png" alt="">
              </div>
              <div class="shopname">
                  <p>经典预调果味酒</p>
                  <h1>JKHLDIO;I</h1>
                  <p>普通 6瓶装</p>
              </div>
              <div class="price">
                  <span>587</span>
              </div>
              <div class="mun">
                  <p>
                        <el-button  circle>-</el-button>
                         <el-button round>1</el-button>
                          <el-button circle>+</el-button>
                  </p>
              </div>
          </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
             active: 0
        }
    },
    methods: {
      next() {
        if (this.active++ > 3) this.active = 0;
      }
    }
}
</script>
<style lang="scss" scoped>
   .main{
       width: 855px;
       height: auto;
       margin:0 auto;
       margin-top: 40px;
       .carstart{
           width: 100%;
           height: 140px;
           .carimg{
               float:left;
               width: 240px;
               height: 100%;
               img{
                   width: 100%;
               }
           }
           .step{
               float: right;
               width: 500px;
               height: 140px;
           }
       }
       .shopcar{
           width: 100%;
           height: auto;
           border:1px solid #888;
           border-radius: 5px;
           .title{
               width:100%;
               height: 30px;
               padding: 20px 0;
               border-bottom:1px solid #888;
               .allselect{
                   width: 80px;
                   height: 100%;
                   margin-left:20px;
                   float: left;
               }
               >.list{
                   width: 121px;
                   height: 100%;
                   float: left;
                   position: relative;
                   padding-left: 3px;
                   p{
                       font-size: 16px;
                       margin-left: 10px;

                   }
                   span{
                       font-size: 12px;
                       color:#b0b1c3;
                       margin-left: 10px;
                   }
                   &::after{
                     position: absolute;
                     content:'';
                     top: 0;
                     left:0;
                     width: 2px;
                     height: 40px;
                     background: #b0b1c3;
                   }
               }
           }
       }
       .shoplist{
           height: 150px;
           width: 100%;
           display: flex;
           justify-content: space-between;
           .mycheck{
               width:80px;
               height: 100px;
           }

       }
   }
</style>
