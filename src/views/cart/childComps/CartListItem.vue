<template>
  <div>
		<div class="cart-list-main" v-for="(item,index) in cartList" :key="index">
			<div class="cart-list-left">
				<input type="checkbox" class="check" v-model="item.checked">
				<img :src="item.image" alt="" class="goods-img">
			</div>
			<div class="cart-list-right">
				<div class="goods-name one-txt-cut">{{item.title}}</div>
				<div class="goods-info">
					<span class="price">￥{{item.price}}</span><span>x{{item.count}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CheckButton from 'components/content/ckeckButton/CheckButton.vue'

export default {
  name: "CartListItem",
  props: {
		cartList: {
			type: [],
			default() {
				return []
		}
	}
  },
  components: {
    CheckButton,
  },
  methods: {
  }
}
</script>

<style scoped>
  .cart-list-main {
    display: flex;
		padding: 10px;
		border-bottom: 1px solid #ececec;
	}
	.cart-list-left {
    display: flex;
    width: 26%;
    align-items: center;
  }
	.cart-list-left	.check {
			width: 20px;
			height: 20px;
			overflow: hidden;
			border-radius: 100%;
			border: 1px solid #ececec;
  }
	.cart-list-left .check:checked {
			background:#d4237a url(~assets/imgs/detail/check_active.png) no-repeat center;
			background-size: cover;
  }
	.cart-list-left	.goods-img {
			width: 52px;
			height: 66px;
			overflow: hidden;
			border: 1px solid #ececec;
			margin:0 10px;
			border-radius: 6px;
			vertical-align: middle;
  }

	.cart-list-right {
    width: 74%;
    position: relative;
  }
  .cart-list-right .goods-name {
			width: 100%;
			font-size: 13px;
  }
	.cart-list-right	.goods-info {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .cart-list-right	.goods-info .price {
    color: #F9CD0B;
  }
</style>



</style>