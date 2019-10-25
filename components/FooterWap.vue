<template>
  <div class="footer">
    <div class="footer-item" :class="{'footer-item-toggle': footerToggle1 }">
      <div class="footer-item-pennel" @click="footerBtn1"><span class="footer-item-pennel-tit">产品解决方案</span><span class="footer-item-pennel-icon" :class="{'footer-item-pennel-icon-t': footerToggle1}"></span></div>
      <transition name="fade">
        <div class="footer-item-menu" v-if="footerToggle1">
          <div class="footer-item-menu-item"><nuxt-link to="/commerce">票务电商</nuxt-link></div>
          <div class="footer-item-menu-item"><nuxt-link to="/program" no-prefetch>微官网/小程序</nuxt-link></div>
          <div class="footer-item-menu-item"><nuxt-link to="/meetup">会议/招生报名</nuxt-link></div>
          <div class="footer-item-menu-item" @click="goFormTools">表单问卷</div>
        </div>
      </transition>
    </div>

    <div class="footer-item" :class="{'footer-item-toggle': footerToggle2 }">
      <div class="footer-item-pennel" @click="footerBtn2"><span class="footer-item-pennel-tit">场景解决方案</span><span class="footer-item-pennel-icon" :class="{'footer-item-pennel-icon-t': footerToggle2}"></span></div>
      <transition name="fade">
        <div class="footer-item-menu" v-if="footerToggle2">
          <div class="footer-item-menu-item" @click="goJcjy">剧场剧院</div>
          <div class="footer-item-menu-item" @click="goYyxc">音乐现场</div>
          <div class="footer-item-menu-item" @click="goZlxx">展览休闲</div>
          <div class="footer-item-menu-item" @click="goTyss">体育赛事</div>
        </div>
      </transition>
    </div>

    <div class="footer-item" :class="{'footer-item-toggle': footerToggle3 }">
      <div class="footer-item-pennel" @click="footerBtn3"><span class="footer-item-pennel-tit">em活动学院</span><span class="footer-item-pennel-icon" :class="{'footer-item-pennel-icon-t': footerToggle3}"></span></div>
      <transition name="fade">
        <div class="footer-item-menu" v-if="footerToggle3">
          <div class="footer-item-menu-item" @click="goXsrm">新手入门</div>
          <div class="footer-item-menu-item" @click="goCzzn">操作指南</div>
          <div class="footer-item-menu-item" @click="goJjfa">解决方案</div>
        </div>
      </transition>
    </div>

    <div class="footer-item" :class="{'footer-item-toggle': footerToggle4 }">
      <div class="footer-item-pennel" @click="footerBtn4"><span class="footer-item-pennel-tit">关于em</span><span class="footer-item-pennel-icon" :class="{'footer-item-pennel-icon-t': footerToggle4}"></span></div>
      <transition name="fade">
        <div class="footer-item-menu" v-if="footerToggle4">
          <div class="footer-item-menu-item" @click="goAbout">公司简介</div>
          <div class="footer-item-menu-item" @click="goAbout">企业文化</div>
          <div class="footer-item-menu-item" @click="goAbout">加入我们</div>
          <div class="footer-item-menu-item" @click="goAbout">福利待遇</div>
        </div>
      </transition>
    </div>

    <div class="footer-item" :class="{'footer-item-toggle': footerToggle5 }">
      <div class="footer-item-pennel" @click="footerBtn5"><span class="footer-item-pennel-tit">em活动时</span><span class="footer-item-pennel-icon" :class="{'footer-item-pennel-icon-t': footerToggle5}"></span></div>
      <transition name="fade">
        <div class="footer-item-menu" v-if="footerToggle5">
          <div class="footer-item-menu-item" @click="goHome">活动易</div>
          <div class="footer-item-menu-item" @click="goJjt">景酒通</div>
          <div class="footer-item-menu-item">票大大</div>
          <div class="footer-item-menu-item">广告参谋</div>
          <div class="footer-item-menu-item">运营参谋</div>
          <div class="footer-item-menu-item">emPlusys</div>
        </div>
      </transition>
    </div>

    <div class="footer-details">
      <div class="footer-details-list"><span>客服电话：</span><a href="tel:400-0630260" class="footer-details-list-link">400-0630-260</a></div>
      <div class="footer-details-list"><span>客服时间：</span>周一至周五 9:30-18:30</div>
      <div class="footer-details-list"><span>北京总部：</span>北京市朝阳区工体北路8号三里屯SOHO</div>
      <div class="footer-details-list"><span>广州地址：</span>广州市番禺区汉溪大道时代E-park</div>
      <div class="footer-details-ewm">
        <dl>
          <dt><img :src="qrcode1" alt="" class="footer-details-ewm-img"></dt>
          <dd class="footer-details-ewm-tit">活动易公众号</dd>
        </dl>
        <dl>
          <dt><img :src="qrcode2" alt="" class="footer-details-ewm-img"></dt>
          <dd class="footer-details-ewm-tit">活动易APP</dd>
        </dl>
        <dl>
          <dt><img :src="qrcode3" alt="" class="footer-details-ewm-img"></dt>
          <dd class="footer-details-ewm-tit">em活动学院</dd>
        </dl>
      </div>
    </div>

    <div class="footer-address">
      京ICP证161244号 I 京ICP备14031733号-3©2019 <br>Evente.cn All Rights Reserved.
    </div>
  </div>
</template>

<script>
import qrcode1 from '../assets/images/components/wap/app.png';
import qrcode2 from '../assets/images/components/wap/xueyuan.png';
import qrcode3 from '../assets/images/components/wap/weixin.png';

export default {
  name: 'FooterWap',
  data() {
    return {
      footerToggle1: false,
      footerToggle2: false,
      footerToggle3: false,
      footerToggle4: false,
      footerToggle5: false,
      qrcode1,
      qrcode2,
      qrcode3,
    };
  },
  created() {

  },
  methods: {
    footerBtn1() {
      this.footerToggle1 = !this.footerToggle1;
    },
    footerBtn2() {
      this.footerToggle2 = !this.footerToggle2;
    },
    footerBtn3() {
      this.footerToggle3 = !this.footerToggle3;
    },
    footerBtn4() {
      this.footerToggle4 = !this.footerToggle4;
    },
    footerBtn5() {
      this.footerToggle5 = !this.footerToggle5;
    },
    // 跳首页
    goHome() {
      this.$router.push({
        path: '/m/',
      });
    },
    // 跳小程序页
    goProgram() {
      this.$router.push({
        path: '/m/program',
      });
    },
    // 跳关于我们
    goAbout() {
      this.$router.push({
        path: '/m/about',
      });
    },
    // 跳价格页
    goPrice() {
      this.$router.push({
        path: '/m/price',
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
        path: '/m/commerce',
      });
    },
    // 跳到表单工具
    goFormTools() {
      this.$router.push({
        path: '/m/formtools',
      });
    },
    // 跳到活动报名
    goMeetup() {
      this.$router.push({
        path: '/m/meetup',
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
@import "../assets/styles/components/footer-wap.scss";
</style>
