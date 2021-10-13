<template>
  <div class="cart-list">  
    <scroll class="content" ref="scroll">
      <cart-list-item :cart-list="cartList"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'

import {mapGetters} from 'vuex'


  export default {
    components:{ 
      Scroll,
      CartListItem
    },
    name: "CartList",
    computed: {
      ...mapGetters(['cartList'])
    },
    // activated() {
    //   this.$refs.scroll.refresh()
    // }
  }
</script>
  
<style scoped>
  .cart-list {
    height: (100% - 44px - 49px);
  }
  .content {
    height: 100%;
    overflow: hidden;
  }
</style>