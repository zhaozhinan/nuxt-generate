<template>
  <div class="evente-price">
    <navpc />
    <div class="evente-price-wrap">
      <div class="evente-price-wrap-tit">A+B+C三种合作模式</div>
      <div class="evente-price-wrap-txt">从流水包到付费版到增值服务，任君选择</div>

      <!-- <div class="evente-price-wrap-tit" v-if="tabDataIndex === 1">合作模式</div>
      <div class="evente-price-wrap-tit" v-if="tabDataIndex === 0 || tabDataIndex === 2">活动易收费标准</div>
      <div class="evente-price-wrap-txt" v-if="tabDataIndex === 1">从流水包到付费版到增值服务，任君选择</div>
      <div class="evente-price-wrap-txt" v-if="tabDataIndex === 0 || tabDataIndex === 2">注册用户免费使用，大客户按需求模块定制</div> -->
      <div class="evente-price-wrap-tab">
        <div class="evente-price-wrap-tab-item" v-for="(item, index) in tabData" :key="'price_tab'+index" :class="{'evente-price-wrap-tab-act': tabDataIndex === index}" @click="tabBtn(index)"><span class="evente-price-wrap-tab-item-zm" v-text="item.zm"></span><span class="evente-price-wrap-tab-item-txt" v-text="item.txt"></span></div>
      </div>
      <div class="evente-price-wrap-bg" v-if="tabDataIndex === 1">
        <div class="evente-price-wrap-t">2019年10月前的老客户，在到期前可按照原有收费标准续费<span class="evente-price-wrap-t-tip">合约期内续费，均可享受原价；同时购买两年以上可优惠</span></div>
        <div class="evente-price-wrap-info">
          <div class="evente-price-wrap-info-item">
            <div class="evente-price-wrap-info-item-top evente-price-wrap-info-item-free">
              <div class="evente-price-wrap-info-item-top-tit1">免费版</div>
              <!-- <div class="evente-price-wrap-info-item-top-txt1">适合中小型活动主办，满足活动报名、票务销售、在线收款、问卷表单等基础活动需求</div> -->
            </div>
            <div class="evente-price-wrap-info-item-money">
              <span class="evente-price-wrap-info-item-money-fh">¥</span><span class="evente-price-wrap-info-item-money-num">0</span><span class="evente-price-wrap-info-item-money-year">/年</span>
            </div>
            <div class="evente-price-wrap-info-item-txt">3%流水费</div>
            <div class="evente-price-wrap-info-item-discount"></div>
            <div class="evente-price-wrap-info-item-btn evente-price-wrap-info-item-btn1" @click="goRegister">立即注册</div>

            <div class="evente-price-wrap-info-item-module">
              <div class="evente-price-wrap-info-item-module-tit">功能模块</div>
              <div class="evente-price-wrap-info-item-module-box" v-for="(item, index) in item1FnData" :key="'price_fn1_'+index" :class="{'evente-price-wrap-info-item-module-box-active': item1FnIndex === index}" @click="item1FnBtn(index)">
                <div class="evente-price-wrap-info-item-module-box-top">
                  <span class="evente-price-wrap-info-item-module-box-top-txt" :class="{'evente-price-wrap-info-item-module-box-top-txt-blue': item1FnIndex === index }" v-text="item.tit"></span><span class="evente-price-wrap-info-item-module-box-top-icon" :class="{'evente-price-wrap-info-item-module-box-top-icon-act': item1FnIndex === index}"></span>
                </div>
                <div class="evente-price-wrap-info-item-module-box-con" v-if="item1FnIndex === index">
                  <div class="evente-price-wrap-info-item-module-box-con-list" v-for="(obj, i) in item.list" :key="'price_fn1_obj_'+i">
                    <span class="evente-price-wrap-info-item-module-box-con-list-true" :class="{'evente-price-wrap-info-item-module-box-con-list-false': obj.is === false}" v-if="obj.is !== null"></span>
                    <span class="evente-price-wrap-info-item-module-box-con-list-txt" :class="{'evente-price-wrap-info-item-module-box-con-list-txt-hui': obj.is === false}" v-text="obj.txt"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="evente-price-wrap-info-item-module evente-price-wrap-info-item-module1-margin">
              <div class="evente-price-wrap-info-item-module-tit">服务模块</div>
              <div class="evente-price-wrap-info-item-module-box">
                <div class="evente-price-wrap-info-item-module-box-top">
                    <span class="evente-price-wrap-info-item-module-box-con-list-true"></span>
                    <span class="evente-price-wrap-info-item-module-box-con-list-txt">em活动学院线上课程</span>
                </div>
              </div>
            </div>
          </div>

          <div class="evente-price-wrap-info-item">
            <div class="evente-price-wrap-info-item-top evente-price-wrap-info-item-major">
              <div class="evente-price-wrap-info-item-top-tit2">专业版</div>
              <!-- <div class="evente-price-wrap-info-item-top-txt2">适合成长型品牌主办，满足活动报名、票务售卖、活动商城、营销获客、复购转化核心活动经营需求</div> -->
              <div class="evente-price-wrap-info-item-top-prop">赠送5万元流水包，价值1000元</div>
            </div>
            <div class="evente-price-wrap-info-item-money">
              <span class="evente-price-wrap-info-item-money-fh">¥</span><span class="evente-price-wrap-info-item-money-num">3999</span><span class="evente-price-wrap-info-item-money-year">/年</span>
              <div class="evente-price-wrap-info-item-money-through">原价9800</div>
            </div>
            <div class="evente-price-wrap-info-item-txt">2%流水费</div>
            <div class="evente-price-wrap-info-item-discount" @click="goTab1">购买流水包更优惠<span class="evente-price-wrap-info-item-discount-icon"></span></div>
            <div class="evente-price-wrap-info-item-btn evente-price-wrap-info-item-btn2" @click="goacc">免费试用</div>

            <div class="evente-price-wrap-info-item-module">
              <div class="evente-price-wrap-info-item-module-tit">功能模块</div>
              <div class="evente-price-wrap-info-item-module-box" v-for="(item, index) in item2FnData" :key="'price_fn2_'+index" :class="{'evente-price-wrap-info-item-module-box-active': item2FnIndex === index}" @click="item2FnBtn(index)">
                <div class="evente-price-wrap-info-item-module-box-top">
                  <span class="evente-price-wrap-info-item-module-box-top-txt" :class="{'evente-price-wrap-info-item-module-box-top-txt-blue': item2FnIndex === index }" v-text="item.tit"></span><span class="evente-price-wrap-info-item-module-box-top-icon" :class="{'evente-price-wrap-info-item-module-box-top-icon-act': item2FnIndex === index}"></span>
                </div>
                <div class="evente-price-wrap-info-item-module-box-con" v-if="item2FnIndex === index">
                  <div class="evente-price-wrap-info-item-module-box-con-list" v-for="(obj, i) in item.list" :key="'price_fn2_obj_'+i">
                    <span class="evente-price-wrap-info-item-module-box-con-list-true" :class="{'evente-price-wrap-info-item-module-box-con-list-false': obj.is === false}" v-if="obj.is !== null"></span>
                    <span class="evente-price-wrap-info-item-module-box-con-list-txt" :class="{'evente-price-wrap-info-item-module-box-con-list-txt-hui': obj.is === false}" v-text="obj.txt"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="evente-price-wrap-info-item-module evente-price-wrap-info-item-module2-margin">
              <div class="evente-price-wrap-info-item-module-tit">服务模块</div>
              <div class="evente-price-wrap-info-item-module-box">
                <div class="evente-price-wrap-info-item-module-box-top">
                    <span class="evente-price-wrap-info-item-module-box-con-list-true"></span>
                    <span class="evente-price-wrap-info-item-module-box-con-list-txt">em活动学院线上课程</span>
                </div>
                <div class="evente-price-wrap-info-item-module-box-top">
                    <span class="evente-price-wrap-info-item-module-box-con-list-true"></span>
                    <span class="evente-price-wrap-info-item-module-box-con-list-txt">7*12小时专业售后顾问</span>
                </div>
                <div class="evente-price-wrap-info-item-module-box-top">
                    <span class="evente-price-wrap-info-item-module-box-con-list-true"></span>
                    <span class="evente-price-wrap-info-item-module-box-con-list-txt">免费设计票纸1版</span>
                </div>
              </div>
            </div>
          </div>

          <div class="evente-price-wrap-info-item">
            <div class="evente-price-wrap-info-item-top evente-price-wrap-info-item-flagship">
              <div class="evente-price-wrap-info-item-top-tit3">旗舰/定制版</div>
              <!-- <div class="evente-price-wrap-info-item-top-txt3">适合规模化经营的大型剧院、演出厂牌等成熟主办，除基础直销售卖外，还满足会员留存、复购增购等创新营销玩法等深度经营需求</div> -->
            </div>
            <div class="evente-price-wrap-info-item-money">
              <span class="evente-price-wrap-info-item-money-fh">¥</span><span class="evente-price-wrap-info-item-money-num">4-30万</span>起<span class="evente-price-wrap-info-item-money-year">/年</span>
            </div>
            <div class="evente-price-wrap-info-item-txt">按不同需求定制</div>
            <div class="evente-price-wrap-info-item-discount"></div>
            <div class="evente-price-wrap-info-item-btn evente-price-wrap-info-item-btn3" onclick="qimoChatClick();">商务洽谈</div>
            <div class="evente-price-wrap-info-item-module">
              <div class="evente-price-wrap-info-item-module-tit">功能模块</div>
              <div class="evente-price-wrap-info-item-module-box" v-for="(item, index) in item3FnData" :key="'price_fn3_'+index" :class="{'evente-price-wrap-info-item-module-box-active': item3FnIndex === index}" @click="item3FnBtn(index)">
                <div class="evente-price-wrap-info-item-module-box-top">
                  <span class="evente-price-wrap-info-item-module-box-top-txt" :class="{'evente-price-wrap-info-item-module-box-top-txt-blue': item3FnIndex === index }" v-text="item.tit"></span><span class="evente-price-wrap-info-item-module-box-top-icon" :class="{'evente-price-wrap-info-item-module-box-top-icon-act': item3FnIndex === index}"></span>
                </div>
                <div class="evente-price-wrap-info-item-module-box-con" v-if="item3FnIndex === index">
                  <div class="evente-price-wrap-info-item-module-box-con-list" v-for="(obj, i) in item.list" :key="'price_fn3_obj_'+i">
                    <span class="evente-price-wrap-info-item-module-box-con-list-true" :class="{'evente-price-wrap-info-item-module-box-con-list-false': obj.is === false}" v-if="obj.is !== null"></span>
                    <span class="evente-price-wrap-info-item-module-box-con-list-txt" :class="{'evente-price-wrap-info-item-module-box-con-list-txt-hui': obj.is === false}" v-text="obj.txt"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="evente-price-wrap-info-item-module evente-price-wrap-info-item-module3-margin">
              <div class="evente-price-wrap-info-item-module-tit">服务模块</div>
              <div class="evente-price-wrap-info-item-module-box">
                <div class="evente-price-wrap-info-item-module-box-top">
                    <span class="evente-price-wrap-info-item-module-box-con-list-true"></span>
                    <span class="evente-price-wrap-info-item-module-box-con-list-txt">em活动学院线上课程</span>
                </div>
                <div class="evente-price-wrap-info-item-module-box-top">
                    <span class="evente-price-wrap-info-item-module-box-con-list-true"></span>
                    <span class="evente-price-wrap-info-item-module-box-con-list-txt">7*12小时专业售后顾问</span>
                </div>
                <div class="evente-price-wrap-info-item-module-box-top">
                    <span class="evente-price-wrap-info-item-module-box-con-list-true"></span>
                    <span class="evente-price-wrap-info-item-module-box-con-list-txt">免费设计票纸1版</span>
                </div>
                <div class="evente-price-wrap-info-item-module-box-top">
                    <span class="evente-price-wrap-info-item-module-box-con-list-true"></span>
                    <span class="evente-price-wrap-info-item-module-box-con-list-txt">4小时专职顾问在线培训，20万以上享有</span>
                </div>
                <div class="evente-price-wrap-info-item-module-box-top">
                    <span class="evente-price-wrap-info-item-module-box-con-list-true"></span>
                    <span class="evente-price-wrap-info-item-module-box-con-list-txt">40小时400专职客服，20万以上享有</span>
                </div>
                <div class="evente-price-wrap-info-item-module-box-top">
                    <span class="evente-price-wrap-info-item-module-box-con-list-true"></span>
                    <span class="evente-price-wrap-info-item-module-box-con-list-txt">免费搭建店铺/小程序，一万以上</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="evente-price-wrap-zk"  v-if="tabDataIndex === 0">
        <div class="evente-price-wrap-zk-tit">流水折扣包</div>
        <div class="evente-price-wrap-zk-txt">单独购买流水包则一年内有效，使用专业版或定制版的合作期内，流水包持久有效。</div>
        <ul class="evente-price-wrap-zk-info">
          <li class="evente-price-wrap-zk-info-item">
            <div class="evente-price-wrap-zk-info-item-tit">流水额度</div>
            <div class="evente-price-wrap-zk-info-item-num">5万</div>
            <div class="evente-price-wrap-zk-info-item-num">20万</div>
            <div class="evente-price-wrap-zk-info-item-num">40万</div>
          </li>
          <li class="evente-price-wrap-zk-info-item">
            <div class="evente-price-wrap-zk-info-item-tit">流水费原价（3%）</div>
            <div class="evente-price-wrap-zk-info-item-num">¥1500</div>
            <div class="evente-price-wrap-zk-info-item-num">¥6000</div>
            <div class="evente-price-wrap-zk-info-item-num">¥12000</div>
          </li>
          <li class="evente-price-wrap-zk-info-item">
            <div class="evente-price-wrap-zk-info-item-tit">优惠流水包</div>
            <div class="evente-price-wrap-zk-info-item-num evente-price-wrap-zk-info-item-blue">¥900</div>
            <div class="evente-price-wrap-zk-info-item-num evente-price-wrap-zk-info-item-blue">¥3200</div>
            <div class="evente-price-wrap-zk-info-item-num evente-price-wrap-zk-info-item-blue">¥5600</div>
          </li>
          <li class="evente-price-wrap-zk-info-item">
            <div class="evente-price-wrap-zk-info-item-tit">比免费版3%节省</div>
            <div class="evente-price-wrap-zk-info-item-num">¥600</div>
            <div class="evente-price-wrap-zk-info-item-num">¥2800</div>
            <div class="evente-price-wrap-zk-info-item-num">¥6400</div>
          </li>
          <li class="evente-price-wrap-zk-info-item">
            <div class="evente-price-wrap-zk-info-item-tit">比专业版2%节省</div>
            <div class="evente-price-wrap-zk-info-item-num">¥100</div>
            <div class="evente-price-wrap-zk-info-item-num">¥800</div>
            <div class="evente-price-wrap-zk-info-item-num">¥2400</div>
          </li>
        </ul>
        <!-- <div class="evente-price-wrap-zk-use"><span>使用办法：购买某一档位流水包后，结算金额按该档折扣进行收费，超出部分按原比例收费；如此次结算金额未超出该档额度，则可下次可继续使用</span><span class="evente-price-wrap-zk-use-right">有效期限：一年</span></div> -->
        <div class="evente-price-wrap-btn">
          <emfe-button theme="primary" className="evente-price-wrap-blue" onclick="qimoChatClick();">立即咨询</emfe-button>
        </div>
      </div>
      <div class="evente-price-wrap-service"  v-if="tabDataIndex === 2">
        <div class="evente-price-wrap-service-tit">增值服务</div>
        <div class="evente-price-wrap-service-txt">系统增值服务按产品使用数量和时长计费，或按次计费<br>营销增值服务，按人工天收费，半天起计时<br>硬件耗材可购买或租赁</div>
      <!--   <div class="evente-price-wrap-service-info">
          <div class="evente-price-wrap-service-info-item">
            <div class="evente-price-wrap-service-info-item-1">系统增值服务</div>
            <div class="evente-price-wrap-service-info-item-2">
              <div class="evente-price-wrap-service-info-item-2-list">自收款申请</div>
              <div class="evente-price-wrap-service-info-item-2-list">1对1在线顾问</div>
              <div class="evente-price-wrap-service-info-item-2-list">400专职客服</div>
              <div class="evente-price-wrap-service-info-item-2-list">专职现场培训</div>
            </div>
            <div class="evente-price-wrap-service-info-item-2">
              <div class="evente-price-wrap-service-info-item-2-list">500元/次</div>
              <div class="evente-price-wrap-service-info-item-2-list">5000元/年</div>
              <div class="evente-price-wrap-service-info-item-2-list">300元/天/坐席（每天8小时）</div>
              <div class="evente-price-wrap-service-info-item-2-list">2000元/次</div>
            </div>
          </div>

          <div class="evente-price-wrap-service-info-item">
            <div class="evente-price-wrap-service-info-item-1">营销增值服务</div>
            <div class="evente-price-wrap-service-info-item-2">
              <div class="evente-price-wrap-service-info-item-2-list">票务统筹</div>
              <div class="evente-price-wrap-service-info-item-2-list">分销拓展</div>
              <div class="evente-price-wrap-service-info-item-2-list">现场执行</div>
              <div class="evente-price-wrap-service-info-item-2-list">会员体系咨询搭建</div>
              <div class="evente-price-wrap-service-info-item-2-list">店铺商城装修</div>
              <div class="evente-price-wrap-service-info-item-2-list">小程序商城搭建（含申请）</div>
              <div class="evente-price-wrap-service-info-item-2-list">公众号代运营</div>
              <div class="evente-price-wrap-service-info-item-2-list">标准数据报告</div>
            </div>
            <div class="evente-price-wrap-service-info-item-2">
              <div class="evente-price-wrap-service-info-item-2-list">5000元/月</div>
              <div class="evente-price-wrap-service-info-item-2-list">5000元-6万元/案</div>
              <div class="evente-price-wrap-service-info-item-2-list">600-1000元/人/天</div>
              <div class="evente-price-wrap-service-info-item-2-list">50000元起</div>
              <div class="evente-price-wrap-service-info-item-2-list">500元/2版</div>
              <div class="evente-price-wrap-service-info-item-2-list">1000元/2版</div>
              <div class="evente-price-wrap-service-info-item-2-list">10000-50000元/月</div>
              <div class="evente-price-wrap-service-info-item-2-list">6000元/份</div>
            </div>
          </div>

          <div class="evente-price-wrap-service-info-item">
            <div class="evente-price-wrap-service-info-item-1">硬件服务</div>
            <div class="evente-price-wrap-service-info-item-2">
              <div class="evente-price-wrap-service-info-item-2-list">打票机（租赁）</div>
              <div class="evente-price-wrap-service-info-item-2-list">取票机</div>
              <div class="evente-price-wrap-service-info-item-2-list">常规票纸</div>
              <div class="evente-price-wrap-service-info-item-2-list">手持验票机</div>
              <div class="evente-price-wrap-service-info-item-2-list">闸机</div>
              <div class="evente-price-wrap-service-info-item-2-list">身份证验票仪</div>
            </div>
            <div class="evente-price-wrap-service-info-item-2">
              <div class="evente-price-wrap-service-info-item-2-list">100-200元/天</div>
              <div class="evente-price-wrap-service-info-item-2-list">32800元/台</div>
              <div class="evente-price-wrap-service-info-item-2-list">1元/张</div>
              <div class="evente-price-wrap-service-info-item-2-list">100-300元/天</div>
              <div class="evente-price-wrap-service-info-item-2-list">38000元/台</div>
              <div class="evente-price-wrap-service-info-item-2-list">300-500元/天</div>
            </div>
          </div>
        </div> -->
        <div class="evente-price-wrap-service-info">
          <div class="evente-price-wrap-service-info-item">
            <dl class="evente-price-wrap-service-info-item-top">
              <dt class="evente-price-wrap-service-info-item-top-icon1"></dt>
              <dd class="evente-price-wrap-service-info-item-top-tit">系统增值服务</dd>
            </dl>
            <div class="evente-price-wrap-service-info-item-box">
              <div class="evente-price-wrap-service-info-item-td">自收款申请</div>
              <div class="evente-price-wrap-service-info-item-td">按次数收费</div>
              <div class="evente-price-wrap-service-info-item-td">400专职客服</div>
              <div class="evente-price-wrap-service-info-item-td">按年收费</div>
              <div class="evente-price-wrap-service-info-item-td">1对1在线顾问</div>
              <div class="evente-price-wrap-service-info-item-td">按/天/坐席收费<br>（每天8小时）</div>
              <div class="evente-price-wrap-service-info-item-td">专职现场培训</div>
              <div class="evente-price-wrap-service-info-item-td">按次数收费</div>
            </div>
          </div>

          <div class="evente-price-wrap-service-info-item">
            <dl class="evente-price-wrap-service-info-item-top">
              <dt class="evente-price-wrap-service-info-item-top-icon2"></dt>
              <dd class="evente-price-wrap-service-info-item-top-tit">营销增值服务</dd>
            </dl>
            <div class="evente-price-wrap-service-info-item-box">
              <div class="evente-price-wrap-service-info-item-td">票务统筹</div>
              <div class="evente-price-wrap-service-info-item-td">按月收费</div>
              <div class="evente-price-wrap-service-info-item-td">分销拓展</div>
              <div class="evente-price-wrap-service-info-item-td">按流水抽成</div>
              <div class="evente-price-wrap-service-info-item-td">营销全案策划</div>
              <div class="evente-price-wrap-service-info-item-td">按每案收费</div>
              <div class="evente-price-wrap-service-info-item-td">现场执行</div>
              <div class="evente-price-wrap-service-info-item-td">按人/天收费</div>
              <div class="evente-price-wrap-service-info-item-td">会员体系咨询搭建</div>
              <div class="evente-price-wrap-service-info-item-td">按每案收费</div>
              <div class="evente-price-wrap-service-info-item-td">店铺商城装修</div>
              <div class="evente-price-wrap-service-info-item-td">按个收费</div>
              <div class="evente-price-wrap-service-info-item-td">小程序搭建（含申请）</div>
              <div class="evente-price-wrap-service-info-item-td">按个收费</div>
              <div class="evente-price-wrap-service-info-item-td">公众号代运营</div>
              <div class="evente-price-wrap-service-info-item-td">按月收费</div>
              <div class="evente-price-wrap-service-info-item-td">标准数据报告</div>
              <div class="evente-price-wrap-service-info-item-td">按每份收费</div>
            </div>
          </div>

          <div class="evente-price-wrap-service-info-item">
            <dl class="evente-price-wrap-service-info-item-top">
              <dt class="evente-price-wrap-service-info-item-top-icon3"></dt>
              <dd class="evente-price-wrap-service-info-item-top-tit">硬件服务</dd>
            </dl>
            <div class="evente-price-wrap-service-info-item-box">
              <div class="evente-price-wrap-service-info-item-td">打票机（租赁）</div>
              <div class="evente-price-wrap-service-info-item-td">按天数收费</div>
              <div class="evente-price-wrap-service-info-item-td">取票机</div>
              <div class="evente-price-wrap-service-info-item-td">按台数收费</div>
              <div class="evente-price-wrap-service-info-item-td">常规票纸</div>
              <div class="evente-price-wrap-service-info-item-td">按张数收费</div>
              <div class="evente-price-wrap-service-info-item-td">手持验票机</div>
              <div class="evente-price-wrap-service-info-item-td">按天数收费</div>
              <div class="evente-price-wrap-service-info-item-td">闸机</div>
              <div class="evente-price-wrap-service-info-item-td">按台数收费</div>
              <div class="evente-price-wrap-service-info-item-td">身份证验票仪</div>
              <div class="evente-price-wrap-service-info-item-td">按天数收费</div>
            </div>
          </div>
        </div>
        <div class="evente-price-wrap-btn">
          <emfe-button theme="primary" className="evente-price-wrap-blue" onclick="qimoChatClick();">立即咨询</emfe-button>
        </div>
      </div>
    </div>

    <FooterPc />
    <Service ref="serviceRef" />
    <transition name="fade"><go-top class="service-gotop" :height="70" :bottom="0" :right="10" :duration="2000"></go-top></transition>

  </div>
</template>
<script>
import NavPc from '../components/NavPc.vue';
import FooterPc from '../components/FooterPc.vue';
import Service from '../components/Service.vue';

export default {
  data() {
    return {
      Service,
      // NavPc,
      FooterPc,
      item1FnIndex: 0,
      item1FnData: [
        {
          tit: '活动：多场景发布（售票+报名）',
          list: [
            {
              is: true,
              txt: '多模板活动发布',
            },
            {
              is: true,
              txt: '多票品',
            },
            {
              is: true,
              txt: '套票折扣',
            },
            {
              is: false,
              txt: '多场次',
            },
            {
              is: false,
              txt: '中英双语',
            },
            {
              is: true,
              txt: '访问限制',
            },
            {
              is: true,
              txt: '报名信息收集',
            },
            {
              is: false,
              txt: '限购设置',
            },
            {
              is: false,
              txt: '批量出票',
            },
            {
              is: false,
              txt: '页面装修',
            },
            {
              is: true,
              txt: '电脑端验票',
            },
            {
              is: true,
              txt: 'APP核销',
            },
            {
              is: true,
              txt: '活动报表',
            },
            {
              is: false,
              txt: '智慧选座',
            },
          ],
        },
        {
          tit: '商品：售卖管理',
          list: [
            {
              is: true,
              txt: '商品发布上架',
            },
            {
              is: true,
              txt: '库存管理',
            },
            {
              is: true,
              txt: '订单管理',
            },
            {
              is: true,
              txt: '快递设置',
            },
            {
              is: true,
              txt: '商品数据统计',
            },
            {
              is: null,
              txt: '',
            },
          ],
        },
        {
          tit: '表单：问卷+报名收款+投票',
          list: [
            {
              is: true,
              txt: '表单多模版',
            },
            {
              is: true,
              txt: '表单核销',
            },
            {
              is: true,
              txt: '小程序发布',
            },
            {
              is: true,
              txt: '逻辑表单',
            },
          ],
        },
        {
          tit: '财务：订单管理、财务管理',
          list: [
            {
              is: true,
              txt: '订单管理',
            },
            {
              is: true,
              txt: '财务管理',
            },
          ],
        },
        {
          tit: '支付：银联、支付宝、微信支付',
          list: [
            {
              is: true,
              txt: '银联',
            },
            {
              is: true,
              txt: '微信支付',
            },
            {
              is: true,
              txt: '支付宝',
            },
            {
              is: false,
              txt: '外币支付',
            },
          ],
        },
        {
          tit: '收款：代收款',
          list: [
            {
              is: false,
              txt: '自收款',
            },
            {
              is: true,
              txt: '代收款',
            },
          ],
        },
        {
          tit: 'CRM：用户标签、高级筛选、群发短信等',
          list: [
            {
              is: true,
              txt: '用户列表',
            },
            {
              is: true,
              txt: '高级筛选',
            },
            {
              is: true,
              txt: '用户标签',
            },
            {
              is: false,
              txt: '用户导入导出',
            },
            {
              is: true,
              txt: '营销短信200条',
            },
            {
              is: null,
              txt: '',
            },
          ],
        },
      ],
      // item2
      item2FnIndex: 0,
      item2FnData: [
        {
          tit: '活动：多场景发布（售票+报名）',
          list: [
            {
              is: true,
              txt: '多模板活动发布',
            },
            {
              is: true,
              txt: '多票品',
            },
            {
              is: true,
              txt: '套票折扣',
            },
            {
              is: true,
              txt: '多场次',
            },
            {
              is: true,
              txt: '中英双语',
            },
            {
              is: true,
              txt: '访问限制',
            },
            {
              is: true,
              txt: '报名信息收集',
            },
            {
              is: true,
              txt: '限购设置',
            },
            {
              is: true,
              txt: '批量出票',
            },
            {
              is: true,
              txt: '页面装修',
            },
            {
              is: true,
              txt: '电脑端验票',
            },
            {
              is: true,
              txt: 'APP核销',
            },
            {
              is: true,
              txt: '活动报表',
            },
            {
              is: true,
              txt: '智慧选座',
            },
          ],
        },
        {
          tit: '商品：售卖管理',
          list: [
            {
              is: true,
              txt: '商品发布上架',
            },
            {
              is: true,
              txt: '库存管理',
            },
            {
              is: true,
              txt: '订单管理',
            },
            {
              is: true,
              txt: '快递设置',
            },
            {
              is: true,
              txt: '商品数据统计',
            },
            {
              is: null,
              txt: '',
            },
          ],
        },
        {
          tit: '表单：问卷+报名收款+投票',
          list: [
            {
              is: true,
              txt: '表单多模版',
            },
            {
              is: true,
              txt: '表单核销',
            },
            {
              is: true,
              txt: '小程序发布',
            },
            {
              is: true,
              txt: '逻辑表单',
            },
          ],
        },
        {
          tit: '财务：订单管理、财务管理',
          list: [
            {
              is: true,
              txt: '订单管理',
            },
            {
              is: true,
              txt: '财务管理',
            },
          ],
        },
        {
          tit: '支付：银联、支付宝、微信支付',
          list: [
            {
              is: true,
              txt: '银联',
            },
            {
              is: true,
              txt: '微信支付',
            },
            {
              is: true,
              txt: '支付宝',
            },
            {
              is: false,
              txt: '外币支付',
            },
          ],
        },
        {
          tit: '收款：自收款/代收款',
          list: [
            {
              is: true,
              txt: '自收款',
            },
            {
              is: true,
              txt: '代收款',
            },
          ],
        },
        {
          tit: 'CRM：用户标签、高级筛选、群发短信等',
          list: [
            {
              is: true,
              txt: '用户列表',
            },
            {
              is: true,
              txt: '高级筛选',
            },
            {
              is: true,
              txt: '用户标签',
            },
            {
              is: true,
              txt: '用户导入导出',
            },
            {
              is: true,
              txt: '营销短信2000条',
            },
            {
              is: null,
              txt: '',
            },
          ],
        },
        {
          tit: '商城：一键生成微信H5商城',
          list: [
            {
              is: true,
              txt: '微商城',
            },
            {
              is: false,
              txt: '小程序商城',
            },
          ],
        },
        {
          tit: '分销：渠道分销+分销监测',
          list: [
            {
              is: true,
              txt: '渠道分销',
            },
            {
              is: true,
              txt: '分销监测',
            },
          ],
        },
        {
          tit: '营销：优惠券、限时折扣、微信吸粉等4种',
          list: [
            {
              is: true,
              txt: '优惠券',
            },
            {
              is: true,
              txt: '限时折扣',
            },
            {
              is: true,
              txt: '微信消息通知',
            },
            {
              is: true,
              txt: '微信吸粉',
            },
            {
              is: false,
              txt: 'LOGO白标定制',
            },
            {
              is: false,
              txt: '短信签名定制',
            },
            {
              is: false,
              txt: '拼团',
            },
            {
              is: false,
              txt: '次卡/年卡',
            },
            {
              is: false,
              txt: '满减满折',
            },
            {
              is: false,
              txt: '满包邮',
            },
            {
              is: false,
              txt: '优惠码',
            },
            {
              is: null,
              txt: '',
            },
          ],
        },
        {
          tit: '数据：身份证分析、手机号分析等2种',
          list: [
            {
              is: false,
              txt: '交易数据大屏',
            },
            {
              is: false,
              txt: '用户数据大屏',
            },
            {
              is: true,
              txt: '手机号数据分析',
            },
            {
              is: true,
              txt: '身份证数据分析',
            },
          ],
        },
      ],
      // item3
      item3FnIndex: 0,
      item3FnData: [
        {
          tit: '活动：多场景发布（售票+报名）',
          list: [
            {
              is: true,
              txt: '多模板活动发布',
            },
            {
              is: true,
              txt: '多票品',
            },
            {
              is: true,
              txt: '套票折扣',
            },
            {
              is: true,
              txt: '多场次',
            },
            {
              is: true,
              txt: '中英双语',
            },
            {
              is: true,
              txt: '访问限制',
            },
            {
              is: true,
              txt: '报名信息收集',
            },
            {
              is: true,
              txt: '限购设置',
            },
            {
              is: true,
              txt: '批量出票',
            },
            {
              is: true,
              txt: '页面装修',
            },
            {
              is: true,
              txt: '电脑端验票',
            },
            {
              is: true,
              txt: 'APP核销',
            },
            {
              is: true,
              txt: '活动报表',
            },
            {
              is: true,
              txt: '智慧选座',
            },
          ],
        },
        {
          tit: '商品：售卖管理',
          list: [
            {
              is: true,
              txt: '商品发布上架',
            },
            {
              is: true,
              txt: '库存管理',
            },
            {
              is: true,
              txt: '订单管理',
            },
            {
              is: true,
              txt: '快递设置',
            },
            {
              is: true,
              txt: '商品数据统计',
            },
            {
              is: null,
              txt: '',
            },
          ],
        },
        {
          tit: '表单：问卷+报名收款+投票',
          list: [
            {
              is: true,
              txt: '表单多模版',
            },
            {
              is: true,
              txt: '表单核销',
            },
            {
              is: true,
              txt: '小程序发布',
            },
            {
              is: true,
              txt: '逻辑表单',
            },
          ],
        },
        {
          tit: '财务：订单管理、财务管理',
          list: [
            {
              is: true,
              txt: '订单管理',
            },
            {
              is: true,
              txt: '财务管理',
            },
          ],
        },
        {
          tit: '支付：银联、支付宝、微信支付、外币',
          list: [
            {
              is: true,
              txt: '银联',
            },
            {
              is: true,
              txt: '微信支付',
            },
            {
              is: true,
              txt: '支付宝',
            },
            {
              is: true,
              txt: '外币支付',
            },
          ],
        },
        {
          tit: '收款：自收款/代收款',
          list: [
            {
              is: true,
              txt: '自收款',
            },
            {
              is: true,
              txt: '代收款',
            },
          ],
        },
        {
          tit: 'CRM：用户标签、高级筛选、群发短信等',
          list: [
            {
              is: true,
              txt: '用户列表',
            },
            {
              is: true,
              txt: '高级筛选',
            },
            {
              is: true,
              txt: '用户标签',
            },
            {
              is: true,
              txt: '用户导入导出',
            },
            {
              is: true,
              txt: '营销短信20000条',
            },
            {
              is: null,
              txt: '',
            },
          ],
        },
        {
          tit: '商城：一键生成微信H5商城+小程序',
          list: [
            {
              is: true,
              txt: '微商城',
            },
            {
              is: true,
              txt: '小程序商城',
            },
          ],
        },
        {
          tit: '分销：渠道分销+分销监测+票点分销',
          list: [
            {
              is: true,
              txt: '渠道分销',
            },
            {
              is: true,
              txt: '分销监测',
            },
          ],
        },
        {
          tit: '营销：优惠券、限时折、拼团、满减满折等11种',
          list: [
            {
              is: true,
              txt: '优惠券',
            },
            {
              is: true,
              txt: '限时折扣',
            },
            {
              is: true,
              txt: '微信消息通知',
            },
            {
              is: true,
              txt: '微信吸粉',
            },
            {
              is: true,
              txt: 'LOGO白标定制',
            },
            {
              is: true,
              txt: '短信签名定制',
            },
            {
              is: true,
              txt: '拼团',
            },
            {
              is: true,
              txt: '次卡/年卡',
            },
            {
              is: true,
              txt: '满减满折',
            },
            {
              is: true,
              txt: '满包邮',
            },
            {
              is: true,
              txt: '优惠码',
            },
            {
              is: null,
              txt: '',
            },
          ],
        },
        {
          tit: '数据：经营数据、用户可视化等4种数据工具',
          list: [
            {
              is: true,
              txt: '交易数据大屏',
            },
            {
              is: true,
              txt: '用户数据大屏',
            },
            {
              is: true,
              txt: '手机号数据分析',
            },
            {
              is: true,
              txt: '身份证数据分析',
            },
          ],
        },
        {
          tit: '会员：等级、付费、储值、积分、年卡等复购工具',
          list: [
            {
              is: true,
              txt: '会员等级权益系统',
            },
            {
              is: true,
              txt: '会员付费系统',
            },
            {
              is: true,
              txt: '会员储值系统',
            },
            {
              is: true,
              txt: '会员积分系统',
            },
          ],
        },
        {
          tit: '子账户：分角色赋予不同权限',
          list: [
            {
              is: true,
              txt: '角色创建',
            },
            {
              is: true,
              txt: '权限分配',
            },
          ],
        },
      ],
      tabDataIndex: 1,
      tabData: [
        {
          zm: 'A',
          txt: '优惠流水包',
        },
        {
          zm: 'B',
          txt: '免费版到付费版',
        },
        {
          zm: 'C',
          txt: '增值服务',
        },
      ],
    };
  },
  created() {
    this.edition = this.$route.params.edition;
    console.log(this.edition, 22222);
    if (process.browser) {
      if (/(iPhone|iPod|iOS|Android|ipad)/i.test(navigator.userAgent)) {
        // var equipment = "wap";
        this.$router.push({
          path: '/m/price',
        });
      }
    }
  },
  methods: {
    item1FnBtn(e) {
      this.item1FnIndex = e;
      this.item2FnIndex = e;
      this.item3FnIndex = e;
    },
    item2FnBtn(e) {
      this.item1FnIndex = e;
      this.item2FnIndex = e;
      this.item3FnIndex = e;
    },
    item3FnBtn(e) {
      this.item1FnIndex = e;
      this.item2FnIndex = e;
      this.item3FnIndex = e;
    },
    goacc() {
      // window.open('https://home.evente.cn/account/console');
      this.$refs.serviceRef.openTryout();
    },
    goRegister() {
      window.open('https://home.evente.cn/account/register');
    },
    tabBtn(i) {
      if(this.tabDataIndex !== i) {
        this.tabDataIndex = i;
      }
    },
    goTab1() {
      this.tabDataIndex = 0;
      window.scrollTo(0,0);
    },
  },
  components: {
    // NavPc,
    FooterPc,
    Service,
  },
};
</script>
<style lang="scss">
@import "../assets/styles/pc/price.scss";
</style>
