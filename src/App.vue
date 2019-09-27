<template>
  <div id="app">
    {{ env }}
    <router-view />
  </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            env: appGlobal.APP_NODE_ENV
        };
    }
};
</script>

<style scoped>
</style>