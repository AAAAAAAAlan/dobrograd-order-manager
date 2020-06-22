<template>
  <div class="interface">
      <v-card class="mx-auto">
        <div class="title-container">
          <v-card-title @click="debugOrders()" class="sum">СУММА ЗАКАЗА</v-card-title>
        </div>
        <v-card-subtitle class="card-subtitle">{{`${Math.round(orderPrices).toLocaleString('en-GB')}₽` }}</v-card-subtitle>
        <v-card-text>
          <v-chip
            @click:close="deleteSelected(index)"
            v-for="(selectedProduct, index) in selectedProducts" class="current-products"
            close
            :key="index"
            >{{selectedProduct}}</v-chip>
            <v-chip
              v-if="selectedProducts.length == 0"
            >Товары отсутствуют</v-chip>
        </v-card-text>
        <v-slider
          class="slider"
          step="5"
          v-model="slider"
          thumb-label="always"
          color="#554455"
          track-color="#8C7D8C"
          :thumb-size="24"
        ></v-slider>
        <v-text-field
          color="#554455"
          class="buyer-name"
          v-model="buyerName" 
          label="Имя покупателя" 
          ></v-text-field>

        <div class="order-buttons">
          
          <v-spacer class="spacer"></v-spacer>
          
          <v-btn
            class="submit-order"
            medium  
            color="#554455"
            @click="submitOrder(), deleteOrder()"
          >
            Добавить заказ
          </v-btn>

          <v-btn
            class="delete-order"
            medium  
            color="#554455"
            @click="deleteOrder()"
          >
            <v-icon color="white">mdi-delete</v-icon>
          </v-btn>

        </div>

        <v-spacer class="spacer"></v-spacer>
      </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      slider: 0,
      buyerName: '',
      arr: []
    }
  },

  methods: {
    deleteSelected(index){
      console.log('deleted', index)
      this.$store.commit('deleteSelected', index)
    },

    deleteOrder(){
      while(this.selectedProducts.length){
        this.$store.commit('deleteSelected', 0)
      }
    },

    submitOrder(){
      let currentOrder = {name: this.buyerName, order: this.selectedProducts.join(', '), price: `${Math.round(this.orderPrices).toLocaleString('en-GB')}₽`}
      this.$store.commit('pushToOrders', currentOrder)
    },
    
    debugOrders(){
      this.$store.commit('debugOrders')
    }

  },

   computed: {
      ...mapState({
           selectedProducts: state => state.selectedProducts,
           currentPrice: state => state.currentPriceArr,
           orders: state => state.orders 
       }),

      orderPrices(){
        let currentPriceTemp = this.currentPrice.slice().reduce((a, b) => a + b, 0)
        return currentPriceTemp = currentPriceTemp + currentPriceTemp * (this.slider / 100)
      },

   },
 
  created(){
    this.count = this.$store.getters.getCount
  }
}
</script>

<style scoped lang="scss">
.interface{
  margin: 10px;
  .title-container{
    display: flex;
    justify-content: space-between;
    color: #554455;

    .logo{
      height: 16px;
      margin-right: 6px;
      margin-top: 6px;
    }
    .sum{
      padding-bottom: 0;
      font-weight: 600;
    }
  }
  .card-subtitle{
    font-size: 16pt;
    font-weight: 500;
    padding-top: 0;
    color: #554455 !Important;
  }
  
  .slider{
    margin-top: 15px;
    padding: 0 10px;
  }

  .order-buttons{
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: center;

    .submit-order{
      grid-column-start: 2;
      grid-column-end: 2;
      margin: 0 10px 0 10px;
    }

    .delete-order{
      width: 10%;
      grid-column-start: 3;
      grid-column-end: 3;
      margin: 0 10px 0 10px;
    }

    .spacer{
    // color: white;
    // margin: 10px;
    margin: 0 18px 0 18px;
  }
  }
  
  .buyer-name{

    padding: 0 17.5px;
    // prepend-icon="mdi-account"
  }

  .current-products{
    font-size: 9pt;
    margin: 3px;
  }

  .submit-order{
    color: white;
    display: block;
    margin: 0 auto;
  }

  .spacer{
    // color: white;
    padding: 12px;
    // padding-right: 2px;
  }
}
</style>