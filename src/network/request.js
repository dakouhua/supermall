import axios from 'axios'

export function request(config){
  //1.创建axios实例
  const isntance = axios.create({
    baseURL : 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000,
  })
  //2.isntance拦截器
  isntance.interceptors.request.use(
    config=>{ //第一个参数是"请求成功 "的拦截
      // console.log(config);
      return config; //被拦截的config，一定要返回
    },err=>{ //第二个参数是"请求失败"的拦截
      console.log(err);
    }
  )
  //2.1响应拦截
  isntance.interceptors.response.use(
    res=>{ //第一个参数是"响应成功 "的拦截
      // console.log(res);
      return res.data; //这里只有看返回的数据就行
    },
    err=>{ //第二个参数是"响应失败"的拦截
      console.log(err);
    }
  )
  //3.发送网络请求
  return isntance(config)
}