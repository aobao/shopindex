<template>
<div class="main">
  <div class="mytopbox">
   <div class="mylist">
     <div class="all">
         <img src="../../assets/img/allproduct.png" alt="">
     </div>
     <div class="type">
         <div class="img">
         <img src="../../assets/img/bg-green.png" alt="">             
         </div>
         <span>鸡尾酒</span>
     </div>
     <div class="gray">
         <div class="img">
         <img src="../../assets/img/gray.png" alt="">

         </div>
         <span>产品详情</span>
     </div>
   </div>
   <div class="detail">
    <div class="left">
           <div class="imgbox">
               <el-carousel height="300px">
                    <el-carousel-item v-for="(item,index) in bannerdata" :key="index" >
                      <img :src="item.url" alt="" height='300px'>                               
                    </el-carousel-item>
                </el-carousel>
            </div>  
    </div>
       <div class="right">
           <h1>{{arr.name}} <span>{{arr.degra}}</span>ml* <span>{{arr.amount}}</span> 瓶 </h1>
           <h2>{{arr.title}}</h2> 
           <div class="price">
               <h1><span>{{arr.price}}</span> RMB <s>原价 <span>{{arr.offprice}}</span>RMB </s> </h1>
           </div>
           <div class="mun">
               <h1>
                 <span>清选择商品数量</span>
                 <span @click='munred()'>-</span>
                  <div calss='def'>{{mun}}</div>
                  <span @click='munadd()'>+</span>
               </h1>               
           </div>
           <div class="type">
                <div class="left">
                    <h2>请选择商品口味</h2>
                </div>
                <div class="type-right">
                  <div class="typebox" >
                    <div class="mytype" v-for='(item,n) in typedata' @click='index=n' :key='n' :class='{active:index==n}'>
                        <div class="imgbox"><img :src="item.src" alt=""></div> 
                       <div class="mylike">{{item.type}}</div>                       
                    </div>
                  </div>
                </div>
           </div>
           <div class="addbtn">
               立即购买
           </div>
           <div class="shopbtn" @click='addtoshop()' >
             加入购物车
           </div>
       </div>
   </div>
  </div>  
   
  <div class="max">
   <div class="detail">
      <div class="img">
          <img src="../../assets/img/detail-jiu.png" alt="">
      </div>
      <span>商品详情</span>
   </div>
  </div>

  <div class="imgdetail">
    <div class="imgbox">
      <img src="../../assets/img/omygaga.png" alt="">
    </div>
    
  </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            id:'',
            mun:1,
            arr:[],
            typedata:[
                {src:'./static/img/detail-jiu.png',type:'葡萄口味'},
                {src:'./static/img/detail-jiu.png',type:'橘子口味'},
                {src:'./static/img/detail-jiu.png',type:'香蕉口味'},
                {src:'./static/img/detail-jiu.png',type:'苹果口味'},
                {src:'./static/img/detail-jiu.png',type:'柠檬口味'},
                {src:'./static/img/detail-jiu.png',type:'鹌鹑口味'},               
            ] ,
            bannerdata:[
                
            ],
            index:0,
           swiperOption: {
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
                }
            }
        }
        
    },
     mounted() {
   
    },
    methods:{
        munred(){
            if(this.mun<=0){
               this.mun=0;
            }else{
            this.mun--;

            }
        },
        munadd(){
            this.mun++;
        },
        addtoshop(){
            let id=this.$route.params.id;            
             let user='';
            if(sessionStorage.username){
                user=sessionStorage.username;
                this.$http.post(`/api/shopcar/addshop`,{id:id,amount:this.mun,user:user},{headers:{'content-type':'application/json'}}).then(res=>{
                if(res.body=='ok'){
                   this.$message({
                        message:"添加成功！",
                        type: 'success'
                    });
                 this.$router.push(`/mycar?`);                   
                }else{
                    this.$message.error('添加失败');
                }
            })

            }else{
                this.$message.error("请先登录");
            }      
           

        
      }
        
    },
   
    mounted(){
        let id=this.$route.params.id;
        this.id=id;
        fetch(`/api/poduct/detail?id=${id}`).then(res=>res.json()).then(res=>{
            this.bannerdata=JSON.parse(res[0].img);
            this.arr=res[0];              
      })

    }
}
</script>
<style lang="scss" scoped>
 .main{
     width: 100%;
     height: auto;
     margin:0 auto;
     .mytopbox{
        width: 855px;
        height: auto;
        margin:0 auto;
        .mylist{
            width: 100%;
            height: 100px;
            .all{
                float: left;
                width: 100px;
                height: 50px;
                margin-top:25px;
            }
            .type{
                float:left;
                position: relative;
                width: 100px;
                height: 50px;
                margin-top: 25px;
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
        .detail{
            width: 100%;
            position: relative;
            height: 410px;
            >.left{
              width: 400px;
              height: 400px;
              position: absolute;
              top:0px;
              left:-40px;
              z-index: 100;
              .imgbox{
                  width: 100%;
                  height: 100%;
                  position: relative;
                 img{
                     width: 100%;
                 }
               
              }
                
            }
            .right{
                position: absolute;
                width: 375px;
                height: 410px;
                right:0;
                top:0;
                // margin-top: -30px;
                padding-left:200px;
                padding-right:100px;
                background-color: #fff;
                h1{
                    margin-top:40px;
                    font-size: 16px;
                }
                h2{
                    margin-top:12px;
                    font-size: 12px;
                    color:#8D8D8D;
                }
                .price{
                    h1{
                        font-size:24px;
                        color:#FF5D5D;
                        span{
                            font-size: 24px;
                        }
                        s{
                            font-size: 18px;
                            color:#8D8D8D;
                            span{
                                font-size: 18px;
                            }
                        }
                    }
                }
                .mun{
                    width: 200px;
                    span{
                        cursor: pointer;
                    }
                    h1{
                        font-size:16px;
                        display: flex;
                        justify-content: space-between;
                        margin-top: 20px;
                        color:#B0B0B0;
                        div.def{
                            width: 60px;
                            height: 10px;
                            border-bottom:1px solid #888;
                        }
                    }
                }
                .type{
                    position: relative;
                    width: 375px;
                    height: 120px;
                    cursor: pointer;
                    .left{
                        width: 112px;
                        height: 30px;
                        float: left;
                        h2{
                            font-size: 16px;
                        }
                    }
                    .type-right{
                        width: 280px;
                        height: 120px;
                        float:right;
                        margin-right:-30px;  
                        .typebox{
                            width: 100%;
                            height: 100%;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            flex-wrap: wrap;
                            .mytype{
                                width: 86px;
                                height: 30px;
                                display: flex;
                                justify-content: space-around;
                                align-items: center;
                                border:1px solid #888;
                                &.active{
                                    background-color: #b9e6e0;
                                }
                                div.imgbox{
                                    width: 20px;
                                    height: 20px;
                                    img{
                                        width: 100%;
                                    }
                                }
                                div.mylike{
                                    width: 60px;
                                    height: 12px;
                                    font-size: 12px;
                                }
                            } 
                        }
                    }
                }
                .addbtn{
                    width: 140px;
                    height: 40px;
                    position: absolute;
                    left:220px;
                    bottom:20px;
                    background-color: #B0B1C3;
                    color:#fff;
                    font-size: 18px;
                    line-height: 40px;
                    text-align: center;
                    cursor: pointer;
                }
                .shopbtn{
                    width: 140px;
                    height: 40px;
                    position: absolute;
                    left:370px;
                    bottom:20px;
                    background-color: #fff;
                    box-sizing: border-box;
                    border:2px solid #B0B1C3;
                    color:#000;
                    font-size: 18px;
                    line-height: 36px;
                    text-align: center;
                    cursor: pointer;
                } 
            }
        }
     }
     .max{
         width:100%;
         height: 38px;
         padding-top:12px;
         background: #b0b1c3;
         margin-bottom: 100px;
         .detail{
             position: relative;
             width: 200px;
             height: 66px;
             margin:0 auto;
             margin-top:12px;
             background: #b9e6e0;
             text-align: right;
             .img{
                 width: 110px;
                 height: 120px;
                 position: absolute;
                 top:-36px;
                 left:-16px;
                 img{
                     width: 100%;
                 }
             }
             span{
             font-size: 20px;
             color:#fff;
             line-height: 66px;
             margin-right: 24px;
            }
         }
         
     }
     .imgdetail{
         width: 855px;
         height: auto;
         margin:0 auto;
        >.imgbox{
            width: 100%;
            // height: 800px;
            position: relative;
            img{
                width: 100%
            }
        }  
     }
 }
</style>
