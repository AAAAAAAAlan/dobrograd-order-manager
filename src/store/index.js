import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedProducts: [],
    currentPriceArr: [],
    orders: []
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
    },

    pushToOrders(state, currentOrder){
      state.orders.push(currentOrder)
    },

    completeOrder(state, index){
      state.orders.splice(index, 1)
    },

      // adds 3 fake orders for dev purposes 
    debugOrders(state){
      state.orders.push({name: 'Аслан', order: 'FAMAS', price: 500}, {name: 'Сослан', order: 'FAMAS', price: 500}, {name: 'Абубакар', order: 'FAMAS', price: 500})
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
