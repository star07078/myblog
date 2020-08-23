// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'


import { Loading } from 'element-ui';
//公共样式
import './css/main.css'
import './css/app.less'

Vue.use(Loading)

Vue.prototype.$loading = Loading.service;

Vue.config.productionTip = false

Vue.prototype.$axios = axios;


let loadingInstance;
axios.interceptors.request.use(function(data){
  loadingInstance = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });
  return data;
}, function (error) {
  return Promise.reject(12);
});

axios.interceptors.response.use(function (data) {
  setTimeout(function(){
    loadingInstance.close();
  },300)
  return Promise.resolve(data)
}, function (error) {
  alert('查询失败')
});


/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});


