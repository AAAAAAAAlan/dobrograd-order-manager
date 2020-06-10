<template>
  <div class="interface">
      <v-card class="mx-auto">
        <div class="title-container">
          <v-card-title class="sum">СУММА ЗАКАЗА</v-card-title>
          <img class="logo" src="https://img.icons8.com/material-rounded/48/000000/recurring-appointment.png"/>
        </div>
        <v-card-subtitle class="card-subtitle">500p</v-card-subtitle>
        <v-card-text>AK M3 Омычка</v-card-text>
      </v-card>
  </div>
</template>

<script>
export default {

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
    }
  }
  .card-subtitle{
    font-size: 16pt;
    font-weight: 600;
    padding-top: 0;
    color: #554455 !Important;
  }
}
</style>