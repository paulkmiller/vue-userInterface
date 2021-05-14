<template>
  <div>
    <h1>Users Page</h1>

    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user">
          <th>{ { user.id } }</th>

          <th>{ { user.firstname } }</th>

          <td>{ { user.lastname } }</td>

          <td>{ { user.email } }</td>

          <td>{ { user.username } }</td>


          <td>
            <button class="btn btn-danger" @click="deleteUser(user)">
              X
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div></div>
  </div>
</template>

<script>
import { APIService } from "../APIService";

const apiService = new APIService();

export default {
  name: "UserIndexAlt",
  components: {},
  data: function() {
    return { users: [] }
  },

  methods: {
    getUsers() {
      apiService.getUsers().then((data) => {
        this.users = data.data;
        this.numberOfUsers = data.count;
      });
    },
  },

  mounted() {
    this.getUsers();
  },
};
</script>
