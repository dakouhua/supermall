import {debounce} from 'common/utils/utils.js' //也导入防抖函数
import BackTop from 'components/content/backtop/backTop.vue'

export const itemListenerMixin = {
  data(){
    return {
      
    }
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on('detailImageLoad', ()=>{//但是程序里默认是没有$bus的
      refresh()
    })
    // console.log('我是混入中的内容');
  },
}

export const backTopMixin = {
  components: {
    BackTop,
  },
  data(){
    return {
      isShowBackTop: false, //是否显示回到顶部按钮
    }
  },
  methods: {
    backClick(){
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500); //第三个参数是500ms
      this.$refs.scroll.scrollTo(0, 0);
    },
  }
}