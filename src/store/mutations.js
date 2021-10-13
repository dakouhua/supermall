export default {
   //已有的商品数量加1
   AddCounter(state, payload){
    payload.count++
  },
  //没有的商品添加一个新的商品
  addToCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}