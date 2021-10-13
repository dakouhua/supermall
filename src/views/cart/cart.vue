<template>
  <div class="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <!-- 商品的列表 -->
    <cart-list/>

    <!-- 底部汇总 -->
    <cart-botton-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/navBar'
import CartList from './childComps/CartList.vue'
import CartBottonBar from './childComps/CartBottonBar.vue'

import {mapGetters} from 'vuex'

export default {
 name: 'cart',
 components: {
   NavBar,
   CartList,
   CartBottonBar,
 },
 computed: {
  //  cartLength(){
  //    return this.$store.getters.cartLength
  //  }
  ...mapGetters(['cartLength']) //cartLength代表了商品数量
 }
}
</script>

<style scoped>
  .navbar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>