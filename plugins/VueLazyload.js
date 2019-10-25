import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  preLoad: 1,
  error: '',
  loading: '',
  attempt: 1,
});
