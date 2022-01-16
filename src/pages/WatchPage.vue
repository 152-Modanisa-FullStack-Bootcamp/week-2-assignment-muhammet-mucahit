<template>
  <div class="watch-page">
    <h1>{{ this.$route.query.id }}</h1>
  </div>
</template>

<script>
export default {
  name: "WatchPage",
}
</script>

<style scoped>
.watch-page {
  text-align: center;
}
</style>
