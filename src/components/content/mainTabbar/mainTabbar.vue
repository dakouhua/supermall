<template>
   <tab-bar>
      <tab-bar-item path="/home" activeColor="pink">
        <img slot='item-icon' src="~assets/imgs/tabbar/home.svg" alt="">
        <img slot='item-icon-active' src="~assets/imgs/tabbar/home_active.svg" alt="">
        <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="pink">
        <img slot='item-icon' src="~assets/imgs/tabbar/category.svg">
        <img slot='item-icon-active' src="~assets/imgs/tabbar/category_active.svg" alt="">
        <div slot='item-text'>分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="pink">
        <img slot='item-icon' src="~assets/imgs/tabbar/shopcart.svg">
        <img slot='item-icon-active' src="~assets/imgs/tabbar/shopcart_active.svg" alt="">
        <div slot='item-text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="pink">
        <img slot='item-icon' src="~assets/imgs/tabbar/profile.svg">
        <img slot='item-icon-active' src="~assets/imgs/tabbar/profile_active.svg" alt="">
        <div slot='item-text'>我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import tabBar from 'components/common/tabber/tabBar.vue'
import tabBarItem from 'components/common/tabber/tabBarItem.vue'

export default {
  name: 'mainTabbar',
  components:{
    tabBar,
    tabBarItem
  }
}
</script>

<style>

</style>