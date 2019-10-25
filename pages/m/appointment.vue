<template>
  <!-- 申请试用 -->
  <div class="tryout">
    <NavWap />
    <div class="tryout-wrap">
      <div class="tryout-wrap-logo"><div class="tryout-wrap-logo-img"></div></div>
      <div class="tryout-wrap-title" v-text="appTitle"></div>
      <div class="tryout-wrap-form" v-if="!status">
        <div class="tryout-wrap-form-item">
          <span class="tryout-wrap-form-item-label">称呼</span><input type="text" placeholder="请输入您的称呼" class="tryout-wrap-form-item-input" v-model="useName">
        </div>
        <div class="tryout-wrap-form-item">
          <span class="tryout-wrap-form-item-label">单位</span><input type="text" placeholder="请输入您的公司名称（选填)" class="tryout-wrap-form-item-input" v-model="useCompany">
        </div>
        <div class="tryout-wrap-form-item">
          <span class="tryout-wrap-form-item-label">需求</span><input type="text" placeholder="请输入您的需求介绍（选填)" class="tryout-wrap-form-item-input" v-model="useDemand">
        </div>
        <div class="tryout-wrap-form-item">
          <span class="tryout-wrap-form-item-label">手机号</span><input type="text" placeholder="请输入您的联系电话" class="tryout-wrap-form-item-input" v-model="usePhone" @focus="error = false">
        </div>
        <div class="tryout-wrap-form-error"><span v-if="error">请输入有效的手机号码！</span></div>
      </div>
      <div class="tryout-wrap-status" v-if="status">
        <div class="tryout-wrap-status-txt">您已成功申请，稍后将有工作人员与您联系，请保持通信畅通。</div>
        <div class="tryout-wrap-status-icon"></div>
      </div>
      <button href="javascript:;" class="tryout-wrap-btn" :class="{'tryout-wrap-sub': useName !== '' && usePhone !== '', 'tryout-wrap-disble': useName === '' || usePhone === ''}" @click="submit" v-if="btnTxt !== 'OK!'">{{ btnTxt }}</button>
    </div>
  </div>
  <!-- ／申请试用 -->
</template>
<script>

  import axios from 'axios';
  import logo from '../../assets/images/wap/wlogo1.png';
  import logo1 from '../../assets/images/wap/wlogo.png';
  import logo2 from '../../assets/images/wap/blogo.png';
  import NavWap from '@/components/NavWap.vue';

  export default {
    name: 'Appointment',
    data() {
      return {
        NavWap,
        logo,
        logo1,
        logo2,
        // 申请试用
        useName: '',
        usePhone: '',
        useCompany: '',
        useDemand: '',
        btnTxt: '立即申请',
        appTitle: '产品试用申请',
        status: false,
        error: false,
      };
    },
    created() {
      console.log(process.env.NODE_ENV, 'process.env.NODE_ENV');
      if (process.browser) {
        if (!/(iPhone|iPod|iOS|Android|ipad)/i.test(navigator.userAgent)) {
          // var equipment = "wap";
          this.$router.push({
            path: '/',
          });
        }
      }
    },
    methods: {
      submit() {
        if (this.btnTxt !== 'OK!') {
          console.log(2);
          if (this.useName !== '' && this.usePhone !== '') {
            const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if (!myreg.test(this.usePhone)) {
              this.error = true;
            } else {
              this.error = false;
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
        }
      },
    },
    components: {
      NavWap,
    },
  };
</script>
<style lang="scss">
  @import "../../assets/styles/wap/appointment.scss";
</style>
