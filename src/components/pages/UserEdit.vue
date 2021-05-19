<template>
  <!-- this dialog is used for both edit and delete -->
  <div class="text-truncate">
    <v-icon small @click="showEditDialog(user)" color="primary" class="mr-2">mdi-pencil</v-icon>
    <v-icon small @click="deleteUser(user)" color="red">mdi-delete</v-icon>
  </div>
</template>

<script>
// import { APIService } from "../../APIService"

// const apiService = new APIService();

export default {
  name: "UserEdit",
  props: {
    user: { type: Object },
    item: { type: Object }
  },
  methods: {
    showEditDialog(user) {
        this.editedUser = user||{}
        this.dialog = !this.dialog
    },
    deleteUser(user){
      this.$emit('user-delete', user)
    }
  }
};
</script>