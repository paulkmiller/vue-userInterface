<template>
  <div id="app">
    <v-app >
      <router-view />
      <UserIndex />
    </v-app>
  </div>
</template>

<script>
import UserIndex from './components/pages/UserIndex.vue'

export default {
  name: 'App',
  components: {
    UserIndex
  }
}
</script>