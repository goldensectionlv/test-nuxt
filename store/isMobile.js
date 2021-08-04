export const state = () => ({
  isMobile: false
})

export const getters = {
  isMobile: state => state.isMobile
}

export const mutations = {
  isMobileCheck: (state) => {
    state.isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iPod|iPad|iPhone/i
      .test(navigator.userAgent)
  }
}

export const actions = {
  isMobileCheck: ({ commit }) => commit('isMobileCheck')
}
