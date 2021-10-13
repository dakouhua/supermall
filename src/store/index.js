import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//1.安装插件
Vue.use(Vuex)

//创建Store对象(创建插件)
const Store = new Vuex.Store({
  state: {
    cartList:[]
  },
  actions,
  mutations,
  getters,
})

//3.挂载到Vue实例上
export default Store