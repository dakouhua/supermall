<template>
  <div class="wrapper">
    <ul class="content">
      <li>类别1</li>
      <li>类别2</li>
      <li>类别3</li>
      <li>类别4</li>
      <li>类别5</li>
      <li>类别6</li>
      <li>类别7</li>
      <li>类别8</li>
      <li>类别9</li>
      <li>类别10</li>
      <li>类别11</li>
      <li>类别12</li>
      <li>类别13</li>
      <li>类别14</li>
      <li>类别15</li>
      <li>类别16</li>
      <li>类别17</li>
      <li>类别18</li>
      <li>类别19</li>
      <li>类别20</li>
      <li>类别21</li>
      <li>类别22</li>
      <li>类别23</li>
      <li>类别24</li>
      <li>类别25</li>
      <li>类别26</li>
      <li>类别27</li>
      <li>类别28</li>
      <li>类别29</li>
      <li>类别30</li>
      <li>类别31</li>
      <li>类别32</li>
      <li>类别33</li>
      <li>类别34</li>
      <li>类别35</li>
      <li>类别36</li>
      <li>类别37</li>
      <li>类别38</li>
      <li>类别39</li>
      <li>类别40</li>
      <li>类别41</li>
      <li>类别42</li>
      <li>类别43</li>
      <li>类别44</li>
      <li>类别45</li>
      <li>类别46</li>
      <li>类别47</li>
      <li>类别48</li>
      <li>类别49</li>
      <li>类别50</li>
      <li>类别51</li>
      <li>类别52</li>
      <li>类别53</li>
      <li>类别54</li>
      <li>类别55</li>
      <li>类别56</li>
      <li>类别57</li>
      <li>类别58</li>
      <li>类别59</li>
      <li>类别60</li>
      <li>类别61</li>
      <li>类别62</li>
      <li>类别63</li>
      <li>类别64</li>
      <li>类别65</li>
      <li>类别66</li>
      <li>类别67</li>
      <li>类别68</li>
      <li>类别69</li>
      <li>类别70</li>
      <li>类别71</li>
      <li>类别72</li>
      <li>类别73</li>
      <li>类别74</li>
      <li>类别75</li>
      <li>类别76</li>
      <li>类别77</li>
      <li>类别78</li>
      <li>类别79</li>
      <li>类别80</li>
      <li>类别81</li>
      <li>类别82</li>
      <li>类别83</li>
      <li>类别84</li>
      <li>类别85</li>
      <li>类别86</li>
      <li>类别87</li>
      <li>类别88</li>
      <li>类别89</li>
      <li>类别90</li>
      <li>类别91</li>
      <li>类别92</li>
      <li>类别93</li>
      <li>类别94</li>
      <li>类别95</li>
      <li>类别96</li>
      <li>类别97</li>
      <li>类别98</li>
      <li>类别99</li>
      <li>类别100</li>
    </ul>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'category',
  data(){
    return {
      scroll: null,
      pullUpLoad: true
    }
  },
  mounted() {
    this.scroll = new Bscroll(document.querySelector('.wrapper'),{
      probeType: 3, //实时监听，惯性滚动也可监听
      pullUpLoad: true
    })

    this.scroll.on('scroll',(position)=>{
      //  console.log(position);
    })

    this.scroll.on('pullingUp', () => {
      // console.log('上拉加载更多');
      // 发送网络请求, 请求更多页的数据

      // 等数据请求完成, 并且将新的数据展示出来后
      // setTimeout(() => {
      //   bscroll.finishPullUp()
      // }, 2000)
    })
 },
 created(){
 }
}
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background-color:pink;

    overflow: hidden;
    /* overflow-y: scroll; */
  }
</style>