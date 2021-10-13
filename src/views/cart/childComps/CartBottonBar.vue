<template>
  <div class="cart-bot-bar">
		<div>
      <input type="checkbox" class="check" id="check" 
      :checked="isSelectAll" @click="checkClick">&ensp;
      <label for="check">全选</label> 
    </div>
		<div>合计：{{totalPrice}}</div>
		<div>去结算{{checkLength}}</div>
	</div>
</template>

<script>
export default {
  name: "CartBottonBar",
  computed: {
			totalPrice() {
				return '￥' + this.$store.state.cartList.filter(item => {
					return item.checked
				}).reduce((preValue, item) => {
					return preValue+ item.price * item.count
				},0)//.toFixed(2)
			},
      //去计算
			checkLength() { //选中的商品个数
				return '(' + this.$store.state.cartList.filter(item => item.checked).length + ')';
			},

      //判断小按钮是否全部选中，如果全选中则全选按钮也被全选中
      isSelectAll() {
			  if(this.$store.state.cartList.length === 0) return false
        // 1.使用filter 全选按钮的状态：判断是否有一个不选中，全选状态就是不选中
        // 不选中有长度的话 返回一个数组 0的取反是true
        // return !(this.$store.state.cartList.filter(item => !item.checked).length)
        // 2. 性能高一点
        // return !this.$store.state.cartList.find(item => !item.checked)
        // 3.遍历
			  for (let item of this.$store.state.cartList) {
			    if(!item.checked) {
			      return false
          }
        }
			  return true
      }
		},
    methods: {
		  checkClick() {
		    // 点击事件
		    if (this.isSelectAll) { // 全部选中
		      // 全部变成不选中
          this.$store.state.cartList.forEach(item => item.checked = false)
        } else {
		      this.$store.state.cartList.forEach(item => item.checked = true)
        }
		    // 这里不能简化成,会相互影响，出现乱码
        // this.cartList.forEach(item => item.checked = !this.checked)
      },
        calcClick() {
          if (!this.isSelectAll) {
            this.$toast.show('请选择购买的商品', 2000)
          }
        }
    }
}

</script>

<style scoped>
  .cart-bot-bar {
    display: flex;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    height: 40px;
    padding: 0 10px;
    font-size: 13px;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-bottom: 1px solid #ececec;
    border-top: 1px solid #ececec;
  }
  .check {
		width: 18px;
		height: 18px;
		overflow: hidden;
		border-radius: 100%;
		vertical-align: bottom;
		border: 1px solid #ececec;
	}
	.check:checked {
		border: 1px solid #d4237a;
		background: url(~assets/imgs/detail/check_active.png) no-repeat center;
		background-size: cover;
	}
</style>