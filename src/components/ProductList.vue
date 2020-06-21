<template>
  <v-card class="product-list">
    <v-list-item-group class="product-container" color="#554455">
        <v-list-item 
            class="product" v-for="product in db" 
            :key="product.name"
            @click="selectProduct(product)"
        >
            <div class="name">{{product.name}}</div> <v-spacer></v-spacer> <div class="price">{{`${product.price.toLocaleString('en-GB')}₽`}}</div>
        </v-list-item>
    </v-list-item-group>
  </v-card>
</template>

<script>
import { db }  from '../db.js'
// import { mapState } from 'vuex'

export default {
    data() {
        return {
            db
        }
    },

    methods: {
        selectProduct(product) {
            console.log(product.name)
            this.$store.commit('selectProduct', product)
        }
    },
}
</script>

<style lang="scss" scoped>
    .product-list{
        margin: 10px;
        max-height: 300px;
        overflow-y: scroll;
        overflow-x: hidden;

        .product-container{

            .product{
                font-weight: 600;
                color: #554455 !Important; 
                display: flex;
                justify-content: space-between;
                
                .name{
                    padding-left: 10px;
                }

                .price{
                    // padding-right: 10px;
                }
            } 
        }
    }
</style>>
