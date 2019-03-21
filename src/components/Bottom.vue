<template>
  <div class="content-wrap flex-vertical" >
    <div class="flex-horizontal" style="flex-wrap:wrap">
      <div class="showcase-wrap flex-horizontal">
        <div class="showcase-col-wrap flex-vertical" v-for="(item,index) in showCases" :key="`showcase-${index}`">
          <div class="showcase-item-title">{{item.title}}</div>
          <div class="showcase-item-content" v-for="(itemJ,indexJ) in item.details" :key="`col-${indexJ}`">
              <a v-if="itemJ.link" :href="itemJ.link" target="_blank">{{itemJ.title}}</a>
              <span v-else>{{itemJ.title}}</span>
          </div>
        </div>
      </div>
      <div class="right-content-wrap flex-vertical">
        <div class="title">售前咨询热线</div>
        <div class="phone">13611301719</div>
        <img src="http://cdn1.showjoy.com/shop/images/20190321/2GXMNMDALS6A6F6DMC4O1553177102596.jpg"/>
        <div class="wechat">关注微信公众号</div>
      </div>
    </div>

   <div class="copyright">
      Copyright © 青岛奥诺网络科技有限公司 版权所有 鲁ICP备19009573号-1
    </div>
  </div>
</template>


<style scoped>
@media (max-width: 800px) {
  .content-wrap {
    padding: 1rem !important;
  }
  .showcase-wrap {
    flex-wrap: wrap;
    width: 100%;
  } 
  .showcase-col-wrap {
    width: 100%;
  } 
  .right-content-wrap {
    margin-top: 2rem;
    width: 100%;
    align-items: flex-start !important;
  }
  .showcase-item-title {
    padding: 0.5rem !important;
  }
  .showcase-item-content {
    padding: 0.5rem !important;
  }
  .copyright {
    margin-left: 0 !important;
  }
}
.content-wrap {
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 3rem;
  background-color: rgb(23, 29, 41)
}
.showcase-item-title {
  color: #999;
  font-size: 1rem;
  font-weight: 450;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
}
.showcase-item-content {
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  width: 10rem;
  color: #666;
}
.showcase-item-content > a{
  color: #666;
}
.showcase-item-content:hover {
  background-color: rgba(100, 100, 100, 0.5);
}
.copyright {
  margin-left: 1rem;
  font-size: 1rem;
  margin-top: 1rem;
}
.right-content-wrap {
  flex:1;
  justify-content: space-between;
  align-items: flex-end;
}
.right-content-wrap > img {
  margin-top: 1rem;
  width: 5rem;
  height: 5rem;
}
.right-content-wrap > .title {
  font-size: 1.5rem;
  color: #666;
}
.right-content-wrap > .phone {
  font-size: 2rem;
  color: white;
  font-weight: 500;
}
.right-content-wrap > .wechat {
  font-size: 0.6rem;
  color: #666;
  margin: 0.5rem 0;
}
</style>

<script>
export default {
  data() {
    return {
      showCases: [
        {
          title: '产品家族',
          details: [
            { title: '网站建设', link: '' },
            { title: '微信开发', link: '' },
            { title: '小程序开发', link: ''}
          ],
        },
        {
          title: '客服咨询',
          details: [
            { title: '业务咨询', link: 'http://wpa.qq.com/msgrd?v=3&uin=18348150&site=qq&menu=yes' },
            { title: '售后服务', link: 'http://wpa.qq.com/msgrd?v=3&uin=18348150&site=qq&menu=yes' },
            { title: '咨询电话', link: 'tel:13611301719' },
          ],
        },
        {
          title: '我们',
          details: [
            { title: '关于我们', link: 'http://wpa.qq.com/msgrd?v=3&uin=18348150&site=qq&menu=yes' },
            { title: '联系我们', link: 'http://wpa.qq.com/msgrd?v=3&uin=18348150&site=qq&menu=yes' },
          ],
        }
      ]
    };
  },
}
</script>
