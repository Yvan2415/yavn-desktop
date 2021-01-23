<!--
 * @Author: yvan fang
 * @Date: 2021-01-22 09:00:00
 * @LastEditTime: 2021-01-13 15:36:14
 * @LastEditors: your name
 * @description 组件间通信
-->
<template>
  <div class="child">
    <h2>子组件</h2>
    <h4>放在Props里面的属性: name: {{name}}</h4>
    <hr>
    <h2>子组件2</h2>
    <child2 v-bind="$attrs" v-on="$listeners"></child2>
  </div>
</template>
<script>
import Child2 from "./child2"
export default{
  name: 'Child',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  mounted() {
    console.log("1111")
    console.log(this.$attrs);
  },
  components: {
    Child2
  }
}
</script>
<style lang="scss" scoped> 

</style>