<template>
  <Layout>
    <Top></Top>
    <TopBanner></TopBanner>
    <Content class="content-wrap">
      <ModuleTitle title="主营业务" desc="提供专业互联网技术服务"></ModuleTitle>
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
    ModuleTitle: () => import('../components/ModuleTitle.vue'),
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
