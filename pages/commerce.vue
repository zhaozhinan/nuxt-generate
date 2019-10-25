<template>
  <div class="evente-commerce">
    <navpc />

    <div class="evente-commerce-wrap">
      <div class="evente-commerce-wrap-banner">
        <div class="evente-commerce-wrap-banner-content">
          <div class="evente-commerce-wrap-banner-content-title">活动易，超强大的票务系统</div>
          <div class="evente-commerce-wrap-banner-content-txt">大型演出、国际赛事的现场解决方案</div>
          <emfe-button theme="primary" className="evente-commerce-wrap-banner-content" @click="goacc">免费试用</emfe-button>
        </div>
      </div>

      <div class="evente-commerce-wrap-box1">
        <div class="evente-commerce-wrap-box1-tit">票务电商·多场景售票，想卖就卖</div>
        <div class="evente-commerce-wrap-box1-txt">上千家使用活动易</div>
        <ul class="evente-commerce-wrap-box1-case">
          <li class="evente-commerce-wrap-box1-case-item" @click="goJcjy">
          </li>
          <li class="evente-commerce-wrap-box1-case-item">
            <div class="evente-commerce-wrap-box1-case-item-loyer">创建中···</div>
          </li>
          <li class="evente-commerce-wrap-box1-case-item">
            <div class="evente-commerce-wrap-box1-case-item-loyer">创建中···</div>
          </li>
          <li class="evente-commerce-wrap-box1-case-item" @click="goZlxx">
          </li>
        </ul>
      </div>

      <div class="evente-commerce-wrap-box2">
        <div class="evente-commerce-wrap-box2-tit">专业票务管理系统</div>
        <div class="evente-commerce-wrap-box2-txt">8年票务平台经验</div>
        <div class="evente-commerce-wrap-box2-info">
          <div class="evente-commerce-wrap-box2-info-item" v-for="(item, index) in box2Data" :key="index">
            <div class="evente-commerce-wrap-box2-info-item-con">
              <div class="evente-commerce-wrap-box2-info-item-tit" v-text="item.tit"></div>
              <div class="evente-commerce-wrap-box2-info-item-txt" v-text="item.txt"></div>
            </div>
          </div>
        </div>
        <div class="evente-commerce-wrap-box2-swipe">
          <vueper-slides autoplay arrows-outside bullets-outside transition-speed="250" :dragging-distance="70" prevent-y-scroll speed="4000">
            <vueper-slide v-for="(slide, i) in slideData" :key="slide.id" :image="slide.image"></vueper-slide>
          </vueper-slides>
        </div>
        <div class="evente-commerce-btn">
          <emfe-button theme="primary" className="evente-wrap-blue" @click="goRegister">立即注册</emfe-button>
          <emfe-button className="evente-wrap-white" @click="goacc">试用专业版</emfe-button>
        </div>
      </div>

      <div class="evente-commerce-wrap-box3">
        <div class="evente-commerce-wrap-box3-tit">商品周边·拓展主办营收提升业绩</div>
        <div class="evente-commerce-wrap-box3-txt">票品+商品，主办增长新妙招</div>
        <div class="evente-commerce-wrap-box3-info">
          <img v-lazy="box3img" alt="" class="evente-commerce-wrap-box3-info-img">
          <div class="evente-commerce-wrap-box3-info-tab">
            <div class="evente-commerce-wrap-box3-info-tab-item" v-for="(item, i) in box3Data" :key="i">
              <div class="evente-commerce-wrap-box3-info-tab-item-con">
                <div :class="['evente-commerce-wrap-box3-info-tab-item-icon', `evente-commerce-wrap-box3-info-tab-item-icon${i}`]"></div>
                <div class="evente-commerce-wrap-box3-info-tab-item-tit" v-text="item.tit"></div>
                <div class="evente-commerce-wrap-box3-info-tab-item-txt" v-text="item.txt"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="evente-commerce-btn">
          <emfe-button theme="primary" className="evente-wrap-blue" @click="goRegister">立即注册</emfe-button>
          <emfe-button className="evente-wrap-white" @click="goacc">试用专业版</emfe-button>
        </div>
      </div>

      <div class="evente-commerce-wrap-box4">
        <div class="evente-commerce-wrap-box4-tit">票务商城/小程序·主办专属的综合售卖终端</div>
        <div class="evente-commerce-wrap-box4-txt">树立主办官方直销品牌，成就主办影响力</div>
        <div class="evente-commerce-wrap-box4-info">
          <ul class="evente-commerce-wrap-box4-info-con">
            <li class="evente-commerce-wrap-box4-info-item" :class="{'evente-commerce-wrap-box4-info-active': onBox4EventNum === 1}" @mouseenter="onBox4Event(1)">
              <div class="evente-commerce-wrap-box4-info-item-1">
                <div class="evente-commerce-wrap-box4-info-item-1-icon evente-commerce-wrap-box4-info-item-1-icon-1"></div>
                <div class="evente-commerce-wrap-box4-info-item-1-tit">多终端店铺</div>
                <!-- <div class="evente-commerce-wrap-box4-info-item-1-txt">一键生成微商城+小程序，极速售票</div> -->
                <img class="evente-commerce-wrap-box4-info-item-1-img" v-lazy="box4_1">
              </div>
              <div class="evente-commerce-wrap-box4-info-item-2">
                <div class="evente-commerce-wrap-box4-info-item-2-icon evente-commerce-wrap-box4-info-item-1-icon-1-hover"></div>
                <div class="evente-commerce-wrap-box4-info-item-2-text">
                  <div class="evente-commerce-wrap-box4-info-item-2-tit">多终端店铺</div>
                  <div class="evente-commerce-wrap-box4-info-item-2-txt">一键生成微商城+小程序，极速售票</div>
                </div>
                <img class="evente-commerce-wrap-box4-info-item-2-img" v-lazy="box4_1_hover">
              </div>
            </li>
            <li class="evente-commerce-wrap-box4-info-item" :class="{'evente-commerce-wrap-box4-info-active': onBox4EventNum === 2}" @mouseenter="onBox4Event(2)">
              <div class="evente-commerce-wrap-box4-info-item-1">
                <div class="evente-commerce-wrap-box4-info-item-1-icon evente-commerce-wrap-box4-info-item-1-icon-2"></div>
                <div class="evente-commerce-wrap-box4-info-item-1-tit">多形式展示</div>
                <!-- <div class="evente-commerce-wrap-box4-info-item-1-txt">20+组件，视频、富文本、图片导航、营销</div> -->
                <img class="evente-commerce-wrap-box4-info-item-1-img" v-lazy="box4_2">
              </div>
              <div class="evente-commerce-wrap-box4-info-item-2">
                <div class="evente-commerce-wrap-box4-info-item-2-icon evente-commerce-wrap-box4-info-item-1-icon-2-hover"></div>
                <div class="evente-commerce-wrap-box4-info-item-2-text">
                  <div class="evente-commerce-wrap-box4-info-item-2-tit">多形式展示</div>
                  <div class="evente-commerce-wrap-box4-info-item-2-txt">图文，视频，资讯，优惠，内容丰富</div>
                </div>
                <img class="evente-commerce-wrap-box4-info-item-2-img" v-lazy="box4_2_hover">
              </div>
            </li>
            <li class="evente-commerce-wrap-box4-info-item" :class="{'evente-commerce-wrap-box4-info-active': onBox4EventNum === 3}" @mouseenter="onBox4Event(3)">
              <div class="evente-commerce-wrap-box4-info-item-1">
                <div class="evente-commerce-wrap-box4-info-item-1-icon evente-commerce-wrap-box4-info-item-1-icon-3"></div>
                <div class="evente-commerce-wrap-box4-info-item-1-tit">品牌化传播</div>
                <!-- <div class="evente-commerce-wrap-box4-info-item-1-txt">卖票、卖商品、卖年卡、储值、卖会员卡</div> -->
                <img class="evente-commerce-wrap-box4-info-item-1-img" v-lazy="box4_3">
              </div>
              <div class="evente-commerce-wrap-box4-info-item-2">
                <div class="evente-commerce-wrap-box4-info-item-2-icon evente-commerce-wrap-box4-info-item-1-icon-3-hover"></div>
                <div class="evente-commerce-wrap-box4-info-item-2-text">
                  <div class="evente-commerce-wrap-box4-info-item-2-tit">品牌化传播</div>
                  <div class="evente-commerce-wrap-box4-info-item-2-txt">独立个性化官方店铺/商城，一键分享</div>
                </div>
                <img class="evente-commerce-wrap-box4-info-item-2-img" v-lazy="box4_3_hover">
              </div>
            </li>
            <li class="evente-commerce-wrap-box4-info-item" :class="{'evente-commerce-wrap-box4-info-active': onBox4EventNum === 4}" @mouseenter="onBox4Event(4)">
              <div class="evente-commerce-wrap-box4-info-item-1">
                <div class="evente-commerce-wrap-box4-info-item-1-icon evente-commerce-wrap-box4-info-item-1-icon-4"></div>
                <div class="evente-commerce-wrap-box4-info-item-1-tit">全品类交易</div>
                <!-- <div class="evente-commerce-wrap-box4-info-item-1-txt">优惠券、限时折、拼团、满折满送</div> -->
                <img class="evente-commerce-wrap-box4-info-item-1-img" v-lazy="box4_4">
              </div>
              <div class="evente-commerce-wrap-box4-info-item-2">
                <div class="evente-commerce-wrap-box4-info-item-2-icon evente-commerce-wrap-box4-info-item-1-icon-4-hover"></div>
                <div class="evente-commerce-wrap-box4-info-item-2-text">
                  <div class="evente-commerce-wrap-box4-info-item-2-tit">全品类交易</div>
                  <div class="evente-commerce-wrap-box4-info-item-2-txt">支持票，商品，年卡，储值售卖，综合商城</div>
                </div>
                <img class="evente-commerce-wrap-box4-info-item-2-img" v-lazy="box4_4_hover">
              </div>
            </li>
            <li class="evente-commerce-wrap-box4-info-item" :class="{'evente-commerce-wrap-box4-info-active': onBox4EventNum === 5}" @mouseenter="onBox4Event(5)">
              <div class="evente-commerce-wrap-box4-info-item-1">
                <div class="evente-commerce-wrap-box4-info-item-1-icon evente-commerce-wrap-box4-info-item-1-icon-5"></div>
                <div class="evente-commerce-wrap-box4-info-item-1-tit">全方位留存</div>
                <!-- <div class="evente-commerce-wrap-box4-info-item-1-txt">自定义主题色+模块，自由拖拽，装修快</div> -->
                <img class="evente-commerce-wrap-box4-info-item-1-img" v-lazy="box4_5">
              </div>
              <div class="evente-commerce-wrap-box4-info-item-2">
                <div class="evente-commerce-wrap-box4-info-item-2-icon evente-commerce-wrap-box4-info-item-1-icon-5-hover"></div>
                <div class="evente-commerce-wrap-box4-info-item-2-text">
                  <div class="evente-commerce-wrap-box4-info-item-2-tit">全方位留存</div>
                  <div class="evente-commerce-wrap-box4-info-item-2-txt">粉丝购票，享受优惠，留存会员，持续消费</div>
                </div>
                <img class="evente-commerce-wrap-box4-info-item-2-img" v-lazy="box4_5_hover">
              </div>
            </li>
          </ul>
        </div>
        <div class="evente-commerce-btn">
          <emfe-button theme="primary" className="evente-wrap-blue" @click="goRegister">立即注册</emfe-button>
          <emfe-button className="evente-wrap-white" @click="goacc">试用专业版</emfe-button>
        </div>
      </div>

      <div class="evente-commerce-wrap-box5">
        <div class="evente-commerce-wrap-box5-tit">营销工具·提升主办成交力</div>
        <div class="evente-commerce-wrap-box5-txt">数十种营销玩法，提升拉新、转化、促活、复购、裂变，面面俱到</div>
        <div class="evente-commerce-wrap-box5-top">
          <dl class="evente-commerce-wrap-box5-top-item">
            <dt class="evente-commerce-wrap-box5-top-item-icon evente-commerce-wrap-box5-top-item-icon-1"></dt>
            <dd>
              <div class="evente-commerce-wrap-box5-top-item-tit">提拉新</div>
              <div class="evente-commerce-wrap-box5-top-item-txt">拼团、砍价、秒杀</div>
            </dd>
          </dl>
          <dl class="evente-commerce-wrap-box5-top-item">
            <dt class="evente-commerce-wrap-box5-top-item-icon evente-commerce-wrap-box5-top-item-icon-2"></dt>
            <dd>
              <div class="evente-commerce-wrap-box5-top-item-tit">促转化</div>
              <div class="evente-commerce-wrap-box5-top-item-txt">优惠券、限时折扣、优惠码</div>
            </dd>
          </dl>
          <dl class="evente-commerce-wrap-box5-top-item">
            <dt class="evente-commerce-wrap-box5-top-item-icon evente-commerce-wrap-box5-top-item-icon-3"></dt>
            <dd>
              <div class="evente-commerce-wrap-box5-top-item-tit">提客单</div>
              <div class="evente-commerce-wrap-box5-top-item-txt"> 满减、满送、满包邮</div>
            </dd>
          </dl>
          <dl class="evente-commerce-wrap-box5-top-item">
            <dt class="evente-commerce-wrap-box5-top-item-icon evente-commerce-wrap-box5-top-item-icon-4"></dt>
            <dd>
              <div class="evente-commerce-wrap-box5-top-item-tit">促留存</div>
              <div class="evente-commerce-wrap-box5-top-item-txt">储值卡、次卡年卡<br>积分抵现、微信吸粉</div>
            </dd>
          </dl>
          <dl class="evente-commerce-wrap-box5-top-item">
            <dt class="evente-commerce-wrap-box5-top-item-icon evente-commerce-wrap-box5-top-item-icon-5"></dt>
            <dd>
              <div class="evente-commerce-wrap-box5-top-item-tit">做分销</div>
              <div class="evente-commerce-wrap-box5-top-item-txt">分销发布、转化监测<br>渠道市场、渠道结算</div>
            </dd>
          </dl>
        </div>
        <div class="evente-commerce-wrap-box5-swipe" id="commerceSwipe">
          <div class="evente-commerce-wrap-box5-swipe-box" id="commerceSwipe1">
            <img v-lazy="box5Swipe1" alt="">
            <img v-lazy="box5Swipe2" alt="">
            <img v-lazy="box5Swipe3" alt="">
            <img v-lazy="box5Swipe4" alt="">
            <img v-lazy="box5Swipe5" alt="">
            <img v-lazy="box5Swipe6" alt="">
            <img v-lazy="box5Swipe7" alt="">
          </div>
          <div class="evente-commerce-wrap-box5-swipe-box" id="commerceSwipe2">
            <img v-lazy="box5Swipe1" alt="">
            <img v-lazy="box5Swipe2" alt="">
            <img v-lazy="box5Swipe3" alt="">
            <img v-lazy="box5Swipe4" alt="">
            <img v-lazy="box5Swipe5" alt="">
            <img v-lazy="box5Swipe6" alt="">
            <img v-lazy="box5Swipe7" alt="">
          </div>
        </div>
        <div class="evente-commerce-btn">
          <emfe-button theme="primary" className="evente-wrap-blue" @click="goRegister">立即注册</emfe-button>
          <emfe-button className="evente-wrap-white" @click="goacc">试用专业版</emfe-button>
        </div>
      </div>

      <div class="evente-commerce-wrap-box6">
        <div class="evente-commerce-wrap-box6-tit">会员CRM·精细化管理客户，更多留存更多复购</div>
        <div class="evente-commerce-wrap-box6-txt">持续挖掘单客价值，搭建顾客增值系统</div>
        <div class="evente-commerce-wrap-box6-info">
          <div class="evente-commerce-wrap-box6-info-swipe evente-commerce-wrap-left">
            <vueper-slides autoplay transition-speed="250" :dragging-distance="70" prevent-y-scroll speed="4000">
              <vueper-slide v-for="(slide, i) in slide6Data" :key="slide.id" :image="slide.image"></vueper-slide>
            </vueper-slides>
          </div>
          <ul class="evente-commerce-wrap-box6-info-tab evente-commerce-wrap-right">
            <li class="evente-commerce-wrap-box6-info-tab-item" v-for="(item, index) in box6Tab" :key="index">
              <div class="evente-commerce-wrap-box6-info-tab-item-tit" v-text="item.tit"></div>
              <div class="evente-commerce-wrap-box6-info-tab-item-txt" v-text="item.txt"></div>
              <div class="evente-commerce-wrap-box6-info-tab-item-box">
                <span class="evente-commerce-wrap-box6-info-tab-item-box-list" v-for="(b, i) in item.arr" :key="'arr'+i" v-text="b"></span>
              </div>
            </li>
          </ul>
        </div>
        <div class="evente-commerce-btn">
          <emfe-button theme="primary" className="evente-wrap-blue" @click="goRegister">立即注册</emfe-button>
          <emfe-button className="evente-wrap-white" @click="goacc">试用专业版</emfe-button>
        </div>
      </div>

      <div class="evente-commerce-wrap-box7">
        <div class="evente-commerce-wrap-box7-tit">可视化数据系统·多角度/全方位的经营分析，驱动发展</div>
        <div class="evente-commerce-wrap-box7-txt">投资、营销、合作，再也不用拍脑袋决策</div>
        <div class="evente-commerce-wrap-box7-info">
          <div class="evente-commerce-wrap-box7-info-tab evente-commerce-wrap-left">
            <dl class="evente-commerce-wrap-box7-info-tab-box">
              <dt class="evente-commerce-wrap-box7-info-tab-icon evente-commerce-wrap-box7-info-tab-icon-1"></dt>
              <dd>
                <div class="evente-commerce-wrap-box7-info-tab-tit">销售数据</div>
                <div class="evente-commerce-wrap-box7-info-tab-txt">访问、订单、转化多屏展示</div>
              </dd>
            </dl>
            <dl class="evente-commerce-wrap-box7-info-tab-box">
              <dt class="evente-commerce-wrap-box7-info-tab-icon evente-commerce-wrap-box7-info-tab-icon-2"></dt>
              <dd>
                <div class="evente-commerce-wrap-box7-info-tab-tit">用户数据</div>
                <div class="evente-commerce-wrap-box7-info-tab-txt">地域、人群、支付尽在掌握</div>
              </dd>
            </dl>
            <dl class="evente-commerce-wrap-box7-info-tab-box">
              <dt class="evente-commerce-wrap-box7-info-tab-icon evente-commerce-wrap-box7-info-tab-icon-3"></dt>
              <dd>
                <div class="evente-commerce-wrap-box7-info-tab-tit">财务数据</div>
                <div class="evente-commerce-wrap-box7-info-tab-txt">对账、结算、提现高效快捷</div>
              </dd>
            </dl>
            <dl class="evente-commerce-wrap-box7-info-tab-box">
              <dt class="evente-commerce-wrap-box7-info-tab-icon evente-commerce-wrap-box7-info-tab-icon-4"></dt>
              <dd>
                <div class="evente-commerce-wrap-box7-info-tab-tit">项目报表</div>
                <div class="evente-commerce-wrap-box7-info-tab-txt">售卖、出票、报表一目了然</div>
              </dd>
            </dl>
          </div>
          <img class="evente-commerce-wrap-box7-info-img evente-commerce-wrap-right" v-lazy="box7Img">
        </div>

        <div class="evente-commerce-btn">
          <emfe-button theme="primary" className="evente-wrap-blue" @click="goRegister">立即注册</emfe-button>
          <emfe-button className="evente-wrap-white" @click="goacc">试用专业版</emfe-button>
        </div>
      </div>

      <div class="evente-commerce-wrap-box4">
        <div class="evente-commerce-wrap-box4-tit">智慧现场 · 打票、取票、验票硬件提供完善入场体验</div>
        <div class="evente-commerce-wrap-box4-txt">票纸设计与防伪、打票机、取票机、验票机、闸机与人脸识别</div>
        <div class="evente-commerce-wrap-box4-info">
          <dl class="evente-commerce-wrap-box8-item">
            <dt class="evente-commerce-wrap-box8-item-bg"><img v-lazy="box8Bg1" class="evente-commerce-wrap-box8-item-img" alt=""></dt>
            <dd class="evente-commerce-wrap-box8-item-tit">票纸防伪与出票打印</dd>
          </dl>
          <dl class="evente-commerce-wrap-box8-item">
            <dt class="evente-commerce-wrap-box8-item-bg"><img v-lazy="box8Bg2" class="evente-commerce-wrap-box8-item-img" alt=""></dt>
            <dd class="evente-commerce-wrap-box8-item-tit">人脸识别</dd>
          </dl>
          <dl class="evente-commerce-wrap-box8-item">
            <dt class="evente-commerce-wrap-box8-item-bg"><img v-lazy="box8Bg3" class="evente-commerce-wrap-box8-item-img" alt=""></dt>
            <dd class="evente-commerce-wrap-box8-item-tit">储值手环</dd>
          </dl>
          <dl class="evente-commerce-wrap-box8-item">
            <dt class="evente-commerce-wrap-box8-item-bg"><img v-lazy="box8Bg4" class="evente-commerce-wrap-box8-item-img" alt=""></dt>
            <dd class="evente-commerce-wrap-box8-item-tit">取票购票一体机</dd>
          </dl>
          <dl class="evente-commerce-wrap-box8-item">
            <dt class="evente-commerce-wrap-box8-item-bg"><img v-lazy="box8Bg5" class="evente-commerce-wrap-box8-item-img" alt=""></dt>
            <dd class="evente-commerce-wrap-box8-item-tit">APP核销</dd>
          </dl>
          <dl class="evente-commerce-wrap-box8-item">
            <dt class="evente-commerce-wrap-box8-item-bg"><img v-lazy="box8Bg6" class="evente-commerce-wrap-box8-item-img" alt=""></dt>
            <dd class="evente-commerce-wrap-box8-item-tit">身份证验票</dd>
          </dl>
          <dl class="evente-commerce-wrap-box8-item">
            <dt class="evente-commerce-wrap-box8-item-bg"><img v-lazy="box8Bg7" class="evente-commerce-wrap-box8-item-img" alt=""></dt>
            <dd class="evente-commerce-wrap-box8-item-tit">手持扫码机</dd>
          </dl>
          <dl class="evente-commerce-wrap-box8-item">
            <dt class="evente-commerce-wrap-box8-item-bg"><img v-lazy="box8Bg8" class="evente-commerce-wrap-box8-item-img" alt=""></dt>
            <dd class="evente-commerce-wrap-box8-item-tit">闸机与人脸识别</dd>
          </dl>
        </div>
        <div class="evente-commerce-btn">
          <emfe-button theme="primary" className="evente-wrap-blue" onclick="qimoChatClick();">详情咨询</emfe-button>
        </div>
      </div>











      <div class="evente-commerce-wrap-banner2">
        <div class="evente-commerce-wrap-banner2-box">
          <img v-lazy="banner2" alt="" class="evente-commerce-wrap-banner2-box-img">
          <div class="evente-commerce-wrap-banner2-box-right">
            <div class="evente-commerce-wrap-banner2-box-title">活动易，报名售票更容易</div>
            <!-- <div class="evente-commerce-wrap-banner2-box-txt">活动主办自己的系统</div> -->
            <div class="evente-commerce-wrap-banner2-box-right-icon">
              <span class="evente-commerce-wrap-banner2-box-right-icon1">自收款</span>
              <span class="evente-commerce-wrap-banner2-box-right-icon2">票提低</span>
              <span class="evente-commerce-wrap-banner2-box-right-icon3">有数据</span>
            </div>
            <emfe-button className="evente-commerce-wrap-banner2-box" theme="primary" onclick="qimoChatClick();">免费试用</emfe-button>
          </div>
        </div>
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
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import FooterPc from '../components/FooterPc.vue';
// import NavPc from '../components/NavPc.vue';
import Service from '../components/Service.vue';
// import logo from '../assets/images/pc/wlogo1.png';
import logo1 from '../assets/images/pc/wlogo.png';
import logo2 from '../assets/images/pc/blogo.png';
import gpxcx from '../assets/images/pc/gpxcx.png';
import banner2 from '../assets/images/pc/home/box7/com.png';
// swipe
import box2_1 from '../assets/images/pc/commerce/box2/1.png';
import box2_2 from '../assets/images/pc/commerce/box2/2.png';
import box2_3 from '../assets/images/pc/commerce/box2/3.png';
import box3img from '../assets/images/pc/commerce/box3/img1.png';
import box4_1 from '../assets/images/pc/commerce/box4/img1.png';
import box4_1_hover from '../assets/images/pc/commerce/box4/img1_hover.png';
import box4_2 from '../assets/images/pc/commerce/box4/img2.png';
import box4_2_hover from '../assets/images/pc/commerce/box4/img2_hover.png';
import box4_3 from '../assets/images/pc/commerce/box4/img3.png';
import box4_3_hover from '../assets/images/pc/commerce/box4/img3_hover.png';
import box4_4 from '../assets/images/pc/commerce/box4/img4.png';
import box4_4_hover from '../assets/images/pc/commerce/box4/img4_hover.png';
import box4_5 from '../assets/images/pc/commerce/box4/img5.png';
import box4_5_hover from '../assets/images/pc/commerce/box4/img5_hover.png';
import box5Swipe1 from '../assets/images/pc/commerce/box5/img1.png';
import box5Swipe2 from '../assets/images/pc/commerce/box5/img2.png';
import box5Swipe3 from '../assets/images/pc/commerce/box5/img3.png';
import box5Swipe4 from '../assets/images/pc/commerce/box5/img4.png';
import box5Swipe5 from '../assets/images/pc/commerce/box5/img5.png';
import box5Swipe6 from '../assets/images/pc/commerce/box5/img6.png';
import box5Swipe7 from '../assets/images/pc/commerce/box5/img7.png';
// box6
import box6Swipe1 from '../assets/images/pc/commerce/box6/img.png';
import box6Swipe2 from '../assets/images/pc/commerce/box6/img2.png';
import box6Swipe3 from '../assets/images/pc/commerce/box6/img3.png';
// box7
import box7Img from '../assets/images/pc/commerce/box7/img.png';
// box8
import box8Bg1 from '../assets/images/pc/commerce/box8/1.png';
import box8Bg2 from '../assets/images/pc/commerce/box8/2.png';
import box8Bg3 from '../assets/images/pc/commerce/box8/3.png';
import box8Bg4 from '../assets/images/pc/commerce/box8/4.png';
import box8Bg5 from '../assets/images/pc/commerce/box8/5.png';
import box8Bg6 from '../assets/images/pc/commerce/box8/6.png';
import box8Bg7 from '../assets/images/pc/commerce/box8/7.png';
import box8Bg8 from '../assets/images/pc/commerce/box8/8.png';

export default {
  name: 'pcHome',
  data() {
    return {
      FooterPc,
      // NavPc,
      Service,
      scrollTop: false,
      banner2,
      gpxcx,
      gpxcxImg: false,
      logo: '',
      logo1,
      logo2,
      box2Data: [
        {
          tit: '多场次',
          txt: '用户可多场次批量下单',
        },
        {
          tit: '多终端',
          txt: '微官网+官网+小程序同步展示',
        },
        {
          tit: '自收款',
          txt: '资金回流快，结算便捷',
        },
        {
          tit: '多支付',
          txt: '除了主流支付，还支持外币购买',
        },
        {
          tit: '多语言',
          txt: '国外用户也可轻松购买',
        },
        {
          tit: '多限购',
          txt: '防止黄牛恶意收割',
        },
        {
          tit: '多核销',
          txt: '入场方式多，甚至是人脸识别',
        },
        {
          tit: '在线选座',
          txt: '自主绘制座位图，自主控制库存',
        },
        {
          tit: '多报表',
          txt: '售卖、分销、核销报表',
        },
        {
          tit: '多账号',
          txt: '分开管理，售票验票互不干扰',
        },
      ],
      // 轮播图
      slideData: [
        {
          id: 'slide-1',
          image: box2_1,
        },
        {
          id: 'slide-2',
          image: box2_2,
        },
        {
          id: 'slide-3',
          image: box2_3,
        },
      ],
      // box3
      box3Data: [
        {
          tit: '多产品',
          txt: '服装鞋包、音乐CD、纪念海报等',
        },
        {
          tit: '组合售卖',
          txt: '票+商品，更多销售更高业绩',
        },
        {
          tit: '运费设置',
          txt: '一键定制快递价格',
        },
        {
          tit: '会员限购',
          txt: '激励粉丝留存会员',
        },
        {
          tit: '促销折扣',
          txt: '大幅提升转化，降低库存压力',
        },
        {
          tit: '核销方便',
          txt: '现场自取，多凭证均可核销',
        },
      ],
      box3img,
      // box4
      box4_1,
      box4_1_hover,
      box4_2,
      box4_2_hover,
      box4_3,
      box4_3_hover,
      box4_4,
      box4_4_hover,
      box4_5,
      box4_5_hover,
      onBox4EventNum: 1,
      // box5 Swipe
      box5Swipe1,
      box5Swipe2,
      box5Swipe3,
      box5Swipe4,
      box5Swipe5,
      box5Swipe6,
      box5Swipe7,
      timer: '',
      // box6 Swipe
      // 轮播图
      slide6Data: [
        {
          id: 'slide6-1',
          image: box6Swipe1,
        },
        {
          id: 'slide6-2',
          image: box6Swipe2,
        },
        {
          id: 'slide6-3',
          image: box6Swipe3,
        },
      ],
      box6Tab: [
        {
          tit: '拉新与留存',
          txt: '筛选高价值客户，持续挖掘消费潜力回笼资金',
          arr: ['会员招募', '会员付费', '会员导入'],
        },
        {
          tit: '捆绑与忠诚',
          txt: '阶梯化会员权益，赋予会员尊享感，深度捆绑',
          arr: ['开卡有礼', '升级有礼', '储值有礼', '等级优惠', '专属折扣', '特权回馈'],
        },
        {
          tit: '促销与复购',
          txt: '精准客户推荐，提前售卖，带来更多复购',
          arr: ['短信营销', '次卡年卡', '积分商城和兑换'],
        },
        // {
        //   tit: '会员储值',
        //   txt: '线上储值卡、储值兑换码、储值赠送',
        //   arr: ['', '', ''],
        // },
        // {
        //   tit: '会员积分',
        //   txt: '积分抵现、积分商城（开发中）',
        //   arr: ['', '', ''],
        // },
        // {
        //   tit: '会员标签',
        //   txt: '活跃度、消费情况、等级情况、自定义标签',
        //   arr: ['', '', ''],
        // },
        // {
        //   tit: '群发短信',
        //   txt: '活动推荐、优惠领取、会员关怀、观演提示等',
        //   arr: ['', '', ''],
        // },
      ],
      // box7
      box7Img,
      // box8
      box8Bg1,
      box8Bg2,
      box8Bg3,
      box8Bg4,
      box8Bg5,
      box8Bg6,
      box8Bg7,
      box8Bg8,
    };
  },
  created() {
    // box5 Swipe
    this.box5SwipeFn();
    if (process.browser) {
      if (/(iPhone|iPod|iOS|Android|ipad)/i.test(navigator.userAgent)) {
        // var equipment = "wap";
        this.$router.push({
          path: '/m/commerce',
        });
      }
    }
  },
  methods: {
    goacc() {
      // window.open('https://home.evente.cn/account/console');
      this.$refs.serviceRef.openTryout();
    },
    goRegister() {
      window.open('https://home.evente.cn/account/register');
    },
    goJcjy() {
      window.open('https://college.evente.cn/17/19');
    },
    goZlxx() {
      window.open('https://college.evente.cn/17/20');
    },
    onBox4Event(e) {
      this.onBox4EventNum = e;
    },
    // box5 swipe
    box5SwipeFn() {
      if (process.browser) {
        let x = 0;
        this.timer = setInterval(() => {
          const _box1 = document.getElementById("commerceSwipe1");
          const _box2 = document.getElementById("commerceSwipe2");
          _box1.style.left = `${x}px`;
          _box2.style.left = `${x + 2319}px`;
          x--;
          if((x + 2319) === 0){
            x = 0;
          }
        }, 10);
      }
    },
  },
  components: {
    FooterPc,
    // NavPc,
    Service,
    VueperSlides,
    VueperSlide,
  },
  beforeDestroy() {
    if(this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style lang="scss">
  @import "../assets/styles/pc/commerce.scss";
</style>
