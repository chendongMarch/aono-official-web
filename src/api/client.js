// axios 数据请求封装客户端

import axios from 'axios';

const ERR_COMM = -1;

class ApiError {
  constructor(type, data = undefined, msg = '') {
    this.type = type;
    this.msg = msg;
    this.data = data;
  }
}

// 创建自定义的 axios 实例
const Axios = axios.create({
  baseURL: '/',
  timeout: 10000,
  responseType: 'json',
  withCredentials: true, // cookie
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
});

// request 拦截器，重写 post 传参等
Axios.interceptors.request.use(
  (config) => {
    const modifyConfig = config;
    // if (modifyConfig.method === 'post') {
    //   // 序列化 json
    //   modifyConfig.data = JSON.stringify(config.data);
    // }
    return modifyConfig;
  },
  (error) => {
    // 提示信息
    const errorInfo = error.data.error ? error.data.error.message : error.data;
    Promise.reject(new ApiError(ERR_COMM, errorInfo, 'request error'));
  },
);


// response 拦截器
Axios.interceptors.response.use(
  (resp) => {
    if (!resp) {
      return Promise.reject(new ApiError(ERR_COMM, resp, 'resp is null'));
    }
    return Promise.resolve(resp.data);
  },
  (error) => {
    const errorInfo = error.data.error ? error.data.error.message : error.data;
    return Promise.reject(new ApiError(ERR_COMM, errorInfo, 'resp error'));
  },
);

export default Axios;
