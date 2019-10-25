<template>
  <div class="site-header" :class="{'site-b-header': scrollTop, 'site-header-hover': !scrollTop}">
    <div class="site-header-wrap">
      <div class="site-header-wrap-logo2" v-if="this.$router.history.current.name!=='program' && this.$router.history.current.name!=='home' && this.$router.history.current.name!=='commerce'"><h1 class="site-header-logo-title">活动易官网</h1></div>
      <div class="site-header-wrap-logo" :class="{'site-header-wrap-logo2': scrollTop}" v-else><h1 class="site-header-logo-title">活动易官网</h1></div>
      <span class="site-header-wrap-tip" :class="{'site-header-wrap-tip-scroll': scrollTop}">好活动 易起来</span>
      <div class="site-header-wrap-btn">
        <emfe-button theme="primary" className="site-header-wrap-btn-login" @click="gologin">主办管理登录</emfe-button>
        <a href="javascript:;" class="site-header-wrap-btn-item site-header-wrap-btn-search" @mouseenter="siteImgBtn" @mouseout="hideSiteImgBtn">购票/报名查询</a>
        <transition name="fade"><img :src="gpxcx" alt="" class="site-img" v-show="gpxcxImg"></transition>
      </div>
      <div class="site-header-wrap-nav">
        <ul :class="{'site-header-wrap-white': this.$router.history.current.name === 'home' || this.$router.history.current.name === 'commerce'}">
          <li class="site-header-wrap-nav-item" @click="gohome" :class="{'site-header-wrap-nav-item-active': this.$router.history.current.name==='home'}"><div class="cursor">首页</div></li>
          <li class="site-header-wrap-nav-item" :class="{'site-header-wrap-nav-item-active': this.$router.history.current.name==='commerce' || this.$router.history.current.name==='meetup' || this.$router.history.current.name==='formtools' || this.$router.history.current.name==='program'}"><div class="cursor site-header-wrap-nav-case" v-text="productNameAct"></div>
            <div class="site-header-wrap-case">
              <div class="site-header-wrap-case-wrap">
                <div class="site-header-wrap-case-item" @click="gocommerce">
                  <div class="site-header-wrap-case-item-tit"><div class="site-header-wrap-case-item-tit-icon site-header-wrap-case-item-tit-icon1"></div><span>票务电商</span></div>
                  <div class="site-header-wrap-case-item-txt">在线售票，选座核销，提升直销能力</div>
                </div>
                <div class="site-header-wrap-case-item" @click="goprogram">
                  <div class="site-header-wrap-case-item-tit"><div class="site-header-wrap-case-item-tit-icon site-header-wrap-case-item-tit-icon4"></div><span>微官网/小程序</span></div>
                  <div class="site-header-wrap-case-item-txt">一键接入，打造属于自己的专属小程序</div>
                </div>
                <div class="site-header-wrap-case-item" @click="goformtools">
                  <div class="site-header-wrap-case-item-tit"><div class="site-header-wrap-case-item-tit-icon site-header-wrap-case-item-tit-icon3"></div><span>表单问卷</span></div>
                  <div class="site-header-wrap-case-item-txt">投票报名调研，一张表单秒变活动小咖</div>
                </div>
                <div class="site-header-wrap-case-item" @click="gomeetup">
                  <div class="site-header-wrap-case-item-tit"><div class="site-header-wrap-case-item-tit-icon site-header-wrap-case-item-tit-icon2"></div><span>会议/活动/招生报名</span></div>
                  <div class="site-header-wrap-case-item-txt">一站式全流程报名解决方案</div>
                </div>
              </div>
            </div>
          </li>
          <li class="site-header-wrap-nav-item" @click="goprice" :class="{'site-header-wrap-nav-item-active': this.$router.history.current.name==='price'}"><div class="cursor">合作</div></li>
          <li class="site-header-wrap-nav-item" @click="goCollege"><div class="cursor">学院</div></li>
          <li class="site-header-wrap-nav-item" @click="goabout"  :class="{'site-header-wrap-nav-item-active': this.$router.history.current.name==='about'}"><div class="cursor">我们</div></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import logo1 from '../assets/images/pc/wlogo.png';
import logo2 from '../assets/images/pc/blogo.png';
import gpxcx from '../assets/images/pc/gpxcx.png';

export default {
  name: 'NavPc',
  data() {
    return {
      scrollTop: false,
      gpxcx,
      gpxcxImg: false,
      logo: '',
      logo1,
      logo2,
      productName: [
        {
          commerce: '票务电商',
        },
        {
          meetup: '活动报名',
        },
        {
          formtools: '表单问卷',
        },
        {
          program: '微官网/小程序',
        },
      ],
      productNameAct: '产品',
    };
  },
  created() {
    if(process.browser) {
      this.handleScroll();
    }
    this.logo = this.logo1;
    console.log(this.$router.history.current.name, 'name');
    Object.keys(this.productName).forEach((i) => {
      if(typeof this.productName[i][this.$router.history.current.name] === 'string') {
        this.productNameAct = this.productName[i][this.$router.history.current.name];
        console.log(this.productNameAct, '在');
      } else {
        console.log(this.productNameAct, '不在');
      }
    });
  },
  mounted() {
    if(process.browser) {
      window.addEventListener('touchmove', this.handleScroll, true);
      window.addEventListener('scroll', this.handleScroll, true);
    }
  },
  methods: {
    handleScroll() {
      // if (!+[1]) {
      //   const scrollY = window.pageYOffset;
      //   console.log(scrollY, 'IE');
      // } else {
      //   const scrollY = window.scrollY;
      //   console.log(scrollY, '不是IE');
      // }
      if(process.browser) {
        const scrollY = window.pageYOffset;
        if (scrollY > 30) {
          this.logo = this.logo2;
          this.scrollTop = true;
        } else {
          this.logo = this.logo1;
          this.scrollTop = false;
        }
      }
    },
    gohome() {
      this.$router.push({
        name: 'home',
      });
    },
    goprogram() {
      this.$router.push({
        name: 'program',
      });
    },
    goabout() {
      this.$router.push({
        name: 'about',
      });
    },
    goprice() {
      this.$router.push({
        name: 'price',
      });
    },
    goWb() {
      window.open('https://weibo.com/u/2284242401');
    },
    gologin() {
      window.open('https://home.evente.cn/account/login');
    },
    siteImgBtn() {
      this.gpxcxImg = true;
    },
    hideSiteImgBtn() {
      this.gpxcxImg = false;
    },
    sentEvent() {
      window.open('https://home.evente.cn/meetup/light');
    },
    goacc() {
      window.open('https://home.evente.cn/account/console');
    },
    goCollege() {
      window.location.href = `${process.env.COLLEGE}`;
    },
    // 跳到票务电商
    gocommerce() {
      this.$router.push({
        name: 'commerce',
      });
    },
    // 跳到表单工具
    goformtools() {
      this.$router.push({
        name: 'formtools',
      });
    },
    // 跳到活动报名
    gomeetup() {
      this.$router.push({
        name: 'meetup',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/nav-pc.scss";
</style>
