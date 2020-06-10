<template>
  <v-app>
    <TopBar/>
    <Interface/>
  </v-app>
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
