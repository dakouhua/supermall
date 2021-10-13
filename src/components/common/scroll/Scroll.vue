<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    props:{
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {  //因为不是每个界面都需要下拉加载更多(比如"我的"页面)
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll: null,
      }
    },
    mounted() {
      //1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        // observeDOM: true,
        // observeImage: true, //1，2条据说是解决图片加载问题，不过好像没什么用
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      //2.滚动监听的位置
      this.scroll.on('scroll', (position)=>{
        // console.log(position);
        this.$emit('scroll', position)
      })
      // console.log(this.scroll);
      //3.监听滚动到底部
      if(this.pullUpLoad) {
        
        this.scroll.on('pullingUp', () => {
        // console.log('监听滚动到底部');
        this.$emit('pullingUp')
      })
      }
    },
    methods: {
      scrollTo(x, y, time=300){ //给返回顶部添加一个过渡效果
        //先判断一下有没有值在执行函数
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      //解决用户数图片的拖动问题，用refresh
      refresh() {
        this.scroll && this.scroll.refresh()
        // console.log('------');
      },
      finishPullUp() {  //可以多次实现上拉加载
        this.scroll.finishPullUp()
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
        //有值取值，无值取0
      }
    }
  }
</script>

<style scoped>

</style>