<template>
  <div>
    <header>
      <div class="headMain">
        <!--导航条-->
        <div class="headTop">
          <div class="headTopLeft">
            <li v-for="(item,index) in head" :key="item.id" :class="{active:active==index}" @click="active=index">
              <router-link :to="item.to">{{item.name}}</router-link>
            </li>
            <div class="hover"></div>
          </div>
          <div class="headTopRight">
            <span><span @click='$router.push("/reglog")'>登录</span><span>/</span>
            <span @click='$router.push("/regist")'>注册</span></span>
            
            <!-- <div class="icon" v-for="item in icon" :key="item.id">
            <router-link :to="item.to">
            <img src="item.img" alt="">
            </router-link>
            </div> -->
            <div class="icon">
              <router-link to=''>
                <img src="../../assets/img/head_12.png" alt="">
              </router-link>
            </div>
            <div class="icon">
              <router-link to="/mycenter">
                <img src="../../assets/img/head_14.png" alt="">
              </router-link>
            </div>
            <div class="icon">
              <a href="">
                <img src="../../assets/img/head_16.png" alt="">
              </a>
            </div>
          </div>
          <div class="brand">
            <img src="../../assets/img/head_09.png" alt="">
          </div>
        </div>
        <!--搜索-->
        <div class="headSearch">
          <div class="line"></div>
          <input type="text" placeholder="REALIST鸡尾酒">
          <!--<i class="searchicon"></i>-->
          <div class="search">
            <router-link to="">
              <img src="../../assets/img/headsearch_34.png" alt="">
            </router-link>
          </div>
        </div>
      </div>
    </header>
    <div class="box"></div>
  </div>
</template>


<script>
  export default {
    name: 'myhead',
    data(){
      return {
        head: [
          {name: '首页', to: '/mymain', x: '', w: '', id: 1},
          {name: '所有商品', to: '/allproduct', x: '', w: '', id: 2}
          // {name: '红酒', to: '', x: '', w: '', id: 3},
          // {name: '鸡尾酒', to: '', x: '', w: '', id: 4},
          // {name: '啤酒', to: '', x: '', w: '', id: 5},
        ],
        active: 0,
        icon: [
          {img: '../../assets/img/head_12.png', to: '', id: 1},
          {img: '../../assets/img/head_14.png', to: '', id: 2},
          {img: '../../assets/img/head_16.png', to: '', id: 3},
        ]
      }
    }
  }
</script>


<style lang="scss" scoped>
  header {
    width: 100%;
    height: 92px;
    background: #efefef;
    border-bottom: 1px solid #c1c2cf;
    box-sizing: border-box;
    position: relative;
    > .headMain {
      width: 855px;
      height: 100%;
      margin: 0 auto;
      > .headTop {
        width: 100%;
        height: 50px;
        position: relative;
        display: flex;
        justify-content: space-between;
        > .headTopLeft {
          width: 500px;
          height: 100%;
          padding-top: 14px;
          box-sizing: border-box;
          margin-left: 135px;
          display: flex;
          justify-content: space-between;
          > li {
            width: 91px;
            height: 100%;
            position: relative;
            > a {
              display: block;
              width: 100%;
              height: 100%;
              font-size: 12px;
              color: #616161;
              line-height: 36px;
              text-align: center;
            }
          }
          > li.active ::after {
            content: "";
            width: 91px;
            height: 12px;
            position: absolute;
            left: 0;
            bottom: 0;
            background: url('../../assets/img/head_11.png') center center;
          }
          > li:hover ::after {
            content: "";
            width: 91px;
            height: 12px;
            position: absolute;
            left: 0;
            bottom: 0;
            background: url('../../assets/img/head_11.png') center center;
          }
        }
        > .headTopRight {
          height: 100%;
          width: 145px;
          padding-top: 14px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          > span {
            font-size: 12px;
            color: #525252;
            cursor: pointer;
          }
          > .icon {
            width: 16px;
            height: 16px;
            > a {
              display: block;
              width: 100%;
              height: 100%;
              > img {
                width: 100%;
              }
            }
          }
        }
        > .brand {
          width: 43px;
          height: 40px;
          position: absolute;
          left: 1px;
          top: 13px;
          > img {
            width: 100%;
          }
        }
      }
      > .headSearch {
        width: 424px;
        height: 42px;
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        bottom: -21px;
        > .line {
          width: 100%;
          height: 3px;
          background: #b0b1c3;
          margin-top: 20px;
        }
        > input {
          width: 381px;
          height: 42px;
          border: 1px solid #b8b9c9;
          box-sizing: border-box;
          outline: none;
          position: absolute;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
          top: 0;
          padding-left: 20px;
          font-size: 10px;
          color: #b4b4b4;
          background: #efefef;
        }
        > .search {
          width: 19px;
          height: 19px;
          position: absolute;
          right: 38px;
          top: 12px;
          > a {
            display: block;
            width: 100%;
            height: 100%;
            > img {
              width: 100%;
            }
          }
        }
      }
    }
  }
  .box{
    width:100%;
    height:34px;
    background: #efefef;
  }
</style>
