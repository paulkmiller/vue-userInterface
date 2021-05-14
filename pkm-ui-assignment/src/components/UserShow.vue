<template>
  <div>
    <p>{{ user.userName }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserShow',
  props: {
      user: { type: Object }
  }
}
</script>