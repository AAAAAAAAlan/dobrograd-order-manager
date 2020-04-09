<template>
  <div class="shop">
    <div class="display">
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
      <div class="pistols">
        <button 
        @click="assemble(index), resetSlider()" 
        v-for="(pistol, index) in pistols" 
        :key="index" class="assemble"> {{pistol.name}}
        </button>
      </div>
      <div class="smgs">
        <button 
        @click="assemble(index), resetSlider()" 
        v-for="(smg, index) in smgs" 
        :key="index" class="assemble"> {{smg.name}}
        </button>
      </div>
      <div class="shotguns">
        <button 
        @click="assemble(index), resetSlider()" 
        v-for="(shotgun, index) in shotguns" 
        :key="index" class="assemble"> {{shotgun.name}}
        </button>
      </div>
      <div class="rifles">
        <button 
        @click="assemble(index), resetSlider()" 
        v-for="(rifle, index) in rifles" 
        :key="index" class="assemble"> {{rifle.name}}
        </button>
      </div>
      <div class="snipers">
        <button 
        @click="assemble(index), resetSlider()" 
        v-for="(sniper, index) in snipers" 
        :key="index" class="assemble"> {{sniper.name}}
        </button>
      </div>
      <div class="tools">
        <button 
        @click="assemble(index), resetSlider()" 
        v-for="(tool, index) in tools" 
        :key="index" class="assemble"> {{tool.name}}
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

      gunClasses: ['Пистолеты', 'Пистолеты-Пулемёты', 'Дробовики', 'Автоматические винтовки', 'Снайперские винтовки', 'Инструменты и броня'],

      // Crafting receipts + cost (receipts unfinished)

      pistols: [
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
     ],
    smgs: [
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
     ],
    shotguns: [
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
     ],
    rifles: [
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
     ],
    snipers: [
      {
        name: "Scout",
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
     ],
    tools: [
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
