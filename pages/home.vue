<template>
  <div class="evente-home">
    <navpc />

    <div class="evente-home-wrap">
      <div class="evente-home-wrap-banner">
        <div class="evente-home-wrap-banner-swipe">
          <vueper-slides autoplay arrows-outside transition-speed="250" :dragging-distance="70" prevent-y-scroll speed="4000" :arrows="false" @slide="changeSlide" fade>
            <vueper-slide v-for="(slide, i) in banner" :key="'home_banner_'+i" :image="slide.img" :title="slide.title" :content="slide.content"></vueper-slide>
          </vueper-slides>
        </div>
        <div class="evente-home-wrap-banner-content">
<!--           <div class="evente-home-wrap-banner-content-title">活动易 · 票务电商小程序</div>
          <div class="evente-home-wrap-banner-content-txt">剧院、演出、展览、演唱会，选座售票一键拥有</div> -->
          <emfe-button theme="primary" className="evente-home-wrap-banner-content" @click="goacc" v-if="slideIndex === 1">免费试用</emfe-button>
          <emfe-button theme="primary" className="evente-home-wrap-banner-content" @click="goRegister" v-if="slideIndex === 0">立即注册</emfe-button>
        </div>
      </div>

      <div class="evente-home-wrap-bd">
        <div class="evente-home-wrap-bd-tit">多种产品形式</div>
        <div class="evente-home-wrap-bd-txt">满足众多活动场景</div>
        <div class="evente-home-wrap-bd-module">
          <div class="evente-home-wrap-bd-module-item">
            <div class="evente-home-wrap-bd-module-item-top evente-home-wrap-bd-module-item-top-1">
              <div class="evente-home-wrap-bd-module-item-top-tit">票务电商</div>
              <div class="evente-home-wrap-bd-module-item-top-txt">Ticket E-commerce</div>
            </div>
            <div class="evente-home-wrap-bd-module-item-center">
              <ul>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">在线售票</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">在线选座</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">售卖商品</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">会员管理</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">微商城</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">小程序商城</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">客户crm</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">促销工具</span></li>
              </ul>
            </div>
            <div class="evente-home-wrap-bd-module-item-bottom evente-home-wrap-bd-module-item-bottom-1">
              <div class="evente-home-wrap-bd-module-item-bottom-top">活动场景</div>
              <div class="evente-home-wrap-bd-module-item-bottom-bot"><span>剧场剧院</span><span>音乐现场</span><span>体育赛事</span><span>展览休闲</span></div>
            </div>
          </div>
          <div class="evente-home-wrap-bd-module-item">
            <div class="evente-home-wrap-bd-module-item-top evente-home-wrap-bd-module-item-top-2">
              <div class="evente-home-wrap-bd-module-item-top-tit">活动报名</div>
              <div class="evente-home-wrap-bd-module-item-top-txt">Activity registration</div>
            </div>
            <div class="evente-home-wrap-bd-module-item-center">
              <ul>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">报名收款</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">签到核销</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">短信群发</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">嘉宾管理</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">营销工具</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">活动微站</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">数据报表</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">互动传播</span></li>
                <!-- <li class="evente-home-wrap-bd-module-item-center-item evente-home-wrap-bd-module-item-center-item-null"></li> -->
              </ul>
            </div>
            <div class="evente-home-wrap-bd-module-item-bottom evente-home-wrap-bd-module-item-bottom-2">
              <div class="evente-home-wrap-bd-module-item-bottom-top">活动场景</div>
              <div class="evente-home-wrap-bd-module-item-bottom-bot"><span>户外活动</span><span>教育培训</span><span>会议活动</span><span>公司团建</span></div>
            </div>
          </div>
          <div class="evente-home-wrap-bd-module-item">
            <div class="evente-home-wrap-bd-module-item-top evente-home-wrap-bd-module-item-top-3">
              <div class="evente-home-wrap-bd-module-item-top-tit">表单问卷</div>
              <div class="evente-home-wrap-bd-module-item-top-txt">Form Questionnaire</div>
            </div>
            <div class="evente-home-wrap-bd-module-item-center">
              <ul>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">问卷调查</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">投票评选</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">报名收集</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">在线收款</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">预约登记</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">签到核销</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">会员招募</span></li>
                <li class="evente-home-wrap-bd-module-item-center-item"><span class="evente-home-wrap-bd-module-item-center-item-txt">小程序同步</span></li>
              </ul>
            </div>
            <div class="evente-home-wrap-bd-module-item-bottom evente-home-wrap-bd-module-item-bottom-3">
              <div class="evente-home-wrap-bd-module-item-bottom-top">活动场景</div>
              <div class="evente-home-wrap-bd-module-item-bottom-bot"><span>教育培训</span><span>人事招聘</span><span>校园社团</span><span>公司团建</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="evente-home-wrap-fn">
        <div class="evente-home-wrap-fn-content">
          <div class="evente-home-wrap-fn-content-1 evente-home-wrap-fn-left">
            <div class="evente-home-wrap-fn-content-1-tit">票务电商·快速拥有自己的票务商城</div>
            <div class="evente-home-wrap-fn-content-1-txt">全面支持剧场剧院、音乐现场、体育赛事、展览游乐多场景售票</div>
            <ul class="evente-home-wrap-fn-content-1-box">
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">强大票务系统</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">外币支付，自主选座<br>中英双语，人脸识别</div>
              </li>
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">一键玩转商城</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">售卖票品，售卖商品<br>招募会员，专属小程序</div>
              </li>
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">多种营销玩法</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">裂变传播，秒杀拼团<br>拉新转化，复购留存</div>
              </li>
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">精细会员管理</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">客户标签，会员特权<br>储值积分，精准营销</div>
              </li>
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">海量分销渠道</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">全网分销，专属链接<br>转化监测，定向合作</div>
              </li>
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">多维可视报表</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">出票报表，财务报表<br>交易数据，行为数据</div>
              </li>
            </ul>
          </div>
          <div class="evente-home-wrap-fn-content-2 evente-home-wrap-fn-right">
            <img class="evente-home-wrap-fn-content-2-img" v-lazy="fnImg1" alt="">
          </div>
        </div>
        <div class="evente-home-wrap-fn-opt">
          <emfe-button className="evente-home-wrap-fn-opt" theme="primary" @click="goRegister">立即注册</emfe-button>
          <emfe-button className="evente-home-wrap-fn-opt" @click="goCommerce">了解更多</emfe-button>
        </div>
      </div>


      <div class="evente-home-wrap-fn evente-home-wrap-white">
        <div class="evente-home-wrap-fn-content">
          <div class="evente-home-wrap-fn-content-1 evente-home-wrap-fn-right">
            <div class="evente-home-wrap-fn-content-1-tit">报名收款·快速实现培训/招生/报名</div>
            <div class="evente-home-wrap-fn-content-1-txt">建站、报名、推广、管理、核销、数据面面俱到</div>
            <ul class="evente-home-wrap-fn-content-1-box">
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">网站创建</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">微站、官网、小程序，三端同步</div>
              </li>
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">在线报名</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">自定义报名表，多人多支付报名</div>
              </li>
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">活动推广</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">多人拼团、领券报名、限时折扣</div>
              </li>
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">嘉宾管理</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">日程提醒、标签管理、群发短信</div>
              </li>
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">现场签到</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">电脑签到、APP签到、身份证签到</div>
              </li>
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">数据报表</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">财务报表、用户报表、签到报表</div>
              </li>
            </ul>
          </div>
          <div class="evente-home-wrap-fn-content-2 evente-home-wrap-fn-left">
            <img class="evente-home-wrap-fn-content-2-img" v-lazy="fnImg2" alt="">
          </div>
        </div>
        <div class="evente-home-wrap-fn-opt">
          <emfe-button className="evente-home-wrap-fn-opt" theme="primary"  @click="goRegister">立即注册</emfe-button>
          <emfe-button className="evente-home-wrap-fn-opt" @click="goMeetup">了解更多</emfe-button>
        </div>
      </div>


      <div class="evente-home-wrap-fn">
        <div class="evente-home-wrap-fn-content">
          <div class="evente-home-wrap-fn-content-1 evente-home-wrap-fn-left">
            <div class="evente-home-wrap-fn-content-1-tit">表单·快速实现问卷和投票，有效收集数据</div>
            <div class="evente-home-wrap-fn-content-1-txt">小程序+电脑端自动同步，小程序支持快速提现</div>
            <ul class="evente-home-wrap-fn-content-1-box">
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">多品类表单模板</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">问卷调查、信息收集、投票选拔，应有尽有</div>
              </li>
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">近40种功能组件</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">基础字段、高级字段、逻辑字段，快速发布</div>
              </li>
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">自定义外观装修</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">背景定义、头图定义、格式定义，一键应用</div>
              </li>
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">多终端便捷核销</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">APP核销、扫码核销、手机号核销，提升效率</div>
              </li>
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">小程序在线收款</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">微信收款、支付宝收款、银联外币，快速提现</div>
              </li>
              <li class="evente-home-wrap-fn-content-1-box-item">
                <div class="evente-home-wrap-fn-content-1-box-item-tit">多层次个性需求</div>
                <div class="evente-home-wrap-fn-content-1-box-item-txt">定时收集、限额收集、密码访问，超多满足</div>
              </li>
            </ul>
          </div>
          <div class="evente-home-wrap-fn-content-2 evente-home-wrap-fn-right">
            <img class="evente-home-wrap-fn-content-2-img" v-lazy="fnImg3" alt="">
          </div>
        </div>
        <div class="evente-home-wrap-fn-opt">
          <emfe-button className="evente-home-wrap-fn-opt" theme="primary" @click="goRegister">立即注册</emfe-button>
          <emfe-button className="evente-home-wrap-fn-opt" @click="goFormTools">了解更多</emfe-button>
        </div>
      </div>

      <div class="evente-home-wrap-case">
        <div class="evente-home-wrap-case-tit">活动学院：活动主办的知识库</div>
        <!-- <div class="evente-home-wrap-case-txt">做To B领域最好的售后服务企业</div> -->
        <div class="evente-home-wrap-case-top">
          <div class="evente-home-wrap-case-top-box">
            <dl>
              <dt class="evente-home-wrap-case-top-box-icon1"></dt>
              <dd>
                <div class="evente-home-wrap-case-top-box-tit">产品培训</div>
                <div class="evente-home-wrap-case-top-box-txt">我们提供细致的使用服务</div>
              </dd>
            </dl>
          </div>
          <div class="evente-home-wrap-case-top-box">
            <dl>
              <dt class="evente-home-wrap-case-top-box-icon2"></dt>
              <dd>
                <div class="evente-home-wrap-case-top-box-tit">成功主办</div>
                <div class="evente-home-wrap-case-top-box-txt">用我们的经验让主办得到全面提升</div>
              </dd>
            </dl>
          </div>
          <div class="evente-home-wrap-case-top-box">
            <dl>
              <dt class="evente-home-wrap-case-top-box-icon3"></dt>
              <dd>
                <div class="evente-home-wrap-case-top-box-tit">活动官认证</div>
                <div class="evente-home-wrap-case-top-box-txt">进阶培训和实战参与</div>
              </dd>
            </dl>
          </div>
        </div>

        <div class="evente-home-wrap-case-tit">我们服务的部分客户</div>
        <div class="evente-home-wrap-case-icons">
          <ul class="evente-home-wrap-case-icons-top">
            <li class="evente-home-wrap-case-icons-top-item" :class="{'evente-home-wrap-case-icons-top-item-act': item.cur === true}" v-for="(item, index) in box7Tab"><span class="evente-home-wrap-case-icons-top-item-dom" v-text="item.txt" @mouseenter="box7TabBtn(item, index)"></span></li>
          </ul>

          <div class="evente-home-wrap-case-icons-con" v-if="box7TabIndex === 0">
            <ul>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo1-1"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo1-2"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo1-3"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo1-4"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo1-5"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo1-6"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo1-7"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo1-8"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo1-9"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo1-10"></div></li>
            </ul>
          </div>
          <div class="evente-home-wrap-case-icons-con" v-if="box7TabIndex === 1">
            <ul>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo2-1"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo2-2"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo2-3"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo2-4"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo2-5"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo2-6"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo2-7"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo2-8"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo2-9"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo2-10"></div></li>
            </ul>
          </div>
          <div class="evente-home-wrap-case-icons-con" v-if="box7TabIndex === 2">
            <ul>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo3-1"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo3-2"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo3-3"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo3-4"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo3-5"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo3-6"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo3-7"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo3-8"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo3-9"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo3-10"></div></li>
            </ul>
          </div>
          <div class="evente-home-wrap-case-icons-con" v-if="box7TabIndex === 3">
            <ul>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo4-1"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo4-2"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo4-3"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo4-4"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo4-5"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo4-6"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo4-7"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo4-8"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo4-9"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo4-10"></div></li>
            </ul>
          </div>
          <div class="evente-home-wrap-case-icons-con" v-if="box7TabIndex === 4">
            <ul>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo5-1"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo5-2"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo5-3"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo5-4"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo5-5"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo5-6"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo5-7"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo5-8"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo5-9"></div></li>
              <li class="evente-home-wrap-case-icons-item"><div class="evente-home-wrap-case-icons-item-logo evente-home-wrap-case-icons-item-logo5-10"></div></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="evente-home-wrap-banner2">
        <div class="evente-home-wrap-banner2-box">
          <img v-lazy="com" alt="" class="evente-home-wrap-banner2-box-img">
          <div class="evente-home-wrap-banner2-box-right">
            <div class="evente-home-wrap-banner2-box-title">活动易，报名售票更容易</div>
            <div class="evente-home-wrap-banner2-box-txt">活动易主办自己的系统</div>
            <emfe-button className="evente-home-wrap-banner2-box" theme="primary" @click="goRegister">立即注册</emfe-button>
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
// import NProgress from 'nprogress';
// import siteApi from '../apis/site';
// import logo from '../assets/images/pc/wlogo1.png';
import fnImg1 from '../assets/images/pc/home/box2-4/1.png'
import fnImg2 from '../assets/images/pc/home/box2-4/2.png'
import fnImg3 from '../assets/images/pc/home/box2-4/3.png'
import com from '../assets/images/pc/home/box7/com.png'
import banner1 from '../assets/images/pc/home/banner1.jpg'
import banner2 from '../assets/images/pc/home/banner2.jpg'

import FooterPc from '../components/FooterPc.vue';
// import NavPc from '../components/NavPc.vue';
import Service from '../components/Service.vue';
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: 'pcHome',
  data() {
    return {
      FooterPc,
      // NavPc,
      Service,
      com,
      fnImg1,
      fnImg2,
      fnImg3,
      banner: [
        {
          img: banner1,
          title: '专业主办的活动管理平台',
          content: '售票 | 报名 | 表单 | 小程序',
        },
        {
          img: banner2,
          title: '活动易 · 票务电商小程序',
          content: '剧院、演出、展览、演唱会，选座售票一键拥有',
        },
      ],
      slideIndex: 0,
      // 切换
      box7Tab: [
        {
          txt: '剧场剧院',
          cur: true,
        },
        {
          txt: '演出机构',
          cur: false,
        },
        {
          txt: '音乐现场',
          cur: false,
        },
        {
          txt: '体育赛事',
          cur: false,
        },
        {
          txt: '旅游集团',
          cur: false,
        },
      ],
      box7TabIndex: 0,
    };
  },
  created() {
    // NProgress.done();
    console.log(process.env, 'env123');
    if(process.browser) {
      if (/(iPhone|iPod|iOS|Android|ipad)/i.test(navigator.userAgent)) {
        // var equipment = "wap";
        this.$router.push({
          path: '/m/',
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
    // 跳到票务电商
    goCommerce() {
      this.$router.push({
        name: 'Commerce',
      });
    },
    // 跳到表单工具
    goFormTools() {
      this.$router.push({
        name: 'FormTools',
      });
    },
    // 跳到活动报名
    goMeetup() {
      this.$router.push({
        name: 'MeetUp',
      });
    },
    changeSlide(eventName, params) {
      // console.log(eventName, params.currentSlide.index);
      this.slideIndex = params.currentSlide.index;
    },
    box7TabBtn(item, index) {
      console.log(index, 'index');
      this.box7TabIndex = index;
      this.box7Tab.forEach((i) => {
        i.cur = false;
      });
      item.cur = true;
    },
  },
  components: {
    FooterPc,
    // NavPc,
    Service,
    VueperSlides,
    VueperSlide,
  },
};
</script>

<style lang="scss">
  @import "../assets/styles/pc/home.scss";
</style>
