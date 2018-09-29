import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const components = {
 index:()=>import('@/views/index'),
 register:()=>import('@/views/register'),
 writenote:()=>import('@/views/writenote')
};
export default new Router({
  routes: [
    {
      path: "/",
      meta: {
        title: "首页"
      },
      component: components.index
    },{
      path:'/register',
      meta:{
        title:'注册'
      },
      component:components.register
    },{
      path:'/writenote',
      meta:{
        title:'写笔记'
      },
      component:components.writenote
    }
  ]
});
