<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name='item-icon'></slot></div>
    <div v-else><slot name='item-icon-active'></slot></div> 
    <div :style="activeStyle"><slot name='item-text'></slot></div>
  </div>
</template>

<script>
export default {
  name: 'tabBasrItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red',
    }
  },
  data(){
    return{
      
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) != -1; //indexOf()查找，没有找到就返回-1，表示不存在
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    },
  },
  methods: {
    itemClick(){
      // console.log('itrmClick');
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 20px;
    height: 20px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  /* .active {
    color: red;
  } */
</style>