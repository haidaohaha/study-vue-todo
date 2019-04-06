import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:'拉萨'
  },
  mutations: {
    ChangeCity(state,city){
      state.city = city
    }
  },
  actions: {
    ClickCityName(ctx,city){
      ctx.commit('ChangeCity',city)
    }
  },
})
