<template>
  <section>
    <h1>getUsers()</h1>

    <div class="container">
      <div>
        <h4>#</h4>
        <h4>First Name</h4>
        <h4>Last Name</h4>
        <h4>Email</h4>
        <h4>Username</h4>
        <h4>Actions</h4>
      </div>
    </div>
    <div class="container">
      <div v-for="user in users" v-bind:key="user.id" >
        <UserShow v-bind:user="user"/>
      </div>
    </div>
  </section>
</template>


<script>
import UserShow from './UserShow.vue'
import { APIService } from "../APIService"

const apiService = new APIService();

export default {
  name: "UserIndexAlt",
  components: {
    UserShow
  },
   data: function(){
    return { 
      users: [], 
      numberOfUsers: 0 
    }
  },
  methods: {
    getUsers() {
      apiService.getUsers().then((data) => {
        this.users = data
        this.numberOfUsers = data.count
      });
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>


<style scope>
  .container h4 { display: inline-block ;}
</style>