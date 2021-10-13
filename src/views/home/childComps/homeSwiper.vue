<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
          <!-- @load="imageLoad"监听图片是否加载完 -->
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: 'homeSwiper',
  props:{
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return{
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad(){
      if(!this.isLoad){ //发出事件时，判断有没有发出过
        // console.log('图片加载完成');
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
      
    }
  }
}
</script>

<style scoped>

</style>