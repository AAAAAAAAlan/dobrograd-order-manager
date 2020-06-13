<template>
    <v-card  class="order-list">
        <v-data-table
            :headers="headers"
            :items="products"
            :items-per-page="5"
            hide-default-footer
            hide-default-header
            show-group-by
        ></v-data-table>
    </v-card>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
            {
                text: 'Name',
                align: 'start',
                sortable: false,
                value: 'name',
            },
            {text: 'Product', value: 'product'},
            {text: 'Price', value: 'price'}
        ],
        products: [
            {
                name: 'Steve Hueys',
                product: 'AK',
                price: '500p'
            },
            {
                name: 'Steve Hueys',
                product: 'AK',
                price: '500p'
            },
            {
                name: 'Steve Hueys',
                product: 'AK',
                price: '500p'
            },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
*{
    margin: 10px; // это хуёвое решение
}

.order-list{
    margin: 10px;
    max-height: 300px;
    overflow-y: scroll;
}

</style>>

