<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommed-view :recommends="recommends"/>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/navBar.vue'
import homeSwiper from '../home/childComps/homeSwiper.vue'
import recommedView from './childComps/recommedView.vue'

import {getHomeMultidata} from 'network/home.js'

export default {
 name: 'home',
 components: {
   navBar,
   homeSwiper,
   recommedView
 },
 data(){
   return{
     banners: [],
     recommends: []
   }
 },
 created(){
   //1.请求多个数据
   getHomeMultidata().then(res=>{
     console.log(res);
     this.banners = res.data.banner.list;
     this.recommends = res.data.recommend.list;
   })
 }
}
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>