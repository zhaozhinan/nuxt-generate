<template>
  <div class="home">
    <navwap />
    <div class="home-wrap">
      <div class="home-banner">
        <div class="home-banner-tit">专业主办的管理平台</div>
        <div class="home-banner-txt">售票 | 报名 | 表单 | 小程序</div>
        <div v-if="!xcxEnv"><div class="home-banner-btn" onclick="qimoChatClick();">立即咨询</div></div>
        <img v-lazy="bannerImg" alt="" class="home-banner-img home-banner-animate-1">
      </div>
      <div class="home-style">
        <div class="home-style-tit">多种产品形式</div>
        <div class="home-style-txt">满足众多活动场景</div>
        <div class="home-style-info">
          <ul class="home-style-info-tab">
            <li class="home-style-info-tab-item" :class="{'home-style-info-tab-act': styleIndex === index}" v-for="(itemTab, index) in styleTabData" :key="index" @click="homeStyleTabBtn(itemTab, index)"><span v-text="itemTab.tit"></span></li>
          </ul>
          <!-- swipe -->
          <div class="swiper-container home-style-info-swipe">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, i) in styleData" :key="i">
                <div class="home-style-info-swipe-tit" v-text="item.tit"></div>
                <div class="home-style-info-swipe-txt" v-text="item.txt"></div>
                <img v-lazy="item.img" alt="" class="home-style-info-swipe-img">
                <ul class="home-style-info-swipe-detail" :class="'home-style-info-swipe-detail-'+i">
                  <li class="home-style-info-swipe-detail-list" :class="'home-style-info-swipe-detail-list-'+i" v-for="(list, index) in item.list" :key="index" v-text="list"></li>
                </ul>
                <div class="home-banner-btn" @click="more(item.link)">了解更多</div>
              </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
          </div>
          <!-- /swipe -->
        </div>
      </div>
      <div class="home-college">
        <div class="home-college-tit">活动学院：<br>活动主办的知识库</div>
        <div class="home-college-info">
          <dl class="home-college-info-item">
            <dt class="home-college-info-item-icon home-college-info-item-icon-1"></dt>
            <dd class="home-college-info-item-tit">产品培训</dd>
          </dl>
          <dl class="home-college-info-item">
            <dt class="home-college-info-item-icon home-college-info-item-icon-2"></dt>
            <dd class="home-college-info-item-tit">成功主办</dd>
          </dl>
          <dl class="home-college-info-item">
            <dt class="home-college-info-item-icon home-college-info-item-icon-3"></dt>
            <dd class="home-college-info-item-tit">活动官认证</dd>
          </dl>
        </div>
      </div>
      <!-- 我们服务的客户 -->
      <div class="home-case">
        <div class="home-case-tit">我们服务的客户</div>
        <div class="home-case-info">
          <ul class="home-case-info-top">
            <li class="home-case-info-top-item" :class="{'home-case-info-top-item-act': item.cur === true}" v-for="(item, index) in homeCashTab"><span class="home-case-info-top-item-dom" v-text="item.txt" @click="homeCashTabBtn(item, index)"></span></li>
          </ul>
          <div class="swiper-container home-case-swipe">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="home-case-swipe-logo home-case-swipe-1-1"></div>
                <div class="home-case-swipe-logo home-case-swipe-1-2"></div>
                <div class="home-case-swipe-logo home-case-swipe-1-3"></div>
                <div class="home-case-swipe-logo home-case-swipe-1-4"></div>
                <div class="home-case-swipe-logo home-case-swipe-1-5"></div>
                <div class="home-case-swipe-logo home-case-swipe-1-6"></div>
                <div class="home-case-swipe-logo home-case-swipe-1-7"></div>
                <div class="home-case-swipe-logo home-case-swipe-1-8"></div>
                <div class="home-case-swipe-logo home-case-swipe-1-9"></div>
              </div>
              <div class="swiper-slide">
                <div class="home-case-swipe-logo home-case-swipe-2-1"></div>
                <div class="home-case-swipe-logo home-case-swipe-2-2"></div>
                <div class="home-case-swipe-logo home-case-swipe-2-3"></div>
                <div class="home-case-swipe-logo home-case-swipe-2-4"></div>
                <div class="home-case-swipe-logo home-case-swipe-2-5"></div>
                <div class="home-case-swipe-logo home-case-swipe-2-6"></div>
                <div class="home-case-swipe-logo home-case-swipe-2-7"></div>
                <div class="home-case-swipe-logo home-case-swipe-2-8"></div>
                <div class="home-case-swipe-logo home-case-swipe-2-9"></div>
              </div>
              <div class="swiper-slide">
                <div class="home-case-swipe-logo home-case-swipe-3-1"></div>
                <div class="home-case-swipe-logo home-case-swipe-3-2"></div>
                <div class="home-case-swipe-logo home-case-swipe-3-3"></div>
                <div class="home-case-swipe-logo home-case-swipe-3-4"></div>
                <div class="home-case-swipe-logo home-case-swipe-3-5"></div>
                <div class="home-case-swipe-logo home-case-swipe-3-6"></div>
                <div class="home-case-swipe-logo home-case-swipe-3-7"></div>
                <div class="home-case-swipe-logo home-case-swipe-3-8"></div>
                <div class="home-case-swipe-logo home-case-swipe-3-9"></div>
              </div>
              <div class="swiper-slide">
                <div class="home-case-swipe-logo home-case-swipe-4-1"></div>
                <div class="home-case-swipe-logo home-case-swipe-4-2"></div>
                <div class="home-case-swipe-logo home-case-swipe-4-3"></div>
                <div class="home-case-swipe-logo home-case-swipe-4-4"></div>
                <div class="home-case-swipe-logo home-case-swipe-4-5"></div>
                <div class="home-case-swipe-logo home-case-swipe-4-6"></div>
                <div class="home-case-swipe-logo home-case-swipe-4-7"></div>
                <div class="home-case-swipe-logo home-case-swipe-4-8"></div>
                <div class="home-case-swipe-logo home-case-swipe-4-9"></div>
              </div>
              <div class="swiper-slide">
                <div class="home-case-swipe-logo home-case-swipe-5-1"></div>
                <div class="home-case-swipe-logo home-case-swipe-5-2"></div>
                <div class="home-case-swipe-logo home-case-swipe-5-3"></div>
                <div class="home-case-swipe-logo home-case-swipe-5-4"></div>
                <div class="home-case-swipe-logo home-case-swipe-5-5"></div>
                <div class="home-case-swipe-logo home-case-swipe-5-6"></div>
                <div class="home-case-swipe-logo home-case-swipe-5-7"></div>
                <div class="home-case-swipe-logo home-case-swipe-5-8"></div>
                <div class="home-case-swipe-logo home-case-swipe-5-9"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ／我们服务的客户 -->
      <div class="home-banner2">
        <div class="home-banner2-tit">活动易，报名售票更容易</div>
        <div class="home-banner2-txt">活动易主办自己的系统</div>
        <div class="home-banner2-btn" @click="goTry">免费试用</div>
        <img v-lazy="bannerImg" alt="" class="home-banner2-img">
      </div>
    </div>
    <FooterWap />
  </div>
</template>
<script>
  // import Swiper from 'swiper';
  // import NavWap from '@/components/NavWap.vue';
  import FooterWap from '@/components/FooterWap.vue';
  import bannerImg from '@/assets/images/wap/home/box1/banner-c.png';
  // style
  import pwdsImg from '@/assets/images/wap/home/box2/pwds.png';
  import hdbmImg from '@/assets/images/wap/home/box2/hdbm.png';
  import bdwjImg from '@/assets/images/wap/home/box2/bdwj.png';

  export default {
    name: 'Home',
    data() {
      return {
        // NavWap,
        FooterWap,
        xcxEnv: false,
        bannerImg,
        // style
        styleIndex: 0,
        homeStyleTabIndex: 0,
        homeStyleInfoSwipe: '',
        styleTabData: [
          {
            tit: '票务电商',
          },
          {
            tit: '活动报名',
          },
          {
            tit: '表单问卷',
          },
        ],
        styleData: [
          {
            tit: '票务电商·快速拥有自己的票务商城',
            txt: '全面支持剧场剧院、音乐现场、体育赛事、展览游乐多场景售票',
            img: pwdsImg,
            list: ['强大票务系统','一键玩转商城','丰富营销玩法','精细会员管理','海量分销渠道','多维可视报表'],
            link: 'mommerce',
          },
          {
            tit: '报名收款·快速实现培训/招生/报名',
            txt: '建站、报名、推广、管理、核销、数据面面俱到',
            img: hdbmImg,
            list: ['网站创建','在线报名','活动推广','嘉宾管理','现场签到','数据报表'],
            link: 'meetup',
          },
          {
            tit: '表单问卷·快速有效收集数据',
            txt: '小程序+电脑端自动同步，小程序支持快速提现',
            img: bdwjImg,
            list: ['多品类表单模板','近40种功能组件','自定义外观装修','多终端便捷核销','小程序在线收款','多层次个性需求'],
            link: 'formtools',
          },
        ],
        // 我们服务的客户
        homeCase: '',
        homeCashTabIndex: 0,
        homeCashTab: [
          {
            txt: '剧场剧院',
            cur: true,
          },
          {
            txt: '演出机构',
            cur: false,
          },
          {
            txt: '音乐现场',
            cur: false,
          },
          {
            txt: '体育赛事',
            cur: false,
          },
          {
            txt: '旅游集团',
            cur: false,
          },
        ],
      };
    },
    created() {
      if (process.browser) {
        if (!/(iPhone|iPod|iOS|Android|ipad)/i.test(navigator.userAgent)) {
          // var equipment = "wap";
          this.$router.push({
            path: '/',
          });
        }
        const ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
            wx.miniProgram.getEnv((res) => {
                if (res.miniprogram) {
                   // alert("在小程序里");
                   this.xcxEnv = true;
                } else {
                    this.xcxEnv = false;
                }
            })
        } else {
            this.xcxEnv = false;
        }
      }
    },
    methods: {
      more(e) {
        console.log(e, 200);
        this.$router.push({
          path: `/m/${e}`,
        });
      },
      homeStyleTabBtn(item, index) {
        console.log(index, 'index');
        this.homeStyleTabIndex = index;
        this.styleTabData.forEach((i) => {
          i.cur = false;
        });
        item.cur = true;
        this.homeStyleInfoSwipe.slideTo(index);
      },
      homeCashTabBtn(item, index) {
        console.log(index, 'index');
        this.homeCashTabIndex = index;
        this.homeCashTab.forEach((i) => {
          i.cur = false;
        });
        item.cur = true;
        this.homeCase.slideTo(index);
      },
      goTry() {
        this.$router.push({
          path: '/m/appointment',
        });
      },
      goRegister() {
        if(process.browser) {
          window.open('https://home.evente.cn/account/register');
        }
      },
    },
    mounted() {
      this.homeStyleInfoSwipe = new Swiper('.home-style-info-swipe', {
        navigation: true,
        loop: false,
        pagination: '.home-style-info-swipe .swiper-pagination',
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        onSlideChangeStart: (swiper) => {
          console.log(swiper, 'swiper');
          this.styleIndex = swiper.activeIndex;
        },
      });
      // 我们服务的客户
      this.homeCase = new Swiper('.home-case-swipe', {
        loop: false,
        onSlideChangeStart: ((swipe) => {
          // alert(swipe.activeIndex);
          this.homeCashTab.forEach((i) => {
            i.cur = false;
          });
          this.homeCashTab[swipe.activeIndex].cur = true;
        }),
      });
    },
    components: {
      // NavWap,
      FooterWap,
      // Swiper,
    },
  };
</script>

<style lang="scss">
  @import "../../assets/styles/wap/home.scss";
  @import "../../assets/styles/swiper.css";
</style>
