<template>
    <Layout class="layout-wrap">
        <Header class="layout-header">
            <div class="nav-wrap">
                <span class="com-title">奥诺科技</span>
                <ul id="menu-wrap">
                    <li class="menu-item-wrap" v-for="(item,index) in menus" :key="index">
                    <div class="navigator-line"></div>
                    <router-link class="home-menu" :to="item.link">{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
        </Header>
        <Content>
            <Carousel loop class="banner-wrap" :height="500">
                <CarouselItem v-for="(item,index) in banners" :key="index" class="banner-item">
                    <div class="banner-bg-wrap">
                    <div class="banner-title">{{item.title}}</div>
                    <div class="banner-english">{{item.english}}</div>
                    <div class="banner-desc">{{item.desc}} {{item.slogon}}</div>
                    </div>
                </CarouselItem>
            </Carousel>
            <div class="biz-wrap">
                <div class="biz-item-wrap" v-for="(item,index) in bizs" :key="index" @mouseover="showActive(index)" @mouseout="showActive(-1)">
                    <div class="biz-box-border">
                        <div class="biz-box">
                            <div class="biz-shadow"></div>
                            <Icon :class="`i-icon ${item.icon}`" :color="item.selected?'white':'#2d8cf0'" :size="48"  style="z-index:999"/>
                        </div>
                    </div>
                    <div class="biz-title">{{item.name}}</div>
                    <div class="biz-desc">{{item.desc}}</div>
                </div>
            </div>
        </Content>
    </Layout>
</template>

<style>
@font-face {
  font-family: 'custom-iconfont';  /* project id 970459 */
  /* src: url('http://at.alicdn.com/t/font_970459_foyqy7nxu5f.eot');
  src: url('http://at.alicdn.com/t/font_970459_foyqy7nxu5f.eot?#iefix') format('embedded-opentype'),
  url('http://at.alicdn.com/t/font_970459_foyqy7nxu5f.woff') format('woff'),
  url('http://at.alicdn.com/t/font_970459_foyqy7nxu5f.ttf') format('truetype'),
  url('http://at.alicdn.com/t/font_970459_foyqy7nxu5f.svg#iconfont') format('svg'); */
  src: url('//at.alicdn.com/t/font_970459_foyqy7nxu5f.ttf'),
}
.i-icon {
    display: inline-block;
    font-family: 'custom-iconfont' !important;
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
.i-icon-android:before { content: "\e9cb"; }
.i-icon-h5:before { content: "\e633"; }
.i-icon-ios:before { content: "\e676"; }
.i-icon-miniprogram:before { content: "\e61a"; }
.i-icon-wechat:before { content: "\e6ea"; }
    
.layout-wrap {
    width: 100%;
    height: 100%;
    background: white;
}
.layout-header {
    background: white !important;
    height: 5rem !important;
}
.banner-bg-wrap {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-image: url('http://cdn1.showjoy.com/shop/images/20181217/ZDBHX1DPKFCEUZLX6HNZ1545051922227.jpeg');
}
.banner-wrap {
    position: relative;
} 
.banner-item {
    height: 100%;
}
.banner-title {
  font-size: 4rem;
  color: white;
  font-weight: bold;
}
.banner-english {
  font-size: 2rem;
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
  border: white .25rem solid;
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
  height: 15rem;
  width: 100%;
  background: white;
}
.biz-item-wrap {
  flex: 1;
  height:15rem;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.biz-icon {
    width:3rem;
    height:3rem;
    z-index:99;
}
.biz-shadow {
  position: absolute;
  background-color: #2d8cf0;
  width: 0rem;
  height: 0rem;
  border-radius: 12rem;
  transition: all 0.5s;
}
.biz-item-wrap:hover > .biz-box-border > .biz-box >.biz-shadow {
  width: 9.5rem;
  height: 9.5rem;
}
.biz-title {
    color: #333333;
    font-size: 1rem;
    margin-top: 0.5rem;
}
.nav-wrap{
  /* position: fixed;
  z-index: 999; */
  width: 100%;  
  height: 5rem;
  display: flex;
  display: -webkit-flex; /* Safari */
  align-items: center;
  border-bottom: #f4f4f4 1px solid;
  justify-content: space-between;
}

.navigator-line {
  width: 100%;
  height: .3rem;
  background-color: transparent;
  position: absolute;
  top:0;
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

#logo-img {
  width: 150px;
  margin-left: 2rem;
}
#menu-wrap {
  display: flex;
  display: -webkit-flex; /* Safari */
  margin-right:  2rem;
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
    font-size: 2.5rem;
}
</style>

<script>
export default {
    data() {
        return {
            pageHeight: 600,
            banners: [
                { 
                    index:0, 
                    title: '微信开发',
                    desc: '公众号/小程序',
                    src: 'http://cdn1.showjoy.com/shop/images/20181109/MJJOB5DIKY7AQI3TB7TL1541749374017.jpg',
                    english: 'WECHAT DEVELOPMENT',
                    slogon: '让应用触手可及',
                },{ 
                    index:1 , 
                    title: 'App 定制开发',
                    desc: 'Android+iOS 移动 App',
                    src: 'http://cdn1.showjoy.com/shop/images/20181109/LT35SH74BTLP2QJ566UA1541749373747.jpg',
                    english: 'MOBILE APP DEVELOPMENT',
                    slogon: '极致体验，驱动品牌价值',
                },{ 
                    index:2, 
                    title: '网站建设',
                    desc: '移动/PC 网站开发',
                    src: 'http://cdn1.showjoy.com/shop/images/20181109/B35W44T43SQEZ8TFCEQD1541749373720.jpg',
                    english: 'WEBSITE CONSTRUCTION',
                    slogon: '为企业所想，满足企业需求',
                }
            ],
            bizs: [
                {
                    index: 0,
                    name: '小程序',
                    icon: 'i-icon-miniprogram',
                    selected: false,
                },
                {
                    index: 0,   
                    name: '微网站',
                    icon: 'i-icon-wechat',
                    selected: false,
                },
                {
                    index: 0,
                    name: 'Android',
                    icon: 'i-icon-android',
                    selected: false,
                },
                {
                    index: 0,
                    name: 'iOS',
                    icon: 'i-icon-ios',
                    selected: false,
                },
                {
                    index: 0,
                    name: 'h5',
                    icon: 'i-icon-h5',
                    selected: false,
                }
            ],
            menus: [
                {name: '首页', link: '/home'},
                {name: '业务', link: '/bussiness'},
                {name: '案例', link: '/cases'},
                {name: '关于', link: '/about'},
                {name: '联系', link: '/contact'},
            ],
        };
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
    created() {
        this.bizs.forEach(item => {
            item.pic = item.activeImg;
        });
        this.$nextTick(() => {
            this.pageHeight = window.screen.height;
            console.log(' '+this.pageHeight);
        });
    },
};
</script>
