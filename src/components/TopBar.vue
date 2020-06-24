<template>
  <div class="top-bar">
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Dobrograd Order Manager</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn @click="openGithub" icon>
        <v-icon>mdi-star</v-icon>
      </v-btn>

      <v-dialog v-model="dialog" width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
          icon
          dark
          v-bind="attrs"
          v-on="on">
            <v-icon>mdi-database-edit</v-icon>
          </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Изменение позиций</span>
        </v-card-title>
        <div class="change-price">
          <v-card-text 
            v-for="(product, index) in newDb" 
            :key="product.name">{{product.name}}<v-text-field
            :ref="`priceInput${index}`"
            @keyup.enter="applyPrice(index, product)" 
            dense 
            outlined 
            color="#554455"
            :value="product.price"></v-text-field>
            <v-btn @click="applyPrice(index, product)" class="apply-price" color="#554455">Сохранить цену</v-btn>
          </v-card-text> 
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#554455" text @click="dialog = false">Ок</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      width=90%
    >
    <v-card class="graph">
      <v-sparkline
        :value="completedOrdersPrices"
        color="#554455"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-card>

    <v-card class="completed-orders">
      <v-data-table color="#554455" 
      no-data-text="Здесь будут отображаться уже выполненные заказы" 
      hide-default-footer 
      hide-default-header 
      disable-sort dense 
      :headers="headers" 
      :items="completedOrders" 
      item-key="price" 
      class="elevation-1"></v-data-table>
    </v-card>
    <div v-if="completedOrders.length > 1" class="text-center">
      <v-btn class="clear-completed" color="#554455" text-color="white" @click="clearCompletedOrders()">ОЧИСТИТЬ ИСТОРИЮ ЗАКАЗОВ</v-btn>
    </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    data: () => ({
      drawer: false,
      value: [200, 100, 500, 400],
      dialog: false,
      
      headers: [{ text: 'Имя', value: 'name' }, { text: 'Товары', value: 'order' }, { text: 'Выручка', value: 'price' },]
    }),

    computed: {
        ...mapState({
           completedOrders: state => state.completedOrders,
           newDb: state => state.newDb
       }),

       completedOrdersPrices(){
         let arr = []
         for(let i = 0; i < this.completedOrders.length; i++){
           arr.push(this.completedOrders[i].price)
         }
         return arr
       }, 
    },

    methods: {
      clearCompletedOrders() {
        this.$store.commit('clearCompletedOrders')
      },

      applyPrice(index){
        let price = this.$refs[`priceInput${index}`][0].$refs.input._value
        this.$store.commit('applyPrice', {price, index})
      },

      openGithub(){
        let url = 'https://github.com/AlanSnowle/dobrograd-tokarnya'
        let win = window.open(url);
        win.focus();
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

.completed-orders{
  margin: 10px;
  max-height: 70%;
  overflow-y: scroll;
}

.clear-completed{
  color: white !important;
}
.apply-price{
  color: white !important;
}
</style>