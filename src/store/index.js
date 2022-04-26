import Vue from 'vue'
import Vuex from 'vuex'
import request from './request'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    userInfo: null,
  },
  mutations: {
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
  },
  actions: {
    async getMemberByToken(context, arg) {
      const response = request.post('/api/getMemberByToken', arg)
      const userInfo = response.data
      userInfo && commit('SET_USERINFO', userInfo)
      return response
    },

    async selList(context, arg) {
      const response = request.post('/api/selList', arg)
      return response
    },

    
  },
  modules: {},
})
