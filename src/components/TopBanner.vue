<template>
  <div class="img-wrap">
    <img style="top-img" src="http://cdn1.showjoy.com/shop/images/20190322/6VHUQJWGBQQCK1OQ8CI41553229721536.jpeg" width="100%"/>
  </div>
</template>


<style scoped>
.img-wrap {
  margin-top: 5rem;
  width: 100vw;
  height: 40vw;
  overflow: hidden;
}
.top-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media(max-width: 800px) {
  .img-wrap {
    margin-top: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
    };
  },
}
</script>
