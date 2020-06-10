<template>
  <div class="app">
    <TopBar/>
    <Interface/>
  </div>
</template>

<script>
import Interface from './components/Interface';
import TopBar from './components/TopBar';

export default {
  name: 'App',

  components: {
    Interface,
    TopBar
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped lang="scss">
  
</style>