<template>

    <div class="main">
        <div class="box">
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

                    <div class="ad-card" v-for="(item,index) in data" :key="index">
                        <div class="cardimg">
                            <img src="../../assets/img/order3.png" alt="">
                        </div>
                        <div class="cardcon">
                            <h1>{{item.name}}</h1>
                            <P>{{item.area}}</P>
                            <h2>{{item.dareas}}</h2>
                            <span>{{item.phone}}</span>
                            <div class="card-bot">
                                <div class="card-left">
                                    <el-button type='mini'>默认地址</el-button>
                                </div>
                                <div class="card-right">
                                    <i class="el-icon-delete" @click="remress(item.id,index)" ></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="carimg" @click="address()">
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
                    一共<span>7</span> 件
                </div>
                <div class="b-right">
                    合计<span>799</span> RMB
                </div>
                <div class="b-btn">
                    <el-button type="danger" @click='$router.push("/pay")'>支付订单</el-button>
                </div>
            </div>
        </div>
        <div class="addpup" v-if="addre">
            <div class="boxs">
                <div class="topimg">
                    <img src="../../assets/img/address_pop.png" alt="">
                </div>
                <div class="con">
                    <div class="con_top">
                        <i class="iconfont icon-quxiao" @click="cancel()"></i>
                    </div>
                    <div class="con_box">
                        <div class="li">
                            <div class="li_l">
                                <h3>所在地址</h3>
                            </div>
                            <div class="li_r">
                                <input type="text" name="region" placeholder="请输入省市区" v-model="region">
                            </div>
                        </div>
                        <div class="li">
                            <div class="li_l">
                                <h3>详细地址</h3>
                            </div>
                            <div class="li_r">
                                <input type="text" name="regionxx" placeholder="请输入详细地址" v-model="regionxx">
                            </div>
                        </div>
                        <div class="li">
                            <div class="li_l">
                                <h3>邮政编码</h3>
                            </div>
                            <div class="li_r">
                                <input type="text" name="code" placeholder="如果不确定，请填写000000" v-model="code">
                            </div>
                        </div>
                        <div class="li">
                            <div class="li_l">
                                <h3>收货人姓名</h3>
                            </div>
                            <div class="li_r">
                                <input type="text" name="name" placeholder="长度不超过20位" v-model="name">
                            </div>
                        </div>
                        <div class="li">
                            <div class="li_l">
                                <h3>手机号码</h3>
                            </div>
                            <div class="li_r">
                                <input type="text" name="phone" placeholder="长度不超过11位" v-model="phone">
                            </div>
                        </div>
                        <div class="button">
                            <div class="prese" @click="updata()">
                                <span>保 存</span>
                            </div>
                            <div class="cancel" @click="cancel()">
                                <span>取消</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script>

    export default {
        name: 'book',
        data() {
            return {
                addre: false,
                data:[],
                region: '',
                regionxx: "",
                code: '',
                name: '',
                phone: ''
            }
        },
        methods: {
            //弹出添加地址
            address() {
                this.addre=true;
            },
            //关闭弹出地址
            cancel(){
                this.addre=false;
            },
            //添加地址
            updata(){
                let obj={}
                //name,phone,area,dareas,coding
                obj.area=this.region
                obj.dareas=this.regionxx
                obj.coding=this.coding
                obj.name=this.name
                obj.phone=this.phone
                if(obj.area==''){
                    this.$message.error('添加失败，请添加所在地址');
                    this.addre=false;
                    this.region="";
                    this.regionxx="";
                    this.code="";
                    this.name="";
                    this.phone="";
                    return;
                }
                if(obj.dareas==''){
                    this.$message.error('添加失败，请添加详细地址');
                    this.addre=false;
                    this.region="";
                    this.regionxx="";
                    this.code="";
                    this.name="";
                    this.phone="";
                    return;
                }
                if(obj.coding==''){
                    this.$message.error('添加失败，请添加邮政编码');
                    this.addre=false;
                    this.region="";
                    this.regionxx="";
                    this.code="";
                    this.name="";
                    this.phone="";
                    return;
                }
                if(obj.name==''){
                    this.$message.error('添加失败，请添加收货人名称');
                    this.addre=false;
                    this.region="";
                    this.regionxx="";
                    this.code="";
                    this.name="";
                    this.phone="";
                    return;
                }
                if(obj.phone==''){
                    this.$message.error('添加失败，请添加收货人手机号');
                    this.addre=false;
                    this.region="";
                    this.regionxx="";
                    this.code="";
                    this.name="";
                    this.phone="";
                    return;
                }
                this.$http.post("/api/address/addindex",obj,{headers:"application/json"}).then(res=>{
                    if(res.body!="on"){
                        this.$message({
                            message: '恭喜你，添加成功!',
                            type: 'success'
                        });
                        obj.id=res.body
                        this.data.push(obj)
                        this.addre=false;
                        this.region="";
                        this.regionxx="";
                        this.code="";
                        this.name="";
                        this.phone="";
                        return;
                    }else{
                        this.$message.error('添加失败，请重新添加');
                        this.addre=false;
                        this.region="";
                        this.regionxx="";
                        this.code="";
                        this.name="";
                        this.phone="";
                        return;
                    }
                })
            },
            //删除地址
            remress(id,index){
                console.log(id);
                this.$http.get(`/api/address/del?id=${id}`).then(res=>{
                    if(res.body=="ok"){
                        this.data.splice(index,1);
                        this.$message({
                            message: '删除成功!',
                            type: 'success'
                        });

                    }else{
                        this.$message.error('删除失败，请重新删除！');
                    }
                })
            }
        },
        created() {
            this.$http.get("/api/address").then(res=>{
                this.data=res.body;
            })
        }
    }
</script>
<style lang="scss" scoped>
    .main {
        width: 100%;
        height: auto;
        position: relative;
        .box {
            width: 855px;
            //    height: 170px;
            margin: 0 auto;
            .title {
                width: 100%;
                height: 170px;
                .t-leftimg {
                    width: 400px;
                    height: 100%;
                    float: left;
                    img {
                        width: 100%;
                    }
                }
                .t-rightimg {
                    width: 400px;
                    height: 170px;
                    float: right;
                    img {
                        widtth: 100%;
                    }
                }
            }
            .address {
                width: 100%;
                //    height: 500px;
                margin-bottom: 20px;
                .ad-title {
                    width: 100%;
                    height: 34px;
                    img {
                        width: 100%;
                    }
                }
                .ad-con {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    .ad-card {
                        position: relative;
                        width: 258px;
                        height: 190px;
                        margin: 40px 0;
                        .cardimg {
                            position: absolute;
                            width: 100%;
                            img {
                                width: 100%;
                            }
                        }
                        .cardcon {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 238px;
                            height: 160px;
                            padding-left: 20px;
                            padding-top: 30px;
                            font-size: 14px;
                            p {
                                margin-top: 30px;
                                color: #888;

                            }
                            span {
                                font-size: 16px;
                            }
                            h2 {
                            }
                            .card-bot {
                                .card-left {
                                    float: left;
                                }
                                .card-right {
                                    float: right;
                                    margin-right: 20px;
                                    font-size: 20px;
                                }
                            }
                        }
                    }
                }
            }

            .sure-add {
                width: 100%;
                .shop-list {
                    width: 100%;
                    //   height: auto;
                    border: #aaa 2px solid;
                    border-radius: 5px;
                    margin: 20px 0;
                    .shop-title {
                        width: 98%;
                        height: 70px;
                        img {
                            width: 100%;
                        }
                    }
                    .list-every {
                        width: 100%;
                        height: 150px;
                        border-top: #ddd 1px solid;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        .every-img {
                            width: 90px;
                        }
                        .every-name {
                            width: 160px;
                        }
                        .every-price {
                            width: 100px;

                        }
                        .every-nub {
                            width: 80px;
                        }
                        .every-sub {
                            width: 100px;
                            color: red;
                        }

                    }
                }
            }
            .bottom {
                width: 100%;
                height: 80px;
                border: #888 2px solid;
                margin-bottom: 20px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .b-left {
                    span {
                        font-size: 18px;
                        color: #000;
                    }
                }
                .b-right {
                    span {
                        font-size: 20px;
                        color: red;
                    }
                }
            }
        }
        .addpup {
            width: 100%;
            height: 1000px;
            background: rgba(0, 0, 0, 0.51);
            position: fixed;
            z-index: 900;
            top: -126px;
            margin: auto;
            overflow: hidden;
            .boxs {
                width: 512px;
                height: 385px;
                margin: 200px auto;
                overflow: hidden;
                .topimg {
                    width: 100%;
                    height: 73px;
                    img {
                        width: 100%;
                    }
                }
                .con {
                    width: 100%;
                    height: 352px;
                    overflow: hidden;
                    background: #fff;
                    .con_top {
                        width: 100%;
                        height: 60px;
                        /*background: #cccccc;*/
                        padding: 13px 15px;
                        box-sizing: border-box;
                        i{
                            float: right;
                            color: #7f7f7f;
                            font-size: 16px;
                        }
                    }
                    .con_box {
                        width: 100%;
                        height: 293px;
                        padding-left: 47px;
                        padding-right: 103px;
                        box-sizing: border-box;
                        .li {
                            width: 100%;
                            height: 36px;
                            display: flex;
                            justify-content: space-between;
                            .li_l {
                                width: 105px;
                                height: 100%;
                                /*background: red;*/
                                min-height: 26px;
                                line-height: 26px;
                                h3 {
                                    text-align: right;
                                    font-size: 12px;
                                    color: #4a4a4a;
                                }
                            }
                            .li_r {
                                min-height: 26px;
                                width: 245px;
                                height: auto;
                                /*background: yellow;*/
                                input {
                                    outline: none;
                                    height: 19px;
                                    width: 180px;
                                    border: 1px solid #b14b4b;
                                    background: #fff;
                                    padding-left: 7px;
                                    box-sizing: border-box;
                                    font-size: 11px;
                                    line-height: 19px;
                                }
                            }
                        }
                        .button{
                            width: 100%;
                            height: 22px;
                            margin-top: 10px;
                            /*background: yellow;*/
                            display: flex;
                            padding: 0 20px;
                            box-sizing: border-box;
                            justify-content: space-around;
                            .prese{
                                width: 100px;
                                height: auto;
                                line-height: 22px;
                                text-align: center;
                                background: #b0b1c3;
                                span{
                                    color: #ededf1;
                                    font-size: 12px;
                                    font-weight: bold;
                                }
                            }
                            .cancel{
                                width: 100px;
                                height: auto;
                                line-height: 22px;
                                text-align: center;
                                background: #b9e6e0;
                                span{
                                    color: #ededf1;
                                    font-size: 12px;
                                    font-weight: bold;
                                }
                            }
                        }
                    }

                }
            }
        }
    }
</style>
