import Vue from 'vue'
import App from './App.vue'
import  Vuex from  'vuex'
import '../node_modules/todomvc-app-css/index.css'
import '../node_modules/todomvc-common/base.css'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Vuex)


const store = new Vuex.Store({
    state:{
      todos:[
        {id:1,name:"吃饭",completed:false},
        {id:2,name:"睡觉",completed:false},
        {id:3,name:"看电影",completed:false},
      ]},

      mutations:{
    
        delete01(state,id){
            //完成删除功能
        for (let i=0;i<state.todos.length;i++) {
          if(state.todos[i].id==id){
            state.todos.splice(i,1)
          }
        }
      },
      
      insert2(state,data){
        state.todos.push(data)
      }
    },
  
    
    })

 const router = new VueRouter({
   routes:[
    {path:"/",redirect:"/all"},
    {path:"/all",component:()=>import('./components/all.vue')},
   ]

 })

 Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
