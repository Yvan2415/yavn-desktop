<template>
  <div class="child2">
    <h3>孙子组件</h3>
    <h4>title: {{ info.title }}</h4>
    <button class="button" @click="info.show('这是孙子组件')">Click</button>
  </div>
</template>

<script>
export default {
  name: 'Child2',
  inject: ['info']
}
</script>

<style>

</style>