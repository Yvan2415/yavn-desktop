<!--
 * @Author: yvan fang
 * @Date: 2021-01-22 09:00:00
 * @LastEditTime: 2021-01-13 15:36:14
 * @LastEditors: your name
 * @description 组件间通信
-->

<template>
  <div>
    <h2>组件间的通信方式(7种)</h2>
    <hr>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="toPage(item.router)">{{item.label}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ComponentCommunication',
  data() {
    return {
      list: [
        { label: 'props/@on+$emit', router: 'PropsOnEmit'},
        { label: 'attrs/$listeners', router: 'AttrsListeners'},
      ]
    }
  },
  methods: {
    toPage(router) {
      this.$router.push(router)
    }
  }
}
</script>
<style lang="scss" scoped>
  ul{
    li{
      width: 200px;
    }
    li:hover{
      border-bottom: 1px solid black;
      cursor: pointer;
    }
  }
</style>