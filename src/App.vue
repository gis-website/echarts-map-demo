<!--
 * @Author: TQtong 2733707740@qq.com
 * @Date: 2023-04-11 09:48:16
 * @LastEditors: TQtong 2733707740@qq.com
 * @LastEditTime: 2023-04-11 19:49:34
 * @FilePath: \echarts-map-demo\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <EchartsMap></EchartsMap>
</template>

<script setup lang="ts" >
import EchartsMap from '@/views/EchartsMap.vue'

</script>

<style lang="less">

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
