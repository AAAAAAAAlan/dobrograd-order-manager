<template>
  <div class="interface">
      <v-card class="mx-auto">
        <div class="title-container">
          <v-card-title class="sum">СУММА ЗАКАЗА</v-card-title>
        </div>
        <v-card-subtitle class="card-subtitle">500p</v-card-subtitle>
        <v-card-text>
          <v-chip class="current-products" close>AK</v-chip>
        </v-card-text>
       <v-slider
          class="slider"
          step="5"
          v-model="slider"
          thumb-label="always"
          color="#554455"
          track-color="#8C7D8C"
          :thumb-size="24"
        ></v-slider>
        <v-text-field
          color="#554455"
          class="buyer-name"
          v-model="currentText" 
          label="Имя покупателя" 
          ></v-text-field>
        <v-btn
          class="submit-order"
          medium  
          color="#554455"
        >
          Добавить заказ
        </v-btn>
        <v-spacer class="koctblb">1</v-spacer>
      </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slider: 15,
    }
  },
}
</script>

<style scoped lang="scss">
.interface{
  margin: 10px;
  .title-container{
    display: flex;
    justify-content: space-between;
    color: #554455;

    .logo{
      height: 16px;
      margin-right: 6px;
      margin-top: 6px;
    }
    .sum{
      padding-bottom: 0;
      font-weight: 600;
    }
  }
  .card-subtitle{
    font-size: 16pt;
    font-weight: 500;
    padding-top: 0;
    color: #554455 !Important;
  }
  
  .slider{
    margin-top: 15px;
    padding: 0 10px;
  }
  
  .buyer-name{

    padding: 0 17.5px;
    // prepend-icon="mdi-account"
  }

  .current-products{
    font-size: 9pt;
  }

  .submit-order{
    color: white;
    display: block;
    margin: 0 auto;
  }

  .koctblb{
    color: white;
  }
}
</style>