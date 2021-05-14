<template>
  <v-app id="app">
    <router-view />
    <UserIndex />
  </v-app>
</template>

<script>
import UserIndex from './components/UserIndex.vue'

export default {
  name: 'App',
  components: {
    UserIndex
  }
}
</script>