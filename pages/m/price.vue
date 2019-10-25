<template>
  <div class="price">
    <!-- <header class="site-header" :class="{'site-top': siteNav || scrollEveny}">
      <img :src="logo" class="site-header-logo">
      <a href="javascript:;" class="site-header-btn" :class="{'site-header-toggle': siteNav  || scrollEveny}" @click="toggleNav">
        <span class="site-header-btn-item" :class="{'site-header-btn-item1': siteNav}"></span>
        <span class="site-header-btn-item" :class="{'site-header-btn-item2': siteNav}"></span>
        <span class="site-header-btn-item" :class="{'site-header-btn-item3': siteNav}"></span>
      </a>
    </header>
    <transition name="fade">
      <div class="site-nav" v-if="siteNav" id="siteNavMore" @touchmove.prevent>
        <ul class="site-nav-box">
          <li class="site-nav-box-item" @click="routerHome">首页</li>
          <li class="site-nav-box-item site-nav-box-active">产品价格</li>
          <li class="site-nav-box-item" @click="routerAppointment">申请试用</li>
          <li class="site-nav-box-item" @click="routerProgram">小程序</li>
          <li class="site-nav-box-item" @click="goCheck">购票/报名查询</li>
          <li class="site-nav-box-item" @click="routerAbout">关于我们</li>
          <li class="site-nav-box-item" @click="goBackend">切换电脑端</li>
        </ul>
      </div>
    </transition> -->
    <!-- <NavWap /> -->
    <div class="price-tip">
      <img :src="nullImg" alt="" class="price-tip-img">
      <div class="price-tip-tit">价格说明请在电脑端打开</div>
    </div>
    <!-- <div class="price-nav">
      <p class="price-nav-item" :class="{['price-nav-active']: swipeIndex === 0}" @click="swipeSlideTo(0)">免费版</p>
      <p class="price-nav-item" :class="{['price-nav-active']: swipeIndex === 1}" @click="swipeSlideTo(1)">高级版</p>
      <p class="price-nav-item" :class="{['price-nav-active']: swipeIndex === 2}" @click="swipeSlideTo(2)">专业版</p>
      <p class="price-nav-item" :class="{['price-nav-active']: swipeIndex === 3}" @click="swipeSlideTo(3)">旗舰版</p>
    </div>
    <div class="swiper-container price-box">
      <div class="swiper-wrapper price-row">
        <div class="swiper-slide price-col" v-for="(payItem, payIndex) in edition" :key="payIndex">
          <div class="price-item">
            <div class="price-header">
              <div class="price-img" :class="[`price-img-${payIndex}`]" width="100%">
                <span class="price-name" :class="[`price-name${payIndex}`]"></span>
                <div class="price-about">
                  <div class="price-about-item">
                    <span class="price-about-text">{{payItem.features.info.auth}}</span>
                    <i class="price-about-point" v-if="payItem.features.info.attach">·</i>
                    <span class="price-about-text" v-if="payItem.features.info.attach">{{payItem.features.info.attach}}</span>
                  </div>
                  <div class="price-about-item">
                    <span class="price-about-text" v-if="payItem.features.info.desc">{{payItem.features.info.desc}}</span>
                  </div>
                </div>
              </div>
              <a class="price-btn price-btn-buy" :class="[`price-btn-v${payIndex}`]" href="tel: 4000630260">
                <i class="price-icon-loading" style="dispaly: none"></i>
                <span>立即{{payItem.pricing.price === 0 ? '使用': '购买'}}</span>
              </a>
              <div class="price-text">
                <h4 class="price-level" :class="[`price-level-v${payIndex}`]">
                  <span class="price-money">{{payItem.pricing.price}}</span>
                  <span class="price-unit">元/年</span>
                </h4>
                <h4 class="price-desc">{{payItem.pricing.descriptions}}</h4>
              </div>
            </div>
            <dl class="price-group" v-for="(featItem, featIndex) in payItem.features.feat">
              <dt class="price-group-title">{{featItem.title}}</dt>
              <dd :class="`price-group-feat`" v-for="(cItem, cIndex) in featItem.items" :key="cIndex">
                <i class="price-group-icon" :class="[`price-group-icon${cItem.status}`, {
                  [`price-group-icon-v${payIndex}`]: cItem.status === 1,
                }]"></i>
                <p class="price-group-text" :class="{
                  'price-group-text-error': !cItem.status,
                }">{{cItem.text}}</p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="price-page"></div>
    </div>
    <div class="price-footer">
      <h5 class="price-footer-title">增值服务</h5>
      <p class="price-footer-desc">400专职客服100元/小时服务支持、1对1专职顾问在线使用培训200元/小时、专职讲师现场培训3000元/2小时、票纸设计500元/版、硬件设备租赁200-500元/天、数据报告6000元/份……</p>
    </div> -->
    <!-- <FooterWap /> -->
  </div>
</template>
<script>
// import Swiper from 'swiper';
// import gpxcx from '../../assets/images/pc/gpxcx.png';
// import logo from '../../assets/images/wap/wlogo1.png';
import nullImg from '@/assets/images/wap/null.png';
// import NavWap from '@/components/NavWap.vue';
import FooterWap from '@/components/FooterWap.vue';

export default {
  data: () => ({
    nullImg,
    // edition: [],
    // swipeIndex: 0,
    // mySwiper: null,
    // header start
    // siteNav: false,
    // scrollEveny: true,
    // logo: logo2,

  }),
  created() {
    // this.edition = this.$route.params.edition;
    if (process.browser) {
      if (!/(iPhone|iPod|iOS|Android|ipad)/i.test(navigator.userAgent)) {
        // var equipment = "wap";
        this.$router.push({
          path: '/price',
        });
      }
    }
  },
  // mounted() {
  //   this.mySwiper = new Swiper('.swiper-container', {
  //     loop: false,
  //     centeredSlides: true,
  //     pagination: '.price-page',
  //     spaceBetween: 75,
  //   });
  //   this.mySwiper.on('transitionEnd', (swipe) => {
  //     this.swipeIndex = swipe.activeIndex;
  //   });
  // },
  methods: {
    // routerAbout() {
    //   this.$router.push({
    //     name: 'About',
    //   });
    // },
    // routerHome() {
    //   this.$router.push({
    //     name: 'Home',
    //   });
    // },
    // routerAppointment() {
    //   this.$router.push({
    //     name: 'Appointment',
    //   });
    // },
    // goCheck() {
    //   this.$router.push({
    //     name: 'Check',
    //   });
    // },
    // goBackend() {
    //   window.open('https://home.evente.cn/account/login');
    // },
    // goWb() {
    //   // window.open('https://weibo.com/u/2284242401');
    //   window.location.href = 'https://weibo.com/u/2284242401';
    // },
    // routerProgram() {
    //   this.$router.push({
    //     name: 'Program',
    //   });
    // },
    // toggleNav() {
    //   this.siteNav = !this.siteNav;
    // },
    // // header end
    // swipeSlideTo(index) {
    //   this.mySwiper.slideTo(index, 300, () => {
    //     this.swipeIndex = index;
    //   });
    // },
  },
  components: {
    // NavWap,
    FooterWap,
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/wap/price.scss";
</style>
