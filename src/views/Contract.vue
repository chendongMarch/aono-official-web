<template>
  <Layout class="content-wrap">
    <Top></Top>
    <TopBanner></TopBanner>
    <Content>
      <ContractUsDetail></ContractUsDetail>
      <!-- 联系我们 -->
      <!-- <ContractUs class="contract-us-wrap"></ContractUs> -->
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
    ContractUsDetail: () => import('../components/ContractUsDetail.vue'),
    // ContractUs: () => import('../components/ContractUs.vue'),
    Top: () => import('../components/Top.vue'),
    Bottom: () => import('../components/Bottom.vue'),
  },
  data() {
    return {
      
    };
  },
  methods: {},
}
</script>
