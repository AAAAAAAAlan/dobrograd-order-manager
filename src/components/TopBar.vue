<template>
  <div class="top-bar">
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Dobrograd Craft Calculator</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      width=90%
    >
      <v-sparkline
        :value="value"
        color="black"
        line-width="2"
        padding="16"
      ></v-sparkline>
      <v-btn @click="clearCompletedOrders()">clear completed orders</v-btn>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    data: () => ({
      drawer: false,
      value: [200, 100, 500, 400]
    }),

    computed: {
        ...mapState({
           completedOrders: state => state.completedOrders 
       }),

       completedOrdersPrices(){
         let arr = []
         for(let i = 0; i < this.completedOrders.length; i++){
           arr.push(this.completedOrders[i].price)
         }
         return arr
       }
    },

    methods: {
      clearCompletedOrders() {
        this.$store.commit('clearCompletedOrders')
      }
    },
  }
</script>

<style>
.v-toolbar__content{
    background-color: #554455 !Important;
}

.graph{
  margin: 10px;
  
}
</style>