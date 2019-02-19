<template>
  <Layout class="layout-wrap">
    <!-- <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=18348150&site=qq&menu=yes">
      <img border="0" src="http://wpa.qq.com/pa?p=2:18348150:52" alt="点击这里给我发消息" title="点击这里给我发消息"/>
      </a> -->
    <!-- 顶部 -->
    <Header class="layout-header">
      <div class="nav-wrap">
        <span class="com-title">奥诺科技</span>
        <ul class="menu-wrap">
          <li class="menu-item-wrap" v-for="(item,index) in menus" :key="index">
            <div class="navigator-line"></div>
            <router-link class="home-menu" :to="item.link">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </Header>
    <!-- 内容 -->
    <Content style="padding-bottom:10rem">
      <!-- 走马灯 -->
      <Carousel
        :loop="true"
        :autoplay="true"
        :autoplay-speed="4500"
        trigger="hover"
        arrow="always"
        class="banner-wrap"
        :height="570">
        <CarouselItem v-for="(item,index) in banners" :key="index" class="banner-item">
          <div class="banner-item-wrap">
            <div class="banner-item-img-wrap">
              <img class="banner-item-img" :src="item.src">
            </div>
            <div class="banner-content-wrap">
              <div class="banner-title">{{item.title}}</div>
              <div class="banner-english">{{item.english}}</div>
              <div class="banner-desc">{{item.desc}} {{item.slogon}}</div>
            </div>
          </div>
        </CarouselItem>
      </Carousel>
      <!-- 业务 -->
      <div class="biz-wrap">
        <div
          class="biz-item-wrap"
          v-for="(item,index) in bizs"
          :key="index"
          @mouseover="showActive(index)"
          @mouseout="showActive(-1)"
        >
          <div class="biz-box-border">
            <div class="biz-box">
              <div class="biz-shadow"></div>
              <Icon
                :class="`i-icon ${item.icon}`"
                :color="item.selected?'white':'#2d8cf0'"
                :size="48"
                style="z-index:999"
              />
            </div>
          </div>
          <div class="biz-title">{{item.name}}</div>
          <div class="biz-desc">{{item.desc}}</div>
        </div>
      </div>
      <!-- 项目流程 -->
      <div class="project-flow-wrap">
        <p class="module-title">项目服务流程</p>
        <div class="module-desc">完备的项目流程是我们高质量服务的保障，您的要求是我们改进的源动力</div>
        <div class="project-flow-item-wrap" v-for="(item,index) in projectFlows" :key="index">
          <div>
            <Icon
              :class="`project-flow-icon i-icon i-icon-${item.icon}`"
              :color="'#2d8cf0'"
              style="z-index:999"
            />
            <div>{{item.title}}</div>
          </div>
          <Icon v-if="index%4 !== 3" :class="`i-icon i-icon-next`" :color="'#2d8cf0'" :size="20"/>
        </div>
      </div>
      <!-- 项目流程 -->
      <div class="module-wrap">
        <p class="module-title">关于我们</p>
        <p class="module-desc">做互联网服务行业领跑者</p>
        <ul class="about-content">
          <li>企业使命：助力企业信息化</li>
          <li>企业愿景：做互联网技术服务领跑者</li>
          <li>核心价值观：开发创造、敏捷高效</li>
          <li>践行价值观：创新、专业、实干、责任</li>
        </ul>
        <p class="about-content">
        青岛奥诺网络科技有限公司，成立于2018年5月，公司专注于企业信息化服务，源于杭州领先于业界的专业技术和服务理念，拥有惠利万千企业高尚的使命感 ，致力于用互联网改变企业的经营方式，为您带去便捷、高效的服务体验。</p>

        <p class="about-content">我们年轻，但我们专业，我们深知：产品质量决定一切！公司开办期间组建了一支（集产品、UI设计、前端、Android开发工程师、IOS 开发工程师、后端于一体的）专业的技术团队，专注于为客户开发“真正适合企业、兼顾低成本高效率”的软件。我们真诚的期待，每一个伙伴在这里得到满意愉快的合作。</p>
        
      </div>
      <!-- 团队 -->
      <div class="team-module-wrap">
         <img src="http://cdn1.showjoy.com/shop/images/20190218/9THF3JO46TFHIEU8XSAO1550499131822.jpeg" class="team-bg-img"/>
          <p class="team-module-title" style="z-index:1">我们的团队</p>
          <p class="team-module-desc" style="z-index:1">我们年轻、我们专业，我们有自己的态度</p>
          <div class="team-wrap">
            <div v-for="(item,index) in teams" class="team-item" :key="index">
              <img :src="item.img"/>
              <p class="team-item-name">{{item.name}}</p>
              <p class="team-item-job">{{item.job}}</p>
              <Icon
                :class="`i-icon i-icon-quote`"
                color="#efefef"
                :size="38"
              />
              <p class="team-item-desc">{{item.desc}}</p>
              <Icon
                class="team-quote-2"
                :class="`i-icon i-icon-quote`"
                color="#efefef"
                :size="38"
              />
            </div>
         </div>
      </div>
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
    <Footer class="footer-wrap">Copyright © 奥诺网络科技发展有限公司 版权所有</Footer>
  </Layout>
</template>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 970459 */
  src: url('//at.alicdn.com/t/font_970459_tw4gecjbirk.eot');
  src: url('//at.alicdn.com/t/font_970459_tw4gecjbirk.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_970459_tw4gecjbirk.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_970459_tw4gecjbirk.woff') format('woff'),
  url('//at.alicdn.com/t/font_970459_tw4gecjbirk.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_970459_tw4gecjbirk.svg#iconfont') format('svg');
}
.i-icon {
  display: inline-block;
  font-family: "iconfont" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: middle;
}
/* 签约 */
.i-icon-quote:before {
  content: "\e601";
}
/* 签约 */
.i-icon-next:before {
  content: "\e6cf";
}
/* 签约 */
.i-icon-sign:before {
  content: "\e6bb";
}
/* 签约 */
.i-icon-startup:before {
  content: "\e643";
}
/* 签约 */
.i-icon-collect:before {
  content: "\e640";
}
/* 设计 */
.i-icon-design:before {
  content: "\e760";
}
/* 反馈 */
.i-icon-feedback:before {
  content: "\e611";
}
/* 开发 */
.i-icon-develop:before {
  content: "\e600";
}
/* 测试 */
.i-icon-test:before {
  content: "\e607";
}
/* 交付 */
.i-icon-deliver:before {
  content: "\e6ad";
}
.i-icon-android:before {
  content: "\e9cb";
}
.i-icon-h5:before {
  content: "\e633";
}
.i-icon-ios:before {
  content: "\e676";
}
.i-icon-miniprogram:before {
  content: "\e61a";
}
.i-icon-wechat:before {
  content: "\e6ea";
}

.layout-wrap {
  width: 100%;
  height: 100%;
  background: white;
}
.layout-header {
  background: white !important;
  height: 5rem !important;
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
.biz-wrap {
  box-sizing: border-box;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  background: white;
}
.biz-item-wrap {
  flex: 1;
  height: 15rem;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.biz-icon {
  width: 3rem;
  height: 3rem;
  z-index: 99;
}
.biz-shadow {
  position: absolute;
  background-color: #2d8cf0;
  width: 0rem;
  height: 0rem;
  border-radius: 12rem;
  transition: all 0.5s;
}
.biz-item-wrap:hover > .biz-box-border > .biz-box > .biz-shadow {
  width: 9.5rem;
  height: 9.5rem;
}
.biz-title {
  color: #333333;
  font-size: 1rem;
  margin-top: 0.5rem;
}
.project-flow-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
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
  border-top: #f4f4f4 solid 0.5rem;
  width: 100%;
  color: #333;
  font-weight: 600;
  font-size: 2rem;
  padding-top: 2rem;
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
.nav-wrap {
  /* position: fixed;
  z-index: 999; */
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex; /* Safari */
  align-items: center;
  border-bottom: #f4f4f4 1px solid;
  justify-content: space-between;
}
.navigator-line {
  width: 100%;
  height: 0.3rem;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  /* transition: all 0.5s; */
}
.menu-item-wrap:hover .navigator-line {
  background-color: #2d8cf0;
}
.menu-item-wrap:hover .home-menu {
  color: #2d8cf0;
}

.menu-wrap {
  display: flex;
  display: -webkit-flex; /* Safari */
  height: 100%;
}
.menu-item-wrap {
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 100%;
  display: flex;
  display: -webkit-flex; /* Safari */
  align-items: center;
  box-sizing: border-box;
}
.home-menu {
  color: #333;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 600;
}
.com-title {
  color: #1a1a1a;
  font-size: 2rem;
}
.footer-wrap {
  font-size: 1rem;
  box-sizing: border-box;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
}
.team-wrap {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 95%;
  box-sizing: border-box;
  padding-bottom: 2rem;
  overflow-x: scroll;
  scroll-behavior: smooth;
}
.team-item {
  z-index: 1;
  border-radius: 0.3rem;
  box-shadow: 1rem 1rem 1rem 0rem rgba(53, 53, 53, 0.1);
  box-sizing: border-box;
  padding: 1rem;
  margin: 0 2rem 0 2rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.team-item-name {
  line-height: 2rem;
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 1rem;
}
.team-item-job {
  line-height: 0.5rem;
  color: #666;
  font-weight: 300;
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
.team-item-desc {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  min-width: 15rem;
  text-align: center;
  line-height: 2rem;
  color: #666;
  font-weight: 500;
}
.team-quote-2 {
  transform: rotate(180deg)
}
.team-bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  object-fit: cover;
  filter: grayscale(100%);
}
.team-item > img {
  width: 3rem;
  margin-top: 1rem;
  height: 3rem;
  border-radius: 10rem;
  border-color: #f4f4f4;
  border-style: solid;
}
.team-module-wrap {
  width: 100%;
  height: 40rem;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
}
.team-module-title {
  color: white;
  font-weight: 600;
  font-size: 2rem;
}
.team-module-desc {
  color: white;
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
}
.about-content {
  list-style: none;
  padding-left: 5rem;
  margin-top: 1rem;
  padding-right: 5rem;
  width: 100%;
  font-size: 1.2rem;
  color: #333;
  text-align: left;
  line-height: 2rem;
}
@media (max-width: 600px) {

  .menu-wrap {
    display: none;
  }
  .com-title {
    text-align: center;
    width: 100%;
    color: #1a1a1a;
    font-size: 1.5rem;
  }
  .layout-header {
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
  .biz-box-border {
    width: 7rem;
    height: 7rem;
  }
  .biz-box {
    width: 6.7rem;
    height: 6.7rem;
  }
  .biz-wrap {
    padding-top: 2rem;
    box-sizing: border-box;
  }
  .biz-item-wrap {
    flex: 1;
    height: 9.5rem;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .biz-icon {
    width: 2rem;
    height: 2rem;
  }
  .biz-item-wrap:hover > .biz-box-border > .biz-box > .biz-shadow {
    width: 6.5rem;
    height: 6.5rem;
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
  .team-module-wrap {
    height: 40rem;
    margin-top: 2rem;
  }
  .team-module-title {
    font-size: 1.5rem;
  }
  .cooperate-module-title {
    font-size: 1.5rem;
  }
  .team-module-desc {
    font-weight: 400;
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .team-item {
    margin: 0 2.5rem 0 2.5rem;
  }
  .about-content {
    padding-left: 1rem;
    margin-top: 1rem;
    padding-right: 1rem;
    font-size: 0.9rem;
    line-height: 2rem;
  }
}
::-webkit-scrollbar {
        display: none;
    }
</style>

<script>
export default {
  data() {
    return {
      pageHeight: 600,
      // banner
      banners: [
        {
          index: 2,
          title: "网站建设",
          desc: "移动/PC 网站开发",
          src:
            "http://cdn1.showjoy.com/shop/images/20190217/QFPBF9AWMGDQPI49H6OP1550401561241.jpg",
          english: "WEBSITE CONSTRUCTION",
          slogon: "为企业所想，满足企业需求"
        },
        {
          index: 0,
          title: "微信开发",
          desc: "微网站/公众号",
          src:
            "http://cdn1.showjoy.com/shop/images/20190218/6PPH1W6TXX6JNZHHBYJ91550451405311.jpg",
          english: "WECHAT DEVELOPMENT",
          slogon: "助力企业信息化"
        },
        {
          index: 1,
          title: "小程序",
          desc: "打造全新生态",
          src:
            "http://cdn1.showjoy.com/shop/images/20190218/S3EMBLEHIA4EAHMXW49K1550494523486.png",
          english: "WECHAT MINI PROGRAM",
          slogon: "让应用触手可及"
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
      // 业务合作
      bizs: [
        {
          index: 0,
          name: "小程序",
          icon: "i-icon-miniprogram",
          selected: false
        },
        {
          index: 0,
          name: "微信公众号",
          icon: "i-icon-wechat",
          selected: false
        },
        {
          index: 0,
          name: "Android",
          icon: "i-icon-android",
          selected: false
        },
        {
          index: 0,
          name: "iOS",
          icon: "i-icon-ios",
          selected: false
        },
        {
          index: 0,
          name: "网站",
          icon: "i-icon-h5",
          selected: false
        }
      ],
      // 顶部菜单
      menus: [
        { name: "首页", link: "/home" },
        { name: "业务", link: "/bussiness" },
        { name: "案例", link: "/cases" },
        { name: "关于", link: "/about" },
        { name: "联系", link: "/contact" }
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
        {
          title: "签约",
          icon: "sign"
        },
        {
          title: "启动",
          icon: "startup"
        },
        { title: "采集", icon: "collect" },
        { title: "设计", icon: "design" },
        { title: "反馈", icon: "feedback" },
        { title: "开发", icon: "develop" },
        { title: "测试", icon: "test" },
        { title: "交付", icon: "deliver" }
      ],
      teams: [
         {
          img: 'http://cdn1.showjoy.com/shop/images/20190218/M5CB72X316UBMX6Z9OLV1550500843680.jpg',
          name: '路远',
          job: 'Android 开发工程师',
          desc: '编程是10%的科学，20%天份，和70%的让这天份符合科学；',
        },
        {
          img: 'http://cdn1.showjoy.com/shop/images/20190218/6R97SHWS679GOFIIIT4X1550500647126.jpg',
          name: '小庄',
          job: '产品经理',
          desc: '下午 3 点需求评审，请大家准时参加，谢谢...',
        },
        {
          img: 'http://cdn1.showjoy.com/shop/images/20190218/TF6R7HZUQYLRDAPPGNYW1550501653786.jpg',
          name: '千雪',
          job: '项目经理',
          desc: '理解过程、确定过程、控制过程是软件项目成功的基本保证；',
        },
       
        {
          img: 'http://cdn1.showjoy.com/shop/images/20190218/8HLVL36F4LVK73634OKW1550501192281.jpg',
          name: '嘉文',
          job: 'Ios 开发工程师',
          desc: '好的程序员即使在过单行道时也总是会环顾两边；',
        },
        {
          img: 'http://cdn1.showjoy.com/shop/images/20190218/A68J9UNUEUSFYWCCHA8B1550501382375.jpg',
          name: '米奇',
          job: '前端开发工程师',
          desc: '要么做第一个，要么做最好的一个；',
        },
        {
          img: 'http://cdn1.showjoy.com/shop/images/20190218/YRJUO28EDM9PKGUIC9KS1550501458705.jpg',
          name: '天笑',
          job: '首席架构师',
          desc: '不要担心它能否正常工作，如果一切正常，那么你就会失去工；',
        },
        {
          img: 'http://cdn1.showjoy.com/shop/images/20190218/94ME7YIQNCYXOZBKEMAZ1550501589797.jpg',
          name: '雪昭',
          job: 'UI设计师',
          desc: '在追求颜值的道路上一去不返...',
        },
       
        {
          img: 'http://cdn1.showjoy.com/shop/images/20190218/GDYXPIJIMLZ7LWEFO8FJ1550501757265.jpg',
          name: '青山',
          job: '商务对接',
          desc: '没有什么能够阻挡、我对自由的向往...',
        }
      ],
    };
  },
  methods: {
    request() {
      this.$http.fetch(this, {
        url: "/test/json",
        success: () => {
          //console.log(resp);
        }
      });
    },
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
  created() {
    this.request();
    this.bizs.forEach(item => {
      item.pic = item.activeImg;
    });
    this.$nextTick(() => {
      this.pageHeight = window.screen.height;
      // console.log(' '+this.pageHeight);
    });
  }
};
</script>
