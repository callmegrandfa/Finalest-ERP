import store from '../store'
import router from '../router'
import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://192.168.100.107:8082';
//console.log(store.state.accessToken)
//拦截器，axios.interceptors.request.use发送请求前处理 
//axios.interceptors.response.use接受返回后，回调之前处理处理
//POST传参序列化
axios.interceptors.request.use((config) => {
    if(store.state.accessToken!=''){
      config.headers.Authorization=store.state.accessToken;
    }else{
      router.push({path:'/login'});
    }
    return config;
  },(error) =>{
    return Promise.reject(error);
  });
  
  //返回状态判断
  axios.interceptors.response.use((res) =>{
    if(!res.data.success){
      return Promise.reject(res);
    }
    return res;
  }, (error) => {
    //404等问题可以在这里处理
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return Promise.reject(error.response.data);
      return Promise.reject(error.response.status);
      return Promise.reject(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return Promise.reject(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject('Error', error.message);
    }
    return Promise.reject(error.config);
  });
// //公共方法：
//   export function posts(url, params) {
//     return new Promise((resolve, reject) => {
//       axios.post(url, params)  
//         .then(response => {
//           resolve(response.data);
//         }, err => {
//           reject(err);
//         })
//         .catch((error) => {
//           reject(error)
//         })
//     })
//   }

//业务方法
// axios.post(url, {'params':params})
//       .catch(function (error) {
//         if (error.response) {
//           // The request was made and the server responded with a status code
//           // that falls out of the range of 2xx
//           console.log(error.response.data);
//           console.log(error.response.status);
//           console.log(error.response.headers);
//         } else if (error.request) {
//           // The request was made but no response was received
//           // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//           // http.ClientRequest in node.js
//           console.log(error.request);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.log('Error', error.message);
//         }
//         console.log(error.config);
//   });
  export default {
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
    gets(url,params) {
      return new Promise((resolve, reject) => {
        axios.get(url,{'params':params})
          .then(response => {
            resolve(response.data);
          }, err => {
            reject(err);
          })
          .catch((error) => {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          })
      })
    },
    deletes(url,params) {
      return new Promise((resolve, reject) => {
        axios.delete(url,{'params':params})
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
    puts(url, params) {
      return new Promise((resolve, reject) => {
        axios.put(url, params)
          .then(response => {
            resolve(response.message);
          }, err => {
            reject(err);
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  }
