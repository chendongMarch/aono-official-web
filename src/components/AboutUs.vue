<template>
  <div>
    <!-- 关于 -->
    <div class="module-wrap">
      <p class="module-title">关于我们</p>
      <p class="module-desc">做互联网服务行业领跑者</p>
      <p class="about-content">
      青岛奥诺网络科技有限公司，成立于2018年5月，公司专注于企业信息化服务，源于杭州领先于业界的专业技术和服务理念，拥有惠利万千企业高尚的使命感 ，致力于用互联网改变企业的经营方式，为您带去便捷、高效的服务体验。</p>

      <p class="about-content">我们年轻，但我们专业，我们深知：产品质量决定一切！公司开办期间组建了一支专业的技术团队，专注于为客户开发“真正适合企业、兼顾低成本高效率”的软件。我们真诚的期待，每一个伙伴在这里得到满意愉快的合作。</p>
      <div class="about-info-wrap">
        <div class="about-info-item" >
          <img class="about-info-img" src="https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
          <div class="about-info-bg" style="background-color: #F4606C;">
          </div>
          <h2 class="about-info-title">企业使命</h2>
          <h3 class="about-info-eng">MISSION</h3>
          <span class="about-info-division"></span>
          <p class="about-info-content">助力企业信息化</p>
        </div>
        <div class="about-info-item">
          <img class="about-info-img" src="https://images.pexels.com/photos/744462/pexels-photo-744462.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
          <div class="about-info-bg" style="background-color: #19CAAD;">
          </div>
          <h2 class="about-info-title">企业愿景</h2>
          <h3 class="about-info-eng">DESIRE</h3>
          <span class="about-info-division"></span>
          <p class="about-info-content">做互联网技术服务领跑者</p>
        </div>
        <div class="about-info-item">
            <img class="about-info-img" src="https://images.pexels.com/photos/34092/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
          <div class="about-info-bg" style="background-color: #562A72;"></div>
          <h2 class="about-info-title">价值观</h2>
          <h3 class="about-info-eng">WORTH</h3>
          <span class="about-info-division"></span>
          <p class="about-info-content">开发创造、敏捷高效</p>
        </div>
      </div>
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
  </div>
</template>

<style scoped>
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


.team-wrap {
  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;
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
  -webkit-overflow-scrolling: touch;
  -webkit-font-smoothing: antialiased;
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
p.about-content {
  text-indent: 2em;
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
.about-info-wrap {
  width: 100%;
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

.about-info-item {
  width: 28%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: transparent 1px solid;
  border-radius: 0.3rem;
  height: 15rem;
  margin: 1rem;
}
.about-info-title {
  color: white;
  z-index: 1;
}
.about-info-eng {
  color: white;
  margin-top: 0.5rem;
  z-index: 1;
}
.about-info-bg {
  top: 0;
  bottom: 0;
  z-index: 0;
  left: 0;
  opacity: 0.9;
  right: 0;
  position: absolute;
  border: transparent 1px solid;
  border-radius: 0.3rem;
}
.about-info-img {
  top: 0;
  position: absolute;
  bottom: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  object-fit: cover;
  filter: grayscale();
  border: transparent 1px solid;
  border-radius: 0.3rem;
}
.about-info-division {
  width: 30%;
  z-index: 1;
  height: 0.1rem;
  margin: 1rem;
  border-radius: 1rem;
  background-color: white;
}
.about-info-content {
  color: white;
  margin-top: 1rem;
  z-index: 1;
  font-size: 1.5rem;
}

@media(max-width: 800px) {
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
  .about-info-item {
    width: 90%;
  }
}
</style>

<script>
export default {
  data() {
    return {
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
  }
}
</script>
