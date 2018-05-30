import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import All from '@/components/all/allproduct'
import Detail from '@/components/common/detail'
import Reglog from '@/components/indexlog/reglog'
import regist from '@/components/indexlog/regist'
import mycar from '@/components/mycar/mycar'
import mybook from '@/components/mybook/mybook'
import mycenter from '@/components/mycenter/mycenter'
import pay from '@/components/mypay/pay'
import myhead from '@/components/common/myhead'
import myfoot from '@/components/common/myfoot'
import mymain from '@/components/index/mymain'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect:'/mymain',
      children:[
        {
          path:'myhead',
          name:'myhead',
          component:myhead,
        },
        {
          path:'myfoot',
          name:'myfoot',
          component:myfoot
        },
        {
          path:'pay',
          name:'pay',
          component:pay
        },
        {
          path:'allproduct',
          name:'All',
          component:All
        },
        {
          path:'detail/:id',
          name:'Detail',
          component:Detail
        },
       
        {
          path:'mycar',
          name:'mycar',
          component:mycar
        },
        {
          path:'mycenter',
          name:'mycenter',
          component:mycenter

        },
        {
          path:'mybook',
          name:'mybook',
          component:mybook
        },
        {
          path:'mymain',
          name:'myamin',
          component:mymain
        }

      ]
    },
    {
      path:'/reglog',
      name:'Reglog',
      component:Reglog
    },
    {
      path:'/regist',
      name:'regist',
      component:regist
    },

  ]
})
