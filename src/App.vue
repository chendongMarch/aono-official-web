<template>
  <div id="app">
    <router-view/>
    <BackTop style="z-index:999" :height="500" :bottom="20" :right="20" :duration="1000"></BackTop>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-horizontal {
  display: flex;
  flex-direction: row;
}
.flex-vertical {
  display: flex;
  flex-direction: column;;
}
.flex-x-center {
  justify-content: center;
}
.flex-y-center {
  align-items: center;
}
.as-view {
  box-sizing: border-box;
}


</style>
