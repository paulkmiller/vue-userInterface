<template>
  <v-content class="container align-center px-1">
    <h2 class="font-weight-light mb-2">Admin UI</h2>
    <v-card>
      <v-data-table 
      :headers="headers" 
      :items="items"> 
      </v-data-table>
    </v-card>
  </v-content>
</template>


<script>
// import UserShow from './UserShow.vue'
import { APIService } from "../../APIService"

const apiService = new APIService();

export default {
  name: "UserIndexAlt",
  components: {
    // UserShow
  },
   data: function(){
    return { 
      headers: [
          { text: 'Id', value: 'id' },
          { text: 'Name', value: 'Name' },
          { text: 'Details', value: 'details', sortable: false, width:"100" },
          { text: 'URL', value: 'url', name:'url', width:"180" },
          { text: 'Action', value: 'actions', sortable: false },
      ],
      users: [], 
      numberOfUsers: 0
    }
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      apiService.getUsers().then((data) => {
        this.users = data
        this.numberOfUsers = data.count
      });
    },
  }
};
</script>


<style scope>
  .container h4 { display: inline-block ;}
</style>