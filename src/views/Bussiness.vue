<template>
  <Layout>
    <Top></Top>
    <TopBanner></TopBanner>
    <Content class="content-wrap">
      <p class="module-title">主营业务</p>
      <p class="module-desc">提供专业互联网技术服务</p>
      <MyBiz></MyBiz>
      <BizDetail></BizDetail>
    </Content>
    <Bottom></Bottom> 
  </Layout>
</template>

<style scoped>
.content-wrap {
  background-color: white;
}
.module-title {
  box-sizing: border-box;
  width: 100%;
  color: #333;
  font-weight: 600;
  font-size: 2rem;
  padding-top: 1rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
  text-align: center;
}
.module-desc {
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 400;
  font-size: 1.5rem;
}
</style>

<script>
export default {
  components: {
    TopBanner: () => import('../components/TopBanner.vue'),
    MyBiz: () => import('../components/MyBiz.vue'),
    BizDetail: () => import('../components/BizDetail.vue'),
    Top: () => import('../components/Top.vue'),
    Bottom: () => import('../components/Bottom.vue'),
  },
  data() {
    return {};
  },
  methods: {},
}
</script>
