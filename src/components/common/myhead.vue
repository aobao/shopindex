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
                        <span @click="login()">
                            {{logname}}
                        </span>
                        <span @click="regist()">
                              {{isgname}}
                        </span>

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
        <div class="covers" v-if="logins">
            <div class="tered">
                <div class="top">
                    <div class="t-left-img">
                        <img src="../../assets/img/isg-t-l.png" alt="">
                    </div>
                    <div class="t-img">
                        <img src="../../assets/img/isg-t.png" alt="">
                    </div>
                </div>
                <div class="con">
                    <form  method="post">
                        <div class="login-top">
                            <span>WELCOME  LANDING</span>
                        </div>
                        <div class="cancal" @click="remlogin()">
                            <i class="iconfont icon-quxiao2"></i>
                        </div>

                        <div class="con_t">
                            <span>欢&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;迎&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</span>
                        </div>

                        <div class="user">
                            <div class="input_icon">
                                <img src="../../assets/img/isg-input-user-icon.png" alt="">
                            </div>
                            <div class="input_font">
                                <h6>账号</h6>
                            </div>
                            <input type="text" name="user" placeholder="请输入账号" v-model="loginuser">
                            <div class="icon_2"></div>
                        </div>
                        <div class="pass">
                            <div class="input_icon">
                                <img src="../../assets/img/isg-input-pass-icon.png" alt="">
                            </div>
                            <div class="input_font">
                                <h6>密码</h6>
                            </div>
                            <input type="password" name="pass" placeholder="请输入密码" value="" v-model="loginpass">
                            <div class="icon_2"></div>
                        </div>

                        <div class="button">
                            <div class="registered" @click="checklogin()">
                                <h3>立即登录</h3>
                                <h6>REGISTER</h6>
                            </div>
                            <div class="login" @click="checkisg()">
                                <router-link to="" >
                                    <span>立即</span>
                                    <span>注册</span>
                                </router-link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="cover" v-if="regists">
            <div class="tered">
                <div class="top">
                    <div class="t-left-img">
                        <img src="../../assets/img/isg-t-l.png" alt="">
                    </div>
                    <div class="t-img">
                        <img src="../../assets/img/isg-t.png" alt="">
                    </div>
                </div>
                <div class="con">
                    <form  method="post">
                        <div class="cancal" @click="remreg()">
                            <i class="iconfont icon-quxiao2"></i>
                        </div>
                        <div class="con_t">
                            <span>欢&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;迎&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</span>
                        </div>
                        <div class="user">
                            <div class="input_icon">
                                <img src="../../assets/img/isg-input-user-icon.png" alt="">
                            </div>
                            <div class="input_font">
                                <h6>账号</h6>
                            </div>
                            <input type="text" name="user" placeholder="请输入注册账号" v-model="isguser" value="">
                            <div class="icon_2"></div>
                        </div>
                        <div class="pass">
                            <div class="input_icon">
                                <img src="../../assets/img/isg-input-pass-icon.png" alt="">
                            </div>
                            <div class="input_font">
                                <h6>密码</h6>
                            </div>
                            <input type="password" name="pass" placeholder="请输入密码" v-model="isgpass" value="">
                            <div class="icon_2"></div>
                        </div>
                        <div class="button">
                            <div class="registered" @click="isgok()">
                                <h3>立即注册</h3>
                                <h6>REGISTER</h6>
                            </div>
                            <div class="login" @click="signin()">
                                <router-link to="">
                                    <span>立即</span>
                                    <span>登录</span>
                                </router-link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="box"></div>
    </div>
</template>


<script>
    export default {
        name: 'myhead',
        data() {
            return {
                head: [
                    {name: '首页', to: '/mymain', x: '', w: '', id: 1},
                    {name: '所有商品', to: '/allproduct', x: '', w: '', id: 2},
                    {name: '红酒', to: '', x: '', w: '', id: 3},
                    {name: '鸡尾酒', to: '', x: '', w: '', id: 4},
                    {name: '啤酒', to: '', x: '', w: '', id: 5},
                ],
                active: 0,
                icon: [
                    {img: '../../assets/img/head_12.png', to: '', id: 1},
                    {img: '../../assets/img/head_14.png', to: '', id: 2},
                    {img: '../../assets/img/head_16.png', to: '', id: 3},
                ],
                logname:'登录',
                isgname:"/注册",
                //绑定登录，注册的input
                loginuser:'',
                loginpass:'',
                isguser:'',
                isgpass:'',
                logins:false,
                regists:false
            }
        },
        methods: {
            //注册登录的出现
            login() {
                this.regists=false
                this.logins=true
            },
            regist(){
                this.logins=false
                this.regists=true
            },
            //注册登录的取消
            remlogin(){
                this.logins=false
                this.regists=false
            },
            remreg(){
                this.logins=false
                this.regists=false
            },
            //登录
            checklogin(){
                let loginuser=this.loginuser;
                let loginpass=this.loginpass;
                let obj={}
                obj.user=loginuser;
                obj.pass=loginpass;

                this.$http.post('/api/amdin/login','q',{headers:"application/json"}).then(res=>{
                    console.log(res.body);
                })
                this.logins=false
            },
            //登录立即注册
            checkisg(){
                this.logins=false
                this.regists=true
            },
            //注册
            isgok(){
                let isguser=this.isguser;
                let isgpass=this.isguser;
                let objs={}
                objs.user=isguser;
                objs.pass=isgpass;

                this.$http.post('/api/amdin/isg',objs,{headers:{"content-type":"application/json"}}).then(res=>{
                    console.log(res);
                })
                this.regists=false
            },
            //注册立即登录
            signin(){
                this.logins=true
                this.regists=false
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
        z-index: 700;
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
    .cover{
        width: 100%;
        background: rgba(0, 0, 0, 0.33);
        /*height: 6100px;*/
        /*position: absolute;*/
        height: 2000px;
        position: fixed;
        top: 0;
        margin: auto;
        z-index: 999;
        .tered{
            position: absolute;
            top: 137px;
            left: 0;
            right: 0;
            margin: auto;
            width: 500px;
            height: 448px;
            /*margin: 137px auto;*/
            z-index: 999;
            overflow: hidden;
            .top{
                width: 100%;
                height: 138px;
                position: relative;
                overflow: hidden;
                .t-left-img{
                    width: 88px;
                    height: 106px;
                    margin-top: 32px;
                    margin-left: 19px;
                    img{
                        width: 100%;
                    }
                }
                .t-img{
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    margin:  auto;
                    width: 261px;
                    height: 138px;
                    img{
                        width: 100%;
                    }
                }
            }
            .con{
                width: 362px;
                height: 250px;
                position: relative;
                background: #fff;
                border-radius: 10px;
                /*overflow: hidden;*/
                left: 0 ;
                right: 0;
                margin: auto;
                border: 1px solid #989798;
                form{
                    width: 100%;
                    height: 100%;
                    .cancal{
                        width: 26px;
                        height: 26px;
                        position: absolute;
                        top: 0px;
                        right: 0;
                        margin: auto;
                        line-height: 26px;
                        text-align: center;
                        i{
                            font-size: 10px;
                            color: #7f7f7f;
                        }
                    }
                    .con_t{
                        width: 100%;
                        height: 64px;
                        line-height: 64px;
                        text-align: center;
                        /*background: #c6fff8;*/
                        margin-bottom: 6px;
                        span{
                            font-size: 16px;
                            color: #000;
                        }
                    }
                    .user{
                        width: 100%;
                        height: 26px;
                        padding: 0 54px 0 52px;
                        box-sizing: border-box;
                        /*background: #cccccc;*/
                        margin-bottom: 32px;
                        margin-top: 20px;
                        .input_icon{
                            width: 27px;
                            height: 26px;
                            float: left;
                            overflow: hidden;
                            img{
                                width: 100%;
                            }
                        }
                        .input_font{
                            width: 42px;
                            height: 26px;
                            float: left;
                            line-height: 26px;
                            overflow: hidden;
                            h6{
                                font-size: 13px;
                                color: #737373;
                            }
                        }
                        input{
                            float: left;
                            width: 187px;
                            height: 24px;
                            box-sizing: border-box;
                            border-radius: 50px;
                            outline: none;
                            border: 1px solid #e5e5e5;
                            font-size: 8px;
                            padding: 0px 13px;
                            margin-top: 1px;
                        }
                    }
                    .pass{
                        width: 100%;
                        height: 26px;
                        padding: 0 54px 0 52px;
                        box-sizing: border-box;
                        /*background: #cccccc;*/
                        .input_icon{
                            width: 27px;
                            height: 26px;
                            float: left;
                            overflow: hidden;
                            img{
                                width: 100%;
                            }
                        }
                        .input_font{
                            width: 42px;
                            height: 26px;
                            float: left;
                            line-height: 26px;
                            overflow: hidden;
                            h6{
                                font-size: 13px;
                                color: #737373;
                            }
                        }
                        input{
                            float: left;
                            width: 187px;
                            height: 24px;
                            box-sizing: border-box;
                            border-radius: 50px;
                            outline: none;
                            border: 1px solid #e5e5e5;
                            font-size: 8px;
                            padding: 0px 13px;
                            margin-top: 1px;
                        }
                    }
                    .button{
                        width: 100%;
                        height: 75px;
                        position: absolute;
                        background-image: url("../../assets/img/isg-foots-2.png");
                        bottom: -20px;
                        .registered{
                            width: 70px;
                            height: 42px;
                            margin: 28px  auto 0px auto;
                            text-align: center;
                            h3{
                                font-size: 13px;
                                color: #fff;
                            }
                            h6{
                                font-size: 7px;
                                color: #fff;
                            }
                        }
                        .login{
                            width: 49px;
                            height: 49px;
                            background: #b0b1c3;
                            border-radius: 50%;
                            position: absolute;
                            top: 21px;
                            right: 63px;
                            margin: auto;
                            text-align: center;
                            box-sizing: border-box;
                            padding: 8px;
                            a{
                                width: 100%;
                                height: 100%;
                                display: block;
                                span{
                                    font-weight: bold;
                                    display: block;
                                    font-size: 13px;
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .covers{
        width: 100%;
        background: rgba(0, 0, 0, 0.33);
        height: 2000px;
        position: fixed;
        top: 0;
        margin: auto;
        z-index: 998;
        .tered{
            position: absolute;
            top: 137px;
            left: 0;
            right: 0;
            margin: auto;
            width: 500px;
            height: 448px;
            /*margin: 137px auto;*/
            z-index: 999;
            overflow: hidden;
            .top{
                width: 100%;
                height: 138px;
                position: relative;
                overflow: hidden;
                .t-left-img{
                    width: 88px;
                    height: 106px;
                    margin-top: 32px;
                    margin-left: 19px;
                    img{
                        width: 100%;
                    }
                }
                .t-img{
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    margin:  auto;
                    width: 261px;
                    height: 138px;
                    img{
                        width: 100%;
                    }
                }
            }
            .con{
                width: 362px;
                height: 250px;
                position: relative;
                background: #fff;
                border-radius: 10px;
                /*overflow: hidden;*/
                left: 0 ;
                right: 0;
                margin: auto;
                border: 1px solid #989798;
                form{
                    width: 100%;
                    height: 100%;
                    .login-top{
                        width: 302px;
                        height: 33px;
                        position: absolute;
                        top: -16.5px;
                        left: 0;
                        right: 0;
                        margin: auto;
                        background: #b9e6e0;
                        border-radius: 50px;
                        text-align: center;
                        line-height: 33px;
                        span{
                            color: #fff;
                            font-size: 14px;
                        }
                    }
                    .cancal{
                        width: 26px;
                        height: 26px;
                        position: absolute;
                        top: 0px;
                        right: 0;
                        margin: auto;
                        line-height: 26px;
                        text-align: center;
                        i{
                            font-size: 10px;
                            color: #7f7f7f;
                        }
                    }
                    .con_t{
                        width: 100%;
                        height: 64px;
                        line-height: 64px;
                        text-align: center;
                        margin-bottom: 6px;
                        margin-top: 15px;
                        span{
                            font-size: 16px;
                            color: #000;
                        }
                    }
                    .user{
                        width: 100%;
                        height: 26px;
                        padding: 0 54px 0 52px;
                        box-sizing: border-box;
                        /*background: #cccccc;*/
                        margin-bottom: 32px;
                        margin-top: 5px;
                        .input_icon{
                            width: 27px;
                            height: 26px;
                            float: left;
                            overflow: hidden;
                            img{
                                width: 100%;
                            }
                        }
                        .input_font{
                            width: 42px;
                            height: 26px;
                            float: left;
                            line-height: 26px;
                            overflow: hidden;
                            h6{
                                font-size: 13px;
                                color: #737373;
                            }
                        }
                        input{
                            float: left;
                            width: 187px;
                            height: 24px;
                            box-sizing: border-box;
                            border-radius: 50px;
                            outline: none;
                            border: 1px solid #e5e5e5;
                            font-size: 8px;
                            padding: 0px 13px;
                            margin-top: 1px;
                        }
                    }
                    .pass{
                        width: 100%;
                        height: 26px;
                        padding: 0 54px 0 52px;
                        box-sizing: border-box;
                        /*background: #cccccc;*/
                        .input_icon{
                            width: 27px;
                            height: 26px;
                            float: left;
                            overflow: hidden;
                            img{
                                width: 100%;
                            }
                        }
                        .input_font{
                            width: 42px;
                            height: 26px;
                            float: left;
                            line-height: 26px;
                            overflow: hidden;
                            h6{
                                font-size: 13px;
                                color: #737373;
                            }
                        }
                        input{
                            float: left;
                            width: 187px;
                            height: 24px;
                            box-sizing: border-box;
                            border-radius: 50px;
                            outline: none;
                            border: 1px solid #e5e5e5;
                            font-size: 8px;
                            padding: 0px 13px;
                            margin-top: 1px;
                        }
                    }
                    .button{
                        width: 100%;
                        height: 75px;
                        position: absolute;
                        background-image: url("../../assets/img/isg-foots-2.png");
                        bottom: -20px;
                        .registered{
                            width: 70px;
                            height: 42px;
                            margin: 28px  auto 0px auto;
                            text-align: center;
                            h3{
                                font-size: 13px;
                                color: #fff;
                            }
                            h6{
                                font-size: 7px;
                                color: #fff;
                            }
                        }
                        .login{
                            width: 49px;
                            height: 49px;
                            background: #b0b1c3;
                            border-radius: 50%;
                            position: absolute;
                            top: 21px;
                            right: 63px;
                            margin: auto;
                            text-align: center;
                            box-sizing: border-box;
                            padding: 8px;
                            a{
                                width: 100%;
                                height: 100%;
                                display: block;
                                span{
                                    font-weight: bold;
                                    display: block;
                                    font-size: 13px;
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .box {
        width: 100%;
        height: 34px;
        background: #efefef;
    }
</style>
