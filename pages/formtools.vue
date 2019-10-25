<template>
  <div class="evente-form">
    <navpc />

    <div class="evente-form-wrap">
      <div class="evente-form-wrap-banner">
        <div class="evente-form-wrap-banner-content">
          <div class="evente-form-wrap-banner-content-title">表单工具</div>
          <div class="evente-form-wrap-banner-content-txt">极简高效，人人都会用的表单工具</div>
          <emfe-button theme="primary" className="evente-form-wrap-banner-content" @click="goRegister">注册试用</emfe-button>
        </div>
      </div>
      <div class="evente-form-wrap-box1">
        <div class="evente-form-wrap-box1-tit">填问卷、收信息、做投票，小工具大用途</div>
        <div class="evente-form-wrap-box1-txt">解决各场景的数据收集任务</div>
        <div class="evente-form-wrap-box1-info">
          <dl class="evente-form-wrap-box1-info-item">
            <dt class="evente-form-wrap-box1-info-item-icon evente-form-wrap-box1-info-item-icon-1"></dt>
            <dd>
              <div class="evente-form-wrap-box1-info-item-tit">活动报名</div>
              <div class="evente-form-wrap-box1-info-item-txt">不管是在线报名还是签到验票，活动易都能为您提供贴心服务</div>
            </dd>
          </dl>
          <dl class="evente-form-wrap-box1-info-item">
            <dt class="evente-form-wrap-box1-info-item-icon evente-form-wrap-box1-info-item-icon-2"></dt>
            <dd>
              <div class="evente-form-wrap-box1-info-item-tit">问卷调查</div>
              <div class="evente-form-wrap-box1-info-item-txt">35种字段类型，帮您设计各种类型的问卷，专业逻辑问卷，功能更强</div>
            </dd>
          </dl>
          <dl class="evente-form-wrap-box1-info-item">
            <dt class="evente-form-wrap-box1-info-item-icon evente-form-wrap-box1-info-item-icon-3"></dt>
            <dd>
              <div class="evente-form-wrap-box1-info-item-tit">在线收款</div>
              <div class="evente-form-wrap-box1-info-item-txt">随时向用户发起收款，微信、支付宝、银联甚至外币均可实现</div>
            </dd>
          </dl>
          <dl class="evente-form-wrap-box1-info-item">
            <dt class="evente-form-wrap-box1-info-item-icon evente-form-wrap-box1-info-item-icon-4"></dt>
            <dd>
              <div class="evente-form-wrap-box1-info-item-tit">投票评选</div>
              <div class="evente-form-wrap-box1-info-item-txt">内部投票、外部评比均可使用，轻松选出民意所向</div>
            </dd>
          </dl>
        </div>
      </div>

      <div class="evente-form-wrap-tit">功能强大，1分钟创建一个满意的表单</div>
      <div class="evente-form-wrap-txt">搭积木一样，拖拽式的设计表单结构，<br>数千款表单模板，多种精美主题样式让表单实用又精致。</div>

      <div class="evente-form-wrap-box2">
        <div class="evente-form-wrap-box2-info">
          <div class="evente-form-wrap-box2-info-text evente-form-wrap-left">
            <div class="evente-form-wrap-box2-info-text-tit">近40种功能组件</div>
            <div class="evente-form-wrap-box2-info-text-txt">单选、多选、填空、地址、图片、附件上传等多种组件，个性化的设置，构建符合业务需求的表单页面。</div>
          </div>
          <img v-lazy="box2Img" alt=""class="evente-form-wrap-box2-info-img evente-form-wrap-right">
        </div>
      </div>

      <div class="evente-form-wrap-box2 evente-form-wrap-box2-2">
        <div class="evente-form-wrap-box2-info">
          <div class="evente-form-wrap-box2-info-text evente-form-wrap-right">
            <div class="evente-form-wrap-box2-info-text-tit">积木式快捷设计</div>
            <div class="evente-form-wrap-box2-info-text-txt">可自由拖拉的组件，像搭积木一样，甚至组件宽度、摆放结构都可自定义。让你的制表功力，漂亮的不像实力派！</div>
          </div>
          <img v-lazy="box2Img2" alt=""class="evente-form-wrap-box2-info-img evente-form-wrap-left">
        </div>
      </div>

      <div class="evente-form-wrap-box2 evente-form-wrap-box2-3">
        <div class="evente-form-wrap-box2-info">
          <div class="evente-form-wrap-box2-info-text evente-form-wrap-left">
            <div class="evente-form-wrap-box2-info-text-tit">个性化自定义外观</div>
            <div class="evente-form-wrap-box2-info-text-txt">表单支持自由定义背景、头图，按钮、提交成功文字及图片显示，微信分享定制，设计出独有的精美页面，还可自动生成邀请海报，方便传播。</div>
          </div>
          <img v-lazy="box2Img3" alt=""class="evente-form-wrap-box2-info-img evente-form-wrap-right">
        </div>
      </div>

      <div class="evente-form-wrap-box2 evente-form-wrap-box2-4">
        <div class="evente-form-wrap-box2-info">
          <div class="evente-form-wrap-box2-info-text evente-form-wrap-right">
            <div class="evente-form-wrap-box2-info-text-tit">小程序 + 电脑端</div>
            <div class="evente-form-wrap-box2-info-text-txt">在小程序上创建表单，自动同步电脑端，分享、查看数据和报表，支持移动化办公需求。</div>
          </div>
          <img v-lazy="box2Img4" alt=""class="evente-form-wrap-box2-info-img evente-form-wrap-left">
        </div>
      </div>

      <div class="evente-form-wrap-box3">
        <div class="evente-form-wrap-tit">功能增强，把表单升级为数据收集系统</div>
        <div class="evente-form-wrap-txt">在线收款、逻辑规则、多终端管理，把表单升级为数据收集系统</div>
        <div class="evente-form-wrap-box3-info">
          <div class="evente-form-wrap-box3-info-tab evente-form-wrap-left">
            <ul>
              <li class="evente-form-wrap-box3-info-tab-item" :class="{'evente-form-wrap-box3-info-tab-item-active': box3BtnIndex === 1}" @mouseenter="box3Btn(1)">
                <div class="evente-form-wrap-box3-info-tab-item-tit">在线收款，即时到账</div>
                <div class="evente-form-wrap-box3-info-tab-item-txt">随时向用户发起收款，微信、支付宝、银联甚至外币均可实现（需开通对应的支付方式）</div>
              </li>
              <li class="evente-form-wrap-box3-info-tab-item" :class="{'evente-form-wrap-box3-info-tab-item-active': box3BtnIndex === 2}" @mouseenter="box3Btn(2)">
                <div class="evente-form-wrap-box3-info-tab-item-tit">核销凭证，唯一码入场</div>
                <div class="evente-form-wrap-box3-info-tab-item-txt">用户提交后，将收到核销二维码凭证，现场核销才可</div>
              </li>
              <li class="evente-form-wrap-box3-info-tab-item" :class="{'evente-form-wrap-box3-info-tab-item-active': box3BtnIndex === 3}" @mouseenter="box3Btn(3)">
                <div class="evente-form-wrap-box3-info-tab-item-tit">逻辑规则，智能展示</div>
                <div class="evente-form-wrap-box3-info-tab-item-txt">根据表单提交者的不同回答显示不同的自定义消息，根据选择的结果，表单实现智能化的展示和页面跳转。</div>
              </li>
            </ul>
          </div>
          <div class="evente-form-wrap-box3-info-img">
            <img :src="box3Img1" alt="" v-if="box3BtnIndex === 1">
            <img :src="box3Img2" alt="" v-if="box3BtnIndex === 2">
            <img :src="box3Img3" alt="" v-if="box3BtnIndex === 3">
            <img :src="box3Img4" alt="" v-if="box3BtnIndex === 4">
            <img :src="box3Img5" alt="" v-if="box3BtnIndex === 5">
            <img :src="box3Img6" alt="" v-if="box3BtnIndex === 6">
          </div>
          <div class="evente-form-wrap-box3-info-tab evente-form-wrap-right">
            <ul>
              <li class="evente-form-wrap-box3-info-tab-item" :class="{'evente-form-wrap-box3-info-tab-item-active': box3BtnIndex === 4}" @mouseenter="box3Btn(4)">
                <div class="evente-form-wrap-box3-info-tab-item-tit">手机号验真，确保真实</div>
                <div class="evente-form-wrap-box3-info-tab-item-txt">收集手机号时启动验证码功能，确保手机号的真实性和唯一性。</div>
              </li>
              <li class="evente-form-wrap-box3-info-tab-item" :class="{'evente-form-wrap-box3-info-tab-item-active': box3BtnIndex === 5}" @mouseenter="box3Btn(5)">
                <div class="evente-form-wrap-box3-info-tab-item-tit">正则验证，确保数据规则</div>
                <div class="evente-form-wrap-box3-info-tab-item-txt">勾选设置后，系统会验证用户填写的QQ、邮箱、身份证、IP地址、网址等是否符合设定的规则，确保您的数据符合收集标准。</div>
              </li>
              <li class="evente-form-wrap-box3-info-tab-item" :class="{'evente-form-wrap-box3-info-tab-item-active': box3BtnIndex === 6}" @mouseenter="box3Btn(6)">
                <div class="evente-form-wrap-box3-info-tab-item-tit">自定义短信签名，群发短信</div>
                <div class="evente-form-wrap-box3-info-tab-item-txt">通过单表单或联系人，向已收集的所有数据群发短信。</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="evente-form-wrap-box4">
        <div class="evente-form-wrap-box4-tit">数据和报表</div>
        <div class="evente-form-wrap-box4-txt">让数据为你所用，专业图表展示数据价值</div>
        <div class="evente-form-wrap-box4-info">
          <div class="evente-form-wrap-box4-info-tab">
            <div v-for="(item, index) in box4Tab" :key="'box4_'+index" class="evente-form-wrap-box4-info-tab-item" :class="{'evente-form-wrap-box4-info-tab-item-active': box4Index === (index+1)}" @mouseenter="box4Btn(index+1)">
              <div class="evente-form-wrap-box4-info-tab-item-tit" v-text="item.tit"></div>
              <div class="evente-form-wrap-box4-info-tab-item-txt" v-text="item.txt"></div>
            </div>
          </div>
          <div class="evente-form-wrap-box4-info-tab-img">
            <!-- <transition name="fade"> -->
              <img v-lazy="item.img" alt="" v-for="(item, index) in box4Tab" :key="'box4_img_'+index" v-show="box4Index === (index+1)">
            <!-- </transition> -->
          </div>
        </div>
      </div>

      <div class="evente-form-wrap-box5">
        <div class="evente-form-wrap-tit">解锁高级功能，让表单系统更强大</div>
        <div class="evente-form-wrap-box5-info">
          <dl class="evente-form-wrap-box5-info-item" v-for="(item, index) in box5Data" :key="'box5'+index">
            <dt class="evente-form-wrap-box5-info-item-icon" :class="'evente-form-wrap-box5-info-item-icon-'+(index+1)"></dt>
            <dd>
              <div class="evente-form-wrap-box5-info-item-tit" v-text="item.tit"></div>
              <div class="evente-form-wrap-box5-info-item-txt" v-text="item.txt"></div>
            </dd>
          </dl>
        </div>
      </div>

      <div class="evente-form-wrap-box6">
        <div class="evente-form-wrap-tit">多场景模板，让您工作更智慧</div>
        <div class="evente-form-wrap-box6-info">
          <div class="evente-form-wrap-box6-info-item" @click="goForm">
            <div class="evente-form-wrap-box6-info-item-tit">报名类</div>
            <img v-lazy="box6Img1" alt="" class="evente-form-wrap-box6-info-item-img">
            <emfe-link :routers="{}">点击创建表单>></emfe-link>
          </div>
          <div class="evente-form-wrap-box6-info-item" @click="goForm">
            <div class="evente-form-wrap-box6-info-item-tit">问卷类</div>
            <img v-lazy="box6Img2" alt="" class="evente-form-wrap-box6-info-item-img">
            <emfe-link :routers="{}">点击创建表单>></emfe-link>
          </div>
          <div class="evente-form-wrap-box6-info-item" @click="goForm">
            <div class="evente-form-wrap-box6-info-item-tit">投票类</div>
            <img v-lazy="box6Img3" alt="" class="evente-form-wrap-box6-info-item-img">
            <emfe-link :routers="{}">点击创建表单>></emfe-link>
          </div>
        </div>
      </div>

      <div class="evente-form-wrap-box7">
        <div class="evente-form-wrap-box7-tit">赶快创建您的第一个表单吧</div>
        <div class="evente-form-wrap-box7-txt">上万用户正在使用活动易表单</div>
        <div class="evente-form-wrap-box7-btn" @click="goForm">立即使用</div>
      </div>


    </div>

    <!-- 底部 -->
    <FooterPc />
    <Service />
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
import box2Img from '../assets/images/pc/form/box2/img1.png';
import box2Img2 from '../assets/images/pc/form/box2/img2.png';
import box2Img3 from '../assets/images/pc/form/box2/img3.png';
import box2Img4 from '../assets/images/pc/form/box2/img4.png';
import box3Img1 from '../assets/images/pc/form/box3/1.png';
import box3Img2 from '../assets/images/pc/form/box3/2.png';
import box3Img3 from '../assets/images/pc/form/box3/3.png';
import box3Img4 from '../assets/images/pc/form/box3/4.png';
import box3Img5 from '../assets/images/pc/form/box3/5.png';
import box3Img6 from '../assets/images/pc/form/box3/6.png';
import box4Img1 from '../assets/images/pc/form/box4/img1.png';
import box4Img2 from '../assets/images/pc/form/box4/img2.png';
import box4Img3 from '../assets/images/pc/form/box4/img3.png';
import box6Img1 from '../assets/images/pc/form/box6/img1.png';
import box6Img2 from '../assets/images/pc/form/box6/img2.png';
import box6Img3 from '../assets/images/pc/form/box6/img3.png';

export default {
  name: 'FormTools',
  data() {
    return {
      FooterPc,
      // NavPc,
      Service,
      box2Img,
      box2Img2,
      box2Img3,
      box2Img4,
      box3Img1,
      box3Img2,
      box3Img3,
      box3Img4,
      box3Img5,
      box3Img6,
      box3BtnIndex: 1,
      box4Index: 1,
      box4Img1,
      box4Img2,
      box4Img3,
      box4Tab: [
        {
          tit: '可视化图表一目了然',
          txt: '即时统计，自动数据统计分析，真正用数据说话，从数据中透析真实意义。',
          img: box4Img1,
        },
        {
          tit: '数据导出分析',
          txt: '你可以轻松将原始导出分析，或批量打印高质量文件进行存档。',
          img: box4Img2,
        },
        {
          tit: '访问统计',
          txt: '对浏览次数、访客人数、收集数量、表单转化率、收款情况进行统计',
          img: box4Img3,
        },
      ],
      box5Data: [
        {
          tit: '密码保护',
          txt: '用户需要输入访问密码，可访问此表单',
        },
        {
          tit: '访问限制',
          txt: '可选择开启或关闭手机端、微信端、pc端访问限制',
        },
        {
          tit: '消息提醒',
          txt: '短信、微信实时数据提醒，不错过任何一条重要信息',
        },
        {
          tit: '定时收集',
          txt: '表单只在限定时间内可填写',
        },
        {
          tit: '收集限额',
          txt: '将限定收集总数，达到时停止表单收集',
        },
        {
          tit: '成功按钮',
          txt: '用户提交完可设置按钮引导关注官网、商城、领取优惠券等',
        },
        {
          tit: '表单二维码',
          txt: '自动生成二维码,扫一扫填写',
        },
      ],
      box6Img1,
      box6Img2,
      box6Img3,
      box3BtnIndexTime: null,
    };
  },
  created() {
    if (process.browser) {
      if (/(iPhone|iPod|iOS|Android|ipad)/i.test(navigator.userAgent)) {
        // var equipment = "wap";
        this.$router.push({
          path: '/m/formtools',
        });
      }
    }
    this.box3Fn();
  },
  methods: {
    box3Fn() {
      this.box3BtnIndexTime = setInterval(() => {
        this.box3BtnIndex = this.box3BtnIndex + 1;
        if(this.box3BtnIndex > 6) {
          this.box3BtnIndex = 1;
        }
      }, 5000);
    },
    box3Btn(e) {
      this.box3BtnIndexTime = null;
      this.box3BtnIndex = e;
    },
    box3BtnOut(e) {
      this.box3Fn();
    },
    box4Btn(i) {
      this.box4Index = i;
    },
    goForm() {
      window.open('https://home.evente.cn/form/seltpl/0');
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
    this.box3BtnIndexTime = null;
  },
};
</script>

<style lang="scss">
  @import "../assets/styles/pc/form.scss";
</style>
