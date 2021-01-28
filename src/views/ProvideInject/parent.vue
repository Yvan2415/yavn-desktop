<!-- 单向数据流-->
<template>
  <div class="parent">
    <h3>父组件</h3>
    <h4>标题: {{ title }}</h4>
    <hr>
    <child></child>
  </div>
</template>

<script>
import Child from './child'
export default {
  name: 'parent',
  data() {
    return {
      title: '父组件传递过来的数据'
    }
  },
  components: {
    Child
  },
  provide() {
    return {
      info: {
        title: this.title,
        show: (value) => {
          console.log(value);
        }
      }
    }
  }
}
</script>

<style>

</style>