<template>
  <div class="shop">
    <div class="display">
      <p class="cost">Цена на продажу:
       <span v-title="title"
              @click="copy()"
              v-clipboard:copy="Math.round(sellingPrice)"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
              @mouseleave="resetCopy()">{{ activeProduct ? Math.round(sellingPrice) : 0 }}
        </span>
      </p>
      <p class="cost">Себестоимость без учёта остатка деталей:</p>
      <p class="cost">Себестоимость с учётом остатка деталей: </p>
      <p class="cost">Останется деталей на сумму:</p>
    </div>

    <div class="components">
      <ul class="cart">
          <li class="components">Glock 17</li>
          <li class="components">Ствол: 2</li>
          <li class="components">Ствол: 2</li>
          <li class="components">Ствол: 2</li>
          <li class="components">Ствол: 2</li>
          <li class="components">Ствол: 2</li>
          <li class="components">Ствол: 2</li>

      </ul>
    </div>

    <div class="guns">
      <div v-for="(gunClass, index) in gunClasses" :key="index" class="guns-class">{{gunClass}}</div>
      <!-- Первый цикл идет по всем полям объекта products в data (pistols, smgs итд) -->
      <div 
        v-for="(typeValue, typeName) in products" 
        :key="typeName" 
        :class="typeName">
        <!-- Второй цикл идет по всем элементам массива внутри типа (pistols[0], pistols[1], pistols[2] итд) -->
        <button 
          v-for="(product, index) in typeValue" 
          @click="assemble(typeName, index), resetSlider()" 
          :key="index" class="assemble"> {{ product.name }}
        </button>
      </div>
    </div>

    <div class="cart">
      <p class="cost">Lorem ipsum dolor sit amet consectetur</p>
      <p class="cost">adipisicing elit. Unde doloribus esse at </p>
      <p class="cost">sint amet provident reiciendis pariatur rem</p>
    </div>
  </div>
</template>

<script>
import products from '../utils/products.js'

export default {
  data(){
    return {
      title: 'Щёлкни, чтобы скопировать', // v-title

      gun: 0,
      remains: 0,
      sellingPrice: 0,
      percentage: 0, 
      steps: [0, 25, 50, 75, 100],
      activeProduct: 0,
      isHidden: false,
      products: null,
      gunClasses: ['Пистолеты', 'Пистолеты-Пулемёты', 'Дробовики', 'Автоматические винтовки', 'Снайперские винтовки', 'Инструменты и броня'],

      // Crafting receipts + cost (receipts unfinished)
    }
  },
  created () {
    this.products = products
  },
  watch: {
      gun(newValue){
        this.activeProduct.costStack = newValue;
      },
      percentage(newValue){
        this.sellingPrice = (this.activeProduct.costStack * newValue/100) + this.activeProduct.costStack
      }
  },

  methods: {
    // НА КАЖДЫЙ КЛАСС ОРУЖИЯ ТУТ ПО ФУНКЦИИ ТАК ДЕЛАТЬ НЕЛЬЗЯ НАДО ИСПРАВИТЬ

    assemble(name, index){
      // this.products.pistols и this.products['pistols'] = одно и то же this.products.name
      // let activeProduct = 'pisotl'
      // this.activeProduct и activeProduct  - разные вещи
      this.activeProduct = this.products[name][index]
      this.sellingPrice = this.products[name][index].costStack
      console.log(this.sellingPrice)
    },

    copy(){
      this.title = 'Скопировано!'
    },

    resetCopy(){
      setTimeout(() => {
        this.title = 'Щёлкни, чтобы скопировать'
      }, 2000);
    },

    

    // vue-clipboard2 
    onCopy: function (e) {
      // alert('You just copied: ' + e.text)
      console.log(e)
    },
    onError: function (e) {
      // alert('Failed to copy texts')
      console.log(e)
    },
    
    reset(){
      this.gun = 0;
      this.remains = 0;
      this.percentage = 0;
      this.activeProduct = 0;
    },
    resetSlider(){
      this.percentage = 0;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
$dobrograd-purple: #554455
$dobrograd-white: #eeeeee

.shop
  display: grid
  grid-template-columns: repeat(2, auto)
  grid-template-rows: repeat(2, auto)
  justify-content: center
  grid-gap: 30px

  .display
    text-align: center
    padding-top: 20px
    font-weight: 600

  .components

  .guns
    display: grid
    grid-template-columns: repeat(6, auto)
    grid-template-rows: repeat(2, auto)
    grid-gap: 5px

    .assemble
      display: block  
      margin-top: 10px
      width: 100%
      background-color: $dobrograd-purple
      color: $dobrograd-white
      box-shadow: inset 0px 1px 0px 0px #ffffff
      border-radius: 8px
      border: none
      cursor: pointer
      font-size: 15px
      font-weight: 600
      padding: 6px
      box-shadow: none
      margin: 5px
      outline: none

    .guns-class
      padding: 10px
      text-align: center




</style>
