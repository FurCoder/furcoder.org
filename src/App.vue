<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import index from './components/index.vue'
export default {
  name: 'app',
  components: {
    index
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+SC:400,700,900|Syncopate:700&subset=chinese-simplified');
#app {
  font-family: 'Noto Sans SC','Microsoft YaHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'WenQuanYi Micro Hei', sans-serif;
  /* -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC',  */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100%;
  font-size:16px;
}
</style>
