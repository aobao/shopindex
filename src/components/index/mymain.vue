<template>
  <div id="main">
    <!--banner-->
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in banner" :key="item.id">
        <router-link :to="item.to">
          <img :src="item.image_url" style="width:100%;" alt="">
        </router-link>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>

    <!--新品尝鲜-->
    <div class="new">
      <div class="title">
        <img src="../../assets/img/mainnew_21.png" alt="">
      </div>
      <div class="drinkimg">
        <img src="../../assets/img/mainnew_18.png" alt="">
      </div>
      <ul>
        <li v-for='(item,index) in myfresh' :key='index'>
          <div class="liImg">
            <router-link to="">
              <img :src="JSON.parse(item.img)[0].url" alt="">
            </router-link>
          </div>
          <div class="liInfo">
            <div class="title">
              <h3>SLIGHTLY DRUNK</h3>
              <span>SERIES COCKTAILS</span>
            </div>
            <h3 class="name">{{item.name}}</h3>
            <span class="shortDesc">{{item.title}}</span>
            <p class="con">{{item.con}}</p>
            <p class="econ">
             {{item.econ}}</p>
            <h3 class="amount">{{item.amount}}*{{item.mun}}</h3>
            <span class="degra">{{item.degra}}</span>
            <div class="icon">
              <router-link to="">
                <i class="iconfont icon-02wodexiaofei"></i>
              </router-link>
              <router-link :to=/detail/+item.id>
                <i class="iconfont icon-gouwuche"></i>
              </router-link>
            </div>
            <div class="price">
              <span class="left">￥</span>
              <span class="right">{{item.price}}</span>
            </div>
          </div>
        </li>
        <!-- <li>
          <div class="liInfo">
            <div class="title">
              <h3>SLIGHTLY DRUNK</h3>
              <span>SERIES COCKTAILS</span>
            </div>
            <h3 class="name">微醺系列灌装预调酒</h3>
            <span class="shortDesc">微醺的小酒感 刚刚好的微甜</span>
            <p class="con">把新鲜水果融于口中，对于水果的要求，我们近乎苛刻精选当地新鲜水果
              原产地的榨汁，阳光与自然的果香与伏特加碰撞融合，清澈酸甜的口感在味蕾
              中来回翻滚，混合刚刚好的酒精度，轻松自在的微醺醉感。</p>
            <p class="econ">
              The fresh fruit is melted in the mouth, and for the requirement of the fruit, we have a near harsh selection of local fresh fruit.The origin of the juice, the sun and the natural fruit and vodka collide, a clear and sweet taste in the taste buds the rolling</p>
            <h3 class="amount">320ml*12听</h3>
            <span class="degra">3%vol</span>
            <div class="icon">
              <router-link to="">
                <i class="iconfont icon-02wodexiaofei"></i>
              </router-link>
              <router-link to="">
                <i class="iconfont icon-gouwuche"></i>
              </router-link>
            </div>
            <div class="price">
              <span class="left">￥</span>
              <span class="right">299</span>
            </div>
          </div>
          <div class="liImg">
            <router-link to="">
              <img src="../../assets/img/mainnew_41.png" alt="">
            </router-link>
          </div>
        </li> -->
      </ul>
      <div class="footer">
        <img src="../../assets/img/mainnew_139.png" alt="">
      </div>
    </div>
    <div class="backimg"></div>

    <!--必买爆款-->
    <div class="hot">
      <div class="title">
        <div class="text">
          <span>必买</span>
          <span>爆款</span>
        </div>
      </div>
      <div class="hotimg">
        <img src="../../assets/img/mainhot_13.png" alt="">
      </div>
      <ul>
        <li class="left">
          <router-link to="">
            <img src="../../assets/img/mainhot_24.png" alt="">
            <div class="namebox">
              <h3>COLORFUL</h3>
              <h4>炫彩预调鸡尾酒</h4>
            </div>
          </router-link>
        </li>
        <li class="right" :style="{'width':w+'px'}">
          <router-link to="">
            <img src="../../assets/img/mainhot_27.png" alt="">
            <div class="info">
              <div class="icon">
                <router-link to="">
                  <i class="iconfont icon-02wodexiaofei"></i>
                </router-link>
                <router-link to="">
                  <i class="iconfont icon-gouwuche"></i>
                </router-link>
              </div>
              <div class="desc">3度 400ml*6瓶</div>
              <div class="price">
                <span class="left">￥</span>
                <span class="right">299</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <ul class="bottom">
        <li class="left">
          <router-link to="">
            <img src="../../assets/img/mainhot_03.png" alt="">
            <div class="namebox">
              <h3>COLORFUL</h3>
              <h4>炫彩预调鸡尾酒</h4>
            </div>
          </router-link>
        </li>
        <li class="right" :style="{'width':w+'px','left':x+'px'}">
          <router-link to="">
            <img src="../../assets/img/mainhot_07.png" alt="" :style="{'left':y+'px'}">
          </router-link>
        </li>
        <div class="info">
          <div class="icon">
            <router-link to="">
              <i class="iconfont icon-02wodexiaofei"></i>
            </router-link>
            <router-link to="">
              <i class="iconfont icon-gouwuche"></i>
            </router-link>
          </div>
          <div class="desc">3度 400ml*6瓶</div>
          <div class="price">
            <span class="left">￥</span>
            <span class="right">299</span>
          </div>
        </div>
      </ul>
    </div>

    <!--为你推荐-->
    <div class="foryou">
      <div class="title">
        <div class="text">
          <span>为你</span>
          <span>推荐</span>
        </div>
      </div>
      <ul>
        <li v-for='item in arr'>
          <router-link :to=/detail/+item.id>
            <div class="imgBox">
              <img :src="JSON.parse(item.img)[0].url" alt="">
            </div>
            <div class="info">
              <h4>{{item.name}}</h4>
              <h2>{{item.title}}</h2>
              <h6>SUGARLAND WHISKY</h6>
              <h5>醇厚温润</h5>
              <div class="line"></div>
            </div>
            <div class="price">
              <span>￥</span>
              <h3>{{item.price}}</h3>
            </div>
            <div class="icon">
              <router-link to="">
                <i class="iconfont icon-02wodexiaofei"></i>
              </router-link>
              <router-link to="">
                <i class="iconfont icon-gouwuche"></i>
              </router-link>
            </div>
          </router-link>
        </li>
       
      </ul>
      <div class="btn">
        <router-link to="">
          更多产品
        </router-link>
      </div>
    </div>

    <!--品牌服务-->
    <div class="service">
      <div class="title">
        <div class="text">
          <span>品牌</span>
          <span>服务</span>
        </div>
      </div>
      <ul>
        <li v-for="(item,index) in service" :key="index">
          <div class="top">
            <div class="imgtop"></div>
            <div class="textBox">
              <h3>{{item.name}}</h3>
              <h5>{{item.ename}}</h5>
            </div>
            <div class="imgbottom"></div>
          </div>
          <div class="icon">
            <i class="iconfont icon-dengpao"></i>
            <div class="line"></div>
          </div>
          <p>
            <span>{{item.text1}}</span><br>
            <span>{{item.text2}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  import "../../assets/css/swiper.css"
  import "../../assets/iconfont/iconfont.css"

  export default {
    data() {
      return {
        banner: [
          {image_url: '/static/img/banner_02.png', to: '', id: 1},
          {image_url: '/static/img/banner_02.png', to: '', id: 2},
          {image_url: '/static/img/banner_02.png', to: '', id: 3},
        ],
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          autoplay: true,
          speed: 1000,
          observer: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        w:'',
        x:'',
        y:'',
        service:[
          {name:'质量保证',ename:'QUALITY',text1:'3个工作日内审核反馈',text2:''},
          {name:'科学配方',ename:'FORMULA',text1:'确定合作意向',text2:'讨论合作方式'},
          {name:'全程冷链配送',ename:'DISTRIBUTION',text1:'植入模块对接',text2:'云服务和APP'},
          {name:'优质原料',ename:'MATERIAL',text1:'测试产品性能',text2:''},
        ],
        arr:[],
        myfresh:[]
      }
    },
    created(){
      fetch("/api/poduct/allproduct").then(res=>res.json()).then(val=>{
        this.myfresh.push(val[0]);
        this.myfresh.push(val[1]);
        val.forEach(value=>{
          this.arr.push(value);
        })        
      });      
    },
    mounted(){
        this.w=document.body.offsetWidth;
        this.w=this.w/2;
      this.x=this.w-920.5;
      this.y=this.w-409.5;
     
    }
  }
 
</script>

<style lang="scss" scoped>
  .swiper-button-prev, .swiper-button-next {
    height: 30px;
  }

  .swiper-button-prev {
    left: 50%;
    margin-left: -420px
  }

  .swiper-button-next {
    right: 50%;
    margin-right: -420px
  }

  #main {
    width: 100%;
    > .new {
      width: 855px;
      margin: 0 auto;
      position: relative;
      background: #fff;
      > .title {
        width: 226px;
        height: 150px;
        margin: 100px auto;
        > img {
          width: 100%;
        }
      }
      > .drinkimg {
        width: 150px;
        height: 226px;
        position: absolute;
        right: -10px;
        top: -54px;
        > img {
          width: 100%;
        }
      }
      > ul {
        width: 100%;
        padding: 0 32px;
        box-sizing: border-box;
        > li {
          width: 100%;
          height: 417px;
          margin-top: 100px;
          display: flex;
          justify-content: space-between;
          > .liImg {
            width: 370px;
            height: 417px;
            > a {
              display: block;
              width: 100%;
              height: 100%;
              > img {
                width: 100%;
              }
            }
          }
          > .liInfo {
            width: 375px;
            height: 100%;
            position: relative;
            > .title {
              width: 100%;
              margin-top: 45px;
              margin-bottom: 20px;
              > h3 {
                font-size: 12px;
                color: #585858;
                margin-bottom: 5px;
              }
              > span {
                font-size: 8px;
                color: #8d8d8d;
              }
            }
            > .name {
              font-size: 22px;
              color: #000;
              margin-bottom: 5px;
            }
            > .shortDesc {
              font-size: 15px;
              color: #737373;
              margin-bottom: 20px;
              display: block;
            }
            > .con {
              width: 100%;
              line-height: 16px;
              font-size: 10px;
              color: #9f9f9f;
              margin-bottom: 15px;
            }
            > .econ {
              width: 100%;
              font-size: 6px;
              color: #bababa;
              line-height: 12px;
              margin-bottom: 20px;
            }
            > .amount {
              font-size: 14px;
              color: #272727;
            }
            > .degra {
              font-size: 10px;
              color: #343434;
            }
            > .icon {
              height: 37px;
              position: absolute;
              left: 0;
              bottom: 10px;
              width: 80px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .icon-02wodexiaofei {
                font-size: 35px;
                color: #ff5a5a;
                margin-top: 5px;
                display: block;
              }
              .icon-gouwuche {
                font-size: 35px;
                color: #b0b1c3;
              }
            }
            > .price{
              display: flex;
              position: absolute;
              top: 10px;
              right: 20px;
              > .left{
                font-size: 8px;
                color: #ff4949;
                margin:2px 13px 0 0;
              }
              > .right{
                font-size: 25px;
                color: #ff4949;
              }
            }
          }
        }
      }
      > .footer{
        width: 419px;
        height: 131px;
        margin-left: 220px;
        > img{
          width: 100%;
        }
      }
    }
    > .backimg{
      width: 100%;
      height: 403px;
      background: url("../../assets/img/main_02.png") no-repeat center center;
      background-size: cover;
      margin-top: -136px;
    }
    > .hot{
      padding-top: 250px;
      width: 855px;
      height: 890px;
      margin: 170px auto 100px;
      position: relative;
      > .title{
        width: 226px;
        height: 151px;
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        top: 0;
        background: url("../../assets/img/mainhot_08.png") no-repeat center center;
        > .text{
          width: 114px;
          display: flex;
          justify-content: space-between;
          position: absolute;
          top: 40px;
          left: 50%;
          margin-left: -57px;
          > span{
            font-size: 20px;
            color: #000;
          }
        }
      }
      > .hotimg{
        width: 361px;
        height: 282px;
        position: absolute;
        left:-108px;
        top: 108px;
        z-index: -1;
        > img{
          width: 100%;
        }
      }
      > ul{
        width: 100%;
        position: relative;
        > li.left{
          width: 75%;
          height: 217px;
          background: #b0b1c3;
          overflow: hidden;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 0;
          > a{
            display: block;
            width: 100%;
            height: 100%;
            > img{
              width: 547px;
              position: absolute;
              left: -124px;
              top:0;
              bottom:0;
              margin-top: auto;
              margin-bottom: auto;
            }
            > .namebox {
              height: 50px;
              position: absolute;
              top: 60px;
              left: 460px;
              > h3 {
                font-size: 24px;
                margin: 0;
                padding: 0 0 0 10px;
                border-left: 3px solid #b9e6e0;
                box-sizing: border-box;
                font-weight: normal;
                color: #fff;
              }
              > h4 {
                font-size: 16px;
                margin: 0;
                padding: 5px 0 0 10px;
                box-sizing: border-box;
                color: #fff;
                font-weight: normal;
                border-left: 3px solid #fff;
              }
            }
          }
        }
        > li.right{
          width: 70%;
          height: 217px;
          background: #b9e6e0;
          position: absolute;
          left: 427px;
          top: 147px;
          z-index: 0;
          > a{
            display: block;
            width: 100%;
            height: 100%;
            > img{
              left: -195px;
              width: 547px;
              position: absolute;
              top:0;
              bottom:0;
              margin-top: auto;
              margin-bottom: auto;
            }
            > .namebox {
              height: 50px;
              position: absolute;
              top: 60px;
              right: 450px;
              > h3 {
                font-size: 24px;
                margin: 0;
                padding: 0 0 0 10px;
                border-left: 3px solid #b0b1c3;
                box-sizing: border-box;
                font-weight: normal;
                color: #fff;
              }
              > h4 {
                font-size: 16px;
                margin: 0;
                padding: 5px 0 0 10px;
                box-sizing: border-box;
                color: #fff;
                font-weight: normal;
                border-left: 3px solid #fff;
              }
            }
            > .info{
              width: 100px;
              display: flex;
              height: 100px;
              position: absolute;
              left: -425px;
              bottom: 0;
              flex-wrap: wrap;
              align-items: flex-end;
              h2{
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
              }
              > .icon {
                height: 37px;
                width: 80px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .icon-02wodexiaofei {
                  margin-left: 10px;
                  font-size: 30px;
                  color: #ff5a5a;
                  margin-top: 5px;
                  display: block;
                }
                .icon-gouwuche {
                  font-size: 30px;
                  color: #b0b1c3;
                }
              }
              > .price{
                display: flex;
                margin-left: 10px;
                > .left{
                  font-size: 8px;
                  color: #ff4949;
                  margin:2px 13px 0 0;
                }
                > .right{
                  font-size: 25px;
                  color: #ff4949;
                }
              }
              > .desc{
                font-size: 12px;
                color: #0c0c0c;
                font-weight: bold;
              }
            }
          }
        }
      }
      > ul.bottom{
        margin-top: 525px;
        > li.left{
          left: 214px;
          > a{
            > img{
              left: 265px;
            }
            > .namebox {
              left: 40px;
            }
          }
        }
        > li.right{
          > a{
            > img{
            }
            > .namebox {
              left: 450px;
              > h3 {
                font-size: 24px;
                margin: 0;
                padding: 0 0 0 10px;
                border-left: 3px solid #b0b1c3;
                box-sizing: border-box;
                font-weight: normal;
                color: #fff;
              }
              > h4 {
                font-size: 16px;
                margin: 0;
                padding: 5px 0 0 10px;
                box-sizing: border-box;
                color: #fff;
                font-weight: normal;
                border-left: 3px solid #fff;
              }
            }
          }
        }
        .info{
          width: 100px;
          display: flex;
          height: 100px;
          position: absolute;
          right: 0;
          bottom: -362px;
          flex-wrap: wrap;
          align-items: flex-end;
          > .icon {
            height: 37px;
            width: 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .icon-02wodexiaofei {
              margin-left: 10px;
              font-size: 30px;
              color: #ff5a5a;
              margin-top: 5px;
              display: block;
            }
            .icon-gouwuche {
              font-size: 30px;
              color: #b0b1c3;
            }
          }
          > .price{
            display: flex;
            margin-left: 10px;
            > .left{
              font-size: 8px;
              color: #ff4949;
              margin:2px 13px 0 0;
            }
            > .right{
              font-size: 25px;
              color: #ff4949;
            }
          }
          > .desc{
            font-size: 12px;
            color: #0c0c0c;
            font-weight: bold;
          }
        }

      }
    }
    > .foryou{
      width: 855px;
      margin: 0 auto 108px;
      padding-top: 280px;
      box-sizing:border-box;
      position: relative;
      > .title{
        width: 226px;
        height: 151px;
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        top: 0;
        background: url("../../assets/img/mainhot_08.png") no-repeat center center;
        > .text{
          width: 114px;
          display: flex;
          justify-content: space-between;
          position: absolute;
          top: 40px;
          left: 50%;
          margin-left: -57px;
          > span{
            font-size: 20px;
            color: #000;
          }
        }
      }
      > ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items:center;
        > li{
          width: 263px;
          height: 411px;
          position: relative;
          > a{
            display: block;
            width: 100%;
            height: 100%;
            > .imgBox{
              width: 263px;
              height: 260px;
              padding-top: 30px;
              box-sizing:border-box;
              > img{
                display: block;
                width:263px;
                height:200px;
                margin: auto;
              }
            }
            > .info{
              width: 183px;
              height: 101px;
              margin:0 auto;
              border-bottom: 1px solid #000;
              box-sizing:border-box;
              position: relative;
              > h4{
                font-size: 13px;
                color: #555757;
                width: 100%;
                text-align: center;
                font-weight: normal;
              }
              > h2{
                font-size: 22px;
                color: #000;
                width: 100%;
                text-align: center;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
              }
              > h6{
                font-size: 7px;
                color: #878989;
                width: 100%;
                font-weight: normal;
                text-align: center;
              }
              > h5{
                font-size: 11px;
                color:#c5c7d3;
                width:100%;
                text-align: center;
                font-weight: normal;
                margin-top: 10px;
              }
              > .line{
                width: 30px;
                height: 1px;
                position: absolute;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                bottom: 0;
                background: #000;
              }
            }
            > .price{
              width: 40px;
              height: 16px;
              position: absolute;
              left: 0;
              right: 0;
              margin-left: auto;
              margin-right: auto;
              bottom:20px;
              display: flex;
              justify-content: space-between;
              >span{
                font-size: 10px;
                color: #f84545;
                display: block;
                margin-top: 1px;
              }
              > h3{
                font-size: 16px;
                color: #f84545;
              }
            }
            > .icon {
              height: 71px;
              width: 32px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              position: absolute;
              right: 5px;
              top:36px;
              .icon-02wodexiaofei {
                font-size: 30px;
                color: #ff5a5a;
              }
              .icon-gouwuche {
                font-size: 30px;
                color: #b0b1c3;
              }
            }

          }
        }
        > li:hover{
          background: #f8fcfc;
          transition: 0.5s;
        }
      }
      > .btn{
        width: 95px;
        height: 29px;
        border: 1px solid #c5c6d3;
        box-sizing: border-box;
        margin:35px auto;
        > a{
          display: block;
          width: 100%;
          height: 100%;
          font-size: 13px;
          color: #c5c6d3;
          text-align: center;
          line-height: 27px;
        }
      }
    }
    > .service{
      width: 855px;
      margin: 0 auto 80px;
      padding-top: 280px;
      box-sizing:border-box;
      position: relative;
      > .title{
        width: 226px;
        height: 151px;
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        top: 0;
        background: url("../../assets/img/mainhot_08.png") no-repeat center center;
        > .text{
          width: 114px;
          display: flex;
          justify-content: space-between;
          position: absolute;
          top: 40px;
          left: 50%;
          margin-left: -57px;
          > span{
            font-size: 20px;
            color: #000;
          }
        }
      }
      > ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > li{
          width: 142px;
          height: 236px;
          border: 1px solid #fff;
          padding-top: 34px;
          box-sizing: border-box;
          > .top{
            width: 100%;
            height: 50px;
            border-top:1px solid #c9bdc7;
            position: relative;
            border-bottom:1px solid #c9bdc7;
            > .imgtop{
              width: 23px;
              height: 10px;
              position: absolute;
              left:0;
              right: 0;
              margin-left: auto;
              margin-right: auto;
              top: -5px;
              background: url("../../assets/img/mainser_80.png") no-repeat center center;
            }
            > .imgbottom{
              width: 23px;
              height: 10px;
              position: absolute;
              left:0;
              right: 0;
              margin-left: auto;
              margin-right: auto;
              bottom: -5px;
              background: url("../../assets/img/mainser_89.png") no-repeat center center;
              z-index: 1;
            }
            > .textBox{
              width: 100%;
              height: 100%;
              padding-top: 5px;
              > h3{
                font-size: 18px;
                width: 100%;
                text-align: center;
                color: #575555;
                font-weight: normal;
              }
              > h5{
                font-size: 8px;
                width: 100%;
                text-align: center;
                color: #8c8b8b;
                font-weight: normal;
              }
            }
          }
          > .icon{
            width: 48px;
            height: 83px;
            margin: 0 auto;
            position: relative;
            padding-top: 34px;
            box-sizing: border-box;
            border-bottom: 1px solid #b2b2b2;
            z-index: -1;
            > .iconfont{
              font-size: 30px;
              color: #dedede;
              margin-left:8px;
            }
            > .line{
              width: 6px;
              height: 2px;
              background: #999999;
              position: absolute;
              left: 0;
              right: 0;
              margin-left: auto;
              margin-right: auto;
              bottom:-1px;
            }
          }
          > p{
            font-size: 10px;
            text-align: center;
            width: 100%;
            color: #807f7f;
            margin: 25px auto 0;
            >span{
              font-size: 10px;
              color: #807f7f;
            }
          }
        }
        > li:hover{
          transition: 0.3s;
          border: 1px solid #7bb3c2;
          > .top{
            border-top:1px solid #7bb3c2;
            border-bottom:1px solid #7bb3c2;
            > .imgtop{
              background: url("../../assets/img/mainser_83.png") no-repeat center center;
            }
            > .imgbottom{
              background: url("../../assets/img/mainser_90.png") no-repeat center center;
              z-index: 1;
            }
            > .textBox{
              > h3{
                color: #7bb3c2;
              }
              > h5{
                color: #7bb3c2;
              }
            }
          }
          > p{
            color: #7bb3c2;
          }
        }
      }
    }
  }
</style>
