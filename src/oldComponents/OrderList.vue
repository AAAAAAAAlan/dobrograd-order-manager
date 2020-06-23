<template>
    <v-card  class="order-list">
        <v-data-table
            :headers="headers"
            :items="orders"
            :items-per-page="5"
            hide-default-footer
            hide-default-header
            show-group-by
            no-data-text="Выберите товары из списка, введите имя покупателя, затем добавьте заказ, и он отобразится здесь."
        ></v-data-table>
    </v-card>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    data () {
      return {
        noData: `1. Выберите товары из списка и добавьте их в корзину
            \n 2. Нажмите 'Добавить в заказ' чтобы введённый заказ отобразился здесь`,
        headers: [
            {text: 'Имя', value: 'name'},
            {text: 'Товары', value: 'order'},
            {text: 'Цена', value: 'price'}
        ],
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
*{
    margin: 10px; // это плохое решение // но спустя неделю я не знаю почему я так  решил поэтому оставлю
}

.order-list{
    margin: 10px;
    max-height: 300px;
    height: 30%;
    overflow-y: scroll;
    // color: #554455 !Important; 
}

</style>>

