
export const state = () => ({
  filters: [
    {
      byWhat: 'По умолчанию',
      min: false
    },
    {
      byWhat: 'По цене',
      min: false
    },
    {
      byWhat: 'По названию',
      min: false
    }
  ],
  activeFilter: 'По умолчанию'
})

export const getters = {
  filteredArray: state => state.filteredArray,
  filters: state => state.filters,
  activeFilter: state => state.activeFilter
}

export const mutations = {
  // изменяю обьекты по ссылке
  // явно указываю true/false для читабельности
  filterFunction (state, data) {
    if (data.filter.byWhat === 'По умолчанию' && data.filter.min === false) {
      data.products.sort((a, b) => a.id - b.id)
      data.filter.min = true
    } else if (data.filter.byWhat === 'По умолчанию' && data.filter.min === true) {
      data.products.sort((a, b) => b.id - a.id)
      data.filter.min = false
    }

    if (data.filter.byWhat === 'По цене' && data.filter.min === false) {
      data.products.sort((a, b) => a.price - b.price)
      data.filter.min = true
    } else if (data.filter.byWhat === 'По цене' && data.filter.min === true) {
      data.products.sort((a, b) => b.price - a.price)
      data.filter.min = false
    }

    if (data.filter.byWhat === 'По названию' && data.filter.min === false) {
      data.products.sort((a, b) => a.name.localeCompare(b.name))
      data.filter.min = true
    } else if (data.filter.byWhat === 'По названию' && data.filter.min === true) {
      data.products.sort((a, b) => b.name.localeCompare(a.name))
      data.filter.min = false
    }
    state.activeFilter = data.filter.byWhat
  }
}

export const actions = {
  filterFunction: ({ commit }, data = { filter: { byWhat: '', min: false }, products: [] }) => commit('filterFunction', data)
}
