const routers = [{
    path: '/',
    meta: {
        title: '奥诺科技'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}];
export default routers;