<template>
   <div class="myfoot">
         <div class="shadow">
            <div class="innerwidth">
               <div class="footnav">
                  <div class="navleft">
                     <img src="../../assets/img/foot2.png" alt="">
                  </div>
                  <div class="navright">
                        <div class="navr-t">
                              <ul v-for="(val,index) in foot" :key="index">
                                   <div class="footi">
                                      <span>
                                         <router-link to="">
                                             {{val.title}}
                                         </router-link>
                                      </span>
                                   </div>
                                    <li>
                                       <span>
                                          <router-link to="">
                                             {{val.desc1}}
                                          </router-link>
                                       </span>
                                    </li>
                                    <li>
                                       <span>
                                          <router-link to="">
                                             {{val.desc2}}
                                          </router-link>
                                       </span>
                                    </li>
                                    <li>
                                       <span>
                                          <router-link to="">
                                             {{val.desc3}}
                                          </router-link>
                                       </span>
                                    </li>
                                    <li>
                                       <span>
                                          <router-link to="">
                                             {{val.desc4}}
                                          </router-link>
                                       </span>
                                    </li>
                              </ul>
                        </div>
                        <div class="navr-f">
                              <div class="phone">
                                 <span>400-850-6060</span>
                              </div>
                              <div class="time">
                                 <span>周一到周日 9:00-21:00 13:00-21:00</span>
                              </div>
                              <div class="contact">
                                 <span>
                                    <router-link to="">
                                            联系我们
                                    </router-link>
                                 </span>
                              </div>
                        </div>
                  </div>
               </div>
               <div class="foots">
                  <div class="bar"></div>
                  <div class="foots_font">
                     <span>Copyright@2014-2018 杭州REALIST食品科技有限公司 版权所有 粤ICP备 09063759号-2</span>
                  </div>
               </div>
            </div>
         </div>
   </div>
</template>
<script>

export default {
    name:'myfoot',
    data(){
        return{
            foot:[
                {title:"关于REALIST",desc1:"REALIST品牌",desc2:"联系REALIST",desc3:"加入REALIST",desc4:""},
                {title:"产品及服务",desc1:"鸡尾酒",desc2:"红酒",desc3:"啤酒",desc4:""},
                {title:"REALIST家族",desc1:"微熏系列",desc2:"本味系列",desc3:"强爽系列",desc4:"S 罐系列"},
                {title:"关注我们",desc1:"官方微信",desc2:"",desc3:"",desc4:""},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .myfoot {
        width: 100%;
        height: 479px;
    //    position: absolute;
       left: 0;
       right: 0;
       bottom: 0;
       margin: auto;
        background-image: url("../../assets/img/foot1.png");
        background-size: 100%;
         overflow: hidden;
         .shadow{
            width: 1143px;
            height: 376px;
            background: rgba(0, 0, 0, 0.84);
            margin: 54px auto 0px;
            .innerwidth{
               width: 855px;
               height: 100%;
               margin: 0 auto;
               .footnav{
                  width: 100%;
                  height: 310px;
                  /*background: red;*/
                  .navleft{
                     float: left;
                     width: 161px;
                     height: 241px;
                     margin-top: 60px;
                     margin-left: 36px;
                     img{
                        width: 100%;
                     }
                  }
                  .navright{
                     float: right;
                     width: 633px;
                     height: 100%;
                     /*background: #81dfff;*/
                     .navr-t{
                        width: 100%;
                        height: 187px;
                        position: relative;
                        /*background: #00B7FF;*/
                        /*display: flex;*/
                        /*justify-content: space-around;*/
                        ul{
                           position: absolute;
                           float: left;
                           width: 143px;
                           height: 100%;
                           /*background: #7c99e1;*/
                           padding: 0px 6px;
                           box-sizing: border-box;
                           .footi{
                              margin-top: 33px;
                              margin-bottom: 28px;
                              width: 100%;
                              height: 20px;
                              span{
                                 a{
                                    width: 100%;
                                    height: 100%;
                                    display: block;
                                    font-size: 18px;
                                    color: #dfdede;
                                 }
                              }
                           }
                           li{
                              width: 100%;
                              height: 22px;
                              span{
                                 a{
                                    width: 100%;
                                    height: 100%;
                                    display: block;
                                    font-size: 10px;
                                    color: #949293;
                                 }
                              }
                           }
                        }
                        ul:nth-child(2){
                           float: left;
                           left: 192px;
                        }
                        ul:nth-child(3){
                           float: left;
                           left: 368px;
                        }
                        ul:nth-child(4){
                           float: left;
                           left: 568px;
                        }
                     }
                     .navr-f{
                        width: 100%;
                        height: 123px;
                        /*background: #49ffe2;*/
                        position: relative;
                        .phone{
                              position: absolute;
                              right: 0;
                              width: 185px;
                              span{
                                 font-size: 24px;
                                 color: #ffffff;
                              }
                        }
                        .time{
                           position: absolute;
                           top: 33px;
                           right: 0;
                           width: 195px;
                           span{
                              font-size: 10px;
                              color: #cccccd;
                           }
                        }
                        .contact{
                           position: absolute;
                           right: 1px;
                           top: 68px;
                           width: 151px;
                           height: 32px;
                           background: #19111c;
                           text-align: center;
                           line-height: 32px;
                           border-radius: 10px;
                           span{
                              a{
                                 width: 100%;
                                 height: 100%;
                                 display: block;
                                 font-size: 16px;
                                 color: #cdcdce;
                              }

                           }
                        }
                     }
                  }
               }
               .foots{
                  width: 100%;
                  height: 66px;
                  .bar{
                     width: 100%;
                     height: 1px;
                     background: #cccaca;
                  }
                  .foots_font{
                     width: 100%;
                     height: 65px;
                     text-align: center;
                     line-height: 65px;
                     span{
                        font-size: 12px;
                        color: #6c696c;
                     }
                  }

               }
            }
         }
    }

</style>
