export const actions = {
  getDataFromLocalStorage: ({ commit }, dataName = '') => {
    const data = localStorage.getItem(dataName)
    if (data !== null) commit('products/updateProductsArray', JSON.parse(data), { root: true })
  },

  updateLocalStorage: ({ commit }, data = { dataName: '', dataToAdd: [] }) => {
    localStorage.removeItem(data.dataName)
    localStorage.setItem(data.dataName, JSON.stringify(data.dataToAdd))
  }
}
