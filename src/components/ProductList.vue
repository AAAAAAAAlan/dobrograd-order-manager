<template>
  <v-card class="product-list">
    <v-list-item-group class="product-container" color="#554455">
        <v-list-item class="product" v-for="product in db" :key="product.name">
            <div class="name">{{product.name}}</div> <v-spacer></v-spacer> <div class="price">{{`${product.price.toLocaleString('en-GB')}₽`}}</div>
        </v-list-item>
    </v-list-item-group>
  </v-card>
</template>

<script>
import { db }  from '../db.js'

export default {
    data() {
        return {
            db,
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
                    width: 170px;
                }

                .price{
                    // padding-right: 10px;
                }
            } 
        }
    }
</style>>
