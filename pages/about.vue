<template>
<div class="evente-about">
  <navpc />
  <div class="evente-about-wrap">
    <div class="evente-about-wrap-banner">
      <div class="evente-about-wrap-banner-info">
        <div class="evente-about-wrap-banner-info-tit">公司简介</div>
        <div class="evente-about-wrap-banner-info-txt">
          活动易是活动时eventmosh（简称em）旗下的票务电商平台。除了活动易之外，还拥有景酒通、票大大、运营参谋、数据参谋等多个SaaS和中台解决方案产品，帮助娱乐主办实现票务直销、活动报名、全网分销和会员管理，成就智慧主办。<br><br>
em专注现场娱乐领域的互联网+：以连接人与现场为创业使命，为文化演出、体育赛事、景区旅游、酒店业主等文娱领域提供电商、运营、营销、会员和大数据服务。<br><br>
em已服务上千家专业主办和数十万场活动，如长隆度假区、长城森林艺术节、李志叁叁肆十年巡演、繁星戏剧村、大船文化、七幕音乐剧、央华娱乐、上海SMG、体育之窗、智美体育、中超、CBA等等。<br><br>
em以“成为现场娱乐领域的数据领导者”为愿景，已获得IDG等机构的多轮投资，正处于快速发展期。em在北上广三地拥有近200名的热爱现场的优秀伙伴，是国家认证的高新科技企业。
        </div>
      </div>
    </div>

    <div class="evente-about-wrap-box1">
      <!-- <div class="evente-about-wrap-box1-tit" :class="{'evente-about-wrap-box1-tit-animate': box1Index}">八有精神</div>
      <img v-lazy="box1_img" alt="" class="evente-about-wrap-box1-img" :class="{'evente-about-wrap-box1-hover': box1Index}"> -->
      <div class="evente-about-wrap-box1-tit">八有精神</div>
      <img v-lazy="box1_img" alt="" class="evente-about-wrap-box1-img">
    </div>

    <div class="evente-about-wrap-box2">
      <div class="evente-about-wrap-box2-tit">三为价值观</div>
      <div class="evente-about-wrap-box2-info">
        <div class="evente-about-wrap-box2-item evente-about-wrap-animate-1"></div>
        <div class="evente-about-wrap-box2-item evente-about-wrap-animate-1"></div>
        <div class="evente-about-wrap-box2-item evente-about-wrap-animate-2"></div>
      </div>
    </div>

    <div class="evente-about-wrap-tit">多彩的企业文化和福利</div>
    <div class="evente-about-wrap-fl">
      <!-- <vueper-slides autoplay :visible-slides="3" slide-multiple :arrows-outside="false" fade slide-content-outside="top" slide-content-outside-class="max-widthed" :touchable="true" :dragging-distance="70">
        <vueper-slide v-for="(slide, i) in slideData" :key="slide.id" :image="slide.image"></vueper-slide>
      </vueper-slides> -->
      <dl v-for="(slide, i) in slideData" :key="slide.id" class="evente-about-wrap-fl-item">
        <dt class="evente-about-wrap-fl-tiem-dt"><img v-lazy="slide.image" alt="" class="evente-about-wrap-fl-item-img"></dt>
        <dd v-text="slide.title" class="evente-about-wrap-fl-item-title"></dd>
      </dl>
    </div>

    <div class="evente-about-wrap-box3">
      <div class="evente-about-wrap-box3-tit">寻找热爱现场的伙伴</div>
      <div class="evente-about-wrap-box3-txt">“与我们同行的人，比我们要到达的地方更重要。”</div>
      <div class="evente-about-wrap-box3-info">
        <emfe-button theme="primary" className="evente-wrap-blue" class="evente-about-wrap-blue-button" @click="goMoreJd">前往 [Boss直聘] 查看更多</emfe-button>
      </div>
    </div>
  </div>

  <FooterPc />
  <Service />
  <transition name="fade"><go-top class="service-gotop" :height="70" :bottom="0" :right="10" :duration="2000"></go-top></transition>
</div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import FooterPc from '../components/FooterPc.vue';
// import NavPc from '../components/NavPc.vue';
import Service from '../components/Service.vue';
import box2_1  from '../assets/images/pc/about/box5/img1.png';
import box2_2  from '../assets/images/pc/about/box5/img2.png';
import box2_3  from '../assets/images/pc/about/box5/img3.png';
import box2_4  from '../assets/images/pc/about/box5/img4.png';
import box2_5  from '../assets/images/pc/about/box5/img5.png';
import box2_6  from '../assets/images/pc/about/box5/img6.jpg';
import box2_7  from '../assets/images/pc/about/box5/img7.png';
import box2_8  from '../assets/images/pc/about/box5/img8.png';
import box2_9  from '../assets/images/pc/about/box5/img9.jpg';
import box1_img  from '../assets/images/pc/about/box2/img.png';

export default {
  name: 'pcAbout',
  data() {
    return {
      FooterPc,
      // NavPc,
      Service,
      // 轮播图
      slideData: [
        {
          id: 'slide-1',
          image: box2_1,
          title: '免费门票',
        },
        {
          id: 'slide-2',
          image: box2_2,
          title: '集体旅游',
        },
        {
          id: 'slide-3',
          image: box2_3,
          title: '团队培训',
        },
        // {
        //   id: 'slide-4',
        //   image: box2_4,
        // },
        // {
        //   id: 'slide-5',
        //   image: box2_5,
        // },
        // {
        //   id: 'slide-6',
        //   image: box2_6,
        // },
        // {
        //   id: 'slide-7',
        //   image: box2_7,
        // },
        // {
        //   id: 'slide-8',
        //   image: box2_8,
        // },
        // {
        //   id: 'slide-9',
        //   image: box2_9,
        // },
      ],
      box1Index: false,
      box1_img,
    };
  },
  beforeCreate() {
    if (process.browser) {
      if (/(iPhone|iPod|iOS|Android|ipad)/i.test(navigator.userAgent)) {
        // var equipment = "wap";
        this.$router.push({
          path: 'm/about',
        });
      }
    }
  },
  mounted() {
    if (process.browser) {
      window.addEventListener('touchmove', this.thisScroll, true);
      window.addEventListener('scroll', this.thisScroll, true);
    }
  },
  methods: {
    thisScroll() {
      if (process.browser) {
        const scrollY = window.pageYOffset;
        if(scrollY > 750) {
          this.box1Index = true;
        }
      }
    },
    goMoreJd() {
      window.open('https://www.zhipin.com/gongsir/8b19fdefca4edd001nd42N-1.html?ka=company-jobs');
    },
  },
  components: {
    FooterPc,
    // NavPc,
    Service,
    VueperSlides,
    VueperSlide,
  },
};
</script>

<style lang="scss">
  @import "../assets/styles/pc/about.scss";
</style>
