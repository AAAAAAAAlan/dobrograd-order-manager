import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { db }  from '../db.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedProducts: [],
    currentPriceArr: [],
    orders: [],
    completedOrders: [],
    newDb: db
  },
  mutations: {
    selectProduct(state, selectedProduct){
      state.selectedProducts.push(selectedProduct.name)
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
      // store completed order
      state.completedOrders.push(state.orders[index])
      // delete completed order from the list
      state.orders.splice(index, 1)
    },

    clearCompletedOrders(state){
      state.completedOrders = []
    },

    applyPrice(state, payload){
      state.newDb[payload.index].price = parseInt(payload.price)
    }

    
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getProduct: state => state.selectedProduct
  },
  plugins: [createPersistedState()]
})
