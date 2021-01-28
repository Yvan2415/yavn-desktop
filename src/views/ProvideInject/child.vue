<template>
  <div class="child">
    <h3>子组件1</h3>
    <h5>title: {{ info.title }}</h5>
    <button class="button" @click="info.show('这是一级子组件触发的')">Click</button>
    <hr>
    <child2></child2>
  </div>
</template>

<script>
import Child2 from './child2'
export default {
  name: 'child',
  inject: ['info'],
  mounted() {
    console.log(this.info)
  },
  components: {
    Child2
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