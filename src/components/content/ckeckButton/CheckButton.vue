<template>
  <div class="check-button" :class="{ckeck: isChecked}" @click="checkClick">
    <img src="~assets/imgs/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    checkClick(){
      tihs.isChecked = !tihs.isChecked
    }
  }
}
</script>

<style scoped>
  .check-button {
    border-radius: 50%;
    border: 2px solid #aaa
  }
  .ckeck {
    background-color: red;
    border-color: red;  
  }
</style>