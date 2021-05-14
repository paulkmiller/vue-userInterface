<template>
  <v-main class="container align-center px-1">
    <h2 class="font-weight-light mb-2">Admin UI</h2>
    <v-card>
      <v-data-table 
      :headers="headers" 
      :items="users"> 
      </v-data-table>
    </v-card>
  </v-main>
</template>

<script>
export default {
  name: 'UserShow',
  props: {
      user: { type: Object }
  }
}
</script>