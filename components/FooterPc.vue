<template>
  <footer class="evente-footer">
    <div class="evente-footer-content">
      <div class="evente-footer-phone">
        <div class="evente-footer-phone-num">400-0630-260</div>
        <div class="evente-footer-phone-date">周一至周五 9:30-18:30</div>
        <div class="evente-footer-phone-qrcode">
          <div v-for="(item, index) in qrData" :key="index" v-if="iconNum === (index+1)"><img class="evente-footer-phone-qrcode-img" :src="item.img" alt="">{{ item.tit }}</div>
        </div>
        <div class="evente-footer-phone-icon">
          <span class="evente-footer-phone-icon-list" v-for="(item, i) in iconDate" :key="i" :class="[`evente-footer-phone-icon-${i}`, iconNum === (i+1)? `evente-footer-phone-icon-${i}-act` : '']" @mouseenter="btnIcon(item)"></span>
        </div>
      </div>
      <div class="evente-footer-content-list evente-footer-content-one">
        <div class="evente-footer-content-list-tit">产品解决方案</div>
        <ul>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list" @click="goCommerce">票务电商</emfe-link></li>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list" @click="goFormTools">表单问卷</emfe-link></li>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list" @click="goMeetup">会议/招生报名</emfe-link></li>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list" @click="goProgram">微官网/小程序</emfe-link></li>
        </ul>
      </div>
      <div class="evente-footer-content-list evente-footer-content-two">
        <div class="evente-footer-content-list-tit">场景解决方案</div>
        <ul>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list" @click="goJcjy">剧场剧院</emfe-link></li>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list" @click="goYyxc">音乐现场</emfe-link></li>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list" @click="goZlxx">展览休闲</emfe-link></li>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list" @click="goTyss">体育赛事</emfe-link></li>
        </ul>
      </div>
      <div class="evente-footer-content-list evente-footer-content-three">
        <div class="evente-footer-content-list-tit">em活动学院</div>
        <ul>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list" @click="goXsrm">新手入门</emfe-link></li>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list" @click="goCzzn">操作指南</emfe-link></li>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list" @click="goJjfa">解决方案</emfe-link></li>
        </ul>
      </div>
      <div class="evente-footer-content-list evente-footer-content-four">
        <div class="evente-footer-content-list-tit">关于em</div>
        <ul>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list" @click="goAbout">公司简介</emfe-link></li>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list" @click="goAbout">企业文化</emfe-link></li>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list" @click="goAbout">加入我们</emfe-link></li>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list" @click="goAbout">福利待遇</emfe-link></li>
        </ul>
      </div>
      <div class="evente-footer-content-list">
        <div class="evente-footer-content-list-tit">em活动时</div>
        <ul>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list" @click="goHome">活动易</emfe-link></li>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list" @click="goJjt">景酒通</emfe-link></li>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list">票大大</emfe-link></li>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list">广告参谋</emfe-link></li>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list">运营参谋</emfe-link></li>
          <li class="evente-footer-content-list-item"><emfe-link :routers="{}" className="evente-footer-content-list">emPlusys</emfe-link></li>
        </ul>
      </div>
    </div>
    <div class="evente-footer-copyright">
      <div class="evente-footer-copyright-address">
        <span>北京总部：北京市朝阳区工体北路8号三里屯SOHO</span><span class="evente-footer-copyright-address-ml">广州地址：广州市番禺区汉溪大道时代E-park</span>
      </div>
      <div class="evente-footer-copyright-txt">
        京ICP证161244号 I 京ICP备14031733号-3©2019 Evente.cn All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script>
import qrcode1 from '../assets/images/components/pc/footer/app.png';
import qrcode2 from '../assets/images/components/pc/footer/xueyuan.png';
import qrcode3 from '../assets/images/components/pc/footer/weixin.png';

export default {
  name: 'FooterPc',
  data() {
    return {
      qrData: [
        {
          img: qrcode1,
          tit: '活动易APP',
        },
        {
          img: qrcode2,
          tit: 'em活动学院',
        },
        {
          img: qrcode3,
          tit: '活动易公众号',
        },
      ],
      iconDate: [1, 2, 3],
      iconNum: 1,
    };
  },
  created() {
  },
  methods: {
    btnIcon(index) {
      this.iconNum = index;
    },
    // 跳首页
    goHome() {
      this.$router.push({
        path: '/home',
      });
    },
    // 跳小程序页
    goProgram() {
      this.$router.push({
        path: '/program',
      });
    },
    // 跳关于我们
    goAbout() {
      this.$router.push({
        path: '/about',
      });
    },
    // 跳价格页
    goPrice() {
      this.$router.push({
        path: '/price',
      });
    },
    // 跳微博
    goWb() {
      window.open('https://weibo.com/u/2284242401');
    },
    // 跳登录
    gologin() {
      window.open('https://home.evente.cn/account/login');
    },
    // 跳报名
    sentEvent() {
      window.open('https://home.evente.cn/meetup/light');
    },
    // 跳后台
    goacc() {
      window.open('https://home.evente.cn/account/console');
    },
    // 跳学院
    goCollege() {
      window.location.href = `${process.env.COLLEGE}`;
    },
    // 跳到票务电商
    goCommerce() {
      this.$router.push({
        path: '/commerce',
      });
    },
    // 跳到表单工具
    goFormTools() {
      this.$router.push({
        path: '/formtools',
      });
    },
    // 跳到活动报名
    goMeetup() {
      this.$router.push({
        path: '/meetup',
      });
    },
    goJcjy() {
      window.open('https://college.evente.cn/17/19');
    },
    goYyxc() {
      window.open('https://college.evente.cn/17/21');
    },
    goZlxx() {
      window.open('https://college.evente.cn/17/20');
    },
    goTyss() {
      window.open('https://college.evente.cn/17/22');
    },
    goXsrm() {
      window.open('https://college.evente.cn/list/16');
    },
    goCzzn() {
      window.open('https://college.evente.cn/list/20');
    },
    goJjfa() {
      window.open('https://college.evente.cn/list/17');
    },
    goJjt() {
      window.open('http://www.jingjiutong.com/');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/footer-pc.scss";
</style>
