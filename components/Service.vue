<template>
  <div>
    <div class="service">
      <div class="service-icon"></div>
      <div class="service-zx" onclick="qimoChatClick();">
        <span class="service-txt">在线咨询</span>
      </div>
      <div class="service-tel">
        <span class="service-txt">电话咨询</span>
        <div class="service-tel-con">
          <div class="service-info">
            <div class="service-info-box">
              <div><span class="service-info-box-icon service-info-box-txt"></span><span class="service-info-box-txt1">客服电话</span><span class="service-info-box-txt2">每日09:30-18:30</span></div>
              <div class="service-info-box-bd"><a href="tel:400-0630260">400-0630260</a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="service-shape" @click="openTryout"><span class="service-txt">申请试用</span></div>
      <!-- <div class="service-shape"><span class="service-txt">申请试用</span></div> -->
      <!-- <div class="service-gotop" id="gotop" @click="runScroll"></div> -->
    </div>

    <!-- 申请试用 -->
    <div class="site-loyer" v-show="tryoutState"></div>
    <div class="site-tryout" v-show="tryoutState">
      <div class="site-tryout-wrap">
        <div class="site-tryout-wrap-close" @click="closeBtn">+</div>
        <div class="site-tryout-wrap-logo"><div class="site-tryout-wrap-logo-img"></div></div>
        <div class="site-tryout-wrap-title" v-text="appTitle"></div>
        <div class="site-tryout-wrap-form" v-if="!status">
          <div class="site-tryout-wrap-form-item">
            <span class="site-tryout-wrap-form-item-label">称呼</span><input type="text" placeholder="请输入您的称呼" class="site-tryout-wrap-form-item-input" v-model="useName">
          </div>
          <div class="site-tryout-wrap-form-item">
            <span class="site-tryout-wrap-form-item-label">单位</span><input type="text" placeholder="请输入您的公司名称（选填)" class="site-tryout-wrap-form-item-input" v-model="useCompany">
          </div>
          <div class="site-tryout-wrap-form-item">
            <span class="site-tryout-wrap-form-item-label">需求</span><input type="text" placeholder="请输入您的需求介绍（选填)" class="site-tryout-wrap-form-item-input" v-model="useDemand">
          </div>
          <div class="site-tryout-wrap-form-item">
            <span class="site-tryout-wrap-form-item-label">手机号</span><input type="text" placeholder="请输入您的联系电话" class="site-tryout-wrap-form-item-input" v-model="usePhone">
          </div>
        </div>
        <div class="site-tryout-wrap-status" v-if="status">
          <div class="site-tryout-wrap-status-txt">您已成功申请，稍后将有工作人员与您联系，请保持通信畅通。</div>
          <div class="site-tryout-wrap-status-icon"></div>
        </div>
        <button href="javascript:;" class="site-tryout-wrap-btn" :class="{'site-tryout-wrap-sub': useName != '' && usePhone != '', 'site-tryout-wrap-disble': useName === '' || usePhone === ''}" @click="submit">{{ btnTxt }}</button>
      </div>
    </div>
    <!-- ／申请试用 -->

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Service',
    data() {
      return {
        // 申请试用
        useName: '',
        usePhone: '',
        useCompany: '',
        useDemand: '',
        btnTxt: '立即申请',
        appTitle: '申请试用',
        status: false,
        tryoutState: false,
        api: '',
      };
    },
    components: {
      // goTop,
    },
    methods: {
      clg() {
        console.log('object');
      },
      runScroll() {
        scrollTo(document.body, 0, 600);
      },
      openTryout() {
        this.useName = '';
        this.usePhone = '';
        this.useCompany = '';
        this.useDemand = '';
        this.tryoutState = true;
        document.getElementsByTagName('html')[0].style.overflow = 'hidden';
      },
      closeBtn() {
        this.tryoutState = false;
        document.getElementsByTagName('html')[0].style.overflow = 'auto';
      },
      submit() {
        if (this.btnTxt !== 'OK!') {
          if (this.useName !== '' && this.usePhone !== '') {
            const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if (!myreg.test(this.usePhone)) {
              this.$EmfeMessage.error({
                content: '请输入有效的手机号码！',
              });
            } else {
              this.btnTxt = '提交中...';
              const obj = {
                nickname: this.useName,
                mobile: this.usePhone,
                company: this.useCompany,
                requirement: this.useDemand,
              };
              // siteApi.trying(obj).then((result) => {
              //   console.log(result, 1000);
              //   this.btnTxt = 'OK!';
              //   this.appTitle = '申请成功';
              //   this.status = true;
              // });
              switch (process.env.NODE_ENV) {
                case 'production':
                  this.api = 'https://gateway.evente.cn/';
                  break;
                default:
                  this.api = 'http://gateway.inner.evente.cn:8000/'
              }
              axios.create({
                timeout: 60000,
                withCredentials: this.api !== 'development',
              });
              axios.post(`${this.api}home/api/org/applies`, obj).then((res) => {
                console.log(res, 'res');
                this.dom = `${res.data.data.id}\n${res.data.code}\n${res.data.message}`;
                if(res.data.code === 10000) {
                  this.btnTxt = 'OK!';
                  this.appTitle = '申请成功';
                  this.status = true;
                }
              });
            }
          }
        } else {
          // this.$EmfeMessage.error({
          //   content: '您已提交过申请信息',
          // });
          this.closeBtn();
        }
      },
    }
  }
</script>