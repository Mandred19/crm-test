
import firebase from 'firebase/app'

export default {
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        commit('_setError', e)
        throw e
      }
    },
    async logout({ commit }) {
      await firebase.auth().signOut()
      commit('_setUInfo', null)
      commit('_setCategories', [])
    },
    async register({ commit, dispatch }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const userId = await dispatch('loadUserId')
        await firebase.database().ref(`/users/${userId}/info`).set({
          bill: 10000,
          name,
        })
      } catch (e) {
        commit('_setError', e)
        throw e
      }
    },
    loadUserId() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
  },
}
