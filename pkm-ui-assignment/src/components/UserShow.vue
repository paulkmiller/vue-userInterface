<template>
  <div>
    <p>{{ user.displayname }}</p>
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