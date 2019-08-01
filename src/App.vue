<template>
  <div id="app">
    {{env}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      env: APP_NODE_ENV
    };
  }
}
</script>

<style scoped>
</style>