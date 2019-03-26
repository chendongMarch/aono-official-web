<template>
  <Header class="layout-header">
    <div class="nav-wrap">
      <router-link to="/index" class="com-img">
        <img class="com-img" src="http://cdn1.showjoy.com/shop/images/20190322/HI3OXT3MVETTKIFXH6FE1553266945370.png" />
      </router-link>
      <ul class="menu-wrap">
        <li class="menu-item-wrap" v-for="(item,index) in menus" :key="index"
          @mouseover="showActive(index)"
          @mouseout="showActive(-1)" @click="$router.push(item.link)">
          <div class="navigator-line" :style="{
            //backgroundColor: isSelected(item) ? '#2d8cf0': 'white',
          }"></div>
          <div class="home-menu" 
          :style="{
            color: isSelected(item) ? '#2d8cf0': '#333',
            fontSize: item.select  ? '1.2rem' : '1rem',
            textDecoration: isSelected(item) ? 'none' : 'none',
          }"
          >{{item.name}}</div>
        </li>
      </ul>
    </div>
    
    <div class="nav-wrap-mobile">
      <router-link to="/index" class="com-img"> 
      <img class="com-img" src="http://cdn1.showjoy.com/shop/images/20190322/HI3OXT3MVETTKIFXH6FE1553266945370.png" />
      </router-link>
      <Icon  class="i-icon i-icon-menu menu-icon" @click="openDrawer = true" :size="20" :color="'#2d8cf0'"></Icon>
      <Drawer title="奥诺科技" width="50" :closable="false" v-model="openDrawer">
        <div class="menu-item-wrap-mobile" v-for="(item,index) in menus" :key="index" @click="$router.push(item.link)">
          <div class="home-menu" 
          :style="{
            color: isSelected(item) ? '#2d8cf0': '#333',
            fontSize: item.select  ? '1rem' : '0.8rem',
          }"
          >{{item.name}}</div>
        </div>
      </Drawer>
    </div>

  </Header>
</template>


<style scoped>
.menu-icon {
  height: 20px;;
  align-self: center;;
  position:absolute;
  right:1rem;
  top:0;
  margin: auto;
  bottom: 0;
}
.layout-header {
  background: white !important;
  height: 5rem !important;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: #f4f4f4 1px solid;
  z-index: 99;
}
.nav-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex; /* Safari */
  align-items: center;
  justify-content: space-between;
}
.nav-wrap-mobile {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  display: -webkit-flex; /* Safari */
  align-items: center;
  justify-content: center;
  display: none;
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
.com-img {
  height: 100%;
}

.menu-item-wrap-mobile {
  margin-bottom: 0.5rem;
  box-sizing: border-box;
  padding: 0.5rem;
}
@media(max-width: 800px) {
  .layout-header {
    height: 3.5rem !important;
  }
  .nav-wrap {
    display: none;
  }
  .nav-wrap-mobile {
    display: flex;
  } 
  .com-title {
    text-align: center;
    width: 100%;
    color: #1a1a1a;
    font-size: 1.5rem;
  }
}
</style>

<script>
export default {
  data() {
    return {
      openDrawer: false,

      // 顶部菜单
      menus: [
        { name: "首页", link: "/index", select: false, active: false },
        { name: "业务", link: "/bussiness", select: false,active: false   },
        { name: "案例", link: "/cases", select: false, active: false  },
        { name: "关于", link: "/about", select: false, active: false  },
        { name: "联系", link: "/contract", select: false, active: false  }
      ],
    };
  },
  created() {
    this.menus.forEach((item) => {
      if (window.location.href.indexOf(item.link) > 0) {
        item.select = true;
      }
    })
  },
  methods: {
    showActive(index) {
      for(let i = 0; i < this.menus.length; ++i) {
        this.menus[i].active = (index === i);      
      }
    },
    isSelected(item) {
      return (item.select || item.active);
    }
  },
  filters: {
    
  },
}
</script>
