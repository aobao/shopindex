<template>   
    <div class="main">
      <div class="title">
          <div class="left">
              <div class="imgbox">
                  <img src="../../assets/img/bg-green.png" alt="">
                  <span>首页</span>
              </div>
              <div class="imgbox">
                  <img src="../../assets/img/gray.png" alt="">
                  <span>个人中心</span>
              </div>
               
          </div>
      </div>
      <div class="cont">
         <div class="left">
           <div class="head">
               <div class="myhead">
                   <img src="../../assets/img/test.gif" alt="">
               </div>
               <div class="nick">
                   <span>我就是我</span>
               </div>
           </div>
          <ul>
              <li>订单ORDER</li>
              <li class="active"> 我的订单</li>             
          </ul>
          <ul>
              <li>个人信息DATA</li>
              <li>编辑个人资料</li>
              <li>地址管理</li>
          </ul>
         </div>
         <div class="right">
            <div class="title">
               <div class="list">
                   <div class="book">所有订单</div>
                   <div class="book"><router-link to=''>历史订单</router-link></div>
                   <div class="book"><router-link to=''>完成订单</router-link></div>                    
               </div>               
            </div>
            <div class="arcitle">
                <div class="title">
                    <div class="info">商品信息<p>INFO</p></div>
                    <div class="price">价格<p>PRICE</p></div>
                    <div class="mun">数量<p>muber</p></div>
                    <div class="sub">小计<p>SUBTOTLE</p></div>
                    <div class="status">状态<p>STATUS</p></div>
                    <div class="option">操作<p>OPTION</p></div>
                </div>
                <template v-for='i in 9'>
                    <div class="shopli">
                      <div class="li-img">
                          <img src="../../assets/img/test.gif" alt="">
                      </div>
                      <div class="li-info">
                          <div class="li-info-top">经典鸡尾酒预调果味</div>
                          <div class="li-info-en">INFOTHEWAY</div>
                          <div class="li-info-bottom">香橙味  <span>6瓶装</span></div>
                      </div>
                      <div class="li-price">
                          89
                      </div>
                      <div class="li-price li-mun">
                          57
                      </div>
                      <div class="li-price li-sub">
                          2861
                      </div>
                      <div class="li-price li-status">
                          已收货
                      </div>
                      <div class="li-price li-option">
                          <div class="sure">
                              确认收货
                          </div>
                      </div>
                    </div>
                </template>
                
            </div>
            <!-- <div class="page">
                 <div class="forword">
                     上一页
                 </div>
                 <div class="mypage">
                     <ul>
                         <li>1</li>
                         <li>2</li>
                         <li>3</li>
                         <li>4</li>
                         <li>5</li>
                     </ul>
                 </div>  
                 <div class="next">
                     下一页
                 </div>   
            </div> -->
         </div>
      </div>
    </div>
</template>
<script>

export default {
    name:'mycenter'
}
</script>
<style lang="scss" scoped>
   .main{
       width: 855px;
       height: auto;
       margin:0 auto;
       margin-bottom:30px;
       .title{
           width: 100%;
           height:30px;
           margin:30px 0;
           .left{
               width: 100%;
               .imgbox{
                   width: 95px;
                   height: 30px;
                   float: left;
                   text-align: center;
                   position: relative;
                   margin-left: 10px;
                   span{
                       position: absolute;
                       top:-3px;
                       left:4px;
                      font-size: 14px;
                      color:#fff;
                      line-height: 30px; 
                      z-index: 20;
                   }
                   img{                      
                       width: 100%;
                   }
               }
           }
       }
       .cont{
           width: 100%;
        //    height: 1000px;
           height: auto;
        //    margin-bottom:20px;
           position: relative;
           >.left{
               width: 196px;
               float: left;
               height: auto;
               border:1px solid #aaa;
               border-radius: 5px;
               .head{
                   width: 76px;
                   height:130px;
                   padding:20px 60px;
                   .myhead{
                       width: 76px;
                       height: 76px;
                       border-radius: 50%;
                       margin-bottom:20px;
                       img{
                           width: 100%;
                           border-radius: 50%;
                       }

                   }
                   >.nick{                       
                       width: 76px;
                       height: 34px;
                       text-align: center;
                       line-height: 34px;
                   }
               }
               >ul{
                   width: 100%;
                   li:first-of-type{
                       height: 34px;
                       border:none;
                       color:#fff;
                       background: #aaa;
                       line-height: 34px;
                   }
                   li{
                       width: 100%;
                       height: 60px;
                       position: relative;
                       text-align: center;
                       line-height: 60px;
                       border-bottom:1px solid #aaa;
                   }
                   li.active::after{
                      position: absolute;
                      content:'';
                      top:24px;
                      right:10px;
                      width: 0;
                      height: 0;
                      border-top: 5px solid transparent;
                      border-left: 5px solid black;
                      border-right: 5px solid transparent;
                      border-bottom: 5px solid transparent;
                      
                   }
               }
           }
           >.right{
               float: right;
               width: 620px;
               height: auto;
               margin-bottom:30px;
               >.title{
                   width: 100%;
                   height: 40px;
                   margin:0;
                   .list{
                       >div{
                           width: 104px;
                           height: 20px;
                           float:left;
                           text-align: center;
                           box-sizing: border-box;
                           color:#b0b1c3;
                           border-left:2px solid #d2d2d2;
                           a{
                               color:#797979;
                           }
                       }
                       >div:first-of-type{
                           border:none;
                       }
                   }
               }
               >.arcitle{
                 width: 100%;
                 height: auto;
                //  margin-bottom:30px;
                //  height: 600px;
                 border:2px solid #d2d2d2;
                 border-radius: 5px;
                 .title{
                     width: 540px;
                     height: 70px;
                     margin:0;
                     display: flex;
                     justify-content: space-around;
                     padding-left:60px;
                     >div{
                         float:left;
                         margin-top:15px;
                         font-size: 16px;
                         position: relative;
                         p{
                             font-size: 8px;
                         }
                         &::after{
                          position: absolute;
                          content:'';
                          width:4px;
                          height: 36px;
                          top:0;
                          left:-10px;
                          background-color: #d2d2d2;
                         }
                     }
                 }
                 .shopli{
                     >div{
                         float:left;
                     }
                     width: 100%;
                     height: 150px;
                     border-top:1px solid #d2d2d2;
                     .li-img{
                         width: 60px;
                         height: 100%;
                         img{
                             width: 100%;
                             height: 150px;
                         }
                     }
                     .li-info{
                         width: 100px;
                         height: 150px;
                         margin-left:10px;
                         .li-info-top{
                             margin-top:40px;
                             color:#a7a7a7;
                         }
                         .li-info-en{
                            font-size: 10px;      
                         } 
                         .li-info-bottom{
                             margin-top:20px;
                             color:#a7a7a7;
                         }
                     }
                     .li-price{
                         width: 85px;
                         height: 150px;
                         display: flex;
                         flex-direction: column;
                         justify-content: center;
                         align-items: center;
                     }
                     .li-mun{
                         color: #a7a7a7;
                     }
                     .li-sub{
                         color:#800;
                     }
                     .li-status{
                         color:#d2d2d2;
                     }
                     .li-option{
                         width: 80px;
                         height: 30px;
                         margin-top:60px;
                         border-radius: 6px;
                         background-color:#aaa;
                         color:#fff;
                         font-size:10px;
                         line-height: 24px;
                     }
                 }                 
               }
               .page{
                     width: 100%;
                     height: 50px;
                     margin:20px auto;
                     line-height: 20px;
                     font-size: 12px;
                     >div{
                         float: left;
                     }
                     .forword{
                         width:70px;
                         height: 20px;
                         border:1px solid #d2d2d2;
                         text-align: center;
                         margin-left: 150px;
                     }
                     .mypage{
                         ul{
                             list-style: none;
                             display: flex;
                             justify-content: space-between;
                             li{
                                 width: 20px;
                                 height: 20px;
                                 text-align: center;
                                 border:1px solid #d2d2d2;
                                 margin:0 5px;
                             }
                         }
                     }
                     .next{
                         width: 70px;
                         height: 20px;
                         border:1px solid #d2d2d2;
                         text-align: center;
                         color:#fff;
                         background: #bae6e1;
                     }
                 }
           }
       }
   }
</style>
