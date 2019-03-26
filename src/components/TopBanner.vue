<template>
  <div class="img-wrap">
    
    <img style="top-img" src="http://cdn1.showjoy.com/shop/images/20190322/6VHUQJWGBQQCK1OQ8CI41553229721536.jpeg" width="100%"/>
  </div>
</template>


<style scoped>
.img-wrap {
  width: 100vw;
  box-sizing: border-box;
  padding-top: 5rem;
  overflow: hidden;
}
.top-img {
  width: 100%;
  height: 40vw;
  object-fit: cover;
}

@media(max-width: 800px) {
  .img-wrap {
    padding-top: 3rem;
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
