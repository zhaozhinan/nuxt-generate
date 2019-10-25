<template>
  <div class="program">
    <NavWap />

    <div class="program-page">
      <div class="program-page-banner">
        <div class="program-page-banner-box">
          <div class="program-page-banner-box-bd">
            <div class="program-page-banner-box-bd-tit">小程序</div>
            <div class="program-page-banner-box-bd-txt">每个主办都拥有自己专属的小程序</div>
            <ul class="program-page-banner-box-bd-m">
              <li class="program-page-banner-box-bd-item"><i class="program-page-banner-box-bd-item-icon program-page-banner-box-bd-item-icon1"></i><span class="program-page-banner-box-bd-item-txt">快速搭建</span></li>
              <li class="program-page-banner-box-bd-item"><i class="program-page-banner-box-bd-item-icon program-page-banner-box-bd-item-icon2"></i><span class="program-page-banner-box-bd-item-txt">无需开发</span></li>
              <li class="program-page-banner-box-bd-item"><i class="program-page-banner-box-bd-item-icon program-page-banner-box-bd-item-icon3"></i><span class="program-page-banner-box-bd-item-txt">行业定制</span></li>
            </ul>
          </div>
        </div>
        <div class="program-page-banner-lottie"><div id="lottie"></div></div>
      </div>

      <div class="program-page-module">
        <div class="program-page-module-title">聚集微信流量红利，小程序助你轻松获客、裂变、复购</div>
        <div class="program-page-module-box">
          <div class="program-page-module-box-1-wrap">
            <dl class="program-page-module-box-1">
              <dt class="program-page-module-box-1-dt program-page-module-box-1-dt-1"></dt>
              <dd class="program-page-module-box-1-dd">
                <div class="program-page-module-box-1-dd-tit">6大入口<br>实现快速获客</div>
              </dd>
            </dl>
            <dl class="program-page-module-box-1">
              <dt class="program-page-module-box-1-dt program-page-module-box-1-dt-3"></dt>
              <dd class="program-page-module-box-1-dd">
                <div class="program-page-module-box-1-dd-tit">体验更佳<br>提升付费转化</div>
              </dd>
            </dl>
          </div>
          <div class="program-page-module-box-1-wrap">
            <dl class="program-page-module-box-1">
              <dt class="program-page-module-box-1-dt program-page-module-box-1-dt-2"></dt>
              <dd class="program-page-module-box-1-dd">
                <div class="program-page-module-box-1-dd-tit">一体化营销<br>生态加速流量裂变</div>
              </dd>
            </dl>
            <dl class="program-page-module-box-1">
              <dt class="program-page-module-box-1-dt program-page-module-box-1-dt-4"></dt>
              <dd class="program-page-module-box-1-dd">
                <div class="program-page-module-box-1-dd-tit">自主收款<br>微信支付直接到账</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="program-page-module" id="program-num">
        <div class="program-page-module-title">活动易直销小程序，助力主办业绩翻番</div>
        <div class="program-page-module-box program-page-module-box-2-wrap">
          <div class="program-page-module-box-2">
            <div class="program-page-module-box-2-num"><span class="program-page-module-box-2-num-txt" v-text="num1"></span>%</div>
            <div class="program-page-module-box-2-txt">付款成功率提升</div>
            <div class="program-page-module-box-2-img" :style="{heightnum: + numbg1 / 75 + 'rem'}"></div>
          </div>
          <div class="program-page-module-box-2">
            <div class="program-page-module-box-2-num"><span class="program-page-module-box-2-num-txt" v-text="num2"></span>%</div>
            <div class="program-page-module-box-2-txt">成交总额提升</div>
            <div class="program-page-module-box-2-img" :style="{heightnum: + (numbg2 * 2.5)  / 75 + 'rem'}"></div>
          </div>
          <div class="program-page-module-box-2">
            <div class="program-page-module-box-2-num"><span class="program-page-module-box-2-num-txt" v-text="num3"></span>%</div>
            <div class="program-page-module-box-2-txt">复购率提升至</div>
            <div class="program-page-module-box-2-img" :style="{heightnum: + numbg3 / 75 + 'rem'}"></div>
          </div>
        </div>
      </div>

      <div class="program-page-module">
        <div class="program-page-module-title">丰富的行业模板和装修组件，自主灵活搭建店铺</div>
        <div class="program-page-module-box">
          <div class="program-page-module-box-3">
            <!-- swipe -->
            <div class="swiper-container gallery-top">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, i) in swipe1Img" :key="i">
                  <div class="swiper-slide-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
                  <div class="swiper-slide-tit" v-text="item.tit"></div>
                  <div class="swiper-slide-txt" v-text="item.txt"></div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="program-page-module">
        <div class="program-page-module-title">搭配多种的裂变促销手段大大提升用户下单率</div>
        <div class="program-page-module-box">
          <dl class="program-page-module-box-4">
            <dt class="program-page-module-box-4-dt program-page-module-box-4-dt1"></dt>
            <dd class="program-page-module-box-4-dd">
              <div class="program-page-module-box-4-dd-tit">裂变工具</div>
            </dd>
          </dl>
          <dl class="program-page-module-box-4">
            <dt class="program-page-module-box-4-dt program-page-module-box-4-dt2"></dt>
            <dd class="program-page-module-box-4-dd">
              <div class="program-page-module-box-4-dd-tit">促销工具</div>
            </dd>
          </dl>
          <dl class="program-page-module-box-4">
            <dt class="program-page-module-box-4-dt program-page-module-box-4-dt3"></dt>
            <dd class="program-page-module-box-4-dd">
              <div class="program-page-module-box-4-dd-tit">更多玩法</div>
            </dd>
          </dl>
        </div>
      </div>

      <div class="program-page-module">
        <div class="program-page-module-box-5">
          <div class="swiper-container swiper-container5">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, i) in swipe2Img" :key="i" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
            </div>
            <div class="program-page-module-box-5-loyer"></div>
          </div>
        </div>
      </div>

      <div class="program-page-module">
        <div class="program-page-module-title">鼓励用户成为会员<br>大幅提升粉丝复购率</div>
        <div class="program-page-module-box">
          <div class="program-page-module-box-6">
            <!-- swipe -->
            <div class="swiper-container gallery-top3">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, i) in swipe3Img" :key="i">
                  <div class="swiper-slide-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
                  <div class="swiper-slide-tit" v-text="item.tit"></div>
                  <div class="swiper-slide-txt" v-text="item.txt"></div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
            <!-- /swipe -->
          </div>
        </div>
      </div>

      <div class="program-page-module">
        <div class="program-page-module-title">他们都在用活动易小程序</div>
        <div class="program-page-module-box-7">
          <ul class="program-page-module-box-7-top">
            <li class="program-page-module-box-7-top-item" :class="{'program-page-module-box-7-top-item-act': item.cur === true}" v-for="(item, index) in box7Tab"><span class="program-page-module-box-7-top-item-dom" v-text="item.txt" @click="box7TabBtn(item, index)"></span></li>
          </ul>
          <div class="swiper-container gallery-top4">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="program-page-module-box-7-con">
                  <div class="program-page-module-box-7-con-left">
                    <div v-for="(item, i) in allData" :key="i"  v-if="allIndex === i">
                      <div class="program-page-module-box-7-con-left-tit">{{ item.tit }}</div>
                      <div class="program-page-module-box-7-con-left-txt">{{ item.txt }}</div>
                      <img v-lazy="item.xcx" class="program-page-module-box-7-con-left-xcx">
                      <div class="program-page-module-box-7-con-left-xcx-txt">—微信扫码体验—</div>
                    </div>
                  </div>
                  <div class="program-page-module-box-7-con-right">
                    <img v-for="(item, i) in allData" :key="i" v-lazy="item.right" v-if="allIndex === i">
                  </div>
                  <ul class="program-page-module-box-7-con-left-tab">
                      <li class="program-page-module-box-7-con-left-tab-item" v-for="(item, i) in allIcon" :key="i" @mouseover="allBtn(i)" :class="{'program-page-module-box-7-con-left-tab-item-act': allIndex === i}"><img v-lazy="item"></li>
                    </ul>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="program-page-module-box-7-con">
                  <div class="program-page-module-box-7-con-left">
                    <div v-for="(item, i) in jcjyData" :key="i"  v-if="jcjyIndex === i">
                      <div class="program-page-module-box-7-con-left-tit">{{ item.tit }}</div>
                      <div class="program-page-module-box-7-con-left-txt">{{ item.txt }}</div>
                      <img v-lazy="item.xcx" class="program-page-module-box-7-con-left-xcx">
                      <div class="program-page-module-box-7-con-left-xcx-txt">—微信扫码体验—</div>
                    </div>
                  </div>
                  <div class="program-page-module-box-7-con-right">
                    <img v-for="(item, i) in jcjyData" :key="i" v-lazy="item.right" v-if="jcjyIndex === i">
                  </div>
                  <ul class="program-page-module-box-7-con-left-tab">
                      <li class="program-page-module-box-7-con-left-tab-item" v-for="(item, i) in jcjyIcon" :key="i" @mouseover="jcjyBtn(i)" :class="{'program-page-module-box-7-con-left-tab-item-act': jcjyIndex === i}"><img v-lazy="item"></li>
                    </ul>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="program-page-module-box-7-con">
                  <div class="program-page-module-box-7-con-left">
                    <div v-for="(item, i) in zhhdData" :key="i"  v-if="zhhdIndex === i">
                      <div class="program-page-module-box-7-con-left-tit">{{ item.tit }}</div>
                      <div class="program-page-module-box-7-con-left-txt">{{ item.txt }}</div>
                      <img v-lazy="item.xcx" class="program-page-module-box-7-con-left-xcx">
                      <div class="program-page-module-box-7-con-left-xcx-txt">—微信扫码体验—</div>
                    </div>
                  </div>
                  <div class="program-page-module-box-7-con-right">
                    <img v-for="(item, i) in zhhdData" :key="i" v-lazy="item.right" v-if="zhhdIndex === i">
                  </div>
                  <ul class="program-page-module-box-7-con-left-tab">
                      <li class="program-page-module-box-7-con-left-tab-item" v-for="(item, i) in zhhdIcon" :key="i" @mouseover="zhhdBtn(i)" :class="{'program-page-module-box-7-con-left-tab-item-act': zhhdIndex === i}"><img v-lazy="item"></li>
                    </ul>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="program-page-module-box-7-con">
                  <div class="program-page-module-box-7-con-left">
                    <div v-for="(item, i) in ychData" :key="i"  v-if="ychIndex === i">
                      <div class="program-page-module-box-7-con-left-tit">{{ item.tit }}</div>
                      <div class="program-page-module-box-7-con-left-txt">{{ item.txt }}</div>
                      <img v-lazy="item.xcx" class="program-page-module-box-7-con-left-xcx">
                      <div class="program-page-module-box-7-con-left-xcx-txt">—微信扫码体验—</div>
                    </div>
                  </div>
                  <div class="program-page-module-box-7-con-right">
                    <img v-for="(item, i) in ychData" :key="i" v-lazy="item.right" v-if="ychIndex === i">
                  </div>
                  <ul class="program-page-module-box-7-con-left-tab">
                      <li class="program-page-module-box-7-con-left-tab-item" v-for="(item, i) in ychIcon" :key="i" @mouseover="ychBtn(i)" :class="{'program-page-module-box-7-con-left-tab-item-act': ychIndex === i}"><img v-lazy="item"></li>
                    </ul>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="program-page-module-box-7-con">
                  <div class="program-page-module-box-7-con-left">
                    <div v-for="(item, i) in yyjData" :key="i"  v-if="yyjIndex === i">
                      <div class="program-page-module-box-7-con-left-tit">{{ item.tit }}</div>
                      <div class="program-page-module-box-7-con-left-txt">{{ item.txt }}</div>
                      <img v-lazy="item.xcx" class="program-page-module-box-7-con-left-xcx">
                      <div class="program-page-module-box-7-con-left-xcx-txt">—微信扫码体验—</div>
                    </div>
                  </div>
                  <div class="program-page-module-box-7-con-right">
                    <img v-for="(item, i) in yyjData" :key="i" v-lazy="item.right" v-if="yyjIndex === i">
                  </div>
                  <ul class="program-page-module-box-7-con-left-tab">
                    <li class="program-page-module-box-7-con-left-tab-item" v-for="(item, i) in yyjIcon" :key="i" @mouseover="yyjBtn(i)" :class="{'program-page-module-box-7-con-left-tab-item-act': yyjIndex === i}"><img v-lazy="item"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="program-page-module">
        <div class="program-page-module-title program-page-module-title-8">四步快速搭建你的小程序店铺</div>
        <ul class="program-page-module-box-8">
          <li class="program-page-module-box-8-item1"><div class="program-page-module-box-8-txt">注册活动易账号</div><i class="program-page-module-box-8-icon"></i></li>
          <li class="program-page-module-box-8-item2"><div class="program-page-module-box-8-txt">前往微信公众平台注册小程序，<br>并授权给活动易</div><i class="program-page-module-box-8-icon"></i></li>
          <li class="program-page-module-box-8-item3"><div class="program-page-module-box-8-txt">选择并应用小程序模板，装修你<br>的店铺</div><i class="program-page-module-box-8-icon"></i></li>
          <li class="program-page-module-box-8-item4"><div class="program-page-module-box-8-txt">发布并上架活动，开始售票</div><i class="program-page-module-box-8-icon"></i></li>
        </ul>
      </div>


      <div class="program-page-module">
        <div class="program-page-module-box-9">
          <div class="program-page-module-box-9-tit">不会装修？</div>
          <div class="program-page-module-box-9-txt">联系活动易客服限时免费装修</div>
          <a href="javascript:;" class="program-page-module-box-9-btn" v-if="!xcxEnv" onclick="qimoChatClick();">立即咨询</a>
        </div>
      </div>

    </div>

    <FooterWap />
    <div class="program-page-btn-hide" :class="{'program-page-btn-act': registerBtn}" v-if="!xcxEnv"><a v-if="registerBtn" href="javascript:;" class="program-page-btn" onclick="qimoChatClick();">立即咨询</a></div>
  </div>
</template>
<script>

  // import Swiper from 'swiper';
  import NavWap from '@/components/NavWap.vue';
  import FooterWap from '@/components/FooterWap.vue';
  import appewm from '../../assets/images/wap/appewm.png';
  import xcx from '../../assets/images/wap/xcx.png';
  import swipe1 from '@/assets/images/wap/program/swipe1/1.png';
  import swipe2 from '@/assets/images/wap/program/swipe1/2.png';
  import swipe3 from '@/assets/images/wap/program/swipe1/3.png';
  import swipe4 from '@/assets/images/wap/program/swipe1/4.png';
  import swipe5 from '@/assets/images/wap/program/swipe1/5.png';
  // import swipe6 from '@/assets/images/wap/program/swipe1/6.png';
  import swipeB1 from '@/assets/images/pc/program/swipe2/1.png';
  import swipeB2 from '@/assets/images/pc/program/swipe2/2.png';
  import swipeB3 from '@/assets/images/pc/program/swipe2/3.png';
  import swipeB4 from '@/assets/images/pc/program/swipe2/4.png';
  import swipeB5 from '@/assets/images/pc/program/swipe2/5.png';
  import swipeC1 from '@/assets/images/wap/program/swipe3/1.png';
  import swipeC2 from '@/assets/images/wap/program/swipe3/2.png';
  import swipeC3 from '@/assets/images/wap/program/swipe3/3.png';
  import swipeC4 from '@/assets/images/wap/program/swipe3/4.png';
  import xcx1 from '@/assets/images/pc/program/box7/xcx/1.png';
  import icon1 from '@/assets/images/pc/program/box7/icon/1.png';
  import box71 from '@/assets/images/pc/program/box7/right/1.png';
  import xcx2 from '@/assets/images/pc/program/box7/xcx/2.png';
  import icon2 from '@/assets/images/pc/program/box7/icon/2.png';
  import box72 from '@/assets/images/pc/program/box7/right/2.png';
  import xcx3 from '@/assets/images/pc/program/box7/xcx/3.png';
  import icon3 from '@/assets/images/pc/program/box7/icon/3.png';
  import box73 from '@/assets/images/pc/program/box7/right/3.png';
  import xcx4 from '@/assets/images/pc/program/box7/xcx/4.png';
  import icon4 from '@/assets/images/pc/program/box7/icon/4.png';
  import box74 from '@/assets/images/pc/program/box7/right/4.png';
  import xcx5 from '@/assets/images/pc/program/box7/xcx/5.png';
  import icon5 from '@/assets/images/pc/program/box7/icon/5.png';
  import box75 from '@/assets/images/pc/program/box7/right/5.png';
  import xcx6 from '@/assets/images/pc/program/box7/xcx/6.png';
  import icon6 from '@/assets/images/pc/program/box7/icon/6.png';
  import box76 from '@/assets/images/pc/program/box7/right/6.png';
  import xcx7 from '@/assets/images/pc/program/box7/xcx/7.png';
  import icon7 from '@/assets/images/pc/program/box7/icon/7.png';
  import box77 from '@/assets/images/pc/program/box7/right/7.png';
  import xcx8 from '@/assets/images/pc/program/box7/xcx/8.png';
  import icon8 from '@/assets/images/pc/program/box7/icon/8.png';
  import box78 from '@/assets/images/pc/program/box7/right/8.png';
  import box9 from '@/assets/images/pc/program/bg9.png';
  import box9Hover from '@/assets/images/pc/program/bg9hover.png';
  import gzhtc from '../../assets/images/wap/gzhtc.png';
  import banner0 from '@/assets/images/pc/program/banner/img_0.png';
  import banner1 from '@/assets/images/pc/program/banner/img_1.png';
  import banner2 from '@/assets/images/pc/program/banner/img_2.png';
  import banner3 from '@/assets/images/pc/program/banner/img_3.png';
  import banner4 from '@/assets/images/pc/program/banner/img_4.png';
  import banner5 from '@/assets/images/pc/program/banner/img_5.png';
  require('../../tools/banner.js');

  export default {
    name: 'Program',
    data() {
      return {
        NavWap,
        FooterWap,
        banner0,
        banner1,
        banner2,
        banner3,
        banner4,
        banner5,
        gzhtc,
        appewm,
        xcx,
        scrollData: 0,
        num1: 0,
        num2: 0,
        num3: 0,
        numbg1: 0,
        numbg2: 0,
        numbg3: 0,
        // swipe1
        galleryTop: '',
        swipe1Img: [
          {
            img: swipe1,
            tit: '店铺模板',
            txt: '10+行业模板，整体配套使用',
          },
          {
            img: swipe2,
            tit: '功能组件',
            txt: '20种基础组件和营销组件，组合灵活',
          },
          {
            img: swipe3,
            tit: '分类导航',
            txt: '自定义底菜单、图片导航，分类展示',
          },
          {
            img: swipe4,
            tit: '全店风格',
            txt: '主题色、背景色、图标色自由搭配',
          },
          {
            img: swipe5,
            tit: '品牌露出',
            txt: '支持头像logo、主办名露出，树立官方品牌',
          },
          // {
          //   img: swipe6,
          //   tit: '',
          //   txt: '',
          // },
        ],
        // 手机壳swipe
        swipe2Img: [
          {
            img: swipeB1,
          },
          {
            img: swipeB2,
          },
          {
            img: swipeB3,
          },
          {
            img: swipeB4,
          },
          {
            img: swipeB5,
          },
        ],
        // swipe3
        galleryTop3: '',
        swipe3Img: [
          {
            img: swipeC1,
            tit: '刺激客户下单',
            txt: '配合店铺活动，设置具有诱惑力的会员权益，提升下单推动力',
          },
          {
            img: swipeC2,
            tit: '增加购物频次',
            txt: '建立会员成长体系，消费越多权益越多，刺激会员持续消费',
          },
          {
            img: swipeC4,
            tit: '提升忠诚度',
            txt: '丰富的专享权益提高会员身份价值感，与客户建立深度联结',
          },
          {
            img: swipeC3,
            tit: '留住高价值客户',
            txt: '发行付费年卡、月卡，把高价值客户牢牢抓在手中',
          },
        ],
        // 切换
        box7Tab: [
          {
            txt: '全部',
            cur: true,
          },
          {
            txt: '剧场剧院',
            cur: false,
          },
          {
            txt: '综合活动',
            cur: false,
          },
          {
            txt: '演唱会',
            cur: false,
          },
          {
            txt: '音乐剧',
            cur: false,
          },
        ],
        box7TabIndex: 0,
        allData: [
          {
            tit: '潮票号',
            txt: '粤东首个优质演出票务平台，集各类演唱会、音乐会等演出，整合城市最新最热动态。',
            xcx: xcx1,
            right: box71,
          },
          {
            tit: '繁星戏剧村',
            txt: '繁星戏剧村是中国首家民营戏剧文化产业园。积累原创戏剧ip50余部，平均年演出量近千场，一年观众人数达30万次',
            xcx: xcx2,
            right: box72,
          },
          {
            tit: '丰马',
            txt: '浙江省首家商业综合体标准剧场，一年超过200场演出，好戏不断！戏剧予爱，in你而生',
            xcx: xcx3,
            right: box73,
          },
          {
            tit: '乐福文化',
            txt: '中国一家娱乐文化公司，总部位于广东广州。业务范围包括演唱会、音乐节、大型演出活动的运作统筹与执行，艺人经纪与代言、音乐版权和营销策划等。',
            xcx: xcx4,
            right: box74,
          },
          {
            tit: '魔时爱港澳',
            txt: '魔时（全球活动现场）旗下，提供香港澳门最精彩的活动现场资讯。',
            xcx: xcx5,
            right: box75,
          },
          {
            tit: '木偶剧院',
            txt: '国内唯一的一座以木偶戏演出为主的专业剧院，1996年落成，自建成后一直坚持演出来自国内外的经典木偶剧作品，成为我国的木偶艺术中心。',
            xcx: xcx6,
            right: box76,
          },
          {
            tit: '七幕',
            txt: '中国音乐剧第一品牌，致力于引进经典音乐剧的版权，制作中文版在国内演出，6年来演出超过1000场。',
            xcx: xcx7,
            right: box77,
          },
          {
            tit: 'LIVE 长沙',
            txt: '湖南中南国际会展有限公司是湖南唯一一家年产值过亿的会展企业，曾成功运营长沙草莓音乐节、长沙车展、百威风暴电音节长沙站、CREAM TOUR',
            xcx: xcx8,
            right: box78,
          },
        ],
        allIcon: [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8],
        allIndex: 0,
        // box7 剧场剧院
        jcjyData: [
          {
            tit: '繁星戏剧村',
            txt: '繁星戏剧村是中国首家民营戏剧文化产业园。积累原创戏剧ip50余部，平均年演出量近千场，一年观众人数达30万次',
            xcx: xcx2,
            right: box72,
          },
          {
            tit: '丰马',
            txt: '浙江省首家商业综合体标准剧场，一年超过200场演出，好戏不断！戏剧予爱，in你而生',
            xcx: xcx3,
            right: box73,
          },
          {
            tit: '木偶剧院',
            txt: '国内唯一的一座以木偶戏演出为主的专业剧院，1996年落成，自建成后一直坚持演出来自国内外的经典木偶剧作品，成为我国的木偶艺术中心。',
            xcx: xcx6,
            right: box76,
          },
        ],
        jcjyIcon: [icon2, icon3, icon6],
        jcjyIndex: 0,
        // box7 综合活动
        zhhdData: [
          {
            tit: '潮票号',
            txt: '粤东首个优质演出票务平台，集各类演唱会、音乐会等演出，整合城市最新最热动态。',
            xcx: xcx1,
            right: box71,
          },
          {
            tit: '魔时爱港澳',
            txt: '魔时（全球活动现场）旗下，提供香港澳门最精彩的活动现场资讯。',
            xcx: xcx5,
            right: box75,
          },
        ],
        zhhdIcon: [icon1, icon5],
        zhhdIndex: 0,
        // 演唱会
        ychData: [
          {
            tit: '乐福文化',
            txt: '中国一家娱乐文化公司，总部位于广东广州。业务范围包括演唱会、音乐节、大型演出活动的运作统筹与执行，艺人经纪与代言、音乐版权和营销策划等。',
            xcx: xcx4,
            right: box74,
          },
        ],
        ychIcon: [icon4],
        ychIndex: 0,
        // 音乐节
        yyjData: [
          {
            tit: '七幕',
            txt: '中国音乐剧第一品牌，致力于引进经典音乐剧的版权，制作中文版在国内演出，6年来演出超过1000场。',
            xcx: xcx7,
            right: box77,
          },
          {
            tit: 'LIVE 长沙',
            txt: '湖南中南国际会展有限公司是湖南唯一一家年产值过亿的会展企业，曾成功运营长沙草莓音乐节、长沙车展、百威风暴电音节长沙站、CREAM TOUR',
            xcx: xcx8,
            right: box78,
          },
        ],
        yyjIcon: [icon7, icon8],
        yyjIndex: 0,
        box9,
        box9Hover,
        propgzh: false,
        anim: '',
        galleryTop4: '',
        registerBtn: false,
        xcxEnv: false,
      };
    },
    create() {
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
            path: '/program',
          });
        }
      }
    },
    methods: {
      handleScroll() {
        if(process.browser) {
          const scrollY = window.scrollY;
          this.scrollData = scrollY;
          // console.log(scrollY);


          if(scrollY > 600) {
            this.registerBtn = true;
          } else {
            this.registerBtn = false;
          }

          const heightnum = document.getElementById('program-num').offsetTop;
          if (scrollY > heightnum / 2) {
            console.log(heightnum);
            if(this.num1 < 100) {
              const timer = setInterval(() => {
                if(this.num1 < 100) {
                  this.num1+=2;
                  if(this.numbg1 < 94) {
                    this.numbg1+=2;
                  }
                } else {
                  clearInterval(timer);
                }
              }, 40);
            }
            if(this.num2 < 20) {
              const timer2 = setInterval(() => {
                if(this.num2 < 20) {
                  this.num2+=2;
                  if(this.numbg2 < 20) {
                    this.numbg2+=2;
                  }
                } else {
                  clearInterval(timer2);
                }
              }, 40);
            }
            if(this.num3 < 104) {
              const timer3 = setInterval(() => {
                if(this.num3 < 104) {
                  this.num3+=2;
                  if(this.numbg3 < 94) {
                    this.numbg3+=2;
                  }
                } else {
                  clearInterval(timer3);
                }
              }, 40);
            }
          }
        }
      },
      goBackend() {
        window.open('https://home.evente.cn/account/login');
      },
      box7TabBtn(item, index) {
        console.log(index, 'index');
        this.box7TabIndex = index;
        this.box7Tab.forEach((i) => {
          i.cur = false;
        });
        item.cur = true;
        this.galleryTop4.slideTo(index);
      },
      allBtn(e) {
        console.log(e, 33);
        this.allIndex = e;
      },
      jcjyBtn(e) {
        this.jcjyIndex = e;
      },
      zhhdBtn(e) {
        this.zhhdIndex = e;
      },
      ychBtn(e) {
        this.ychIndex = e;
      },
      yyjBtn(e) {
        this.yyjIndex = e;
      },
      porpWx() {
        this.propgzh = true;
      },
      closeProp() {
        this.propgzh = false;
      },
      goWb() {
        // window.open('https://weibo.com/u/2284242401');
        window.location.href = 'https://weibo.com/u/2284242401';
      },
    },
    mounted() {
      /* eslint-disable */
      window.addEventListener('touchmove', this.handleScroll, true);
      window.addEventListener('scroll', this.handleScroll, true);
      // swipe1、swipe3
      this.galleryTop = new Swiper('.gallery-top', {
        navigation: true,
        loop: false,
        pagination: '.gallery-top .swiper-pagination',
      });

      this.galleryTop4 = new Swiper('.gallery-top4', {
        loop: false,
        onSlideChangeStart: ((swipe) => {
          // alert(swipe.activeIndex);
          this.box7Tab.forEach((i) => {
            i.cur = false;
          });
          this.box7Tab[swipe.activeIndex].cur = true;
        }),
      });
      // swipe5 手机壳
      this.swiper5 = new Swiper('.swiper-container5', {
        autoplay: 3000,
        loop: true,
        speed:300,
        loopedSlides: 3,
        centeredSlides: true,
        slidesPerView: 'auto',
        breakpoints: {
          // 小于等于375
          375: {
            spaceBetween: 24,
          },
        },
        spaceBetween: 24,
      });
      // swipe3
      this.galleryTop3 = new Swiper('.gallery-top3', {
        navigation: true,
        loop: false,
        pagination: '.gallery-top3 .swiper-pagination',
      });

      const animationData = {"v":"5.4.4","fr":25,"ip":0,"op":78,"w":500,"h":600,"nm":"banner2","ddd":0,"assets":[{"id":"image_0","w":364,"h":550,"u":"","p":banner0,"e":0},{"id":"image_1","w":44,"h":44,"u":"","p":banner1,"e":0},{"id":"image_2","w":28,"h":28,"u":"","p":banner2,"e":0},{"id":"image_3","w":28,"h":28,"u":"","p":banner3,"e":0},{"id":"image_4","w":54,"h":54,"u":"","p":banner4,"e":0},{"id":"image_5","w":500,"h":600,"u":"","p":banner5,"e":0},{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"光.png","cl":"png","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[50],"e":[70]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":20,"s":[70],"e":[50]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":40,"s":[50],"e":[90]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":58,"s":[90],"e":[50]},{"t":78}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1259,219,0],"ix":2},"a":{"a":0,"k":[182,275,0],"ix":1},"s":{"a":0,"k":[50,50,100],"ix":6}},"ao":0,"ip":0,"op":500,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"2.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":8,"s":[1221,165,0],"e":[1221,133,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":0.579},"o":{"x":0.333,"y":0},"t":42,"s":[1221,133,0],"e":[1231,146.345,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0.415},"t":58,"s":[1231,146.345,0],"e":[1221,165,0],"to":[0,0,0],"ti":[0,0,0]},{"t":78}],"ix":2},"a":{"a":0,"k":[22,22,0],"ix":1},"s":{"a":0,"k":[75,75,100],"ix":6}},"ao":0,"ip":0,"op":500,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"4.png","cl":"png","refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":6,"s":[1461,372,0],"e":[1461,350,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":40,"s":[1461,350,0],"e":[1461,372,0],"to":[0,0,0],"ti":[0,0,0]},{"t":76}],"ix":2},"a":{"a":0,"k":[14,14,0],"ix":1},"s":{"a":0,"k":[81,81,100],"ix":6}},"ao":0,"ip":0,"op":500,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"3.png","cl":"png","refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":4,"s":[1454,305.5,0],"e":[1454,283,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":38,"s":[1454,283,0],"e":[1454,305.5,0],"to":[0,0,0],"ti":[0,0,0]},{"t":74}],"ix":2},"a":{"a":0,"k":[14,14,0],"ix":1},"s":{"a":0,"k":[50,50,100],"ix":6}},"ao":0,"ip":0,"op":500,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"3.png","cl":"png","refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":2,"s":[1297,131,0],"e":[1297,109,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":36,"s":[1297,109,0],"e":[1297,131,0],"to":[0,0,0],"ti":[0,0,0]},{"t":72}],"ix":2},"a":{"a":0,"k":[14,14,0],"ix":1},"s":{"a":0,"k":[50,50,100],"ix":6}},"ao":0,"ip":0,"op":500,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":2,"nm":"1.png","cl":"png","refId":"image_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[1064,306,0],"e":[1064,284,0],"to":[0,-3.667,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":34,"s":[1064,284,0],"e":[1064,306,0],"to":[0,0,0],"ti":[0,-3.667,0]},{"t":70}],"ix":2},"a":{"a":0,"k":[27,27,0],"ix":1},"s":{"a":0,"k":[50,50,100],"ix":6}},"ao":0,"ip":0,"op":500,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"预合成 1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-65,300,0],"ix":2},"a":{"a":0,"k":[960,300,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":1920,"h":600,"ip":0,"op":500,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"弱光.png","cl":"png","refId":"image_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[240,300,0],"ix":2},"a":{"a":0,"k":[250,300,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":500,"st":0,"bm":0}],"markers":[]};
      const params = {
          container: document.getElementById('lottie'),
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animationData
      };


      this.anim = lottie.loadAnimation(params);
    },
    components: {
      // Swiper,
      NavWap,
      FooterWap,
    },
    beforeDestroy() {
      if(process.browser) {
        window.removeEventListener('touchmove', this.handleScroll, true);
        window.removeEventListener('scroll', this.handleScroll, true);
      }
    },
  };
</script>

<style lang="scss">
  @import "../../assets/styles/swiper.css";
  @import "../../assets/styles/wap/program.scss";
</style>
