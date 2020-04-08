<template>
  <div class="dobrograd">
    <div class="shop">
      <div class="display">
        <div class="cost"> Цена на продажу: <span v-title="title"
              @click="copy()"
              v-clipboard:copy="Math.round(sellingPrice)"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
              @mouseleave="resetCopy()">{{ activeProduct ? Math.round(sellingPrice) : 0 }}</span> </div>
        <div class="cost"> Себестоимость без учёта остатка деталей: {{activeProduct ?  activeProduct.costStack : 0}} </div>
        <div class="cost"> Себестоимость с учётом остатка деталей: {{ activeProduct ?  activeProduct.costSingle : 0 }}  </div>
        <div class="cost"> Останется деталей на сумму: {{ activeProduct ? (activeProduct.costStack - activeProduct.costSingle) : 0 }} </div>
      </div>
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
    <p>Выбор крафта:</p>
    <div class="guns">
      <button @click="assemble(index), resetSlider()" v-for="(product, index) in products" :key="index" class="assemble"> {{product.name}} </button>
    </div>
    <p>Добавить наценку:</p>
    <div class="sliderParent">
      <input v-model="percentage" step="25" type="range" min="0" max="100" value="50" class="slider">
      <div class="steps">
        <div @click="percentage=step" v-for="step in steps" :key="step" class="step">{{step}}</div>
      </div>
    </div>
    <div @click="reset" class="reset"><button>СБРОСИТЬ</button></div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      title: 'Щёлкни, чтобы скопировать', // v-title

      gun: 0,
      remains: 0,
      sellingPrice: 0,
      percentage: 0, // починиЛ
      steps: [0, 25, 50, 75, 100],
      activeProduct: 0,
      isHidden: false,

      // Crafting receipts + cost

      products: [
      {
        name: 'Glock 17',
        costStack: 11655,
        costSingle: 6615,
        barrel: 1,
        breechblock: 2,
        pistolGrip: 3,
        hammer: 4,
        magazine: 5,
        piston: 6,
        bearing: 7,
        spring: 8,
        glue: 9 
      },
      {
        name: "M3 Super",
        costStack: 29705,
        costSingle: 24076,
        barrel: 5,
        breechblock: 1,
        pistolGrip: 1,
        hammer: 2,
        magazine: 1,
        piston: 1,
        bearing: 1,
        spring: 1,
        glue: 1
      },
      {
        name: "AK47",
        costStack: 40165,
        costSingle: 33664,
        barrel: 5,
        breechblock: 1,
        pistolGrip: 1,
        hammer: 1,
        magazine: 8,
        piston: 1,
        bearing: 1,
        spring: 1,
        glue: 1
      },
      {
        name: "MAC10",
        costStack: 19815,
        costSingle: 16031,
        barrel: 5,
        breechblock: 1,
        pistolGrip: 1,
        hammer: 1,
        magazine: 2,
        piston: 1,
        bearing: 1,
        spring: 1,
        glue: 1
      },
      {
        name: "Five Seven",
        costStack: 18600,
        costSingle: 12965,
        barrel: 5,
        breechblock: 1,
        pistolGrip: 1,
        hammer: 1,
        magazine: 4,
        piston: 1,
        bearing: 1,
        spring: 1,
        glue: 1
      },
      {
        name: "P228",
        costStack: 17000,
        costSingle: 10156,
        barrel: 5,
        breechblock: 1,
        pistolGrip: 1,
        hammer: 1,
        magazine: 3,
        piston: 3,
        bearing: 1,
        spring: 1,
        glue: 1
      },
      {
        name: "Отмычка",
        costStack: 2850,
        costSingle: 2850,
        barrel: 5,
        breechblock: 1,
        pistolGrip: 1,
        hammer: 1,
        magazine: 6,
        piston: 1,
        bearing: 61,
        spring: 1,
        glue: 1
      },
      {
        name: "Отмычка",
        costStack: 4680,
        costSingle: 3908,
        barrel: 5,
        breechblock: 1,
        pistolGrip: 1,
        hammer: 1,
        magazine: 1,
        piston: 1,
        bearing: 1,
        spring: 1,
        glue: 1
      },
      {
        name: "Лёгкий бронежилет",
        costStack: 2485,
        costSingle: 2485,
        barrel: 5,
        breechblock: 1,
        pistolGrip: 1,
        hammer: 1,
        magazine: 1,
        piston: 1,
        bearing: 1,
        spring: 1,
        glue: 1
      },
      {
        name: "Бронежилет",
        costStack: 4085,
        costSingle: 4085,
        barrel: 5,
        breechblock: 1,
        pistolGrip: 1,
        hammer: 1,
        magazine: 1,
        piston: 1,
        bearing: 1,
        spring: 1,
        glue: 1
      },
      ], 
    }
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
    assemble(index){
      this.activeProduct = this.products[index]
      this.sellingPrice = this.products[index].costStack
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
   
.dobrograd
  margin-top: 40px
  user-select: none

  .shop
    display: grid
    grid-template-columns: repeat(2, auto)
    grid-gap: 30px

    margin: 0 auto
    width: 80%
    max-width: 800px

    .cart
      display: grid
      grid-template-columns: repeat(2, auto)
      grid-template-rows: repeat(2, auto)
      border: 1px solid black
      background-color: #eeeeee
      font-weight: 600
      // text-align: center
      list-style-type: none
      padding: 0
      margin: 0
      text-align: center

      
      

      li
        padding: 5px
        margin: 0

        &:first-of-type
          font-weight: 700
          grid-column-start: 1
          grid-column-end: 3
          text-align: center
          color: #554455
          background-color: #dbdbdb
          border-radius: 0px

    .display
      // max-width: 400px

      padding: 15px // ПОЧИНИТЬ PADDING ПРИ ДОБАВЛЕНИИ ЭЛЕМЕНТОВ li 
      border: 1px solid black
      text-align: center
      background-color: #eeeeee
      font-weight: 600
      

  .sliderParent
    display: flex
    justify-content: center
    flex-direction: column
    width: 100%
    max-width: 350px
    margin: 0 auto

    .steps
      display: flex
      justify-content: space-between
      margin-top: 7px

      .step
        margin-left: 6.5px
        cursor: pointer
        font-weight: 500
        &:hover
          border-radius: 6px
          background-color: #554455
          color: #eeeeee
    
    .slider
      appearance: none
      padding: 0 5px
      height: 15px
      background: #554455
      outline: none
      border-radius: 6px
    
    .slider::-webkit-slider-thumb 
      appearance: none
      width: 8px
      height: 30px
      background: #eeeeee
      cursor: pointer
      border-radius: 6px
      border: 1px solid black



  button
    box-shadow: inset 0px 1px 0px 0px #ffffff
    background-color: #554455
    border-radius: 6px
    border: none
    display: inline-block
    cursor: pointer
    color: #eeeeee
    font-size: 15px
    font-weight: bold
    padding: 6px 24px
    text-decoration: none
    box-shadow: none
    margin: 0 5px
    outline: none

    &:hover
      background-color: #665066
    
    &:active
      background-color: #3d303d
    
  p
    text-align: center
    margin: 10px
    font-weight: 500
    
  .charge
    display: flex  
    justify-content: center


    span
      color: #554455
      font-weight: 700
      // user-select: all


  .guns
    display: grid
    grid-template-columns: repeat(4, auto)
    grid-template-rows: repeat(auto, auto)
    justify-content: center
    grid-gap: 6px

    .assemble
      width: 100%

  .reset
    margin-top: 20px
    display: flex
    justify-content: center

</style>
