<template>
  <div class="meetup">
    <NavWap />
    <div class="meetup-wrap">
      <div class="meetup-banner">
        <div class="meetup-banner-tit">活动报名系统</div>
        <div class="meetup-banner-txt">为线下活动提供报名收款、现场签到等技术</div>
        <div v-if="!xcxEnv"><div class="meetup-banner-btn" onclick="qimoChatClick();">立即咨询</div></div>
      </div>


      <div class="meetup-done">
        <div class="meetup-box1-tit">灵活应对各类报名活动</div>
        <div class="meetup-done-info">
          <div class="meetup-done-info-item">
            <img v-lazy="box2Img1" alt="" class="meetup-done-info-item-img">
            <div class="meetup-done-info-item-tit">论坛峰会</div>
          </div>
          <div class="meetup-done-info-item">
            <img v-lazy="box2Img2" alt="" class="meetup-done-info-item-img">
            <div class="meetup-done-info-item-tit">校园活动</div>
          </div>
          <div class="meetup-done-info-item">
            <img v-lazy="box2Img3" alt="" class="meetup-done-info-item-img">
            <div class="meetup-done-info-item-tit">培训招生</div>
          </div>
          <div class="meetup-done-info-item">
            <img v-lazy="box2Img4" alt="" class="meetup-done-info-item-img">
            <div class="meetup-done-info-item-tit">发布会</div>
          </div>
          <div class="meetup-done-info-item">
            <img v-lazy="box2Img5" alt="" class="meetup-done-info-item-img">
            <div class="meetup-done-info-item-tit">校园活动</div>
          </div>
          <div class="meetup-done-info-item">
            <img v-lazy="box2Img6" alt="" class="meetup-done-info-item-img">
            <div class="meetup-done-info-item-tit">户外出游</div>
          </div>
          <div class="meetup-done-info-item">
            <img v-lazy="box2Img7" alt="" class="meetup-done-info-item-img">
            <div class="meetup-done-info-item-tit">公司团建</div>
          </div>
          <div class="meetup-done-info-item">
            <img v-lazy="box2Img8" alt="" class="meetup-done-info-item-img">
            <div class="meetup-done-info-item-tit">聚会轰趴</div>
          </div>
        </div>
      </div>

      <div class="meetup-box1">
        <div class="meetup-box1-tit">一站式活动/会议报名管理系统</div>
        <div class="meetup-box1-info">
          <!-- swipe -->
          <div class="swiper-container meetup-box1-info-swipe">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, index) in box1Info" :key="index">
                <div class="meetup-box1-info-swipe-icon" :class="'meetup-box1-info-swipe-icon-' + (index+1)"></div>
                <div class="meetup-box1-info-swipe-tit" v-text="item.tit"></div>
                <div class="meetup-box1-info-swipe-line"></div>
                <ul class="meetup-box1-info-swipe-ul" :class="'meetup-box1-info-swipe-ul-'+(index+1)">
                  <li class="meetup-box1-info-swipe-list" v-for="(list, i) in item.list" :key="i" v-text="list"></li>
                </ul>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <!-- /swipe -->
        </div>
      </div>

       <!-- box -->
      <div class="meetup-box4">
        <div class="meetup-box4-tit">活动易助力您轻松办好活动</div>
        <div class="meetup-box4-info">
          <!-- swipe -->
          <div class="swiper-container meetup-box4-info-swipe">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img v-lazy="box4Img1" alt="" class="meetup-box4-info-swipe-img">
                <div class="meetup-box4-info-swipe-tit">一键发布，多个前端</div>
              </div>
              <div class="swiper-slide">
                <img :src="box4Img2" alt="" class="meetup-box4-info-swipe-img">
                <div class="meetup-box4-info-swipe-tit">移动报名，轻松支付</div>
              </div>
              <div class="swiper-slide">
                <img :src="box4Img3" alt="" class="meetup-box4-info-swipe-img">
                <div class="meetup-box4-info-swipe-tit">精准营销，有效传播</div>
              </div>
              <div class="swiper-slide">
                <img :src="box4Img4" alt="" class="meetup-box4-info-swipe-img">
                <div class="meetup-box4-info-swipe-tit">嘉宾管理  省心省力</div>
              </div>
              <div class="swiper-slide">
                <img :src="box4Img5" alt="" class="meetup-box4-info-swipe-img">
                <div class="meetup-box4-info-swipe-tit">电子签到  极速便捷</div>
              </div>
              <div class="swiper-slide">
                <img :src="box4Img6" alt="" class="meetup-box4-info-swipe-img">
                <div class="meetup-box4-info-swipe-tit">数据报表  全面洞察</div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <!-- /swipe -->
        </div>
        <transition name="fade">
          <img class="meetup-box4-bg" :src="bgBox4Img1" alt="" v-if="box4Index === 1">
          <img class="meetup-box4-bg" :src="bgBox4Img2" alt="" v-if="box4Index === 2">
          <img class="meetup-box4-bg" :src="bgBox4Img3" alt="" v-if="box4Index === 3">
          <img class="meetup-box4-bg" :src="bgBox4Img4" alt="" v-if="box4Index === 4">
          <img class="meetup-box4-bg" :src="bgBox4Img5" alt="" v-if="box4Index === 5">
          <img class="meetup-box4-bg" :src="bgBox4Img6" alt="" v-if="box4Index === 6">
        </transition>
      </div>
      <!-- /box -->


      <div class="meetup-more">
        <div class="meetup-more-tit">更多功能</div>
        <div class="meetup-more-txt">面面俱到，成就你的会议/活动</div>
        <div class="meetup-more-info">
          <dl class="meetup-more-info-item">
            <dt class="meetup-more-info-item-icon meetup-more-info-item-icon-1"></dt>
            <dd class="meetup-more-info-item-tit">免费短信通知</dd>
          </dl>
          <dl class="meetup-more-info-item">
            <dt class="meetup-more-info-item-icon meetup-more-info-item-icon-2"></dt>
            <dd class="meetup-more-info-item-tit">多语言支持</dd>
          </dl>
          <dl class="meetup-more-info-item">
            <dt class="meetup-more-info-item-icon meetup-more-info-item-icon-3"></dt>
            <dd class="meetup-more-info-item-tit">多支付方式</dd>
          </dl>
          <dl class="meetup-more-info-item">
            <dt class="meetup-more-info-item-icon meetup-more-info-item-icon-4"></dt>
            <dd class="meetup-more-info-item-tit">在线收款</dd>
          </dl>
          <dl class="meetup-more-info-item">
            <dt class="meetup-more-info-item-icon meetup-more-info-item-icon-5"></dt>
            <dd class="meetup-more-info-item-tit">嵌入官网报名</dd>
          </dl>
          <dl class="meetup-more-info-item">
            <dt class="meetup-more-info-item-icon meetup-more-info-item-icon-6"></dt>
            <dd class="meetup-more-info-item-tit">报名审核</dd>
          </dl>
          <dl class="meetup-more-info-item">
            <dt class="meetup-more-info-item-icon meetup-more-info-item-icon-7"></dt>
            <dd class="meetup-more-info-item-tit">支持限购</dd>
          </dl>
          <dl class="meetup-more-info-item">
            <dt class="meetup-more-info-item-icon meetup-more-info-item-icon-8"></dt>
            <dd class="meetup-more-info-item-tit">支持选座</dd>
          </dl>
          <dl class="meetup-more-info-item">
            <dt class="meetup-more-info-item-icon meetup-more-info-item-icon-9"></dt>
            <dd class="meetup-more-info-item-tit">LOGO定制</dd>
          </dl>
          <dl class="meetup-more-info-item">
            <dt class="meetup-more-info-item-icon meetup-more-info-item-icon-10"></dt>
            <dd class="meetup-more-info-item-tit">微信服务号绑定</dd>
          </dl>
          <dl class="meetup-more-info-item">
            <dt class="meetup-more-info-item-icon meetup-more-info-item-icon-11"></dt>
            <dd class="meetup-more-info-item-tit">报名后吸粉</dd>
          </dl>
          <dl class="meetup-more-info-item">
            <dt class="meetup-more-info-item-icon meetup-more-info-item-icon-12"></dt>
            <dd class="meetup-more-info-item-tit">参会导览</dd>
          </dl>
        </div>
      </div>



      <div class="meetup-banner2">
        <div class="meetup-banner2-txt">使用更多营销工具和玩法办活动吧！</div>
        <div class="meetup-banner2-btn" @click="goTry">免费试用</div>
      </div>

      <FooterWap />
    </div>
  </div>
</template>
<script>
  // import Swiper from 'swiper';
  import NavWap from '@/components/NavWap.vue';
  import FooterWap from '@/components/FooterWap.vue';
  // box1
  import box2Img1 from '@/assets/images/wap/meetup/box2/1.jpg';
  import box2Img2 from '@/assets/images/wap/meetup/box2/2.jpg';
  import box2Img3 from '@/assets/images/wap/meetup/box2/3.jpg';
  import box2Img4 from '@/assets/images/wap/meetup/box2/4.jpg';
  import box2Img5 from '@/assets/images/wap/meetup/box2/5.jpg';
  import box2Img6 from '@/assets/images/wap/meetup/box2/6.jpg';
  import box2Img7 from '@/assets/images/wap/meetup/box2/7.jpg';
  import box2Img8 from '@/assets/images/wap/meetup/box2/8.jpg';
  import box4Img1 from '@/assets/images/wap/meetup/box4/img1.png';
  import box4Img2 from '@/assets/images/wap/meetup/box4/img2.png';
  import box4Img3 from '@/assets/images/wap/meetup/box4/img3.png';
  import box4Img4 from '@/assets/images/wap/meetup/box4/img4.png';
  import box4Img5 from '@/assets/images/wap/meetup/box4/img5.png';
  import box4Img6 from '@/assets/images/wap/meetup/box4/img6.png';
  import bgBox4Img1 from '@/assets/images/wap/meetup/box4/bg1.jpg';
  import bgBox4Img2 from '@/assets/images/wap/meetup/box4/bg2.jpg';
  import bgBox4Img3 from '@/assets/images/wap/meetup/box4/bg3.jpg';
  import bgBox4Img4 from '@/assets/images/wap/meetup/box4/bg4.jpg';
  import bgBox4Img5 from '@/assets/images/wap/meetup/box4/bg5.jpg';
  import bgBox4Img6 from '@/assets/images/wap/meetup/box4/bg6.jpg';

  export default {
    name: 'Meetup',
    data() {
      return {
        NavWap,
        FooterWap,
        xcxEnv: false,
        //
        box2Img1,
        box2Img2,
        box2Img3,
        box2Img4,
        box2Img5,
        box2Img6,
        box2Img7,
        box2Img8,
        meetupBox1InfoSwipe: '',
        box1Info: [
          {
            tit: '网站创建',
            list: ['微站创建', '官网对接', '小程序创建', '多终端同步'],
          },
          {
            tit: '在线报名',
            list: ['自定义报名表', '多票种价格', '多人套票报名', '多种支付，支持外币'],
          },
          {
            tit: '活动推广',
            list: ['多人拼团报名', '领券报名', '限时折扣', '多渠道分销', '短信群发'],
          },
          {
            tit: '嘉宾管理',
            list: ['群发日程提醒通知', '批量导入', '添加标签', '高级智能筛选'],
          },
          {
            tit: '现场签到',
            list: ['电脑签到', 'APP签到', '二维码签到', '身份证签到'],
          },
          {
            tit: '数据报表',
            list: ['财务报表', '用户报表', '签到报表', '全渠道推广效果监测', '投票/调查结果精确统计'],
          },
        ],
        box4Img1,
        box4Img2,
        box4Img3,
        box4Img4,
        box4Img5,
        box4Img6,
        bgBox4Img1,
        bgBox4Img2,
        bgBox4Img3,
        bgBox4Img4,
        bgBox4Img5,
        bgBox4Img6,
        box4Index: 1,
        meetupBox4InfoSwipe: '',
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
            path: '/meetup',
          });
        }
      }
    },
    methods: {
      goTry() {
        this.$router.push({
          path: '/m/appointment',
        });
      },
    },
    mounted() {
      // box1
      this.meetupBox1InfoSwipe = new Swiper('.meetup-box1-info-swipe', {
        loop: false,
        pagination: '.meetup-box1-info-swipe .swiper-pagination',
        loopedSlides: 3,
        centeredSlides: true,
        slidesPerView: 'auto',
        // pagination: '.swiper-pagination',
        spaceBetween: 16,

      });

      // box4
      this.meetupBox4InfoSwipe = new Swiper('.meetup-box4-info-swipe', {
        loop: false,
        pagination: '.meetup-box4-info-swipe .swiper-pagination',
        onSlideChangeStart: (swiper) => {
          console.log(swiper, 'swiper');
          this.box4Index = swiper.activeIndex+1;
        },
      });
    },
    components: {
      NavWap,
      // Swiper,
      FooterWap,
    },
  };
</script>

<style lang="scss">
  @import "../../assets/styles/wap/meetup.scss";
  @import "../../assets/styles/swiper.css";
</style>
