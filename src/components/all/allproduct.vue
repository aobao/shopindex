<template>

    <div class="list">
        <div class="mylist">
            <div class="all">
                <img src="../../assets/img/allproduct.png" alt="">
            </div>
            <div class="gray">
                <div class="img">
                    <img src="../../assets/img/gray.png" alt="">
                </div>
                <span>鸡尾酒</span>
            </div>
        </div>
        <ul class="list_nav">
            <li v-for="(val,index) in nav" :key="index" :class="{nav_active:nav_active==index}" @click="nav_active=index">
                <span>
                      {{val.name}}
                </span>
            </li>
            <div class="selec">
                <span>价格</span>
                <input type="text" name="old">
                <span> - </span>
                <input type="text" name="new">
            </div>
        </ul>
        <ul class="con">
            <li v-for="(val,index) in alldata"  :key="index" >
                <div class="con_box ">
                    <div class="con_li_img">
                        <img :src="JSON.parse(val.img)[0].url" alt="">
                    </div>
                    <h3>{{val.title}}</h3>
                    <h2>{{val.name}}</h2>
                    
                    <h5>津津有味</h5>
                    <div class="proce">
                        <span>￥{{val.price}}</span>
                        <div class="gm">
                            <router-link :to=/detail/+val.id>
                                <span>立即购买</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </li >
        </ul>
        <div class="list_uter">
            <img src="../../assets/img/list_tj.png" alt="">
        </div>
        <ul class="ter">
            <li>
                <img src="../../assets/img/list_ter_1.png" alt="">
            </li>
            <li>
                <img src="../../assets/img/list_ter_2.png" alt="">
            </li>
            <li>
                <img src="../../assets/img/list_ter_3.png" alt="">
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    name:"allproduct",
    data(){
        return{
            nav:[
                {name:"综合"},
                {name:"销量"},
                {name:"最新"},
                {name:"价格"},
            ],
            nav_active:2,
            con:[1,2,3,4,5,6],
            con_active:2,
            alldata:[]
        }
    },
    created(){
      fetch("/api/poduct/allproduct").then(res=>res.json()).then(val=>{
       
        val.forEach(value=>{
          this.alldata.push(value);
        })    
            
      });      
    },
    
}
</script>
<style lang="scss" scoped>

    .list{
        width: 855px;
        height: auto;
        margin: 0 auto;
        .mylist{
            width: 100%;
            height: 100px;
            .all{
                float: left;
                width: 100px;
                height: 50px;
                margin-top:25px;
            }
            .gray{
                float:left;
                position: relative;
                width: 100px;
                height: 50px;
                margin-top: 25px;
                margin-left: 10px;
                .img{
                    position: absolute;
                    top: 0;
                    left:0;
                    width: 100px;
                    height: 100%;
                    img{
                        width: 100%;
                    }
                }
                span{
                    position: absolute;
                    top:4px;
                    left:10px;
                    color:#fff;
                    font-size: 12px;
                }

            }
        }
        .list_nav{
            width: 100%;
            height: 51px;
            border-top: 2px solid #b0b1c3;
            border-bottom: 1px  solid #d6d6d6;
            box-sizing: border-box;
            display: flex;
            li{
                width: 74px;
                height: 100%;
                line-height: 51px;
                padding-left: 3px;
                box-sizing: border-box;
                span{
                    color: #757575;
                    font-size: 14px;
                }
            }
            .nav_active{
                position: relative;
                &::after{
                    content: "";
                    width: 31px;
                    height: 2px;
                    background: #b0b1c3;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    margin: auto;
                }
            }
            .selec{
                height: 100%;
                line-height: 51px;
                width: 350px;
                display: flex;
                span{
                    color: #757575;
                    font-size: 14px;
                }
                input{
                    padding-left: 1px;
                    margin-top: 15px;
                    margin-left: 10px;
                    margin-right: 10px;
                    background: none;
                    border: 1px solid #e5e5e5;
                    outline: none;
                    width: 132px;
                    height: 21px;
                }
            }
        }
        .con{
            width: 100%;
            height: auto;
            margin-top: 33px;
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-bottom: 90px;
            li{
                width: 33.3%;
                height: 465px;
                overflow: hidden;
                text-align: center;
                .con_box{
                    width: 100%;
                    height: 430px;
                    margin: 15px auto;
                    z-index: 700;
                    .con_li_img{
                        width: 144px;
                        height: 238px;
                        margin: 0 auto;
                        img{
                            width: 100%;
                        }
                    }
                    h3{
                        margin-top: 20px;
                        color: #585858;
                        font-size: 13px;
                    }
                    h2{
                        margin-top: 5px;
                        color: #000;
                        font-size: 21px;
                    }
                    h4{
                        margin-top: 11px;
                        color: #737373;
                        font-size: 7px;
                    }
                    h5{
                        margin-top: 12px;
                        color: #b6b7c7;
                        font-size: 10px;
                        margin-bottom: 11px;
                    }
                    .proce{
                        width: 183px;
                        border-top: 1px solid #000;
                        height: 65px;
                        margin: 0 auto;
                        position: relative;
                        line-height: 50px;
                        &::after{
                            position: absolute;
                            content: "";
                            width: 29px;
                            height: 2px;
                            top: -2px;
                            left: 0;
                            right: 0;
                            margin: auto;
                            background: #000;
                        }
                        span{
                            text-align: center;
                            font-size: 16px;
                            color: #ff3737;
                        }
                        .gm{
                            display: none;
                        }
                    }
                }
            }
            li:hover{
                position: relative;
                .con_box{
                    width: 96%;
                    height: 430px;
                    margin: 10px auto;
                    box-shadow: 0px 0px 16px 4px #e2dfdf;
                    z-index: 800;
                    .proce{
                        width: 183px;
                        border-top: 1px solid #000;
                        height: 65px;
                        margin: 0 auto;
                        position: relative;
                        line-height: 50px;
                        &::after{
                            position: absolute;
                            content: "";
                            width: 29px;
                            height: 2px;
                            top: -2px;
                            left: 0;
                            right: 0;
                            margin: auto;
                            background: #000;
                        }
                        span{
                            width: 80px;
                            height: 30px;
                            display: block;
                            font-size: 16px;
                            color: #ff3737;
                        }
                        .gm{
                            display: block;
                            position: absolute;
                            width: 90px;
                            height: 24px;
                            background: #ff6c52;
                            overflow: hidden;
                            top: 12px;
                            right: 0;
                            margin: auto;
                            line-height: 24px;
                            text-align: center;
                            a{
                                width: 100%;
                                height: 100%;
                                display: block;
                                span{
                                    color: #fffdfd;
                                    font-size: 14px;
                                }
                            }

                        }
                    }
                }
            }
        }
        .list_uter{
            width: 365px;
            height: 153px;
            margin-bottom: 93px;
            img{
                width: 100%;
            }
        }
        .ter{
            width: 100%;
            height: 370px;
            display: flex;
            justify-content: space-around;
            margin-bottom: 90px;
            li{
                width: 266px;
                height: 100%;
                img{
                    width: 100%;
                }
            }
        }

    }

</style>
