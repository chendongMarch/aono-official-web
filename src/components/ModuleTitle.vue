<template>
  <!-- 关于 -->
  <div class="module-wrap">
    <p class="module-title">{{title}}</p>
    <p class="module-desc">{{desc}}</p>
  </div>
</template>

<style scoped>
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
.module-wrap {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
 
@media(max-width: 800px) {
  .module-title {
    font-size: 1.5rem;
    padding-top: 1rem;
    margin-top: 1rem;
    padding-bottom: 0.5rem;
  }
  .module-desc {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .team-module-wrap {
    height: 40rem;
    margin-top: 2rem;
  }
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    }
  },
  data() {
    return {

    };
  }
}
</script>
