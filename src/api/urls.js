const url = {
  appLink: 'https://a.app.qq.com/o/simple.jsp?pkgname=xiongdixingqiu.haier.com.xiongdixingqiu',
  storyCoverDetail: '/story/detail/',
  storyItemDetail: '/story/picbookDetail/',
  storySubjDetail: '/subject/detail/',
  loginGetVerifyCode: '/getLoginVerifyCode',
  loginByPhone: '/registnew',
  loginByPhone2: '/registnew2',
  actPickStarAdd: '/weixin/addActivityUser',
  actPickStarAdd2: '/weixin/addActivityUser2',
  actEnterUserCenter: '/weixin/enterUserCenter',
  actUserWorkInfo: '/weixin/getUserWorkInfo',
  actShowMoreWorks: '/weixin/showMoreWorks',
  actDoLikeWorks: '/weixin/doLikeWorks',
  getWxConfig: '/weixin/getWeixinConfig',
  postReadRedeemCode: '/cardCoupons/getRedeemCode',
};

//
export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$urls', { value: url });
  },
};
