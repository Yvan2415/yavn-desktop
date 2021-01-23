<!--
 * @Author: yvan fang
 * @Date: 2021-01-22 09:00:00
 * @LastEditTime: 2021-01-13 15:36:14
 * @LastEditors: your name
 * @description 组件间通信
 * @description 父组件通过props将数据传给子组件, 子组件通过$emit事件, 出发父组件的方法, 通知父组件更新数据
-->
<template>
  <div class="child">
    <h2>我是子组件</h2>
    <h3>父组件传进来的数据</h3>
    <h4>{{info.name}}-----{{info.age}}</h4>
    <input v-model="newInfo" placeholder="输入姓名和年龄,用逗号隔开" class="input" @keydown.enter="change">
    <button class="button" @click="change">改变</button>
  </div>
</template>
<script>
  export default{
    name: 'Child',
    data() {
      return {
        newInfo: ''
      }
    },
    props: {
      info: {
        type: Object,
        required: true
      }
    },
    methods: {
      change() {
        let [name, age] = this.newInfo.split(',');
        this.$emit('changeInfo', name, age);
      }
    }
  }
</script>
<style lang="scss" scoped> 
  .button{
    width: 100px;
    height: 40px;
    line-height: 40px;
    background-color: cadetblue;
    color: white;
    margin-left: 30px;
    border: none;
    border-radius: 10px;
    outline: none;
    &:active{
      background-color: rgb(95, 158, 160, 0.5);
    }
  }
</style>