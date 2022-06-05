// 用户模块
export default {
  namespaced: true,
  state () {
    return {
      userinfo: {
        id: "",
        nickname: "",
        token:""
      }
    }
  },
  mutations: {
    setUser (state, payload) {
      state.userinfo=payload
    }
  }
}