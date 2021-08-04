export const state = () => ({
  isMobile: false
})

export const getters = {
  isMobile: state => state.isMobile
}

export const mutations = {
  isMobileCheck: (state) => {
    console.log(/Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iPod |iPad|iPhone/i
      .test(navigator.userAgent))
    state.isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iPod|iPad|iPhone/i
      .test(navigator.userAgent)
    console.log(state.isMobile)
  }
}

export const actions = {
  isMobileCheck: ({ commit }) => commit('isMobileCheck')
}
