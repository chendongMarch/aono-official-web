// 使用 fetch.js 发起网络请求

import axios from './client.js';

const parseToBizResp = (resp) => {
    if (resp && resp.result_num === 200 && resp.data) {
        return resp.data;
    }
    throw new Error('parse biz resp error');
};

const parseToBizRespCompat = (resp) => {
    if (resp && resp.state_code === 400200 && resp.data && resp.data.length > 0) {
        return resp.data[0];
    }
    throw new Error('parse compat biz resp error');
};

const api = {
    fetch(vueCtx, config = {}) {
        const {
      url, // request url
      method = 'get', // request method
      responseType = 'json', // resp type
      params, // get - url query params
      data, // post - body data
      headers = {},
      success,
      fail,
      compat = false,
    } = config;
      //   const token = vueCtx.$storage.read(vueCtx.$values.keyUserToken);
      //   if (!token || token.length <= 0 || token === 'undefined') {
      // // do nothing
      //   } else {
      //       headers.Authorization = token;
      //   }
        const opts = {
            method,
            url: `/api${url}`, // 增加统一前缀，让服务器做跳转
            headers,
            data,
            params,
            responseType,
            validateStatus(status) {
                return status >= 200 && status < 300;
            },
        };
        axios(opts).then((resp) => {
            if (success) {
                success(compat ? parseToBizRespCompat(resp) : parseToBizResp(resp));
            }
        }).catch((error) => {
            if (fail) {
                fail(error);
            } else {
                // vueCtx.$exts.toast(vueCtx, '数据请求失败～');
            }
        });
    },
};

//
export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$http', { value: api });
    },
};
