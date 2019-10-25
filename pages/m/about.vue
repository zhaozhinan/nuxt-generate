<template>
  <div class="about">
    <navwap />
    <div class="about-wrap">
      <div class="about-banner"></div>
      <div class="about-info">
        <div class="about-info-tit">公司简介</div>
        <div class="about-info-txt">
          活动易是活动时Eventmosh（简称EM）旗下的票务电商平台。除了活动易之外，还拥有景酒通、票大大、运营参谋、数据参谋等多个SaaS和中台解决方案产品，帮助娱乐主办实现票务直销、活动报名、全网分销和会员管理，成就智慧主办。<br><br>
          EM专注现场娱乐领域的互联网+：以连接人与现场为创业使命，为文化演出、体育赛事、景区旅游、酒店业主等文娱领域提供电商、运营、营销、会员和大数据服务。<br><br>EM已服务上千家专业主办和数十万场活动，如长隆度假区、长城森林艺术节、李志叁叁肆十年巡演、繁星戏剧村、大船文化、七幕音乐剧、央华娱乐、上海SMG、体育之窗、智美体育、中超、CBA等等。<br><br>
          EM以“成为现场娱乐领域的数据领导者”为愿景，已获得IDG等机构的多轮投资，正处于快速发展期。EM在北上广三地拥有近200名的热爱现场的优秀伙伴，是国家认证的高新科技企业。
        </div>
      </div>
      <div class="about-box1">
        <div class="about-box1-tit">八有精神</div>
        <img v-lazy="box1Img" alt="" class="about-box1-img">
      </div>
      <div class="about-box2">
        <div class="about-box2-tit">三为价值观</div>
        <img v-lazy="box2Img" alt="" class="about-box2-img about-animate-1">
      </div>
      <div class="about-box3">
        <div class="about-box3-tit">多彩的企业文化和福利</div>
        <div class="about-box3-info">
          <dl class="about-box3-info-item">
            <dt><img class="about-box3-info-item-img" v-lazy="box3Img1" alt=""></dt>
            <dd class="about-box3-info-item-tit">免费门票</dd>
          </dl>
          <dl class="about-box3-info-item">
            <dt><img class="about-box3-info-item-img" v-lazy="box3Img2" alt=""></dt>
            <dd class="about-box3-info-item-tit">集体旅游</dd>
          </dl>
          <dl class="about-box3-info-item">
            <dt><img class="about-box3-info-item-img" v-lazy="box3Img3" alt=""></dt>
            <dd class="about-box3-info-item-tit">团队培训</dd>
          </dl>
        </div>
      </div>
      <div class="about-box4">
        <div class="about-box4-tit">寻找热爱现场的伙伴</div>
        <div class="about-box4-txt">“与我们同行的人，比我们要到达的地方更重要。”</div>
      </div>

      <div class="about-banner2">
        <div class="about-banner2-btn" @click="goMoreJd">前往 [Boss直聘] 查看更多职位</div>
      </div>
    </div>
    <FooterWap />
  </div>
</template>
<script>
  // import NavWap from '@/components/NavWap.vue';
  import FooterWap from '@/components/FooterWap.vue';
  import box1Img from '@/assets/images/wap/about/img1.png';
  import box2Img from '@/assets/images/wap/about/img2.png';
  import box3Img1 from '@/assets/images/wap/about/box4/img1.png';
  import box3Img2 from '@/assets/images/wap/about/box4/img2.png';
  import box3Img3 from '@/assets/images/wap/about/box4/img3.png';

  export default {
    name: 'About',
    data() {
      return {
        box1Img,
        box2Img,
        box3Img1,
        box3Img2,
        box3Img3,
      };
    },
    beforeCreate() {
      if (process.browser) {
        if (!/(iPhone|iPod|iOS|Android|ipad)/i.test(navigator.userAgent)) {
          // var equipment = "wap";
          this.$router.push({
            path: '/about',
          });
        }
      }
    },
    methods: {
      goMoreJd() {
        window.open('https://www.zhipin.com/gongsir/8b19fdefca4edd001nd42N-1.html?ka=company-jobs');
      },
    },
    components: {
      // NavWap,
      FooterWap,
    },
  };
</script>
<style lang="scss">
  @import "../../assets/styles/wap/about.scss";
</style>
