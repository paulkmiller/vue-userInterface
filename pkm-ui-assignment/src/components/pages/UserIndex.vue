<template>
  <v-content class="container align-center px-1">
    <h2 class="font-weight-light mb-2">Admin UI</h2>
    <v-card>
      <v-data-table :headers="headers" :items="items"> </v-data-table>
    </v-card>
  </v-content>
</template>


<script>
// import UserShow from './UserShow.vue'
import { APIService } from "../../APIService";

const apiService = new APIService();

export default {
  name: "UserIndexAlt",
  components: {},
  data: function () {
    return {
      users: [],
      numberOfUsers: 0,
      header: [
        {
          text: "",
          align: "",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat(g)", value: "fat" },
      ],
    };
  },
  methods: {
    getUsers() {
      apiService.getUsers().then((data) => {
        this.users = data;
        this.numberOfUsers = data.count;
      });
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style scope>
.container h4 {
  display: inline-block;
}
</style>