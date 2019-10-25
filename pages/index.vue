<template>
</template>

<script>
export default {
  name: 'Index',
  created() {
    if(process.browser) {
      if (/(iPhone|iPod|iOS|Android|ipad)/i.test(navigator.userAgent)) {
        // var equipment = "wap";
        this.$router.replace({
          path: 'm/',
        });
      } else {
        // var equipment = "pc";
        this.$router.replace({
          path: 'home',
        });
      }
    }
  },
}
</script>