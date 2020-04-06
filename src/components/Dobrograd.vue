<template>
  <div class="dobrograd">
    <div class="display">
      <div class="cost"> Цена на продажу: <span>{{ Math.round(sellingPrice) }}</span> </div>
      <div class="cost"> Себестоимость без учёта остатка деталей: {{ Math.round(gun) }}</div>
      <div class="cost"> Себестоимость с учётом остатка деталей: {{ Math.round(remains) }} </div>
      <div class="cost"> Останется деталей на сумму: {{ Math.round(gun) - Math.round(remains) }} </div>
    </div>
    <p>Выбор крафта:</p>
    <div class="guns">
      <button @click="assemble(index)" v-for="(product, index) in products" :key="index" class="assemble">{{product.name}}</button>
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
      // materialsSingle: {
      //   breechblock: 2015/2, // Затвор 2015₽ = 2шт
      //   barrel: 2015/2, // Ствол 2015₽ = 2шт
      //   pistolGrip: 2015, // Рукоять 2015₽ = 1шт
      //   hammer: 2015/8, // Курок 2015₽ = 8шт
      //   magazine: 2015, // Магазин 2015₽ = 1шт
      //   piston: 515/4, // Поршень 515₽ = 4шт
      //   bearing: 515/5, // Ролик 515₽ = 5шт
      //   spring: 515/10, // Пружина 515₽ = 10шт
      //   glue: 35, // Клей 35₽ = 1шт
      //   firingPin: 2015/5, // Ударник 2015₽ = 5шт
      //   lock: 2015/5, // Стопор 2015₽ = 5шт
      //   plate: 800, // Пластина 800₽ = 1шт
      //   ironSight: 2015/8, // Мушка 2015₽ = 7шт
      //   tape: 50, // Скотч 50₽ = 1шт
      //   sight: 0 // ПОСТАВИТ ЦЕНУ!!!
      // },
      // materialsStack: {
      //   breechblock: 2015, // Затвор 
      //   barrel: 2015, // Ствол
      //   pistolGrip: 2015, // Рукоять 
      //   hammer: 2015, // Курок 
      //   magazine: 2015, // Магазин 
      //   piston: 515, // Поршень
      //   bearing: 515, // Ролик
      //   spring: 515, // Пружина 
      //   glue: 35, // Клей
      //   firingPin: 2015, // Ударник 
      //   lock: 2015, // Стопор 
      //   plate: 800, // Пластина
      //   ironSight: 2015,   // Мушка
      //   tape: 50 // Скотч 50₽ = 1шт
      // },

      gun: 0,
      remains: 0,
      sellingPrice: 0,
      percentage: 0,
      steps: [0, 25, 50, 75, 100],

      // Crafting receipts

      products: [
      {
        name: 'Glock 17',
        barrel: 1,
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
        name: "M3 Super",
        barrel: 5,
        breechblock: 1,
        pistolGrip: 1,
        hammer: 1,
        magazine: 1,
        piston: 1,
        bearing: 1,
        spring: 1,
        glue: 1
      }
      ], 
    }
  },
  watch: {
      gun(newValue){
        this.sellingPrice = newValue;
      },
      percentage(newValue){
        this.sellingPrice = (this.gun * newValue/100) + this.gun
      }
  },

  methods: {
    assemble(index){
      // const product = this.products[index]

    },

    
    reset(){
      this.gun = 0;
      this.remains = 0;
      this.percentage = 0;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
   
.dobrograd
  padding: 20px
  user-select: none


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

  .display
    margin: 0 auto
    padding: 10px
    border: 1px solid black
    text-align: center
    background-color: #eeeeee
    width: 100%
    max-width: 400px
    font-weight: 600

    span
      color: #554455
      font-weight: 700

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
