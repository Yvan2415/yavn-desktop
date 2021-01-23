<!--
 * @Author: yvan fang
 * @Date: 2021-01-22 09:00:00
 * @LastEditTime: 2021-01-13 15:36:14
 * @LastEditors: your name
 * @description 组件间通信
-->
<template>
  <div class="parent">
    <h2>Props父组件</h2>
    <h5>姓名: {{obj.name}} ---- 年龄: {{obj.age}}</h5>
    <hr>
    <h3>子组件:</h3>
    <child :info="obj" @changeInfo="changeInfo"></child>
  </div>
</template>
<script>
import child from './child'
export default{
  name: 'Parent',
  data() {
    return {
      obj: {
        name: 'yvan',
        age: '22'
      }
    }
  },
  methods: {
    changeInfo(name, age) {
      this.obj.name = name;
      this.obj.age = age;
    }
  },
  components: {
    child
  }
}
</script>
<style lang="scss" scoped> 

</style>