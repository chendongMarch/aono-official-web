<template>
  <div class="contract-wrap" v-if="!notShowContract">
    <Icon
      @click="notShowContract=true"
      color="white"
      class="i-icon i-icon-close contract-close-icon"
      :size="15"/>
    <Icon
      color="#2d8cf0"
      class="i-icon i-icon-contract"
      :size="35"/>
    
    <div v-for="(item,index) in contracts" :key="index" class="flex-horizontal flex-y-center" style="margin-left:5rem;">
      <!-- 微信 -->
      <div class="contract contract-wechat" style="margin-right:1rem;">
        <img :src="item.wechat"/>
      </div>
      <!-- 手机和qq -->
      <div class="flex-vertical">
        <!-- 手机号 -->
        <a target="_blank" :href="`tel:${item.phone}`">
          <div class="contract contract-phone">
            <Icon
              color="white"
              class="i-icon i-icon-phone"
              :size="20"/>
            <span class="contract-content">{{item.phone}}</span>
          </div>
        </a>
        <!-- qq -->
        <a target="_blank" :href="`http://wpa.qq.com/msgrd?v=3&uin=${item.qq}&site=qq&menu=yes`">
          <div class="contract contract-qq">
            <Icon
              color="white"
              class="i-icon i-icon-qq"
              :size="20"/>
            <span class="contract-content">{{item.qq}}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

.contract-wrap {
  box-sizing: border-box;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 111;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(0,0,0  , 0.6);
  /* border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem; */
}
.contract-wrap > .title {
  color: white;
  font-size: 1rem;
  margin: 0.5rem;
  font-weight: 600;
}
.contract-close-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  transform: rotate(0deg);
  transition: all 0.6s;
}
.contract-close-icon:hover {
  transform: rotate(360deg);
  transition: all 0.6s;
}
.contract-qq:hover {
   background-color: gray;
}
.contract-phone:hover {
  background-color: gray;
}
.contract {
  box-sizing: border-box;
  padding: 0.5rem;
  display: flex;
  justify-content: flex-start;;
  align-items: center;
  box-sizing: border-box;
  /* background-color: white; */
  /* border: #2d8cf0 solid 1px; */
  z-index: 100;
  transform: scale(1);
  transition: all 0.6s;
}
/* .contract:hover {
  z-index: 101;
  transform: scale(3);
  transition: all 0.6s;
} */
.contract-content {
  font-size: 1rem;
  color: white;
  margin-left: 0.5rem;
  font-weight: 500;
}
.contract-qq {
  transform-origin: bottom right;
  bottom: 3.5rem;
}
.contract-wechat {
  transform-origin: top right;
  bottom: 6.5rem;
}
.contract-wechat > img {
  width: 3rem;
  height: 3rem;
  transform: scale(1);
  transition: all 0.6s;
  transform-origin: bottom left;
}
.contract-wechat > img:hover {
  transform: scale(1.4);
  transition: all 0.6s;
  transform-origin: center;
}
</style>

<script>
export default {
  data() {
    return {
      notShowContract: false,
      contracts: [
        {
          wechat: 'http://cdn1.showjoy.com/shop/images/20190228/YUHSUNP4JLBGOHKFHP4R1551362423018.png',
          phone: '13611301719',
          qq: '1101873740'
        },
        {
          wechat: 'http://cdn1.showjoy.com/shop/images/20190322/1N8N13KOXYGTAD22AYS71553241901616.png',
          phone: '18561598396',
          qq: '18348150'
        }
      ],
    };
  },
}
</script>
