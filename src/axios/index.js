import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://192.168.100.105';
//拦截器，axios.interceptors.request.use发送请求前处理 
//axios.interceptors.response.use接受返回后，回调之前处理处理
//POST传参序列化
// axios.interceptors.request.use((config) => {
//     if(config.method  === 'post'){
//       config.data = qs.stringify(config.data);
//     }
//     return config;
//   },(error) =>{
//     return Promise.reject(error);
//   });
  
  
//   axios.interceptors.response.use((res) =>{
//     if(!res.data.success){
//       return Promise.reject(res);
//     }
//     return res;
//   }, (error) => {
    
//     return Promise.reject(error);
//   });
//公共方法：

//业务方法
  export default {
    // ajaxgets() {
    //   return gets('/api/services/app/DeptManagement/GetAllByOuId')
    // },
    posts(url, params) {
      return new Promise((resolve, reject) => {
        axios.post(url, params)
          .then(response => {
            resolve(response.data);
          }, err => {
            reject(err);
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    gets(url) {
      return new Promise((resolve, reject) => {
        axios.get(url)
          .then(response => {
            resolve(response.data);
          }, err => {
            reject(err);
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  }
//.vue文件里面调用
//   submitForm () {        
//     this.$axios.ajaxgets().then(function (res) {
//   //成功之后处理逻辑
//       console.log(res)
//     },function (res) {
//       //失败之后处理逻辑
//       console.log("error:"+res)
//     })
//   }