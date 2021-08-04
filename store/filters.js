
export const state = () => ({
  activeFilter: {
    byWhat: 'По умолчанию',
    min: false
  }
})

export const getters = {
  filteredArray: state => state.filteredArray,
  activeFilter: state => state.activeFilter
}

export const mutations = {
  // изменяю обьекты по ссылке
  filterByNumber: (state, data = { filter: {}, filteredArray: [], direction: 'MinMax' }) => {
    if (data.direction === 'MinMax') {
      data.filteredArray.sort((a, b) => a[data.filter.key] - b[data.filter.key])
    } else if (data.direction === 'MaxMin') {
      data.filteredArray.sort((a, b) => b[data.filter.key] - a[data.filter.key])
    }
    state.activeFilter = { ...data.filter }
  },

  filterByString: (state, data = { filter: {}, filteredArray: [], direction: 'MinMax' }) => {
    if (data.direction === 'MinMax') {
      data.filteredArray.sort((a, b) => a[data.filter.key].localeCompare(b[data.filter.key]))
    } else if (data.direction === 'MaxMin') {
      data.filteredArray.sort((a, b) => b[data.filter.key].localeCompare(a[data.filter.key]))
    }
    state.activeFilter = { ...data.filter }
  }

}

export const actions = {

  filterBy: ({ commit }, data = { filter: {}, filteredArray: [], switchDirection: true }) => {
    if (data.switchDirection) data.filter.min = !data.filter.min
    const direction = data.filter.min ? 'MinMax' : 'MaxMin'
    if (data.filter.key === 'id' || data.filter.key === 'price') {
      commit('filterByNumber', { filter: data.filter, filteredArray: data.filteredArray, direction })
    } else if (data.filter.key === 'name') {
      commit('filterByString', { filter: data.filter, filteredArray: data.filteredArray, direction })
    }
  }

}
