<template>
  <Layout>
    <Top></Top>
    <TopBanner></TopBanner>
    <Content class="content-wrap">
      <div class="wait-wrap">敬请期待</div>
    </Content>
    <Bottom></Bottom> 
  </Layout>
</template>

<style scoped>
.content-wrap {
  width: 100%;
  background-color: white;
}
.wait-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
  box-sizing: border-box;
  padding: 10rem;
  font-size: 2rem;
  color: #333;
}
</style>

<script>
export default {
  components: {
    TopBanner: () => import('../components/TopBanner.vue'),
    Top: () => import('../components/Top.vue'),
    Bottom: () => import('../components/Bottom.vue'),
  },
  data() {
    return {};
  },
  methods: {},
}
</script>
