export const state = () => ({
  snackBarText: ''
})

export const getters = {
  snackBarText: state => state.snackBarText
}

export const mutations = {
  activateSnack: (state, snackBarText) => {
    state.snackBarText = snackBarText
  }
}

export const actions = {
  activateSnack: ({ commit }, snackBarText) => {
    commit('activateSnack', snackBarText)
    setTimeout(() => commit('activateSnack', ''), 1000)
  }

}
