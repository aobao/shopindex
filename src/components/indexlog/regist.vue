<template>
    <div class="cover">
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
                    <div class="cancal">
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
                        <input type="text" name="user" placeholder="请输入注册账号" value="">
                        <div class="icon_2"></div>
                    </div>
                    <div class="pass">
                        <div class="input_icon">
                            <img src="../../assets/img/isg-input-pass-icon.png" alt="">
                        </div>
                        <div class="input_font">
                            <h6>密码</h6>
                        </div>
                        <input type="password" name="pass" placeholder="请输入密码" value="">
                        <div class="icon_2"></div>
                    </div>

                    <div class="button">
                        <div class="registered">
                            <h3>立即注册</h3>
                            <h6>REGISTER</h6>
                        </div>
                        <div class="login">
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

</template>
<script>
export default {
    name:"regist"
}
</script>
<style lang="scss" scoped>
    .cover{
        width: 100%;
        height: 1000px;
        background: rgba(0, 0, 0, 0.33);
        position: relative;
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

</style>
