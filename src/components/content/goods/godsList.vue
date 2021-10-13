<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" 
    :key="index" :goods-item="item"/>
  </div>
</template>

<script>
import goodsListItem from './goodsListItem.vue'

export default {
  name: 'godsList',
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    goodsListItem
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* width: 100vh; */

    padding: 2px;
  }
</style>