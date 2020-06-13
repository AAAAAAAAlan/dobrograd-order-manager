<template>
  <v-app class="app">
    <TopBar/>
    <Interface/>
    <ProductList/>
    <OrderList/>
  </v-app>
</template>

<script>
import Interface from './components/Interface'
import TopBar from './components/TopBar'
import ProductList from './components/ProductList'
import OrderList from './components/OrderList'

export default {
  name: 'App',

  components: {
    Interface,
    TopBar,
    ProductList,
    OrderList
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
*{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  margin: 0;
  padding: 0;
  // max-height: 100vh;
}
  
</style>