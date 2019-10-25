<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Index',
    data() {
      return {
        api: '',
      };
    },
    created() {
      console.log(process.env, 'process.env');
      console.log(process.env.NODE_ENV, 'process.env2222');
      if(process.browser) {
        let equipment;
        if (/(iPhone|iPod|iOS|Android|ipad)/i.test(navigator.userAgent)) {
          equipment = "wap";
        } else {
          equipment = "pc";
        }

        if(equipment === 'wap') {
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
          const obj = {
            url: encodeURIComponent(window.location.href),
          };
          console.log(obj, '参数');
          axios.get(`${this.api}home/homepage/share?url=${obj.url}`).then((result) => {
            console.log(result, '分享信息');
            // document.title = result.title;
            // 分享
            window.wx.config(result.config);
            window.wx.ready(() => {
              window.wx.onMenuShareAppMessage({
                title: result.share.title,
                desc: result.share.desc,
                link: result.share.link,
                imgUrl: result.share.imgUrl,
              });
              window.wx.onMenuShareTimeline({
                title: result.share.title,
                link: result.share.href,
                imgUrl: result.share.imgUrl,
              });
            });
            // 分享
          });
        }
      }
    },
  };
</script>