<template>
<div class="product-list-container">
    <v-text-field
        class="search-field"
        name="name"
        label="Поиск по товарам"
        dense
        color="#554455"
        v-model="search"
    ></v-text-field>
<v-card class="product-list">
    <v-list-item-group class="product-container" color="#554455">
        <v-list-item 
            class="product" v-for="product in filteredGuns" 
            :key="product.name"
            @click="selectProduct(product)"
        >
            <div class="name">{{product.name}}</div> <v-spacer></v-spacer> <div class="price">{{`${product.price.toLocaleString('en-GB')}₽`}}</div>
        </v-list-item>
    </v-list-item-group>
</v-card>
</div>
</template>

<script>
import { db }  from '../db.js'
// import { mapState } from 'vuex'

export default {
    data() {
        return {
            db,
            search: ''
        }
    },

    methods: {
        selectProduct(product) {
            this.$store.commit('selectProduct', product)
        }
    },

    computed: {
        filteredGuns() {
        return db.filter((gun) =>{
            return gun.name.toLowerCase().match(this.search.toLowerCase())
        })
    },
    },
}
</script>

<style lang="scss" scoped>
// $text-field-outlined-fieldset-border: 20px solid currentColor !important;

.product-list-container{
    .search-field{
        margin: 8px 40% 0 25px;
    }

    .product-list{
        margin: 10px;
        margin-top: 0px;
        max-height: 150px;
        overflow-y: scroll;
        overflow-x: hidden;

        .product-container{

            .product{
                font-weight: 600;
                color: #554455 !important; 
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
}
</style>>
