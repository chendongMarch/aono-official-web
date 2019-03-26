<template>
  <div class="contract-wrap">
    <ModuleTitle title="联系我们" desc="您的满意是我们唯一的目标"></ModuleTitle>
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
          <div class="contract-title"> {{item.title}}</div>
          <a target="_blank" :href="`tel:${item.phone}`">
            <div class="contract-line"><span>电话：</span>{{item.phone}}</div>
          </a>
          <a target="_blank" :href="generateQQLink(item.qq)">
            <div class="contract-line"><span>QQ：</span>{{item.qq}}</div>
          </a>
          <a :href="`mailto:${item.emailSend}?subject=项目需求&body=我的手机号是xxxx，请及时与我联系；`">
            <div class="contract-line"><span>Email：</span>{{item.email}}</div>
          </a>
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
  color: #666;
}
.address-left-wrap > .address-wrap > span {
  font-size: 1.5rem;
  color: #333;
}

.address-left-wrap > .mobile-wrap {
  font-size: 1.2rem;
  color: #666;
}
.address-left-wrap > .mobile-wrap > span {
  font-size: 1.5rem;
  color: #333;
} 
.slogan-wrap {
  font-size: 1.3rem;
  color: #333
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
.contract-title {
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  font-size: 1.3rem;
  color: #333;
} 
.contract-line {
   font-size: 1rem;
   color: #444;
   padding: 0.2rem 0;
}
.contract-line:hover {
   background-color: #f4f4f4;
}
.contract-line > span {
  margin-left: 0.5rem;
  color: #333;
}
@media(max-width: 800px){
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
    width: 6rem;
    height: 6rem;
  }
  .contract-title {
    margin-bottom: 0.1rem;
    margin-left: 1rem;
    font-size: 1rem;
  } 
  .contract-line {
    font-size: 0.7rem;
  }
  .contract-line:hover {
    background-color: #f4f4f4;
  }
  .contract-line > span {
    margin-left: 1rem;;
    color: #333;
  }
}
</style>

<script>
export default {
  components: {
    ModuleTitle: () => import('../components/ModuleTitle.vue'),
  },
  data() {
    return {
      contracts: [
        {
          title: '客服咨询',
          wechat: 'http://cdn1.showjoy.com/shop/images/20190228/YUHSUNP4JLBGOHKFHP4R1551362423018.png',
          phone: '13611301719',
          qq: '1101873740',
          email: 'kf@aonokj.com',
          emailSend: 'kf@aonokj.com;business@aonokj.com'
        },
        {
          title: '商务咨询',
          wechat: 'http://cdn1.showjoy.com/shop/images/20190322/1N8N13KOXYGTAD22AYS71553241901616.png',
          phone: '18561598396',
          qq: '18348150',
          email: 'business@aonokj.com',
          emailSend: 'kf@aonokj.com;business@aonokj.com'
        }
      ],
    };
  },
  methods: {
    generateQQLink(qq) {
      var os = function() {
        var ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone, 
        isAndroid = /(?:Android)/.test(ua), 
        isFireFox = /(?:Firefox)/.test(ua), 
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
        isIPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isIPhone && !isAndroid && !isSymbian;
        return {
              isTablet,
              isIPhone,
              isAndroid,
              isPc,
              isChrome
        };
      }();
      if(os.isAndroid || os.isIPhone || os.isTablet) {
        return `mqqwpa://im/chat?chat_type=wpa&uin=${qq}&version=1&src_type=web&web_src=oicqzone.com`
      } else {
        return `http://wpa.qq.com/msgrd?v=3&uin=${qq}&site=qq&menu=yes`;
      }
    }
  },
}
</script>
