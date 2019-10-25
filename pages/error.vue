<template>
  <div class="error">
     <div class="error-content">404</div>
     <div class="error-next">将返回到活动易首页......</div>
  </div>
</template>
<script>
export default {
  name: 'Error',
  created() {
    /* eslint-disable */
    // setTimeout(() => {
    this.$router.push({
      path: '/',
    });
    // }, 1000);
  },
};
</script>

<style>
  .error {
    text-align: center;
    padding: 50px 0;
    color: #666;
  }

  .error-content {
    font-size: 78px;
    text-shadow: 0 0 2px #dcdcdc;
    color: #999;
    font-weight: bold;
/*    font-family: DINAlternate-Bold;*/
  }

  .error-next {
    font-size: 20px;
    color: #1996f9;
  }
</style>
