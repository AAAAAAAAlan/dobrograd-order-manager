<template>
  <div class="dobrograd">
    <div class="display">
      <div class="cost"> Цена на продажу: <span>{{ Math.round(sellingPrice) }}</span> </div>
      <div class="cost"> Себестоимость без учёта остатка деталей: {{ Math.round(gun) }}</div>
      <div class="cost"> Себестоимость с учётом остатка деталей: {{ Math.round(remains) }} </div>
      <div class="remain"> Останется деталей на сумму: {{ Math.round(gun) - Math.round(remains) }} </div>
    </div>
    <p>Выбор крафта:</p>
    <div class="guns">
      <div class="glock"><button @click="assembleGlock()" class="assemble">Glock17</button></div>
      <div class="m3"><button @click="assembleShotgun()" class="assemble">M3 Super</button></div>
      <div class="ak"><button @click="assembleAk()" class="assemble">AK47</button></div>
      <div class="mac10"><button @click="assembleMac()" class="assemble">MAC10</button></div>
    </div>
    <p>Добавить наценку:</p>
    <div class="sliderParent"><input v-model="percentage" type="range" min="1" max="100" value="50" class="slider"></div>
    <div @click="reset" class="reset"><button>СБРОСИТЬ</button></div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      materialsSingle: {
        breechblock: 2015/2, // Затвор 2015₽ = 2шт
        barrel: 2015/2, // Ствол 2015₽ = 2шт
        pistolGrip: 2015, // Рукоять 2015₽ = 1шт
        hammer: 2015/8, // Курок 2015₽ = 8шт
        magazine: 2015, // Магазин 2015₽ = 1шт
        piston: 515/4, // Поршень 515₽ = 4шт
        bearing: 515/5, // Ролик 515₽ = 5шт
        spring: 515/10, // Пружина 515₽ = 10шт
        glue: 35, // Клей 35₽ = 1шт
        firingPin: 2015/5, // Ударник 2015₽ = 5шт
        lock: 2015/5, // Стопор 2015₽ = 5шт
        plate: 800, // Пластина 800₽ = 1шт
        ironSight: 2015/8 // Мушка 2015₽ = 7шт
      },
      materialsStack: {
        breechblock: 2015, // Затвор 
        barrel: 2015, // Ствол
        pistolGrip: 2015, // Рукоять 
        hammer: 2015, // Курок 
        magazine: 2015, // Магазин 
        piston: 515, // Поршень
        bearing: 515, // Ролик
        spring: 515, // Пружина 
        glue: 35, // Клей
        firingPin: 2015, // Ударник 
        lock: 2015, // Стопор 
        plate: 800, // Пластина
        ironSight: 2015 // Мушка
      },
      gun: 0,
      remains: 0,
      sellingPrice: 0,
      percentage: 0,
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
    assembleGlock(){
      this.gun = this.materialsStack.barrel + this.materialsStack.breechblock + this.materialsStack.pistolGrip + this.materialsStack.hammer + this.materialsStack.magazine + this.materialsStack.piston + this.materialsStack.bearing + this.materialsStack.spring + this.materialsStack.glue

      this.remains = this.materialsSingle.barrel + this.materialsSingle.breechblock + this.materialsSingle.pistolGrip + this.materialsSingle.hammer + this.materialsSingle.magazine + this.materialsSingle.piston + this.materialsSingle.bearing + this.materialsSingle.spring + this.materialsSingle.glue
    },
    assembleShotgun(){
      this.gun = this.materialsStack.breechblock*2 + this.materialsStack.barrel*2 + this.materialsStack.pistolGrip*2 + this.materialsStack.firingPin*2 + this.materialsStack.hammer + this.materialsStack.lock*2 + this.materialsStack.magazine + this.materialsStack.piston*3 + this.materialsStack.bearing*2 + this.materialsStack.spring + this.materialsStack.glue + this.materialsStack.plate*3

      this.remains = this.materialsSingle.breechblock*3 + this.materialsSingle.barrel*3 + this.materialsSingle.pistolGrip*2 + this.materialsSingle.firingPin*8 + this.materialsSingle.hammer + this.materialsSingle.lock*8 + this.materialsSingle.magazine + this.materialsSingle.piston*12 + this.materialsSingle.bearing*8 + this.materialsSingle.spring*8 + this.materialsSingle.glue*3 + this.materialsSingle.plate*3
    },
    assembleAk(){
      this.gun = this.materialsStack.breechblock*2 + this.materialsStack.barrel*2 + this.materialsStack.pistolGrip*3 + this.materialsStack.firingPin*2 + this.materialsStack.hammer + this.materialsStack.lock*2 + this.materialsStack.magazine*3 + this.materialsStack.piston*3 + this.materialsStack.bearing*2 + this.materialsStack.spring + this.materialsStack.glue + this.materialsStack.plate*6 + this.materialsStack.ironSight

      this.remains = this.materialsSingle.breechblock*3 + this.materialsSingle.barrel*3 + this.materialsSingle.pistolGrip*3 + this.materialsSingle.firingPin*8 + this.materialsSingle.hammer + this.materialsSingle.lock*8 + this.materialsSingle.magazine*3 + this.materialsSingle.piston*12 + this.materialsSingle.bearing*10 + this.materialsSingle.spring*8 + this.materialsSingle.glue + this.materialsSingle.plate*6 + this.materialsSingle.ironSight*4
    },
    assembleMac(){
      this.gun = this.materialsStack.breechblock + this.materialsStack.barrel + this.materialsStack.pistolGrip + this.materialsStack.firingPin + this.materialsStack.hammer + this.materialsStack.lock + this.materialsStack.magazine + this.materialsStack.piston*2 + this.materialsStack.bearing + this.materialsStack.spring + this.materialsStack.glue + this.materialsStack.plate*2 + this.materialsStack.ironSight

      this.remains = this.materialsSingle.breechblock*2 + this.materialsSingle.barrel*2 + this.materialsSingle.pistolGrip + this.materialsSingle.firingPin*5 + this.materialsSingle.hammer + this.materialsSingle.lock*5 + this.materialsSingle.magazine + this.materialsSingle.piston*8 + this.materialsSingle.bearing*5 + this.materialsSingle.spring*5 + this.materialsSingle.glue + this.materialsSingle.plate*2 + this.materialsSingle.ironSight
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
*
    
.dobrograd
  padding: 20px
  user-select: none

  .sliderParent
    display: flex
    justify-content: center

    .slider
      appearance: none
      width: 25%
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
    max-width: 500px
    font-weight: 600

    span
      color: #554455
      font-weight: 700

  .guns
    display: flex  
    justify-content: center

  .reset
    margin-top: 20px
    display: flex
    justify-content: center

</style>
