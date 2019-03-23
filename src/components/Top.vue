<template>
  <Header class="layout-header">
      <div class="nav-wrap">
        <img class="com-img" src="http://cdn1.showjoy.com/shop/images/20190322/HI3OXT3MVETTKIFXH6FE1553266945370.png" />
        <ul class="menu-wrap">
          <li class="menu-item-wrap" v-for="(item,index) in menus" :key="index"
            @mouseover="showActive(index)"
            @mouseout="showActive(-1)">
            <div class="navigator-line" :style="{
              //backgroundColor: isSelected(item) ? '#2d8cf0': 'white',
            }"></div>
            <router-link class="home-menu" 
            :style="{
              color: isSelected(item) ? '#2d8cf0': '#333',
              fontSize: item.select  ? '1.2rem' : '1rem',
              textDecoration: isSelected(item) ? 'none' : 'none',
            }"
            :to="item.link">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </Header>
</template>


<style scoped>
.layout-header {
  background: white !important;
  height: 5rem !important;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
.nav-wrap {
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
.com-img {
  height: 100%;
}

@media(max-width: 800px) {
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
}
</style>

<script>
export default {
  data() {
    return {
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
