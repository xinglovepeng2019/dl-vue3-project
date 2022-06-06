// 用户模块
export default {
  namespaced: true,
  state () {
    return {
      userInfo: {
        username: "",
        token:""
       }
    }
  },
  mutations: {
    setUserInfo (state, payload) {
      state.userInfo=payload
    }
  }
}