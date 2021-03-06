export default {
  state: () => ({
    name: 'tony'
  }),
  getters: {},
  mutations: {
    SET_NAME (state, payload) {
      state.name = payload
    }
  },
  actions: {
    saveName ({ commit }, payload) {
      commit('SET_NAME', payload)
    }
  }
}
