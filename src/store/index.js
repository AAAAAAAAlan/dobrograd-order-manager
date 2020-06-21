import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedProducts: [],
    currentPriceArr: [],
  },
  mutations: {
    selectProduct(state, selectedProduct){
      // select product name and create chip 
      state.selectedProducts.push(selectedProduct.name)

      // 

      state.currentPriceArr.push(selectedProduct.price)

    },

    deleteSelected(state, index){
      state.selectedProducts.splice(index, 1)
      state.currentPriceArr.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getProduct: state => state.selectedProduct
  }
})
