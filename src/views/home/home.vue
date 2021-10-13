<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-contorl class="tab-control" :titles="['流行','新款','精选']"
               @tabClick="tabClick" ref="tabContorl1"
               v-show="isTabFixed"/>
    <scroll class="content" ref="scroll" :probe-type="3" 
            @scroll="contentScroll" :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners"
                   @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommed-view :recommends="recommends"/>
      <feature-view/>
      <tab-contorl :titles="['流行','新款','精选']"
                  @tabClick="tabClick" ref="tabContorl2"/>
      <!-- <goods-list :goods="goods[currentYType].list"/ -->
      <goods-list :goods="showGoods"/>
    </scroll>
    <backTop @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import homeSwiper from '../home/childComps/homeSwiper.vue'
import recommedView from './childComps/recommedView.vue'
import featureView from './childComps/featureView.vue'

import navBar from 'components/common/navbar/navBar.vue'
import tabContorl from 'components/content/tabControl/tabContorl.vue'
import goodsList from 'components/content/goods/godsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backtop/backTop.vue'

import {getHomeMultidata, getHomeGoods} from 'network/home.js'
import {debounce} from 'common/utils/utils.js'

export default {
  name: 'home',
  components: {
    homeSwiper,  //轮播图组件
    recommedView,  //推荐图组件
    featureView,  //本周流行组件
    tabContorl, //底部的首页、分类、购物车、我的组件
    goodsList,
    Scroll,
    BackTop,

    navBar,
  },
  data(){
    return{
      banners: [],  //存放轮播图的信息
      recommends: [],  //存放推荐图的相关信息
      goods: {
        'pop': {page: 0,list:[]},
        'new': {page: 0,list:[]},
        'sell': {page: 0,list:[]},
      },
      currentYType: 'pop' ,//设置默认选中的是pop
      isShowBackTop: false, //是否显示回到顶部按钮
      tabOffsetTop: 0,
      isTabFixed: false, //决定是否吸顶
      saveY: 0, //记录离开前的位置
    }
  },
  created(){
    //1.请求多个数据
    this.mgetHomeMultidata()
    //2.请求商品数据
    this.mgetHomeGoods('pop')
    this.mgetHomeGoods('new')
    this.mgetHomeGoods('sell')
  },
  activated() {
    this.$refs.scroll.refresh()  //回来时刷新一次
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    //1.离开时保存y值
    this.saveY = this.$refs.scroll.getScrollY();
  },
  computed: {
    showGoods(){
      return this.goods[this.currentYType].list;
    }
  },
  mounted(){
    // 监听这个图片加载事件(页面一加载好就监听)debounce(防抖的意思)
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on('itemImageLoad', ()=>{ //但是程序里默认是没有$bus的
      refresh()
    })
  },
  methods: {
    //事件监听相关
    tabClick(index){ //根据index判断是pop，new，还是sell
      switch(index) {
        case 0:
          this.currentYType = 'pop';
          break;
        case 1:
          this.currentYType = 'new';
          break;
        case 2:
          this.currentYType = 'sell';
          break;
      }
      this.$refs.tabContorl1.currentIndex = index;
      this.$refs.tabContorl1.currentIndex = index;
    },
    backClick(){
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500); //第三个参数是500ms
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position){
      // 1.判断backTop是否显示
      this.isShowBackTop = (-position.y) > 1000 //大于1000显示返回顶部按钮
      // 2.决定tabControl是否吸顶(position:fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore(){
      // console.log('上拉加载更多');
      this.mgetHomeGoods(this.currentYType);
    },
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabContorl2.$el.offsetTop
    },

    //网络请求相关
    mgetHomeMultidata(){
      getHomeMultidata().then(res=>{
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    mgetHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res=>{
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      })
    },
    
  },
}
</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;

    /*在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>