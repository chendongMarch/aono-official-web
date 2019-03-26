<template>
  <div class="content-wrap">
    <img class="top-img" src="http://cdn1.showjoy.com/shop/images/20190322/6VHUQJWGBQQCK1OQ8CI41553229721536.jpeg" width="100%"/>
  </div>
</template>


<style scoped>
.content-wrap {
  width: 100%;
  box-sizing: border-box;
  padding-top: 5rem;
}
.img-wrap {
  width: 100%;
}
.top-img {
  width: 100%;
  height: 40vw;
  object-fit: cover;
}

@media(max-width: 800px) {
  .top-img {
    height: 40vw;
  }
  .content-wrap {
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
