<template>
  <div id="app">
    <router-view/>
    <main-tabbar/>
  </div>
</template>

<script>
import mainTabbar from '../src/components/content/mainTabbar/mainTabbar.vue'

export default {
  name: 'App',
  components: {
    mainTabbar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
