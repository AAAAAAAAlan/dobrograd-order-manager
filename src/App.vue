<template>
  <v-app class="app">
    <TopBar/>
    <Interface/>
    <ProductList/>
    <!-- <OrderList/> -->
    <OrderListTest/>
  </v-app>
</template>

<script>
import Interface from './components/Interface'
import TopBar from './components/TopBar'
import ProductList from './components/ProductList'
// import OrderList from './components/OrderList'
import OrderListTest from './components/OrderListTest'

export default {
  name: 'App',

  components: {
    Interface,
    TopBar,
    ProductList,
    // OrderList,
    OrderListTest
  },

  data: () => ({
    str: `                                                                  
 _|_|_|_|   _|    _|     _|_|_|   _|    _|         _|     _|_|    
 _|         _|    _|   _|         _|  _|         _|_|   _|    _|  
 _|_|_|     _|    _|   _|         _|_|             _|       _|    
 _|         _|    _|   _|         _|  _|           _|     _|      
 _|           _|_|       _|_|_|   _|    _|         _|   _|_|_|_|  
                                                                  
                                                                  `
  }),

  methods: {
    message() {
      console.log ( '%c%s', 'color: red;', this.str );
      console.log ( '%c%s', 'color: blue;', this.str );
    }
  },

  created () {
    this.message();
  },
};
</script>

<style lang="scss">
*{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
}
.app{
  margin: 0;
  padding: 0;
  max-height: 100vh;
}
  
</style>