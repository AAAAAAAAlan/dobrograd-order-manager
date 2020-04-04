<template>
  <div id="app">
    <Dobrograd/>
  </div>
</template>

<script>
import Dobrograd from './components/Dobrograd.vue'

export default {
  name: 'App',
  components: {
    Dobrograd
  }
}
</script>

<style lang="scss">
@font-face {
    font-family: SegoeUI;
    src:
        local("Segoe UI"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2) format("woff2"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff) format("woff"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf) format("truetype");
    font-weight: 400;
}
body{
  margin: 0;
  padding: 0;
  background-color: #dbdbdb;
  font-family: 'Segoe UI';
}
</style>
