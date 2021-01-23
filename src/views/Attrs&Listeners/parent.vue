<!--
 * @Author: yvan fang
 * @Date: 2021-01-22 09:00:00
 * @LastEditTime: 2021-01-13 15:36:14
 * @LastEditors: your name
 * @description 组件间通信
 * @description 
 父组件传的attribute给子组件, 如果子组件没有props接收, 则全部放在$attrs(除了style,class)里面, 然后通过$attrs可以传给孙组件
 父子间的方法传给子组件, 子组件会放在$listeners里面, 通过v-on="$listeners"传给孙组件, 孙组件可以通过this.$listeners执行这些方法
-->
<template>
  <div class="parent">
    <h2>父组件</h2>
    <h3>name: {{obj.name}} --- age: {{obj.age}} --- type: {{obj.type}}</h3>
    <hr>
    <child v-bind="obj" @change="change" @update.native='update'></child>
  </div>
</template>
<script>
import Child from './child'
export default{
  name: 'Parent',
  data() {
    return {
      obj: {
        name: 'jack',
        age: 22,
        type: 'student'
      }
    }
  },
  components: {
    Child
  },
  methods: {
    change(name, age) {
      console.log('this is change method');
      this.obj.name = name;
      this.obj.age = age;
    },
    update() {
      console.log('this is update method');
    }
  }
}
</script>
<style lang="scss" scoped> 

</style>