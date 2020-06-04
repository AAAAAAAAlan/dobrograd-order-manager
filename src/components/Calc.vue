<template>
  <div class="calc">
    <div class="cart">
      <div class="cart-header">
       <p class="order-sum">Сумма заказа</p>
       <img @click="resetCart()" class="logo" src="https://img.icons8.com/small/32/000000/recurring-appointment.png"/>
      </div>
      <p class="total"> {{ `₽${Math.round(orderSum)}` }} </p>
      <!-- <p class="extra-charge">Наценка на заказ {{this.orderSum + this.orderSum * (this.range / 100)}}</p> -->
      <div class="extra-charge-container">
        <div @click="addExtra(percent)" v-for="percent in extraChargePercents" v-bind:key="percent" class="extra-charge-button">{{`+${percent}%`}}</div>
      </div>
      <div class="weapons-order">
        <p v-for="(weapon, name) in weaponObject" v-bind:key="name" class="order"> {{`${name} x${weapon}`}} </p>
        <p class="order-none" v-if="Object.keys(weaponObject).length === 0">НЕТ ТОВАРОВ</p>
      </div>
      <div class="add-buyer">
        <input placeholder="Имя Покупателя" v-model="buyerName" class="buyer-name" type="text">
        <img @click="formOrder(), resetCart()" class="logo" src="https://img.icons8.com/material-rounded/48/000000/add.png"/>
      </div>
    </div>

    <div class="orders-container">
      <p class="orders-header">СПИСОК ЗАКАЗОВ</p>
      <div v-for="(orderInList, index) in orders" :key="index" class="orders">
        <p class="order">{{ orderInList }}</p>
        <img @click="removeOrder(index)" class="logo" src="https://img.icons8.com/material/24/000000/filled-trash.png"/>
      </div>
    </div>

    <h1 class="product-list-header">ТОВАРЫ</h1>
    <input placeholder="Введите название оружия" v-model="search" type="text" class="product-search">
    <div class="product-list">
      <div v-for="gun in filteredGuns" v-bind:key="gun.name" class="products">
        <p class="product">{{`${gun.name} — ${gun.price}₽`}}</p>
        <img class="add-to-cart" @click="addToCart(gun), addToOrder(gun)" src="https://img.icons8.com/ios-glyphs/60/000000/add-to-basket.png"/>
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
      search: '',
      buyerName: '',
      orders: [],
      range: 0,
      extraChargePercents: [25, 50, 70, 100]
    }
  },

  methods: {
    addToCart(gun){
      this.orderSum = this.orderSum + gun.price
    },
    resetCart(){
      this.orderSum = 0
      this.weaponObject = {}
      this.buyerName = ''
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
    },
    formOrder(){
      var reg = /{|}|"/g

      var curOrder = this.weaponObject
      var curOrderString = JSON.stringify(curOrder)
      curOrderString = curOrderString.replace(reg, '')
      var newOrder = `Имя: ${this.buyerName} | Заказ: ${curOrderString} | Сумма: ${Math.round(this.orderSum)}`
      this.orders.push(newOrder)
    },
    removeOrder(index){
      this.orders.splice(index, 1)
    },
    addExtra(percent){
      console.log((percent))
      this.orderSum = this.orderSum + this.orderSum * (percent / 100)
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
      .extra-charge{
          text-transform: uppercase;
          font-size: 8pt;
        }
        
      .extra-charge-container{
        padding-top: 5px;
        padding-left: 5px;
        display: flex;

        .extra-charge-button{
          // margin: 0 auto;
          padding: 5px;
          margin-right: 5px;
          font-size: 8pt;
          font-weight: 600;
          background-color: $dobrograd-white;
          color: $dobrograd-purple;
          border-radius: 10px 10px 10px 10px;
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

      .weapons-order{
        display: flex;
        align-content: stretch;
        .order{
          padding: 5px;
          // padding-left: 20px;
          font-size: 8pt;
        }
        .order-none{
          padding: 5px;
          // padding-left: 20px;
          font-size: 8pt;
        }
      }
      
      .add-buyer{
        display: flex;
        justify-content: center;
        .buyer-name{
          width: 100%;
          border-radius: 10px 10px 10px 10px;
          background-color: $dobrograd-white;
          outline: none;
          box-shadow: none;
          border: none;
          padding: 5px;
          margin-right: 10px;
          margin-left: 4px;
        }
        .submit-order{
          border-radius: 10px 10px 10px 10px;
          background-color: #8C7D8C;
          padding: 5;
          font-size: 12pt;
        }
        .logo{
          filter: invert(1);
          padding-right: 5px;
          height: 24px;
          cursor: pointer;
        }
      }
    }

    .orders-container{
      background-color: $dobrograd-purple;
      color: $dobrograd-white;
      margin: 10px;
      border-radius: 10px 10px 10px 10px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      padding: 5px;

      .orders-header{
        padding: 5px;
        padding-left: 20px;
        font-size: 12pt;
        text-transform: uppercase;
      }

      .orders{
        font-size: 10pt;
        padding-left: 10px;
        display: flex;
        justify-content: space-between;
        align-content: center;

        .logo{
          height: 16px;
          filter: invert(1);
          padding-right: 5px;
          cursor: pointer;
        }
        .order{
          padding-top: 5px;
        }
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
      .products{
        background-color: $dobrograd-purple;
        color: $dobrograd-white;
        margin: 5px 10px;
        border-radius: 10px 10px 10px 10px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        padding: 5px;
        padding-left: 20px;
        // cursor: pointer;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: space-between;
        .add-to-cart{
          padding-right: 20px;
          filter: invert(1);
          cursor: pointer;
        }
      }
      .add-to-cart{
        // padding-left: 0px;
        height: 30px;
      }
    }
  }
</style>