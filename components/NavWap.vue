<template>
  <div :class="{'site-page': this.pageinfo && scrollEveny2}">
    <header class="site-header" :class="{'site-top': siteNav || scrollEveny}">
      <img :src="logo" class="site-header-logo">
      <a href="javascript:;" class="site-header-btn" :class="{'site-header-toggle': siteNav  || scrollEveny}" @click="toggleNav">
        <span class="site-header-btn-item" :class="{'site-header-btn-item1': siteNav}"></span>
        <span class="site-header-btn-item" :class="{'site-header-btn-item2': siteNav}"></span>
        <span class="site-header-btn-item" :class="{'site-header-btn-item3': siteNav}"></span>
      </a>
    </header>
    <!-- <transition name="fade"> -->
    <div class="site-nav" :class="{'site-nav-fade' : siteNav }" @touchmove.prevent>
      <ul class="site-nav-box">
        <li class="site-nav-box-item" @click="goHome">首页</li>
        <li class="site-nav-box-item">产品</li>
        <li class="site-nav-box-list" @click="goCommerce">票务电商</li>
        <li class="site-nav-box-list" @click="goProgram">微官网/小程序</li>
        <li class="site-nav-box-list" @click="goMeetup">会议/活动/招生报名</li>
        <li class="site-nav-box-list" @click="goForm">表单问卷</li>
        <li class="site-nav-box-item" @click="goCollege">学院</li>
        <li class="site-nav-box-item" @click="goAbout">我们</li>
      </ul>
      <div class="site-nav-btn" @click="goTry">申请试用</div>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
import logo from '../assets/images/wap/wlogo1.png';
import logo1 from '../assets/images/wap/wlogo.png';
import logo2 from '../assets/images/wap/blogo.png';

export default {
  name: 'NavWap',
  data() {
    return {
      siteNav: false,
      scrollEveny: false,
      scrollTop: false,
      logo: '',
      logo1,
      logo2,
      pageinfo: false,
      scrollEveny2: true,
      scrollY: ''
    };
  },
  created() {
    // this.handleScroll();
    const pageName = this.$router.history.current.name;
    console.log(this.$router.history.current.name, 888);
    if(pageName === 'm-meetup' || pageName === 'm-formtools' || pageName === 'm-about' || pageName === 'm-price') {
      this.pageinfo = true;
      this.logo = this.logo2;
    } else {
      this.pageinfo = false;
      this.logo = this.logo1;
    }
    console.log(this.pageinfo, '2222', pageName);
  },
  mounted() {
    if(process.browser) {
      window.addEventListener('touchmove', this.handleScroll, true);
      window.addEventListener('scroll', this.handleScroll, true);
    }
  },
  methods: {
    toggleNav() {
      this.siteNav = !this.siteNav;
      if(!this.pageinfo) {
        if (this.siteNav) {
          // console.log(this.siteNav, 'true');
          this.logo = this.logo2;
        }
        if (!this.siteNav) {
          // console.log(this.siteNav, 'false');
          if (this.scrollY > 80) {
            this.logo = this.logo2;
            this.scrollEveny = true;
          } else {
            this.logo = this.logo1;
            this.scrollEveny = false;
          }
        }
      }
    },
    handleScroll() {
      if(process.browser) {
        this.scrollY = window.scrollY;
      }
      this.scrollData = this.scrollY;
      // console.log(scrollY);
      if (!this.siteNav) {
        if (this.scrollY > 80) {
          this.logo = this.logo2;
          this.scrollEveny = true;
          this.scrollEveny2 = false;
        } else {
          if(!this.pageinfo) {
            this.logo = this.logo1;
            this.scrollEveny = false;
          }
          this.scrollEveny2 = true;
        }
      }
    },
    goHome() {
      this.$router.push({
        path: '/',
      });
    },
    goProgram() {
      this.$router.push({
        path: '/m/program',
      });
    },
    goAbout() {
      this.$router.push({
        path: '/m/about',
      });
    },
    goCommerce() {
      this.$router.push({
        path: '/m/commerce',
      });
    },
    goForm() {
      this.$router.push({
        path: '/m/formtools',
      });
    },
    goMeetup() {
      this.$router.push({
        path: '/m/meetUp',
      });
    },
    goWb() {
      if(process.browser) {
        window.open('https://weibo.com/u/2284242401');
      }
    },
    gologin() {
      if(process.browser) {
        window.open('https://home.evente.cn/account/login');
      }
    },
    siteImgBtn() {
      this.gpxcxImg = true;
    },
    hideSiteImgBtn() {
      this.gpxcxImg = false;
    },
    sentEvent() {
      if(process.browser) {
        window.open('https://home.evente.cn/meetup/light');
      }
    },
    goacc() {
      if(process.browser) {
        window.open('https://home.evente.cn/account/console');
      }
    },
    goCollege() {
      window.location.href = `${process.env.COLLEGE}`;
    },
    goTry() {
      this.$router.push({
        path: '/m/appointment',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/nav-wap.scss";
</style>
