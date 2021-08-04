export const state = () => ({
  products: []
})

export const getters = {
  products: state => state.products

}

export const mutations = {
  addProduct: (state, product) => {
    const newProduct = JSON.parse(JSON.stringify(product))
    if (!state.products.length) newProduct.id = 1
    else newProduct.id = Math.max(...state.products.map(item => item.id)) + 1 /* генерирую айди для удобства */
    state.products.unshift(newProduct)
  },
  removeProduct: (state, index) => state.products.splice(index, 1),

  updateByFilter: (state, newArray) => {
    console.log(newArray)
    state.products = newArray
  }
}

export const actions = {
  addProduct: ({ commit }, product) => commit('addProduct', product),

  removeProduct: ({ commit }, index) => commit('removeProduct', index),
  updateByFilter: ({ commit }, newArray) => commit('updateByFilter', newArray)
}
