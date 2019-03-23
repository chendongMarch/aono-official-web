<template>
  <Layout>
    <Top></Top>
    <TopBanner></TopBanner>
    <Content class="content-wrap">
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
