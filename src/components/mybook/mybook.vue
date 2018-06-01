<template>
   
    <div class="main">
       <div class="title">
           <div class="t-leftimg">
             <img src="../../assets/img/order.png" alt="">
           </div>
           <div class="t-rightimg">
               <img src="../../assets/img/order2.png" alt="">
           </div>
       </div>
      <div class="address">
          <div class="ad-title">
               <img src="../../assets/img/selectadd.png" alt="">
          </div>
          <div class="ad-con">
                  <div class="ad-card">
                      <div class="cardimg">
                          <img src="../../assets/img/order3.png" alt="">
                      </div>
                     <div class="cardcon">
                         <h1>张佳佳 ZHANGJIAJIA</h1>
                         <P>山西省太原市小店区</P>
                         <h2>平阳路学府街开通大厦</h2>
                         <span>1572518927</span>
                         <div class="card-bot">
                             <div class="card-left">
                                 <el-button type='mini'>默认地址</el-button>
                             </div>
                             <div class="card-right">
                                 <i class="el-icon-edit"></i>
                                <i class="el-icon-delete"></i>
                             </div>
                         </div>
                     </div>
                  </div>
                  <div class="card">
                      <div class="carimg">
                          <img src="../../assets/img/toadd.png" alt="">
                      </div>
                  </div>
                 
           </div>
      </div>
      <div class="sure-add">
          <div class="ad-title">
               <img src="../../assets/img/selectadd.png" alt="">
          </div>
          <div class="shop-list">
              <div class="shop-title">
                  <img src="../../assets/img/tiao.png" alt="">
              </div>
              <div class="list-every">
                  <div class="every-img">
                      <img src="../../assets/img/detail-jiu.png" alt="">
                  </div>
                  <div class="every-name">
                      酒家何处有
                  </div>
                  <div class="every-price">
                      12$
                  </div>
                  <div class="every-nub">
                      21
                  </div>
                  <div class="every-sub">
                      234
                  </div>
              </div>
          </div>
      </div>

      <div class="bottom">
       <div class="b-left">
         一共<span>7</span>   件
       </div>
       
       <div class="b-right">
         合计<span>799</span>  RMB
       </div>
       <div class="b-btn">
           <el-button type="danger" @click='$router.push("/pay")'>支付订单</el-button>
       </div>
      </div>

    </div>

</template>
<script>

export default {
    name:'book'
}
</script>
<style lang="scss" scoped>
   .main{
       width: 855px;
    //    height: 170px;
       margin:0 auto;
       .title{
           width: 100%;
           height: 170px;
           .t-leftimg{
               width: 400px;
               height: 100%;
               float: left;
               img{
                   width: 100%;
               }
           }
           .t-rightimg{
              width: 400px;
              height: 170px;
              float:right;
              img{
                  widtth:100%;
              } 
           }
       }
       .address{
           width: 100%;
        //    height: 500px;
           margin-bottom:20px;
          .ad-title{
              width: 100%;
              height: 34px;
              img{
                  width: 100%;
              }
          }
          .ad-con{
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-wrap: wrap;
              .ad-card{
                  position: relative;
                  width: 258px;
                  height: 190px;
                  margin:40px 0;
                  .cardimg{
                      position: absolute;
                      width: 100%;
                      img{
                          width: 100%;
                      }
                  }
                  .cardcon{
                      position: absolute;
                      top:0;
                      left:0;
                      width: 238px;
                      height: 160px;
                      padding-left: 20px;
                      padding-top:30px;
                      font-size: 14px;
                      p{
                          margin-top:30px;
                          color:#888;
                          
                      }
                      span{
                          font-size: 16px;
                      }
                      h2{
                      }
                      .card-bot{
                          .card-left{
                              float: left;
                          }
                          .card-right{
                              float: right;
                              margin-right:20px;
                              font-size: 20px;
                          }
                      }
                  }
              }
          }
       }
       .sure-add{
           width: 100%;
          .shop-list{
              width: 100%;
            //   height: auto;
              border:#aaa 2px solid;
              border-radius: 5px;
              margin:20px 0;
              .shop-title{
                  width: 98%;
                  height: 70px;
                  img{
                      width: 100%;
                  }
              }
              .list-every{
                  width: 100%;
                  height: 150px;
                  border-top:#ddd 1px solid;
                  display: flex;
                  justify-content: space-around;
                  align-items: center;
                 .every-img{
                     width: 90px;
                 }
                 .every-name{
                     width: 160px;
                 }
                 .every-price{
                     width:100px;

                 }
                 .every-nub{
                     width:80px;
                 }
                 .every-sub{
                     width: 100px;
                     color:red;
                 }
                  
              }
          }
       }
       .bottom{
           width: 100%;
           height: 80px;
           border:#888 2px solid;
           margin-bottom:20px;
           display: flex;
           justify-content: space-around;
           align-items: center;
           .b-left{
               span{
                   font-size: 18px;
                   color:#000;
               }
           }
           .b-right{
               span{
                   font-size: 20px;
                   color:red;
               }
           }
       }
   }    
</style>
