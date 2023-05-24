import { createStore } from 'vuex'

export default createStore({
  state: {
    allParents: [],
  },
  getters: {
    allParents(state) {
      return state.allParents
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
