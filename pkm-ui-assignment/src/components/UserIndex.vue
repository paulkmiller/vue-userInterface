<template>
  <div>
    <h4>Users Page</h4>
    <div v-for="user in users" v-bind:key="user">
        <UserShow v-bind:user="user"/>
    </div>
  </div>
</template>

<script>
import UserShow from './UserShow.vue'
import axios from 'axios'

export default {
  name: 'UserIndex',
  components: {
    UserShow
  },
    data: function(){
    return { users:[] }
  },
  created(){
      axios.get('http://localhost:8005/api/systemusers').then(
        response => (this.users = response.data.results)
      )
  }
}
</script>