<template>
  <div class="content-wrap flex-horizontal">
    <div class="item-wrap as-view flex-horizontal" v-for="(item,index) in bizs" :key="`biz-detail-item-${index}`">
      <div class="img-wrap">
        <img :src="item.img" class="item-img"/>
        <div class="img-shadow">
          <Icon :class="`img-icon i-icon ${item.icon}`" color="white" :size="50"></Icon>
        </div>
        
      </div>
      <div class="flex-vertival item-content-wrap">
        <div class="title">{{item.name}}</div>
        <div class="desc">{{item.desc}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-wrap {
  padding-bottom: 2rem;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding-left: 5%;
  padding-right: 5%;
  flex-wrap: wrap;
}
.item-wrap {
  box-shadow: 0rem 0.1rem 0.1rem 0rem rgba(53, 53, 53, 0.1);
  width: 49%;
  border: 1px #f4f4f4 solid;
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 0.1rem;
}
.img-wrap {
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  width: 10rem;
  height: 10rem;
  overflow: hidden;
}
.item-img {
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
}
.img-shadow {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  background-color: rgba(0, 0, 0, 0);
  transform-origin: center;

}
.img-icon  {
  position: relative;
}
.item-wrap:hover > .img-wrap > .img-shadow {
  transition: all 0.6s;
  transform: scale(1);
  transform-origin: center;
  background-color: rgba(0, 0, 0, 0.2);
}
.item-wrap:hover > .img-wrap > .item-img {
  transition: all 0.6s;
  filter: grayscale();
  -ms-filter:  grayscale();
}

.item-content-wrap {
  flex: 1;
  box-sizing: border-box;
  padding: 1rem;
}
.item-content-wrap > .title  {
  font-size: 1.5rem;
  color: #333;
  font-weight: 500;
}
.item-content-wrap > .desc  {
  font-size: 1rem;
  color: #666;
  margin-top: 0.5rem;
}

@media (max-width: 800px) {
  .item-wrap {
    width: 100%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      // 业务合作
      bizs: [
        {
          index: 0,
          name: "微信平台",
          icon: "i-icon-wechat",
          selected: false,
          img: 'http://cdn1.showjoy.com/shop/images/20190217/ZY1Y7B8GWGKPVAJWOHVN1550401462206.png',
          desc: '微信公众号、微活动、微宣传、微营销、微商城、微官网，助力公司推广；'
        },
        {
          index: 0,
          name: "小程序",
          icon: "i-icon-miniprogram",
          selected: false,
          img: 'http://cdn1.showjoy.com/shop/images/20190217/ZY1Y7B8GWGKPVAJWOHVN1550401462206.png',
          desc: '官网小程序、商城小程序、服务预约小程序，全新呈现形式，更优质的体验；'
        },
        {
          index: 0,
          name: "网站定制",
          icon: "i-icon-h5",
          selected: false,
          img: 'http://cdn1.showjoy.com/shop/images/20190217/ZY1Y7B8GWGKPVAJWOHVN1550401462206.png',
          desc: '企业官网、高端网站定制，提高企业公信力；'
        },
        {
          index: 0,
          name: "App开发",
          icon: "i-icon-phone",
          selected: false,
          img: 'http://cdn1.showjoy.com/shop/images/20190217/ZY1Y7B8GWGKPVAJWOHVN1550401462206.png',
          desc: 'IPhone/Android 手机客户端开发；'
        },
        {
          index: 0,
          name: "互联网推广",
          icon: "i-icon-internet",
          selected: false,
          img: 'http://cdn1.showjoy.com/shop/images/20190217/ZY1Y7B8GWGKPVAJWOHVN1550401462206.png',
          desc: '微信朋友圈、公众号、小程序广告推广，百度信息流推广，广告也可以是生活的一部分；',
        },
      ],
    };
  },
  created() {
  },
  methods: {
    showActive(index) {
      this.bizs.forEach(item => {
        item.selected = false;
      });
      if (index < 0) {
        return;
      }
      this.bizs[index].selected = true;
    }
  },
}
</script>
