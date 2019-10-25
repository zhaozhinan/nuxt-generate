<template>
  <div class="commerce">
    <NavWap />
    <div class="commerce-wrap">
      <div class="commerce-banner">
        <div class="commerce-banner-tit">超强大的票务系统</div>
        <div class="commerce-banner-txt">大型演出、国际赛事的现场解决方案</div>
        <div v-if="!xcxEnv"><div class="commerce-banner-btn" onclick="qimoChatClick();">立即咨询</div></div>
        <img v-lazy="bannerImg" alt="" class="commerce-banner-img">
      </div>
      <!-- 票务电商 -->
      <div class="commerce-box1">
        <div class="commerce-box1-tit">票务电商</div>
        <div class="commerce-box1-txt">多场景售票，想卖就卖</div>
        <div class="commerce-box1-info">
          <!-- swipe -->
          <div class="swiper-container commerce-box1-info-swipe">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img v-lazy="box1Img1" alt="" class="commerce-box1-info-swipe-img" @click="goJcjy">
              </div>
              <div class="swiper-slide">
                <img v-lazy="box1Img2" alt="" class="commerce-box1-info-swipe-img">
              </div>
              <div class="swiper-slide">
                <img v-lazy="box1Img3" alt="" class="commerce-box1-info-swipe-img">
              </div>
              <div class="swiper-slide">
                <img v-lazy="box1Img4" alt="" class="commerce-box1-info-swipe-img" @click="goZlxx">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <!-- /swipe -->
        </div>
      </div>
      <!-- ／票务电商 -->
      <!-- 票务管理系统 -->
      <div class="commerce-box2">
        <div class="commerce-box2-tit">专业票务管理系统</div>
        <div class="commerce-box2-txt">8年票务平台经验</div>
        <div class="commerce-box2-info">
          <!-- swipe -->
          <div class="swiper-container commerce-box2-info-swipe">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img v-lazy="box3Img1" alt="" class="commerce-box2-info-swipe-img">
              </div>
              <div class="swiper-slide">
                <img :src="box3Img2" alt="" class="commerce-box2-info-swipe-img">
              </div>
              <div class="swiper-slide">
                <img :src="box3Img3" alt="" class="commerce-box2-info-swipe-img">
              </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
          </div>
          <!-- /swipe -->
        </div>
        <div class="commerce-box2-detail">
          <div class="commerce-box2-detail-item">多场次</div>
          <div class="commerce-box2-detail-item">多终端</div>
          <div class="commerce-box2-detail-item">自收款</div>
          <div class="commerce-box2-detail-item">多支付</div>
          <div class="commerce-box2-detail-item">多语言</div>
          <div class="commerce-box2-detail-item">多限购</div>
          <div class="commerce-box2-detail-item">多核销</div>
          <div class="commerce-box2-detail-item">在线选座</div>
          <div class="commerce-box2-detail-item">多报表</div>
          <div class="commerce-box2-detail-item">多账号</div>
        </div>
      </div>
      <!-- ／票务管理系统 -->

      <!-- 商品周边 -->
      <div class="commerce-box3">
        <div class="commerce-box2-tit">商品周边</div>
        <div class="commerce-box2-txt">拓展主办营收提升业绩</div>
        <img v-lazy="box4Img" alt="" class="commerce-box3-img">
        <div class="commerce-box3-detail">
          <div class="commerce-box3-detail-item">多产品</div>
          <div class="commerce-box3-detail-item">套餐售卖</div>
          <div class="commerce-box3-detail-item">运费设置</div>
          <div class="commerce-box3-detail-item">会员限购</div>
          <div class="commerce-box3-detail-item">促销折扣</div>
          <div class="commerce-box3-detail-item">核销方便</div>
        </div>
      </div>
      <!-- ／商品周边 -->

      <!-- 票务商城/小程序 -->
      <div class="commerce-box4">
        <div class="commerce-box1-tit">票务商城/小程序</div>
        <div class="commerce-box1-txt">主办专属的综合售卖终端</div>
        <div class="commerce-box4-info">
          <!-- swipe -->
          <div class="swiper-container commerce-box4-info-swipe">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img v-lazy="box5Img1" alt="" class="commerce-box4-info-swipe-img">
                <div class="commerce-box4-info-swipe-tit">多终端店铺</div>
              </div>
              <div class="swiper-slide">
                <img v-lazy="box5Img2" alt="" class="commerce-box4-info-swipe-img">
                <div class="commerce-box4-info-swipe-tit">多形式展示</div>
              </div>
              <div class="swiper-slide">
                <img v-lazy="box5Img3" alt="" class="commerce-box4-info-swipe-img">
                <div class="commerce-box4-info-swipe-tit">品牌化传播</div>
              </div>
              <div class="swiper-slide">
                <img v-lazy="box5Img4" alt="" class="commerce-box4-info-swipe-img">
                <div class="commerce-box4-info-swipe-tit">全品类交易</div>
              </div>
              <div class="swiper-slide">
                <img v-lazy="box5Img5" alt="" class="commerce-box4-info-swipe-img">
                <div class="commerce-box4-info-swipe-tit">全方位留存</div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <!-- /swipe -->
        </div>
        <div class="commerce-box4-btn" @click="goProgram">了解更多</div>
      </div>
      <!-- ／票务商城/小程序 -->


      <div class="commerce-college">
        <div class="commerce-college-tit">商品周边</div>
        <div class="commerce-college-txt">拓展主办营收提升业绩</div>
        <div class="commerce-college-info">
          <dl class="commerce-college-info-item">
            <dt class="commerce-college-info-item-icon commerce-college-info-item-icon-1"></dt>
            <dd class="commerce-college-info-item-tit">提拉新</dd>
          </dl>
          <dl class="commerce-college-info-item">
            <dt class="commerce-college-info-item-icon commerce-college-info-item-icon-2"></dt>
            <dd class="commerce-college-info-item-tit">促转化</dd>
          </dl>
          <dl class="commerce-college-info-item">
            <dt class="commerce-college-info-item-icon commerce-college-info-item-icon-3"></dt>
            <dd class="commerce-college-info-item-tit">提客单</dd>
          </dl>
          <dl class="commerce-college-info-item">
            <dt class="commerce-college-info-item-icon commerce-college-info-item-icon-4"></dt>
            <dd class="commerce-college-info-item-tit">促留存</dd>
          </dl>
          <dl class="commerce-college-info-item">
            <dt class="commerce-college-info-item-icon commerce-college-info-item-icon-5"></dt>
            <dd class="commerce-college-info-item-tit">做分销</dd>
          </dl>
        </div>
      </div>

      <div class="commerce-case">
        <div class="commerce-case-swipe" id="commerceSwipe">
          <div class="commerce-case-swipe-box" id="commerceSwipe1">
            <img :src="box6Swipe1" alt="">
            <img :src="box6Swipe2" alt="">
            <img :src="box6Swipe3" alt="">
            <img :src="box6Swipe4" alt="">
            <img :src="box6Swipe5" alt="">
            <img :src="box6Swipe6" alt="">
            <img :src="box6Swipe7" alt="">
          </div>
          <div class="commerce-case-swipe-box" id="commerceSwipe2">
            <img :src="box6Swipe1" alt="">
            <img :src="box6Swipe2" alt="">
            <img :src="box6Swipe3" alt="">
            <img :src="box6Swipe4" alt="">
            <img :src="box6Swipe5" alt="">
            <img :src="box6Swipe6" alt="">
            <img :src="box6Swipe7" alt="">
          </div>
        </div>
      </div>

      <!-- 会员CRM -->
      <div class="commerce-crm">
        <div class="commerce-box2-tit">会员CRM</div>
        <div class="commerce-box2-txt">精细化管理客户，更多留存更多复购</div>
        <div class="commerce-crm-info">
          <!-- swipe -->
          <div class="swiper-container commerce-crm-info-swipe">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img v-lazy="box7Img1" alt="" class="commerce-crm-info-swipe-img">
                <div class="commerce-crm-info-swipe-tit">拉新与留存</div>
                <div class="commerce-crm-info-swipe-txt">会员招募 / 会员付费 / 会员导入</div>
              </div>
              <div class="swiper-slide">
                <img :src="box7Img2" alt="" class="commerce-crm-info-swipe-img">
                <div class="commerce-crm-info-swipe-tit">捆绑与忠诚</div>
                <div class="commerce-crm-info-swipe-txt">开卡有礼 / 升级有礼 / 储值有礼<br>等级优惠 / 专属折扣 / 特权回馈  </div>
              </div>
              <div class="swiper-slide">
                <img :src="box7Img3" alt="" class="commerce-crm-info-swipe-img">
                <div class="commerce-crm-info-swipe-tit">促销与复购</div>
                <div class="commerce-crm-info-swipe-txt">短信营销 / 次卡年卡 / 积分商城和兑换</div>
              </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
          </div>
          <!-- /swipe -->
        </div>
      </div>
      <!-- ／会员CRM -->

      <!-- 可视化数据系统 -->
      <div class="commerce-box3">
        <div class="commerce-box2-tit">可视化数据系统</div>
        <div class="commerce-box2-txt">多角度/全方位的经营分析，驱动发展</div>
        <img v-lazy="box8Img" alt="" class="commerce-box3-img">
        <div class="commerce-college-info">
          <dl class="commerce-college-info-item">
            <dt class="commerce-college-info-item-icon8 commerce-college-info-item-icon8-1"></dt>
            <dd class="commerce-college-info-item-tit">销售数据</dd>
          </dl>
          <dl class="commerce-college-info-item">
            <dt class="commerce-college-info-item-icon8 commerce-college-info-item-icon8-2"></dt>
            <dd class="commerce-college-info-item-tit">用户数据</dd>
          </dl>
          <dl class="commerce-college-info-item">
            <dt class="commerce-college-info-item-icon8 commerce-college-info-item-icon8-3"></dt>
            <dd class="commerce-college-info-item-tit">财务数据</dd>
          </dl>
          <dl class="commerce-college-info-item">
            <dt class="commerce-college-info-item-icon8 commerce-college-info-item-icon8-4"></dt>
            <dd class="commerce-college-info-item-tit">项目报表</dd>
          </dl>
        </div>
      </div>
      <!-- /可视化数据系统 -->

      <!-- 智慧现场 -->
      <div class="commerce-box9">
        <div class="commerce-box2-tit">智慧现场</div>
        <div class="commerce-box2-txt">打票、取票、验票硬件提供完善入场体验</div>
        <div class="commerce-box9-info">
          <dl class="commerce-box9-info-item">
            <dt class="commerce-box9-info-item-icon commerce-box9-info-item-icon-1"></dt>
            <dd class="commerce-box9-info-item-tit">票纸防伪与<br>出票打印</dd>
          </dl>
          <dl class="commerce-box9-info-item">
            <dt class="commerce-box9-info-item-icon commerce-box9-info-item-icon-2"></dt>
            <dd class="commerce-box9-info-item-tit">人脸识别</dd>
          </dl>
          <dl class="commerce-box9-info-item">
            <dt class="commerce-box9-info-item-icon commerce-box9-info-item-icon-3"></dt>
            <dd class="commerce-box9-info-item-tit">储值手环</dd>
          </dl>
          <dl class="commerce-box9-info-item">
            <dt class="commerce-box9-info-item-icon commerce-box9-info-item-icon-4"></dt>
            <dd class="commerce-box9-info-item-tit">取票购票<br>一体机</dd>
          </dl>
          <dl class="commerce-box9-info-item">
            <dt class="commerce-box9-info-item-icon commerce-box9-info-item-icon-5"></dt>
            <dd class="commerce-box9-info-item-tit">APP核销</dd>
          </dl>
          <dl class="commerce-box9-info-item">
            <dt class="commerce-box9-info-item-icon commerce-box9-info-item-icon-6"></dt>
            <dd class="commerce-box9-info-item-tit">身份证验票</dd>
          </dl>
          <dl class="commerce-box9-info-item">
            <dt class="commerce-box9-info-item-icon commerce-box9-info-item-icon-7"></dt>
            <dd class="commerce-box9-info-item-tit">手持扫码机</dd>
          </dl>
          <dl class="commerce-box9-info-item">
            <dt class="commerce-box9-info-item-icon commerce-box9-info-item-icon-8"></dt>
            <dd class="commerce-box9-info-item-tit">闸机与<br>人脸识别</dd>
          </dl>
        </div>
        <div v-if="!xcxEnv"><div class="commerce-box4-btn" onclick="qimoChatClick();">详情咨询</div></div>
      </div>

      <div class="commerce-banner2">
        <div class="commerce-banner2-tit">活动易，报名售票更容易</div>
        <div class="commerce-banner2-txt">自收款 / 票提低 / 有数据</div>
        <div class="commerce-banner2-btn" @click="goTry">免费试用</div>
        <img v-lazy="banner2Img" alt="" class="commerce-banner2-img">
      </div>
    </div>

    <FooterWap />
  </div>
</template>
<script>
  // import Swiper from 'swiper';
  import NavWap from '@/components/NavWap.vue';
  import FooterWap from '@/components/FooterWap.vue';
  import bannerImg from '@/assets/images/wap/commerce/banner/banner-c.png';
  import banner2Img from '@/assets/images/wap/commerce/box10/banner-c.png';
  // box1
  import box1Img1 from '@/assets/images/wap/commerce/box2/1.png';
  import box1Img2 from '@/assets/images/wap/commerce/box2/2.png';
  import box1Img3 from '@/assets/images/wap/commerce/box2/3.png';
  import box1Img4 from '@/assets/images/wap/commerce/box2/4.png';
  // box2
  import box3Img1 from '@/assets/images/wap/commerce/box3/img1.png';
  import box3Img2 from '@/assets/images/wap/commerce/box3/img2.png';
  import box3Img3 from '@/assets/images/wap/commerce/box3/img3.png';
  import box4Img from '@/assets/images/wap/commerce/box4/img.png';
  import box5Img1 from '@/assets/images/wap/commerce/box5/img1.png';
  import box5Img2 from '@/assets/images/wap/commerce/box5/img2.png';
  import box5Img3 from '@/assets/images/wap/commerce/box5/img3.png';
  import box5Img4 from '@/assets/images/wap/commerce/box5/img4.png';
  import box5Img5 from '@/assets/images/wap/commerce/box5/img5.png';
  // 无缝轮播
  import box6Swipe1 from '@/assets/images/wap/commerce/box6/img1.png';
  import box6Swipe2 from '@/assets/images/wap/commerce/box6/img2.png';
  import box6Swipe3 from '@/assets/images/wap/commerce/box6/img3.png';
  import box6Swipe4 from '@/assets/images/wap/commerce/box6/img4.png';
  import box6Swipe5 from '@/assets/images/wap/commerce/box6/img5.png';
  import box6Swipe6 from '@/assets/images/wap/commerce/box6/img6.png';
  import box6Swipe7 from '@/assets/images/wap/commerce/box6/img7.png';
  import box7Img1 from '@/assets/images/wap/commerce/box7/img1.png';
  import box7Img2 from '@/assets/images/wap/commerce/box7/img2.png';
  import box7Img3 from '@/assets/images/wap/commerce/box7/img3.png';
  import box8Img from '@/assets/images/wap/commerce/box8/img.png';

  export default {
    name: 'Home',
    data() {
      return {
        NavWap,
        FooterWap,
        xcxEnv: false,
        bannerImg,
        banner2Img,
        // box1
        comerceBox1InfoSwipe: '',
        box1Img1,
        box1Img2,
        box1Img3,
        box1Img4,
        commerceBox2InfoSwipe: '',
        box3Img1,
        box3Img2,
        box3Img3,
        box4Img,
        commerceBox4InfoSwipe: '',
        box5Img1,
        box5Img2,
        box5Img3,
        box5Img4,
        box5Img5,
        // 无缝轮播
        box6Swipe1,
        box6Swipe2,
        box6Swipe3,
        box6Swipe4,
        box6Swipe5,
        box6Swipe6,
        box6Swipe7,
        box7Img1,
        box7Img2,
        box7Img3,
        // crm
        crmIndex: 0,
        crmInfoSwipe: '',
        box8Img,
        timer: '',
      };
    },
    created() {
      if (process.browser) {
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
        this.box6SwipeFn();
      }
      if (process.browser) {
        if (!/(iPhone|iPod|iOS|Android|ipad)/i.test(navigator.userAgent)) {
          // var equipment = "wap";
          this.$router.push({
            path: '/commerce',
          });
        }
      }
    },
    methods: {
      more(e) {
        console.log(e, 200);
      },
      box6SwipeFn() {
        if (process.browser) {
          let x = 0;
          this.timer = setInterval(() => {
            const _box1 = document.getElementById("commerceSwipe1");
            const _box2 = document.getElementById("commerceSwipe2");
            _box1.style.left = `${x/75}rem`;
            _box2.style.left = `${x/75 + 2319/75}rem`;
            x--;
            if((x/75 + 2319/75) === 0){
              x = 0;
            }
          }, 10);
        }
      },
      goTry() {
        this.$router.push({
          path: '/m/appointment',
        });
      },
      goProgram() {
        this.$router.push({
          path: '/m/program',
        });
      },
      goJcjy() {
        window.open('https://college.evente.cn/17/19');
      },
      goZlxx() {
        window.open('https://college.evente.cn/17/20');
      },
    },
    mounted() {
      // box1
      // const widthNum = document.body.clientWidth;
      // console.log(widthNum);
      // let count = (widthNum / 10) / 2;
      // console.log(count);
      this.comerceBox1InfoSwipe = new Swiper('.commerce-box1-info-swipe', {
        loop: false,
        pagination: '.commerce-box1-info-swipe .swiper-pagination',
        loopedSlides: 3,
        centeredSlides: true,
        slidesPerView: 'auto',
        // pagination: '.swiper-pagination',
        spaceBetween: 10,

      });

      this.commerceBox2InfoSwipe = new Swiper('.commerce-box2-info-swipe', {
        navigation: true,
        loop: false,
        pagination: '.commerce-box2-info-swipe .swiper-pagination',
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
      });

      this.crmInfoSwipe = new Swiper('.commerce-crm-info-swipe', {
        navigation: true,
        loop: false,
        pagination: '.commerce-crm-info-swipe .swiper-pagination',
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
      });

      this.commerceBox4InfoSwipe = new Swiper('.commerce-box4-info-swipe', {
        navigation: true,
        loop: false,
        pagination: '.commerce-box4-info-swipe .swiper-pagination',
      });
    },
    components: {
      NavWap,
      FooterWap,
      // Swiper,
    },
    beforeDestroy() {
      if(this.timer) {
        clearInterval(this.timer);
      }
    },
  };
</script>

<style lang="scss">
  @import "../../assets/styles/wap/commerce.scss";
  @import "../../assets/styles/swiper.css";
</style>
