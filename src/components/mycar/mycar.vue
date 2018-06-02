<template>   
    <div class="main">
        <div class="carstart">
            <div class="carimg">
               <img src="../../assets/img/mycar.png" alt="">
            </div>
            <div class="step">
              <img src="../../assets/img/myself.png" alt="">
            </div>
        </div>
        <div class="shopcar">
          <div class="title">
              <div class="allselect">
               <input type="checkbox"  > 全选
              </div>
              <div class="list">
                 <p>商品图片</p>
                 <span>PHOTO</span>
              </div>
              <div class="list">
                  <p>商品名称</p>
                 <span>NAME</span>
              </div>
              <div class="list">
                   <p>商品单价</p>
                 <span>COUNT</span>
              </div>
              <div class="list">
                   <p>商品数量</p>
                 <span>PRICE</span>
              </div>
              <div class="list">
                  <p>商品小计</p>
                 <span>SUBMI</span>
              </div>
              <div class="list">
                  <p>编辑</p>
                 <span>EDIT</span>
              </div>
          </div>
         
           <div class="shoplist" v-for='(item,index) in shoplist' :key='index'>
              <div class="mycheck">
                  <input type="checkbox" @click='additem(item,index)' ref=index>
              </div>
              <div class="shopimg">
                  <img :src="JSON.parse(item.img)[0].url" alt="">
              </div>
              <div class="shopname">
                  <p>{{item.shopname}}</p>
                  <h1>JKHLDIO;I</h1>
                  <p>普通 6瓶装</p>
              </div>
              <div class="price">
                  <span>{{item.price}}</span>
              </div>
              <div class="mun">
                  <p>
                        <el-button  circle size="mini" @click='reduce(item)'>-</el-button>
                        <el-button circle >{{item.amount}}</el-button>
                        <el-button circle size="mini" @click='add(item)'>+</el-button>
                  </p>
              </div>
              <div class="st">
                {{item.amount*item.price}}
              </div>
              <div class="myedit">
                  <div class="cellc" @click='delbady(item)'>
                      删除宝贝
                  </div>
              </div>
          </div>
        </div>
        <div class="gopay">
            <div class="money">
                <div class="left">
                    您能一共需要支付
                </div>
                <div class="right">
                   {{allprice}}元
                </div>
            </div>
            <div class="btn">
                <el-button type="danger" @click='pay()'>提交订单</el-button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
             active: 0,
             shoplist:[
                 
             ],
             totle:0,
             myorder:[]
        }
       
    },
    computed:{
        allprice:function(){
            let nub=0;
           this.shoplist.forEach(val => {
               nub+=val.amount*val.price;
           });
           return nub;
        }
    },
    mounted(){
        let user='';
        if(sessionStorage.username){
            user=sessionStorage.username;
        }else{
            this.$message.error("请先登录");
        }       
       this.$http.post('/api/shopcar/my',{user:user},{headers:{'content-type':'application/json'}}).then(res=>{
          this.shoplist=res.body;
        //   console.log(this.shoplist);
       })
    },
    methods: {
        additem(item,index){
            if(item.flag==1){
                item.flag=0
                let n=this.myorder.findIndex(val=>{
                    return val.id==item.id;
                })
                this.myorder.splice(n,1);
            }else{
              item.flag=1    
              this.myorder.push(item);                        
            }
        },
        pay(){
          let data=JSON.stringify(this.myorder);
          this.$http.post('/api/shopcar/update',{data:data},{headers:{'content-type':'application/json'}}).then(res=>{
              if(res.body='ok'){
                  this.$message({
                        message:"提交成功！",
                        type: 'success'
                    })
              }else{
                  this.$message({
                      message:'无修改',
                      type:'success'
                  })
              }
            this.$router.push('/mybook');
              
          })
      },
 //删除商品     
      delbady(item){
        let n=this.shoplist.findIndex(val=>{
            return val.id==item;
        });
        this.shoplist.splice(n,1);
        // console.log(item,n);
        // console.log(this.shoplist);
      },
//减少个数      
      reduce(item){
          let n=this.shoplist.findIndex(val=>{
              return val.amount==item.amount;
          });
          if(this.shoplist[n].amount>0){
            this.shoplist[n].amount--;

          }
      },
//增加个数      
      add(item){
         let n=this.shoplist.findIndex(val=>{
             return val.amount==item.amount;
         });
         this.shoplist[n].amount++;
      }
    }
}
</script>
<style lang="scss" scoped>
   .main{
       width: 855px;
       height: auto;
       margin:0 auto;
       margin-top: 40px;
       .carstart{
           width: 100%;
           height: 140px;
           .carimg{
               float:left;
               width: 240px;
               height: 100%;
               img{
                   width: 100%;
               }
           }
           .step{
               float: right;
               width: 500px;
               height: 140px;
               img{
                   width: 100%;
               }
           }
       }
       .shopcar{
           width: 100%;
           height: auto;
           border:1px solid #888;
           border-radius: 5px;
           margin-bottom:15px;
           .title{
               width:100%;
               height: 30px;
               padding: 20px 0;
               border-bottom:1px solid #888;
               .allselect{
                   width: 80px;
                   height: 100%;
                   margin-left:20px;
                   float: left;
               }
               >.list{
                   width: 121px;
                   height: 100%;
                   float: left;
                   position: relative;
                   padding-left: 3px;
                   p{
                       font-size: 16px;
                       margin-left: 10px;

                   }
                   span{
                       font-size: 12px;
                       color:#b0b1c3;
                       margin-left: 10px;
                   }
                   &::after{
                     position: absolute;
                     content:'';
                     top: 0;
                     left:0;
                     width: 2px;
                     height: 40px;
                     background: #b0b1c3;
                   }
               }
           }
       }
       .shoplist{
           height: 150px;
           width: 100%;
           display: flex;
           justify-content: space-between;
           text-align: center;
           border-bottom:1px solid #888;
           >div{
               width: 130px;                             
           }
           .mycheck,.price,.st,.myedit{
               display: flex;
               justify-content: center;
               align-items: center;
           }
           .st{
               color:#800;
               font-size:24px;
           }
           .shopimg{
               margin-top:15px;
               width: 150px;
               height: 135px;
               img{
                   width: 100%;
                   height: 110px;
               }
           }
            .shopname{
               display: flex;
               flex-direction: column;
               justify-content: space-around;
           }
           .mun{
               width: 200px;
               line-height: 140px;
           }
           .mycheck{
               width:80px;
               height: 150px;
           }
             .cellc{
                 width: 100px;
                 height: 30px;
                 line-height: 30px;
                 border-radius: 20px;
                 color:#fff;
                 background: #B0B1C3;
                 cursor: pointer;
             }

       }
       .gopay{
           width: 100%;
           height: 100px;
           position: relative;
           margin-bottom: 15px;
           .money{
             width: 200px;
             position: absolute;
             top:0;
             right:0;
             height: 50px;
             .left{
                 width: 100px;
                 height: 50px;
                 float: left;
                 color:#b0b1c3;
                 position: relative;
                //  &::after{
                //    position: absolute;
                //    content:'/';
                //    top:0;
                //    right:-5px;
                //    font-size: 40px;
                //    color:#888;
                //    line-height: 50px;
                //  }
             }
             .right{
                 float: right;
                 width: 100px;
                 font-size: 18px;
                 color:red;
                 text-align: right;
             }
           }
           .btn{
              position: absolute;
              right:0;
              bottom:0;
           }
       }
   }
</style>
