<template>
   <div class="biz-wrap">
      <div
        class="biz-item-wrap"
        v-for="(item,index) in bizs"
        :key="index"
        @mouseover="showActive(index)"
        @mouseout="showActive(-1)">
          <div class="biz-box-border">
            <div class="biz-shadow-bottom"></div>
            <Icon
              :class="`biz-icon i-icon ${item.icon}`"
              :color="item.selected?'#ffffff':'#2d8cf0'"
              :size="48"
            />
            <div class="biz-shadow"></div>
          </div>
        <div class="biz-title">{{item.name}}</div>
        <div class="biz-desc">{{item.desc}}</div>
      </div>
    </div>
</template>

<style scoped>
.biz-wrap {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  padding-top: 1rem;
}
.biz-box-border {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  border-radius: 10rem;
  border: #f4f4f4 5px solid;
}
.biz-box {
  position: relative;
  width: 10rem;
  height: 10rem;
  box-sizing: border-box;
  border: white 0.25rem solid;
  display: flex;
  border-radius: 10rem;
  justify-content: center;
  align-items: center;
}
.biz-item-wrap {
  flex: 1;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.biz-icon {
  width: 3rem;
  height: 3rem;
  z-index: 1;
}
.biz-shadow-bottom {
  position: absolute;
  background-color: white;
  width: 9.5rem;
  height: 9.5rem;
  border-radius: 12rem;
}
.biz-shadow {
  position: absolute;
  background-color: #2d8cf0;
  /* background-color: rgba(0,0/,0  , 0.6); */
  width: 9.5rem;
  height: 9.5rem;
  border-radius: 12rem;
  transform: scale(0);
  transform-origin: center;;
  transition: all 0.5s;
}
.biz-title {
  color: #333333;
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 1rem;
}
@media (min-width: 800px) {
  .biz-item-wrap:hover > .biz-box-border >  .biz-shadow {
    transform: scale(1);
  }
}
@media (max-width: 800px) {
  .biz-box-border {
    border: #f4f4f4 2px solid;
    width: 5.5rem;
    height: 5.5rem;
  }
  .biz-shadow {
    transform: scale(1);
    width: 5.1rem;
    height: 5.1rem;
  }
  .biz-shadow-bottom {
    width: 5.1rem;
    height: 5.1rem;
  }
  .biz-item-wrap {
    width: 27%;
    flex: unset;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .biz-icon {
    width: 3rem;
    height: 3rem;
  }
  .biz-title {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  .biz-item-wrap:hover > .biz-box-border > .biz-box > .biz-shadow {
    width: 5rem;
    height: 5rem;
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
          selected: false
        },
        {
          index: 0,
          name: "小程序",
          icon: "i-icon-miniprogram",
          selected: false
        },
        {
          index: 0,
          name: "网站定制",
          icon: "i-icon-h5",
          selected: false
        },
        {
          index: 0,
          name: "App开发",
          icon: "i-icon-phone",
          selected: false
        },
        {
          index: 0,
          name: "互联网推广",
          icon: "i-icon-internet",
          selected: false
        },
      ],
    };
  },
  created() {
    if (window.innerWidth < 800) {
      this.bizs.forEach(item => {
        item.selected = true;
      });
    }
  },
  methods: {
    showActive(index) {
      if (window.innerWidth < 800) {
        return;
      }
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
