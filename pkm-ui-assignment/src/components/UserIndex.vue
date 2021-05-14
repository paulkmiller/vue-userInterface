<template>
  <div>
    <h4>Users Page</h4>
    <UserShow />
  </div>
</template>

<script>
import UserShow from './UserShow.vue'

export default {
  name: 'UserIndex',
  components: {
    UserShow
  },
    data: function(){
    return [
        {userName: 'Paul'},
        {userName: 'Sam'}
    ]
  }
}
</script>