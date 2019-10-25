<template>
  <div class="evente-meetup">
    <navpc />

    <div class="evente-meetup-wrap">
      <div class="evente-meetup-wrap-banner">
        <div class="evente-meetup-wrap-banner-content">
          <div class="evente-meetup-wrap-banner-content-title">活动易，专业主办的最佳选择</div>
          <div class="evente-meetup-wrap-banner-content-txt">支持个人免费组织报名收款和现场签到</div>
          <emfe-button theme="primary" className="evente-meetup-wrap-banner-content"  @click="goRegister">免费使用</emfe-button>
          <!-- <emfe-button theme="primary" className="evente-meetup-wrap-banner-content" @click="goacc">申请试用专业版</emfe-button> -->
        </div>
      </div>

      <div class="evente-meetup-wrap-box1">
        <div class="evente-meetup-wrap-box1-tit">灵活应对多种报名场景</div>
        <div class="evente-meetup-wrap-box1-info">
          <div class="evente-meetup-wrap-box1-info-item" v-for="(item, index) in box1Data" :key="'box1'+index">
            <img v-lazy="item.img" alt="" class="evente-meetup-wrap-box1-info-item-img">
            <div class="evente-meetup-wrap-box1-info-item-loyer">
              <div class="evente-meetup-wrap-box1-info-item-loyer-tit" v-text="item.tit"></div>
              <div class="evente-meetup-wrap-box1-info-item-loyer-txt" v-text="item.txt"></div>
              <!-- <div class="evente-meetup-wrap-box1-info-item-loyer-2">
                <div class="evente-meetup-wrap-box1-info-item-loyer-2-tit" v-text="item.tit"></div>
                <div class="evente-meetup-wrap-box1-info-item-loyer-2-txt" v-text="item.txt"></div>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <div class="evente-meetup-wrap-box2">
        <div class="evente-meetup-wrap-box2-tit">一站式活动/会议报名系统</div>
        <div class="evente-meetup-wrap-box2-info">
          <ul class="evente-meetup-wrap-box2-info-con">
            <li class="evente-meetup-wrap-box2-info-item" v-for="(item, index) in box2Data" :key="'meetup_box2_'+index" :class="{'evente-meetup-wrap-box2-info-active': onBox2EventNum === (index+1)}" @mouseenter="onBox2Event(index+1)">
              <div class="evente-meetup-wrap-box2-info-item-1">
                <div class="evente-meetup-wrap-box2-info-item-1-icon" :class="'evente-meetup-wrap-box2-info-item-1-icon-'+(index+1)"></div>
                <div class="evente-meetup-wrap-box2-info-item-1-tit" v-text="item.tit"></div>
                <div class="evente-meetup-wrap-box2-info-item-jt"></div>
                <ul class="evente-meetup-wrap-box2-info-item-list">
                  <li class="evente-meetup-wrap-box2-info-item-list-data" v-for="(obj, i) in item.list" :key="'meetup_box2_'+i"><span class="evente-meetup-wrap-box2-info-item-list-txt" v-text="obj"></span></li>
                </ul>
              </div>
              <div class="evente-meetup-wrap-box2-info-item-2">
                <div class="evente-meetup-wrap-box2-info-item-2-icon" :class="'evente-meetup-wrap-box2-info-item-1-icon-'+ (index+1) +'-hover'"></div>
                <div class="evente-meetup-wrap-box2-info-item-2-tit" v-text="item.tit"></div>
                <div class="evente-meetup-wrap-box2-info-item-2-jt"></div>
                <ul class="evente-meetup-wrap-box2-info-item-list">
                  <li class="evente-meetup-wrap-box2-info-item-list-data" :class="'evente-meetup-wrap-box2-info-item-list-data-'+(index+1)" v-for="(obj, i) in item.list" :key="'meetup_box2_'+i"><span class="evente-meetup-wrap-box2-info-item-list-txt" v-text="obj"></span></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="evente-meetup-wrap-box3">
        <div class="evente-meetup-wrap-box3-tit">活动易助力您轻松办好活动</div>
        <div v-if="box3Index === 1" class="evente-meetup-wrap-box3-bg" :class="'evente-meetup-wrap-box3-bg-' + box3Index"></div>
        <div v-if="box3Index === 2" class="evente-meetup-wrap-box3-bg" :class="'evente-meetup-wrap-box3-bg-' + box3Index"></div>
        <div v-if="box3Index === 3" class="evente-meetup-wrap-box3-bg" :class="'evente-meetup-wrap-box3-bg-' + box3Index"></div>
        <div v-if="box3Index === 4" class="evente-meetup-wrap-box3-bg" :class="'evente-meetup-wrap-box3-bg-' + box3Index"></div>
        <div v-if="box3Index === 5" class="evente-meetup-wrap-box3-bg" :class="'evente-meetup-wrap-box3-bg-' + box3Index"></div>
        <div v-if="box3Index === 6" class="evente-meetup-wrap-box3-bg" :class="'evente-meetup-wrap-box3-bg-' + box3Index"></div>
        <div class="evente-meetup-wrap-box3-info">
          <div class="evente-meetup-wrap-box3-info-tab">
            <span class="evente-meetup-wrap-box3-info-tab-after" :style="{'transform': 'translateY('+(48*(box3Index-1)+(box3Index-1)*34)+'px)'}"></span>
            <div class="evente-meetup-wrap-box3-info-tab-item" :class="{'evente-meetup-wrap-box3-info-tab-item-active': box3Index === (index+1)}" v-for="(item, index) in box3Data" :key="'meetup_box3'+index" @mouseenter="box3Btn(index+1)">
              <span class="evente-meetup-wrap-box3-info-tab-item-number">0{{ index+1 }}</span><span class="evente-meetup-wrap-box3-info-tab-item-line" :class="{'evente-meetup-wrap-box3-info-tab-item-active-line': box3Index === (index+1)}"></span><span v-text="item"></span>
            </div>
          </div>
          <div class="evente-meetup-wrap-box3-info-icon" v-if="box3Index === 1">
            <div class="evente-meetup-wrap-box3-info-icon-top">
              <img v-lazy="box3Img1_1" alt="" class="evente-meetup-wrap-box3-info-icon-top-img">
              <img v-lazy="box3Img1_2" alt="" class="evente-meetup-wrap-box3-info-icon-top-img">
            </div>
            <div class="evente-meetup-wrap-box3-info-icon-bot">
              <img v-lazy="box3Img1_3" alt="" class="evente-meetup-wrap-box3-info-icon-bot-img">
            </div>
          </div>
          <div class="evente-meetup-wrap-box3-info-icon" v-if="box3Index === 2">
            <div class="evente-meetup-wrap-box3-info-icon-top">
              <img :src="box3Img2_1" alt="" class="evente-meetup-wrap-box3-info-icon-top-img">
              <img :src="box3Img2_2" alt="" class="evente-meetup-wrap-box3-info-icon-top-img">
            </div>
            <div class="evente-meetup-wrap-box3-info-icon-bot">
              <img :src="box3Img2_3" alt="" class="evente-meetup-wrap-box3-info-icon-bot-img">
            </div>
          </div>
          <div class="evente-meetup-wrap-box3-info-icon" v-if="box3Index === 3">
            <div class="evente-meetup-wrap-box3-info-icon-top">
              <img :src="box3Img3_1" alt="" class="evente-meetup-wrap-box3-info-icon-top-img">
              <img :src="box3Img3_2" alt="" class="evente-meetup-wrap-box3-info-icon-top-img">
            </div>
            <div class="evente-meetup-wrap-box3-info-icon-bot">
              <img :src="box3Img3_3" alt="" class="evente-meetup-wrap-box3-info-icon-bot-img">
            </div>
          </div>
          <div class="evente-meetup-wrap-box3-info-icon" v-if="box3Index === 4">
            <div class="evente-meetup-wrap-box3-info-icon-top">
              <img :src="box3Img4_1" alt="" class="evente-meetup-wrap-box3-info-icon-top-img">
              <img :src="box3Img4_2" alt="" class="evente-meetup-wrap-box3-info-icon-top-img">
            </div>
            <div class="evente-meetup-wrap-box3-info-icon-bot">
              <img :src="box3Img4_3" alt="" class="evente-meetup-wrap-box3-info-icon-bot-img">
            </div>
          </div>
          <div class="evente-meetup-wrap-box3-info-icon" v-if="box3Index === 5">
            <div class="evente-meetup-wrap-box3-info-icon-top">
              <img :src="box3Img5_1" alt="" class="evente-meetup-wrap-box3-info-icon-top-img">
              <img :src="box3Img5_2" alt="" class="evente-meetup-wrap-box3-info-icon-top-img">
            </div>
            <div class="evente-meetup-wrap-box3-info-icon-bot">
              <img :src="box3Img5_3" alt="" class="evente-meetup-wrap-box3-info-icon-bot-img">
            </div>
          </div>
          <div class="evente-meetup-wrap-box3-info-icon" v-if="box3Index === 6">
            <div class="evente-meetup-wrap-box3-info-icon-top">
              <img :src="box3Img6_1" alt="" class="evente-meetup-wrap-box3-info-icon-top-img">
              <img :src="box3Img6_2" alt="" class="evente-meetup-wrap-box3-info-icon-top-img">
            </div>
            <div class="evente-meetup-wrap-box3-info-icon-bot">
              <img :src="box3Img6_3" alt="" class="evente-meetup-wrap-box3-info-icon-bot-img">
            </div>
          </div>
        </div>
      </div>

      <div class="evente-meetup-wrap-box4">
        <div class="evente-meetup-wrap-box4-tit">更多功能</div>
        <div class="evente-meetup-wrap-box4-txt">面面俱到，成就你的会议/活动</div>
        <div class="evente-meetup-wrap-box4-info">
          <dl class="evente-meetup-wrap-box4-info-item">
            <dt class="evente-meetup-wrap-box4-info-item-icon evente-meetup-wrap-box4-info-item-icon-1"></dt>
            <dd>
              <div class="evente-meetup-wrap-box4-info-item-tit">免费短信通知</div>
              <div class="evente-meetup-wrap-box4-info-item-txt">报名后系统自动发送短信通知<br>免费版还额外赠送200条短信额度，随您通知</div>
            </dd>
          </dl>
          <dl class="evente-meetup-wrap-box4-info-item">
            <dt class="evente-meetup-wrap-box4-info-item-icon evente-meetup-wrap-box4-info-item-icon-2"></dt>
            <dd>
              <div class="evente-meetup-wrap-box4-info-item-tit">多语言支持</div>
              <div class="evente-meetup-wrap-box4-info-item-txt">活动易支持中英双语报名/购票<br>国外用户无障碍参与</div>
            </dd>
          </dl>
          <dl class="evente-meetup-wrap-box4-info-item">
            <dt class="evente-meetup-wrap-box4-info-item-icon evente-meetup-wrap-box4-info-item-icon-3"></dt>
            <dd>
              <div class="evente-meetup-wrap-box4-info-item-tit">多支付方式</div>
              <div class="evente-meetup-wrap-box4-info-item-txt">支持主流的银联、支付宝、微信<br>甚至支持Paypal等多种外币</div>
            </dd>
          </dl>
          <dl class="evente-meetup-wrap-box4-info-item">
            <dt class="evente-meetup-wrap-box4-info-item-icon evente-meetup-wrap-box4-info-item-icon-4"></dt>
            <dd>
              <div class="evente-meetup-wrap-box4-info-item-tit">在线收款，资金即刻到账</div>
              <div class="evente-meetup-wrap-box4-info-item-txt">支持微信、支付宝自收款<br>资金即刻到主办商户号，无需提现，自收款无账期</div>
            </dd>
          </dl>
          <dl class="evente-meetup-wrap-box4-info-item">
            <dt class="evente-meetup-wrap-box4-info-item-icon evente-meetup-wrap-box4-info-item-icon-5"></dt>
            <dd>
              <div class="evente-meetup-wrap-box4-info-item-tit">嵌入官网报名</div>
              <div class="evente-meetup-wrap-box4-info-item-txt">可将活动报名购票功能潜入到官网<br>实现无缝购票体验</div>
            </dd>
          </dl>
          <dl class="evente-meetup-wrap-box4-info-item">
            <dt class="evente-meetup-wrap-box4-info-item-icon evente-meetup-wrap-box4-info-item-icon-6"></dt>
            <dd>
              <div class="evente-meetup-wrap-box4-info-item-tit">报名审核</div>
              <div class="evente-meetup-wrap-box4-info-item-txt">支持设置需要审核的报名<br>根据报名信息审核后再出票</div>
            </dd>
          </dl>
          <dl class="evente-meetup-wrap-box4-info-item">
            <dt class="evente-meetup-wrap-box4-info-item-icon evente-meetup-wrap-box4-info-item-icon-7"></dt>
            <dd>
              <div class="evente-meetup-wrap-box4-info-item-tit">支持限购</div>
              <div class="evente-meetup-wrap-box4-info-item-txt">支持根据身份证、手机号等形式进行限购<br>有效优化报名参与人员</div>
            </dd>
          </dl>
          <dl class="evente-meetup-wrap-box4-info-item">
            <dt class="evente-meetup-wrap-box4-info-item-icon evente-meetup-wrap-box4-info-item-icon-8"></dt>
            <dd>
              <div class="evente-meetup-wrap-box4-info-item-tit">支持选座</div>
              <div class="evente-meetup-wrap-box4-info-item-txt">可自行上传座位图，拖拽式绘制座位<br>实现分区域自主选座</div>
            </dd>
          </dl>
          <dl class="evente-meetup-wrap-box4-info-item">
            <dt class="evente-meetup-wrap-box4-info-item-icon evente-meetup-wrap-box4-info-item-icon-9"></dt>
            <dd>
              <div class="evente-meetup-wrap-box4-info-item-tit">LOGO定制</div>
              <div class="evente-meetup-wrap-box4-info-item-txt">支持主办品牌信息露出<br>强调官方信息，提高主办品牌度</div>
            </dd>
          </dl>
          <dl class="evente-meetup-wrap-box4-info-item">
            <dt class="evente-meetup-wrap-box4-info-item-icon evente-meetup-wrap-box4-info-item-icon-10"></dt>
            <dd>
              <div class="evente-meetup-wrap-box4-info-item-tit">微信服务号绑定</div>
              <div class="evente-meetup-wrap-box4-info-item-txt">活动易与微信服务号绑定<br>实现消息模板通知，提醒报名成功、信息</div>
            </dd>
          </dl>
          <dl class="evente-meetup-wrap-box4-info-item">
            <dt class="evente-meetup-wrap-box4-info-item-icon evente-meetup-wrap-box4-info-item-icon-11"></dt>
            <dd>
              <div class="evente-meetup-wrap-box4-info-item-tit">报名后吸粉</div>
              <div class="evente-meetup-wrap-box4-info-item-txt">可在报名后设置主办的服务号二维码<br>报名后即可关注。</div>
            </dd>
          </dl>
          <dl class="evente-meetup-wrap-box4-info-item">
            <dt class="evente-meetup-wrap-box4-info-item-icon evente-meetup-wrap-box4-info-item-icon-12"></dt>
            <dd>
              <div class="evente-meetup-wrap-box4-info-item-tit">参会导览</div>
              <div class="evente-meetup-wrap-box4-info-item-txt">在线会议或展区分布导览<br>方便参与者随时调整行程安排</div>
            </dd>
          </dl>
        </div>
      </div>



      <div class="evente-meetup-wrap-box5">
        <div class="evente-meetup-wrap-box5-tit">免费注册，使用更多营销工具和玩法办活动吧！</div>
        <div class="evente-meetup-wrap-box5-btn" @click="goRegister">立即注册</div>
      </div>


    </div>

    <!-- 底部 -->
    <FooterPc />
    <Service ref="serviceRef" />
    <transition name="fade"><go-top class="service-gotop" :height="70" :bottom="0" :right="10" :duration="2000"></go-top></transition>

  </div>
</template>

<script>
import NProgress from 'nprogress';
import FooterPc from '../components/FooterPc.vue';
// import NavPc from '../components/NavPc.vue';
import Service from '../components/Service.vue';
// import logo from '../assets/images/pc/wlogo1.png';
import logo1 from '../assets/images/pc/wlogo.png';
import logo2 from '../assets/images/pc/blogo.png';
import gpxcx from '../assets/images/pc/gpxcx.png';
import box1Img1 from '../assets/images/pc/meetup/box1/1.png';
import box1Img2 from '../assets/images/pc/meetup/box1/2.png';
import box1Img3 from '../assets/images/pc/meetup/box1/3.png';
import box1Img4 from '../assets/images/pc/meetup/box1/4.png';
import box1Img5 from '../assets/images/pc/meetup/box1/5.png';
import box1Img6 from '../assets/images/pc/meetup/box1/6.png';
import box1Img7 from '../assets/images/pc/meetup/box1/7.png';
import box1Img8 from '../assets/images/pc/meetup/box1/8.png';
import box3Img1_1 from '../assets/images/pc/meetup/box3/img1_1.png';
import box3Img1_2 from '../assets/images/pc/meetup/box3/img1_2.png';
import box3Img1_3 from '../assets/images/pc/meetup/box3/img1_3.png';
import box3Img2_1 from '../assets/images/pc/meetup/box3/img2_1.png';
import box3Img2_2 from '../assets/images/pc/meetup/box3/img2_2.png';
import box3Img2_3 from '../assets/images/pc/meetup/box3/img2_3.png';
import box3Img3_1 from '../assets/images/pc/meetup/box3/img3_1.png';
import box3Img3_2 from '../assets/images/pc/meetup/box3/img3_2.png';
import box3Img3_3 from '../assets/images/pc/meetup/box3/img3_3.png';
import box3Img4_1 from '../assets/images/pc/meetup/box3/img4_1.png';
import box3Img4_2 from '../assets/images/pc/meetup/box3/img4_2.png';
import box3Img4_3 from '../assets/images/pc/meetup/box3/img4_3.png';
import box3Img5_1 from '../assets/images/pc/meetup/box3/img5_1.png';
import box3Img5_2 from '../assets/images/pc/meetup/box3/img5_2.png';
import box3Img5_3 from '../assets/images/pc/meetup/box3/img5_3.png';
import box3Img6_1 from '../assets/images/pc/meetup/box3/img6_1.png';
import box3Img6_2 from '../assets/images/pc/meetup/box3/img6_2.png';
import box3Img6_3 from '../assets/images/pc/meetup/box3/img6_3.png';

export default {
  name: 'MeetUp',
  data() {
    return {
      FooterPc,
      // NavPc,
      Service,
      scrollTop: false,
      gpxcx,
      gpxcxImg: false,
      logo: '',
      logo1,
      logo2,
      box1Img1,
      box1Img2,
      box1Img3,
      box1Img4,
      box1Img5,
      box1Img6,
      box1Img7,
      box1Img8,
      box1Data: [
        {
          img: box1Img1,
          tit: '论坛峰会',
          txt: 'Forum Summit',
        },
        {
          img: box1Img5,
          tit: '校园活动',
          txt: 'Campus Activities',
        },
        {
          img: box1Img3,
          tit: '培训招生',
          txt: 'Training The Admissions',
        },
        {
          img: box1Img4,
          tit: '发布会',
          txt: 'Conference',
        },
        {
          img: box1Img2,
          tit: '企业年会',
          txt: 'Enterprise Annual Meeting',
        },
        {
          img: box1Img6,
          tit: '户外出游',
          txt: 'The Outdoor',
        },
        {
          img: box1Img7,
          tit: '公司团建',
          txt: 'The Company An',
        },
        {
          img: box1Img8,
          tit: '聚会轰趴',
          txt: 'Party A Party',
        },
      ],
      // box2
      onBox2EventNum: 1,
      box2Data: [
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
          list: ['财务报表', '用户报表', '签到报表', '全渠道推广效果监测', '投票/调查结果统计'],
        },
      ],
      box3Index: 1,
      box3Data: ['一键发布，多个前端', '移动报名，轻松支付', '精准营销，有效传播', '嘉宾管理，省心省力', '电子签到，极速便捷', '数据报表，全面洞察'],
      box3Img1_1,
      box3Img1_2,
      box3Img1_3,
      box3Img2_1,
      box3Img2_2,
      box3Img2_3,
      box3Img3_1,
      box3Img3_2,
      box3Img3_3,
      box3Img4_1,
      box3Img4_2,
      box3Img4_3,
      box3Img5_1,
      box3Img5_2,
      box3Img5_3,
      box3Img6_1,
      box3Img6_2,
      box3Img6_3,
    };
  },
  created() {
    if (process.browser) {
      if (/(iPhone|iPod|iOS|Android|ipad)/i.test(navigator.userAgent)) {
        // var equipment = "wap";
        this.$router.push({
          path: '/m/meetup',
        });
      }
    }
  },
  methods: {
    box3Btn(e) {
      this.box3BtnIndex = e;
    },
    box4Btn(i) {
      this.box4Index = i;
    },
    goForm() {
      window.open('https://home.evente.cn/form/seltpl/0');
    },
    onBox2Event(e) {
      this.onBox2EventNum = e;
    },
    box3Btn(e) {
      this.box3Index = e;
      console.log(this.box3Index);
    },
    goacc() {
      // window.open('https://home.evente.cn/account/console');
      this.$refs.serviceRef.openTryout();
    },
    goRegister() {
      window.open('https://home.evente.cn/account/register');
    },
  },
  components: {
    FooterPc,
    // NavPc,
    Service,
  },
  beforeDestroy() {
  },
};
</script>

<style lang="scss">
  @import "../assets/styles/pc/meetup.scss";
</style>
