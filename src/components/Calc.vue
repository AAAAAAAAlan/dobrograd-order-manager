<template>
  <div class="calc">
    <div class="cart">
      <div class="cart-header">
       <p class="order-sum">Сумма заказа</p>
       <img @click="resetCart()" class="logo" src="https://img.icons8.com/small/32/000000/recurring-appointment.png"/>
      </div>
      <p class="total"> {{ `$${orderSum}` }} </p>
      <p v-for="(weapon, name) in weaponObject" v-bind:key="name" class="order"> {{`${name} x ${weapon}`}} </p>
    </div>
    <h1 class="product-list-header">ТОВАРЫ</h1>
    <input v-model="search" type="text" class="product-search">
    <div class="product-list">
      <div v-for="gun in filteredGuns" v-bind:key="gun.name" class="product">
         {{`${gun.name} — ${gun.price}`}} 
         <div class="add-to-cart" @click="addToCart(gun), addToOrder(gun)">add to cart</div> 
      </div> 
    </div>
  </div>
</template>

<script>
import { db }  from '../db.js'

export default {
  data() {
    return {
      db,
      orderSum: 0,
      order: 'НЕТ ТОВАРОВ',
      weaponObject: {},
      search: ''
    }
  },

  methods: {
    addToCart(gun){
      this.orderSum = this.orderSum + gun.price
    },
    resetCart(){
      this.orderSum = 0
      this.weaponObject = {} 
    },
    addToOrder(gun){
      this.order = gun.name
      var stringArray = this.order.split(' ')

      stringArray.forEach(weapon => {
        if (weapon in this.weaponObject) {
          this.weaponObject[weapon] += 1
        } else {
            this.weaponObject[weapon] = 1
        }
      })
    }
  },

  computed: {
    filteredGuns() {
      return db.filter((gun) =>{
        return gun.name.match(this.search)
      })
    },
  },

}
</script>

<style lang="scss">
$dobrograd-purple: #554455;
$dobrograd-white: #eeeeee;
$dobrograd-grey: #dbdbdb;

  .calc{
    user-select: none;

    .cart{
      background-color: $dobrograd-purple;
      color: $dobrograd-white;
      margin: 10px;
      border-radius: 10px 10px 10px 10px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      padding: 5px;

      .cart-header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo{
          height: 16px;
          filter: invert(1);
          padding-right: 5px;
          cursor: pointer;
        }

      }

      .order-sum{
        padding: 5px;
        padding-left: 20px;
        font-size: 10pt;
        text-transform: uppercase;
      }

      .total{
        font-size: 16pt;
        padding-left: 23px;
        font-weight: 600;
      }
      
      .order{
        padding: 5px;
        padding-left: 20px;
        font-size: 8pt;
      }
    }

    .product-list-header{
      margin-left: 15px;
      font-size: 13pt;
      color: $dobrograd-purple;
    }

    .product-search{  
      margin: 5px 10px;
      border-radius: 10px 10px 10px 10px;
      background-color: $dobrograd-grey;
      outline: none;
      box-shadow: none;
      border: none;
      padding: 5px;
    }

    .product-list{
      height: 532px;
      overflow-y: scroll;
      .product{
        background-color: $dobrograd-purple;
        color: $dobrograd-white;
        margin: 5px 10px;
        border-radius: 10px 10px 10px 10px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        padding: 5px;
        padding-left: 20px;
        // cursor: pointer;
      }
      .add-to-cart{
        // padding-left: 0px;
      }
    }
  }
</style>