<!--
 * @Author: yvan fang
 * @Date: 2021-01-22 09:00:00
 * @LastEditTime: 2021-01-13 15:36:14
 * @LastEditors: your name
 * @description 组件间通信
-->
<template>
  <div class="child">
    <h5>这是通过attrs传过来的,除去style,class,props</h5>
    <h4>放在Props里面的属性: age: {{age}} --- type: {{type}}</h4>
    <hr>
    <input v-model="newInfo" placeholder="输入姓名和年龄,用逗号隔开" class="input" @keydown.enter="change">
    <button class="button" @click="change">改变</button>
  </div>
</template>
<script>
  export default{
    name: 'Child2',
    data() {
      return {
        newInfo: ''
      }
    },
    props: {
      age: {
        type: [Number, String],
        default: 0
      },
      type: {
        type: String,
        default: ''
      }
    },
    methods: {
      change() {
        console.log("执行change");
        let [name, age] = this.newInfo.split(',');
        this.$listeners.change(name, age);
      }
    },
    mounted() {
      // this.$listeners.change();
      // this.$listeners.update(); //this.$listeners.update is not a function
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