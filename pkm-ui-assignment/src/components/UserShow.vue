<template>
  <div>
    <p>{{ userName }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserShow',
  props: 'userName'
}
</script>