import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//store data
const state = {
  user: null,
  token: ""
}

//data action.
const mutations = {
  saveUser(state, user){
    state.user = user
    localStorage.setItem('user', JSON.stringify(user))
  },
  saveToken(state, token){
    state.token = token
    localStorage.setItem('token', token)
  },
  logout(state){
    state.user = null
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }
}


Vuex.Store.prototype.init = function () {
  state.user = JSON.parse(localStorage.getItem('user'))
  state.token = localStorage.getItem('token')
}

export default new Vuex.Store({
  state,
  mutations
})
