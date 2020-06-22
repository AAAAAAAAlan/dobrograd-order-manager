<template>
  <v-card class="order-list">
    <v-list-item-group class="product-container" color="#554455">
        <p class="no-data" v-if="orders.length === 0">Выберите товары из списка, введите имя покупателя, затем добавьте заказ и он отобразится здесь.</p>
        <v-list-item v-for="(order, index) in orders" :key="index">
          <!-- <template v-slot:default="{ active }"> -->
            <v-list-item-action>
              <!-- <v-checkbox @click="completeOrder(order)" color="#554455" :input-value="active"></v-checkbox> -->
              <v-btn @click="completeOrder(index)" icon color="#554455">
                <v-icon color="#554455">mdi-check</v-icon>
              </v-btn>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="order-name"><strong>{{order.name}}</strong></v-list-item-title>
              <p class="ordered-products">{{order.order}}</p>
              <v-list-item-subtitle><strong>К оплате: </strong> {{ order.price }} </v-list-item-subtitle>
            </v-list-item-content>
          <!-- </template> -->
        </v-list-item>
    </v-list-item-group>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default{
    
    data() {
        return {

        }
    },

    methods: {
        completeOrder(index){
            this.$store.commit('completeOrder', index)
        }
    },

    computed: {
        ...mapState({
           orders: state => state.orders 
       }),
    },
}
</script>

<style lang="scss" scoped>
.order-list{
    margin: 10px;
    max-height: 300px;
    height: 30%;
    overflow-y: scroll;
}
.ordered-products{
    font-size: 9pt;
}

.order-name{
    color: #554455;
}

.no-data{
    padding-top: 43px;
    text-align: center;
    color: #554455;
}
</style>