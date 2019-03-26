<template>
  <div class="contract-wrap">
    <p class="module-title">联系我们</p>
    <p class="module-desc">您的满意是我们唯一的目标</p>
    <div class="flex-horizontal flex-wrap address-all-wrap">
      <div class="flex-vertical address-left-wrap">
        <div class="slogan-wrap">专业、年轻、以客户满意为核心目标，我们希望做一家不一样的技术服务公司</div>
        <div class="address-wrap"><span>公司地址：</span><br/>山东省青岛市李沧区亚马逊AWS联合创新中心</div>
        <div class="mobile-wrap"><span>联系电话：</span><br/>13611301719</div>
      </div>
      <img class="map-img" src="http://cdn1.showjoy.com/shop/images/20190325/K7NPB1GFUDGNO77A5BPO1553522334857.png"/>
    </div>
    <div class="flex-horizontal flex-wrap person-wrap">
      <div class="person-item-wrap as-view flex-horizontal" v-for="(item,index) in contracts" :key="index">
        <img :src="item.wechat" class="person-img"/>
        <div class="contract-wrap">
          <div class="contract-line"><span>电话：</span>{{item.phone}}</div>
          <div class="contract-line"><span>电话：</span>{{item.qq}}</div>
          <div class="contract-line"><span>Email：</span>{{item.email}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-wrap {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-sizing: border-box;
}
 
.map-img {
  object-fit: cover;
  width: 35rem;
  height: 20rem;
}
.address-all-wrap {
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1rem 2rem 1rem 2rem;
  margin-top: 1rem;
}
.address-left-wrap {
  box-sizing: border-box;
  padding: 1rem;
  width: 50%;
  margin-right: 1rem;
  justify-content: space-around;
}
.address-left-wrap > .address-wrap {
  font-size: 1.2rem;
  color: #333;
}
.address-left-wrap > .address-wrap > span {
  font-size: 1.5rem;
  color: #666;
}

.address-left-wrap > .mobile-wrap {
  font-size: 1.2rem;
  color: #333;
}
.address-left-wrap > .mobile-wrap > span {
  font-size: 1.5rem;
  color: #666;
} 
.slogan-wrap {
  font-size: 1.3rem;
  color: #666;
}
.person-wrap {
  width: 100%;
  box-sizing: border-box;
}
.person-item-wrap {
  margin: 1rem;
  box-shadow: 0rem 0.1rem 0.1rem 0rem rgba(53, 53, 53, 0.1);
  width: 45%;
  border: 1px #f4f4f4 solid;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.1rem;
  align-items: center;
}
.person-img {
  width: 10rem;
  height: 10rem;
}
.contract-line {
   font-size: 1.2rem;
   color: #444;
    margin: 0.5rem;
}
.contract-line > span {
  margin-left: 1rem;
  color: #333;
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
@media(max-width: 800px){
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
  .contract-us-wrap {
    display: none !important;
  }
  .address-left-wrap {
    width: 100%;
  }
  .map-img {
    width:100%;
    margin-top: 1rem;
  }
  .slogan-wrap {
    font-size: 1rem;
  }
  .address-left-wrap {
    padding: 0.5rem;
  }
  .address-left-wrap > .address-wrap {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
  .address-left-wrap > .address-wrap > span {
    font-size: 1rem;
  }
  .address-left-wrap > .mobile-wrap {
     margin-top: 0.5rem;
    font-size: 1rem;
  }
  .address-left-wrap > .mobile-wrap > span {
    font-size: 1rem;
  } 
  .person-item-wrap {
    margin: 0.5rem;
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
  }
  .person-img {
    width: 5rem;
    height: 5rem;
  }
  .contract-line {
    font-size: 1rem;
    color: #444;
    margin: 1rem;
  }
  .contract-line > span {
    margin-left: 1rem;
    color: #333;
  }
}
</style>

<script>
export default {
  data() {
    return {
      contracts: [
        {
          wechat: 'http://cdn1.showjoy.com/shop/images/20190228/YUHSUNP4JLBGOHKFHP4R1551362423018.png',
          phone: '13611301719',
          qq: '1101873740',
          email: '1101873740@qq.com'
        },
        {
          wechat: 'http://cdn1.showjoy.com/shop/images/20190322/1N8N13KOXYGTAD22AYS71553241901616.png',
          phone: '18561598396',
          qq: '18348150',
          email: '18348150@qq.com'
        }
      ],
    };
  },
}
</script>
