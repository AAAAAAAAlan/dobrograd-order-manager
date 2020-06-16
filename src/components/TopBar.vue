<template>
  <div class="top-bar">
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Dobrograd Craft Calculator</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
      <!-- v-model="group" -->
        <v-list-item-group
          
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import io from 'socket.io-client'

  export default {
    data: () => ({
      drawer: false,
      // socket: {},
      context: {},
      test: null
    }),

    created () {
      const socket = io('http://localhost:3000');

      socket.on('chat-message', data =>{
        console.log(data)
      })
    },
    mounted () {
      
    },
  }
</script>

<style>
.v-toolbar__content{
    background-color: #554455 !Important;
}
</style>