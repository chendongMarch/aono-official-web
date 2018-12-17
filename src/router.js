const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
  path: '/official',
  meta: {
      title: '奥诺官网'
  },
  component: (resolve) => require(['./views/index.vue'], resolve)
}];
export default routers;