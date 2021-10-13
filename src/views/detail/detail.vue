<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick"
                    ref="denav"/>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentscroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :paramInfo="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <gods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <!-- <toast :message="message" :show="show"/> -->
  </div>
</template>

<script>
import detailNavBar from './childComps/detailNavBar.vue'
import detailSwiper from './childComps/detailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo';
import DetailBottomBar from './childComps/DetailBottomBar.vue'
// import BackTop from 'components/content/backtop/backTop.vue'

import Scroll from 'components/common/scroll/Scroll'
import godsList from 'components/content/goods/godsList'
// import Toast from 'components/common/toast/Tosta'

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail.js'
import {debounce} from 'common/utils/utils.js' //也导入防抖函数
import {itemListenerMixin, backTopMixin} from 'common/mixin.js'
import {mapActions} from 'vuex'

export default {
  name: 'Detail',
  components: {
    detailNavBar,
    detailSwiper,
    DetailBaseInfo,
    DetailShopInfo,

    Scroll,
    godsList,
    // Toast,

    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    // BackTop,
  },
  //混入
  mixins:[itemListenerMixin, backTopMixin],

  data(){
    return{
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo:{},
      paramInfo: {},
      commentInfo: {}, //存放评论信息
      recommends: [], //存放推荐数据的变量
      detailImageLoad: null,
      themeTopYs: [0, 1000, 2000, 3000],
      getThemTopY: null,
      currentIndex: 0,
      // isShowBackTop: false, //是否显示回到顶部按钮 "放入了混入中"
      // message: '',
      // show: false,
    }
  },
  created(){
    //1.保存传入的iid
    this.iid = this.$route.params.iid
    //2.根据iid请求详情数据
    getDetail(this.iid).then(res=>{
      // console.log(res);

      //1.获取数据
      const data = res.result

      //2.获取顶部的轮播数据
      this.topImages = data.itemInfo.topImages;

      //3.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      //4.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      //5.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      //6.获取参数的信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      //7.取出评论信息
      if(data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })

    //3.请求推荐数据
    getRecommend().then(res=>{
      console.log(res);
      this.recommends = res.data.list
    })
    //4.给getThemTopY进行赋值，添加防抖功能
    this.getThemTopY = debounce(()=>{
      this.themeTopYs = []
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    })
  },
  mounted(){
    
  },
  methods: {
    ...mapActions(['addCart']),

    imageLoad() {
      this.$refs.scroll.refresh()
      //渲染完成后，会调用者函数
      this.getThemTopY()
    },
    titleClick(index){
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
    },

    //2做个锚点，点击导航栏，页面跳到指定位置.
    contentscroll(position){
      //1.获取y值
      const positionY = -position.y
      //2.根据positionY和主题中的值进行对比
      if(positionY < this.themeTopYs[1]){
        this.currentIndex = 0
      }else if(positionY >= this.themeTopYs[1] && positionY < this.themeTopYs[2]){
        this.currentIndex = 1
      }else if(positionY >= this.themeTopYs[2] && positionY < this.themeTopYs[3]){
        this.currentIndex = 2
      }else{
        this.currentIndex = 3
      }
      this.$refs.denav.currentIndex = this.currentIndex

      // 1.判断backTop(返回顶部)是否显示
      this.isShowBackTop = (-position.y) > 1000 //大于1000显示返回顶部按钮
    },

    //此函数放入了混入中
    // backClick(){
    //   // this.$refs.scroll.scroll.scrollTo(0, 0, 500); //第三个参数是500ms
    //   this.$refs.scroll.scrollTo(0, 0);
    // },
    addToCart() {
      //1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      //2.将商品添加到购物车界面  $store通过vuex来管理购物车里的数据
      //方法一 要引入mapAction方法(在methods里引入)，这样可以直接调用action里的方法
      this.addCart(product).then(res=>{
        // this.show = true;
        // this.message = res;

        // setTimeout(()=>{
        //   this.show = false
        //   this.message = ''
        // }, 1500)

        this.$toast.show(res, 1500)
        // console.log(res);
      })
      //方法二 通过$store来访问vuex里的方法
      // this.$store.dispatch('addCart', product).then(res => {
      //   console.log(res);
      // })
    }
  }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    /* height: calc(100% - 44px); */
    height: calc(100% - 44px - 49px);
  }
</style>