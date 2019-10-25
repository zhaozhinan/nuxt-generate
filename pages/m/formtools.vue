<template>
  <div class="form">
    <NavWap />
    <div class="form-wrap">
      <div class="form-banner">
        <div class="form-banner-tit">表单工具</div>
        <div class="form-banner-txt">极简高效，人人都会用的表单工具</div>
        <div v-if="!xcxEnv"><div class="form-banner-btn" onclick="qimoChatClick();">立即咨询</div></div>
        <img v-lazy="bannerImg" alt="" class="form-banner-img">
      </div>

      <div class="form-box3">
        <div class="form-box1-tit">填问卷、收信息、做投票</div>
        <div class="form-box1-txt">解决各场景的数据收集任务</div>
        <div class="form-box3-info">
          <div class="form-box3-info-list">
            <div class="form-box3-info-item form-box3-info-item-1">
              <div class="form-box3-info-item-icon form-box3-info-item-icon-1"></div>
              <div class="form-box3-info-item-tit">活动报名</div>
            </div>
            <div class="form-box3-info-item form-box3-info-item-2">
              <div class="form-box3-info-item-icon form-box3-info-item-icon-2"></div>
              <div class="form-box3-info-item-tit">问卷调查</div>
            </div>
          </div>
          <div class="form-box3-info-list">
            <div class="form-box3-info-item form-box3-info-item-3">
              <div class="form-box3-info-item-icon form-box3-info-item-icon-3"></div>
              <div class="form-box3-info-item-tit">在线收款</div>
            </div>
            <div class="form-box3-info-item form-box3-info-item-4">
              <div class="form-box3-info-item-icon form-box3-info-item-icon-4"></div>
              <div class="form-box3-info-item-tit">投票评选</div>
            </div>
          </div>
        </div>
      </div>
      <!-- box -->
      <div class="form-box1">
        <div class="form-box1-tit">功能强大，1分钟创建一个满意的表单</div>
        <div class="form-box1-info">
          <!-- swipe -->
          <div class="swiper-container form-box1-info-swipe">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img v-lazy="box1Img1" alt="" class="form-box1-info-swipe-img">
                <div class="form-box1-info-swipe-tit">近40种功能组件</div>
              </div>
              <div class="swiper-slide">
                <img v-lazy="box1Img2" alt="" class="form-box1-info-swipe-img">
                <div class="form-box1-info-swipe-tit">积木式快捷设计</div>
              </div>
              <div class="swiper-slide">
                <img v-lazy="box1Img3" alt="" class="form-box1-info-swipe-img">
                <div class="form-box1-info-swipe-tit">个性化自定义外观</div>
              </div>
              <div class="swiper-slide">
                <img v-lazy="box1Img4" alt="" class="form-box1-info-swipe-img">
                <div class="form-box1-info-swipe-tit">小程序 + 电脑端</div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <!-- /swipe -->
        </div>
      </div>
      <!-- /box -->

      <!-- box -->
      <div class="form-box4">
        <div class="form-box1-tit">功能增强，把表单升级为数据收集系统</div>
        <div class="form-box1-txt">在线收款、逻辑规则、多终端管理，把表单升级为数据收集系统</div>
        <div class="form-box1-info">
          <!-- swipe -->
          <div class="swiper-container form-box4-info-swipe form-box4-info-swipe1">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img v-lazy="box4Img1" alt="" class="form-box4-info-swipe-img">
                <div class="form-box1-info-swipe-tit form-box1-info-swipe-top">在线收款，即时到账</div>
              </div>
              <div class="swiper-slide">
                <img v-lazy="box4Img2" alt="" class="form-box4-info-swipe-img">
                <div class="form-box1-info-swipe-tit form-box1-info-swipe-top">核销凭证，唯一码入场</div>
              </div>
              <div class="swiper-slide">
                <img v-lazy="box4Img3" alt="" class="form-box4-info-swipe-img">
                <div class="form-box1-info-swipe-tit form-box1-info-swipe-top">逻辑规则，智能展示</div>
              </div>
              <div class="swiper-slide">
                <img v-lazy="box4Img4" alt="" class="form-box4-info-swipe-img">
                <div class="form-box1-info-swipe-tit form-box1-info-swipe-top">手机号验真，确保真实</div>
              </div>
              <div class="swiper-slide">
                <img v-lazy="box4Img5" alt="" class="form-box4-info-swipe-img">
                <div class="form-box1-info-swipe-tit form-box1-info-swipe-top">正则验证，确保数据规则</div>
              </div>
              <div class="swiper-slide">
                <img v-lazy="box4Img6" alt="" class="form-box4-info-swipe-img">
                <div class="form-box1-info-swipe-tit form-box1-info-swipe-top">自定义短信签名，群发短信</div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <!-- /swipe -->
        </div>
      </div>
      <!-- /box -->

      <!-- box -->
      <div class="form-box5">
        <div class="form-box1-tit">数据和报表</div>
        <div class="form-box1-txt">让数据为你所用，专业图表展示数据价值</div>
        <div class="form-box5-info">
          <!-- swipe -->
          <div class="swiper-container form-box5-info-swipe">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img v-lazy="box5Img1" alt="" class="form-box5-info-swipe-img">
                <div class="form-box5-info-swipe-tit">可视化图表一目了然</div>
              </div>
              <div class="swiper-slide">
                <img v-lazy="box5Img2" alt="" class="form-box5-info-swipe-img">
                <div class="form-box5-info-swipe-tit">数据导出分析</div>
              </div>
              <div class="swiper-slide">
                <img v-lazy="box5Img3" alt="" class="form-box5-info-swipe-img">
                <div class="form-box5-info-swipe-tit">访问统计</div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <!-- /swipe -->
        </div>
      </div>
      <!-- /box -->

      <div class="form-tag">
        <div class="form-box1-tit">解锁高级功能，让业务系统更强大</div>
        <div class="form-tag-info">
          <div class="form-tag-info-list">
            <dl class="form-tag-info-item">
              <dt class="form-tag-info-item-icon form-tag-info-item-icon-1"></dt>
              <dd class="form-tag-info-item-tit">密码保护</dd>
            </dl>
            <dl class="form-tag-info-item">
              <dt class="form-tag-info-item-icon form-tag-info-item-icon-2"></dt>
              <dd class="form-tag-info-item-tit">访问限制</dd>
            </dl>
            <dl class="form-tag-info-item">
              <dt class="form-tag-info-item-icon form-tag-info-item-icon-3"></dt>
              <dd class="form-tag-info-item-tit">消息提醒</dd>
            </dl>
            <dl class="form-tag-info-item">
              <dt class="form-tag-info-item-icon form-tag-info-item-icon-4"></dt>
              <dd class="form-tag-info-item-tit">定时收集</dd>
            </dl>
          </div>
          <div class="form-tag-info-list">
            <dl class="form-tag-info-item">
              <dt class="form-tag-info-item-icon form-tag-info-item-icon-5"></dt>
              <dd class="form-tag-info-item-tit">收集限额</dd>
            </dl>
            <dl class="form-tag-info-item">
              <dt class="form-tag-info-item-icon form-tag-info-item-icon-6"></dt>
              <dd class="form-tag-info-item-tit">成功按钮</dd>
            </dl>
            <dl class="form-tag-info-item">
              <dt class="form-tag-info-item-icon form-tag-info-item-icon-7"></dt>
              <dd class="form-tag-info-item-tit">表单二维码</dd>
            </dl>
          </div>
        </div>
      </div>

      <!-- box -->
      <div class="form-box4 form-box7">
        <div class="form-box1-tit">多场景模板，让您工作更智慧</div>
        <div class="form-box1-info">
          <!-- swipe -->
          <div class="swiper-container form-box4-info-swipe form-box4-info-swipe2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img v-lazy="box7Img1" alt="" class="form-box4-info-swipe-img">
                <div class="form-box1-info-swipe-tit">报名类</div>
              </div>
              <div class="swiper-slide">
                <img v-lazy="box7Img2" alt="" class="form-box4-info-swipe-img">
                <div class="form-box1-info-swipe-tit">问卷类</div>
              </div>
              <div class="swiper-slide">
                <img v-lazy="box7Img3" alt="" class="form-box4-info-swipe-img">
                <div class="form-box1-info-swipe-tit">投票类</div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <!-- /swipe -->
        </div>
      </div>
      <!-- /box -->

      <div class="form-banner2">
        <div class="form-banner2-tit">赶快创建您的第一个表单吧</div>
        <div class="form-banner2-txt">上万用户正在使用活动易表单</div>
      </div>
    </div>

    <FooterWap />
  </div>
</template>
<script>
  // import Swiper from 'swiper';
  import NavWap from '@/components/NavWap.vue';
  import FooterWap from '@/components/FooterWap.vue';
  import bannerImg from '@/assets/images/wap/form/banner/banner-c.png';
  // box1
  import box1Img1 from '@/assets/images/wap/form/box3/img1.png';
  import box1Img2 from '@/assets/images/wap/form/box3/img2.png';
  import box1Img3 from '@/assets/images/wap/form/box3/img3.png';
  import box1Img4 from '@/assets/images/wap/form/box3/img4.png';
  // box2
  import box3Img1 from '@/assets/images/wap/commerce/box3/img1.png';
  import box3Img2 from '@/assets/images/wap/commerce/box3/img2.png';
  import box3Img3 from '@/assets/images/wap/commerce/box3/img3.png';

  // box4
  import box4Img1 from '@/assets/images/wap/form/box4/1.png';
  import box4Img2 from '@/assets/images/wap/form/box4/2.png';
  import box4Img3 from '@/assets/images/wap/form/box4/3.png';
  import box4Img4 from '@/assets/images/wap/form/box4/4.png';
  import box4Img5 from '@/assets/images/wap/form/box4/5.png';
  import box4Img6 from '@/assets/images/wap/form/box4/6.png';
  // box5
  import box5Img1 from '@/assets/images/wap/form/box5/img1.png';
  import box5Img2 from '@/assets/images/wap/form/box5/img2.png';
  import box5Img3 from '@/assets/images/wap/form/box5/img3.png';
  // 无缝轮播
  import box6Swipe1 from '@/assets/images/wap/commerce/box6/img1.png';
  import box6Swipe2 from '@/assets/images/wap/commerce/box6/img2.png';
  import box6Swipe3 from '@/assets/images/wap/commerce/box6/img3.png';
  import box6Swipe4 from '@/assets/images/wap/commerce/box6/img4.png';
  import box6Swipe5 from '@/assets/images/wap/commerce/box6/img5.png';
  import box6Swipe6 from '@/assets/images/wap/commerce/box6/img6.png';
  import box6Swipe7 from '@/assets/images/wap/commerce/box6/img7.png';
  import box7Img1 from '@/assets/images/wap/form/box7/img1.png';
  import box7Img2 from '@/assets/images/wap/form/box7/img2.png';
  import box7Img3 from '@/assets/images/wap/form/box7/img3.png';

  export default {
    name: 'Home',
    data() {
      return {
        NavWap,
        FooterWap,
        xcxEnv: false,
        bannerImg,
        // box1
        formBox1InfoSwipe: '',
        formBox4InfoSwipe: '',
        box1Img1,
        box1Img2,
        box1Img3,
        box1Img4,
        commerceBox2InfoSwipe: '',
        box3Img1,
        box3Img2,
        box3Img3,
        box4Img1,
        box4Img2,
        box4Img3,
        box4Img4,
        box4Img5,
        box4Img6,
        formBox5InfoSwipe: '',
        box5Img1,
        box5Img2,
        box5Img3,
        box7Img1,
        box7Img2,
        box7Img3,
      };
    },
    created() {
      if(process.browser) {
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
      if (process.browser) {
        if (!/(iPhone|iPod|iOS|Android|ipad)/i.test(navigator.userAgent)) {
          // var equipment = "wap";
          this.$router.push({
            path: '/formtools',
          });
        }
      }
    },
    methods: {
    },
    mounted() {
      // box1
      this.formBox1InfoSwipe = new Swiper('.form-box1-info-swipe', {
        loop: false,
        pagination: '.form-box1-info-swipe .swiper-pagination',
      });

      // box4
      this.formBox4InfoSwipe = new Swiper('.form-box4-info-swipe1', {
        loop: false,
        pagination: '.form-box4-info-swipe1 .swiper-pagination',
      });

      // box4 2
      this.formBox4InfoSwipe = new Swiper('.form-box4-info-swipe2', {
        loop: false,
        pagination: '.form-box4-info-swipe2 .swiper-pagination',
      });

      // box4
      this.formBox5InfoSwipe = new Swiper('.form-box5-info-swipe', {
        loop: false,
        pagination: '.form-box5-info-swipe .swiper-pagination',
      });

      this.commerceBox2InfoSwipe = new Swiper('.form-box2-info-swipe', {
        navigation: true,
        loop: false,
        pagination: '.form-box2-info-swipe .swiper-pagination',
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
      });
    },
    components: {
      NavWap,
      FooterWap,
      // Swiper,
    },
  };
</script>

<style lang="scss">
  @import "../../assets/styles/wap/form.scss";
  @import "../../assets/styles/swiper.css";
</style>
