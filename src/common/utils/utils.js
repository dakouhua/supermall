export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

//时间戳
export function formatDate(date, fmt) {
  // 1.获取年份
  if(/(y+)/.test(fmt)) { //因为不确定传了几个y，所以要写y+匹配几个y
    //test用于检测一个一个字符串是否匹配某个模式
    // RgeExp 全局对象 yyyy,传过来的y个数
    fmt = fmt.replace(RegExp.$1 ,(date.getFullYear() + '').substr(4 - RegExp.$1.length))
  //  ('yyyy',(2013+'').substr(0))  (2013+'')是转化成字符串，substr截取字符串，这里从0开始截取
  }
  // 2.获取
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}
//对于分钟数的处理，不足两位的加0补齐
function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}