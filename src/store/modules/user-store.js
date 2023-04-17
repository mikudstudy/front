import { userService } from '@/services/user-service.js'
import { utilService } from '@/services/util-service'

export default {
  state: {
    loggedinUser: null,
  },
  getters: {
    user(state) {
      return state.loggedinUser
    },
  },
  mutations: {
    setUser(state, { user }) {
      state.loggedinUser = user
    },
  },
  actions: {
    async login({ commit }, { cred }) {
      const user = await userService.login(cred)
      commit({ type: 'setUser', user })
      utilService.saveToSessionStorage('user', user)
    },
    async signup({ commit }, { cred }) {
      try {
        console.log('cred', cred)

        const user = await userService.signup(cred)
        commit({ type: 'setUser', user })
        utilService.saveToSessionStorage('user', user)
      } catch (err) {
        console.log(err)
      }
    },
    async logout({ commit }) {
      try {
        await userService.logout()
        commit({ type: 'setUser', user: null })
        sessionStorage.removeItem('user')
      } catch (err) {
        console.log(err)
      }
    },
    async validateUser({ commit }, { cred }) {
      try {
        commit({ type: 'validateUser', user: null })
        return userService.validate()
      } catch (err) {
        console.log(err)
      }
    },
  },
}
