<template>
  <div class="bottom-bar">
    <div class="bot-bar-item">
			<p><img src="~assets/imgs/detail/icon01.png" alt=""></p>
			<p>客服</p>
		</div>
		<div class="bot-bar-item">
			<p><img src="~assets/imgs/detail/icon02.png" alt=""></p>
			<p>店铺</p>
		</div>
		<div class="bot-bar-item">
			<p><img src="~assets/imgs/detail/icon03.png" alt=""></p>
			<p>收藏</p>
		</div>
		<div class="btn cart-btn" @click="addToCart">加入购购物车</div>
		<div class="btn buy-btn">购买</div>
  </div>
</template>

<script>

export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
  display: flex;
  position: absolute;
  height: 49px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}
.bot-bar-item {
  width: 16%;
  font-size: 12px;
  color: #333;
  text-align: center;
}
.bot-bar-item img{
  width: 22px;
  height: 22px;
  margin: 4px 0;
  vertical-align: middle;
}
.btn {
  width: 26%;
  font-size: 13px;
  line-height: 49px;
  text-align: center;
}
.cart-btn {
  background-color: #F9CD0B;
  line-height: 49px;
}
.buy-btn {
  color: #fff;
  background-color: #d4237a;
}
</style>