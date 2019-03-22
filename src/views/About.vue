<template>
  <Layout>
    <Top></Top>
    <img style="top-img" src="http://cdn1.showjoy.com/shop/images/20190322/6VHUQJWGBQQCK1OQ8CI41553229721536.jpeg" width="100%"/>
    <Content class="content-wrap">
      <about-us></about-us>
    </Content>
    <Bottom></Bottom> 
  </Layout>
</template>

<style scoped>
.content-wrap {
  width: 100%;
  background-color: white;
}
.top-img {
  width: 100%;
  height: 45vw;
}
</style>

<script>
export default {
  components: {
    AboutUs: () => import('../components/AboutUs.vue'),
    Top: () => import('../components/Top.vue'),
    Bottom: () => import('../components/Bottom.vue'),
  },
  data() {
    return {};
  },
  methods: {},
}
</script>
