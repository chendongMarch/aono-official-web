<template>
  <Layout>
    <Top></Top>
    <TopBanner></TopBanner>
    <Content class="content-wrap">
      <AboutUs></AboutUs>
    </Content>
    <Bottom></Bottom> 
  </Layout>
</template>

<style scoped>
.content-wrap {
  width: 100%;
  background-color: white;
}

</style>

<script>
export default {
  components: {
    TopBanner: () => import('../components/TopBanner.vue'),
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
