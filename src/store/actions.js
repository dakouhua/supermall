export default{
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      //查找之前数组中是否有该商品，(payload新添加的商品)
      // let oldProduct = null;
      // for(let item of context.state.cartList){
      //   if(item.iid === payload.id){
      //     oldProduct = item;
      //   }
      // }
      let oldProduct = context.state.cartList.find(function(item){
        return item.iid === payload.iid
      })
      //2.判断oldProduct
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit('AddCounter', oldProduct)
        resolve('当前商品数量+1')
      }else{
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit('addToCart',payload)
        reject('添加了新的商品')
      }
    })
  }
}