import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'iview/dist/styles/iview.css';
import http from './api/http.js';

Vue.use(http);

import { Button, Table, Layout, Header, 
  Content, Footer, Carousel, CarouselItem, Icon } from 'iview';
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Layout', Layout);
Vue.component('Header', Header);
Vue.component('Footer', Footer);
Vue.component('Content', Content);
Vue.component('Carousel', Carousel);
Vue.component('CarouselItem', CarouselItem);
Vue.component('Icon', Icon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
