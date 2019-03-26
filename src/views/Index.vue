<template>
  <Layout class="layout-wrap">
    <!-- 顶部 -->
    <Top></Top>
    <!-- 内容 -->
    <Content style="padding-bottom:5rem">
      <div class="top-padding-wrap"></div>
      <!-- 走马灯 -->
      <Carousel
        :loop="true"
        :autoplay="true"
        :autoplay-speed="4500"
        trigger="hover"
        arrow="always"
        class="banner-wrap"
        :height="'45vw'">
        <CarouselItem v-for="(item,index) in banners" :key="index" class="banner-item">
          <div class="banner-item-wrap-new">
            <img :src="item.img3" width="100%"/>
          </div>
        </CarouselItem>
      </Carousel>
      <!-- 业务 -->
      <MyBiz></MyBiz>
      <BizDetail></BizDetail>
      <div class="division"></div>
      <!-- 项目流程 -->
      <div class="project-flow-wrap">
        <p class="module-title">项目服务流程</p>
        <div class="module-desc">完备的项目流程是我们高质量服务的保障，您的要求是我们改进的源动力</div>
        <div class="project-flow-item-wrap" v-for="(item,index) in projectFlows" :key="index">
          <div>
            <Icon
              :class="`project-flow-icon i-icon i-icon-${item.icon}`"
              :color="'#2d8cf0'"
            />
            <div>{{item.title}}</div>
          </div>
          <Icon v-if="index%4 !== 3" :class="`next-icon i-icon i-icon-next`" :color="'#2d8cf0'" :size="20"/>
        </div>
      </div>
      <div class="division"></div>
      <AboutUs></AboutUs>
      <ContractUsDetail></ContractUsDetail>
      <!-- 合作伙伴 -->
      <div class="cooperate-wrap">
        <p class="cooperate-module-title">我们的合作伙伴</p>
        <div class="module-desc">站在巨人的肩膀上，我们才变得更优秀</div>
        <div class="cooperate-list-wrap">
          <li v-for="(item,index) in cooperates" :key="index">
            <a href="javascript:void(0);">
              <img :src="item.src">
            </a>
          </li>
        </div>
      </div>
    </Content>
    <!-- 底部 -->
    <Bottom></Bottom>
    <!-- 联系我们 -->
    <Icon
      @click="clickContract"
      color="white"
      style=""
      class="i-icon i-icon-contract contract-entry"
      :size="35"/>
  </Layout>
  
</template>

<style scoped>
.contract-entry {
  box-shadow: 0.2rem rgba(53, 53, 53, 0.5);
  z-index:999;
  position:fixed;
  right:1.1rem;
  bottom:5rem;
  padding: 0.6rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10rem;
}
.division {
  width: 100%;
  height: 0.5rem;
  background-color: #f4f4f4;
}
.layout-wrap {
  width: 100%;
  height: 100%;
  background: white;
}
.top-padding-wrap {
  height: 5rem;
}
.banner-item-wrap {
  justify-content: center;
  align-items: center;
  flex-direction: row;
  display: flex;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-image: url("http://cdn1.showjoy.com/shop/images/20190217/ZY1Y7B8GWGKPVAJWOHVN1550401462206.png");
}
.banner-content-wrap {
  width: 40%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  margin-top: 1rem;
}
.banner-item-img-wrap {
  width: 60%;
  box-sizing: border-box;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner-item-img {
  height: 90%;
  width: 70%;
  object-fit: contain;
}
.banner-wrap {
  position: relative;
}
.banner-item {
  height: 100%;
}
.banner-title {
  font-size: 3rem;
  color: white;
  font-weight: bold;
}
.banner-english {
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
}
.banner-desc {
  margin-top: 3rem;
  font-size: 2rem;
  color: white;
}
.biz-box-border {
  box-shadow: inset 0 0 0 4px #eef0f1;
  width: 10rem;
  height: 10rem;
  border-radius: 12rem;
  background-color: #eef0f1;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.biz-box {
  width: 9.5rem;
  height: 9.5rem;
  border-radius: 12rem;
  box-sizing: border-box;
  border: white 0.25rem solid;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transition: all 0.5s; */
}

.project-flow-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding-bottom: 1rem;
}
.project-flow-item-wrap {
  width: 25%;
  box-sizing: border-box;
  margin: 1rem 0;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.project-flow-icon {
  font-size: 3rem;
}
.project-flow-item-wrap > div {
  padding-bottom: 2rem;
  padding-top: 2rem;
  width: 70%;
  border: #f4f4f4 solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.project-flow-item-wrap > div > div {
  color: #333;
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
}
.project-flow-item-wrap .i-icon-next {
  position: absolute;
  right: 0;
}
.cooperate-wrap {
  width: 100%;
  justify-content: center;
  align-items: center;
}
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
.cooperate-list-wrap {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.cooperate-module-title {
  width: 100%;
  color: #333;
  font-weight: 600;
  font-size: 2rem;
  padding-top: 2rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
  text-align: center;
}
.cooperate-list-wrap li {
  width: 18%;
  box-sizing: border-box;
  padding: 4rem 0;
  background-color: #f4f4f4;
  margin: 2px;
  height: 5rem;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cooperate-list-wrap li a {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cooperate-list-wrap li a img {
  width: 50%;
  filter: grayscale(100%);
  transform: scale(1, 1);
  transition: all 0.6s;
}
.cooperate-list-wrap li a img:hover {
  transform: scale(1.1, 1.1);
  transition: all 0.6s;
  filter: grayscale(0%);
}
 
@media (max-width: 800px) {
  .top-padding-wrap {
    height: 3.5rem;
  }
  .next-icon {
    display: none;
  }
  .banner-item-wrap {
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    display: flex;
    width: 100%;
    height: 100%;
  }
  .banner-item-wrap-new {
    width: 100%;
    height: 100%;
  }
  .banner-item-wrap-new > img {
    width: 100%;
    height: 100%;
    object-fit: contain !important;

  }

  .banner-content-wrap {
    height: 20% !important;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    width: 100% !important;
  }
  .banner-item-img-wrap {
    height: 60% !important;
    box-sizing: border-box;
    width: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .banner-item-img {
    height: 90%;
    width: 90%;
    object-fit: contain;
  }
  
  .banner-title {
    font-size: 2rem;
    color: white;
    font-weight: bold;
  }
  .banner-english {
    font-size: 1rem;
    color: white;
    font-weight: bold;
  }
  .banner-desc {
    margin-top: 2rem;
    font-size: 1rem;
    color: white;
  }
  .project-flow-item-wrap {
    width: 45%;
    box-sizing: border-box;
    margin: 1rem 0;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  } 
  .project-flow-icon {
    font-size: 2rem;
  }
  .cooperate-list-wrap li {
    width: 45%;
    box-sizing: border-box;
    padding: 4rem 0;
    background-color: #f4f4f4;
    margin: 2px;
    height: 5rem;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
}
::-webkit-scrollbar {
  display: none;
}
</style>

<script>
export default {
  components: {
    ContractUsDetail: () => import('../components/ContractUsDetail.vue'),
    BizDetail: () => import('../components/BizDetail.vue'),
    MyBiz: () => import('../components/MyBiz.vue'),
    AboutUs: () => import('../components/AboutUs.vue'),
    Bottom: () => import('../components/Bottom.vue'),
    Top: () => import('../components/Top.vue'),
  },
  data() {
    return {
      bannerHeight: 0,
      showContract: false,
      pageHeight: 600,
      // banner
      banners: [
        {
          index: 2,
          title: "网站建设",
          desc: "移动/PC 网站开发",
          src:
            "https://cdn1.showjoy.com/shop/images/20190217/QFPBF9AWMGDQPI49H6OP1550401561241.jpg",
          english: "WEBSITE CONSTRUCTION",
          slogon: "为企业所想，满足企业需求",
          img: 'http://cdn1.showjoy.com/shop/images/20190322/W7AS9L8QIJMVKKS1ITLC1553217637758.jpeg',
          img2: 'http://s3.hixd.com/36460.jpeg',
          img3: require('../assets/banner/banner_web.jpeg'),

        },
        {
          index: 0,
          title: "微信开发",
          desc: "微网站/公众号",
          src:
            "https://cdn1.showjoy.com/shop/images/20190218/6PPH1W6TXX6JNZHHBYJ91550451405311.jpg",
          english: "WECHAT DEVELOPMENT",
          slogon: "助力企业信息化",
          img: 'http://cdn1.showjoy.com/shop/images/20190322/ZMTJ6XPC3F6YVCV75AB91553217514115.jpeg',
          img2: 'http://s3.hixd.com/36461.jpeg',
          img3: require('../assets/banner/banner_wx.jpeg'),
        },
        {
          index: 1,
          title: "小程序",
          desc: "打造全新生态",
          src:
            "http://cdn1.showjoy.com/shop/images/20190218/S3EMBLEHIA4EAHMXW49K1550494523486.png",
          english: "WECHAT MINI PROGRAM",
          slogon: "让应用触手可及",
          img: 'http://cdn1.showjoy.com/shop/images/20190322/8SVVRM9NB21CWPF647KL1553244830123.jpeg',
          img2: 'http://s3.hixd.com/36457.jpeg',
          img3: require('../assets/banner/banner_xcx.jpeg'),
        }

        // {
        //   index: 1,
        //   title: "App 定制开发",
        //   desc: "Android+iOS 移动 App",
        //   src:
        //     "http://cdn1.showjoy.com/shop/images/20190217/QFPBF9AWMGDQPI49H6OP1550401561241.jpg",
        //   english: "MOBILE APP DEVELOPMENT",
        //   slogon: "极致体验，驱动品牌价值"
        // },
      ],
      // 合作伙伴
      cooperates: [
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban1s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban2s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban3s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban4s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban5s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban6s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban7s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban8s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban9s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban10s.png"
        },

        {
          src: "http://www.3todo.cn/templets/todo/img/huoban11s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban12s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban13s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban14s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban15s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban16s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban17s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban18s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban19s.png"
        },
        {
          src: "http://www.3todo.cn/templets/todo/img/huoban20s.png"
        }
      ],
      projectFlows: [
        { title: "签约", icon: "sign" },
        { title: "启动", icon: "startup" },
        { title: "采集", icon: "collect" },
        { title: "设计", icon: "design" },
        { title: "反馈", icon: "feedback" },
        { title: "开发", icon: "develop" },
        { title: "测试", icon: "test" },
        { title: "交付", icon: "deliver" }
      ],
    };
  },
  methods: {
    clickContract() {
      this.$router.push('contract');
    },
  },
  created() {

    this.$nextTick(() => {
      this.bannerHeight = window.innerWidth * 0.45;
      this.pageHeight = window.screen.height;
    });
  }
};
</script>
